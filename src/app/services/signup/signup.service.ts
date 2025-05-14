import { isNull } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { genericService } from '../appService/genericService';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from '@angular/material/dialog';
import { WizardcheckmailDialogComponent } from 'src/app/general/wizardcheckmail-dialog/wizardcheckmail-dialog.component';
import { Router } from '@angular/router';
import { GenericDialogComponent } from 'src/app/general/generic-dialog/generic-dialog.component';
import { GeneralApiService } from '../appService/generalApiService';
import { api } from 'src/app/api.endpoints';
import { ErrorStateMatcher } from '@angular/material/core';
import { NotificationService } from 'src/app/notification.service';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    public dialog:MatDialog,
    public generic_Service: genericService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private _apiService:GeneralApiService,
    private _notificationService:NotificationService
  ) { }

  //for dropdowns
  countryDropDown: any[];
  stateDropDown: any[];
  cityDropDown: any[];
  signupData: any;
  verifiyemailLink: any;
  signupResp: any;


  getSignupData() {
    this._apiService.get(api.signUp).subscribe((res:any)=>{

      this.signupData = res;
      
        if (this.signupData.statusCode == 200) {
          this.countryDropDown = this.signupData.data.countriesList;

        }
    })
    
    // this.generic_Service
    //   .serviceGetAPI('SignUP')
    //   .subscribe(result => {
       
    //     this.signupData = result;
       
    //     if (this.signupData.statusCode == 200) {
    //       this.countryDropDown = this.signupData.data.countriesList;
    //     }
    //   });
  }

  getStates(countryid: string) {

    
    this._apiService.get(api.getState+"?CountryId="+countryid).subscribe((res:any)=>{
      
      this.stateDropDown = res.data;

      

     

   
    })


    // let states = this.signupData.data.statesList;
    // this.stateDropDown = states ? states.filter((x) => { return x.countryId === countryid }) : [];
  }

  getCities(stateid: string, countryID: string) {
    this._apiService.get(api.getCities+"?country="+countryID+"&state="+stateid).subscribe((res:any)=>{
      
      this.cityDropDown = res.data;
    })
    // let cities = this.signupData.data.citiesList;
  }

  emailverification(email: string,method:any) {
    if (email !== "") {
      const body={
        email: email
      };
    
    
      this._apiService.postWithParams(api.signUpVerifyEmail,body)
      .subscribe((res:any)=>{
        if(res.message == 'Email already Send kindly check and Verify!!!')
        {
          this._notificationService.push(res.message,1)
          this.router.navigate(['/login']);
        }

        if(res?.statusCode ==200){



          const dialogRef= this.dialog.open(WizardcheckmailDialogComponent);
          dialogRef.afterClosed().subscribe((res:any)=>{
            this.router.navigate(['/login']);
          })
        }
      },(e:any)=>{
        this._notificationService.push("Email already exist!",2)
      })
    
    
    
      // this.generic_Service.
      // servicePOSTAPI_WithoutToken_queryString('SignUP/VerifyEmail', body, 'post','json',false)
      //   .subscribe((result) => {
      //     this.verifiyemailLink = result;
      //     if (this.verifiyemailLink.statusCode == 200) {
      //       this.SignupDTO.email = email;
      //       this.dialog.open(WizardcheckmailDialogComponent);
      //     }
      //     else if (this.verifiyemailLink.statusCode == 400) {
      //     }
      //   });
   
    }
  }

  SignupDTO = {
    refCode: null,
    firstName: null,
    lastName: null,
    password: null,
    confirmpassword: null,
    companyName: null,
    phone: null,
    address: null,
    email: null,
    countryId: null,
    stateId: null,
    cityId: null,
    zipCode: null,
    packageId: null,
    isGetStarted: null,
    isFreeTrial: null,
    nameOnCard: null,
    cardNo: null,
    expiry: null,
    cvv: null,
    stripePriceID: null,
    linkID: null
  };

  mapped_Data(data: any,email:any) {
    this.SignupDTO = data;
    this.SignupDTO.email=email
  }


  submit_signup(data:any) {
    this._apiService.isCompareLoader$.next(true)
    if (this.SignupDTO != null) {
      //debugger
      this.SignupDTO.nameOnCard = data?.nameOnCard
      this.SignupDTO.cardNo = data?.cardNo
     
      // this.SignupDTO.expiry =  this._apiService.setDateFormat(data.expiry)
       this.SignupDTO.expiry =  data.expiry
      this.SignupDTO.cvv = data.cvv
      this._apiService.post(api.signUp,this.SignupDTO)
      .subscribe((res:any)=>{
        this._apiService.isCompareLoader$.next(false)
        this._notificationService.push(res?.message,1)
        this.router.navigate(['/login'])
        
      },(err:any)=>{
        this._apiService.isCompareLoader$.next(false)
          this._notificationService.push(err?.error.message,2)
      })
      
      // this.generic_Service.
      // service_POSTAPI_WithoutToken('SignUP', this.SignupDTO, 'post') // add body here
      //   .subscribe((result) => {
      //     this.signupResp = result;
      //     if (this.signupResp.statusCode == 200) {
      //       this.registration_Complete(this.SignupDTO.linkID);
      //     }
      //     else if (this.signupResp.statusCode == 400) {
      //     }
      //     else{
      //     }
      //   });
    }
  }

registration_Complete(Linkid:string){
  let resp;
  const body={
    Linkid: Linkid
  };
  this._apiService.isCompareLoader$.next(true)
  this._apiService.postWithParams(api.signUpEmailVerification,body)
  .subscribe((res:any)=>{
    if(res?.statusCode == 200){
      this._apiService.isCompareLoader$.next(false)
      this._notificationService.push(res?.message,2)
      this.router.navigate(['/sigupwizardthankyou']);
    }
  })


  // this.generic_Service.
  // servicePOSTAPI_WithoutToken_queryString('SignUP/EamilVerificationCompleted', body, 'post','json',false)
  //   .subscribe((result) => {
  //     resp = result;
  //     if (resp.statusCode == 200) {
  //       this.router.navigate(['/sigupwizardthankyou']);
  //     }
  //     else if (resp.statusCode == 400) {
  //     }
  //   });
}




}