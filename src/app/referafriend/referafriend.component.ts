import { U } from '@angular/cdk/keycodes';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { emitWarning } from 'process';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { api } from '../api.endpoints';
import { ReferafriendDialogComponent } from '../general/referafriend-dialog/referafriend-dialog.component';
import { referModel } from '../modal/referModel';
import { NotificationService } from '../notification.service';
import { GeneralApiService } from '../services/appService/generalApiService';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-referafriend',
  templateUrl: './referafriend.component.html',
  styleUrls: ['./referafriend.component.css']
})
export class ReferafriendComponent implements OnInit {
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
    private router:Router,
    private translateService:TranslateService,
    private cdr:ChangeDetectorRef) {
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

    var user = localStorage.getItem('userData')
    if (user)
      this.loggedInUser = JSON.parse(user);

    this.createForm();


  }

  angForm: FormGroup;
  angForm2: FormGroup;

  createForm() {
    this.angForm = new FormGroup({
      id:new FormControl(this.id),
      firstName: new FormControl('',[Validators.required]),
      email:new FormControl ('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    })
    this.setReferData()
  }

  updateForm(data: referModel) {
    
    this.angForm = new FormGroup({
      id:new FormControl(data.id),
      firstName: new FormControl(data.fullName,[Validators.required]),
      email:new FormControl (data.email, [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    })
  }


  onSaveClick() { 
    if(!this.angForm.valid){
      this._notificationService.push('invalid data',2)
      return
    }
    // let currentDate = new Date();
    // let date = currentDate.getDate();
    // let month = currentDate.getMonth()+1;
    // let year = currentDate.getFullYear();
    if(this.isEdit){
      let obj = new referModel(this.editId,this.loggedInUser.tenantID,'',0,0,'','',false,'',null,'',null,'','','',this.loggedInUser.firstName+' '+this.loggedInUser.lastName,+this.loggedInUser.roleID,'');
      obj.fullName = this.angForm.controls['firstName'].value;
      obj.email = this.angForm.controls['email'].value;
      const index =  this.listReferFriend.findIndex((i:any)=> i.id == obj.id)
      this.listReferFriend[index]=obj
      this.isEdit=false
    }else{

      let obj = new referModel(this.id,this.loggedInUser.tenantID,'',0,0,'','',false,'',null,'',null,'','','',this.loggedInUser.firstName+' '+this.loggedInUser.lastName,+this.loggedInUser.roleID,'');
      
      obj.fullName = this.angForm.controls['firstName'].value;
      obj.email = this.angForm.controls['email'].value;
      this.listReferFriend.push(obj)
      this.id++;
    }
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
    this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.referralProffesional,this.listReferFriend)
    .subscribe((res:any)=>{
        this._apiService.isCompareLoader$.next(false)
        this.listReferFriend= []
        this._notificationService.push('User referred successfully',1)
        this.router.navigate(['user/referafriend'])  
      ,
      (err:any)=>{
        this._apiService.isCompareLoader$.next(false)
      this._notificationService.push('Something went wrong',2)
    }})
  }
}


