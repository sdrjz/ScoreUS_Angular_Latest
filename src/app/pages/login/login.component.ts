import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Route, Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { timer } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { api } from 'src/app/api.endpoints';

interface plan {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rememberMe : boolean = false
  // showLoading: boolean = false;

  // userClick() {
  //   this.showLoading = true;
  //   // send http request here
  //   this.showLoading = false;
  // }

  loginForm: FormGroup = this.fb.group({
    // 'email': new FormControl()
    email: ['', Validators.compose([
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")
    ])
    ],
    password: ['', Validators.compose([Validators.required,])],
  });
  
  Loading = false

  // title = 'title | material-login';

  //Loader variable default true before page load
  loader = true;

  public showPassword: boolean;

  constructor(
    public login_service: LoginService,
    public Spinner_service: SpinnerService,
    private fb: FormBuilder,
    private router: Router,
    private translateService:TranslateService,
    private _apiService:GeneralApiService,
    private cdr:ChangeDetectorRef
  ) {

  }


  initLoginForm() {

    this.loginForm = this.fb.group({
      // 'email': new FormControl()
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")
        // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ])
      ],
      password: ['', Validators.compose([Validators.required,])],
    });
  }

//   localStorage.setItem('userData', userData)
//   localStorage.setItem("access_token", this.token);
//  if(isRemember){
//   localStorage.setItem('rememberMeUserData', userData)
//   localStorage.setItem("rememberMeToken", this.token);
//   localStorage.setItem("rememberMePassword",JSON.stringify(data))
// }else{
//   localStorage.removeItem('rememberMeUserData')
//   localStorage.removeItem("rememberMeToken");
//   localStorage.removeItem("rememberMePassword")
// }


  ngOnInit(): void {
    this.initLoginForm(); //code here
     var rememberMe = localStorage.getItem('rememberMe')
    if(rememberMe === "true"){
      this.rememberMe = true 
      var rememberMeUserData= localStorage.getItem('rememberMeUserData')      
      var rememberMeToken = localStorage.getItem('rememberMeToken')      
    
    
      if(rememberMeUserData && rememberMeToken)
      {
        localStorage.setItem('userData', rememberMeUserData)
        localStorage.setItem("access_token", rememberMeToken);
        var userData = JSON.parse(rememberMeUserData)
        
        this._apiService.post(`${api.CalculateTimeOnSite}/${userData.userID}`,{}).subscribe(
          (res:any)=>{})
          
          setInterval(() => {
        this._apiService.post(`${api.CalculateTimeOnSite}/${userData.userID}`,{}).subscribe(
        (res:any)=>{}
        );
       }, 5 * 60 * 1000);

          // this.autoLogOut()
          if (userData.roleName.toLowerCase() == "super admin")
            this.router.navigate(['/admin/maindashboard'])
          else
          {
            switch(userData.roleID)
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
              default :
              this.router.navigate(['/user/dashboard'])
                break;
            }

          }




        
      }     
      var userCredential = localStorage.getItem("rememberMePassword")
      if(userCredential)
      {
        var userData = JSON.parse(userCredential)
        this.loginForm.controls["email"].setValue(userData.email)
        this.loginForm.controls["password"].setValue(userData.password)
      }
    
    }
    else{
      localStorage.removeItem("rememberMeUserData")
      localStorage.removeItem("rememberMeToken")
      localStorage.removeItem("rememberMe")
      localStorage.removeItem("rememberMePassword")
    } 
   
    this._apiService.isLanguageSelector$.subscribe((res:any)=> {
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }


  onsubmit() {
    this.Spinner_service.requestStarted();
    const controls = this.loginForm.controls;
    /** check form */
    if (this.loginForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }
      
    this.login_service.submitLoginData(this.loginForm.value,this.rememberMe);
      // this.Spinner_service.requestEnded();




  }

  setValue()
  {
    this.rememberMe = !this.rememberMe;
  }

  /**
  * Checking control validation
  *
  * @param controlName: string => Equals to formControlName
  * @param validationType: string => Equals to valitors name
  */
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.loginForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) &&
      (control.dirty || control.touched);
    return result;
  }
}
