import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { GeneralApiService } from '../services/appService/generalApiService';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-inviteuser',
  templateUrl: './inviteuser.component.html',
  styleUrls: ['./inviteuser.component.css']
})
export class InviteuserComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private _apiService : GeneralApiService,
    private translateService :TranslateService,
    private cdr : ChangeDetectorRef) {
    this.createForm();
  }

  ngOnInit(): void {
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })

  }
  angForm: FormGroup;
  angForm2: FormGroup;

  createForm() {
    this.angForm = this.fb.group({
      usertype: ['', [Validators.required ]],
       firstname: ['', [Validators.required ]],
       lastname: ['', [Validators.required ]],       
       email: ['', [Validators.required ,  Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
       phoneus: ['', [Validators.required] ],
    });
  }
  
  
  toggleEye: boolean = true;
  
  toggleEyeIcon(inputPassword:any) {
		this.toggleEye = !this.toggleEye;
		
		inputPassword.type = inputPassword.type === 'password' ? 'text' : 'password';

		
	}


}

