import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { api } from 'src/app/api.endpoints';
import { ConfirmDialogComponent } from 'src/app/modules/components/confirm-dialog/confirm-dialog.component';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { CancelplanDialogComponent } from '../cancelplan-dialog/cancelplan-dialog.component';
import { UpgradesubscriptionDialogComponent } from '../upgradesubscription-dialog/upgradesubscription-dialog.component';
import {OkdialogcomponentComponent} from '../okdialogcomponent/okdialogcomponent.component';
import { TranslateService } from '@ngx-translate/core';
import { UserdialogoutComponent } from '../userdialogout/userdialogout.component';

@Component({
  selector: 'app-myplan',
  templateUrl: './myplan.component.html',
  styleUrls: ['./myplan.component.css']
})
export class MyplanComponent implements OnInit {
  shouldDisableButton: boolean = true;
  loggedInUser: any
  expiryDate : any
  cards: any[]
  title = 'angularbootstrap';
  inputnumber = 1;
  counter = 1
  packages: any[];
  isYearly: boolean = false;
  userCurrentPkg: boolean = false;
  plus() {
    this.inputnumber = this.inputnumber + 1;
  }
  minus() {
    if (this.inputnumber != 1) {
      this.inputnumber = this.inputnumber - 1;
    }

  }

  constructor(public dialog: MatDialog,
    private _apiService: GeneralApiService,
    private _notificationService: NotificationService,
    private router: Router,
    private translateService: TranslateService,
    private cdr: ChangeDetectorRef) { }

  openDialog() {
    let dialogRef = this.dialog.open(UserdialogoutComponent,
      {
        data: {
          height: '75%',
          width: '80%',
          yesBtn: 'Yes',
          noBtn: 'No',
          heading: 'Confirmation!',
          message: `
            <p>We’re sorry to see you go! Before you proceed, please be aware of the following:</p>
            <p><strong>No Refund Policy:</strong> As per our terms and conditions, we do not offer refunds for canceled subscriptions. </p>
            <p><strong>Immediate Service Termination:</strong> Your access to the service will stop immediately upon cancellation.</p>
            <p><strong>Warning:</strong></p>
            <p>All user & vendor subscriptions bought under this id will also be deactivated.</p>
            <p>Are you sure you want to cancel your subscription?</p>
          `,
        },
        panelClass: 'custom-dialog-container'
      });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res !== null) {
        this._apiService.isCompareLoader$.next(true)
        this._apiService.postWithParams(api.subscriptionCancel, { tenantId: this.loggedInUser.tenantID })
          .subscribe((res: any) => {
            this._apiService.isCompareLoader$.next(false)
            this._notificationService.push(res.message, 1)
            this.router.navigate(['/login'])
            this.cdr.detectChanges();
          }, (e: any) => {
            this._notificationService.push("Something went wrong",2)
            this._apiService.isCompareLoader$.next(false);
          
        })
      }

    });

  }

  openDialogupgrade(data: any,btnDisabled:any) {
    if(btnDisabled){
      let filterCurrentPlan = this.cards ? this.cards.filter((x) => { return x.stripePriceId === this.loggedInUser.stripePriceID }) : [];
      
      if(
        (filterCurrentPlan.length > 0) && (data.name == "COMPLETE" && filterCurrentPlan[0].name == "COMPLETE" && data.totalDays == 30)
        || (filterCurrentPlan.length > 0) && ((filterCurrentPlan[0].name == "PO MANAGER" || filterCurrentPlan[0].name == "SCORECARD") && (data.name == "PO MANAGER" ||  data.name == "SCORECARD" || data.name == "COMPLETE") && data.totalDays == 30)
      )
      {
        let dialogRef = this.dialog.open(OkdialogcomponentComponent,
          {
            data: {
              height: '75%',
              width: '80%',
              message: `<p><strong>No Downgrades In between Contract Term:</strong> If you are subscribed to a yearly plan, 
              downgrading to monthly plan during the contract period is not allowed.</p> 
              <p><strong>Change at the End of Term:</strong> If you wish to downgrade from Yearly payment plan to a Monthly payment plan, please cancel your subscription and re-subscribe to the product using monthly plan. No refunds will be issued, or you can choose to wait until the current subscription is up for renewal, cancel it and then subscribe to the product with a monthly payment plan.</p>
              <p><strong>Legal Agreement: NOT REQUIRED AS THEY HAVE ALREADY AGREED TO TERMS OF USAGE & POLICY</strong></p>`,
              heading: '',
              buttonText:'Acknowledge & Proceed'
            },
            panelClass: 'custom-dialog-container'
          });
          dialogRef.afterClosed().subscribe((res: any) => {
            if (res !== null) {
              
            }
          });
      }

    } else {
      let dialogRef = this.dialog.open(UpgradesubscriptionDialogComponent,
        {
          data: {
            selected_plan:data,
            packages: this.cards,
            loggedInUser: this.loggedInUser
          },
          panelClass: 'custom-dialog-container'
        });
        dialogRef.afterClosed().subscribe((res: any) => {
          if (res !== null) {
            let paramData = {
              tenantId: this.loggedInUser.tenantID,
              stripPriceId: data.stripePriceId
            }
            this._apiService.isCompareLoader$.next(true)
            this._apiService.postWithParams(api.subscriptionUpgrade, paramData)
              .subscribe((res: any) => {
                this.loggedInUser.isTrial = false;
                this.loggedInUser.stripePriceID = data.stripePriceId
                this.loggedInUser.roleID = res.data.roleId
                this.loggedInUser.roleName = res.data.name
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
        
                console.log("This message is displayed after 2 seconds.");
                setTimeout(() => {
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
              }, 5000);
                
        
        
              }, (e: any) => this._apiService.isCompareLoader$.next(false))
          }
        });
    }


  }

  pkg_toggle(data: any) {
    
    if (data != 'start') {
      this.counter = this.counter + 1;
    }
    if (this.counter % 2 === 0) {
      this.packages = this.cards ? this.cards.filter((x) => { return x.totalDays === 365 }) : [];
    } else {
      this.packages = this.cards ? this.cards.filter((x) => { return x.totalDays === 30 }) : [];
    }
  }

  ngOnInit(): void {

    this._apiService.isLanguageSelector$.subscribe((res: any) => {
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    var user = localStorage.getItem('userData')

    this._apiService.get(api.signUp)
      .subscribe((res: any) => {
        
        
        if (user)
          this.loggedInUser = JSON.parse(user);
      
 
        this._apiService.get(api.subscriptionGetExpiryDate+'/'+this.loggedInUser.tenantID)
        .subscribe((innerRes:any)=>{
          this.expiryDate = innerRes.expiryDate
          // this.cards = res.data.packagesList.filter((i:any) =>i.name != 'COMPLETE')
          this.cards = res.data.packagesList
          
          this.cards = this.cards.map((item) => {

            if(this.loggedInUser.stripePriceID == item.stripePriceId){
              if(item.totalDays == 365){
                this.userCurrentPkg = true;
              }
            }

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
              ...item, // Spread the existing item properties
              details: details, // Example of a new calculated column
              
            };
          });

          let filterCurrentPlan = this.cards ? this.cards.filter((x) => { return x.stripePriceId === this.loggedInUser.stripePriceID }) : [];
          if(filterCurrentPlan.length > 0 && filterCurrentPlan[0].totalDays == 365){
            this.isYearly = !this.isYearly;
            this.counter = this.counter + 1;
          }
          this.pkg_toggle('start')

        })
        
        
        // if(this.loggedInUser.roleID == 8){
        //   this.cards = this.cards ? this.cards.filter((x) => { return x.name === "PO MANAGER" }) : [];
        // }

      })

  }

  getMessage(){
    if(this.loggedInUser.isTrial)
    return  'CURRENT PACKAGE (TRIAL)'
    else 
    return  'CURRENT PACKAGE'
  }

  
}
