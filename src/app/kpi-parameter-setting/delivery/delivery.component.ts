import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import { kpiAdminModel } from 'src/app/modal/kpiAdminSettingModel';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { tips } from 'src/app/tootTips';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit, OnChanges {
  tips=tips
  public loggedInUser : any
  public bufferDays:any
  public minRange:number
  public maxRange:number
  public orderAcknowledgeDays:any
  @Input()public adminSettingList:any[] =[]
  public isAcceptEarlyDelivery: boolean = true
  @Output() adminTimeDeliveryData = new EventEmitter<any>(); 
  constructor(private _apiService:GeneralApiService,
    private translateService:TranslateService,
    private cdr:ChangeDetectorRef) { }

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

    if(changes['adminSettingList']){
      let requiredData:any =this.adminSettingList.filter((i:any)=>i.attribute.toLowerCase() == 'accept early delivery')
      if(requiredData?.length>0){
      if(requiredData[0].value=='0')
      {
        this.isAcceptEarlyDelivery=false;
      }else{
        this.isAcceptEarlyDelivery= true;
      }
    }

      this.maxRange = this.adminSettingList.filter((i:any)=>i.attribute.toLowerCase() == 'price variance day range max')[0]?.value
      this.minRange = this.adminSettingList.filter((i:any)=>i.attribute.toLowerCase() == 'price variance day range min')[0]?.value
      this.orderAcknowledgeDays = this.adminSettingList.filter((i:any)=>i.attribute.toLowerCase() == 'order acknowledging days')[0]?.value
      this.bufferDays = this.adminSettingList.filter((i:any)=>i.attribute.toLowerCase() == 'receiving buffer days')[0]?.value

    }
  }


  handleIsEarlyDelivery(data:any){
    this.adminSettingList = this.adminSettingList.map((i:any)=>this.updateValue(i,true))
    // let emitData = this.adminSettingList.filter((i:any)=>i.attribute.toLowerCase() == 'accept early delivery' || i.attribute.toLowerCase() == 'not accept early delivery')    
    this.adminTimeDeliveryData.emit(this.getEmitData())
  }

  updateValue(data:any,isEarly:boolean){
  
    if(data.attribute.toLowerCase() == 'accept early delivery'){
      if(isEarly){
        data.value = '1'
        this.isAcceptEarlyDelivery=true
      }else{
        data.value = '0'
        this.isAcceptEarlyDelivery=false
      }
    }else if(data.attribute.toLowerCase() == 'not accept early delivery'){
      if(!isEarly){
        data.value = '1'
        this.isAcceptEarlyDelivery=false
      }else{
        data.value = '0'
        this.isAcceptEarlyDelivery=true
      }
    }

    return data;
  }


  handleIsNotEarlyDelivery(data:any){
    this.adminSettingList = this.adminSettingList.map((i:any)=>this.updateValue(i,false))
    this.adminTimeDeliveryData.emit(this.getEmitData())
  }

  isBufferNumber(eventData:any){
    var reg = /^-?\d*\.?\d*$/
    // if(reg.test(eventData.key) 
    // || eventData.code== 'Backspace'
    // || eventData.code== "ArrowRight" 
    // || eventData.code=="ArrowLeft"){
      this.adminSettingList = this.adminSettingList.map((i:any)=>this.updateNumberValue(i));
     this.adminTimeDeliveryData.emit(this.getEmitData())
    // }else{
    //   eventData.preventDefault()
    // }

  }

  isMaxNumber(eventData:any){
    var reg = /^-?\d*\.?\d*$/
    // if(reg.test(eventData.key) 
    // || eventData.code== 'Backspace'
    // || eventData.code== "ArrowRight" 
    // || eventData.code=="ArrowLeft"){
      this.adminSettingList = this.adminSettingList.map((i:any)=>this.updateNumberValue(i));
     this.adminTimeDeliveryData.emit(this.getEmitData())
    // }else{
    //   eventData.preventDefault()
    // }
  }

  isMinNumber(eventData:any){
    var reg = /^-?\d*\.?\d*$/
    // if(reg.test(eventData.key) 
    // || eventData.code== 'Backspace'
    // || eventData.code== "ArrowRight" 
    // || eventData.code=="ArrowLeft"){
      this.adminSettingList = this.adminSettingList.map((i:any)=>this.updateNumberValue(i));
     this.adminTimeDeliveryData.emit(this.getEmitData())
    // }else{
    //   eventData.preventDefault()
    // }

  }

  isOrderNumber(eventData:any){
    var reg = /^-?\d*\.?\d*$/
    // if(reg.test(eventData.key) 
    // || eventData.code== 'Backspace'
    // || eventData.code== "ArrowRight" 
    // || eventData.code=="ArrowLeft"){
      this.adminSettingList = this.adminSettingList.map((i:any)=>this.updateNumberValue(i));
     this.adminTimeDeliveryData.emit(this.getEmitData())
    // }else{
    //   eventData.preventDefault()
    // }

  }


getEmitData(){
  return this.adminSettingList.filter((i:any)=>i.attribute.toLowerCase() == 'accept early delivery' 
  || i.attribute.toLowerCase() == 'not accept early delivery'
  || i.attribute.toLowerCase() == 'receiving buffer days'
  || i.attribute.toLowerCase() == 'price variance day range min'
  || i.attribute.toLowerCase() == 'price variance day range max'
  || i.attribute.toLowerCase() == 'order acknowledging days'
  || i.attribute.toLowerCase() == 'scorecard filter')    
}

updateNumberValue(data:any){
  switch(data.attribute.toLowerCase())
  {
    case 'receiving buffer days':
    data.value = this.bufferDays.toString()
      break;
    case 'price variance day range min':
      data.value = this.minRange.toString()
    break;
    case 'price variance day range max':
      data.value = this.maxRange.toString()
    break;
    case 'order acknowledging days':
      data.value =this.orderAcknowledgeDays.toString()  
      break;
  }
  return data
}


}
