import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { api } from '../api.endpoints';
import { Location } from '@angular/common';
import { GeneralApiService } from '../services/appService/generalApiService';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-referralmanagement',
  templateUrl: './referralmanagement.component.html',
  styleUrls: ['./referralmanagement.component.css']
})
export class ReferralmanagementComponent implements OnInit {
  typeId!:any

  constructor(private location: Location,private router: Router,
    private _apiService:GeneralApiService,
    private translateService:TranslateService,
    private cdr :ChangeDetectorRef) {

    router.events.subscribe((val:any) => {
      if(location.path() != ''){
        switch (location.path()) {
          
          case '/admin/referralscorecardmanagement':
            this.typeId = 0
            break;
          
            case '/admin/referralpomanagement':
            this.typeId = 1
            break;
            
            case '/admin/referralusermanagement':
            this.typeId = 2
            break;
        
          default:
            this.typeId = 0;
            break;
        } 
        
        
      
      
      }
    })
  }

  ngOnInit(): void {
    
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }

  getProjectsUrl:string = api.superAdminReferral
 
  poRowcolumns = [
    {
      def: 'referee',
      name: 'Referee',
      key: 'referee',
      projection:true
    },
    {
      def: 'refreeCompanyName',
      name: 'Referee Company',
      key:'refreeCompanyName',
      // projection:true
    },
    {
      def: 'refreeSubscriptiontype',
      name: 'Referee Subscription Type/Product',
      key: 'refreeSubscriptiontype'
      
      },
      
      {
        def: 'refSubsDate',
        name: 'Referee Subcription Date',
         key: (i:any)=>i.refSubsDate?.split(" ")[0],
        
        // key: (i:any)=>i.memberSince?.split(" ")[0],
      },
      {
        def: 'referrer',
        name: 'Referrer',
        key: 'referrerName',
        projection:true
      },
      {
        def: 'referrerCompanyName',
        name: 'Referrer Company',
        key: 'referrerCompanyName',
      },
      {
        def: 'referrerSubsType',
        name: 'Referrer Subscription Type/Product',
        key: 'referrerSubsType',
      },
      {
        def: 'referrerMembSince',
        name: 'Referrer Member Since',
        key: (i:any)=>i.referrerMembSince?.split(" ")[0],
      }
        
  ];



}
