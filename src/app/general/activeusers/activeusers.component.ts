import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { api } from 'src/app/api.endpoints';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from 'src/app/modules/components/confirm-dialog/confirm-dialog.component';
import { UserdialogoutComponent } from '../userdialogout/userdialogout.component';


@Component({
  selector: 'app-activeusers',
  templateUrl: './activeusers.component.html',
  styleUrls: ['./activeusers.component.css']
})
export class ActiveusersComponent implements OnInit {
  @ViewChild('reviewModal') reviewModal!: TemplateRef<any>; // Reference to the modal template
  loggedInUser : any 
  isUpdated : any = true;
  update :any = true;
  content: string = ''; 
  val_true: any = true;
  val_false: any = false;

  constructor(
            public dialog: MatDialog,
            private modalService: NgbModal,
            private _apiService:GeneralApiService,
            private _notificationService:NotificationService,
            private translateService :TranslateService,
            private cdr : ChangeDetectorRef) { }

            

  ngOnInit(): void {
    var user = localStorage.getItem('userData')
    if(user)
      this.loggedInUser = JSON.parse(user)
      this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
      
    })
  }

  getProjectsUrl:string = api.getActiveUser
  poRowcolumns = [
    {
      def: 'firstName',
      name: 'Name',
      key: 'name',
    },
    {
      def: 'roleName',
      name: 'Role',
      key: 'roleName',
    },
    {
      def: 'createdAt',
      name: 'Created At',
      key: 'createdAt',
    },
    {
      def: 'email',
      name: 'Email Address',
      key: 'email',
    },
    {
      def: 'renewalDate',
      name: 'Next Billing Date',
      key: 'renewalDate',
    },
    {
      def: 'cancel',
      name: 'Status',
      key: 'cancel',
      projection:true
    },
    
  ];


  // onToggleClick(eventData,data:any){
  //     this._apiService.isCompareLoader$.next(true)
  //     this._apiService.post(api.InactiveUser+"?UserId="+data.userId+"&isActive="+data.isActive,{})
  //     .subscribe((res:any)=>{
  //       if(data.isActive){   // agar true tha to disable hoga
  //         this._notificationService.push("User status is changed to inactive",1)
  //         }else{
  //           this._notificationService.push("User status is changed to active",1)
  //       }
  //       this.isUpdated = !this.isUpdated
  //       this._apiService.isCompareLoader$.next(false)
  //     },
  //     (err:any)=>{
  //       eventData.source.checked = true;
  //       this._apiService.isCompareLoader$.next(false)
  //     })
  //   }

  

  onToggleChange(event: any, data: any) {
    let originalRadioState = event.value; // Store the original state of the radio button
    let modalData   = {};

    if(data.roleName.includes("Vendor")){
      modalData   = {
        height: '75%',
        width: '40%',
        yesBtn: event.value === false ?'Deactivate Now':'Reactivate Account',
        noBtn: event.value === false ?'Keep Active':'Keep Inactive',
        heading: event.value === false ? "Deactivate Vendor Account" : "Reactivate Vendor Account",
        message: event.value === false ? `<p>Please note the following important information about deactivating this vendor account:</p> 
          <p><strong>Immediate Deactivation:</strong>The vendor will lose access to the system immediately, and their account will be disabled.</p>
          <p>Please choose your preferred action below.</p>`:`<p>You are reactivating a vendor account with system access.</p>
          <p><strong>Free of Charge:</strong> This account will remain free of charge unless otherwise specified.</p>
          <p><strong>Ongoing Access:</strong> Once reactivated, the account will stay active until you choose to deactivate it again.</p>
          <p>By proceeding, you confirm that you understand and agree to these terms.</p>
          `,
      };
    } else {
      modalData   = {
        height: '75%',
        width: '40%',
        yesBtn: event.value === false ?'Deactivate Now':'Reactivate Account',
        noBtn: event.value === false ?'Keep Active':'Keep Inactive',
        heading: event.value === false ? "Deactivate User Account" : "Reactivate User Account",
        message: event.value === false ? `<p>Please note the following important information about deactivating this user account: </p>
          <p><strong>No Refund: </strong>Deactivation will forfeit any remaining subscription time. No refunds will be issued.</p>
          <p><strong>Immediate Termination: </strong>This user's access will be revoked immediately upon Deactivation.</p>
          <p>Please choose your preferred action below.</p>
        ` : `<p>You are reactivating a user account at <strong>$10 per month</strong>.</p>
          <p><strong>Automatic Monthly Charge:</strong> Your card will be charged $10 monthly on the same date as your original subscription.</p>

          <p><strong>Ongoing Subscription:</strong> This subscription will remain active until you cancel it.</p>

          <p>By proceeding, you confirm and agree to these terms.</p>
        `,
      };
    }

    let dialogRef = this.dialog.open(UserdialogoutComponent, {
      data: modalData
    });
    
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res === null || res === undefined) {
        // If the dialog is closed without confirming (cancelled), restore the radio state to the original value
        // event.value = originalRadioState;
        // if (event.value === true) {
        //   // If "Renew" is selected (true), set isActive to false
        //   data.isActive = false;
        //   console.log('aa: ' + data.isActive);
        // } else if (event.value === false) {
        //     // If "Cancel" is selected (false), set isActive to true
        //     data.isActive = true;
        //     console.log('bb: ' + data.isActive);
        //     event.source.checked = originalRadioState === true;
        // }

        // Manually reset the radio button (to roll back the value)
        // if (originalRadioState === false) {
        //   data.isActive = true;
        //   console.log()
        // } else {
        //   data.isActive = false;
        // }
        // this.cdr.detectChanges()
        location.reload()
        return;
      } else {
        // Proceed with the API call if the user confirmed the action
        this._apiService.isCompareLoader$.next(true);
    
        const isVendor = data.roleName?.toLowerCase().includes('vendor');
        const entity = isVendor ? 'Vendor' : 'User';
        const status = event.value === false ? 'Inactive' : 'Active';
        const message = `${entity} account has been set to ${status}.`;
    
        // Call the API to change user status
        this._apiService.get(`${api.superAdminActiveDeactiveUser}/${data.userId}/${event.value}`)
          .subscribe(
            (res: any) => {
              this._apiService.isCompareLoader$.next(false);
              this._notificationService.push(message, 1);
              setTimeout(function() {
                location.reload();
              }, 2000);
            },
            (e: any) => {
              // Handle error case (failed to update)
              this._apiService.isCompareLoader$.next(false);
              // Restore radio button to the original state if there is an error
              event.value = originalRadioState;
              this._notificationService.push("Failed to update status, reverting changes.", 2);
            }
          );
      }
    });


}

cancelUser(){
  
    // this._apiService.isCompareLoader$.next(true);

    // const message = event.value === false ? "User status is changed to Cancel" : "User status is changed to Renew";

    // this._apiService.get(`${api.superAdminActiveDeactiveUser}/${data.userId}/${event.value}`)
    // .subscribe((res: any) => {
    //     this._apiService.isCompareLoader$.next(false);
    //     this._notificationService.push(message, 1);

        
    // }, (e: any) => {
    //     this._apiService.isCompareLoader$.next(false);
    // });
}

openModal() {
    this.modalService.open(this.reviewModal); // Open the modal directly
}

// sendEmailTemplate(userId: string) {
//   // Implement your email template logic here
//   console.log(`Sending email template for user ID: ${userId}`);
//   // Example API call to send the email template
//   this._apiService.post(`${api.sendEmailTemplate}`, { userId })
//   .subscribe(response => {
//       console.log('Email sent successfully:', response);
//   }, error => {
//       console.error('Error sending email:', error);
//   });
// }


}






