import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-ppv-parameter',
  templateUrl: './ppv-parameter.component.html',
  styleUrls: ['./ppv-parameter.component.css']
})
export class PpvParameterComponent implements OnInit,OnChanges {
  listPPVCopy
  public loggedInUser :any
  @Input() public listPPV:any[]
  @Output() listPPVEmitter = new EventEmitter();
  @Output() errorPPVEmitter = new EventEmitter();
  constructor(private _notificationService:NotificationService,
    private _apiService:GeneralApiService,
    private translateService:TranslateService,
    private cdr : ChangeDetectorRef) {
      this._apiService.ppvWeight$.subscribe((res:any)=>{
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
    if (this.listPPV)
      this.listPPVCopy = this.listPPV
  }




  onPercentageInput(eventData: any, data: any) {
    for (let i = 0; i <this.listPPV.length-1 ; i++) {
      if (i == this.listPPV.length-2) {
        if (this.listPPV[i].percentage > this.listPPV[i + 1].percentage) {
          this._notificationService.push('Can not be greater then proceeding percentage in PPV', 2)
          this.errorPPVEmitter.emit()
          return
        }

      } else {

        if (this.listPPV[i].percentage >= this.listPPV[i + 1].percentage) {
          this._notificationService.push('Can not be greater then proceeding percentage in PPV', 2)
          this.errorPPVEmitter.emit()
          return
        }
      }


    }
    this.listPPVEmitter.emit(this.listPPV);
  }


  onInput(eventData: any, data: any) {
    if(data && data.hasOwnProperty('purchasePriceVariance'))
    {
      this.listPPV[0].score = data.purchasePriceVariance
    }
    if(this.listPPV === null || this.listPPV === undefined)
    return
    for (let i = this.listPPV.length - 1; i > 0; i--) {
      if (i == this.listPPV.length - 1) {
        if (this.listPPV[i].score > this.listPPV[i - 1].score) {
          this._notificationService.push('Can not be lower the proceeding score in PPV', 2)
          this.errorPPVEmitter.emit()
          return
        }

      } else {

        if (this.listPPV[i].score >= this.listPPV[i - 1].score) {
          this._notificationService.push('Can not be lower the proceeding score in PPV', 2)
          this.errorPPVEmitter.emit()
          return
        }
      }


    }
    this.listPPVEmitter.emit(this.listPPV)

    // var reg = /^-?\d*\.?\d*$/
    // if(reg.test(eventData.key) 

    // || eventData.code== "ArrowRight" 
    // || eventData.code=="ArrowLeft"){
    // }else{
    //   eventData.preventDefault()
    // }

  }


}
