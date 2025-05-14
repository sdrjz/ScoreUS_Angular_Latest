import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-superregboxes',
  templateUrl: './superregboxes.component.html',
  styleUrls: ['./superregboxes.component.css']
})
export class SuperregboxesComponent implements OnInit,OnChanges {
  @Input() superAdminCounts:any
  @Input() name:any
  constructor(private cdr:ChangeDetectorRef
    ,private _apiService:GeneralApiService,
    private translateService:TranslateService) { }
  @Input() dateDiff!:any;
  sentance:any="";
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['superAdminCounts']){
      if(this.dateDiff === null || this.dateDiff === undefined) return ;

      let dateDiff = +this.dateDiff+1 
        this.sentance = " than last " + Math.round(dateDiff) + " days period";
      // if (dateDiff <= 31) {
      // }else if(dateDiff<364){
      //   this.sentance = " than last " + Math.round(dateDiff / 30) + " month period"
      // }
      // else if(dateDiff<(364*5)) {
      //   this.sentance = " than last " + Math.round(dateDiff / 365) + " year period"
      // }else
      // this.sentance = ""


      this.cdr.detectChanges()

    }
  }

  getPercentageValue(propertyName:any){
    if(!this.superAdminCounts) return 0
    if(this.superAdminCounts[0][propertyName] == 0) return 0;
    let val1 = this.superAdminCounts[0][propertyName];
    let val2 = this.superAdminCounts[1][propertyName];
    let diff = val1-val2
    let percentage = ((diff/val1)*100).toFixed(2)

    let value =(this.superAdminCounts[0][propertyName]-this.superAdminCounts[1][propertyName])/this.superAdminCounts[0][propertyName];
    return percentage
  }

  ngOnInit(): void {
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    
    this.cdr.detectChanges()    
  }

}
