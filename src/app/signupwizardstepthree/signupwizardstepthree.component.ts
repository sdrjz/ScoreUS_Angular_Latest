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
              details = `6 Sigma and Continuous improvement methodology#
                        Multiple layer 360 Review mechanism#
                        Vendor, buyer, plant, material, commodity evaluation#
                        Multiple Analysis tools for performance#
                        Multiple Comparison charts for stakeholders#
                        Statistical data for your performance#
                        Various Reports for communication#
                        Vendor Account setup`;
              break;
            case "SCORECARD365":
              details = `6 Sigma and Continuous improvement methodology#
                        Multiple layer 360 Review mechanism#
                        Vendor, buyer, plant, material, commodity evaluation#
                        Multiple Analysis tools for performance#
                        Multiple Comparison charts for stakeholders#
                        Statistical data for your performance#
                        Various Reports for communication#
                        Vendor Account setup`;
              break;
            case "PO MANAGER30":
              details = `Multiple layer 360 Review mechanism#
                        Multiple Analysis tools for Open orders#
                        Multiple Comparison charts for vendors and buyers#
                        Statistical data for your open orders#
                        Various Reports for communication#
                        Vendor Account setup`;
              break;
            case "PO MANAGER365":
              details = `Multiple layer 360 Review mechanism#
                        Multiple Analysis tools for Open orders#
                        Multiple Comparison charts for vendors and buyers#
                        Statistical data for your open orders#
                        Various Reports for communication#
                        Vendor Account setup`;
              break;
            case "COMPLETE30":
              details = `6 Sigma and Continuous improvement methodology#
                        Multiple layer 360 Review mechanism#
                        Vendor, buyer, plant, material, commodity evaluation#
                        Multiple Analysis tools for open orders and performance#
                        Multiple Comparison charts for stakeholders – open orders and performance#
                        Statistical data for your open orders and performance#
                        Various open orders and performance Reports for communication#
                        Vendor Account setup for open orders and performance`;
            case "COMPLETE365":
              details = `6 Sigma and Continuous improvement methodology#
                        Multiple layer 360 Review mechanism#
                        Vendor, buyer, plant, material, commodity evaluation#
                        Multiple Analysis tools for open orders and performance#
                        Multiple Comparison charts for stakeholders – open orders and performance#
                        Statistical data for your open orders and performance#
                        Various open orders and performance Reports for communication#
                        Vendor Account setup for open orders and performance`;
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
                  details = `6 Sigma and Continuous improvement methodology#
                            Multiple layer 360 Review mechanism#
                            Vendor, buyer, plant, material, commodity evaluation#
                            Multiple Analysis tools for performance#
                            Multiple Comparison charts for stakeholders#
                            Statistical data for your performance#
                            Various Reports for communication#
                            Vendor Account setup`;
                  break;
                case "SCORECARD365":
                  details = `6 Sigma and Continuous improvement methodology#
                            Multiple layer 360 Review mechanism#
                            Vendor, buyer, plant, material, commodity evaluation#
                            Multiple Analysis tools for performance#
                            Multiple Comparison charts for stakeholders#
                            Statistical data for your performance#
                            Various Reports for communication#
                            Vendor Account setup`;
                  break;
                case "PO MANAGER30":
                  details = `Multiple layer 360 Review mechanism#
                            Multiple Analysis tools for Open orders#
                            Multiple Comparison charts for vendors and buyers#
                            Statistical data for your open orders#
                            Various Reports for communication#
                            Vendor Account setup`;
                  break;
                case "PO MANAGER365":
                  details = `Multiple layer 360 Review mechanism#
                            Multiple Analysis tools for Open orders#
                            Multiple Comparison charts for vendors and buyers#
                            Statistical data for your open orders#
                            Various Reports for communication#
                            Vendor Account setup`;
                  break;
                case "COMPLETE30":
                  details = `6 Sigma and Continuous improvement methodology#
                            Multiple layer 360 Review mechanism#
                            Vendor, buyer, plant, material, commodity evaluation#
                            Multiple Analysis tools for open orders and performance#
                            Multiple Comparison charts for stakeholders – open orders and performance#
                            Statistical data for your open orders and performance#
                            Various open orders and performance Reports for communication#
                            Vendor Account setup for open orders and performance`;
                case "COMPLETE365":
                  details = `6 Sigma and Continuous improvement methodology#
                            Multiple layer 360 Review mechanism#
                            Vendor, buyer, plant, material, commodity evaluation#
                            Multiple Analysis tools for open orders and performance#
                            Multiple Comparison charts for stakeholders – open orders and performance#
                            Statistical data for your open orders and performance#
                            Various open orders and performance Reports for communication#
                            Vendor Account setup for open orders and performance`;
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
        yesBtn: 'Acknowledge & Proceed',
        noBtn: 'Cancel',
        heading: "Confirmation",
        message: `
          <p>Thank you for choosing to subscribe to ${selectedPackage?.name}. Please take a moment to review the important information about your subscription:</p>
          <p>One Month Free Trial: Your subscription includes a one-month free trial. Your credit card will be automatically charged on the first day after the end of the free trial.</p>
          <p>No Cancellation Refund: Please be aware that once you subscribe, there will be no refunds if you choose to cancel your service.</p>
          <p>Subscription Downgrade: If you are subscribing to a yearly plan, please note that downgrading your subscription, such as switching from a Yearly license to a Monthly license and a Complete License to a PO Manager or Score Card license during the contract term are not allowed, and no refunds will be issued.</p>
          <p>Auto-Renewal and Auto-Charge: Your subscription will automatically renew at the end of the current billing period, and your credit card will be charged for the new term unless you cancel your subscription before the renewal date.</p>
          <p>By proceeding with your subscription, you acknowledge that you will review and agree to be bound by our Terms of Service and Privacy Policy on the next page.</p>
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