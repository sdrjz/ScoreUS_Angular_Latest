import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { TranslateService } from '@ngx-translate/core';
import { api } from 'src/app/api.endpoints';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { tips } from 'src/app/tootTips';
import { dateValidator } from 'src/app/validation/date-validator';

@Component({
  selector: 'app-vendorexecutive',
  templateUrl: './vendorexecutive.component.html',
  styleUrls: ['./vendorexecutive.component.css']
})
export class VendorexecutiveComponent implements OnInit {
  tips = tips
  selectedPlants:any=''
  selectedCommodity:any=''
  listReplicatPlant : any //due to list 
  @Output() filterDataEmitter = new EventEmitter();
  @Output()averageFromGroupEventEmitter  = new EventEmitter()
  public currentDate = new Date()
  @Input() vendorPageLoad:any | null = null
  @Input() listsDropDown: any  = {
    plantDropDown:[],
    VendorDropDown:[],
    CommodityDropDown:[]
  }
  selected = [];
  plant = [''];
  @Input() loader = false
  @Output() executiveDataEmitter = new EventEmitter();
  @Output() previousDataEmitter = new EventEmitter();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  currentUser: any
  public startDate: any
  public endDate: any
  public plantInput: any
  public listPlant: any[]
  public listCommodity: any[] = []
  public listVendor: any[]
  public form = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    commodity: new FormControl(''),
    endDate: new FormControl(null, Validators.required),
    plantCode: new FormControl('1001', Validators.required),
    vendorCode: new FormControl(''),
    detialType: new FormControl('')
  }, { validators: dateValidator })
  
  public averageForm = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    commodity: new FormControl(''),
    endDate: new FormControl(null, Validators.required),
    plantCode: new FormControl(null, Validators.required),
    vendorCode: new FormControl(''),
    detialType: new FormControl('')
  }, { validators: dateValidator })


  public commodityInput: string = ""
  public vendorInput: string = ""
  @ViewChild('fruitInput') fruitInput: ElementRef;

  constructor(private _apiService: GeneralApiService,
    private _notificationService: NotificationService,
    private translateService:TranslateService,
    private cdr: ChangeDetectorRef) { }


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
    if(changes["vendorPageLoad"]){
      
      
      if(this.vendorPageLoad == null) return
     
      

      let startDate = this.vendorPageLoad.startDate;
      let endDate = this.vendorPageLoad.endDate
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
      

      // this.form.controls["startDate"].setValue(new Date(this.vendorPageLoad.startDate))
      // this.form.controls["endDate"].setValue(new Date(this.vendorPageLoad.endDate))
      // this.averageForm.controls["startDate"].setValue(new Date(this.vendorPageLoad.startDate))
      // this.averageForm.controls["endDate"].setValue(new Date(this.vendorPageLoad.endDate))
      let obj = {
        startDate: this.vendorPageLoad.startDate,
        endDate: this.vendorPageLoad.endDate,
        tenantId: this.currentUser.tenantID,
        vendorCode: this.currentUser.vendorCode //add vendo code
      }

      this.form.controls["startDate"].disable()
      this.form.controls["endDate"].disable()
      Promise.all([
        this._apiService.post(api.getPlantDropDown,obj).toPromise(),
      ]).then((res:any)=>{
        this.listPlant = res[0].data;
        this.previousDataEmitter.emit(res[0].previousDate);
        this.listsDropDown.plantDropDown = res[0].data;
        if(this.vendorPageLoad.plantCode.split(",").length>1){
          var plant = this.onDropDownSelectionSetData(this.listPlant,"ALL");      
          this.selectedPlants = plant
          this.form.controls["plantCode"].setValue(plant)
          this.averageForm.controls["plantCode"].setValue(plant)
          this.plantInput = "ALL"
        }else
        {
          this.form.controls["plantCode"].setValue(this.vendorPageLoad.plantCode)
          this.averageForm.controls["plantCode"].setValue(this.vendorPageLoad.plantCode)
          this.selectedPlants = this.form.controls["plantCode"].value;
          this.plantInput =res[1].data.filter((i:any)=> i.id == this.vendorPageLoad.plantCode)[0].name
        }

        
        var commodity = this.vendorPageLoad.commodity;
        this.form.controls["commodity"].setValue(commodity)
        this.averageForm.controls["commodity"].setValue(commodity)
        this.selectedCommodity = commodity
        this.commodityInput = "ALL"
        
        this.form.controls["vendorCode"].setValue(this.vendorPageLoad.vendorCode)
        this.averageForm.controls["vendorCode"].setValue(this.vendorPageLoad.vendorCode)
          
        this.averageFromGroupEventEmitter.emit(this.averageForm.value)
        this.cdr.detectChanges()
      }).finally(()=>{})
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


  onExecuteClick() {
    this.startDate = this.form.controls['startDate'].value
    this.endDate = this.form.controls['endDate'].value
    if(new Date(this.startDate) > new Date(this.endDate))
    {
      this._notificationService.push("Start date can not be greater start date",2);
      return;
    }

    this.form.controls['startDate'].setValue(this._apiService.setFormControlDate(this.form, 'startDate'))
    this.form.controls['endDate'].setValue(this._apiService.setFormControlDate(this.form, 'endDate'))
    this.form.controls['commodity'].setValue(this.selectedCommodity)
    let obj = { 
      startDate : this.form.controls['startDate'].value,
      endDate : this.form.controls['endDate'].value,
      plantCode : this.form.controls['plantCode'].value,
      commodity : this.form.controls['commodity'].value,
      vendorCode : this.form.controls['vendorCode'].value,
      detialType : '',
    }
    this.executiveDataEmitter.emit(obj)
    this.form.controls['startDate'].setValue(this.startDate);
    this.form.controls['endDate'].setValue(this.endDate);


  }


  onPlantSelect(data: any) {
    this.form.controls["vendorCode"].setValue(null)
    this.form.controls["commodity"].setValue(null)
    this.selectedPlants = ''
    this.selectedPlants = this.onDropDownSelectionSetData(this.listPlant,data.option.value);
    this.averageForm.controls['plantCode'].setValue(this.selectedPlants);
    this.form.controls['plantCode'].setValue(this.selectedPlants);
      
    this.onCommoditySelection('')

    // this._apiService.isCompareLoader$.next(true)
    // this._apiService.post(api.getCommodityDropDown,
    //   {
    //     startDate:this.averageForm.controls["startDate"].value,
    //     endDate:this.averageForm.controls["endDate"].value,
    //     tenantId:this.currentUser.tenantID,
    //     plantCode:this.selectedPlants,
    //   }).subscribe((res:any)=>{
    //     this._apiService.isCompareLoader$.next(false)
    //     this.listCommodity = res.data
    //     this.listsDropDown.commodityDropDown = res.data
    //     },(e:any)=>{
    //     this._apiService.isCompareLoader$.next(false)
    //   })


    
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

  onCommoditySelection(data: any) {
    // this.selected = []
    // this.selectedCommodity = this.onDropDownSelectionSetData(this.listsDropDown.commodityDropDown,data.option.value)
    // this.form.controls['commodity'].setValue(this.selectedCommodity)
    // this.averageForm.controls['commodity'].setValue(this.selectedCommodity)
    this.averageForm.controls['vendorCode'].setValue(this.currentUser.lastName)
    this.form.controls['vendorCode'].setValue(this.currentUser.lastName)
    this.onAverageCommoditySelect()
  }

  // onCommodityInput(data: any) {
  //   if (this.commodityInput === '' || this.commodityInput === undefined) {
  //     this.listCommodity = this.listsDropDown?.commodityDropDown;
  //   } else {
  //     this.listCommodity = this.listsDropDown?.commodityDropDown.filter((i: any) => i.name.toLowerCase().includes(this.commodityInput.toLowerCase()));
  //   }


  // }



  onPlantInput(data: any) {
    if (this.plantInput === '' || this.plantInput === undefined) {
      this.listPlant = this.listsDropDown?.plantDropDown;
    } else {
      this.listPlant = this.listsDropDown?.plantDropDown.filter((i: any) => i.name.toLowerCase().includes(this.plantInput.toLowerCase()));
    }
  }


  // onSelection(data:any){
  //  if(this.plant.includes("ALL")){
  //   this.plant = this.plant.filter((i:any)=>i != 'ALL')
  //  }else{
  //   this.listCommodity = this.listsDropDown.vendorDropDown?.filter((i: any) => this.plant.includes(i.plantCode))
  //   this.listVendor = this.listsDropDown?.vendorDropDown?.filter((i: any) => this.plant.includes(i.plantCode))
  //  }
  // }

  onSelected(event: MatAutocompleteSelectedEvent): void {
    
    if(this.selected.length>0 && event.option.value == "ALL"){
      this._notificationService.push("Can not Select All after selecting any of the vendor",2)
      return
    }
    
    
    if (this.selected.some((i: any) => i.id == "ALL")) {
      this._notificationService.push("Can not select any other vendor now", 2)
      return
    }

    var alreadyExist = this.selected.find((i: any) => i.id == event.option.value)
    if (alreadyExist) {
      this._notificationService.push("vendor already selected", 2)
      return
    } else if (this.selected.length > 4) {
      this._notificationService.push("can not insert more then 5 vendor", 2)
      return
    }
    // if(event.option.value == "ALL") 
    this.selected.push(this.listsDropDown.vendorDropDown.filter((i: any) => i.id == event.option.value)[0]);


    this.fruitInput.nativeElement.value = '';
    this.listVendor = this.listsDropDown.vendorDropDown;
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.selected.push(this.listVendor.filter((i: any) => i.vendorName.toLowerCase() == value.trim().toLowerCase())[0]);
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
    this.form.controls["commodity"].setValue(null)
    this.form.controls["vendorCode"].setValue(null)
    this.selectedPlants=''
    this.selectedCommodity= ''
    this.selected = []
    this.plantInput = ''
    this.commodityInput = ''
    
    if (!this.form.controls['startDate'].value || !this.form.controls['endDate'].value)
      return

    if (this.form.controls['startDate'].value > this.form.controls['endDate'].value)
      return
 

   this.averageForm.controls['startDate'].setValue(this._apiService.setFormControlDate(this.form, 'startDate'))
   this.averageForm.controls['endDate'].setValue(this._apiService.setFormControlDate(this.form, 'endDate'))
      this._apiService.isCompareLoader$.next(true)
   
   let obj = {
    startDate: this.averageForm.controls['startDate'].value,
    endDate: this.averageForm.controls['endDate'].value,
    tenantId: this.currentUser.tenantID,
    vendorCode: this.currentUser.vendorCode //add vendo code

  }
    
  Promise.all([
    this._apiService.post(api.getPlantDropDown,obj).toPromise(),
    this._apiService.post(api.GetVendorCommodity,obj).toPromise()
  ]).then((res:any)=>{
    this.listPlant = res[0].data;
    this.listsDropDown.plantDropDown = res[0].data
    let plants = ''
        for(let i = 0 ; i<res[0].data.length;i++){
          if(res[0].data[i].id !='ALL')
          plants =plants+ `${res[0].data[i].id}`
         
          if(i>0 && i<res[0].data.length-1)
          plants =plants+','
      }
        let commodity = ''
        for(let i = 0 ; i<res[1].data.length;i++){
          if(res[1].data[i].id !='ALL')
          commodity =commodity+ `${res[1].data[i].id}`
         
          if(i>0 && i<res[1].data.length-1)
          commodity =commodity+','
        }
        

        


        this.selectedCommodity = commodity
        this.averageForm.controls['commodity'].setValue(commodity)
        this.form.controls['commodity'].setValue(commodity)
        this.averageForm.controls['plantCode'].setValue(plants)
        this.onAveragePlantSelect()
        
        // this.listsDropDown.plantDropDown = res.data
        this._notificationService.push(res[0].message, 1)
        
        this.previousDataEmitter.emit(res[0].previousDate);
      }).catch((err:any) =>this._apiService.isCompareLoader$.next(false)).finally(()=>this._apiService.isCompareLoader$.next(false))
      
  // this._apiService.post(api.getPlantDropDown,
  //     obj
  //   ).subscribe((res: any) => {
  //     this._apiService.isCompareLoader$.next(false);
  //     this.listPlant = res.data;
  //     let plants = ''
  //     this.previousDataEmitter.emit(res.previousDate);
  //     // for(let i = 0 ; i<res.data.length;i++){
  //     //   if(res.data[i].id !='ALL')
  //     //   plants =plants+ `${res.data[i].id}`
       
  //     //   if(i>0 && i<res.data.length-1)
  //     //   plants =plants+','
  //     // }

  //     // this.averageForm.controls['plantCode'].setValue(plants)
  //     // this.onAveragePlantSelect()
      
  //     this.listsDropDown.plantDropDown = res.data
  //     this._notificationService.push(res.message, 1)
  //   }, (e: any) => {
  //     this._apiService.isCompareLoader$.next(false)

  //   })



  }


  onAveragePlantSelect(){
    this.onAverageCommoditySelect()
    // this._apiService.post(api.getCommodityDropDown,
    //   {
    //     startDate:this.averageForm.controls["startDate"].value,
    //     endDate:this.averageForm.controls["endDate"].value,
    //     tenantId:this.currentUser.tenantID,
    //     plantCode:this.averageForm.controls['plantCode'].value,
    //   }).subscribe((res:any)=>{
    //     this._apiService.isCompareLoader$.next(false)
    //     let commodity = ''
    //     for (let index = 0; index < res.data.length; index++) {
    //        if(res.data[index].id != 'ALL')
    //          commodity += res.data[index].name;
    //       if(index> 0 && index < res.data.length-1)
    //          commodity +=','
    //     }
    //     // this.averageForm.controls['commodity'].setValue(commodity);
    //     // this.listCommodity = res.data
    //     },(e:any)=>{
    //     this._apiService.isCompareLoader$.next(false)
    //   })
  }

  getFilterData(data:any){
    if(data == ''){
      this.form.controls["startDate"].enable()
      this.form.controls["endDate"].enable();
    }else{

      this.form.controls["startDate"].disable()
      this.form.controls["endDate"].disable();
      this.filterDataEmitter.emit(data)
    }
  }

  onAverageCommoditySelect(){

  
    this.form.controls['vendorCode'].setValue(this.currentUser.lastName)    
    this.averageForm.controls['vendorCode'].setValue(this.currentUser.lastName)    
    this.averageFromGroupEventEmitter.emit(this.averageForm.value)
    

  }

}
