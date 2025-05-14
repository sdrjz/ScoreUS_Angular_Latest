import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { api } from 'src/app/api.endpoints';
import { referModel } from 'src/app/modal/referModel';
import { NotificationService } from 'src/app/notification.service';
import { PaymentComponent } from 'src/app/payment/payment.component';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { ReferafriendDialogComponent } from '../referafriend-dialog/referafriend-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { UserdialogoutComponent } from '../userdialogout/userdialogout.component';

@Component({
  selector: 'app-subsription-payment-inviteuser',
  templateUrl: './subsription-payment-inviteuser.component.html',
  styleUrls: ['./subsription-payment-inviteuser.component.css']
})

export class SubsriptionPaymentInviteuserComponent implements OnInit {
  selectedVendor: any | null
  selectedVendorForDropDown: any | null
  allVendors: any
  currentSelectedRole: any | null = null
  roles: any[]
  listVendor: any[] = []
  totalInvitationUser: any = 0
  loggedInUser: any
  isEdit: boolean = false;
  listReferFriend: any[] = []
  public id = 1
  editId = 0;
  alreadyExists:any = "";
  referData: any = {

  }


  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private _notificationService: NotificationService,
    private _apiService: GeneralApiService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private translateService: TranslateService) {
  }

  setReferData() {
    this.referData.id = this.id
    this.referData.name = ''
    this.referData.email = ''
    this.referData.companyName = ''
    this.referData.userName = ''
    this.referData.refCode = ''
    this.referData.createdBy = ''
    this.referData.createdAt = ''
    this.referData.updatedAt = ''
    this.referData.updatedBy = ''
    this.referData.isDeleted = false
    this.referData.inviteDate = ''
    this.referData.subscriptionDate = ''
    this.referData.expiryDate = ''
    this.referData.roleId = 0
    this.referData.roleName = ''
    this.referData.fullName = ''
  }


  openDialog() {
    this.dialog.open(ReferafriendDialogComponent);
  }


  ngOnInit(): void {
    this._apiService.isLanguageSelector$.subscribe((res: any) => {
      this.translateService.use(res)
      this.cdr.detectChanges()
    })

    this.route.queryParams.subscribe((res: any) => {
      this.totalInvitationUser = res.id
    })

    var user = localStorage.getItem('userData')
    if (user)
      this.loggedInUser = JSON.parse(user);


    this._apiService.isCompareLoader$.next(true)
    this.getLoadData()


    this.createForm();


  }

  getLoadData() {

    Promise.all([
      this._apiService.get(api.role).toPromise(),
      this._apiService.get(api.getAllVendor + '/' + this.loggedInUser.tenantID).toPromise(),
    ]).then((res: any) => {
      this._notificationService.push("Roles data retrieved", 1)
      this.roles = res[0].data
      if(this.loggedInUser.roleID == 7){
        this.roles = this.roles.filter((i: any) => i.name.toLowerCase() === 'user scorecard' || i.name.toLowerCase() === 'vendor scorecard')
      }else if(this.loggedInUser.roleID == 8){
        this.roles = this.roles.filter((i: any) => i.name.toLowerCase() === 'user po manager' || i.name.toLowerCase() === 'vendor po manager')
      }else if(this.loggedInUser.roleID == 6){
        // this.roles = this.roles.filter((i: any) => i.name.toLowerCase() === 'user score card + po manager' 
        this.roles = this.roles.filter((i: any) => i.name.toLowerCase() === 'user complete' 
        || i.name.toLowerCase() === 'vendor complete'        
        )
      }

      this.listVendor = res[1].data
      localStorage.setItem('listVendor', JSON.stringify(res[1].data))
      this.angForm.controls['firstName'].disable();
      this.angForm.controls['email'].disable();

    }).finally(() => this._apiService.isCompareLoader$.next(false))



  }

  onRoleSelection(data: any) {
    this.angForm.controls["roleId"].setValue(data.target.value)
    this.currentSelectedRole = data.target.value
    if (this.currentSelectedRole == 12 || this.currentSelectedRole == 13 || this.currentSelectedRole == 14) {
      this.angForm.controls['firstName'].setValidators(null)
      this.angForm.controls['firstName'].disable();
      this.angForm.controls['email'].disable();
    } else if (this.currentSelectedRole == null || this.currentSelectedRole == '') {
      this.angForm.controls['firstName'].disable();
      this.angForm.controls['email'].disable();
      this.angForm.controls['firstName'].setValue('');
      this.angForm.controls['email'].setValue('');
    } else {
      this.angForm.controls['firstName'].setValidators(Validators.required)
      this.angForm.controls['firstName'].enable();
      this.angForm.controls['email'].enable();
      this.angForm.controls['firstName'].setValue('');
      this.angForm.controls['email'].setValue('');

    }
    this.cdr.detectChanges()

  }

  angForm: FormGroup = new FormGroup({
    id: new FormControl(this.id),
    firstName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[A-Za-zA-Z-a-z0-9._%+-]+@[A-Za-zA-Za-z0-9.-]+\\.[a-z]{2,4}$")]),
    roleId: new FormControl('', [Validators.required]),
    vendorCode: new FormControl('')
  });
  angForm2: FormGroup;

  createForm() {
    this.angForm = new FormGroup({
      id: new FormControl(this.id),
      firstName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[A-Za-zA-Z-a-z0-9._%+-]+@[A-Za-zA-Za-z0-9.-]+\\.[a-z]{2,4}$")]),
      roleId: new FormControl('', [Validators.required]),
      vendorCode: new FormControl('')
    })
    this.setReferData()
  }

  updateForm(data: referModel) {

    this.angForm = new FormGroup({
      id: new FormControl(data.id),
      firstName: new FormControl(data.fullName, [Validators.required]),
      email: new FormControl(data.email, [Validators.required, Validators.email, Validators.pattern("^[A-Za-zA-Z-a-z0-9._%+-]+@[A-Za-zA-Za-z0-9.-]+\\.[a-z]{2,4}$")]),
      roleId: new FormControl(data.roleId, [Validators.required]),
      vendorCode: new FormControl(data.name)
    })
  }

  onVendorSelection(data: any) {
    let listVendor = [...this.listVendor];
    this.selectedVendor = listVendor.filter((i: any) => i.id == data.target.value)[0]
    //  this.angForm.controls["id"].setValue(this.selectedVendor.id)
    this.angForm.controls["firstName"].setValue(this.selectedVendor.name)
    this.angForm.controls["email"].setValue(this.selectedVendor.email)
    this.angForm.controls['vendorCode'].setValue(this.selectedVendor.id);
    //  this.listVendor = JSON.parse(localStorage.getItem('listVendor'))
    this.cdr.detectChanges()
  }

  onSaveClick() {
    if (!this.angForm.valid) {
      this._notificationService.push('invalid data', 2)
      return
    }

    let index = -1;
    index = this.listReferFriend.findIndex((i: any) => i.email == this.angForm.controls['email'].value)
    if (index > -1) {
      this._notificationService.push("Can not insert same record twice", 2);
      return
    }


    // let obj = new referModel(this.id,this.loggedInUser.tenantID,'',0,0,'','',false,'','','','','','','',this.loggedInUser.firstName+' '+this.loggedInUser.lastName,+this.loggedInUser.roleID,'');
    // obj.fullName = this.angForm.controls['firstName'].value;
    // obj.email = this.angForm.controls['email'].value;
    // obj.roleId = this.angForm.controls['roleId'].value;
    // obj.name = this.selectedVendor?.id ? this.selectedVendor.id : ''  // taking vendorcode
    if (this.isEdit) {
      let obj = new referModel(this.editId, this.loggedInUser.tenantID, '', 0, 0, '', '', false, '', null, '', null, '', '', '', this.loggedInUser.firstName + ' ' + this.loggedInUser.lastName, +this.loggedInUser.roleID, '');
      obj.fullName = this.angForm.controls['firstName'].value;
      obj.email = this.angForm.controls['email'].value;
      obj.roleId = this.angForm.controls['roleId'].value
      obj.name = this.selectedVendor?.id ? this.selectedVendor.id : ''
      const index = this.listReferFriend.findIndex((i: any) => i.id == obj.id)
      this.listReferFriend[index] = obj
      this.isEdit = false
    } else {
      if (!(this.listReferFriend.length < this.totalInvitationUser)) {
        this._notificationService.push('can not add more then ' + this.totalInvitationUser + " members", 2)
        return
      }
      let obj = new referModel(this.id, this.loggedInUser.tenantID, '', 0, 0, '', '', false, '', null, '', null, '', '', '', this.loggedInUser.firstName + ' ' + this.loggedInUser.lastName, +this.loggedInUser.roleID, '');
      obj.fullName = this.angForm.controls['firstName'].value;
      obj.email = this.angForm.controls['email'].value;
      obj.roleId = +this.angForm.controls['roleId'].value
      obj.name = this.selectedVendor?.id ? this.angForm.controls['vendorCode'].value : ''
      this.listReferFriend.push(obj)
      this.id++;
    }
    this.selectedVendorForDropDown = null
    this.selectedVendor = null
    this.currentSelectedRole = null
    this.createForm()
    this.angForm.controls['firstName'].disable();
    this.angForm.controls['email'].disable();
  }

  onEditClick(data: any) {
    this.editId = data.id
    this.isEdit = true
    this.updateForm(data);
  }


  onDeleteClick(data: any) {
    this.listReferFriend = this.listReferFriend.filter((i: referModel) => i.id != data.id)
  }


  fieldIsDisable() {
    if (this.currentSelectedRole === null || this.currentSelectedRole == '') {
      return true
    }
    else if ([12, 13, 14].includes(this.currentSelectedRole)) {
      return true
    }
    else {
      return false
    }
  }

  onCancelClick() {
    this.createForm()
  }

  // onReferClick() {
  //   if (this.isEdit)
  //     return
  //   if (this.listReferFriend.length < 1) {
  //     this._notificationService.push("atleast 1 member should be added", 2)
  //     return
  //   }
  //   this._apiService.isCompareLoader$.next(true)
  //   console.log(this.listReferFriend);
  //   this._apiService.post(api.InviteUser, this.listReferFriend)
  //     .subscribe((res: any) => {
  //       this._apiService.isCompareLoader$.next(false)
  //       this._notificationService.push('User invited successfully', 1)
  //       this.listReferFriend = []
  //         , (err: any) => {
  //           this._apiService.isCompareLoader$.next(false)
  //           this._notificationService.push('Something went wrong', 2)
  //         }
  //     }, (err: any) => {
  //       this._apiService.isCompareLoader$.next(false)
  //       this._notificationService.push('Something went wrong abc', 2)
  //     }
  //   )
  // }
  // onReferClick() {
  //   console.log("onReferClick triggered");
  
  //   if (this.isEdit) {
  //     console.log("Edit mode, exiting.");
  //     return;
  //   }
  
  //   if (this.listReferFriend.length < 1) {
  //     console.log("No members to invite");
  //     this._notificationService.push("At least 1 member should be added", 2);
  //     return;
  //   }
  
  //   console.log("Preparing to send payload:", JSON.stringify(this.listReferFriend));
  
  //   this._apiService.isCompareLoader$.next(true);
  //   console.log("Payload:", JSON.stringify(this.listReferFriend));

  //   this._apiService.post(api.InviteUser, this.listReferFriend).subscribe({
  //     next: (res) => {
  //       console.log('Success:', res);

  //       this._notificationService.push("User invited successfully", 1);
  //       this._apiService.isCompareLoader$.next(false);
  //     },
  //     error: (err) => {
  //       console.error('Error:', err); // Check what error is logged
  //       this._apiService.isCompareLoader$.next(false);

  //     }
  //   });
    
  //   // this._apiService.post(api.InviteUser, this.listReferFriend).subscribe({
  //   //   next: (res: any) => {
  //   //     console.log("Response received:", res);
  //   //     this._apiService.isCompareLoader$.next(false);
  //   //     this._notificationService.push('User invited successfully', 1);
  //   //     this.listReferFriend = [];
  //   //   },
  //   //   error: (err: any) => {
  //   //     console.error("Error response received:", err);
  //   //     this._apiService.isCompareLoader$.next(false);
  //   //     this._notificationService.push(err.error || 'Something went wrong', 2);
  //   //   },
  //   //   complete: () => {
  //   //     console.log("API call completed.");
  //   //   }
  //   // });
  // }
  

  onReferClick() {
  
    if (this.isEdit) {
      return;
    }
  
    if (this.listReferFriend.length < 1) {
      this._notificationService.push("At least 1 member should be added", 2);
      return;
    }
  
  
    let dialogRef = this.dialog.open(UserdialogoutComponent, {
      data: {
        height: '75%',
        width: '40%',
        heading:  "Subscription Confirmation",
        message:  `<p>You are subscribing to our service as follows:</p>
                  <p><strong>User Accounts:</strong> You are subscribing to our service at $10 per month for each user account. Your credit card will be charged $10 per month automatically on the same date each month as your initial subscription. This subscription will continue until you cancel it.</p>
                  <p><strong>Vendor Accounts:</strong> You are subscribing to our service for a vendor account at no cost. There will be no charge for this subscription, and it will continue until you cancel it. </p>
                  <p>By proceeding, you acknowledge and agree to these terms.</p>`,
        yesBtn: "Acknowledge & Proceed",
        noBtn: "Cancel"
      }
    });
    
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res != null && res != undefined) {
        this._apiService.isCompareLoader$.next(true);

        this._apiService.post(api.InviteUser, this.listReferFriend).subscribe({
          next: (res:any) => {
            let showSuccess = false;
            this.alreadyExists = "";
            res.forEach((item) => {
              if(item.isError == false && showSuccess == false){
                showSuccess = true;
              }
              if(item.isError == true ) {
                this.alreadyExists += item.description+", "; 
              }
            });
            
            if(showSuccess){
              this._notificationService.push("Account bought successfully", 1);
            }

            this._apiService.isCompareLoader$.next(false);
            this.listReferFriend = [];
          },
          error: (err) => {
            console.error('Error:', err); // Check what error is logged
            this._apiService.isCompareLoader$.next(false);

          }
        });
      }
    });

    
    
    // this._apiService.post(api.InviteUser, this.listReferFriend).subscribe({
    //   next: (res: any) => {
    //     console.log("Response received:", res);
    //     this._apiService.isCompareLoader$.next(false);
    //     this._notificationService.push('User invited successfully', 1);
    //     this.listReferFriend = [];
    //   },
    //   error: (err: any) => {
    //     console.error("Error response received:", err);
    //     this._apiService.isCompareLoader$.next(false);
    //     this._notificationService.push(err.error || 'Something went wrong', 2);
    //   },
    //   complete: () => {
    //     console.log("API call completed.");
    //   }
    // });
  }
  
  
  

 


  getRoleName(data: any) {
    return this.roles.filter((i: any) => i.roleId == data)[0].name
  }
}
