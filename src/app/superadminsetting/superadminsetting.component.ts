import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GeneralApiService } from '../services/appService/generalApiService';
import { NotificationService } from '../notification.service';
import { api } from '../api.endpoints';

@Component({
  selector: 'app-superadminsetting',
  templateUrl: './superadminsetting.component.html',
  styleUrls: ['./superadminsetting.component.css']
})
export class SuperadminsettingComponent implements OnInit {
  superAdminReferralSetting : any = '1'
  constructor(private _apiService: GeneralApiService,
    private _notificationService : NotificationService,
    private cdr : ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this._apiService.isCompareLoader$.next(true);
    this._apiService.get(api.getSuperAdminReferral)
    .subscribe(
      (res:any)=>{
        this.superAdminReferralSetting = res.data.value
        // res.data.value
        this._apiService.isCompareLoader$.next(false);
        this._notificationService.push("Admin Settings loaded",1)
        },
        (err:any)=>{
          this._apiService.isCompareLoader$.next(false);
          this._notificationService.push("Something went wrong",2)
  })
  }

updateReferalManagement(data :any){
 let apiData : any = {
  id:2, 
  name : 'SuperAdmin',
}
apiData.value = data == '1'? '0': '1'
this._apiService.isCompareLoader$.next(true)
this._apiService.post(api.setSuperAdminReferral,apiData)
.subscribe((res:any)=>{

  this.superAdminReferralSetting = apiData.value
  this.cdr.detectChanges();
  let isReferralAllowed  = this.superAdminReferralSetting == '1' ? true : false;
  this._apiService.isReferralAllowed$.next(isReferralAllowed)
  this._notificationService.push(`Referral management ${this.superAdminReferralSetting == '1' ? 'enabled' : 'disabled' }`,1)
  this._apiService.isCompareLoader$.next(false)
  },
  (err:any)=>{
    this._notificationService.push("Something went wrong",2)
    this._apiService.isCompareLoader$.next(false)
})

}


}


