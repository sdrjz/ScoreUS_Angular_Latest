import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { api } from 'src/app/api.endpoints';
import { ReferafriendDialogComponent } from 'src/app/general/referafriend-dialog/referafriend-dialog.component';
import { referModel } from 'src/app/modal/referModel';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-invitevendorbyuser',
  templateUrl: './invitevendorbyuser.component.html',
  styleUrls: ['./invitevendorbyuser.component.css']
})
export class InvitevendorbyuserComponent implements OnInit {
  selectedVendor : any | null
  selectedVendorForDropDown : any 
  allVendors :any   
  currentSelectedRole :any
  roles:any[]
  listVendor :any[]=[]
  totalInvitationUser:any=0
  loggedInUser: any
  isEdit: boolean = false;
  listReferFriend:any[]= []
  public id = 1
  editId = 0;
  referData: any = {

  }


  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private _notificationService: NotificationService,
    private _apiService:GeneralApiService,
    private route: ActivatedRoute,
    private cdr : ChangeDetectorRef,
    private translateService : TranslateService) {
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

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })

    // this.route.queryParams.subscribe((res:any)=>{
    //   this.totalInvitationUser = res.id
    // })

    var user = localStorage.getItem('userData')
    if (user)
      this.loggedInUser = JSON.parse(user);


    this._apiService.isCompareLoader$.next(true)
    
    Promise.all([
      this._apiService.get(api.role).toPromise(),
      this._apiService.get(api.getAllVendor+'/'+this.loggedInUser.tenantID).toPromise(),
    ]).then((res:any)=>{
      this._notificationService.push("Roles data retrieved",1)
      this.roles = res[0].data
      this.roles = this.roles.filter((i:any)=> i.name.toLowerCase() === 'vendor score card')
      this.listVendor = res[1].data
      localStorage.setItem('listVendor',JSON.stringify(res[1].data))
    }).finally(()=> this._apiService.isCompareLoader$.next(false))




    this.createForm();


  }

  onRoleSelection(data:any){
    this.angForm.controls["roleId"].setValue(data.target.value)
      this.currentSelectedRole = data.target.value
      if(this.currentSelectedRole == 12 || this.currentSelectedRole == 13 || this.currentSelectedRole == 14)
      {
        this.angForm.controls['firstName'].setValidators(null)
        this.angForm.controls['firstName'].disable();
        this.angForm.controls['email'].disable();
      }else
      {
        this.angForm.controls['firstName'].setValidators(Validators.required)
        this.angForm.controls['firstName'].enable();
        this.angForm.controls['email'].enable();
        this.angForm.controls['firstName'].setValue('');
        this.angForm.controls['email'].setValue('');
        
      }
      this.cdr.detectChanges()
    
  }

  angForm: FormGroup = new FormGroup({
    id:new FormControl(this.id),
    firstName: new FormControl('',[Validators.required]),
    email:new FormControl ('', [Validators.required, Validators.email, Validators.pattern("^[A-Za-zA-Z-a-z0-9._%+-]+@[A-Za-zA-Za-z0-9.-]+\\.[a-z]{2,4}$")]),
    roleId:new FormControl('',[Validators.required]),
    vendorCode : new FormControl('')
  });
  angForm2: FormGroup;

  createForm() {
    this.angForm = new FormGroup({
      id:new FormControl(this.id),
      firstName: new FormControl('',[Validators.required]),
      email:new FormControl ('', [Validators.required, Validators.email, Validators.pattern("^[A-Za-zA-Z-a-z0-9._%+-]+@[A-Za-zA-Za-z0-9.-]+\\.[a-z]{2,4}$")]),
      roleId:new FormControl('',[Validators.required]),
      vendorCode : new FormControl('')
    })
    this.setReferData()
  }

  updateForm(data: referModel) {
    
    this.angForm = new FormGroup({
      id:new FormControl(data.id),
      firstName: new FormControl(data.fullName,[Validators.required]),
      email:new FormControl (data.email, [Validators.required, Validators.email, Validators.pattern("^[A-Za-zA-Z-a-z0-9._%+-]+@[A-Za-zA-Za-z0-9.-]+\\.[a-z]{2,4}$")]),
      roleId : new FormControl(data.roleId,[Validators.required]),
      vendorCode : new FormControl(data.name)
    })
  }

  onVendorSelection(data:any){
  let listVendor = [...this.listVendor];
   this.selectedVendor = listVendor.filter((i:any)=> i.id == data.target.value)[0]
  //  this.angForm.controls["id"].setValue(this.selectedVendor.id)
   this.angForm.controls["firstName"].setValue(this.selectedVendor.name)
   this.angForm.controls["email"].setValue(this.selectedVendor.email)
   this.angForm.controls['vendorCode'].setValue(this.selectedVendor.id);
  //  this.listVendor = JSON.parse(localStorage.getItem('listVendor'))
    this.cdr.detectChanges()
  }

  onSaveClick() { 
    if(!this.angForm.valid){
      this._notificationService.push('invalid data',2)
      return
    }
    let index = -1;
    index = this.listReferFriend.findIndex((i:any)=> i.email == this.angForm.controls['email'].value)
    if(index > -1){
      this._notificationService.push("Can not insert same record twice",2);
      return
    }
    
    // let obj = new referModel(this.id,this.loggedInUser.tenantID,'',0,0,'','',false,'','','','','','','',this.loggedInUser.firstName+' '+this.loggedInUser.lastName,+this.loggedInUser.roleID,'');
    // obj.fullName = this.angForm.controls['firstName'].value;
    // obj.email = this.angForm.controls['email'].value;
    // obj.roleId = this.angForm.controls['roleId'].value;
    // obj.name = this.selectedVendor?.id ? this.selectedVendor.id : ''  // taking vendorcode
    if(this.isEdit){
      let obj = new referModel(this.editId,this.loggedInUser.tenantID,'',0,0,'','',false,'',null,'',null,'','','',this.loggedInUser.firstName+' '+this.loggedInUser.lastName,+this.loggedInUser.roleID,'');
      obj.fullName = this.angForm.controls['firstName'].value;
      obj.email = this.angForm.controls['email'].value;
      obj.roleId = this.angForm.controls['roleId'].value
      obj.name = this.selectedVendor?.id ? this.selectedVendor.id : ''
    const index =  this.listReferFriend.findIndex((i:any)=> i.id == obj.id)
    this.listReferFriend[index]=obj
    this.isEdit=false
    }else{
      // if(!(this.listReferFriend.length<this.totalInvitationUser)){
      //   this._notificationService.push('can not add more then '+this.totalInvitationUser+" members",2)
      //   return
      // }
          
      let obj = new referModel(this.id,this.loggedInUser.tenantID,'',0,0,'','',false,'',null,'',null,'','','',this.loggedInUser.firstName+' '+this.loggedInUser.lastName,+this.loggedInUser.roleID,'');
      obj.fullName = this.angForm.controls['firstName'].value;
      obj.email = this.angForm.controls['email'].value;
      obj.roleId =+this.angForm.controls['roleId'].value
      obj.name = this.selectedVendor?.id ? this.angForm.controls['vendorCode'].value : ''
      this.listReferFriend.push(obj)
      this.id++;
    }
    this.selectedVendor = null
    this.selectedVendorForDropDown = null;
    this.createForm()
  }

  onEditClick(data: any) {
    this.editId = data.id
    this.isEdit=true
    this.updateForm(data);
  }


  onDeleteClick(data: any) {
    this.listReferFriend = this.listReferFriend.filter((i: referModel) => i.id != data.id)
  }

  onCancelClick() {
    this.createForm()
  }

  onReferClick(){
    if(this.isEdit)
    return
    if(this.listReferFriend.length<1)
    {
      this._notificationService.push("atleast 1 member should be added",2)
      return
    }
    this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.InviteUser,this.listReferFriend)
    .subscribe((res:any)=>{
      this._apiService.isCompareLoader$.next(false)
      this._notificationService.push('User referred successfully',1)
      this.listReferFriend = []
    ,(err:any)=>{
      this._apiService.isCompareLoader$.next(false)
      this._notificationService.push('Something went wrong',2)
    }},(err:any)=> this._apiService.isCompareLoader$.next(false))
  }

  getRoleName(data:any){
    return this.roles.filter((i:any)=> i.roleId == data)[0].name  
  }
}
