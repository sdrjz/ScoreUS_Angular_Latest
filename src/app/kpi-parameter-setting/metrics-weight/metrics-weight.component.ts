import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { tips } from 'src/app/tootTips';

@Component({
  selector: 'app-metrics-weight',
  templateUrl: './metrics-weight.component.html',
  styleUrls: ['./metrics-weight.component.css']
})
export class MetricsWeightComponent implements OnInit,OnChanges{
  tips=tips
  public loggedInUser :any
  @Input() maxScores:any={
    timeDelivery:0,
    nonConformanceReport:0,
    purchasePriceVariance:0,
    leadTimeAccuracy:0,
  }
  public replicaData:any={
    timeDelivery:0,
    nonConformanceReport:0,
    purchasePriceVariance:0,
    leadTimeAccuracy:0,
  }
  constructor(private notificationService:NotificationService,
    private _apiService:GeneralApiService,
    private translateService:TranslateService,
    private cdr : ChangeDetectorRef) { }

  ngOnInit(): void {
    var user = localStorage.getItem('userData')
    if(user)
    this.loggedInUser = JSON.parse(user)

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    }) 
}

  ngOnChanges(changes:SimpleChanges){
   
    if(changes['maxScores'] ){
      this.replicaData=this.maxScores
    }
  }
  
  ncrWeightChange(ncrData:any){
  this.maxScores.nonConformanceReport = ncrData.value
  this._apiService.ncrWeight$.next({nonConformanceReport:ncrData.value})    
  }
  
  otdWeightChange(otdData:any){
    this.maxScores.timeDelivery = otdData.value
  // this.maxScores= this.replicaData 
  this._apiService.otdWeight$.next({timeDelivery:otdData.value})    
  }

  ltaWeightChange(ltaData:any){
  this.maxScores.leadTimeAccuracy = ltaData.value
    // this.maxScores= this.replicaData 
  this._apiService.ltaWeight$.next({leadTimeAccuracy : ltaData.value})    
  }

  ppvWeightChange(ppvData:any){
    this.maxScores.purchasePriceVariance = ppvData.value
  // this.maxScores= this.replicaData 
  this._apiService.ppvWeight$.next({purchasePriceVariance : ppvData.value})    
  }

 
setScores(data:any[]){

}


}
