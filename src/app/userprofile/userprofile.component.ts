import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from '../general/upload-dialog/upload-dialog.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {SignupService} from '../services/signup/signup.service';
import { GeneralApiService } from '../services/appService/generalApiService';
import { api } from '../api.endpoints';
import { E } from '@angular/cdk/keycodes';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { NotificationService } from '../notification.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
 public userData:any
  public isLoading:boolean=false;
 public listCountry:any[]=[]
 public listAllCity : any[]=[]
 public listAllState : any[]=[]
 public listCity : any[]=[]
 public listState : any[]=[]
  isShow = true;
  public showPassword: boolean;
  public ProfileForm: FormGroup;

  toggleDisplay() {
    this.isLoading=false;
    const controls = this.ProfileForm.controls;
    /** check form */
    if (this.ProfileForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      this._notificationService.push("Invalid data",2)
      this.isLoading=false; 
      return;
    }
    else
    {
      this._apiService.isCompareLoader$.next(true)
      this._apiService.post(api.updateUser,this.ProfileForm.value)
      .subscribe((res:any)=>{
        this._apiService.isCompareLoader$.next(false)
        localStorage.removeItem('userData')
        localStorage.setItem('userData',JSON.stringify(res?.data));
        this._apiService.user$.next(res?.data);
        this.isLoading=false;
        this._notificationService.push("Profile updated successfully",1);
        // this.initProfileForm();

      },(e:any)=>{
        this._apiService.isCompareLoader$.next(false)
      })
    }
    this.isShow = !this.isShow;
  }

  
  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    public signup_service: SignupService,
    private _apiService:GeneralApiService,
    private _notificationService:NotificationService,
    private translateService:TranslateService,
    private cdr : ChangeDetectorRef
  ) {
    const maskConfig: Partial<IConfig> = {
      validation: false,
    };
  }

  openDialog() {
      let element: HTMLElement = document.querySelector('input[type="file"]') as HTMLElement;
      element.click();
  }

  //
  initProfileFormWithData(data:any){
    this.ProfileForm = new FormGroup({
      firstName:new FormControl(data?.firstName, [Validators.required,Validators.minLength(3)]),
      lastName: new FormControl(data?.lastName,[Validators.required,]),
      tenantId: new FormControl(data?.tenantID,[Validators.required]),
      companyName: new FormControl(data?.companyName,[Validators.required]),
      userId: new FormControl(data?.userID,[Validators.required]),
      contact: new FormControl(data?.phone, [Validators.required]),
      address: new FormControl(data?.address,Validators.required),
      // // 'email': ['', [[
      // //   Validators.required,
      // //   Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]],
      countryId: new FormControl(data?.countryId, [Validators.required]),
      stateId: new FormControl(data?.stateId, [Validators.required,]),
      cityId: new FormControl(data?.cityId, [Validators.required]),
      zipCode:new FormControl(data?.zipcode),
    });
  }


  initProfileForm() {
    this.ProfileForm = new FormGroup({
      firstName:new FormControl('', [Validators.required,Validators.minLength(3)]),
      lastName: new FormControl('',[Validators.required,]),
      tenantId: new FormControl('',[Validators.required]),
      userId: new FormControl('',[Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      address: new FormControl('',Validators.required),
      companyName: new FormControl('',[Validators.required]),
      // // 'email': ['', [[
      // //   Validators.required,
      // //   Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]],
      countryId: new FormControl('', [Validators.required]),
      stateId: new FormControl('', [Validators.required,]),
      cityId: new FormControl('', [Validators.required]),
      zipCode:new FormControl(''),
    });
  }


  
  ngOnInit(): void {
    
  
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    this._apiService.isCompareLoader$.next(true)
   

    var user = localStorage.getItem('userData');
    
    if(user)
    {
      this.userData = JSON.parse(user);
    
    }

    // this.ProfileForm.controls['userId'].setValue(this.userData?.userId);
    // this.ProfileForm.controls['tenantId'].setValue(this.userData?.tenantId);
    this._apiService.get(api.signUp).subscribe((res:any)=>{
      
      this._apiService.isCompareLoader$.next(false)
      if(user)
      {
        this.userData = JSON.parse(user);
      }
      this.initProfileFormWithData(this.userData);
      this.listCountry=res?.data?.countriesList;
      this.listAllCity = res?.data?.citiesList
      this.listCity = res?.data?.citiesList
      this.listAllState = res?.data?.statesList
      this.listCity = res?.data?.citiesList
      this.onCountrySelect();
      this.onStateSelect();
      if(this.userData.stateId){
        this.ProfileForm.controls['stateId'].setValue(this.userData.stateId)
        this.onStateSelect();

      }
      if(this.userData.cityId)
      this.ProfileForm.controls['cityId'].setValue(this.userData.cityId)
      


      if(this.userData.roleID == 12 || this.userData.roleID == 13 || this.userData.roleID == 14){
        this.ProfileForm.controls["firstName"].disable();
        this.ProfileForm.controls["lastName"].disable();
        this.ProfileForm.controls["tenantId"].disable();
        this.ProfileForm.controls["companyName"].disable();
        this.ProfileForm.controls["userId"].disable();
        this.ProfileForm.controls["contact"].disable();
        this.ProfileForm.controls["address"].disable();
        this.ProfileForm.controls["countryId"].disable();
        this.ProfileForm.controls["stateId"].disable();
        this.ProfileForm.controls["cityId"].disable();
        this.ProfileForm.controls["zipCode"].disable();
           
      }


    },(e:any)=>{this._apiService.isCompareLoader$.next(false)})
  }

  /**
   * Checking control validation
   *
   * @param controlName: string => Equals to formControlName
   * @param validationType: string => Equals to valitors name
   */
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.ProfileForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) &&
      (control.dirty || control.touched);
    return result;
  }

  onCountrySelect(){
    
    let selectedCountryId = this.ProfileForm.controls['countryID'].value
    if(selectedCountryId){
      this.listState = this.listAllState?.filter((i:any)=> i.countryId == selectedCountryId)
      this.ProfileForm.controls['stateId'].setValue(null)
      this.ProfileForm.controls['cityId'].setValue(null)
    }else{
      this.listState = this.listAllState;
    }
  }


  onStateSelect(){
    let selectedStateId = this.ProfileForm.controls['stateId'].value
    if(selectedStateId){
      this.listCity = this.listAllCity?.filter((i:any)=> i.stateId == selectedStateId)
      this.ProfileForm.controls["cityId"].setValue(null)
    }else{
      this.listCity = this.listAllState;
    }
    
  }



  onFileSelected(event:any){
    let image;
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      image = file;
      // this.imagePath  = file.name;
    }
    this._apiService.isCompareLoader$.next(true)
    const formData: FormData = new FormData();
    formData.append('Files', image,image?.name);
    this._apiService.post(api.userEditPicture+'/?UserId='+this.userData?.userID,formData)
    .subscribe((res:any)=>{
      this._apiService.isCompareLoader$.next(false)
      this._notificationService.push("Image updated successfully",1)
      this.userData.image = res?.data
      this._apiService.user$.next((this.userData))
      localStorage.removeItem('userData')
      localStorage.setItem('userData',JSON.stringify(this.userData))

    },(e:any)=>{
      this._apiService.isCompareLoader$.next(false)
    })
    // this.apiService.post(api.userImage,formData).subscribe((res:any)=>
    // {
    //   let path =res.data
    //   this.imagePath = this.serverUrl+path
    //   this.apiService.putWithId(api.userImage+'/'+this.user.id,{UserImage:path})
    //   .subscribe((res:any)=>{
    //   })

    // })

  }

}
