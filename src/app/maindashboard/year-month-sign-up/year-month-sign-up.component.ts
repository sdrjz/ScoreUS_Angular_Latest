import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-year-month-sign-up',
  templateUrl: './year-month-sign-up.component.html',
  styleUrls: ['./year-month-sign-up.component.css']
})
export class YearMonthSignUpComponent implements OnInit,OnChanges {
  @Input() superAdminCounts:any
  @Input() dateDiff!:any;
  @Input() name:any
  @Input() type:any
  sentance:any="";
 
  constructor(private cdr:ChangeDetectorRef,
    private _apiService:GeneralApiService,
    private translateService:TranslateService) { }
  ngOnInit(): void {

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['superAdminCounts']){
      if(this.dateDiff === null || this.dateDiff === undefined) return ;

      let dateDiff = +this.dateDiff+1
        this.sentance = " than last " + Math.round(dateDiff) + " days period";

      // if (dateDiff <= 31) {
      //   this.sentance = " than last " + Math.round(dateDiff) + " day period";
      // }else if(dateDiff<364){
      //   this.sentance = " than last " + Math.round(dateDiff / 30) + " month period"
      // }
      // else if(dateDiff<(364*5)) {
      //   this.sentance = " than last " + Math.round(dateDiff / 365) + " year period"
      // }else
      // this.sentance = ""

      this.cdr.detectChanges()

    }
  }



  getPercentageValue(propertyName:any){
    if(!this.superAdminCounts) return 0
    if(this.superAdminCounts[0][propertyName] == 0) return 0;
    let value =(this.superAdminCounts[0][propertyName]-this.superAdminCounts[1][propertyName])/this.superAdminCounts[0][propertyName];
    return Math.round(value)
  }


}
