import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { tips } from 'src/app/tootTips';

@Component({
  selector: 'app-newuserreg',
  templateUrl: './newuserreg.component.html',
  styleUrls: ['./newuserreg.component.css']
})
export class NewuserregComponent implements OnInit,OnChanges {
  public ltaDiff: any = null
  public otdDiff: any = null
  public ncrDiff: any = null
  public ppvDiff: any = null
  public ltaSentance!:string
  public otdSentance!:string
  public ncrSentance!:string
  public ppvSentance!:string
  
  @Input() dateDiff: any
  @Input() data!: any
  @Input() subtitle: string;
  @Input() previousStatus: any
  sentance: any
  tips = tips
  constructor(private cdr: ChangeDetectorRef,
    private _apiService:GeneralApiService,
    private translateService:TranslateService,
    ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      
      
      
      
      if(this.data === null || this.data === undefined || Object.keys(this.data).length == 0) return
      if(this.data.length<1) return
      
      
      
      if (this.dateDiff === null || this.dateDiff === undefined)
        return
      
        let dateDiff = +this.dateDiff
        this.sentance = " than last " + Math.round(dateDiff) + " days period";
      
      
      
      if(this.data?.previousStatus[0]?.lta_percentage === null || this.data?.previousStatus[0]?.lta_percentage === undefined || this.data?.previousStatus[0]?.lta_percentage == 0)
      {

        this.ltaDiff = this.data?.previousStatus[0]?.lta_percentage == 0 ? 100 :this.data?.currentStatus[0]?.lta_percentage.toFixed(2)
        this.ltaSentance = this.data?.previousStatus[0]?.lta_percentage == 0 ? " ":this.sentance

      }
      else
      {
        let lta1 = this.data?.currentStatus[0]?.lta_percentage
        let lta2 = this.data?.previousStatus[0]?.lta_percentage
        let diff =lta1-lta2
        this.ltaDiff = ((diff/lta2) *100).toFixed(2)
        this.ltaSentance = this.sentance
      }

      if(this.data?.previousStatus[0]?.ncr_percentage === null || this.data?.previousStatus[0]?.ncr_percentage === undefined || this.data?.previousStatus[0]?.ncr_percentage == 0)
      {
        this.ncrDiff = this.data?.previousStatus[0]?.ncr_percentage == 0 ? 100 :this.data?.currentStatus[0]?.ncr_percentage.toFixed(2)
        this.ncrSentance = this.data?.previousStatus[0]?.ncr_percentage == 0 ? " ":this.sentance

        
       
      }
      else
      {
        let ncr1 = this.data?.currentStatus[0]?.ncr_percentage
        let ncr2 = this.data?.previousStatus[0]?.ncr_percentage
        let diff =ncr1-ncr2
        this.ncrDiff = ((diff/ncr2)*100).toFixed(2)
        this.ncrSentance = this.sentance
      }
      
      
      if(this.data?.previousStatus[0]?.otd_percentage === null || this.data?.previousStatus[0]?.otd_percentage === undefined || this.data?.previousStatus[0]?.otd_percentage == 0)
      {
        this.otdDiff = this.data?.previousStatus[0]?.otd_percentage == 0 ? 100 :this.data?.currentStatus[0]?.otd_percentage.toFixed(2)
        this.otdSentance = this.data?.previousStatus[0]?.otd_percentage == 0 ? " ":this.sentance


      
      }
      else
      {
        let otd1 = this.data?.currentStatus[0]?.otd_percentage
        let otd2 = this.data?.previousStatus[0]?.otd_percentage
        let diff =otd1-otd2
        this.otdDiff = ((diff/otd2)*100).toFixed(2)
        this.otdSentance = this.sentance
      }
      
      if(this.data?.previousStatus[0]?.ppv_percentage === null || this.data?.previousStatus[0]?.ppv_percentage === undefined || this.data?.previousStatus[0]?.ppv_percentage == 0)
      {
        this.ppvDiff = this.data?.previousStatus[0]?.ppv_percentage == 0 ? 100 :this.data?.currentStatus[0]?.ppv_percentage.toFixed(2)
        this.ppvSentance = this.data?.previousStatus[0]?.ppv_percentage == 0 ? " ":this.sentance

      }
      else
      {
        let ppv1 = this.data?.currentStatus[0]?.ppv_percentage
        let ppv2 = this.data?.previousStatus[0]?.ppv_percentage
        let diff =ppv1-ppv2
        this.ppvDiff = ((diff/ppv2)*100).toFixed(2)
        this.ppvSentance = this.sentance
      }


      // this.ncrDiff = Math.round(this.data?.currentStatus[0]?.ncr_percentage - (this.data?.previousStatus[0]?.ncr_percentage !== null || this.data?.previousStatus[0]?.ncr_percentage !== undefined ? this.data?.previousStatus[0]?.ncr_percentage : 0))
      // this.otdDiff = Math.round(this.data?.currentStatus[0]?.otd_percentage - (this.data?.previousStatus[0]?.otd_percentage !== null || this.data?.previousStatus[0]?.otd_percentage !== undefined ? this.data?.previousStatus[0]?.otd_percentage : 0))
      // this.ppvDiff = Math.round(this.data?.currentStatus[0]?.ppv_percentage - (this.data?.previousStatus[0]?.ppv_percentage !== null || this.data?.previousStatus[0]?.ppv_percentage !== undefined ? this.data?.previousStatus[0]?.ppv_percentage : 0))
      
      

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
  ngOnInit(): void {

  

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }

  getImage(num :any) {
    if (+num < 0) 
      return '../../../assets/images/arrow-narrow-up.png' 
       else if (+num == 0) 
      return '../../../assets/images/yellow2.png'
      else if (+num > 0) 
      return '../../../assets/images/ic-arrow-narrow-up.svg'
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
      return +ncrDiff < 0 ? 'width:10px !important;margin-right:5px !important ':'width:15px !important; margin-right:5px !important'
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
