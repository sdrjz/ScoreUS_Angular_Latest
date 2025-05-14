import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { TranslateService } from '@ngx-translate/core';
import { api } from 'src/app/api.endpoints';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { tips } from 'src/app/tootTips';
import { dateValidator } from 'src/app/validation/date-validator';

@Component({
  selector: 'app-execute-buyer',
  templateUrl: './execute-buyer.component.html',
  styleUrls: ['./execute-buyer.component.css']
})
export class ExecuteBuyerComponent implements OnInit,OnChanges {
  tips = tips
  selectedPlants:any=''
  selectedBuyer:any
  public currentDate = new Date()
  buyerDropDown :any[]
  @Input() buyerPageLoad :any
  @Input() listsDropDown: any  = {
    plantDropDown:[],
    VendorDropDown:[],
    CommodityDropDown:[],
    BuyerDropDown:[]

  }
  selected = [];
  plant = [''];
  @Input() loader = false
  @Output() buyerExecutiveDataEmitter = new EventEmitter();
  @Output() buyerAverageExecutiveDataEmitter = new EventEmitter();
  @Output() previousDataEmitter = new EventEmitter();
  
  separatorKeysCodes: number[] = [ENTER, COMMA];
  currentUser: any
  public startDate: any
  public endDate: any
  public plantInput: any
  public listPlant: any[]
  public listBuyer: any[] = []
  public form: FormGroup =  new FormGroup({
    startDate: new FormControl(null, Validators.required),
    buyerCode: new FormControl(null,Validators.required),
    endDate: new FormControl(null, Validators.required),
    plantCode: new FormControl(null, Validators.required),
    // vendorCode: new FormControl(''),
    detialType: new FormControl('')
  }, { validators: dateValidator })
  
  public averageForm: FormGroup= new FormGroup({
    startDate: new FormControl(null, Validators.required),
    buyerCode: new FormControl(null,Validators.required),
    endDate: new FormControl(null, Validators.required),
    plantCode: new FormControl(null, Validators.required),
    // vendorCode: new FormControl(''),
    detialType: new FormControl('')
  }, { validators: dateValidator })

  public buyerInput: string = ""
  @ViewChild('fruitInput') fruitInput: ElementRef;

  constructor(private _apiService: GeneralApiService,
    private _notificationService: NotificationService,
    private translateService:TranslateService,
    private cdr :ChangeDetectorRef) { }

    ngOnChanges(changes: SimpleChanges): void {
      
      if(changes["buyerPageLoad"]){
        if(this.buyerPageLoad == null) return

        let startDate = this.buyerPageLoad.startDate;
        let endDate = this.buyerPageLoad.endDate
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
          startDate: this.buyerPageLoad.startDate,
          endDate: this.buyerPageLoad.endDate,
          tenantId: this.currentUser.tenantID
        }
  
  
        Promise.all([
          this._apiService.post(api.getPlantDropDown,obj).toPromise(),
          this._apiService.post(api.getBuyerDropDown,{...obj,plantCode : this.buyerPageLoad.plantCode}).toPromise()
          
        ]).then((res:any)=>{
          this.listPlant = res[0].data;
          this.previousDataEmitter.emit(res[0].previousDate);
          this.listsDropDown.plantDropDown = res[0].data;
          if(this.buyerPageLoad.plantCode.split(",").length>1){
            var plant = this.onDropDownSelectionSetData(this.listPlant,"ALL");      
            this.selectedPlants = plant
            this.form.controls["plantCode"].setValue(plant)
            this.averageForm.controls["plantCode"].setValue(plant)
            this.plantInput = "ALL"
          }else
          {
            this.form.controls["plantCode"].setValue(this.buyerPageLoad.plantCode)
            this.averageForm.controls["plantCode"].setValue(this.buyerPageLoad.plantCode)
            this.selectedPlants = this.buyerPageLoad.plantCode;
            this.plantInput =res[0].data.filter((i:any)=> i.id == this.buyerPageLoad.plantCode)[0].name
          }
  
          this.listBuyer = res[1].data
          this.listsDropDown.buyerDropDown = res[1].data
          if(this.buyerPageLoad.buyerCode.split(",").length>1){
            var buyer = this.onDropDownSelectionSetData(this.listBuyer,"ALL");
            this.form.controls["buyerCode"].setValue(buyer)
            this.averageForm.controls["buyerCode"].setValue(buyer)
            this.selectedBuyer = buyer;
            this.buyerInput = "ALL"
          }else
          {
            this.form.controls["buyerCode"].setValue(this.buyerPageLoad.buyerCode)
            this.averageForm.controls["buyerCode"].setValue(this.buyerPageLoad.buyerCode)
            
            this.selectedBuyer = this.buyerPageLoad.buyerCode
            this.buyerInput =res[1].data.filter((i:any)=> i.id == this.buyerPageLoad.buyerCode)[0].name
          }
          this.buyerAverageExecutiveDataEmitter.emit(this.averageForm.value)
          this.cdr.detectChanges()
        }).finally(()=>{})
            
        
        
        
        
        
  
  
  
  
      //   this.averageForm.controls["startDate"].setValue(this.vendorPageLoad.startDate)
      //   this.averageForm.controls["endDate"].setValue(this.vendorPageLoad.endDate)
      //   this.cdr.detectChanges();
      // }
      
      
    }


  }

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

  onBuyerExecuteClick() {
    let data: any = ''
    // if(this.selected.some((i:any)=>i.id == "ALL"))
    // {
    //   this.buyerDropDown.forEach((i:any) => {
    //     if(i.id != "ALL")
    //     data = data+i.id+","
    //   });

    // }else{
    //   this.selected.forEach((i: any) => {
    //     data = data + i.id + ","
    //   })
    // }
    // data = data.slice(0, -1)
  
    

    this.form.controls['plantCode'].setValue(this.selectedPlants)
    this.form.controls['buyerCode'].setValue(this.selectedBuyer)
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

    // let plantData=''
    // this.plant.forEach((i:any)=>{
    //   plantData=plantData+i+","
    // })
    // plantData=plantData.slice(0,-1)
    // this.form.controls['plantCode'].setValue(plantData);
    this.startDate = this.form.controls['startDate'].value
    this.endDate = this.form.controls['endDate'].value

    this.form.controls['startDate'].setValue(this._apiService.setFormControlDate(this.form, 'startDate'))
    this.form.controls['endDate'].setValue(this._apiService.setFormControlDate(this.form, 'endDate'))
    this.loader = true
    this.buyerExecutiveDataEmitter.emit(this.form.value)
    this.form.controls['startDate'].setValue(this.startDate);
    this.form.controls['endDate'].setValue(this.endDate);


  }



  remove(fruit: string): void {
    const index = this.selected.indexOf(fruit);

    if (index >= 0) {
      this.selected.splice(index, 1);
    }
  }

  onDateChange() {
    if (!this.form.controls['startDate'].value || !this.form.controls['endDate'].value)
    return
    this.form.controls["plantCode"].setValue(null)
    this.form.controls["buyerCode"].setValue(null)
    // this.form.controls["vendorCode"].setValue(null)
    this.selectedPlants=''
    this.selectedBuyer= ''
    this.selected = []
    this.plantInput = ''
    this.buyerInput = ''
   

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
      this.listsDropDown.plantDropDown = res.data
      this.previousDataEmitter.emit(res.previousDate);
      this.averageForm.controls["plantCode"].setValue(this.onDropDownSelectionSetData(this.listPlant,"ALL"));
      this._notificationService.push(res.message, 1)
    }, (e: any) => {
      this._apiService.isCompareLoader$.next(false)

    })

  }  





onPlantSelect(data: any) {
  // When plant is selected, update the plant code and fetch relevant buyers
  this.selectedPlants = this.onDropDownSelectionSetData(this.listsDropDown.plantDropDown, data.option.value);
  this.averageForm.controls['plantCode'].setValue(this.selectedPlants);

  // Re-query the buyers based on the selected plant
  this._apiService.isCompareLoader$.next(true);
  this._apiService.post(api.getBuyerDropDown, {
    startDate: this.form.controls["startDate"].value,
    endDate: this.form.controls["endDate"].value,
    tenantId: this.currentUser.tenantID,
    plantCode: this.selectedPlants,  // Pass selected plant to fetch relevant buyers
  }).subscribe((res: any) => {
    this._apiService.isCompareLoader$.next(false);
    this.listBuyer = res.data; // Filter buyers by plant
    this.buyerDropDown = res.data;

    // Set the selected buyer based on the re-fetched buyer list
    this.averageForm.controls["buyerCode"].setValue(this.onDropDownSelectionSetData(this.listBuyer, "ALL"));
  }, (e: any) => {
    this._apiService.isCompareLoader$.next(false);
  });
}

onDropDownSelectionSetData(list: any[], value: any) {
  let output = '';
  if (value === "ALL") {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id !== "ALL") output = output + list[i].id;

      if (i < list.length - 1) {
        if (list[i].id !== "ALL") output = output + ',';
      }
    }
  } else {
    output = list.filter((i: any) => i.name === value)[0].id;
  }
  return output;
}
onBuyerInput(data: any) {
  // Filter the buyer list based on input
  if (this.buyerInput === '' || this.buyerInput === undefined) {
    this.listBuyer = this.buyerDropDown; // Show all buyers if input is empty
  } else {
    this.listBuyer = this.buyerDropDown.filter((i: any) => i.name.toLowerCase().includes(this.buyerInput.toLowerCase()));
  }
}

onPlantInput(data: any) {
  if (this.plantInput === '' || this.plantInput === undefined) {
    this.listPlant = this.listsDropDown?.plantDropDown;
  } else {
    this.listPlant = this.listsDropDown?.plantDropDown.filter((i: any) => i.name.toLowerCase().includes(this.plantInput.toLowerCase()));
  }
}


onBuyerSelect(data: any) {
  // When a buyer is selected, update the selected buyer
  const buyer = this.onDropDownSelectionSetData(this.listBuyer, data.option.value);
  this.selectedBuyer = buyer;
  this.form.controls['buyerCode'].setValue(buyer);
  this.listBuyer = this.buyerDropDown; // Keep buyer list up-to-date
}

onSelected(event: MatAutocompleteSelectedEvent): void {
    
  if(this.selected.length>0 && event.option.value == "ALL"){
    this._notificationService.push("Can not Select All after selecting any of the buyer",2)
    return
  }
  
  
  if (this.selected.some((i: any) => i.id == "ALL")) {
    this._notificationService.push("Can not select any other buyer now", 2)
    return
  }

  var alreadyExist = this.selected.find((i: any) => i.id == event.option.value)
  if (alreadyExist) {
    this._notificationService.push("buyer already selected", 2)
    return
  } else if (this.selected.length > 4) {
    this._notificationService.push("can not insert more then 5 buyer", 2)
    return
  }
  // if(event.option.value == "ALL") 
  this.selected.push(this.buyerDropDown.filter((i: any) => i.id == event.option.value)[0]);


  this.fruitInput.nativeElement.value = '';
  this.listBuyer = this.buyerDropDown;
}



}