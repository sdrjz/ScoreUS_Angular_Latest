import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from '../services/appService/generalApiService';

@Component({
  selector: 'app-mapout-vendor',
  templateUrl: './mapout-vendor.component.html',
  styleUrls: ['./mapout-vendor.component.css']
})
export class MapoutVendorComponent implements OnInit {
  listRankedVendor:any[]
  getListVendorRank(data:any){
    this.listRankedVendor = data
  }


  constructor(private cdr :ChangeDetectorRef,
    private translateService :TranslateService,
    private _apiService:GeneralApiService) { }

  ngOnInit(): void {
    
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }

}
