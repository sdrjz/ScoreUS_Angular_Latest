import { Injectable } from '@angular/core';
import { genericService } from '../appService/genericService';
import { MatDialog } from '@angular/material/dialog';
import { RequestSentComponent } from 'src/app/pages/request-sent/request-sent.component';
import { Router } from '@angular/router';
import { GeneralApiService } from '../appService/generalApiService';
import { environment } from 'src/environments/environment';
import { data } from 'jquery';
import { api } from 'src/app/api.endpoints';
import { NotificationService } from 'src/app/notification.service';
import { delay } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: any
  tokenPayload: any
  expirationDate: Date
  constructor(
    public _apiService: GeneralApiService,
    public generic_service: genericService,
    public dialog: MatDialog,
    private router: Router,
    private _notificationService: NotificationService
  ) {


  }

  //#region Login Area
  submitLoginData(data: any,isRemember : boolean) {
    this._apiService.isCompareLoader$.next(true)
    this._apiService.postWithParams(api.login, data)
      .subscribe(
        (res: any) => {
          if(res.hasOwnProperty('isCancelled')){
            res.data.isCancelled = res.isCancelled;
          }else{
            res.data.isCancelled = false;
          }
          
          
          if (res?.statusCode == 200) {
            this._notificationService.push(
              'User logged in successfully', 1
            )
            this._apiService.isCompareLoader$.next(false)



            this._apiService.user$.next(res?.data);
            let userData = JSON.stringify(res?.data)
            this.token = res?.data?.jwtToken
            localStorage.setItem('userData', userData)
            localStorage.setItem("access_token", this.token);
            if(isRemember){
            localStorage.setItem('rememberMe', "true")
            localStorage.setItem('rememberMeUserData', userData)
            localStorage.setItem("rememberMeToken", this.token);
            localStorage.setItem("rememberMePassword",JSON.stringify(data))
          }else{
            localStorage.removeItem('rememberMeUserData')
            localStorage.removeItem("rememberMeToken");
            localStorage.removeItem("rememberMePassword")
            localStorage.removeItem("rememberMe")
          }

            this._apiService.post(`${api.CalculateTimeOnSite}/${res?.data.userID}`,{}).subscribe(
            (res:any)=>{})
            
            setInterval(() => {
          this._apiService.post(`${api.CalculateTimeOnSite}/${res?.data.userID}`,{}).subscribe(
          (res:any)=>{}
          );
         }, 5 * 60 * 1000);
         
         this._apiService.get(api.getSuperAdminReferral)
    .subscribe((res:any)=>{
      let isReferralAllowed = res.data.value == '1' ? true : false;
      this._apiService.isReferralAllowed$.next(isReferralAllowed)
    },
    (err:any)=>{
    this._apiService.isCompareLoader$.next(false)
    
      })
         
         if(res.hasOwnProperty('isCancelled') && res?.isCancelled)
          {
            this.router.navigate(['/user/plans'])
            return;
          }

            // this.autoLogOut()
            if (res?.data.roleName.toLowerCase() == "super admin")
              this.router.navigate(['/admin/maindashboard'])
            else
            {
              switch(res.data.roleID)
              {
                case 12 :
                  this.router.navigate(['/user/vendor/vendorscore'])
                break;
                case 8:
                this.router.navigate(['/admin/pouserdashboard'])
                  break;
                case 10:
                this.router.navigate(['/admin/pouserdashboard'])
                  break;
                case 13:
                this.router.navigate(['/admin/pouserdashboard'])
                  break;
                  case 14:
                    this.router.navigate(['/admin/pouserdashboard'])
                  break;
            
                
                  default :
                this.router.navigate(['/user/dashboard'])
                  break;
              }

            }
            // this.router.navigate(['/'])
          }
        }
        , (e: any) => {
          this._notificationService.push(e.error.message, 2);
          this._apiService.isCompareLoader$.next(false)

        }
      )





    // let resp;
    // this.generic_service
    // .servicePOSTAPI_WithoutToken_queryString('Login', this.LoginDTO, 'post', 'json', false)
    // .subscribe((result:any) => {
    //  let userData= JSON.stringify(result?.data)
    //  localStorage.setItem('userData',userData)
    //   resp = result;
    //   if (resp.statusCode == 200){
    // this.router.navigate(['/admin/maindashboard'])


    // this.router.navigate(['/admin/pouserdashboard']) //PO MANAGER USER

    // this.router.navigate(['/admin/pouserdashboard']) //PO MANAGER USER ADMIN

    // this.router.navigate(['/admin/openpostatus'])  //PO MANAGER VENDOR

    // this.router.navigate(['/admin/superadmindashboard'])
    //    }
    //    else {
    //    }
    // });
  }


  autoLogOut() {
    setTimeout(() => {
      this.tokenPayload = jwt_decode(this.token);
      this.expirationDate = new Date(this.tokenPayload.exp * 1000);
      let issueTime = new Date(this.tokenPayload.iat * 1000);

      let timeLeft = this.expirationDate.getMilliseconds() - issueTime.getMilliseconds()
      if (timeLeft <= 0) {
        localStorage.clear();
        this._notificationService.push("Session expired", 1)
        this.router.navigate(['/login'])
      }
    }, 18000000)
  }



  LoginDTO = {
    email: null,
    password: null
  }

  //#endregion Login Area


  //#region Forget Password area

  forgetPassword(email: any) {
    this._apiService.isCompareLoader$.next(true)
    this._apiService.postWithParams(api.forgotPassword, email)
      .subscribe((res: any) => {
        if (res.statusCode == 200) {
          this._apiService.isCompareLoader$.next(false)
          this.dialog.open(RequestSentComponent);
        }
        else {
        }

      }), (e: any) => {
        this._apiService.isCompareLoader$.next(false)
      }



    // let resp;
    // const body={email:email};
    // this.generic_service
    // .servicePOSTAPI_WithoutToken_queryString('Login/ForgetPassword', body, 'post', 'json', false)
    // .subscribe(result => {
    //   resp = result;
    //   if (resp.statusCode == 200){
    //     this.dialog.open(RequestSentComponent);
    //    }
    //    else {
    //    }
    // });
  }
  //#endregion Forget Password area

  //#region  Reset Password Area
  resetPassword(password: string, linkId: string) {
    const body = {
      LinkId: linkId,
      Password: password
    };
    this._apiService.isCompareLoader$.next(true)

    this._apiService.postWithParams(api.resetPassword, body)
      .subscribe((res: any) => {
        if (res.statusCode == 200) {
          this._apiService.isCompareLoader$.next(false)
          this._notificationService.push(res.message, 1)
          this.autoLogOut();
          this.router.navigate(['/login'])
        }
        else {
        }
      }), (e: any) => {
        this._apiService.isCompareLoader$.next(false)
      }


    // let resp;

    // this.generic_service
    // .servicePOSTAPI_WithoutToken_queryString('Login/ResetPassword', body, 'post', 'json', false)
    // .subscribe(result => {
    //   resp = result;
    //   if (resp.statusCode == 200){
    //     this.router.navigate(['/login'])
    //    }
    //    else {
    //    }
    // });
  }
  //#endregion Reset Password Area

}