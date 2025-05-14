import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { api } from 'src/app/api.endpoints';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-filter-by-dropdown-two',
  templateUrl: './filter-by-dropdown-two.component.html',
  styleUrls: ['./filter-by-dropdown-two.component.css']
})
export class FilterByDropdownTwoComponent implements OnInit {
  @Output() filterDataEmitter = new EventEmitter<any>();
  @Input() listDropDown:any[]=[
    {id:"30",value:"30 days"},
    {id:"60",value:"60 days"},
    {id:"180",value:"180 days"},
    {id:"365",value:"365 days"}
  ]
  @Input()apiRoute:string;
  constructor(private _apiService:GeneralApiService,
    private translateService:TranslateService,
    private cdr : ChangeDetectorRef) { }
  public adminSetting:any
  currentUser:any
  
  ngOnInit(): void {
    
    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })

    let user = localStorage.getItem('userData');
    if(user)
    this.currentUser = JSON.parse(user);
 
    // this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.adminKpiSetting + '?tenantId=' + this.currentUser.tenantID, {}).subscribe((res: any) => {
      this.getKPI()
    }, (e: any) => {
      this.getKPI()
    })
    
}
  
getKPI(){
  this._apiService.get(api.adminKpiSetting + '?tenantId=' + this.currentUser.tenantID)
    .subscribe((res: any) => {
      // this._apiService.isCompareLoader$.next(false);
      this.adminSetting = res.data.adminSettingList.filter((i:any)=> i.attribute == 'Scorecard Filter')[0].value
    },(e:any)=>{
    // this._apiService.isCompareLoader$.next(false);
  })
}

  onClick(data:any)
  {
   
    this.filterDataEmitter.emit(data.target.value);      
  
  }

}
