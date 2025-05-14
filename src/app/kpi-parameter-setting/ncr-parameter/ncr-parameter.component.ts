import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-ncr-parameter',
  templateUrl: './ncr-parameter.component.html',
  styleUrls: ['./ncr-parameter.component.css']
})
export class NcrParameterComponent implements OnInit,OnChanges {
  listNCRCopy
  public loggedInUser :any
  @Input() public listNCR:any[]
  @Output() listNCREmitter = new EventEmitter();
  @Output() errorNCREmitter = new EventEmitter();
  constructor(private _notificationService:NotificationService,
    private _apiService:GeneralApiService,
    private translateService:TranslateService,
    private cdr:ChangeDetectorRef) {
    this._apiService.ncrWeight$.subscribe((res:any)=>{
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
    if (this.listNCR)
      this.listNCRCopy = this.listNCR
  }




  onPercentageInput(eventData: any, data: any) {
    for (let i = 0; i <this.listNCR.length-1 ; i++) {
      if (i == this.listNCR.length-2) {
        if (this.listNCR[i].percentage > this.listNCR[i + 1].percentage) {
          this._notificationService.push('Can not be greater then proceeding percentage in NCR', 2)
          this.errorNCREmitter.emit()
          return
        }

      } else {

        if (this.listNCR[i].percentage >= this.listNCR[i + 1].percentage) {
          this._notificationService.push('Can not be greater then proceeding percentage in NCR', 2)
          this.errorNCREmitter.emit()
          return
        }
      }

    
    }
    this.listNCREmitter.emit(this.listNCR);
  }

  onInput(eventData: any, data: any) {
  
    if(data && data.hasOwnProperty('nonConformanceReport'))
    {
      this.listNCR[0].score = data.nonConformanceReport
    }
    if(this.listNCR === null || this.listNCR === undefined)
    return

  
    for (let i = this.listNCR.length - 1; i > 0; i--) {
      if (i == this.listNCR.length - 1) {
        if (this.listNCR[i].score > this.listNCR[i - 1].score) {
          this._notificationService.push('Can not be lower then proceeding score in NCR', 2)
          this.errorNCREmitter.emit()
          return
        }

      } else {

        if (this.listNCR[i].score >= this.listNCR[i - 1].score) {
          this._notificationService.push('Can not be lower then proceeding score in NCR', 2)
          this.errorNCREmitter.emit()
          return
        }
      }


    }
    this.listNCREmitter.emit(this.listNCR)

    // var reg = /^-?\d*\.?\d*$/
    // if(reg.test(eventData.key) 

    // || eventData.code== "ArrowRight" 
    // || eventData.code=="ArrowLeft"){
    // }else{
    //   eventData.preventDefault()
    // }

  }



}
