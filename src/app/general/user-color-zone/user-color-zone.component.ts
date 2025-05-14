import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-user-color-zone',
  templateUrl: './user-color-zone.component.html',
  styleUrls: ['./user-color-zone.component.css']
})
export class UserColorZoneComponent implements OnInit,OnChanges {
  vendorGreenPercentageComparison
  vendorRedPercentageComparison
  vendorYellowPercentageComparison
  plantGreenPercentageComparison
  plantRedPercentageComparison
  plantYellowPercentageComparison
  commodityGreenPercentageComparison
  commodityRedPercentageComparison
  commodityYellowPercentageComparison
  materialGreenPercentageComparison
  materialRedPercentageComparison
  materialYellowPercentageComparison
  buyerGreenPercentageComparison
  buyerRedPercentageComparison
  buyerYellowPercentageComparison
  @Input() vendorColorZoneStats:any[]
  @Input() commodityColorZoneStats:any[]
  @Input() buyerColorZoneStats:any[]
  @Input() materialColorZoneStats:any[]
  @Input() plantColorZoneStats:any[]
  @Input() dateDiff
  sentance :string
  constructor(private _apiService:GeneralApiService,
    private translateService:TranslateService,
    private cdr : ChangeDetectorRef) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['vendorColorZoneStats'])
    {
      if(this.vendorColorZoneStats === undefined || this.vendorColorZoneStats === null)
      return;
      this.vendorGreenPercentageComparison = this.getPercentage(this.vendorColorZoneStats[1][0],this.vendorColorZoneStats[1][3])== 0 ? 0 : (this.getPercentage(this.vendorColorZoneStats[0][0],this.vendorColorZoneStats[0][3])- this.getPercentage(this.vendorColorZoneStats[1][0],this.vendorColorZoneStats[1][3]))/this.getPercentage(this.vendorColorZoneStats[1][0],this.vendorColorZoneStats[1][3]);
      this.vendorGreenPercentageComparison = (this.vendorGreenPercentageComparison *100).toFixed(2)
      this.vendorYellowPercentageComparison =this.getPercentage(this.vendorColorZoneStats[1][1],this.vendorColorZoneStats[1][3])== 0 ? 0 : (this.getPercentage(this.vendorColorZoneStats[0][1],this.vendorColorZoneStats[0][3])- this.getPercentage(this.vendorColorZoneStats[1][1],this.vendorColorZoneStats[1][3]))/this.getPercentage(this.vendorColorZoneStats[1][1],this.vendorColorZoneStats[1][3]);
      this.vendorYellowPercentageComparison = (this.vendorYellowPercentageComparison *100).toFixed(2) 
      this.vendorRedPercentageComparison = this.getPercentage(this.vendorColorZoneStats[1][2],this.vendorColorZoneStats[1][3])== 0 ? 0 : (this.getPercentage(this.vendorColorZoneStats[0][2],this.vendorColorZoneStats[0][3])  - this.getPercentage(this.vendorColorZoneStats[1][2],this.vendorColorZoneStats[1][3]))/this.getPercentage(this.vendorColorZoneStats[1][2],this.vendorColorZoneStats[1][3]);
      this.vendorRedPercentageComparison = (this.vendorRedPercentageComparison *100).toFixed(2) 
  

      this.plantGreenPercentageComparison = this.getPercentage(this.plantColorZoneStats[1][0],this.plantColorZoneStats[1][3])== 0 ? 0 : (this.getPercentage(this.plantColorZoneStats[0][0],this.plantColorZoneStats[0][3])- this.getPercentage(this.plantColorZoneStats[1][0],this.plantColorZoneStats[1][3]))/this.getPercentage(this.plantColorZoneStats[1][0],this.plantColorZoneStats[1][3]);
      this.plantGreenPercentageComparison = (this.plantGreenPercentageComparison *100).toFixed(2)
      this.plantYellowPercentageComparison =this.getPercentage(this.plantColorZoneStats[1][1],this.plantColorZoneStats[1][3])== 0 ? 0 : (this.getPercentage(this.plantColorZoneStats[0][1],this.plantColorZoneStats[0][3])- this.getPercentage(this.plantColorZoneStats[1][1],this.plantColorZoneStats[1][3]))/this.getPercentage(this.plantColorZoneStats[1][1],this.plantColorZoneStats[1][3]);
      this.plantYellowPercentageComparison = (this.plantYellowPercentageComparison *100).toFixed(2) 
      this.plantRedPercentageComparison = this.getPercentage(this.plantColorZoneStats[1][2],this.plantColorZoneStats[1][3])== 0 ? 0 : (this.getPercentage(this.plantColorZoneStats[0][2],this.plantColorZoneStats[0][3])  - this.getPercentage(this.plantColorZoneStats[1][2],this.plantColorZoneStats[1][3]))/this.getPercentage(this.plantColorZoneStats[1][2],this.plantColorZoneStats[1][3]);
      this.plantRedPercentageComparison = (this.plantRedPercentageComparison *100).toFixed(2) 
        


      this.commodityGreenPercentageComparison = this.getPercentage(this.commodityColorZoneStats[1][0],this.commodityColorZoneStats[1][3])== 0 ? 0 : (this.getPercentage(this.commodityColorZoneStats[0][0],this.commodityColorZoneStats[0][3])- this.getPercentage(this.commodityColorZoneStats[1][0],this.commodityColorZoneStats[1][3]))/this.getPercentage(this.commodityColorZoneStats[1][0],this.commodityColorZoneStats[1][3]);
      this.commodityGreenPercentageComparison = (this.commodityGreenPercentageComparison *100).toFixed(2)
      this.commodityYellowPercentageComparison =this.getPercentage(this.commodityColorZoneStats[1][1],this.commodityColorZoneStats[1][3])== 0 ? 0 : (this.getPercentage(this.commodityColorZoneStats[0][1],this.commodityColorZoneStats[0][3])- this.getPercentage(this.commodityColorZoneStats[1][1],this.commodityColorZoneStats[1][3]))/this.getPercentage(this.commodityColorZoneStats[1][1],this.commodityColorZoneStats[1][3]);
      this.commodityYellowPercentageComparison = (this.commodityYellowPercentageComparison *100).toFixed(2) 
      this.commodityRedPercentageComparison = this.getPercentage(this.commodityColorZoneStats[1][2],this.commodityColorZoneStats[1][3])== 0 ? 0 : (this.getPercentage(this.commodityColorZoneStats[0][2],this.commodityColorZoneStats[0][3])  - this.getPercentage(this.commodityColorZoneStats[1][2],this.commodityColorZoneStats[1][3]))/this.getPercentage(this.commodityColorZoneStats[1][2],this.commodityColorZoneStats[1][3]);
      this.commodityRedPercentageComparison = (this.commodityRedPercentageComparison *100).toFixed(2) 
        
      this.buyerGreenPercentageComparison = this.getPercentage(this.buyerColorZoneStats[1][0],this.buyerColorZoneStats[1][3])== 0 ? 0 : (this.getPercentage(this.buyerColorZoneStats[0][0],this.buyerColorZoneStats[0][3])- this.getPercentage(this.buyerColorZoneStats[1][0],this.buyerColorZoneStats[1][3]))/this.getPercentage(this.buyerColorZoneStats[1][0],this.buyerColorZoneStats[1][3]);
      this.buyerGreenPercentageComparison = (this.buyerGreenPercentageComparison *100).toFixed(2)
      this.buyerYellowPercentageComparison =this.getPercentage(this.buyerColorZoneStats[1][1],this.buyerColorZoneStats[1][3])== 0 ? 0 : (this.getPercentage(this.buyerColorZoneStats[0][1],this.buyerColorZoneStats[0][3])- this.getPercentage(this.buyerColorZoneStats[1][1],this.buyerColorZoneStats[1][3]))/this.getPercentage(this.buyerColorZoneStats[1][1],this.buyerColorZoneStats[1][3]);
      this.buyerYellowPercentageComparison = (this.buyerYellowPercentageComparison *100).toFixed(2) 
      this.buyerRedPercentageComparison = this.getPercentage(this.buyerColorZoneStats[1][2],this.buyerColorZoneStats[1][3])== 0 ? 0 : (this.getPercentage(this.buyerColorZoneStats[0][2],this.buyerColorZoneStats[0][3])  - this.getPercentage(this.buyerColorZoneStats[1][2],this.buyerColorZoneStats[1][3]))/this.getPercentage(this.buyerColorZoneStats[1][2],this.buyerColorZoneStats[1][3]);
      this.buyerRedPercentageComparison = (this.buyerRedPercentageComparison *100).toFixed(2) 
 
      this.materialGreenPercentageComparison = this.getPercentage(this.materialColorZoneStats[1][0],this.materialColorZoneStats[1][3])== 0 ? 0 : (this.getPercentage(this.materialColorZoneStats[0][0],this.materialColorZoneStats[0][3])- this.getPercentage(this.materialColorZoneStats[1][0],this.materialColorZoneStats[1][3]))/this.getPercentage(this.materialColorZoneStats[1][0],this.materialColorZoneStats[1][3]);
      this.materialGreenPercentageComparison = (this.materialGreenPercentageComparison *100).toFixed(2)
      this.materialYellowPercentageComparison =this.getPercentage(this.materialColorZoneStats[1][1],this.materialColorZoneStats[1][3])== 0 ? 0 : (this.getPercentage(this.materialColorZoneStats[0][1],this.materialColorZoneStats[0][3])- this.getPercentage(this.materialColorZoneStats[1][1],this.materialColorZoneStats[1][3]))/this.getPercentage(this.materialColorZoneStats[1][1],this.materialColorZoneStats[1][3]);
      this.materialYellowPercentageComparison = (this.materialYellowPercentageComparison *100).toFixed(2) 
      this.materialRedPercentageComparison = this.getPercentage(this.materialColorZoneStats[1][2],this.materialColorZoneStats[1][3])== 0 ? 0 : (this.getPercentage(this.materialColorZoneStats[0][2],this.materialColorZoneStats[0][3])  - this.getPercentage(this.materialColorZoneStats[1][2],this.materialColorZoneStats[1][3]))/this.getPercentage(this.materialColorZoneStats[1][2],this.materialColorZoneStats[1][3]);
      this.materialRedPercentageComparison = (this.materialRedPercentageComparison *100).toFixed(2) 
      





      // this.vendorGreenPercentageComparison = this.vendorColorZoneStats[0][0]- this.vendorColorZoneStats[1]?.greenPercentage
      // this.vendorGreenPercentageComparison = this.vendorGreenPercentageComparison.toFixed(2) 
      // this.vendorYellowPercentageComparison = this.vendorColorZoneStats[0]?.yellowPercentage - this.vendorColorZoneStats[1]?.yellowPercentage
      // this.vendorYellowPercentageComparison = this.vendorYellowPercentageComparison.toFixed(2) 
      // this.vendorRedPercentageComparison = this.vendorColorZoneStats[0]?.redPercentage - this.vendorColorZoneStats[1]?.redPercentage
      // this.vendorRedPercentageComparison = this.vendorRedPercentageComparison.toFixed(2) 
    
      // this.plantGreenPercentageComparison = this.plantColorZoneStats[0]?.greenPercentage - this.plantColorZoneStats[1]?.greenPercentage
      // this.plantGreenPercentageComparison = this.plantGreenPercentageComparison.toFixed(2) 
      // this.plantYellowPercentageComparison = this.plantColorZoneStats[0]?.yellowPercentage - this.plantColorZoneStats[1]?.yellowPercentage
      // this.plantYellowPercentageComparison = this.plantYellowPercentageComparison.toFixed(2) 
      // this.plantRedPercentageComparison = this.plantColorZoneStats[0]?.redPercentage - this.plantColorZoneStats[1]?.redPercentage
      // this.plantRedPercentageComparison = this.plantRedPercentageComparison.toFixed(2) 
    
      // this.materialGreenPercentageComparison = this.materialColorZoneStats[0]?.greenPercentage - this.materialColorZoneStats[1]?.greenPercentage
      // this.materialGreenPercentageComparison = this.materialGreenPercentageComparison.toFixed(2) 
      // this.materialYellowPercentageComparison = this.materialColorZoneStats[0]?.yellowPercentage - this.materialColorZoneStats[1]?.yellowPercentage
      // this.materialYellowPercentageComparison = this.materialYellowPercentageComparison.toFixed(2) 
      // this.materialRedPercentageComparison = this.materialColorZoneStats[0]?.redPercentage - this.materialColorZoneStats[1]?.redPercentage
      // this.materialRedPercentageComparison = this.materialRedPercentageComparison.toFixed(2) 
    
      // this.commodityGreenPercentageComparison = this.commodityColorZoneStats[0]?.greenPercentage - this.commodityColorZoneStats[1]?.greenPercentage
      // this.commodityGreenPercentageComparison = this.commodityGreenPercentageComparison.toFixed(2) 
      // this.commodityYellowPercentageComparison = this.commodityColorZoneStats[0]?.yellowPercentage - this.commodityColorZoneStats[1]?.yellowPercentage
      // this.commodityYellowPercentageComparison = this.commodityYellowPercentageComparison.toFixed(2) 
      // this.commodityRedPercentageComparison = this.commodityColorZoneStats[0]?.redPercentage - this.commodityColorZoneStats[1]?.redPercentage
      // this.commodityRedPercentageComparison = this.commodityRedPercentageComparison.toFixed(2) 
    
      // this.buyerGreenPercentageComparison = this.buyerColorZoneStats[0]?.greenPercentage - this.buyerColorZoneStats[1]?.greenPercentage
      // this.buyerGreenPercentageComparison = this.buyerGreenPercentageComparison.toFixed(2) 
      // this.buyerYellowPercentageComparison = this.buyerColorZoneStats[0]?.yellowPercentage - this.buyerColorZoneStats[1]?.yellowPercentage
      // this.buyerYellowPercentageComparison = this.buyerYellowPercentageComparison.toFixed(2) 
      // this.buyerRedPercentageComparison = this.buyerColorZoneStats[0]?.redPercentage - this.buyerColorZoneStats[1]?.redPercentage
      // this.buyerRedPercentageComparison = this.buyerRedPercentageComparison.toFixed(2) 
    
      
      
      if (this.dateDiff === null || this.dateDiff === undefined)
        return
        let dateDiff = +this.dateDiff
          this.sentance = " than last " + Math.round(dateDiff) +   " days period";
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


  public getPercentage(neum: number, deno: number) {
    return Number.parseFloat(((neum / deno) * 100).toFixed(3))
  }

  ngOnInit(): void {
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }

  // getImage(num :any) {
  //   if (+num > 0) 
  //     return '../../../assets/images/arrow-narrow-up.png' 
  //      else if (+num == 0) 
  //     return '../../../assets/images/yellow2.png'
  //     else if (+num < 0) 
  //     return '../../../assets/images/ic-arrow-narrow-up.svg'
  //   }
   
    
  // getTextColor(num :any){
  //   if (+num > 0) 
  //   return 'color:red !important;' 
  //    else if (+num == 0) 
  //   return 'color:#FFCF64 !important;'
  //   else if (+num < 0) 
  //   return 'color:#00D9A6 !important;'

  // }

 
   

    getImage(num :any) {
    if (+num > 0) 
      return '../../../assets/images/redup.png' 
       else if (+num == 0) 
      return '../../../assets/images/yellow2.png'
      else if (+num < 0) 
      return '../../../assets/images/greendown.png'
    }

    
    getTextColor(num :any){
      if (+num > 0) 
      return 'color:red !important;' 
       else if (+num == 0) 
      return 'color:#FFCF64 !important;'
      else if (+num < 0) 
      return 'color:#00D9A6 !important;'
    }
  

    getGreenImage(num :any) {
      if (+num > 0) 
        return '../../../assets/images/greenup.png' 
         else if (+num == 0) 
        return '../../../assets/images/yellow2.png'
        else if (+num < 0) 
        return '../../../assets/images/reddown.png'
      }
   


  getTextGreenColor(num :any){
    if (+num > 0) 
  return 'color:#00D9A6 !important;'
      else if (+num == 0) 
    return 'color:#FFCF64 !important;'
  else if (+num < 0) 
    return 'color:red !important;' 
  }

}
