import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService} from '../services/user/user.service';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/app/Helpers/ConfirmPasswordValidator';
import { GeneralApiService } from '../services/appService/generalApiService';
import { TranslateService } from '@ngx-translate/core';

interface plan {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  Loading = false
  verifyLink:string;
  errors: any = [];

  public showPassword: boolean;
  public showconfirmPassword: boolean;

  constructor(
    private _userService:UserService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _apiService:GeneralApiService,
    private translateService : TranslateService,
    private cdr : ChangeDetectorRef
  )
  { }

  initChangePassword() {
    this.changePasswordForm = this.fb.group({      
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

    this.initChangePassword();
    // this.activatedRoute.params.subscribe(x=>{
    // this.verifyLink = x.linkID;
    //   }); 
  }

  onsubmit() {
    const controls = this.changePasswordForm.controls;
    /** check form */
  if (this.changePasswordForm.invalid) {
    Object.keys(controls).forEach((controlName) =>
      controls[controlName].markAsTouched()
    );
    return;
  }

    let pswd = this.changePasswordForm.get('password').value;
    this._userService.changePassword(pswd);
  }


  /**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to valitors name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.changePasswordForm.controls[controlName];
		if (!control) {
			return false;
		}
		const result =
			control.hasError(validationType) &&
			(control.dirty || control.touched);
		return result;
	}

}
