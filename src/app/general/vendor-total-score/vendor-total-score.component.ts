import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-vendor-total-score',
  templateUrl: './vendor-total-score.component.html',
  styleUrls: ['./vendor-total-score.component.css']
})
export class VendorTotalScoreComponent implements OnInit, OnChanges {
  @Input() data: any
  @Input() totalscorename: string;
  @Input() previousStatus: any
  @Input() dateDiff: any
  public totalIsNeg: boolean = false;
  sentance: any
  constructor(private cdr: ChangeDetectorRef,private _apiService:GeneralApiService,private translateService:TranslateService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
     
      if(this.data === null)return

      let total1 = this.data?.currentStatus[0]?.totalScore
      let total2 = this.data?.previousStatus === null? null :this.data?.previousStatus[0]?.totalScore
      
      if(total2 == 0 || total2 === null){
        this.previousStatus = 100
      }else if(total1 == 0){
        this.previousStatus = -100
      }else{
        let totalDiff = total1-total2
        this.totalIsNeg = totalDiff < 0 ? true: false
        this.previousStatus = Number.parseFloat(((totalDiff/Math.abs(total2))*100).toFixed(2))

      }

      
      // this.previousStatus = Math.round(this.data?.currentStatus[0]?.totalScore - (this.data?.previousStatus[0]?.totalScore === null || this.data?.previousStatus[0]?.totalScore === null ? this.data?.previousStatus[0]?.totalScore : 0))

      if (this.dateDiff === null || this.dateDiff === undefined)
        return
        let dateDiff = +this.dateDiff
          this.sentance = "than last " + Math.round(dateDiff) + " days period";
      

        // if (dateDiff <= 31) {
        //   this.sentance = " than last " + Math.round(dateDiff) + " day period";
        // }else if(dateDiff<364){
        //   this.sentance = " than last " + Math.round(dateDiff / 30) + " month period"
        // }
        // else {
        //   this.sentance = " than last " + Math.round(dateDiff / 365) + " year period"
        // }


        

      this.cdr.detectChanges()
    }
  }

  ngOnInit(): void {
    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
 
  }


  getImage() {
    if (this.previousStatus < 0) 
      return '../../../assets/images/arrow-narrow-up.png' 
       else if (this.previousStatus == 0) 
      return '../../../assets/images/yellow2.png'
      else if (this.previousStatus > 0) 
      return '../../../assets/images/ic-arrow-narrow-up.svg'
    }


  getTextColor(){
    if (this.previousStatus < 0) 
    return 'color:red !important;' 
     else if (this.previousStatus == 0) 
    return 'color:#FFCF64 !important;'
    else if (this.previousStatus > 0) 
    return 'color:#00D9A6 !important;'

  }

}
