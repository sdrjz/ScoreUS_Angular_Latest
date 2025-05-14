import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isLoading = false
  constructor(private _apiService:GeneralApiService,
    private translateService : TranslateService,
    private cdr : ChangeDetectorRef) { }

  ngOnInit(): void {
    this._apiService.isCompareLoader$.subscribe((res:any)=>{
      this.isLoading=res
    })
    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  
  }

}
