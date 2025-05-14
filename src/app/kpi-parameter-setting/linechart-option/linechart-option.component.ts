import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { tips } from 'src/app/tootTips';

@Component({
  selector: 'app-linechart-option',
  templateUrl: './linechart-option.component.html',
  styleUrls: ['./linechart-option.component.css']
})
export class LinechartOptionComponent implements OnInit,OnChanges {
 public loggedInUser :any
  tips=tips
  public reportOption:any
 public byVendor:boolean= true
 public isViewFirst:boolean = true
 @Input() adminSettingList:any[]=[]
 @Output() lineChartDataEmitter = new EventEmitter<any>();
  constructor(private _apiService:GeneralApiService,private translateService:TranslateService
    ,private cdr : ChangeDetectorRef) { 
    // const sliderValue = document.querySelector("span");
    //     const inputSlider = document.querySelector("input");
    //     inputSlider.oninput = (() =>{
    //         let value = inputSlider.value;
    //         sliderValue.textContent = value;
    //         sliderValue.style.left = (4) + "%";
    //         sliderValue.classList.add("show"); 
    //     });
    //     inputSlider.onblur = (() =>{
    //         sliderValue.classList.remove("show"); 
    //     });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['adminSettingList']){
      let requiredData:any =this.adminSettingList.filter((i:any)=>i.attribute.toLowerCase() == 'by vendor')
      if(requiredData?.length>0){
        if(requiredData[0].value=='0')
        {
          this.byVendor=false;
  
        }else{
          this.byVendor=true;
        }
      }
      

      let isViewDataRequired =this.adminSettingList.filter((i:any)=>i.attribute.toLowerCase() == 'view first')
      if(isViewDataRequired?.length>0){
      if(isViewDataRequired[0].value=='0')
      {
        this.isViewFirst=false;
      }else{
        this.isViewFirst=true
      }}


     this.reportOption= this.adminSettingList.filter((i:any)=> i.attribute.toLowerCase() == 'line chart report option')[0]?.value
      
    }
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

 
  handleByVendor(data:any){
    this.adminSettingList = this.adminSettingList.map((i:any)=>this.updateValue(i,true))
    this.lineChartDataEmitter.emit(this.getEmitData())
  }

  handleByMaterial(data:any){
    this.adminSettingList = this.adminSettingList.map((i:any)=>this.updateValue(i,false))
    this.lineChartDataEmitter.emit(this.getEmitData())
  }

  isViewFisrt(data:any){
    this.adminSettingList = this.adminSettingList.map((i:any)=>this.updateViewFirstValue(i,true))
    this.lineChartDataEmitter.emit(this.getEmitData())
  }
  
  isNotViewFirst(data:any){
    this.adminSettingList = this.adminSettingList.map((i:any)=>this.updateViewFirstValue(i,false))
    this.lineChartDataEmitter.emit(this.getEmitData())
  }


  updateViewFirstValue(data:any,isEarly:boolean){
    if(data.attribute.toLowerCase() == 'view first'){
      if(isEarly){
        data.value = '1'
        this.isViewFirst=true
      }else{
        data.value = '0'
        this.isViewFirst=false
      }
    }else if(data.attribute.toLowerCase() == 'send direct'){
      if(!isEarly){
        data.value = '1'
        this.isViewFirst=false
      }else{
        data.value = '0'
        this.isViewFirst=true
      }
    }

    return data;
  }


  updateValue(data:any,isEarly:boolean){
    if(data.attribute.toLowerCase() == 'by vendor'){
      if(isEarly){
        data.value = '1'
        this.byVendor=true
      }else{
        data.value = '0'
        this.byVendor=false
      }
    }else if(data.attribute.toLowerCase() == 'by material'){
      if(!isEarly){
        data.value = '1'
        this.byVendor=false
      }else{
        data.value = '0'
        this.byVendor=true
      }
    }

    return data;
  }

  getEmitData(){
    return this.adminSettingList.filter((i:any)=>i.attribute.toLowerCase() == 'line chart report option' 
    || i.attribute.toLowerCase() == 'view first'
    || i.attribute.toLowerCase() == 'send direct'
    || i.attribute.toLowerCase() == 'by vendor'
    || i.attribute.toLowerCase() == 'by material'
    || i.attribute.toLowerCase() == 'Scorecard filter')    
  }
  
getValue(data:any){
  this.adminSettingList = this.adminSettingList.map((i:any)=> this.updateNumberValue(i))
  this.lineChartDataEmitter.emit(this.getEmitData())
}

updateNumberValue(data:any){
  if(data?.attribute?.toLowerCase() == 'line chart report option')
  data.value = this.reportOption.toString()


  return data
}


}
