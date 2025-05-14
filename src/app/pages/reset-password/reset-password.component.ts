import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/app/Helpers/ConfirmPasswordValidator';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { TranslateService } from '@ngx-translate/core';

interface plan {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  ResetPasswordForm: FormGroup;
  Loading = false
  verifyLink:string;
  errors: any = [];

  

  public showPassword: boolean;
   public showconfirmPassword: boolean;

  constructor(
    public login_service: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cdr :ChangeDetectorRef,
    private _apiService:GeneralApiService,
    private translateService :TranslateService
  ) { }


  initResetPassword() {
    this.ResetPasswordForm = this.fb.group({
      'password': ['', Validators.compose([Validators.required,])],
      'confirmpassword': ['', Validators.compose([Validators.required,])],
    }, {
      validator: ConfirmPasswordValidator.MatchPassword
    });
	}


  ngOnInit(): void {


    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })

    this.initResetPassword();
    this.activatedRoute.params.subscribe(x=>{
      this.verifyLink = x.linkID;
      }); 
  }

  onsubmit() {
    const controls = this.ResetPasswordForm.controls;
    /** check form */
  if (this.ResetPasswordForm.invalid) {
    Object.keys(controls).forEach((controlName) =>
      controls[controlName].markAsTouched()
    );
    return;
  }
    let pswd = this.ResetPasswordForm.get('password').value;
    this.login_service.resetPassword(pswd,this.verifyLink);
  }


  /**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to valitors name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.ResetPasswordForm.controls[controlName];
		if (!control) {
			return false;
		}
		const result =
			control.hasError(validationType) &&
			(control.dirty || control.touched);
		return result;
	}

}
