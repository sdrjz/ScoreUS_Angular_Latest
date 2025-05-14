import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { tips } from 'src/app/tootTips';
import { LtadetailComponent } from '../report/ltadetail/ltadetail.component';

@Component({
  selector: 'app-vendorscorecard-boxes',
  templateUrl: './vendorscorecard-boxes.component.html',
  styleUrls: ['./vendorscorecard-boxes.component.css']
})
export class VendorscorecardBoxesComponent implements OnInit, OnChanges {
  public ltaDiff: any = null
  public otdDiff: any = null
  public ncrDiff: any = null
  public ppvDiff: any = null
  public ltaSentance: string = null
  public otdSentance: string = null
  public ncrSentance: string = null
  public ppvSentance: string = null
  public ncrIsNeg : boolean = false
  public otdIsNeg : boolean = false
  public ppvIsNeg : boolean = false
  public ltaIsNeg : boolean = false
  @Input() dateDiff: any
  @Input() data: any | null
  @Input() subtitle: string;
  @Input() previousStatus: any
  sentance: any
  tips = tips
  constructor(private cdr: ChangeDetectorRef,private translateService:TranslateService,
  private _apiService:GeneralApiService) { }
  

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      if(this.data === null || this.data === undefined  || !this.data.previousStatus || this.data?.previousStatus?.length <1){
        this.cdr.detectChanges()
        return
      }
      if (this.dateDiff === null || this.dateDiff === undefined)
        return
      
      let dateDiff = +this.dateDiff
      this.sentance = "than last " + Math.round(dateDiff) + " days period";

      let lta1 = this.data?.currentStatus[0].lta_percentage
      let lta2 = this.data?.previousStatus === null ? null : this.data?.previousStatus[0].lta_percentage
     
      if(lta1 !== undefined && lta2 !== undefined && lta1 == lta2)
        {
          this.ltaDiff =  0
          this.ltaSentance = this.sentance
            
        }
        else
      if(lta2 == 0 )
      {
        this.ltaDiff =  100
        this.ltaSentance = this.sentance
        
      }else if(lta1 == 0)
      {
        this.ltaDiff = -100
      }
      else{
        let ltaDifference = lta1-lta2
        this.ltaIsNeg = ltaDifference < 0 ? true : false
         
        
        this.ltaDiff = Number.parseFloat(((ltaDifference/Math.abs(lta2))*100).toFixed(2))
        
        this.ltaSentance = this.sentance
      }
      
      let otd1 = this.data?.currentStatus[0].otd_percentage
      let otd2 = this.data?.previousStatus === null ? null : this.data?.previousStatus[0].otd_percentage
      if(otd1 !== undefined && otd2 !== undefined && otd1 == otd2)
        {
          this.otdDiff = 0
          this.otdSentance = this.sentance
        }
  
        if(otd2 == 0)
      {
        this.otdDiff =  100 
        this.otdSentance = this.sentance
        
      }else if(otd1 == 0){
        this.otdDiff = -100
        this.otdSentance = this.sentance
      }
      else if(otd2 === null){
        this.otdDiff = 100
        this.otdSentance = this.sentance
      }
      else
      {
        let otdDifference = otd1-otd2
        this.otdIsNeg = otdDifference < 0 ? true : false
        this.otdDiff = Number.parseFloat(((otdDifference/Math.abs(otd2))*100).toFixed(2))
        this.otdSentance = this.sentance
      }
      

      let ncr1 = this.data?.currentStatus[0].ncr_percentage
      let ncr2 = this.data?.previousStatus === null ? null : this.data?.previousStatus[0].ncr_percentage  
      
      
      if(ncr1 !== undefined && ncr2 !== undefined && ncr1 == ncr2){
        this.ncrDiff = 0
        this.ncrSentance = this.sentance
        }
        else
      if(ncr2 == 0 || ncr2 === null)
        {
        
          this.ncrDiff = 100 
          this.ncrSentance = this.sentance
        
        }
        else if(ncr1 == 0){
        
        this.ncrDiff = -100 
        this.ncrSentance = this.sentance
        
      }
      else
      {
        let ncrDifference = ncr1-ncr2
        this.ncrIsNeg = ncrDifference < 0 ? true : false
         
        this.ncrDiff = Number.parseFloat(((ncrDifference/Math.abs(ncr2))*100).toFixed(2));
        
        
        this.ncrSentance = this.sentance
      }
      
      let ppv1 = this.data?.currentStatus[0].ppv_percentage
      let ppv2 = this.data?.previousStatus === null ? null : this.data?.previousStatus[0].ppv_percentage
      if(ppv1 !== undefined && ppv2 !== undefined && ppv1 == ppv2)
        {
          this.ppvDiff = 0;
          this.ppvSentance = this.sentance;
        }
        else
      if(ppv2 == 0 || ppv2 === null)
      {
  if (ppv1 > 0) {
    this.ppvDiff = 100
  } else if (ppv1 < 0) {
    this.ppvDiff = -100
  } 
  this.ppvSentance = this.sentance
}
else if(ppv1 ==0)
      {
        this.ppvDiff =  -100
        this.ppvSentance = this.sentance
      }
      else{
        let ppvDifference = ppv1-ppv2
        this.ppvIsNeg = ppvDifference < 0 ? true : false
         
        
        this.ppvDiff = Number.parseFloat(((ppvDifference/Math.abs(ppv2))*100).toFixed(2))
        this.ppvSentance = this.sentance
      }
      
      // this.ltaDiff = Math.round(this.data?.currentStatus[0]?.lta_percentage - (this.data?.previousStatus[0]?.lta_percentage === null || this.data?.previousStatus[0]?.lta_percentage === null ? this.data?.previousStatus[0]?.lta_percentage : 0))
      // this.otdDiff = Math.round(this.data?.currentStatus[0]?.otd_percentage - (this.data?.previousStatus[0]?.otd_percentage === null || this.data?.previousStatus[0]?.otd_percentage === null ? this.data?.previousStatus[0]?.otd_percentage : 0))
      // this.ncrDiff = Math.round(this.data?.currentStatus[0]?.ppv_percentage - (this.data?.previousStatus[0]?.ppv_percentage === null || this.data?.previousStatus[0]?.ppv_percentage === null ? this.data?.previousStatus[0]?.ppv_percentage : 0))
      // this.ppvDiff = Math.round(this.data?.currentStatus[0]?.ncr_percentage - (this.data?.previousStatus[0]?.ncr_percentage === null || this.data?.previousStatus[0]?.ncr_percentage === null ? this.data?.previousStatus[0]?.ncr_percentage : 0))
      

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

    if (changes['dateDiff']) {
      if (this.dateDiff === null || this.dateDiff === undefined)
        return


    }
  }

  roundOffPercentage(percentage: any): any {
    return Number.parseFloat(percentage).toFixed(2); // Round to two decimal places
  }

  ngOnInit(): void {
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
   }


   getImage(num :any) {
    if (+num < 0) 
      return '../../../assets/images/reddown.png' 
       else if (+num == 0) 
      return '../../../assets/images/yellow2.png'
      else if (+num > 0) 
      return '../../../assets/images/greenup.png'

    }
  
    getNCRPPVImage(num :any) {
      if (+num > 0) 
      return '../../../assets/images/redup.png' 
       else if (+num == 0) 
      return '../../../assets/images/yellow2.png'
      else if (+num < 0) 
      return '../../../assets/images/greendown.png'
    }

    getNCRPPVStyle(ncrDiff:any){
      return +ncrDiff > 0 ? 'width:10px !important;margin-right:5px !important ':'width:15px !important; margin-right:5px !important'
    }


  getTextColor(num :any){
    if (+num < 0) 
    return 'color:red !important;' 
     else if (+num == 0) 
    return 'color:#FFCF64 !important;'
    else if (+num > 0) 
    return 'color:#00D9A6 !important;'

   }
  
  getNCRPPVTextColor(num :any){
    if (+num > 0) 
    return 'color:red !important;' 
     else if (+num == 0) 
    return 'color:#FFCF64 !important;'
    else if (+num < 0) 
    return 'color:#00D9A6 !important;'
     
  }
  



}
