import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { TranslateService } from '@ngx-translate/core';
import { api } from 'src/app/api.endpoints';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { tips } from 'src/app/tootTips';
import { dateValidator } from 'src/app/validation/date-validator';

@Component({
  selector: 'app-execute-plant',
  templateUrl: './execute-plant.component.html',
  styleUrls: ['./execute-plant.component.css']
})
export class ExecutePlantComponent implements OnInit, OnChanges {
  tips = tips
  selectedPlants:any=''
  public currentDate = new Date()
  @Output() plantAverageExecutiveDataEmitter = new EventEmitter();
  @Input() listsDropDown: any  = {
    plantDropDown:[],
    VendorDropDown:[],
    CommodityDropDown:[]
  }
  selected = [];
  plant = [''];
  @Input() loader = false
  @Output()averageFromGroupEventEmitter  = new EventEmitter()
  @Output() plantExecutiveDataEmitter = new EventEmitter();
  @Output() previousDataEmitter = new EventEmitter();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  currentUser: any
  public startDate: any
  public endDate: any
  public plantInput: any
  public listPlant: any[]
  public form: FormGroup  = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    endDate: new FormControl(null, Validators.required),
    plantCode: new FormControl(null, Validators.required),
    detialType: new FormControl('')
  }, { validators: dateValidator })
  selectPlant : any
  @Input() plantPageLoad : any
  public averageForm: FormGroup = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    endDate: new FormControl(null, Validators.required),
    plantCode: new FormControl(null, Validators.required),
    detialType: new FormControl('')
  }, { validators: dateValidator })


  @ViewChild('fruitInput') fruitInput: ElementRef;

  constructor(private _apiService: GeneralApiService,
    private _notificationService: NotificationService,
    private translateService:TranslateService,
    private cdr : ChangeDetectorRef) { }


  ngOnInit(): void {
    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    var user = localStorage.getItem('userData')
    if (user)
      this.currentUser = JSON.parse(user);

    this._apiService.isCompareLoader$.subscribe((res: any) => {
      this.loader = res;
    })
    

    
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes["plantPageLoad"]){
      if(this.plantPageLoad == null) return
    
      let startDate = this.plantPageLoad.startDate;
      let endDate = this.plantPageLoad.endDate
      if(startDate.length <  12){
        startDate = startDate+" 12:00:00 AM";
      }

      if(endDate.length <  12){
        endDate = endDate+" 12:00:00 AM";
      }

      
      this.form.controls["startDate"].setValue(new Date(startDate));
      this.averageForm.controls["startDate"].setValue(new Date(startDate))
      this.form.controls["endDate"].setValue(new Date(endDate))
      this.averageForm.controls["endDate"].setValue(new Date(endDate))
      let obj = {
        startDate: this.plantPageLoad.startDate,
        endDate: this.plantPageLoad.endDate,
        tenantId: this.currentUser.tenantID
      }


      Promise.all([
        this._apiService.post(api.getPlantDropDown,obj).toPromise(),
        
      ]).then((res:any)=>{
        this.listPlant = res[0].data;
        this.previousDataEmitter.emit(res[0].previousDate);
        this.listsDropDown.plantDropDown = res[0].data;
        if(this.plantPageLoad.plantCode.split(",").length>1){
          var plant = this.onDropDownSelectionSetData(this.listPlant,"ALL");      
          this.selectedPlants = plant
          this.form.controls["plantCode"].setValue(plant)
          this.averageForm.controls["plantCode"].setValue(plant)
          this.plantInput = "ALL"
        }else
        {
          this.form.controls["plantCode"].setValue(this.plantPageLoad.plantCode)
          this.averageForm.controls["plantCode"].setValue(this.plantPageLoad.plantCode)
          this.selectedPlants = this.form.controls["plantCode"].value;
          this.plantInput =res[0].data.filter((i:any)=> i.id == this.plantPageLoad.plantCode)[0].name
        }

        
        this.plantAverageExecutiveDataEmitter.emit(this.averageForm.value)
        this.cdr.detectChanges()
      }).finally(()=>{})
          
      
      
      
      
      




    //   this.averageForm.controls["startDate"].setValue(this.vendorPageLoad.startDate)
    //   this.averageForm.controls["endDate"].setValue(this.vendorPageLoad.endDate)
    //   this.cdr.detectChanges();
    // }
    
    
  }

    
  }


  public findInvalidControls() {
    const invalid = [];
    const controls = this.form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }


  onPlantExecuteClick() {

    let data: any = ''
    
    this.form.controls['plantCode'].setValue(this.selectedPlants)
    // this.form.controls['commodity'].setValue(data)
    // this.form.controls['vendorCode'].setValue(data);
    let res = this.findInvalidControls()
    
    if (res.length > 0) {
      this._notificationService.push("fill all data first", 1)
      return
    }
    
    if(new Date(this.form.controls["startDate"].value) > new Date(this.form.controls["endDate"].value))
    {
      this._notificationService.push("start date can not be greater then end Date",2)
      return;
    }
    
    this.startDate = this.form.controls['startDate'].value
    this.endDate = this.form.controls['endDate'].value

    this.form.controls['startDate'].setValue(this._apiService.setFormControlDate(this.form, 'startDate'))
    this.form.controls['endDate'].setValue(this._apiService.setFormControlDate(this.form, 'endDate'))
    this.loader = true
    this.plantExecutiveDataEmitter.emit(this.form.value)
    this.form.controls['startDate'].setValue(this.startDate);
    this.form.controls['endDate'].setValue(this.endDate);


  }


  onPlantSelect(data: any) {
    // this.form.controls["vendorCode"].setValue(null)
    this.selectedPlants = ''
    this.selectedPlants = this.onDropDownSelectionSetData(this.listPlant,data.option.value);
    this.form.controls["plantCode"].setValue(this.selectedPlants)
    this.averageForm.controls["plantCode"].setValue(this.onDropDownSelectionSetData(this.listPlant,"ALL"));
    this.averageForm.controls["startDate"].setValue(this.form.controls["startDate"].value);
    this.averageForm.controls["endDate"].setValue(this.form.controls["endDate"].value);
    this.plantAverageExecutiveDataEmitter.emit(this.averageForm.value)
  }


  onDropDownSelectionSetData(list:any[],value:any){
    let output = ''
    if(value == "ALL")
    {
      for(var i=0;i<list.length;i++){
        if(list[i].id !="ALL")
          output=output+list[i].id
        
        if(i<list.length-1  ){
          if(list[i].id !="ALL")
          output = output+',';
        }
      } 
    }else{
      output = list.filter((i:any)=> i.name == value)[0].id
    }
    return output
  }

 
 

 
  onPlantInput(data: any) {
    if (this.plantInput === '' || this.plantInput === undefined) {
      this.listPlant = this.listsDropDown?.plantDropDown;
    } else {
      this.listPlant = this.listsDropDown?.plantDropDown.filter((i: any) => i.name.toLowerCase().includes(this.plantInput.toLowerCase()));
    }
  }


  
  onSelected(event: MatAutocompleteSelectedEvent): void {
    if(this.selected.length>0 && event.option.value == "ALL"){
      this._notificationService.push("Can not Select All after selecting any of the plant",2)
      return
    }
    
    
    if (this.selected.some((i: any) => i.id == "ALL")) {
      this._notificationService.push("Can not select any other plant now", 2)
      return
    }

    var alreadyExist = this.selected.find((i: any) => i.id == event.option.value)
    if (alreadyExist) {
      this._notificationService.push("plant already selected", 2)
      return
    } else if (this.selected.length > 4) {
      this._notificationService.push("can not insert more then 5 plant", 2)
      return
    }
    // if(event.option.value == "ALL") 
    this.selected.push(this.listsDropDown.plantDropDown.filter((i: any) => i.id == event.option.value)[0]);

    this.fruitInput.nativeElement.value = '';
    this.listPlant = this.listsDropDown.plantDropDown;
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.selected.push(this.listPlant.filter((i: any) => i.name.toLowerCase() == value.trim().toLowerCase())[0]);
    }
    // Reset the input value
  }


  remove(fruit: string): void {
    const index = this.selected.indexOf(fruit);

    if (index >= 0) {
      this.selected.splice(index, 1);
    }
  }

  onDateChange() {
    this.form.controls["plantCode"].setValue(null)
    this.selectedPlants=''
    this.selected = []
    this.plantInput = ''
    if (!this.form.controls['startDate'].value || !this.form.controls['endDate'].value)
      return

    if (this.form.controls['startDate'].value > this.form.controls['endDate'].value)
      return
    
      this._apiService.isCompareLoader$.next(true)

      this.averageForm.controls['startDate'].setValue(this._apiService.setFormControlDate(this.form, 'startDate'))
      this.averageForm.controls['endDate'].setValue(this._apiService.setFormControlDate(this.form, 'endDate'))
      
    this._apiService.post(api.getPlantDropDown,
      {
        startDate: this.averageForm.controls['startDate'].value,
        endDate: this.averageForm.controls['endDate'].value,
        tenantId: this.currentUser.tenantID
      }
    ).subscribe((res: any) => {
      this._apiService.isCompareLoader$.next(false)
      this.listPlant = res.data
      this.previousDataEmitter.emit(res.previousDate)
      let plants = this.onDropDownSelectionSetData(this.listPlant,"ALL")
      // this.averageForm.controls["startDate"].setValue(this.form.controls['startDate'].value);
      // this.averageForm.controls["endDate"].setValue(this.form.controls['endDate'].value);

      this.averageForm.controls["plantCode"].setValue(plants);
      this.averageFromGroupEventEmitter.emit(this.averageForm.value)
  
      this.listsDropDown.plantDropDown = res.data
      this._notificationService.push(res.message, 1)
    }, (e: any) => {
      this._apiService.isCompareLoader$.next(false)

    })

  }  

}


