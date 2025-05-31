import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup/signup.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from '../services/appService/generalApiService';
import { api } from '../api.endpoints';
import { NotificationService } from '../notification.service';
import { UserdialogoutComponent } from '../general/userdialogout/userdialogout.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signupwizardstepthree',
  templateUrl: './signupwizardstepthree.component.html',
  styleUrls: ['./signupwizardstepthree.component.css']
})
export class SignupwizardstepthreeComponent implements OnInit {
  pkgForm: FormGroup;
  loggedInUser : any 
  currentUrl : string = ''
  constructor(
    public dialog: MatDialog,
    public signup_Service: SignupService,
    private fb: FormBuilder,
    private router: Router,
    private cdr:ChangeDetectorRef,
    private translateService :TranslateService,
    private _apiService:GeneralApiService,
    private _notificationService :NotificationService
  ) { }

  initpkgForm() {
    this.pkgForm = this.fb.group({
      'packageId': new FormControl(),
      'stripePriceId': new FormControl()
    });
  }

  packages: any;
  records: any;
  counter: number = 0;
  isYearly: boolean = true;
  ngOnInit(): void {
     

    this.currentUrl = this.router.url

    var user = localStorage.getItem("userData")
    if(user) this.loggedInUser = JSON.parse(user);
    
    
    // if(this.currentUrl == '/user/plans')
    //   {
    //     var row = document.getElementById("row")
    //     var div= document.createElement("div")
    //     div.classList.add("col-3")
    //     row.insertBefore(div, row.firstChild);
    //     var div2 = document.getElementById("col-12")
    //     div2.classList.remove("col-xl-12")
    //     div2.classList.remove("col-lg-12")
    //     div2.classList.add('col-9')
    //   }
    
    
    this.cdr.detectChanges()
    
    
    
    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })

    if(!this.loggedInUser)
      {
        this.records = this.signup_Service.signupData.data.packagesList;
        this.records = this.records.map((item) => {
          let pkg = item.name+item.totalDays;
          var details = "";
          switch(pkg) {
            case "SCORECARD30":
                details = `Closed Order Management#
                          Six Sigma Methodology#
                          360° Review System#
                          Full-Scope Evaluations#
                          Performance Analytics#
                          Comparison Dashboards#
                          Statistical Insights#
                          Advanced Reporting#
                          Vendor Onboarding`;
                break;
              case "SCORECARD365":
                details = `Closed Order Management#
                          Six Sigma Methodology#
                          360° Review System#
                          Full-Scope Evaluations#
                          Performance Analytics#
                          Comparison Dashboards#
                          Statistical Insights#
                          Advanced Reporting#
                          Vendor Onboarding`;
                break;
              case "PO MANAGER30":
                details = `Open Order Oversight#
                          360° Review System#
                          Open Order Analytics#
                          Statistical Insights#
                          Advanced Reporting#
                          Vendor Onboarding`;
                break;
              case "PO MANAGER365":
                details = `Open Order Oversight#
                          360° Review System#
                          Open Order Analytics#
                          Statistical Insights#
                          Advanced Reporting#
                          Vendor Onboarding`;
                break;
              case "COMPLETE30":
                details = `Open and Closed Orders#
                          All Features in ScoreCard (Closed Order Management)#
                          All Features in PO Manager (Open Order Oversight)`;
              case "COMPLETE365":
                details = `Open and Closed Orders#
                          All Features in ScoreCard (Closed Order Management)#
                          All Features in PO Manager (Open Order Oversight)`;
                break;
            
          }
          return {
            ...item,
            details: details,
            
          };
        });
        console.log(this.records);

        this.packages = this.records ? this.records.filter((x) => { return x.totalDays === 365 }) : [];
      } else {
          this._apiService.get(api.signUp)
          .subscribe((res: any) => {
            this.records = res.data.packagesList;
            this.records = this.records.map((item) => {
              let pkg = item.name+item.totalDays;
              var details = "";
              switch(pkg) {
                case "SCORECARD30":
                details = `Closed Order Management#
                          Six Sigma Methodology#
                          360° Review System#
                          Full-Scope Evaluations#
                          Performance Analytics#
                          Comparison Dashboards#
                          Statistical Insights#
                          Advanced Reporting#
                          Vendor Onboarding`;
                break;
              case "SCORECARD365":
                details = `Closed Order Management#
                          Six Sigma Methodology#
                          360° Review System#
                          Full-Scope Evaluations#
                          Performance Analytics#
                          Comparison Dashboards#
                          Statistical Insights#
                          Advanced Reporting#
                          Vendor Onboarding`;
                break;
              case "PO MANAGER30":
                details = `Open Order Oversight#
                          360° Review System#
                          Open Order Analytics#
                          Statistical Insights#
                          Advanced Reporting#
                          Vendor Onboarding`;
                break;
              case "PO MANAGER365":
                details = `Open Order Oversight#
                          360° Review System#
                          Open Order Analytics#
                          Statistical Insights#
                          Advanced Reporting#
                          Vendor Onboarding`;
                break;
              case "COMPLETE30":
                details = `Open and Closed Orders#
                          All Features in ScoreCard (Closed Order Management)#
                          All Features in PO Manager (Open Order Oversight)`;
              case "COMPLETE365":
                details = `Open and Closed Orders#
                          All Features in ScoreCard (Closed Order Management)#
                          All Features in PO Manager (Open Order Oversight)`;
                break;
                
              }
              return {
                ...item,
                details: details,
                
              };
            });
            console.log(this.records);
            this.packages = this.records ? this.records.filter((x) => { return x.totalDays === 365 }) : [];
            this.cdr.detectChanges();            
        })
      }

        
      
    this.initpkgForm();
  }

  pkg_toggle(event: Event): void {
   
    this.isYearly = (event.target as HTMLInputElement).checked; // Update the state
    
    this.counter = this.counter + 1;
    if (this.counter % 2 === 0) {
      this.packages = this.records ? this.records.filter((x) => x.totalDays === 365) : [];
    } else {
      this.packages = this.records ? this.records.filter((x) => x.totalDays === 30) : [];
    }
  }

  openDialogupgrade(data: any) {
    let paramData = {
      tenantId: this.loggedInUser.tenantID,
      stripPriceId: data
    }
    this._apiService.isCompareLoader$.next(true)
    this._apiService.postWithParams(api.subscriptionRecreate, paramData)
      .subscribe((res: any) => {
        this.loggedInUser.stripePriceID = data
        this.loggedInUser.roleID = res.data.roleId
        this.loggedInUser.roleName = res.data.name
        this.loggedInUser.isCancelled = false;
        this._apiService.user$.next(this.loggedInUser);
        this._apiService.isCompareLoader$.next(false)
        var rememberMe = localStorage.getItem("rememberMe")
        localStorage.removeItem('userData')
        if (rememberMe) {
          localStorage.removeItem("rememberMeUserData")
          localStorage.setItem("rememberMeUserData", JSON.stringify(this.loggedInUser))
        }

        localStorage.setItem('userData', JSON.stringify(this.loggedInUser))

        this._notificationService.push(res.message, 1)

        switch (res.data.roleId) {
          case 12:
            window.location.href = '/user/vendor/vendorscore';
            break;
          case 8:
          case 10:
          case 13:
          case 14:
            window.location.href = '/admin/pouserdashboard';
            break;
          default:
            window.location.href = '/user/dashboard';
            break;
        }

      }, (e: any) => this._apiService.isCompareLoader$.next(false))

  }


  getStarted(pkgid: number, priceID: string, mode: number) {
    if(this.loggedInUser && this.loggedInUser.isCancelled === true){
      this.openDialogupgrade(priceID)
      return
    }
    let selectedPackage =  this.records ? this.records.filter((x) => { return x.pkgId == pkgid })[0] : [];
    
    let dialogRef = this.dialog.open(UserdialogoutComponent, {
      data: {
        height: '75%',
        width: '100%',
        showWidht: true,
        yesBtn: 'Confirm & Continue',
        noBtn: 'Cancel',
        heading: "Confirm Your Subscription",
        message: `
        <div style="text-align: left; max-width: 700px; margin: 0 auto;">
    <p>
      Thank you for choosing the 
      <span style="color: red;"><strong>${selectedPackage?.name}</strong></span> 
      product. Please review the important information below before proceeding:
    </p>

   <p style="text-align: left !important;"><strong>Free Trial:</strong> Enjoy a one-month free trial. After that, your credit card will be automatically charged unless you cancel before the trial ends.</p>

   <p style="text-align: left !important;"><strong>No Refunds:</strong> Once subscribed, cancellations are non-refundable. Please confirm your selection carefully.</p>

   <p style="text-align: left !important;"><strong>Plan Changes:</strong> Downgrading your subscription during the term (e.g., Complete to PO Manager or ScoreCard) is not allowed.</p>

   <p style="text-align: left !important;"><strong>Auto-Renewal:</strong> Your subscription will automatically renew unless you cancel before the renewal date.</p>

<p style="font-size: 14px; color: #333; text-align: left; margin-top: 20px;">
  Your subscription will follow the terms outlined in our
  <a href="javascript:void(0)" (click)="openLegalDialog('Subscription Agreement')" style="color: #007bff; text-decoration: underline;">Subscription Agreement</a>,
  <a href="javascript:void(0)" (click)="openLegalDialog('Terms & Conditions')" style="color: #007bff; text-decoration: underline;">Terms & Conditions</a>, and
  <a href="javascript:void(0)" (click)="openLegalDialog('Privacy Policy')" style="color: #007bff; text-decoration: underline;">Privacy Policy</a>.
  which you have previously reviewed and agreed to.
</p>
  </div>

          `,
      },
      panelClass: 'custom-dialog-container'
    });
    
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res != null) {
        let isFreeTrial = 0;
        let isGetStarted = 0;
        if (mode === 1) {
          isGetStarted = 1;
          isFreeTrial = 0;
        } else {
          isGetStarted = 0;
          isFreeTrial = 1;
        }
        this.signup_Service.SignupDTO.packageId = +pkgid;
        this.signup_Service.SignupDTO.stripePriceID = priceID;
        this.signup_Service.SignupDTO.isGetStarted = isGetStarted === 1 ? true : false;
        this.signup_Service.SignupDTO.isFreeTrial = isFreeTrial === 1 ? true : false;
        this.router.navigate(['/signupwizardstepfour']);
      } 
    });
    
  }

}