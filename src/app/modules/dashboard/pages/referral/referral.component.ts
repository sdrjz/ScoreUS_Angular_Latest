import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { api } from 'src/app/api.endpoints';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css']
})
export class ReferralComponent implements OnInit {
 public dataApi:string=api.tenant
 public heading:string="Referral Management"; 
 constructor(private _apiService:GeneralApiService,
  private translateService:TranslateService,
  private cdr :ChangeDetectorRef) { }

  ngOnInit(): void {
  
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }

  public columns=[
    {
    def:'tenantId',
    name:'Tenant Id'
    },
    {
    def:'companyName',
    name:'Company Name'  
    },
    {
    def:'email',
    name:'Email'
    },
    {
    def:'refCode',
    name:'Ref Code'
    },
    {
    def:'stateId',
    name:'State Id' 
    },
    
  ]
}
