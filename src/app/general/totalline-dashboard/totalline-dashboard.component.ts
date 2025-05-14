import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-totalline-dashboard',
  templateUrl: './totalline-dashboard.component.html',
  styleUrls: ['./totalline-dashboard.component.css']
})
export class TotallineDashboardComponent implements OnInit,OnChanges {
  @Input() dateDiff:any
  @Input() dataStats:any | null
  sentance:any=""
  totalPOSpendDiff :any
  totalIssuePODiff :any
  totalSourcedItemDiff :any
  totalRecievedPOLineDiff :any

  constructor(private _apiService:GeneralApiService,
    private translateService:TranslateService,
    private cdr : ChangeDetectorRef) { }

  ngOnInit(): void {
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }

  formatNumber(number: number): string {
    return number.toLocaleString(); // Automatically adds thousand separators
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataStats'])
   {
    if(this.dataStats === null || this.dataStats === undefined) return
   this.totalPOSpendDiff= this.dataStats?.previousData?.totalSpend == 0? this.dataStats?.currentData?.totalSpend: (((+this.dataStats?.currentData?.totalSpend)-(+this.dataStats?.previousData?.totalSpend))/(+this.dataStats?.previousData?.totalSpend))*100
   this.totalPOSpendDiff= +this.totalPOSpendDiff.toFixed(2) 
   this.totalIssuePODiff= this.dataStats?.previousData?.issuePOLines == 0? this.dataStats?.currentData?.issuePOLines: (((+this.dataStats?.currentData?.issuePOLines)-(+this.dataStats?.previousData?.issuePOLines))/(+this.dataStats?.previousData?.issuePOLines))*100
   this.totalIssuePODiff= +this.totalIssuePODiff.toFixed(2)
   this.totalSourcedItemDiff= this.dataStats?.previousRegistration?.sourced_Items == 0? this.dataStats?.currentData?.sourced_Items: (((+this.dataStats?.currentData?.sourced_Items)-(+this.dataStats?.previousData?.sourced_Items))/(+this.dataStats?.previousData?.sourced_Items))*100
   this.totalSourcedItemDiff= +this.totalSourcedItemDiff.toFixed(2)
   this.totalRecievedPOLineDiff= this.dataStats?.previousRegistration?.receivedPOLines == 0? this.dataStats?.currentData?.receivedPOLines: (((+this.dataStats?.previousData?.receivedPOLines)-(+this.dataStats?.previousData?.receivedPOLines))/(+this.dataStats?.previousData?.receivedPOLines))*100
   this.totalRecievedPOLineDiff= +this.totalRecievedPOLineDiff.toFixed(2)
   //  this.buyerDiff= (((+this.data?.currentRegistration?.buyerRegistration)-(+this.data?.previousRegistration?.buyerRegistration))/(+this.data?.previousRegistration?.buyerRegistrations))*100
   if (this.dateDiff === null || this.dateDiff === undefined)
   return
 let dateDiff = +this.dateDiff
    this.sentance = " than last " + dateDiff + " days period";
 //  if (dateDiff <= 31) {
  //    this.sentance = " than last " + Math.round(dateDiff) + " day period";
//  }else if(dateDiff<364){
//    this.sentance = " than last " + Math.round(dateDiff / 30) + " month period"
//  }
//  else {
//    this.sentance = " than last " + Math.round(dateDiff / 365) + " year period"
//  }

   
   
  
  } 
  }

}
