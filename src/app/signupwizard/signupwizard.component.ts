import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WizardcheckmailDialogComponent } from '../general/wizardcheckmail-dialog/wizardcheckmail-dialog.component';
import {SignupService} from '../services/signup/signup.service';
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from '../services/appService/generalApiService';

@Component({
  selector: 'app-signupwizard',
  templateUrl: './signupwizard.component.html',
  styleUrls: ['./signupwizard.component.css']
})
export class SignupwizardComponent implements OnInit {  
  emailVerifiyForm:FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog:MatDialog,
    public signup_Service: SignupService,
    private spinner: NgxSpinnerService,
    private translateService: TranslateService,
    private cdr :ChangeDetectorRef,
    private _apiService:GeneralApiService
    ) {}

  openDialog() {
    this.dialog.open(WizardcheckmailDialogComponent);
  }

  initEmailVerifiyForm() {
    this.emailVerifiyForm = this.fb.group({
      // 'email': new FormControl()
      email: ['', Validators.compose([
				Validators.required,
        Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$")
			])
			]
    });
	}
  
  ngOnInit(): void {
 
 

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
 
    this.initEmailVerifiyForm();
  }


  verifyemail(){
    const controls = this.emailVerifiyForm.controls;
    	/** check form */
		if (this.emailVerifiyForm.invalid) {
			Object.keys(controls).forEach((controlName) =>
				controls[controlName].markAsTouched()
			);
			return;
		}

    let email = this.emailVerifiyForm.get('email').value;

     this.signup_Service.emailverification(email,this.openDialog);
  }


  /**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to valitors name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.emailVerifiyForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result =
			control.hasError(validationType) &&
			(control.dirty || control.touched);
		return result;
	}


}