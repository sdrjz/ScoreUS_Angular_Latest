import { ChangeDetectorRef, Component, Inject, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { api } from 'src/app/api.endpoints';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-targetpopup',
  templateUrl: './targetpopup.component.html',
  styleUrls: ['./targetpopup.component.css']
})
export class TargetpopupComponent implements OnInit {
  rawData: any = {}
  plantInput: string = ''
  commodityInput: string = ''
  vendorInput: string = ''
  buyerInput: string = ''
  materialInput: string = ''
  loggedInUser
  listPlant: any[] = []
  replicaListPlant: any[] = []

  listCommodity: any[] = []
  replicaListCommodity: any[] = []

  listVendor: any[] = []
  replicaListVendor: any[] = []

  listBuyer: any[] = []
  replicaListBuyer: any[] = []

  listMaterial: any[] = []
  replicaListMaterial: any[] = []

  form: FormGroup = new FormGroup({});
  heading: any
  constructor(
    @Inject(MAT_DIALOG_DATA) public injectedData: any,
    public dialogRef: MatDialogRef<TargetpopupComponent>,
    public _apiService: GeneralApiService,
    private _notificationService: NotificationService,
    private translateService : TranslateService,
    private cdr : ChangeDetectorRef

  ) {
    this.setFormData(injectedData);
    this.heading = injectedData?.heading;
    this.rawData = injectedData.data;
  }


  ngOnInit(): void {
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }


  setFormData(injectedData: any) {
    var user = localStorage.getItem('userData')
    if (user)
      this.loggedInUser = JSON.parse(localStorage.getItem("userData"))

    switch (injectedData?.heading) {
      case 'Vendor Target':
        this.form = new FormGroup({
          id: new FormControl(injectedData?.data?.id, Validators.required),
          vendorCode: new FormControl(injectedData?.data?.vendorCode, Validators.required),
          vendorName: new FormControl(injectedData?.data?.vendorName, Validators.required),
          tenantId: new FormControl(injectedData?.data?.tenantID, Validators.required),
          otD_percentage: new FormControl(injectedData?.data?.otD_percentage * 100, Validators.required),
          ncR_percentage: new FormControl(injectedData?.data?.ncR_percentage * 100, Validators.required),
          ltA_percentage: new FormControl(injectedData?.data?.ltA_percentage * 100, Validators.required),
          pV_percentage: new FormControl(injectedData?.data?.pV_percentage * 100, Validators.required),
          createdAt: new FormControl(new Date().toString()),
          createdBy: new FormControl(injectedData?.data?.createdBy, Validators.required),
          updatedBy: new FormControl(this.loggedInUser.userID, Validators.required),
          updatedAt: new FormControl(),
        })
        // this.form.controls['vendorName'].disable();
        break;
      case 'Buyer Target':
        this.form = new FormGroup({
          id: new FormControl(injectedData?.data?.id, Validators.required),
          buyerCode: new FormControl(injectedData?.data?.buyerCode, Validators.required),
          buyerName: new FormControl(injectedData?.data?.buyerName, Validators.required),
          plantCode: new FormControl(injectedData?.data?.plantCode, Validators.required),
          tenantId: new FormControl(injectedData?.data?.tenantID, Validators.required),
          otD_percentage: new FormControl(injectedData?.data?.otD_percentage * 100, Validators.required),
          ncR_percentage: new FormControl(injectedData?.data?.ncR_percentage * 100, Validators.required),
          ltA_percentage: new FormControl(injectedData?.data?.ltA_percentage * 100, Validators.required),
          pV_percentage: new FormControl(injectedData?.data?.pV_percentage * 100, Validators.required),
          createdAt: new FormControl(new Date().toString(), Validators.required),
          createdBy: new FormControl(injectedData?.data?.createdBy, Validators.required),
          updatedBy: new FormControl(this.loggedInUser?.userID, Validators.required),
          updatedAt: new FormControl(''),
        })
        // this.form.controls['plantCode'].disable();
        // this.form.controls['buyerName'].disable();
        break;
      case 'Material Target':
        this.form = new FormGroup({
          id: new FormControl(injectedData?.data?.id, Validators.required),
          material: new FormControl(injectedData?.data?.material, Validators.required),
          materialDescription: new FormControl(injectedData?.data?.materialDescription, Validators.required),
          plantCode: new FormControl(injectedData?.data?.plantCode, Validators.required),
          tenantId: new FormControl(injectedData?.data?.tenantID, Validators.required),
          otD_percentage: new FormControl(injectedData?.data?.otD_percentage * 100, Validators.required),
          ncR_percentage: new FormControl(injectedData?.data?.ncR_percentage * 100, Validators.required),
          ltA_percentage: new FormControl(injectedData?.data?.ltA_percentage * 100, Validators.required),
          pV_percentage: new FormControl(injectedData?.data?.pV_percentage * 100, Validators.required),
          createdAt: new FormControl(new Date().toString()),
          createdBy: new FormControl(injectedData?.data?.createdBy, Validators.required),
          updatedBy: new FormControl(this.loggedInUser?.userID, Validators.required),
          updatedAt: new FormControl(''),
        })
        // this.form.controls['plantCode'].disable();
        // this.form.controls['materialDescription'].disable();
        break;
      case 'Plant Target':
        this.form = new FormGroup({
          id: new FormControl(injectedData?.data?.id, Validators.required),
          plantCode: new FormControl(injectedData?.data?.plantCode, Validators.required),
          plantName: new FormControl(injectedData?.data?.plantName, Validators.required),
          tenantId: new FormControl(injectedData?.data?.tenantID, Validators.required),
          otD_percentage: new FormControl(injectedData?.data?.otD_percentage * 100, Validators.required),
          ncR_percentage: new FormControl(injectedData?.data?.ncR_percentage * 100, Validators.required),
          ltA_percentage: new FormControl(injectedData?.data?.ltA_percentage * 100, Validators.required),
          pV_percentage: new FormControl(injectedData?.data?.pV_percentage * 100, Validators.required),
          createdAt: new FormControl('', Validators.required),
          createdBy: new FormControl(injectedData?.data?.createdBy, Validators.required),
          updatedBy: new FormControl(this.loggedInUser.userID, Validators.required),
          updatedAt: new FormControl(''),
        })
        // this.form.controls['plantName'].disable();
        break;
      case 'Commodity Target':
        this.form = new FormGroup({
          id: new FormControl(injectedData?.data?.id, Validators.required),
          plantCode: new FormControl(injectedData?.data?.plantCode, Validators.required),
          commodity: new FormControl(injectedData?.data?.commodity, Validators.required),
          tenantId: new FormControl(injectedData?.data?.tenantID, Validators.required),
          otD_percentage: new FormControl(injectedData?.data?.otD_percentage * 100, Validators.required),
          ncR_percentage: new FormControl(injectedData?.data?.ncR_percentage * 100, Validators.required),
          ltA_percentage: new FormControl(injectedData?.data?.ltA_percentage * 100, Validators.required),
          pV_percentage: new FormControl(injectedData?.data?.pV_percentage * 100, Validators.required),
          createdAt: new FormControl(injectedData?.data?.createdAt, Validators.required),
          createdBy: new FormControl(injectedData?.data?.createdBy, Validators.required),
          updatedBy: new FormControl(this.loggedInUser.userID, Validators.required),
          updatedAt: new FormControl(''),
        })
        // this.form.controls['plantCode'].disable()
        // this.form.controls['commodity'].disable()
        break;
      case 'PoHistory':
        this.form = new FormGroup({
          id: new FormControl(injectedData.data.id, [Validators.required]),
          plantCode: new FormControl(injectedData.data.plantCode, [Validators.required]),
          commodity: new FormControl(injectedData.data.commodity, [Validators.required]),
          vendorCode: new FormControl(injectedData.data.vendorCode, [Validators.required]),
          vendorName: new FormControl(injectedData.data.vendorName, [Validators.required]),
          buyerCode: new FormControl(injectedData.data.buyerCode, [Validators.required]),
          partNo: new FormControl(injectedData.data.partNo, [Validators.required]),
          partDescription: new FormControl(injectedData.data.partDescription, [Validators.required]),
          po: new FormControl(injectedData.data.po, [Validators.required]),
          unitPrice: new FormControl(injectedData.data.unitPrice, [Validators.required]),
          pO_LineNo: new FormControl(injectedData.data.pO_LineNo, [Validators.required]),
          orderUnit: new FormControl(injectedData.data.orderUnit, [Validators.required]),
          leadTime: new FormControl(injectedData.data.leadTime, [Validators.required]),
          pO_Frist_Delivery_Date: new FormControl(new Date(injectedData.data.pO_Frist_Delivery_Date), [Validators.required]),
          pO_Issue_Date: new FormControl(new Date(injectedData.data.pO_Issue_Date), [Validators.required]),
          pO_Post_Rec_Date: new FormControl(new Date(injectedData.data.pO_Post_Rec_Date), [Validators.required]),
          currency: new FormControl(injectedData.data.currency, [Validators.required]),
          qty: new FormControl(injectedData.data.qty, [Validators.required]),
        })
        this.commodityInput = injectedData.data.commodity
        break;
      case 'Open Order Report':
        this.form = new FormGroup({
          id: new FormControl(injectedData.data.id, [Validators.required]),
          poNumber: new FormControl(injectedData.data.poNumber, [Validators.required]),
          line: new FormControl(injectedData.data.line, [Validators.required]),
          vendor: new FormControl(injectedData.data.vendor, [Validators.required]),
          vendorName: new FormControl(injectedData.data.vendorName, [Validators.required]),
          poIssueDate: new FormControl(new Date(injectedData.data.poIssueDate), [Validators.required]),
          materialDescription: new FormControl(injectedData.data.materialDescription, [Validators.required]),
          orderQuantity: new FormControl(injectedData.data.orderQuantity, [Validators.required]),
          deliveredQty: new FormControl(injectedData.data.deliveredQty, [Validators.required]),
          unitPrice: new FormControl(injectedData.data.unitPrice, [Validators.required]),
          dueDate: new FormControl(new Date(injectedData.data.dueDate), [Validators.required]),
          firstPromisedDate: new FormControl(new Date(injectedData.data.firstPromisedDate), [Validators.required]),
          currency: new FormControl(injectedData.data.currency, [Validators.required]),
          orderUnit: new FormControl(injectedData.data.orderUnit, [Validators.required]),
          buyerCode: new FormControl(injectedData.data.buyerCode, [Validators.required]),
          plant: new FormControl(injectedData.data.plant, [Validators.required]),
          acknowledgementdate: new FormControl(new Date(injectedData.data.acknowledgementdate), [Validators.required]),
          leadtime: new FormControl(injectedData.data.leadtime, [Validators.required]),
         // leadtime: new FormControl(parseInt(injectedData.data.leadtime, 10), [Validators.required]),
          material: new FormControl(injectedData.data.material, [Validators.required]),
        })  
        this.commodityInput = injectedData.data.commodity
        console.log('Leadtime value:', injectedData.data.leadtime, typeof(injectedData.data.leadtime));
        
        break;
      case 'Non conformance report':
        this.form = new FormGroup({
          id: new FormControl(injectedData.data.id, [Validators.required]),
          plantCode: new FormControl(injectedData.data.plantCode, [Validators.required]),
          vendorCode: new FormControl(injectedData.data.vendorCode, [Validators.required]),
          vendorName: new FormControl(injectedData.data.vendorName, [Validators.required]),
          buyerCode: new FormControl(injectedData.data.buyerCode, [Validators.required]),
          partNo: new FormControl(injectedData.data.partno, [Validators.required]),
          part_Description: new FormControl(injectedData.data.part_Description, [Validators.required]),
          pO_Orderno: new FormControl(injectedData.data.pO_Orderno, [Validators.required]),
          pO_lineno: new FormControl(injectedData.data.pO_lineno, [Validators.required]),
          order_Unit: new FormControl(injectedData.data.order_Unit, [Validators.required]),
          ncR_Date: new FormControl(new Date(injectedData.data.ncR_Date), [Validators.required]),
          completionDate: new FormControl(new Date(injectedData.data.completionDate), [Validators.required]),
          complaint_Qty: new FormControl(injectedData.data.complaint_Qty, [Validators.required]),
        })
        this.commodityInput = injectedData.data.commodity
        break;
      case 'Buyer data':
        this.form = new FormGroup({
          id: new FormControl(injectedData.data.id, [Validators.required]),
          plantCode: new FormControl(injectedData.data.plantCode, [Validators.required]),
          buyerCode: new FormControl(injectedData.data.buyerCode, [Validators.required]),
          buyerName: new FormControl(injectedData.data.buyerName, [Validators.required]),
          email: new FormControl(injectedData.data.email, [Validators.required]),
        })
        break;
      case 'Plant data':
        this.form = new FormGroup({
          id: new FormControl(injectedData.data.id, [Validators.required]),
          plantCode: new FormControl(injectedData.data.plantCode, [Validators.required]),
          plantName: new FormControl(injectedData.data.plantName, [Validators.required]),
          repEmail: new FormControl(injectedData.data.repEmail, [Validators.required]),
          contactName: new FormControl(injectedData.data.contactName, [Validators.required]),
        })
        break;
      case 'Commodity data':
        this.form = new FormGroup({
          id: new FormControl(injectedData.data.id, [Validators.required]),
          plantCode: new FormControl(injectedData.data.plantCode, [Validators.required]),
          // plantName: new FormControl(injectedData.data.plantName, [Validators.required]),
          plantName: new FormControl(injectedData.data.plantName),
          vendorCode: new FormControl(injectedData.data.vendorCode, [Validators.required]),
          vendorName: new FormControl(injectedData.data.vendorName, [Validators.required]),
          commodity: new FormControl(injectedData.data.commodity, [Validators.required]),
          email: new FormControl(injectedData.data.email, [Validators.required]),
          contactName: new FormControl(injectedData.data.contactName, [Validators.required]),
          country: new FormControl(injectedData.data.country, [Validators.required]),
          city: new FormControl(injectedData.data.city, [Validators.required]),
          zipCode: new FormControl(injectedData.data.zipCode, [Validators.required]),
          // phoneNo: new FormControl(injectedData.data.phoneNo, [Validators.required]),
          phoneNo: new FormControl(injectedData.data.phoneNo),
          address: new FormControl(injectedData.data.address, [Validators.required]),
        })
        break;
        
      default:
        break;
    }


    if (injectedData?.heading.includes('Target'))
      return
  
    //   this._apiService.isCompareLoader$.next(true);
    // this._apiService.post(api.getPlantDropDown, {
    //   tenantId: this.loggedInUser.tenantID
    // })
    //   .subscribe((res: any) => {
    //     this._apiService.isCompareLoader$.next(false)
    //     res?.data.forEach((element: any) => {
    //       if (element.id !== 'ALL')
    //         this.listPlant.push(element)
    //     });
    //     this.replicaListPlant = this.listPlant

    //     this.plantInput = this.replicaListPlant.filter((i: any) => i.id == injectedData.data.plantCode)[0]?.name
    //     this.onPlantSelection(injectedData.data.plantCode)

    //     // let plantCode:string  = ''
    //     // res.data.forEach((element:any) => {


    //     //   // if(element.id !== 'ALL')
    //     //   // plantCode += element.id+','
    //     // });
    //     // plantCode =  plantCode.slice(0, plantCode.length - 1);
    //     // this._apiService.post(api.getCommodityDropDown,)


    //   }, (e: any) => this._apiService.isCompareLoader$.next(false))


  }



  onCommodityInput() {
    if (this.commodityInput === '' || this.commodityInput === null || this.commodityInput === undefined) {
      this.listCommodity = this.replicaListCommodity
    } else {
      this.listCommodity = this.replicaListCommodity.filter((i: any) => i.name.includes(this.commodityInput))
    }
  }


  onCommoditySelection(data: any) {
    if(data === null || data === undefined)
      return

    var selectedCommodity = ''
    if (data.hasOwnProperty('option')) {
      selectedCommodity = this.replicaListCommodity.filter((i: any) => i.name === data.option.value)[0]?.name
      this.form.controls['commodity'].setValue(selectedCommodity)
    }
    else {
      if (this.form.get('commodity'))
        this.form.controls['commodity'].setValue(data)
    }

    let apiData: any = {}

    if (this.form.get('commodity'))
      apiData = {
        plantCode: this.form.controls['plantCode'].value,
        tenantId: this.loggedInUser.tenantID,
        commodity: this.form.controls['commodity'].value
      }
    else
      apiData = {
        plantCode: this.form.controls['plantCode'].value,
        tenantId: this.loggedInUser.tenantID,
      }

    this.listCommodity = this.replicaListCommodity
    this._apiService.isCompareLoader$.next(true);


    Promise.all([
      // this._apiService.post(api.getBuyerDropDown, apiData).toPromise(),
      // this._apiService.post(api.getVendorDropDown, apiData).toPromise(),

    ]).then((res: any) => {
      this.listBuyer = this.replicaListBuyer = []
      this.listVendor = this.replicaListVendor = []
      this._apiService.isCompareLoader$.next(false)
      res[0]?.data.forEach((element: any) => {
        if (element.id !== 'ALL')
          this.listBuyer.push(element)
      });
      
      this.replicaListBuyer = this.listBuyer
      if(this.form.get('buyerCode'))
      this.buyerInput = this.listBuyer?.filter((i: any) => i.id == this.rawData?.buyerCode)[0].name

      res[1]?.data.forEach((element: any) => {
        if (element.id !== 'ALL')
          this.listVendor.push(element)
      });
      this.replicaListVendor = this.listVendor
      this.onVendorSelection(this.rawData.vendorCode)
      this.onBuyerSelection(this.rawData.buyerCode)
    })

    //  this._apiService.post(api.getBuyerDropDown,{
    //     plantCode:this.form.controls['plantCode'].value,
    //     tenantId : this.loggedInUser.tenantID,
    //     commodity :  this.form.controls['commodity'].value
    //   }).subscribe((res:any)=>{
    //     res?.data.forEach((element:any) => {
    //       if(element.id !== 'ALL')
    //       this.listBuyer.push(element)
    //      });
    //      this.replicaListBuyer = this.listBuyer
    //   });

  }



  onPlantInput() {
    if (this.plantInput === '' || this.plantInput === null || this.plantInput === undefined) {
      // this.form.controls['plantCode'].setValue('')
      // if(this.form.get('plantName'))
      // this.form.controls['plantName'].setValue('')
      this.listPlant = this.replicaListPlant
    } else {
      this.listPlant = this.replicaListPlant.filter((i: any) => i.name.includes(this.plantInput))
    }
  }


  

  onPlantSelection(data: any) {
    if (data === undefined || data === null)
      return
    var selectedPlant: any = {}
    if (data.hasOwnProperty('option')) {
      selectedPlant = this.replicaListPlant.filter((i: any) => i.name === data.option.value)[0]
      this.form.controls['plantCode'].setValue(selectedPlant.id)
      // if(this.form.get('plantName'))
      // this.form.controls['plantName'].setValue(selectedPlant.name)
    } else {
      selectedPlant = this.replicaListPlant.filter((i: any) => i.id === data)[0]
      this.form.controls['plantCode'].setValue(selectedPlant.id)
    }

    if (this.form.get('plantName'))
      this.form.controls['plantName'].setValue(selectedPlant.name)
    this.listPlant = this.replicaListPlant

    // if(this.heading !== 'Plant data')
    // this._apiService.post(api.getCommodityDropDown, {
    //   plantCode: this.form.controls['plantCode'].value,
    //   tenantId: this.loggedInUser.tenantID
    // }).subscribe((res: any) => {
    //   this.listCommodity = this.replicaListCommodity = []
    //   res?.data.forEach((element: any) => {
    //     if (element.id !== 'ALL')
    //       this.listCommodity.push(element)
    //   });
    //   this.replicaListCommodity = this.listCommodity
    //   this.commodityInput = this.rawData.commodity ? this.rawData.commodity : ''
    //   this.onCommoditySelection(this.commodityInput)

    // });

  }




  onVendorInput() {
    if (this.vendorInput === '' || this.vendorInput === null || this.vendorInput === undefined) {
      this.form.controls['vendorCode'].setValue('')
      this.form.controls['vendorName'].setValue('')
      this.listVendor = this.replicaListVendor
    } else {
      this.listVendor = this.replicaListVendor.filter((i: any) => i.name.includes(this.vendorInput))
    }
  }


  onVendorSelection(data: any) {
    if (data === null || data === undefined)
      return

    if (this.form.get('partNo'))
      this.form.controls['partNo'].setValue(null)

    this.materialInput = ''
    var selectedVendor: any = {}
    if (data.hasOwnProperty('option')) {
      selectedVendor = this.replicaListVendor.filter((i: any) => i.name === data?.option?.value)[0]
      if (this.form.get('vendorCode'))
        this.form.controls['vendorCode'].setValue(selectedVendor.id)
    } else {
      selectedVendor = this.replicaListVendor.filter((i: any) => i.id === data)[0]
      if (this.form.get('vendorCode'))
        this.form.controls['vendorCode'].setValue(this.rawData.vendorCode)

    }
    this.vendorInput = selectedVendor?.name ? selectedVendor.name : ''
    //  this.form.controls['plantName'].setValue(selectedPlant.name) 
    this.listVendor = this.replicaListVendor

    if (!this.form.get('partNo'))
      return

    let apiData: any = {}
    if (this.form.get('commodity'))
      apiData = {
        plantCode: this.form.controls['plantCode'].value,
        commodity: this.form.controls['commodity'].value,
        vendorCode: this.form.controls['vendorCode'].value,
        tenantId: this.loggedInUser.tenantID
      }
    else
      apiData = {
        plantCode: this.form.controls['plantCode'].value,
        vendorCode: this.form.controls['vendorCode'].value,
        tenantId: this.loggedInUser.tenantID
      }

    // this._apiService.post(api.getMaterialDropDown,
    //   apiData).subscribe((res: any) => {
    //     this.listMaterial = this.replicaListMaterial = []
    //     res?.data.forEach((element: any) => {
    //       if (element.id !== 'ALL')
    //         this.listMaterial.push(element)
    //     });
    //     this.replicaListMaterial = this.listMaterial
    //     var partNo = this.rawData.partNo ? this.rawData.partNo : this.rawData.partno ? this.rawData.partno : ''
    //     this.onMaterialSelection(partNo)
    //   });

  }

  onMaterialInput() {
    if (this.materialInput === '' || this.materialInput === null || this.materialInput === undefined) {
      this.form.controls['partDescription'].setValue('')
      this.form.controls['partNo'].setValue('')
      this.listMaterial = this.replicaListMaterial
    } else {
      this.listMaterial = this.replicaListMaterial.filter((i: any) => i.name.includes(this.materialInput))
    }

  }


  onMaterialSelection(data: any) {
    if (data === undefined || data === null)
      return

    if (data.hasOwnProperty('option')) {
      var selectedMaterial = this.replicaListMaterial.filter((i: any) => i.name === data.option.value)[0]
      this.form.controls['partNo'].setValue(selectedMaterial.id)
      if (this.form.get('partDescription'))
        this.form.controls['partDescription'].setValue(selectedMaterial.name)

      if (this.form.get('part_Description'))
        this.form.controls['part_Description'].setValue(selectedMaterial.name)

    }
    else {
      var selectedMaterial = this.replicaListMaterial.filter((i: any) => i.id === data)[0]
      this.form.controls['partNo'].setValue(selectedMaterial.id)
      if (this.form.get('partDescription'))
        this.form.controls['partDescription'].setValue(selectedMaterial.name)

      if (this.form.get('part_Description'))
        this.form.controls['part_Description'].setValue(selectedMaterial.name)

    }
    this.materialInput = selectedMaterial.name
  }


  onBuyerInput() {
    if (this.buyerInput === '' || this.buyerInput === null || this.buyerInput === undefined) {
      this.listBuyer = this.replicaListBuyer
    } else {
      this.listBuyer = this.replicaListBuyer.filter((i: any) => i.name.includes(this.buyerInput))
    }
  }


  onBuyerSelection(data: any) {
    if (data === null || data === undefined)
      return

    var selectedBuyer: any = {}
    if (data.hasOwnProperty('option')) {
      selectedBuyer = this.replicaListBuyer.filter((i: any) => i.name === data.option.value)[0]
      this.form.controls['buyerCode'].setValue(selectedBuyer.id)
      if (this.form.get('buyerName'))
        this.form.controls['buyerName'].setValue(selectedBuyer.name)

    }
    else {
      selectedBuyer = this.replicaListBuyer.filter((i: any) => i.id === data)[0]
      this.form.controls['buyerCode'].setValue(selectedBuyer.id)
      if (this.form.get('buyerName'))
        this.form.controls['buyerName'].setValue(selectedBuyer.name)
    }
    this.listBuyer = this.replicaListBuyer
    this.buyerInput = selectedBuyer.name

  }




  onCancelClick() {
    this.dialogRef.close(null)
  }

  submitForm() {

    if (this.form.invalid) {
      this._notificationService.push("Invalid data", 2)
      return;
    }

    if (this.form.controls['plantCode']) {
      this.form.controls['plantCode'].enable()
     // this.form.controls['plantCode'].setValue(this.injectedData?.data?.plantCode)
    }

    if (this.form.controls['commodity']) {
      this.form.controls['commodity'].enable()
     // this.form.controls['commodity'].setValue(this.injectedData?.data?.commodity)
    }

    if (this.form.controls['materialDescription'])
      this.form.controls['materialDescription'].enable();

    if (this.form.controls['buyerNames'])
      this.form.controls['buyerNames'].enable();


    this.form.controls['otD_percentage'].setValue(this.form.controls['otD_percentage'].value / 100)
    this.form.controls['ncR_percentage'].setValue(this.form.controls['ncR_percentage'].value / 100)
    this.form.controls['ltA_percentage'].setValue(this.form.controls['ltA_percentage'].value / 100)
    this.form.controls['pV_percentage'].setValue(this.form.controls['pV_percentage'].value / 100)
    this.form.controls['createdAt'].setValue(new Date(this.form.controls['createdAt'].value))
    this.dialogRef.close(this.form.value)
  }




  submitRawDataForm() {
    if (this.form.invalid) {
      this._notificationService.push("Invalid data", 2)
      return
    }

    if (this.form.get("qty"))
      this.form.controls["qty"].setValue(+(this.form.controls["qty"].value))

    if (this.form.get("unitPrice"))
      this.form.controls["unitPrice"].setValue(+(this.form.controls["unitPrice"].value))

    if (this.form.get("leadTime"))
      this.form.controls["leadTime"].setValue(+(this.form.controls["leadTime"].value))

    if (this.form.get("leadtime"))
      this.form.controls["leadtime"].setValue(+(this.form.controls["leadtime"].value))

    if (this.form.get("deliveredQty"))
      this.form.controls["deliveredQty"].setValue(+(this.form.controls["deliveredQty"].value))
    
    if (this.form.get("orderQuantity"))
      this.form.controls["orderQuantity"].setValue(+(this.form.controls["orderQuantity"].value))
    
    this.dialogRef.close(this.form.value)
    console.log('value', this.form.controls["leadtime"].setValue(+(this.form.controls["leadtime"].value)))
  }
}

