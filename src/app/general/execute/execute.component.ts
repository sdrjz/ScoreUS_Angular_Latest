import { ChangeDetectorRef, Component, ElementRef, EventEmitter,
   Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateValidator } from 'src/app/validation/date-validator';
import * as _moment from 'moment/moment';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { NotificationService } from 'src/app/notification.service';
import { tips } from 'src/app/tootTips';
import { api } from 'src/app/api.endpoints';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-execute',
  templateUrl: './execute.component.html',
  styleUrls: ['./execute.component.css']
})


export class ExecuteComponent implements OnInit, OnChanges {
  tips = tips
  selectedPlants:any=''
  selectedCommodity:any
  selectedVendor:any = ''
  
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
  public frStartDate: any
  
  public form = new FormGroup({
    startDate: new FormControl('9/1/2023', Validators.required),
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
    private cdr:ChangeDetectorRef,
    ) { }


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
      let obj = {
        startDate: this.vendorPageLoad.startDate,
        endDate: this.vendorPageLoad.endDate,
        tenantId: this.currentUser.tenantID,
        vendorCode: this.currentUser.vendorCode // add vendorCode
      }


      Promise.all([
        this._apiService.post(api.getPlantDropDown,obj).toPromise(),
        this._apiService.post(api.getCommodityDropDown,{...obj,plantCode : this.vendorPageLoad.plantCode}).toPromise(),
        this._apiService.post(api.getVendorDropDown,{...obj,plantCode : this.vendorPageLoad.plantCode,commodity:this.vendorPageLoad.commodity}).toPromise()
        
      ]).then((res:any)=>{
        this.listPlant = res[0].data;
        this.previousDataEmitter.emit(res[0].previousDate);
        this.listsDropDown.plantDropDown = res[0].data;
        
        if(res[0].data.length > 1){
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
        } else if (res[0].data.length == 1){

          this.form.controls["plantCode"].setValue(res[0].data[0].id)
            this.averageForm.controls["plantCode"].setValue(this.vendorPageLoad.plantCode)
            this.selectedPlants = res[0].data[0].id;
            this.plantInput = res[0].data[0].name
            // res[1].data.filter((i:any)=> i.id == this.vendorPageLoad.plantCode)[0].name
        }
        

        this.listCommodity = res[1].data
        this.listsDropDown.commodityDropDown = res[1].data
        
        if(res[1].data.length>1){
          if(this.vendorPageLoad.commodity.split(",").length>1){
            var commodity = this.onDropDownSelectionSetData(this.listCommodity,"ALL");
            this.form.controls["commodity"].setValue(commodity)
            this.averageForm.controls["commodity"].setValue(commodity)
            this.selectedCommodity = commodity
            this.commodityInput = "ALL"
          }else
          {
            this.form.controls["commodity"].setValue(this.vendorPageLoad.commodity)
            this.averageForm.controls["commodity"].setValue(this.vendorPageLoad.commodity)
            this.selectedCommodity = this.vendorPageLoad.commodity
            this.commodityInput =res[1].data.filter((i:any)=> i.id == this.vendorPageLoad.commodity)[0].name
          }
        }else if(res[1].data.length == 1)
        {
          this.form.controls["commodity"].setValue(res[1].data[0].name)
          this.averageForm.controls["commodity"].setValue(this.vendorPageLoad.commodity)
          this.selectedCommodity = res[1].data[0].name
          this.commodityInput =res[1].data[0].name
        }
         
        this.listVendor = res[2].data
        this.listsDropDown.vendorDropDown = res[2].data
        
        if(res[2].data.length > 1)
        {
          if(this.vendorPageLoad.vendorCode.split(",").length>1){
            var vendor = this.onDropDownSelectionSetData(this.listVendor,"ALL");
            this.form.controls["vendorCode"].setValue(vendor)
            this.averageForm.controls["vendorCode"].setValue(vendor)
            this.selectedVendor = vendor;
            this.vendorInput = "ALL"
          }else
          {
            this.form.controls["vendorCode"].setValue(this.vendorPageLoad.vendorCode)
            this.averageForm.controls["vendorCode"].setValue(res[0].vendorCode)
            
            this.selectedVendor = this.vendorPageLoad.vendorCode
            this.vendorInput =res[2].data.filter((i:any)=> i.id == this.vendorPageLoad.vendorCode)[0].name
          }

        }
        else if(res[2].data.length == 0)
        {
          this.form.controls["vendorCode"].setValue(res[2].data[0].id)
          this.averageForm.controls["vendorCode"].setValue(res[0].vendorCode)
          
          this.selectedVendor = res[2].data[0].id
          this.vendorInput =res[2].data[0].name
        }
        
        this.averageFromGroupEventEmitter.emit(this.averageForm.value)
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


  onExecuteClick() {
    this.form.controls['plantCode'].setValue(this.selectedPlants)
    this.form.controls['commodity'].setValue(this.selectedCommodity)
    this.form.controls['vendorCode'].setValue(this.selectedVendor);
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
    this.executiveDataEmitter.emit(this.form.value)
    this.form.controls['startDate'].setValue(this.startDate);
    this.form.controls['endDate'].setValue(this.endDate);


  }


  onPlantSelect(data: any) {
    this.form.controls["vendorCode"].setValue(null)
    this.form.controls["commodity"].setValue(null)
    this.selectedPlants = ''
    this.selectedPlants = this.onDropDownSelectionSetData(this.listsDropDown.plantDropDown,data.option.value);
    this.averageForm.controls['plantCode'].setValue(this.selectedPlants);
      this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.getCommodityDropDown,
      {
        startDate:this.averageForm.controls["startDate"].value,
        endDate:this.averageForm.controls["endDate"].value,
        tenantId:this.currentUser.tenantID,
        plantCode:this.selectedPlants,
      }).subscribe((res:any)=>{
        this._apiService.isCompareLoader$.next(false)
        this.listCommodity = res.data
        this.listsDropDown.commodityDropDown = res.data
        },(e:any)=>{
        this._apiService.isCompareLoader$.next(false)
      })


    
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
    this.selected = []
    this.selectedCommodity = this.onDropDownSelectionSetData(this.listsDropDown.commodityDropDown,data.option.value)
    this.form.controls['commodity'].setValue(this.selectedCommodity)
    this.averageForm.controls['commodity'].setValue(this.selectedCommodity)
    this.onAverageCommoditySelect()
    this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.getVendorDropDown,
      {
        startDate:this.averageForm.controls["startDate"].value,
        endDate:this.averageForm.controls["endDate"].value,
        tenantId:this.currentUser.tenantID,
        plantCode:this.selectedPlants,
        commodity:this.selectedCommodity
      }).subscribe((res:any)=>{
        this._apiService.isCompareLoader$.next(false)
        this.listsDropDown.vendorDropDown = res.data
        this.listVendor = res.data
        },(e:any)=>{
        this._apiService.isCompareLoader$.next(false)
      })
  }

  onCommodityInput(data: any) {
    if (this.commodityInput === '' || this.commodityInput === undefined) {
      this.listCommodity = this.listsDropDown?.commodityDropDown;
    } else {
      this.listCommodity = this.listsDropDown?.commodityDropDown.filter((i: any) => i.name.toLowerCase().includes(this.commodityInput.toLowerCase()));
    }


    // if (this.commodityInput === '' || this.commodityInput === undefined) {
    //   this.listCommodity = []
    //   let i = 0;
    //   this.listsDropDown?.vendorDropDown.forEach((element: any) => {
    //     if (i == 0) {
    //       if (element.commodity !== null)
    //         this.listCommodity.push(element)
    //       i++
    //     } else {
    //       var condition = this.listCommodity.some((i: any) => i.commodity?.toLowerCase() == element.commodity.toLowerCase())
    //       if (!condition)
    //         this.listCommodity.push(element)
    //     }
    //   });
    //   this.listCommodity?.sort((a: any, b: any) => {
    //     if (a.commodity < b.commodity) {
    //       return -1;
    //     } else if (a.commodity > b.commodity) {
    //       return 1;
    //     } else return 0
    //   })
    //   // this.listCommodity = this.listsDropDown?.vendorDropDown;
    // } else {
    //   var required = this.listsDropDown?.vendorDropDown.filter((i: any) => i?.commodity?.toLowerCase().includes(this.commodityInput?.toLowerCase()));
    //   this.listCommodity = []
    //   let i = 0;
    //   required.forEach((element: any) => {
    //     if (i == 0) {
    //       if (element.commodity !== null)
    //         this.listCommodity.push(element)
    //       i++
    //     } else {
    //       var condition = this.listCommodity.some((i: any) => i.commodity?.toLowerCase() == element.commodity?.toLowerCase())
    //       if (!condition)
    //         this.listCommodity.push(element)
    //     }
    //   });
    //   this.listCommodity?.sort((a: any, b: any) => {
    //     if (a.commodity < b.commodity) {
    //       return -1;
    //     } else if (a.commodity > b.commodity) {
    //       return 1;
    //     } else return 0
    //   })
    // }
  }

  onVendorSelection(data: any) {
    // var vendor = this.listsDropDown?.vendorDropDown?.filter((i: any) => i.vendorName?.toLowerCase() == data?.option?.value.toLowerCase())[0]
    
    var vendor = this.onDropDownSelectionSetData(this.listVendor,data.option.value);
    this.selectedVendor = vendor
    this.form.controls['vendorCode'].setValue(vendor);
    this.listVendor = this.listsDropDown.vendorDropDown;
  
  }

  onVendorInput(data: any) {
    if (this.vendorInput === '' || this.vendorInput === undefined) {
      this.listVendor = this.listsDropDown?.vendorDropDown;
    } else {
      this.listVendor = this.listsDropDown?.vendorDropDown.filter((i: any) => i.name.toLowerCase().includes(this.vendorInput.toLowerCase() ));
    }
    // this.listVendor?.sort((a: any, b: any) => {
    //   if (a.vendorName < b.vendorName) {
    //     return -1;
    //   } else if (a.vendorName > b.vendorName) {
    //     return 1;
    //   } else return 0
    // })
  }

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
    this.selectedVendor= ''
    this.plantInput = ''
    this.commodityInput = ''
    this.vendorInput = ''
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
    tenantId: this.currentUser.tenantID
  }
      this._apiService.post(api.getPlantDropDown,
      obj
    ).subscribe((res: any) => {
      this._apiService.isCompareLoader$.next(false);
      this.listPlant = res.data;
      let plants = ''
      this.previousDataEmitter.emit(res.previousDate);
      // for(let i = 0 ; i<res.data.length;i++){
      //   if(res.data[i].id !='ALL')
      //   plants =plants+ `${res.data[i].id}`
       
      //   if(i>0 && i<res.data.length-1)
      //   plants =plants+','
      // }

      // this.averageForm.controls['plantCode'].setValue(plants)
      // this.onAveragePlantSelect()
      
      this.listsDropDown.plantDropDown = res.data
      this._notificationService.push(res.message, 1)
    }, (e: any) => {
      this._apiService.isCompareLoader$.next(false)

    })

  }


  onAveragePlantSelect(){
    this._apiService.post(api.getCommodityDropDown,
      {
        startDate:this.averageForm.controls["startDate"].value,
        endDate:this.averageForm.controls["endDate"].value,
        tenantId:this.currentUser.tenantID,
        plantCode:this.averageForm.controls['plantCode'].value,
      }).subscribe((res:any)=>{
        this._apiService.isCompareLoader$.next(false)
        let commodity = ''
        for (let index = 0; index < res.data.length; index++) {
           if(res.data[index].id != 'ALL')
             commodity += res.data[index].name;
          if(index> 0 && index < res.data.length-1)
             commodity +=','
        }
        this.averageForm.controls['commodity'].setValue(commodity);
        // this.listCommodity = res.data
       this.onAverageCommoditySelect()
        },(e:any)=>{
        this._apiService.isCompareLoader$.next(false)
      })
  }

  onAverageCommoditySelect(){

  
    this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.getVendorDropDown,
      {
        startDate:this.averageForm.controls["startDate"].value,
        endDate:this.averageForm.controls["endDate"].value,
        tenantId:this.currentUser.tenantID,
        plantCode:this.averageForm.controls['plantCode'].value,
        commodity:this.averageForm.controls['commodity'].value,
      }).subscribe((res:any)=>{
        this._apiService.isCompareLoader$.next(false)
        let vendor = ''
        for (let index = 0; index < res.data.length; index++) {
          if(res.data[index].id != 'ALL')
            vendor += res.data[index].id;
      
            if(index> 0 && index <res.data.length-1)
            vendor +=','
       }

       this.averageForm.controls['vendorCode'].setValue(vendor);
       this.averageFromGroupEventEmitter.emit(this.averageForm.value)
      },(e:any)=>{
        this._apiService.isCompareLoader$.next(false)
      })

  

  }

}

