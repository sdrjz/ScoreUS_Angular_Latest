import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-product-cat',
  templateUrl: './product-cat.component.html',
  styleUrls: ['./product-cat.component.css']
})
export class ProductCatComponent implements OnInit {

  constructor(private _apiService:GeneralApiService,private translateService:TranslateService,
    private cdr :ChangeDetectorRef) { }

  ngOnInit(): void {
    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }

}
