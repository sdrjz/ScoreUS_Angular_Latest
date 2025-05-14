import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
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
  selector: 'app-mapout-vendor-filed',
  templateUrl: './mapout-vendor-filed.component.html',
  styleUrls: ['./mapout-vendor-filed.component.css']
})
export class MapoutVendorFiledComponent implements OnInit {
  
  @Output() vendorMapOutEmitter = new EventEmitter<any>();
  listMapOutVendor:any[]
  numberArray: number[]
  tips = tips
  selectedPlants:any=''
  selectedCommodity:any = ''
  selectedCountry : any = ''
  selectedCity : any = ''
  public currentDate = new Date()
    listsDropDown: any  = {
    plantDropDown:[],
    VendorDropDown:[],
    CommodityDropDown:[],
    CountryDropDown:[], 
    CityDropDown:[]
  }
  selected = [];
  plant = [''];
  @Input() loader = false
  separatorKeysCodes: number[] = [ENTER, COMMA];
  currentUser: any
  public startDate: any
  public endDate: any
  public plantInput: any
  public listPlant: any[]
  public listCountry: any[]
  public listCity: any[]
  public listCommodity: any[] = []
  public listVendor: any[]
  public form: FormGroup
  public commodityInput: string = ""
  public countryInput: string = ""
  public cityInput: string = ""
  public vendorInput: string = ""
  @ViewChild('fruitInput') fruitInput: ElementRef;

  constructor(private _apiService: GeneralApiService,
    private _notificationService: NotificationService,
    private http:HttpClient,
    private translateService:TranslateService,
    private cdr:ChangeDetectorRef) { }


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

    this._apiService.get(api.getCountries+"/"+this.currentUser.tenantID).subscribe((res:any)=>{
      this.listCountry  = res.data
      this.listsDropDown.CountryDropDown = JSON.parse(JSON.stringify(res.data))
   

      this._apiService.get(api.getCity+"/"+this.currentUser.tenantID).subscribe((inres:any)=>{
        this.listCity  = inres.data
        this.listsDropDown.CityDropDown = JSON.parse(JSON.stringify(inres.data))
      })
  
   
    })

    this.form = new FormGroup({
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      plantCode: new FormControl(null, Validators.required),
      commodity: new FormControl(''),
      vendorCode: new FormControl(''),
      allVendorCode: new FormControl(''),
      countryCode: new FormControl(null, Validators.required),
      cityCode: new FormControl(null, Validators.required),
      colour: new FormControl(),
      tenantId: new FormControl(this.currentUser.tenantID)
    }, { validators: dateValidator })


    
  }

  ngOnChanges(changes: SimpleChanges) {


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
    
    this.form.controls['countryCode'].setValue(this.listsDropDown.CountryDropDown.filter((i:any)=>i.id == this.selectedCountry)[0]?.name.toLowerCase())
    this.form.controls['cityCode'].setValue(this.listsDropDown.CityDropDown.filter((i:any)=>i.id == this.selectedCity)[0]?.name.toLowerCase())
    if(this.form.controls['colour'].value == 'ALL')
    this.form.controls['colour'].setValue('GREEN,YELLOW,RED');

    let data: any = ''
    
    if(this.selected.some((i:any)=>i.id == "ALL"))
    {
      this.listsDropDown.vendorDropDown.forEach((i:any) => {
        if(i.id != "ALL")
        data = data+i.id+","
      });

    }else{
      this.selected.forEach((i: any) => {
        data = data + i.id + ","
      })
    }
    
    data = data.slice(0, -1)
    
    this.form.controls['plantCode'].setValue(this.selectedPlants)
    this.form.controls['commodity'].setValue(this.selectedCommodity)
    this.form.controls['vendorCode'].setValue(data);
   
    let res = this.findInvalidControls()

    if (res.length > 0) {
      this._notificationService.push("fill all data first", 1)
      return
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
    this.form.controls['countryCode'].setValue(this.form.controls['countryCode'].value.toString().toUpperCase())
    this.form.controls['cityCode'].setValue(this.form.controls['cityCode'].value.toString().toUpperCase())
    this._apiService.isCompareLoader$.next(true);
      
// this.http.post(api.mapOutVendor,this.form.value).subscribe((res:any)=>{
// })

    this._apiService.post(api.mapOutVendor,this.form.value)
    .subscribe((res:any)=>{
      this._apiService.isCompareLoader$.next(false);
      this.listMapOutVendor = res?.data
      this.form.controls['countryCode'].setValue(this.selectedCountry)
      this.form.controls['cityCode'].setValue(this.selectedCity)
      this.form.controls['colour'].setValue("ALL");
      
      this.form.controls['startDate'].setValue(this.startDate);
      this.form.controls['endDate'].setValue(this.endDate);
      
      this.vendorMapOutEmitter.emit(this.listMapOutVendor);
    },(e:any)=>{
      this._apiService.isCompareLoader$.next(false);
    })
    this.form.controls['colour'].setValue('ALL');


  }


  onPlantSelect(data: any) {
    this.form.controls["vendorCode"].setValue(null)
    this.form.controls["commodity"].setValue(null)
    this.selectedPlants = ''
    this.selectedPlants = this.onDropDownSelectionSetData(this.listsDropDown.plantDropDown,data.option.value);
    this.form.controls['plantCode'].setValue(this.selectedPlants)
      this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.getCommodityDropDown,
      {
        startDate:this.form.controls["startDate"].value,
        endDate:this.form.controls["endDate"].value,
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
      output = list.filter((i:any)=> i.name == value)[0]?.id
    }
    return output
  }

  onCommoditySelection(data: any) {
    this.selected = []
    this.selectedCommodity = this.onDropDownSelectionSetData(this.listsDropDown.commodityDropDown,data.option.value)
    this.form.controls['commodity'].setValue(this.selectedCommodity)
  
    this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.getVendorDropDown,
      {
        startDate:this.form.controls["startDate"].value,
        endDate:this.form.controls["endDate"].value,
        tenantId:this.currentUser.tenantID,
        plantCode:this.selectedPlants,
        commodity:this.selectedCommodity
      }).subscribe((res:any)=>{
        this._apiService.isCompareLoader$.next(false)
        this.listsDropDown.vendorDropDown = res.data
        let selectedVendor = this.onDropDownSelectionSetData(this.listsDropDown.vendorDropDown,"ALL");
        this.form.controls["allVendorCode"].setValue(selectedVendor);
        
        this.listVendor = res.data
        },(e:any)=>{
        this._apiService.isCompareLoader$.next(false)
      })
  }


  onCountrySelection(data: any) {

    this.selectedCountry = this.onDropDownSelectionSetData(this.listsDropDown.CountryDropDown,data.option.value)
    this.numberArray = [] 
    this.numberArray = this.selectedCountry.split(",").map(Number);
    this.form.controls['countryCode'].setValue(this.selectedCommodity)
    // this.getCities('');
    
  }
  
 getCities(data:any){

  this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.getCity,{
      countriesId:this.numberArray,
      searchText:data
    }      
      ).subscribe((res:any)=>{
        this._apiService.isCompareLoader$.next(false)
        this.listsDropDown.CityDropDown = JSON.parse(JSON.stringify(res.data));
        this.listCity = res.data
        },(e:any)=>{
        this._apiService.isCompareLoader$.next(false)
      })
 }


 
  onCitySelection(data: any) {
    this.selectedCity = this.onDropDownSelectionSetData(this.listsDropDown.CityDropDown,data.option.value)
    this.form.controls['cityCode'].setValue(this.selectedCity)
  
   
  }




onCommodityInput(data: any) {
    if (this.commodityInput === '' || this.commodityInput === undefined) {
      this.listCommodity = this.listsDropDown?.commodityDropDown;
    } else {
      this.listCommodity = this.listsDropDown?.commodityDropDown.filter((i: any) => i.name.toLowerCase().includes(this.commodityInput.toLowerCase()));
    }
 }

 onCountryInput(data: any) {
    if (this.countryInput === '' || this.countryInput === undefined) {
      this.listCountry = this.listsDropDown?.CountryDropDown;
    } else {
      this.listCountry = this.listsDropDown?.CountryDropDown.filter((i: any) => i.name.toLowerCase().includes(this.countryInput.toLowerCase()));
    }
 }

 onCityInput(data: any) {
    if (this.cityInput === '' || this.cityInput === undefined) {
      this.getCities('')
      // this.listCity = this.listsDropDown?.cityDropDown;
    } else {
    this.getCities(this.cityInput)
      // this.listCity = this.listsDropDown?.cityDropDown.filter((i: any) => i.name.toLowerCase().includes(this.cityInput.toLowerCase()));
    }
 }





 onVendorSelection(data: any) {
  //   var vendor = this.listsDropDown?.vendorDropDown?.filter((i: any) => i.vendorName?.toLowerCase() == data?.option?.value.toLowerCase())[0]
  //   this.form.controls['vendorCode'].setValue(vendor?.vendorCode);
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
    } 
    // else if (this.selected.length > 4) {
    //   this._notificationService.push("can not insert more then 5 vendor", 2)
    //   return
    // }
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

    if (this.form.controls['startDate'].value >= this.form.controls['endDate'].value)
      return
    this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.getPlantDropDown,
      {
        startDate: this.form.controls['startDate'].value,
        endDate: this.form.controls['endDate'].value,
        tenantId: this.currentUser.tenantID
      }
    ).subscribe((res: any) => {
      this._apiService.isCompareLoader$.next(false)
      this.listPlant = res.data
      this.listsDropDown.plantDropDown = res.data
      
      this.selectedPlants = ''
       
     
    this._notificationService.push(res.message, 1)
      
    }, (e: any) => {
      this._apiService.isCompareLoader$.next(false)

    })

  }

}
