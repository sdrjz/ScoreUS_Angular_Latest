import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { api } from 'src/app/api.endpoints';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { tips } from 'src/app/tootTips';
import { dateValidator } from 'src/app/validation/date-validator';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-execute-material',
  templateUrl: './execute-material.component.html',
  styleUrls: ['./execute-material.component.css']
})
export class ExecuteMaterialComponent implements OnInit {
  tips = tips
  selectedPlants:any=''
  selectedCommodity:any=''
  selectedVendor : any = ''
  selectedMaterial : any = ''
  public currentDate = new Date()
  materialDropDown:any[]
  @Input() listsDropDown: any  = {
    plantDropDown:[],
    VendorDropDown:[],
    CommodityDropDown:[]
  }
  selected = [];
  plant = [''];
  @Input() loader = false
  @Input() materialPageLoad : any
  @Output() materialExecutiveDataEmitter = new EventEmitter();
  @Output() previousDataEmitter = new EventEmitter();
  @Output() materialAverageExecutiveDataEmitter = new EventEmitter();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  currentUser: any
  public startDate: any
  public endDate: any
  public plantInput: any
  public listPlant: any[]
  public listCommodity: any[] = []
  public listVendor: any[]
  public listMaterial: any[]
  public form = new FormGroup({
    startDate: new FormControl('9/1/2023', Validators.required),
    commodity: new FormControl(''),
    endDate: new FormControl(null, Validators.required),
    plantCode: new FormControl('1001', Validators.required),
    vendorCode: new FormControl(''),
    materialCode: new FormControl(''),
    detialType: new FormControl('')
  }, { validators: dateValidator })

  
  public averageForm = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    commodity: new FormControl(''),
    endDate: new FormControl(null, Validators.required),
    plantCode: new FormControl(null, Validators.required),
    vendorCode: new FormControl(''),
    materialCode : new FormControl(''),
    detialType: new FormControl('')
  }, { validators: dateValidator })

  public commodityInput: string = ""
  public vendorInput: string = ""
  public materialInput: string = ""
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

    if(changes["materialPageLoad"]){
      if(this.materialPageLoad == null) return
      
      
      let startDate = this.materialPageLoad.startDate;
      let endDate = this.materialPageLoad.endDate
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
        startDate: this.materialPageLoad.startDate,
        endDate: this.materialPageLoad.endDate,
        tenantId: this.currentUser.tenantID
      }


      Promise.all([
        this._apiService.post(api.getPlantDropDown,obj).toPromise(),
        this._apiService.post(api.getCommodityDropDown,{...obj,plantCode : this.materialPageLoad.plantCode}).toPromise(),
        this._apiService.post(api.getVendorDropDown,{...obj,plantCode : this.materialPageLoad.plantCode,commodity:this.materialPageLoad.commodity}).toPromise(),
        this._apiService.post(api.getMaterialDropDown,{...obj,plantCode : this.materialPageLoad.plantCode,commodity:this.materialPageLoad.commodity,vendorCode :this.materialPageLoad.vendorCode }).toPromise()
        
      ]).then((res:any)=>{
        this.listPlant = res[0].data;
        this.previousDataEmitter.emit(res[0].previousDate);
        this.listsDropDown.plantDropDown = res[0].data;
        
        if(res[0].data.length > 1){
          if(this.materialPageLoad.plantCode.split(",").length>1){
            var plant = this.onDropDownSelectionSetData(this.listPlant,"ALL");      
            this.selectedPlants = plant
            this.form.controls["plantCode"].setValue(plant)
            this.averageForm.controls["plantCode"].setValue(plant)
            this.plantInput = "ALL"
          }else
          {
            this.form.controls["plantCode"].setValue(this.materialPageLoad.plantCode)
            this.averageForm.controls["plantCode"].setValue(this.materialPageLoad.plantCode)
            this.selectedPlants = this.form.controls["plantCode"].value;
            this.plantInput =res[1].data.filter((i:any)=> i.id == this.materialPageLoad.plantCode)[0].name
          }
        } else if (res[0].data.length == 1){

          this.form.controls["plantCode"].setValue(res[0].data[0].id)
            this.averageForm.controls["plantCode"].setValue(this.materialPageLoad.plantCode)
            this.selectedPlants = res[0].data[0].id;
            this.plantInput = res[0].data[0].name
            // res[1].data.filter((i:any)=> i.id == this.vendorPageLoad.plantCode)[0].name
        }
        

        this.listCommodity = res[1].data
        this.listsDropDown.commodityDropDown = res[1].data
        
        if(res[1].data.length>1){
          if(this.materialPageLoad.commodity.split(",").length>1){
            var commodity = this.onDropDownSelectionSetData(this.listCommodity,"ALL");
            this.form.controls["commodity"].setValue(commodity)
            this.averageForm.controls["commodity"].setValue(commodity)
            this.selectedCommodity = commodity
            this.commodityInput = "ALL"
          }else
          {
            this.form.controls["commodity"].setValue(this.materialPageLoad.commodity)
            this.averageForm.controls["commodity"].setValue(this.materialPageLoad.commodity)
            this.selectedCommodity = this.materialPageLoad.commodity
            this.commodityInput =res[1].data.filter((i:any)=> i.id == this.materialPageLoad.commodity)[0].name
          }
        }else if(res[1].data.length == 1)
        {
          this.form.controls["commodity"].setValue(res[1].data[0].name)
          this.averageForm.controls["commodity"].setValue(this.materialPageLoad.commodity)
          this.selectedCommodity = res[1].data[0].name
          this.commodityInput =res[1].data[0].name
        }
         
        this.listVendor = res[2].data
        this.listsDropDown.vendorDropDown = res[2].data
        
        if(res[2].data.length > 1)
        {
          if(this.materialPageLoad.vendorCode.split(",").length>1){
            var vendor = this.onDropDownSelectionSetData(this.listVendor,"ALL");
            this.form.controls["vendorCode"].setValue(vendor)
            this.averageForm.controls["vendorCode"].setValue(vendor)
            this.selectedVendor = vendor;
            this.vendorInput = "ALL"
          }else
          {
            this.form.controls["vendorCode"].setValue(this.materialPageLoad.vendorCode)
            this.averageForm.controls["vendorCode"].setValue(res[0].vendorCode)
            
            this.selectedVendor = this.materialPageLoad.vendorCode
            this.vendorInput =res[2].data.filter((i:any)=> i.id == this.materialPageLoad.vendorCode)[0].name
          }

        }
        else if(res[2].data.length == 0)
        {
          this.form.controls["vendorCode"].setValue(res[2].data[0].id)
          this.averageForm.controls["vendorCode"].setValue(res[0].vendorCode)
          
          this.selectedVendor = res[2].data[0].id
          this.vendorInput =res[2].data[0].name
        }
        

        this.listMaterial = res[3].data
        this.listsDropDown.materialDropDown = res[3].data
        this.materialDropDown = res[3].data
        if(res[3].data.length > 1  )
        {
          if(this.materialPageLoad.materialCode.split(",").length>1 || this.materialPageLoad.materialCode == "ALL"){
            var material = "ALL"
            this.form.controls["materialCode"].setValue("ALL")
            this.averageForm.controls["materialCode"].setValue("ALL")
            this.selectedMaterial = material;
            this.materialInput = "ALL"
          }else
          {
            this.form.controls["materialCode"].setValue(this.materialPageLoad.materialCode)
            this.averageForm.controls["materialCode"].setValue(res[0].materialCode)
            
            this.selectedMaterial = this.materialPageLoad.materialCode
            this.materialInput =res[3].data.filter((i:any)=> i.id == this.materialPageLoad.materialCode)[0].name
          }

        }
        else if(res[3].data.length == 0)
        {
          this.form.controls["materialCode"].setValue(res[3].data[0].id)
          this.averageForm.controls["materialCode"].setValue(res[3].materialCode)
          
          this.selectedMaterial = res[3].data[0].id
          this.materialInput =res[3].data[0].name
        }
        



        this.materialAverageExecutiveDataEmitter.emit(this.averageForm.value)
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


  onMaterialExecuteClick() {
    let data: any = ''
    
    // if(this.selected.some((i:any)=>i.id == "ALL"))
    // {
    //   this.materialDropDown.forEach((i:any) => {
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
    this.form.controls['commodity'].setValue(this.selectedCommodity)
    this.form.controls['vendorCode'].setValue(this.selectedVendor);
    this.form.controls['materialCode'].setValue(this.selectedMaterial);
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
    this.loader = true
    this.materialExecutiveDataEmitter.emit(this.form.value)
    this.form.controls['startDate'].setValue(this.startDate);
    this.form.controls['endDate'].setValue(this.endDate);


  }


onPlantSelect(data: any) {
  // 1. Reset dependent fields
  this.form.controls["vendorCode"].setValue(null);
  this.form.controls["commodity"].setValue(null);
  this.form.controls["materialCode"].setValue(null);
  this.selectedPlants = '';
  this.selectedVendor = '';
  this.selectedCommodity = '';
  this.selectedMaterial = '';
  this.selected = [];

  // 2. Set the new plant value
  this.selectedPlants = this.onDropDownSelectionSetData(
    this.listsDropDown.plantDropDown,
    data.option.value
  );
  this.form.controls["plantCode"].setValue(this.selectedPlants);
  this.averageForm.controls["plantCode"].setValue(this.selectedPlants);

  // 3. Fetch Commodity dropdown for this plant
  this._apiService.isCompareLoader$.next(true);
  this._apiService
    .post(api.getCommodityDropDown, {
      startDate: this.form.controls["startDate"].value,
      endDate: this.form.controls["endDate"].value,
      tenantId: this.currentUser.tenantID,
      plantCode: this.selectedPlants,
    })
    .subscribe(
      (res: any) => {
        this._apiService.isCompareLoader$.next(false);
        // update commodity list
        this.listCommodity = res.data;
        this.listsDropDown.commodityDropDown = res.data;

        // select ALL in commodity
        const allComm = this.onDropDownSelectionSetData(
          this.listCommodity,
          "ALL"
        );
        this.selectedCommodity = allComm;
        this.form.controls["commodity"].setValue(allComm);
        this.averageForm.controls["commodity"].setValue(allComm);

        // 4. Fetch Vendor dropdown for plant + ALL commodity
        this._apiService.isCompareLoader$.next(true);
        this._apiService
          .post(api.getVendorDropDown, {
            startDate: this.form.controls["startDate"].value,
            endDate: this.form.controls["endDate"].value,
            tenantId: this.currentUser.tenantID,
            plantCode: this.selectedPlants,
            commodity: allComm,
          })
          .subscribe(
            (res2: any) => {
              this._apiService.isCompareLoader$.next(false);
              // update vendor list
              this.listVendor = res2.data;
              this.listsDropDown.vendorDropDown = res2.data;

              // select ALL in vendor
              const allVend = this.onDropDownSelectionSetData(
                this.listVendor,
                "ALL"
              );
              this.selectedVendor = allVend;
              this.form.controls["vendorCode"].setValue(allVend);
              this.averageForm.controls["vendorCode"].setValue(allVend);

              // 5. Fetch Material dropdown for plant + ALL comm + ALL vendor
              this._apiService.isCompareLoader$.next(true);
              this._apiService
                .post(api.getMaterialDropDown, {
                  startDate: this.form.controls["startDate"].value,
                  endDate: this.form.controls["endDate"].value,
                  tenantId: this.currentUser.tenantID,
                  plantCode: this.selectedPlants,
                  commodity: allComm,
                  vendorCode: allVend,
                })
                .subscribe(
                  (res3: any) => {
                    this._apiService.isCompareLoader$.next(false);
                    // update material list
                    this.listMaterial = res3.data;
                    this.listsDropDown.materialDropDown = res3.data;

                    // select ALL in material
                    const allMat = this.onDropDownSelectionSetData(
                      this.listMaterial,
                      "ALL"
                    );
                    this.selectedMaterial = allMat;
                    this.form.controls["materialCode"].setValue(allMat);
                    this.averageForm.controls["materialCode"].setValue(allMat);

                    // emit the averageForm
                    this.materialAverageExecutiveDataEmitter.emit(
                      this.averageForm.value
                    );
                  },
                  () => {
                    this._apiService.isCompareLoader$.next(false);
                  }
                );
            },
            () => {
              this._apiService.isCompareLoader$.next(false);
            }
          );
      },
      () => {
        this._apiService.isCompareLoader$.next(false);
      }
    );
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


  }

  
  onVendorInput(data: any) {
    if (this.vendorInput === '' || this.vendorInput === undefined) {
      this.listVendor = this.listsDropDown?.vendorDropDown;
    } else {
      this.listVendor = this.listsDropDown?.vendorDropDown.filter((i: any) => i.name.toLowerCase().includes(this.vendorInput.toLowerCase() ));
    }
  }
  
  onVendorSelection(data: any) {
    this.form.controls["vendorCode"].setValue(null)
    this.form.controls["materialCode"].setValue(null)
    this.selectedVendor = ''
    this.selected  = []
    this.selectedVendor = this.onDropDownSelectionSetData(this.listsDropDown.vendorDropDown,data.option.value);
    this.averageForm.controls['vendorCode'].setValue(this.onDropDownSelectionSetData(this.listsDropDown.vendorDropDown,"ALL"));
      this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.getMaterialDropDown,
      {
        startDate:this.form.controls["startDate"].value,
        endDate:this.form.controls["endDate"].value,
        tenantId:this.currentUser.tenantID,
        plantCode:this.selectedPlants,
        commodity:this.selectedCommodity,
        vendorCode:this.selectedVendor
      }).subscribe((res:any)=>{
        this._apiService.isCompareLoader$.next(false)
        this.listMaterial = res.data
        this.materialDropDown = res.data
        this.averageForm.controls['materialCode'].setValue(this.onDropDownSelectionSetData(this.listMaterial,"ALL"));
        this.averageForm.controls['startDate'].setValue(this._apiService.setFormControlDate(this.form, 'startDate'))
        this.averageForm.controls['endDate'].setValue(this._apiService.setFormControlDate(this.form, 'endDate'))
        this.materialAverageExecutiveDataEmitter.emit(this.averageForm.value)
        },(e:any)=>{
        this._apiService.isCompareLoader$.next(false)
      })
  }


  
  onMaterialInput(data: any) {
    if (this.materialInput === '' || this.materialInput === undefined) {
      this.listMaterial = this.materialDropDown;
    } else {
      this.listMaterial = this.materialDropDown.filter((i: any) => i.name.toLowerCase().includes(this.materialInput.toLowerCase()) || i.id.includes(this.materialInput));
    }
  }


    onMaterialSelection(data: any) {
    this.selectedMaterial = ''
    this.selected  = []
    // this.selectedMaterial = this.onDropDownSelectionSetData(this.listsDropDown.materialDropDown,data.option.value);
    this.selectedMaterial = data.option.value
    this.averageForm.controls['materialCode'].setValue("ALL");
    
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
      this._notificationService.push("Can not Select All after selecting any of the material",2)
      return
    }
    
    
    if (this.selected.some((i: any) => i.id == "ALL")) {
      this._notificationService.push("Can not select any other material now", 2)
      return
    }

    var alreadyExist = this.selected.find((i: any) => i.id == event.option.value)
    if (alreadyExist) {
      this._notificationService.push("material already selected", 2)
      return
    } else if (this.selected.length > 4) {
      this._notificationService.push("can not insert more then 5 material", 2)
      return
    }
    // if(event.option.value == "ALL") 
    this.selected.push(this.materialDropDown.filter((i: any) => i.id == event.option.value)[0]);


    this.fruitInput.nativeElement.value = '';
    this.listMaterial = this.materialDropDown;
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.selected.push(this.listMaterial.filter((i: any) => i.materialName.toLowerCase() == value.trim().toLowerCase())[0]);
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
    this.form.controls["materialCode"].setValue(null)
    this.selectedPlants=''
    this.selectedCommodity= ''
    this.selectedVendor= ''
    this.selectedMaterial = ''
    
    this.selected = []
    
    this.plantInput = ''
    this.commodityInput = ''
    this.vendorInput = ''
    this.plantInput = ''
    this.materialInput = ''
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
      this.previousDataEmitter.emit(res.previousDate);
      this.listPlant = res.data
      this.listsDropDown.plantDropDown = res.data
      this._notificationService.push(res.message, 1)
    }, (e: any) => {
      this._apiService.isCompareLoader$.next(false)

    })

  }

}
