import { I } from '@angular/cdk/keycodes';
import { debugOutputAstAsTypeScript } from '@angular/compiler/public_api';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-otd-parameter',
  templateUrl: './otd-parameter.component.html',
  styleUrls: ['./otd-parameter.component.css']
})
export class OtdParameterComponent implements OnInit,OnChanges {
  listOTDCopy
  loggedInUser :any
  @Input() listOTD:any[]
  @Output() listOTDEmitter = new EventEmitter();
  @Output() errorOTDEmitter = new EventEmitter();
  constructor(public _notificationService:NotificationService,
    private _apiService:GeneralApiService,
    private translateService:TranslateService,
    private cdr : ChangeDetectorRef) {
      
      this._apiService.otdWeight$.subscribe((res:any)=>{
        this.onInput('',res)
      })
     }

  ngOnInit(): void {
    var user  = localStorage.getItem('userData')
    if(user)
    this.loggedInUser = JSON.parse(user);

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }


  ngOnChanges(changes: SimpleChanges) {
    if(this.listOTD)
    this.listOTDCopy = this.listOTD
  }

  onPercentageInput(eventData:any,data:any){
    for(let i = this.listOTD.length-1 ; i> 0 ; i--) 
    {
      if(i== this.listOTD.length-1){
        if(this.listOTD[i].percentage>this.listOTD[i-1].percentage) 
        {
          this._notificationService.push('Can not be lower the proceeding percentage OTD',2)
          this.errorOTDEmitter.emit()
          return
        }  
     
      }else{
        
        if(this.listOTD[i].percentage>=this.listOTD[i-1].percentage) 
        {
          this._notificationService.push('Can not pe greater the proceeding percentage in OTD',2)
          this.errorOTDEmitter.emit()
          return
        }
      }
      
      
    }
    this.listOTDEmitter.emit(this.listOTD);
  }

  onInput(eventData:any,data:any){
    
    if(data && data.hasOwnProperty('timeDelivery'))
    {
      this.listOTD[0].score = data.timeDelivery
    }
    if(this.listOTD === null || this.listOTD === undefined)
    return

    for(let i = this.listOTD.length-1 ; i> 0 ; i--) 
    {
      if(i== this.listOTD.length-1){
        if(this.listOTD[i].score>this.listOTD[i-1].score) 
        {
          this._notificationService.push('Can not be lower the proceeding score in OTD',2)
          this.errorOTDEmitter.emit()
          return
        }  
     
      }else{
        
        if(this.listOTD[i].score>=this.listOTD[i-1].score) 
        {
          this._notificationService.push('Can not be lower the proceeding score in OTD',2)
          this.errorOTDEmitter.emit()          
          return
        }
      }
      
   
    }
    this.listOTDEmitter.emit(this.listOTD)
   
    // var reg = /^-?\d*\.?\d*$/
    // if(reg.test(eventData.key) 
   
    // || eventData.code== "ArrowRight" 
    // || eventData.code=="ArrowLeft"){
    // }else{
    //   eventData.preventDefault()
    // }

  }


}
