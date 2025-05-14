import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-vendor-color-zone',
  templateUrl: './vendor-color-zone.component.html',
  styleUrls: ['./vendor-color-zone.component.css']
})
export class VendorColorZoneComponent implements OnInit, OnChanges {
  greenPercentageComparison
  redPercentageComparison
  yellowPercentageComparison
  greenIsNeg : boolean = false;
  redIsNeg : boolean = false;
  yellowIsNeg : boolean = false;
  @Input() colorZoneStat: any[] = []
  @Input() data: any
  @Input() subtitle: string;
  @Input() dateDiff: any
  sentance: any
  public greenSentance: any
  public redSentance: any
  public yellowSentance: any
  constructor(private _apiService: GeneralApiService,
     private translateService: TranslateService,
     private cdr :ChangeDetectorRef) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['colorZoneStat']) {
      
      if (this.colorZoneStat === undefined || this.colorZoneStat === null)
        return;

      if (this.colorZoneStat.length < 1)
        return

      if (this.dateDiff === null || this.dateDiff === undefined)
      return
      let dateDiff = +this.dateDiff
      this.sentance = "than last " + Math.round(dateDiff) + " days period";
      let green1 = this.getPercentage(this.colorZoneStat[0][0], this.colorZoneStat[0][3])
      let green2 = this.colorZoneStat.length<2 ? 0: this.getPercentage(this.colorZoneStat[1][0], this.colorZoneStat[1][3])
      
      let greenDif = green1 - green2
      this.greenIsNeg = greenDif < 0 ? true: false
      
      if(greenDif ==0)
      {
        this.greenPercentageComparison = 0
        this.greenSentance = this.sentance
      }
      else
      if (green2 == 0) {
        if (green1 == 0) {
          this.greenPercentageComparison = 0
          this.greenSentance = this.sentance
        } else {
          this.greenPercentageComparison = 100;
          this.greenSentance = this.sentance
        }
      } else {
        let result = ((greenDif / Math.abs(green2))) * 100
        this.greenPercentageComparison = result.toFixed(2);

        // this.greenPercentageComparison = Number.parseFloat(((greenDif / Math.abs(green2)) * 100).toFixed(2))
        this.greenSentance = this.sentance
      }
      let red1 = this.getPercentage(this.colorZoneStat[0][2], this.colorZoneStat[0][3])
      let red2 = this.colorZoneStat.length<2 ? 0 : this.getPercentage(this.colorZoneStat[1][2], this.colorZoneStat[1][3])
      let redDif = red1 - red2
console.log('🔴 C Red Count:', this.colorZoneStat[0][2], 'Denominator:', this.colorZoneStat[0][3]);
console.log('🟥 P Red Count:', this.colorZoneStat[1]?.[2], 'Denominator:', this.colorZoneStat[1]?.[3]);
console.log('🔴 C Red % (red1):', red1);
console.log('🟥 P Red % (red2):', red2);

      this.redIsNeg = redDif < 0 ? true : false
console.log('🔻 Red Difference (redDif = red1 - red2):', redDif);
      if(redDif ==0)
      {
        this.redPercentageComparison = 0
        this.redSentance = this.sentance
      }
      else
      if (red2 == 0) {
        if (red1 == 0) {
          this.redPercentageComparison = 0
          this.redSentance = this.sentance
        } else {
          this.redPercentageComparison = 100;
          this.redSentance = this.sentance
        }
      } else {
        let result = ((redDif / Math.abs(red2)) * 100)
        this.redPercentageComparison = result.toFixed(2);
        // this.redPercentageComparison = Number.parseFloat(((redDif / Math.abs(red2)) * 100).toFixed(2));
        this.redSentance = this.sentance
      }



      let yellow1 = this.getPercentage(this.colorZoneStat[0][1], this.colorZoneStat[0][3])
      let yellow2 = this.colorZoneStat.length<2 ? 0 : this.getPercentage(this.colorZoneStat[1][1], this.colorZoneStat[1][3])
      let yellowDif = yellow1 - yellow2

      this.yellowIsNeg = yellowDif < 0 ? true : false


      if(yellowDif ==0)
      {
        this.yellowPercentageComparison = 0
        this.yellowSentance = this.sentance
      }
      else
      if (yellow2 == 0) {
        if (yellow1 == 0) {
          this.yellowPercentageComparison = 0
          this.yellowSentance = this.sentance
        } else {
          this.yellowPercentageComparison = 100;
          this.yellowSentance = this.sentance
        }
      } else {
        
        let result = ((yellowDif / Math.abs(yellow2)) * 100);
        this.yellowPercentageComparison = result.toFixed(2);
        // this.yellowPercentageComparison = Number.parseFloat(((yellowDif / Math.abs(yellow2)) * 100).toFixed(2));
        this.yellowSentance = this.sentance
      }






      // this.greenPercentageComparison = ((this.getPercentage(this.colorZoneStat[0][0],this.colorZoneStat[0][3])- this.getPercentage(this.colorZoneStat[1][0],this.colorZoneStat[1][3]))/this.getPercentage(this.colorZoneStat[0][0],this.colorZoneStat[0][3])==0?1:this.getPercentage(this.colorZoneStat[0][0],this.colorZoneStat[0][3]));
      // this.greenPercentageComparison = this.greenPercentageComparison.toFixed(2)   
      // this.yellowPercentageComparison = ((this.getPercentage(this.colorZoneStat[0][1],this.colorZoneStat[0][3])- this.getPercentage(this.colorZoneStat[0][1],this.colorZoneStat[1][3]))/this.getPercentage(this.colorZoneStat[0][1],this.colorZoneStat[0][3])==0?1:this.getPercentage(this.colorZoneStat[0][1],this.colorZoneStat[0][3]));
      // this.yellowPercentageComparison = this.yellowPercentageComparison.toFixed(2) 
      // this.redPercentageComparison = ((this.getPercentage(this.colorZoneStat[0][2],this.colorZoneStat[0][3])- this.getPercentage(this.colorZoneStat[0][2],this.colorZoneStat[1][3]))/this.getPercentage(this.colorZoneStat[0][2],this.colorZoneStat[0][3])==0?1:this.getPercentage(this.colorZoneStat[0][2],this.colorZoneStat[0][3]));
      // this.redPercentageComparison = this.redPercentageComparison.toFixed(2) 

      // if (dateDiff <= 31) {
      //   this.sentance = " than last " + Math.round(dateDiff) +   " day period";
      // }else if(dateDiff<364){
      //   this.sentance = " than last " + Math.round(dateDiff / 30) + " month period"
      // }
      // else {
      //   this.sentance = " than last " + Math.round(dateDiff / 365) + " year period"
      // }



    }
  }

  ngOnInit(): void {
  
     
  
    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }


  public getPercentage(neum: number, deno: number) {
    return Number.parseFloat(((neum / deno) * 100).toFixed(3))
  }

  getImage(num :any) {
    if (+num < 0) 
      return '../../../assets/images/arrow-narrow-up.png' 
       else if (+num == 0) 
      return '../../../assets/images/yellow2.png'
      else if (+num > 0) 
      return '../../../assets/images/ic-arrow-narrow-up.svg'
    }

    getRedYellowStyle(num :any)
    {
      if (+num > 0) 
        return 'width:14px !important; margin-right: 2px !important;' 
         else if (+num == 0) 
        return 'width:14px !important; margin-right: 2px !important;'
        else if (+num < 0) 
        return 'width:08px !important; margin-right: 2px !important;'
      
    }

    getRedYellowImage(num :any) {
      if (+num > 0) 
        return '../../../assets/images/redup.png' 
         else if (+num == 0) 
        return '../../../assets/images/yellow2.png'
        else if (+num < 0) 
        return '../../../assets/images/greendown.png'
      // if (+num > 0) 
      //   return '../../../assets/images/arrow-narrow-up.png' 
      //    else if (+num == 0) 
      //   return '../../../assets/images/yellow.png'
      //   else if (+num < 0) 
      //   return '../../../assets/images/ic-arrow-narrow-up.svg'
      }

  getTextColor(num :any){
    if (+num < 0) 
    return 'color:red !important;' 
     else if (+num == 0) 
    return 'color:#FFCF64 !important;'
    else if (+num > 0) 
    return 'color:#00D9A6 !important;'

  }

  
  getRedYellowTextColor(num :any){
    if (+num > 0) 
    return 'color:red !important;width:14px !important;margin-right:2px !important;' 
     else if (+num == 0) 
    return 'color:#FFCF64 !important;width:14px !important;margin-right:2px !important;'
    else if (+num < 0) 
    return 'color:#00D9A6 !important;width:8px !important;margin-right:2px !important;'
  }
  


}