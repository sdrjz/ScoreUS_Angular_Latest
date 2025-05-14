import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { api } from 'src/app/api.endpoints';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css']
})
export class ReferralComponent implements OnInit {
  public message = ""
  public loggedInUser :any
  constructor(private _apiService:GeneralApiService,
    private translateService:TranslateService,
    private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
     

    var user = localStorage.getItem('userData')
    if(user)
    this.loggedInUser=JSON.parse(user)

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })


    this._apiService.get(`${api.referralUsers}?pageSize=100000&pageNumber=1&tenantId=${this.loggedInUser.tenantID}&searchText=&orderBy=`)
    .subscribe((res:any)=>{
      console.log(res)
    this.message = `Total Free Month Services Earned.(${res.records}  ${res.records>1 ?'Months':'Month'})`
    })
  }
  
  getProjectsUrl:string = api.referralUsers
  poRowcolumns = [
    {
      def: 'name',
      name: 'Name',
      key: 'name',
    },
    {
      def: 'inviteDate',
      name: 'Invite Date',
      key: 'inviteDate',
      projection:true
    },
    {
      def: 'companyName',
      name: 'Company Name',
      key: 'companyName',
    },
    // {
    //   def: 'renewalDate',
    //   name: 'Renewal Date',
    //   key: 'renewalDate',
    // },
    {
      def: 'expiryDate',
      name: 'Expiration Date',
      key: 'expiryDate',
      projection:true
    },
    {
      def: 'refCode',
      name: 'Subscribed',
      key: 'refCode',
    },
    {
      def: 'subscriptionType',
      name: 'Subscription Type',
      key: 'subscriptionType',
    },
    
  ];




}
