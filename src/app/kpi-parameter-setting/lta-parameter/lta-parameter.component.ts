import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-lta-parameter',
  templateUrl: './lta-parameter.component.html',
  styleUrls: ['./lta-parameter.component.css']
})
export class LtaParameterComponent implements OnInit, OnChanges {
  listLTACopy
  public loggedInUser :any
  @Input() public listLTA: any[]
  @Output() listLTAEmitter = new EventEmitter();
  @Output() errorLTAEmitter = new EventEmitter();
  constructor(private _notificationService: NotificationService,
    private _apiService:GeneralApiService,
    private translateService:TranslateService,
    private cdr : ChangeDetectorRef
  
    ) { 
this._apiService.ltaWeight$.subscribe((res:any)=>{
  this.onInput('',res)
})


    }

  ngOnInit(): void {
    var user = localStorage.getItem('userData')
    if(user)
    this.loggedInUser = JSON.parse(user)
    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
 
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.listLTA)
      this.listLTACopy = this.listLTA
  }




  onPercentageInput(eventData: any, data: any) {
    for (let i = this.listLTA.length - 1; i >= 0; i--) {
      if (i == this.listLTA.length - 1) {
        if (this.listLTA[i].percentage > this.listLTA[i - 1].percentage) {
          this._notificationService.push('Can not be lower the proceeding percentage in LTA', 2)
          this.errorLTAEmitter.emit()
          return
        }

      } else {

        if (this.listLTA[i].percentage >= this.listLTA[i - 1].percentage) {
          this._notificationService.push('Can not be lower the proceeding percentage in LTA', 2)
          this.errorLTAEmitter.emit()
          return
        }
      }


    }
    this.listLTAEmitter.emit(this.listLTA);
  }

  onInput(eventData: any, data: any) {

    if(data && data.hasOwnProperty('leadTimeAccuracy'))
    {
      this.listLTA[0].score = data.leadTimeAccuracy
    }
    if(this.listLTA === null || this.listLTA === undefined)
    return

    for (let i = this.listLTA.length - 1; i > 0; i--) {
      if (i == this.listLTA.length - 1) {
        if (this.listLTA[i].score > this.listLTA[i - 1].score) {
          this._notificationService.push('Can not be lower the proceeding score in LTA', 2)
          this.errorLTAEmitter.emit()
          return
        }

      } else {

        if (this.listLTA[i].score > this.listLTA[i - 1].score) {
          this._notificationService.push('Can not be lower the proceeding score in LTA', 2)
          this.errorLTAEmitter.emit()
          return
        }
      }


    }
    this.listLTAEmitter.emit(this.listLTA)

    // var reg = /^-?\d*\.?\d*$/
    // if(reg.test(eventData.key) 

    // || eventData.code== "ArrowRight" 
    // || eventData.code=="ArrowLeft"){
    // }else{
    //   eventData.preventDefault()
    // }

  }


}
