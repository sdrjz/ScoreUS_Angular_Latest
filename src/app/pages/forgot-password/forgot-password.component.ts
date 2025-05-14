import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
	forgetForm: FormGroup;
	constructor(
		private fb: FormBuilder,
		private _loginService: LoginService,
		private cdr:ChangeDetectorRef,
		private _apiService:GeneralApiService,
		private translateService:TranslateService
	) { }

	initforgetForm() {
		this.forgetForm = this.fb.group({
			email: ['', Validators.compose([
				Validators.required,
				Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$")])]
		});
	}

	ngOnInit(): void {


		this._apiService.isLanguageSelector$.subscribe((res:any)=>{
			this.translateService.use(res)
			this.cdr.detectChanges()
		  })

		this.initforgetForm();
	}

	SendPassword() {
		const controls = this.forgetForm.controls;
		/** check form */
		if (this.forgetForm.invalid) {
			Object.keys(controls).forEach((controlName) =>
				controls[controlName].markAsTouched()
			);
			return;
		}
		
		this._loginService.forgetPassword(this.forgetForm.value);
	}


	/**
	   * Checking control validation
	   *
	   * @param controlName: string => Equals to formControlName
	   * @param validationType: string => Equals to valitors name
	   */
	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.forgetForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result =
			control.hasError(validationType) &&
			(control.dirty || control.touched);
		return result;
	}


}

