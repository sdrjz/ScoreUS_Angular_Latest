import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-registrations-dashboard',
  templateUrl: './registrations-dashboard.component.html',
  styleUrls: ['./registrations-dashboard.component.css']
})
export class RegistrationsDashboardComponent implements OnInit,OnChanges {
  @Input() dateDiff:any
  @Input() data:any
  buyerDiff:any
  vendorDiff:any
  commodityDiff:any
  materialDiff:any
  plantDiff:any
  invitedVendorDiff:any
  sentance:string
  constructor(private translateService:TranslateService,
    private _apiService:GeneralApiService,
    private cdr : ChangeDetectorRef) { }

  ngOnInit(): void {
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'])
   {
    if(this.data === null || this.data === undefined) return
   this.buyerDiff= this.data?.previousRegistration?.registeredBuyer == 0? this.data?.currentRegistration?.registeredBuyer: (((+this.data?.currentRegistration?.registeredBuyer)-(+this.data?.previousRegistration?.registeredBuyer))/(+this.data?.currentRegistration?.registeredBuyer))*100
   this.vendorDiff= this.data?.previousRegistration?.registeredVendor == 0? this.data?.currentRegistration?.registeredVendor: (((+this.data?.currentRegistration?.registeredVendor)-(+this.data?.previousRegistration?.registeredVendor))/(+this.data?.currentRegistration?.registeredVendor))*100
   this.commodityDiff= this.data?.previousRegistration?.registeredCommodity == 0? this.data?.currentRegistration?.registeredCommodity: (((+this.data?.currentRegistration?.registeredCommodity)-(+this.data?.previousRegistration?.registeredCommodity))/(+this.data?.currentRegistration?.registeredCommodity))*100
   this.plantDiff= this.data?.previousRegistration?.registeredPlant == 0? this.data?.currentRegistration?.registeredPlant: (((+this.data?.currentRegistration?.registeredPlant)-(+this.data?.previousRegistration?.registeredPlant))/(+this.data?.currentRegistration?.registeredPlant))*100
   this.materialDiff=this.data?.previousRegistration?.registeredMaterial == 0? this.data?.currentRegistration?.registeredMaterial: (((+this.data?.currentRegistration?.registeredMaterial)-(+this.data?.previousRegistration?.registeredMaterial))/(+this.data?.currentRegistration?.registeredMaterial))*100
   this.invitedVendorDiff= this.data?.previousRegistration?.invitedVendor == 0? this.data?.currentRegistration?.invitedVendor: (((+this.data?.currentRegistration?.invitedVendor)-(+this.data?.previousRegistration?.invitedVendor))/(+this.data?.currentRegistration?.invitedVendor))*100
  
   //  this.buyerDiff= (((+this.data?.currentRegistration?.buyerRegistration)-(+this.data?.previousRegistration?.buyerRegistration))/(+this.data?.currentRegistration?.buyerRegistrations))*100
   if (this.dateDiff === null || this.dateDiff === undefined)
   return
 let dateDiff = +this.dateDiff
    this.sentance = " than last " + Math.round(dateDiff) + " days period";
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


  isEmpty(){
    return Object.keys(this.data).length == 0 ? true :false;
  }


  Absolute(data:number)
  {
    return Math.abs(data).toFixed(2);
  }


  getTextColor(num :any){
    if (+num < 0) 
    return 'color:red !important;' 
     else if (+num == 0) 
    return 'color:#FFCF64 !important;'
    else if (+num > 0) 
    return 'color:#00D9A6 !important;'

  }

  
  getImage(num :any) {
    if (+num < 0) 
      return '../../../assets/images/arrow-narrow-up.png' 
       else if (+num == 0) 
      return '../../../assets/images/yellow2.png'
      else if (+num > 0) 
      return '../../../assets/images/ic-arrow-narrow-up.svg'
    }
   
}
