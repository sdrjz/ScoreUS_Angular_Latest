import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
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
  selector: 'app-execute-commodity',
  templateUrl: './execute-commodity.component.html',
  styleUrls: ['./execute-commodity.component.css']
})
export class ExecuteCommodityComponent implements OnInit {
  listCommodityWithPlantsIssue : any[] 
  tips = tips
  selectedPlants:any=''
  selectedCommodity:any
  allPlantsWithCommodityInternal :any
  public currentDate = new Date()
  listsDropDown: any  = {
    plantDropDown:[],
    CommodityDropDown:[]
  }
  selected = [];
  plant = [''];
  @Input() loader = false
  @Input() commodityPageLoad : any | null
  @Input() allPlantsAndCommodity : any
  @Output() commodityExecutiveDataEmitter = new EventEmitter();
  @Output() previousDataEmitter = new EventEmitter();
  @Output() averageFromGroupEventEmitter = new EventEmitter();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  currentUser: any
  public startDate: any
  public endDate: any
  public plantInput: any
  public listPlant: any[]
  public listCommodity: any[] = []
  public listVendor: any[]
  public form: FormGroup
  public commodityInput: string = ""
  public vendorInput: string = ""
  
  
  
  public averageForm = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    commodity: new FormControl(''),
    endDate: new FormControl(null, Validators.required),
    plantCode: new FormControl(null, Validators.required),
    allCommodity: new FormControl(''),
    detialType: new FormControl('')
  }, { validators: dateValidator })


  
  
  @ViewChild('fruitInput') fruitInput: ElementRef;
  listCommodityWithPlant: any[];

  constructor(private _apiService: GeneralApiService,
    private _notificationService: NotificationService,
    private translateService:TranslateService,
    private cdr : ChangeDetectorRef) { }


  ngOnInit(): void {
    this.initFormGroup();
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

  initFormGroup(){
    this.form = new FormGroup({
      startDate: new FormControl(null, Validators.required),
      commodity: new FormControl(''),
      endDate: new FormControl(null, Validators.required),
      plantCode: new FormControl(null, Validators.required),
      plantCodeForField : new FormControl(null, Validators.required),
      // vendorCode: new FormControl(''),
      commodityWithPlant : new FormControl(null,Validators.required), 
      detialType: new FormControl('')
    }, { validators: dateValidator })


  }


  ngOnChanges(changes: SimpleChanges) {
    if(changes["commodityPageLoad"]){
      if(this.commodityPageLoad == null) return
      let startDate = this.commodityPageLoad.startDate;
      let endDate = this.commodityPageLoad.endDate
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
        startDate: this.commodityPageLoad.startDate,
        endDate: this.commodityPageLoad.endDate,
        tenantId: this.currentUser.tenantID
      }
      
      this.allPlantsWithCommodityInternal = this.allPlantsAndCommodity;      
        Promise.all([
          this._apiService.post(api.getPlantDropDown,obj).toPromise(),
          this._apiService.post(api.getCommodityDropDown,{...obj,plantCode : this.commodityPageLoad.plantCodeForField}).toPromise(),
          this._apiService.post(api.getCommodityWithPlant,{...obj,plantCode : this.commodityPageLoad.plantCodeForField}).toPromise(),
        
          ]).then((res:any)=>{
            this.listCommodityWithPlantsIssue = [...res[2].data];
          localStorage.setItem('listCommodity',JSON.stringify(res[2].data))
          this.listsDropDown.plantDropDown = []
          this.listsDropDown.commodityDropDown = []
          this.listPlant = res[0].data;
          this.previousDataEmitter.emit(res[0].previousDate);
          this.listsDropDown.plantDropDown = res[0].data;
          if(res[0].data.length > 1){
            if(this.commodityPageLoad.plantCodeForField.split(",").length>1){
            var plant = this.allPlantsAndCommodity.plant 
            this.selectedPlants = plant
            this.form.controls["plantCode"].setValue(plant)
            this.form.controls["plantCodeForField"].setValue(plant)
            this.averageForm.controls["plantCode"].setValue(plant)
            this.plantInput = "ALL"
            }else
            {
            this.form.controls["plantCode"].setValue(this.commodityPageLoad.plantCodeForField)
            this.form.controls["plantCodeForField"].setValue(this.commodityPageLoad.plantCodeForField)
            this.averageForm.controls["plantCode"].setValue(this.commodityPageLoad.plantCodeForField)
            this.selectedPlants = this.form.controls["plantCode"].value;
            this.plantInput =res[0].data.filter((i:any)=> i.id == this.commodityPageLoad.plantCodeForField)[0].name
            }
          } else if (res[0].data.length == 1){

            this.form.controls["plantCode"].setValue(res[0].data[0].id)
            this.form.controls["plantCodeForField"].setValue(res[0].data[0].id)
            this.averageForm.controls["plantCode"].setValue(this.commodityPageLoad.plantCode)
            this.selectedPlants = res[0].data[0].id;
            this.plantInput = res[0].data[0].name
            // res[1].data.filter((i:any)=> i.id == this.vendorPageLoad.plantCode)[0].name
        }
            this.listCommodity= res[1].data
            this.listCommodityWithPlant = res[2].data
            this.listsDropDown.commodityDropDown = res[2].data
        
            if(res[2].data.length>1){
          
      
            var commodity = this.allPlantsAndCommodity.commodity 
            // this.onDropDownSelectionSetData(this.listCommodity,"ALL");
            this.form.controls["commodity"].setValue(commodity);
            this.averageForm.controls["commodity"].setValue(commodity);
            this.selectedCommodity = commodity;
            this.commodityInput = "ALL-ALL";
            this.form.controls["commodityWithPlant"].setValue("ALL-ALL");
          
           
        }else if(res[1].data.length == 1)
        {
          this.form.controls["commodity"].setValue(res[1].data[0].name)
          this.averageForm.controls["commodity"].setValue(this.commodityPageLoad.commodity)
          this.form.controls["commodityWithPlant"].setValue(res[1].data[0].name);
           
          this.selectedCommodity = res[1].data[0].name
        }

        this.commodityInput =this.commodityPageLoad.commodityWithPlant;
        this.listCommodity = this.listsDropDown.commodityDropDown;         
        $("#selectBox").hide();
        $("#selectVale").show();
        $("#selectVale").html(this.commodityInput.split("-")[0]+"<span class='float-right'>"+this.commodityInput.split("-")[1]+"</span>");

        this.cdr.detectChanges()
        
        this.averageFromGroupEventEmitter.emit(this.averageForm.value)
      }).finally(()=>{})
          

    //   this.averageForm.controls["startDate"].setValue(this.vendorPageLoad.startDate)
    //   this.averageForm.controls["endDate"].setValue(this.vendorPageLoad.endDate)
    //   this.cdr.detectChanges();
    // }
    
    }



  }

  onSelectValeClick(){
    $("#selectVale").hide();
    $("#selectVale").html();
    $("#selectBox").show();
    this.commodityInput = ''
    this.listCommodity = this.listCommodityWithPlantsIssue;
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


  onCommodityExecuteClick() {

    
    // this.form.controls['plantCode'].setValue(this.selectedPlants)
    // this.form.controls['commodity'].setValue(data)


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
    this.commodityExecutiveDataEmitter.emit(this.form.value)
    this.form.controls['startDate'].setValue(this.startDate);
    this.form.controls['endDate'].setValue(this.endDate);


  }


  onPlantSelect(data: any) {
    // this.form.controls["vendorCode"].setValue(null)
    this.selected=[]
    this.form.controls["commodity"].setValue(null)
    this.selectedPlants = ''
    this.selectedPlants = this.onDropDownSelectionSetData(this.listsDropDown.plantDropDown,data.option.value);
    
    this.averageForm.controls['plantCode'].setValue(this.selectedPlants);
    this.averageForm.controls['commodity'].setValue(this.commodityPageLoad.commodity);
    this.averageForm.controls['allCommodity'].setValue(this.commodityPageLoad.commodity);
    
    this.averageFromGroupEventEmitter.emit(this.averageForm.value)
    
    this.form.controls['plantCodeForField'].setValue(this.selectedPlants);
    this._apiService.isCompareLoader$.next(true)
    this.form.controls['commodity'].setValue(null);
    this.commodityInput = ''
    this._apiService.post(api.getCommodityWithPlant,
      {
        startDate:this.form.controls["startDate"].value,
        endDate:this.form.controls["endDate"].value,
        tenantId:this.currentUser.tenantID,
        plantCode:this.selectedPlants,
      }).subscribe((res:any)=>{
        this._apiService.isCompareLoader$.next(false)
     
        this.listCommodity = res.data
        this.listsDropDown.commodityDropDown = res.data
        this.listCommodityWithPlantsIssue = [...res.data]; 
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

  // onCommoditySelection(data: any) {
  //   this.selected = []
  //   this.selectedCommodity = this.onDropDownSelectionSetData(this.listsDropDown.commodityDropDown,data.option.value)
  //   this.form.controls['commodity'].setValue(this.selectedCommodity)
  
  //   this._apiService.isCompareLoader$.next(true)
  //   this._apiService.post(api.getVendorDropDown,
  //     {
  //       startDate:this.form.controls["startDate"].value,
  //       endDate:this.form.controls["endDate"].value,
  //       tenantId:this.currentUser.tenantID,
  //       plantCode:this.selectedPlants,
  //       commodity:this.selectedCommodity
  //     }).subscribe((res:any)=>{
  //       this._apiService.isCompareLoader$.next(false)
  //       this.listsDropDown.vendorDropDown = res.data
  //       this.listVendor = res.data
  //       },(e:any)=>{
  //       this._apiService.isCompareLoader$.next(false)
  //     })
  // }

  onCommodityInput(data: any) {

    if (this.commodityInput === '' || this.commodityInput === undefined) {
      
      this.listCommodity = this.listCommodityWithPlantsIssue !== null ? this.listCommodityWithPlantsIssue : this.listsDropDown.commodityDropDown;
    } else {
      this.listsDropDown.commodityDropDown = this.listCommodityWithPlantsIssue;
      this.listCommodity = this.listsDropDown?.commodityDropDown.filter((i: any) => i.name.toLowerCase().includes(this.commodityInput.toLowerCase()));
    }
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
      this._notificationService.push("Can not Select All after selecting any of the commodity",2)
      return
    }
    
    
    if (this.selected.some((i: any) => i.id == "ALL")) {
      this._notificationService.push("Can not select any other commodity now", 2)
      return
    }

    var alreadyExist = this.selected.find((i: any) => i.id == event.option.value)
    if (alreadyExist) {
      this._notificationService.push("commodity already selected", 2)
      return
    } else if (this.selected.length > 4) {
      this._notificationService.push("can not insert more then 5 commodity", 2)
      return
    }
    // if(event.option.value == "ALL") 
    this.selected.push(this.listsDropDown.commodityDropDown.filter((i: any) => i.id == event.option.value)[0]);


    this.fruitInput.nativeElement.value = '';
    this.listCommodity = this.listsDropDown.commodityDropDown;
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.selected.push(this.listCommodity.filter((i: any) => i.commodity.toLowerCase() == value.trim().toLowerCase())[0]);
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
    // this.form.controls["vendorCode"].setValue(null)
    this.selectedPlants=''
    this.selectedCommodity= ''
    this.selected = []
    this.plantInput = ''
    this.commodityInput = ''
    if (!this.form.controls['startDate'].value || !this.form.controls['endDate'].value)
      return

    if (this.form.controls['startDate'].value > this.form.controls['endDate'].value)
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
      this.previousDataEmitter.emit(res.previousDate);
      this.listsDropDown.plantDropDown = res.data
      this._notificationService.push(res.message, 1)
    }, (e: any) => {
      this._apiService.isCompareLoader$.next(false)

    })

  }  



  onCommoditySelect(data:any){
    var commodity = ""
    var allPlantAndCommodity = localStorage.getItem('allPlantsWithCommodity')
    if(allPlantAndCommodity)
      this.allPlantsAndCommodity = JSON.parse(allPlantAndCommodity)
    
    this.form.controls['commodityWithPlant'].setValue(data.option.value)
    // var html = "<div class='mat-form-field'>"+data.option.value+"</div>";
    
    $("#selectBox").hide();
    $("#selectVale").show();
    $("#selectVale").html(data.option.value.split("-")[0]+"<span class='float-right'>"+data.option.value.split("-")[1]+"</span>");
    this.cdr.detectChanges();
    
    var selectedPlant = data.option.value.split("-")[1];
    if(selectedPlant == "ALL")
      this.form.controls["plantCode"].setValue(this.allPlantsAndCommodity.plant);
    else 
    this.form.controls["plantCode"].setValue(selectedPlant)
  
  
  
  var selectedCommodity = data.option.value.split("-")[0];
  if(selectedCommodity == "ALL")
    commodity = this.allPlantsAndCommodity.commodity;
  else 
  commodity = selectedCommodity;



this.form.controls['commodity'].setValue(commodity);

var listCommodities = this.listCommodityWithPlantsIssue

this.listCommodityWithPlant = listCommodities !== null ? listCommodities : this.listsDropDown.commodityDropDown;
this.listCommodity = listCommodities !== null ? listCommodities : this.listsDropDown.commodityDropDown
this.cdr.detectChanges();
}

}


