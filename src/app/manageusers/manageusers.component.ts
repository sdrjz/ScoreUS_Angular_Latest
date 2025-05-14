import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { api } from '../api.endpoints';
import { GeneralApiService } from '../services/appService/generalApiService';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NotificationService } from '../notification.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {
  typeId!:any
  update :any = true;
  constructor(private location: Location,private router: Router,
    private _apiService:GeneralApiService,
    private _notificationService:NotificationService,
    private translateService:TranslateService,
    private cdr:ChangeDetectorRef) {

    router.events.subscribe((val:any) => {
      if(location.path() != ''){
        switch (location.path()) {
          case '/admin/managescorecardusers':
            this.typeId = 0
            break;
          
            case '/admin/managepousers':
            this.typeId = 1
            break;
            
            case '/admin/managecompleteusers':
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
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=> {
      this.translateService.use(res)
      this.cdr.detectChanges()
    })

  }

  getProjectsUrl:string = api.superAdminUsers
  poRowcolumns = [
    {
      def: 'subscriptionType',
      name: 'Subscription Type',
      key: 'subscriptionType',
      // key: (i:any)=>i.createdAt?.split(" ")[0],
      // projection:true
    },
    {
      def: 'name',
      name: 'Name',
      key:'name',
      projection:true
    },
    {
      def: 'companyName',
      name: 'Company Name',
      key: 'companyName'
      
      },
      
      {
        def: 'memberSince',
        name: 'Member Since',
        key: (i:any)=>i.memberSince?.split(" ")[0],
      },
      {
        def: 'renewalDate',
        name: 'Renewal Date',
        key: (i:any)=>i.renewalDate?.split(" ")[0],
      },
      {
        def: 'renewalTimes',
        name: 'Renewal Time',
        key: 'renewalTimes',
      },
      {
        def: 'referralTimes',
        name: 'Referral Times',
        key: 'referralTimes',
      },
      {
        def: 'successfulReferral',
        name: 'Successfull Referrer/Free months earned',
        key: 'successfulReferral',
      },
      {
        def: 'status',
        name: 'Active/Inactive',
        key: 'isActive',
        projection:true
      },
    
        
  ];


  onToggleChange(event:any,data:any){


    this._apiService.isCompareLoader$.next(true);
    
  //  let checked = data.isActive == true ? false : true   
    let message = event.value == false ? "User status is changed to inactive" : "User status is changed to active"
    this._apiService.get(`${api.superAdminActiveDeactiveUser}/${data.userId}/${event.value}`)
    .subscribe((res:any)=>{
      this._apiService.isCompareLoader$.next(false);
      this._notificationService.push(message,1)
      this.update = !this.update      
    },(e:any)=>{
      
      this._apiService.isCompareLoader$.next(false);
    })
  }

}
