import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { SignupService } from '../services/signup/signup.service';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NotificationService } from '../notification.service';
import { GeneralApiService } from '../services/appService/generalApiService';
import { TranslateService } from '@ngx-translate/core';
import { UserdialogoutComponent } from '../general/userdialogout/userdialogout.component';
// import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { api } from 'src/app/api.endpoints';

interface plan {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signupwizardstepfour',
  templateUrl: './signupwizardstepfour.component.html',
  styleUrls: ['./signupwizardstepfour.component.css']
})
export class SignupwizardstepfourComponent implements OnInit {
  public currentDate = new Date();
  years :any[] = []
  expiry : any;
  selectedMonth : any;
  selectedYear : any;
  packages: any;
  months = [
    { value: '01', name: 'January' },
    { value: '02', name: 'February' },
    { value: '03', name: 'March' },
    { value: '04', name: 'April' },
    { value: '05', name: 'May' },
    { value: '06', name: 'June' },
    { value: '07', name: 'July' },
    { value: '08', name: 'August' },
    { value: '09', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' }
  ];
  paymentForm:FormGroup;
  isDateInvalid: boolean;
  constructor(
    public dialog: MatDialog,
    public signup_service: SignupService,
    private fb: FormBuilder,
    private _notificationService:NotificationService,
    private _apiService:GeneralApiService,
    private cdr : ChangeDetectorRef,
    private translateService :TranslateService
  ) {
    const maskConfig: Partial<IConfig> = {
      validation: false,
    };
   }

  initpaymentForm() {
    this.paymentForm = this.fb.group({
      'nameOnCard': ['', Validators.compose([Validators.required,])],
      'cardNo': ['', Validators.compose([Validators.required,])],
      'expiry': ['', Validators.compose([Validators.required,])],
      'cvv': ['', Validators.compose([Validators.required,Validators.pattern(/^\d{3,4}$/)])],
    });
	}

  ngOnInit(): void {
    this._apiService.get(api.signUp).subscribe((res:any)=>{
      this.packages = res.data.packagesList;
    });

    const currentYear = this.currentDate.getFullYear();
    this.selectedMonth = this.currentDate.getMonth();
    this.selectedYear = currentYear
    for (let i = 0; i <= 20; i++) {  // Adjust range as needed
      this.years.push((currentYear + i).toString());
    }

    this.initpaymentForm();
  }
  

  onSubmit(){
    if(this.isDateInvalid === true)
    {
      this._notificationService.push("Invalid expiration",2);
      return
    }

    
    this.paymentForm.get("expiry").setValue(this.expiry)
    if(this.paymentForm.controls['nameOnCard'].value =="")
    {
      this._notificationService.push('Name On Card Required',2)
      return
    }

    if(this.paymentForm.controls['cardNo'].value =="")
    {
      this._notificationService.push('Card No Required',2)
      return
    }

    if(this.paymentForm.controls['expiry'].value =="")
    {
      this._notificationService.push('Invalid expiration',2)
      return
    }

    if(this.paymentForm.controls['cvv'].value =="")
    {
      this._notificationService.push('CVV Required',2)
      return
    }

    if (this.paymentForm.invalid) {
      this._notificationService.push("Form data is invalid", 2)
      return
    }

    const selectedPackage = this.packages ? this.packages.filter((x) => { return x.pkgId == this.signup_service.SignupDTO.packageId })[0] : [];

    let subscriptionPlan = "";
    if(selectedPackage){
      subscriptionPlan  = (selectedPackage.totalDays == 365)?'Yearly':'Monthly';
    }
    
    const currentDate = new Date();
    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(currentDate.getMonth() + 1);
    if (nextMonthDate.getDate() !== currentDate.getDate()) {
      nextMonthDate.setDate(0);
    }

    const nextMonthDatePlusOne = new Date(nextMonthDate);
    nextMonthDatePlusOne.setDate(nextMonthDate.getDate() + 1);

    const cardNo = this.paymentForm.value.cardNo;
    const lastFourDigits = cardNo.slice(-4);

    let dialogRef = this.dialog.open(UserdialogoutComponent, {
      data: {
        height: '75%',
        width: '100%',
        yesBtn: 'Confirm & Subscribe',
        noBtn: 'Cancel',
        heading: "Subscription Details",
        message: `
          <p>Product Selected: <strong>${selectedPackage?.name}</strong></p>
          <p>Subscription Plan: <strong>${subscriptionPlan}</strong></p>
          <p>Free Trial Period: 1 months until <strong>${nextMonthDate.toISOString().split('T')[0]}</strong></p>
          <p>First Billing Date: <strong>${nextMonthDatePlusOne.toISOString().split('T')[0]}</strong></p>
          <p>Subscription Fees: <strong>$${selectedPackage?.currentAmount}/${subscriptionPlan}</strong></p>
          <p>Payment Method: Card Ending in <strong>${lastFourDigits}</strong></p>
          <p>By confirming, you agree to the terms you have reviewed and wish to proceed with your subscription</p>
          `,
      },
      panelClass: 'custom-dialog-container'
    });
    
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res != null) {
        
        this.signup_service.submit_signup(this.paymentForm.value);
      } 
    });
  }


  /**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to valitors name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.paymentForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result =
			control.hasError(validationType) &&
			(control.dirty || control.touched);
		return result;
	}

  updateExpiry() {
    if (this.selectedMonth && this.selectedYear) {
      this.expiry = `${this.selectedMonth}/${this.selectedYear.slice(-2)}`;
      this.checkExpiryDate();
    }
  }
  checkExpiryDate() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // Months are 0-indexed

    const selectedYear = parseInt(this.selectedYear, 10);
    const selectedMonth = parseInt(this.selectedMonth, 10);

    // Compare selected date with current date
    if (selectedYear < currentYear || (selectedYear === currentYear && selectedMonth < currentMonth)) {
      this.isDateInvalid = true;  // Set error if date is in the past
    } else {
      this.isDateInvalid = false; // Valid date
    }
  }
}