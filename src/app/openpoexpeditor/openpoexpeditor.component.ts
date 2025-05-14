import { Component, OnInit, Input, Inject, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { VendortotalCoregraphDialogComponent } from '../general/vendortotal-coregraph-dialog/vendortotal-coregraph-dialog.component';
import { api } from '../api.endpoints';
import { GeneralApiService } from '../services/appService/generalApiService';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { OpenpoexpeditorEmailTemplateComponent } from './openpoexpeditor-email-template/openpoexpeditor-email-template.component';
import { BarComponent } from '../charts/apex/bar/bar.component';
import { NotificationService } from '../notification.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PopupchartComponent } from '../general/popupchart/popupchart.component';
import { SendreportdialogComponent } from '../general/sendreportdialog/sendreportdialog.component';
import { poEmailService } from 'src/app/services/appService/poEmailService';
import { UserdialogoutComponent } from '../general/userdialogout/userdialogout.component';

// ../sendreportdialog/sendreportdialog.component
@Component({
    selector: 'app-openpoexpeditor',
    templateUrl: './openpoexpeditor.component.html',
    styleUrls: ['./openpoexpeditor.component.css']
})
export class OpenpoexpeditorComponent implements OnInit {
    url: string = api.poOpenExpeditor;
    public listSelectedCommodity: string[] = [];
    OpenOrderReportDropDowns:any = {};
    allPlantBVMlists:any = {};
    plantBVMSelectboxLists:any = {};
    byPlantChart :any | null
    loggedInUser : any;
    records : any = {};
    defaultSetting : any = {};
    listAllCommodity :any[] = [];
    @Input() public apiRequestData: any = {}
    
    @ViewChild('vendorInputEle') vendorInputEle: ElementRef;

    comparisonLeft = "All % By All And All Plant";
    comparisonRight = "All % by All Plant";

    chart1Heading = "Current Open PO Status By All Plant"
    chart2Heading = "Current Open PO Status By All in All Plant"
    totalRecords: any;
    allSpend:any;
    openPOUpToDate:any;
    public vendorInput: string = ""
    comparisons: any = {
        comparison_Left:[],
        comparison_right:[]
    };
    separatorKeysCodes: number[] = [ENTER, COMMA];
    selectedBuyer:any
    filters:any={
        tenantId:'',
        OnTimeDeliveryOption:'allopenorder',
        bufferDays:50,
        selfdefinedfuturedays:14,
        plantCode:"all",
        byBuyerOrSupplierOption:"Buyer",
        byBuyerOrSupplier:"all",
        PageIndex:1,
        PageSize:100000,
        searchText:'',
        forVendorEmails: [],
        sendEmailFor:'displayFirst',
        sendEmailTo:'',
        vendorCode : "N/A"
    }
    allPlants: any = [];
    columns:any[] | null = [];
    public showTable = false;
    listVendors:any[]=[]
    vendorDropdown:any[]=[]
    selected = [];
    bvmoptions: string[] = ['Buyer', 'Vendor', 'Material Number'];
    listFilters : any[] = [
        {
            option:"All Open Order",
            value:"allopenorder"
        },
        {
            option:"Ack Needed Orders",
            value:"ackneededorders"
        },
        {
            option:"Past Due Orders",
            value:"pastdueorders"
        },
        {
            option:"Future Past Due Orders",
            value:"futurepastdueorders"
        },
        {
            option:"Lead Time Check Report",
            value:"leadtimecheckorders"
        }
    ]

    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    public listCheckedRecords: any[] = [];
    public listCheckedRecordsForEmail: any[] = [];
    // public dialog:MatDialog
    constructor(
        private readonly dialog: MatDialog,
        private _apiService: GeneralApiService,
        private _notificationService:NotificationService,
        private cdr : ChangeDetectorRef,
        private _emailService : poEmailService,

    ) { }
        
    ngOnInit(): void {
     

            this.dropdownSettings = {
                singleSelection: false,
                idField: 'item_id',
                textField: 'item_text',
                enableCheckAll: true,
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                allowSearchFilter: true,
                limitSelection: -1,
                clearSearchFilter: true,
                maxHeight: 197,
                itemsShowLimit: 3,
                searchPlaceholderText: 'Search',
                noDataAvailablePlaceholderText: 'No data available',
                closeDropDownOnSelection: false,
                showSelectedItemsAtTop: false,
                defaultOpen: false,
            };

        var user = localStorage.getItem("userData")
        if(user)
            this.loggedInUser = JSON.parse(user)
            this.filters.tenantId = this.loggedInUser.tenantID;
            this.filters.vendorCode = this.loggedInUser.vendorCode == null ? 'N/A' : this.loggedInUser.vendorCode; 
            this.GetOpenOrderReportDropDown();
            this.changePlanCode();
            this.callSettings();
            if(this.loggedInUser.vendorCode === null){
                this.bvmoptions = ['Buyer', 'Vendor', 'Material Number'];
            }else {
                this.filters.sendEmailTo = "Buyer";
                this.filters.vendorCode     =   this.loggedInUser.vendorCode == null ? 'N/A' : this.loggedInUser.vendorCode;
                this.bvmoptions = ['Buyer', 'Material Number'];
            }
            this.cdr.detectChanges();
    }

    GetOpenOrderReportDropDown(){
        this._apiService.isCompareLoader$.next(true)
        this._apiService.get(`${api.OpenOrderReportDropDown}?tenantId=${this.loggedInUser.tenantID}`)
        .subscribe((res:any)=>{
            this._apiService.isCompareLoader$.next(false)
            this.OpenOrderReportDropDowns = res.data
            
        },
        (error:any)=>{
            this._apiService.isCompareLoader$.next(false)
        })
    }

    changePlanCode() {
        this._apiService.isCompareLoader$.next(true)
        this._apiService.get(`${api.GetPlantFilter}?tenantId=${this.loggedInUser.tenantID}&plantCode=${this.filters.plantCode}&vendorCode=${this.filters.vendorCode}`)
        .subscribe((res:any)=>{
            this._apiService.isCompareLoader$.next(false)
            this.listCheckedRecords = [];
            this.listCheckedRecordsForEmail = [];

            this.allPlantBVMlists = res.data
            this.listPlantBVM();
        },
        (error:any)=>{
            this._apiService.isCompareLoader$.next(false)
        })
    }

    listPlantBVM(event?: any){
        this.filters.byBuyerOrSupplier  = 'all';
        this.filters.byBuyerOrSupplierOption  = 'Buyer';
        const checkedValue = event?event.value:'Buyer';
        if(checkedValue == "Buyer") {
            this.plantBVMSelectboxLists = this.allPlantBVMlists.buyers;
        } else if(checkedValue == "Vendor"){
            this.plantBVMSelectboxLists = this.allPlantBVMlists.vendors;
        } else if(checkedValue == "Material Number"){
            this.plantBVMSelectboxLists = this.allPlantBVMlists.materials;
        }
        // alert(this.listCheckedRecords.length);
        // alert(this.records.length);
        // if(this.listCheckedRecords.length > 0 && (this.listCheckedRecords.length == this.records.length)){
        //     $("#mat-checkbox-1-input").click();
        // }
        
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
        const input = checkbox as HTMLInputElement; // Cast to HTMLInputElement
            if(input.checked)
            {
                input.click();
            }
        });

        this.listCheckedRecords = [];
        this.listCheckedRecordsForEmail = [];
    }

    callSettings(){
        this._apiService.isCompareLoader$.next(true)
        var url_query_params    =   api.ByDefaultSetting+'?tenantId='+this.filters.tenantId+'&VendorCode='+this.filters.vendorCode;
        this._apiService.get(url_query_params)
            .subscribe((res:any)=>{
                this.defaultSetting =  res.setting[0];
                this.allPlants = res.plant;
                // this.allBuyers = res.buyer;
                // this.allPlants = res.plant;
                this.filters.bufferDays = res.setting[0].bufferDays;
                this.filters.selfdefinedfuturedays = res.setting[0].selfDefinedFutureDays;
                // this.cdr.detectChanges();
                this.Search();
                // this._apiService.isCompareLoader$.next(false)
            },
            (error:any)=>{
                this._apiService.isCompareLoader$.next(false)
            })
    }


    // getDaysFromSetting() {
    //     this._apiService.isCompareLoader$.next(true)
    //     this._apiService.get(`${api.GetDaysFromSetting}?tenantId=${this.loggedInUser.tenantID}`)
    //     .subscribe((res:any)=>{
    //         this.filters.bufferDays = res.setting.bufferDays;
    //         this.filters.selfdefinedfuturedays = res.setting.selfDefinedFutureDays;
    //         this._apiService.isCompareLoader$.next(false)
    //         this.Search();
    //     },
    //     (error:any)=>{
    //         this._apiService.isCompareLoader$.next(false)
    //     })
    // }

    getCheckedDataOutput(eventData: any) {
        if (eventData) {
          this.records.forEach((element: any) => {
            if (!this.listCheckedRecords.includes(element.vendorCode)) {
              this.listCheckedRecords.push(element.vendorCode);
              this.listCheckedRecordsForEmail.push(element);
            }
          });
        } else {
          this.listCheckedRecords = [];
          this.listCheckedRecordsForEmail = [];
        }
    }

    // onCheckBoxClick(event: any, data: any) {
    //     if (event.checked == true) {
    //       if (!this.listCheckedRecords.includes(data.vendorCode))
    //         this.listCheckedRecords.push(data.vendorCode)
    //     } else {
    //       if (this.listCheckedRecords.includes(data.vendorCode))
    //         this.listCheckedRecords.splice(this.listCheckedRecords.indexOf(data.vendorCode), 1);
    //     }
    // }

    onCheckBoxClick(event: any, data: any) {
    
        if (event.checked === true) {
            // Check if the combination of vendorCode and buyerCode is already in the list
            if (!this.listCheckedRecords.some(r => r.vendorCode === data.vendorCode && r.buyerCode === data.buyerCode)) {
                this.listCheckedRecords.push(data);
                this.listCheckedRecordsForEmail.push(data);
            }
        } else {
            // Find the index of the combination of vendorCode and buyerCode
            const index = this.listCheckedRecords.findIndex(r => r.vendorCode === data.vendorCode && r.buyerCode === data.buyerCode);
            if (index > -1) {
                this.listCheckedRecords.splice(index, 1);
                this.listCheckedRecordsForEmail.splice(index, 1);
            }
        }
    }
    
    isVendorSelected(data: any) {
        return this.listCheckedRecords.includes(data?.vendorCode)
    }

    Reset(){
        this.filters = {
            tenantId:this.loggedInUser.tenantID,
            OnTimeDeliveryOption:'allopenorder',
            bufferDays: this.defaultSetting.bufferDays,
            selfdefinedfuturedays: this.defaultSetting.selfDefinedFutureDays,
            plantCode:"all",
            byBuyerOrSupplierOption:"Buyer",
            byBuyerOrSupplier:"all",
            PageIndex:1,
            PageSize:100000,
            searchText:'',
            forVendorEmails: [],
            sendEmailFor:'displayFirst',
            sendEmailTo:'',
            vendorCode : "N/A"
        }
        this.Search();
    }

    Search() {
        this.listCheckedRecords = [];
        
        this.url= api.poOpenExpeditor; 
        var url_query_params    =   this.url;
        if (this.filters !== null || this.filters !== undefined)
            url_query_params += '?';
            Object.keys(this.filters).map(key => {
                if(key == "vendorCode"){
                    url_query_params += `${key}=${this.loggedInUser.vendorCode === null ? "N/A" : this.loggedInUser.vendorCode}`; 
                }
                else 
                {
                    url_query_params += `${key}=${this.filters[key]}&`;
                }
            });
        this.showTable = false;
        this.setColumns()
        

        this._apiService.isCompareLoader$.next(true)
        this._apiService.get(url_query_params)
        .subscribe((res:any)=>{
            this._notificationService.push("data retrieved",1)
            this.records = res.data
            this.totalRecords = res.otD_OverView.allLines;
            this.allSpend = res.otD_OverView.allSpend;
            this.openPOUpToDate = res.otD_OverView.openPOUpToDate;

            let plantName = "All Plant";
            if(this.filters.plantCode !== "all") {
                let f_plant = this.OpenOrderReportDropDowns.plants.filter(plant => plant.plantCode === this.filters.plantCode);
                if(f_plant.length > 0)
                {
                    plantName = f_plant[0]?.plantName;
                }
            }
            
            let recordFor = "All";
            if(this.filters.byBuyerOrSupplier != "all"){
                let f_bvm = this.plantBVMSelectboxLists.filter(record => record.Code === this.filters.byBuyerOrSupplier);
                if(f_bvm.length > 0)
                {
                    recordFor = f_bvm[0]?.Name;
                }
            } 
            if(this.filters.byBuyerOrSupplierOption == "Material Number"){
                recordFor =  this.filters.byBuyerOrSupplier;

            } 

            this.comparisonLeft = this.filters.byBuyerOrSupplierOption+" "+recordFor+" % By "+recordFor+" "+this.filters.byBuyerOrSupplierOption+" And "+plantName;
            this.comparisonRight = this.filters.byBuyerOrSupplierOption+" "+recordFor+" % By "+plantName;
            

            //this.comparisonLeft = this.filters.byBuyerOrSupplierOption+ " " + capitalizeFirstLetter(this.filters.byBuyerOrSupplier) + " % By "+this.filters.byBuyerOrSupplierOption+ " " + capitalizeFirstLetter(this.filters.byBuyerOrSupplier) + " And "+plantName;
            // this.comparisonRight = this.filters.byBuyerOrSupplierOption+  " " + capitalizeFirstLetter(this.filters.byBuyerOrSupplier) + " % By "+plantName;


            this.chart1Heading = "Current Open PO Status By "+plantName
            this.chart2Heading = "Current Open PO Status By "+recordFor+" in "+plantName
            
            
            
            function capitalizeFirstLetter(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
              }



            this.comparisons =  {
                comparison_Left: res.comparison_Left?res.comparison_Left:[],
                comparison_right: res.comparison_Right?res.comparison_Right:[]
            };

            //  this.comparisons = {
            //     comparison_Left: Array.isArray(res.comparison_Left) ? res.comparison_Left.map(item => {
            //         return {
            //             ...item,
            //             side: (item.spend == null || item.spend === "") ? 0 : item.spend
            //         };
            //     }) : [],
                
            //     comparison_Right: Array.isArray(res.comparison_Right) ? res.comparison_Right.map(item => {
            //         return {
            //             ...item,
            //             side: (item.spend == null || item.spend === "") ? 0 : item.spend
            //         };
            //     }) : []
            // };

            //console.log(this.comparisons)
            this.showTable = true;
            this._apiService.isCompareLoader$.next(false)
            // this.listVendors = res.overView
            // this.dropdownList = this.listVendors.map(function(listVendor) {
            //     return {
            //         item_id: listVendor.vendorCode,
            //         item_text: listVendor.vendorName
            //     };
            // });

            // this.dropdownList = res.overView;
            this.cdr.detectChanges();
        },
        (error:any)=>{
            this._apiService.isCompareLoader$.next(false)
        })
    }
    
    setColumns(){
        this.columns = null;
        this.columns = []
        let filterOption = ''
        if(this.loggedInUser.vendorCode !== null){
            filterOption ="VendorRole-"+this.filters.byBuyerOrSupplierOption+"-"+this.filters.OnTimeDeliveryOption;

        }else
        {
            filterOption = this.filters.byBuyerOrSupplierOption+"-"+this.filters.OnTimeDeliveryOption;

        }
        switch(filterOption) {
            //For VendorRole
            case "VendorRole-Buyer-ackneededorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'status',
                        name: 'Status',
                        key: 'status',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'popoNumber',
                        name: 'Po Number',
                        key: 'poNumber',
                    },
                    {
                        def: 'line',
                        name: 'Lines',
                        key: 'line',
                    
                    },
                    {
                        def: 'material',
                        name: 'Material',
                        key: 'material',
                    
                    },
                    {
                        def: 'description',
                        name: 'Description',
                        key: 'description',
                    
                    },
                    {
                        def: 'orderQty',
                        name: 'Order Qty',
                        key: 'orderQty',
                    
                    },
                    {
                        def: 'openQty',
                        name: 'Open Qty',
                        key: 'openQty',
                    
                    },
                    {
                        def: 'uom',
                        name: 'UOM',
                        key: 'uom',
                    
                    },
                    {
                        def: 'createdDate',
                        name: 'Created Date',
                        key: 'createdDate',
                    
                    },
                    {
                        def: 'firstPromisedDate',
                        name: 'Promised Date',
                        key: 'firstPromisedDate',
                    
                    },
                    {
                        def: 'dueDate',
                        name: 'Due Date',
                        key: 'dueDate',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];    
       
            break;
            
            case "VendorRole-Buyer-pastdueorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'status',
                        name: 'Status',
                        key: 'status',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'popoNumber',
                        name: 'Po Number',
                        key: 'poNumber',
                    },
                    {
                        def: 'line',
                        name: 'Lines',
                        key: 'line',
                    
                    },
                    {
                        def: 'material',
                        name: 'Material',
                        key: 'material',
                    
                    },
                    {
                        def: 'description',
                        name: 'Description',
                        key: 'description',
                    
                    },
                    {
                        def: 'orderQty',
                        name: 'Order Qty',
                        key: 'orderQty',
                    
                    },
                    {
                        def: 'openQty',
                        name: 'Open Qty',
                        key: 'openQty',
                    
                    },
                    {
                        def: 'uom',
                        name: 'UOM',
                        key: 'uom',
                    
                    },
                    {
                        def: 'createdDate',
                        name: 'Created Date',
                        key: 'createdDate',
                    
                    },
                    {
                        def: 'firstPromisedDate',
                        name: 'Promised Date',
                        key: 'firstPromisedDate',
                    
                    },
                    {
                        def: 'dueDate',
                        name: 'Due Date',
                        key: 'dueDate',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];    
       
            break;
      
            case "VendorRole-Buyer-allopenorder":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'status',
                        name: 'Status',
                        key: 'status',
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'popoNumber',
                        name: 'Po Number',
                        key: 'poNumber',
                    },
                    {
                        def: 'line',
                        name: 'Lines',
                        key: 'line',
                    
                    },
                    {
                        def: 'material',
                        name: 'Material',
                        key: 'material',
                    
                    },
                    {
                        def: 'description',
                        name: 'Description',
                        key: 'description',
                    
                    },
                    {
                        def: 'orderQty',
                        name: 'Order Qty',
                        key: 'orderQty',
                    
                    },
                    {
                        def: 'openQty',
                        name: 'Open Qty',
                        key: 'openQty',
                    
                    },
                    {
                        def: 'uom',
                        name: 'UOM',
                        key: 'uom',
                    
                    },
                    {
                        def: 'createdDate',
                        name: 'Created Date',
                        key: 'createdDate',
                    
                    },
                    {
                        def: 'firstPromisedDate',
                        name: 'Promised Date',
                        key: 'firstPromisedDate',
                    
                    },
                    {
                        def: 'dueDate',
                        name: 'Due Date',
                        key: 'dueDate',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];    
       
            break;
      
            case "VendorRole-Buyer-futurepastdueorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'status',
                        name: 'Status',
                        key: 'status',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'popoNumber',
                        name: 'Po Number',
                        key: 'poNumber',
                    },
                    {
                        def: 'line',
                        name: 'Lines',
                        key: 'line',
                    
                    },
                    {
                        def: 'material',
                        name: 'Material',
                        key: 'material',
                    
                    },
                    {
                        def: 'description',
                        name: 'Description',
                        key: 'description',
                    
                    },
                    {
                        def: 'orderQty',
                        name: 'Order Qty',
                        key: 'orderQty',
                    
                    },
                    {
                        def: 'openQty',
                        name: 'Open Qty',
                        key: 'openQty',
                    
                    },
                    {
                        def: 'uom',
                        name: 'UOM',
                        key: 'uom',
                    
                    },
                    {
                        def: 'createdDate',
                        name: 'Created Date',
                        key: 'createdDate',
                    
                    },
                    {
                        def: 'firstPromisedDate',
                        name: 'Promised Date',
                        key: 'firstPromisedDate',
                    
                    },
                    {
                        def: 'dueDate',
                        name: 'Due Date',
                        key: 'dueDate',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];    
       
            break;

            case "VendorRole-Buyer-leadtimecheckorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'status',
                        name: 'Status',
                        key: 'status',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'popoNumber',
                        name: 'Po Number',
                        key: 'poNumber',
                    },
                    {
                        def: 'line',
                        name: 'Lines',
                        key: 'line',
                    
                    },
                    {
                        def: 'material',
                        name: 'Material',
                        key: 'material',
                    
                    },
                    {
                        def: 'description',
                        name: 'Description',
                        key: 'description',
                    
                    },
                    {
                        def: 'orderQty',
                        name: 'Order Qty',
                        key: 'orderQty',
                    
                    },
                    {
                        def: 'openQty',
                        name: 'Open Qty',
                        key: 'openQty',
                    
                    },
                    {
                        def: 'uom',
                        name: 'UOM',
                        key: 'uom',
                    
                    },
                    {
                        def: 'createdDate',
                        name: 'Created Date',
                        key: 'createdDate',
                    
                    },
                    {
                        def: 'firstPromisedDate',
                        name: 'Promised Date',
                        key: 'firstPromisedDate',
                    
                    },
                    {
                        def: 'dueDate',
                        name: 'Due Date',
                        key: 'dueDate',
                    
                    },
                    {
                        def: 'leadTime',
                        name: 'CurrentLeadTime',
                        key: 'leadTime',
                    
                    },
                    {
                        def: 'actualLeadTime',
                        name: 'Actual Lead Time',
                        key: 'actualLeadTime',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];    
       
            break;
      
            case "VendorRole-Material Number-leadtimecheckorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'status',
                        name: 'Status',
                        key: 'status',
                    
                    },
                    {
                        def: 'material',
                        name: 'Material',
                        key: 'material',
                    
                    },
                    {
                        def: 'description',
                        name: 'Description',
                        key: 'description',
                    
                    },
                    {
                        def: 'poNumber',
                        name: 'PO Number',
                        key: 'poNumber',
                    
                    },
                    {
                        def: 'line',
                        name: 'Lines',
                        key: 'line',
                    
                    },
                    {
                        def: 'orderQty',
                        name: 'Order Qty',
                        key: 'orderQty',
                    
                    },
                    {
                        def: 'openQty',
                        name: 'Open Qty',
                        key: 'openQty',
                    
                    },
                    {
                        def: 'uom',
                        name: 'UOM',
                        key: 'uom',
                    
                    },
                    {
                        def: 'createdDate',
                        name: 'Created Date',
                        key: 'createdDate',
                    
                    },
                    {
                        def: 'firstPromisedDate',
                        name: 'Promised Date',
                        key: 'firstPromisedDate',
                    
                    },
                    {
                        def: 'dueDate',
                        name: 'Due Date',
                        key: 'dueDate',
                    
                    },
                    {
                        def: 'leadTime',
                        name: 'CurrentLeadTime',
                        key: 'leadTime',
                    
                    },
                    {
                        def: 'actualLeadTime',
                        name: 'Actual Lead Time',
                        key: 'actualLeadTime',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];    
       
            break;
      
            case "VendorRole-Material Number-allopenorder":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'status',
                        name: 'Status',
                        key: 'status',
                    
                    },
                    {
                        def: 'material',
                        name: 'Material',
                        key: 'material',
                    
                    },
                    {
                        def: 'description',
                        name: 'Description',
                        key: 'description',
                    
                    },
                    {
                        def: 'poNumber',
                        name: 'PO Number',
                        key: 'poNumber',
                    
                    },
                    {
                        def: 'line',
                        name: 'Lines',
                        key: 'line',
                    
                    },
                    
                    {
                        def: 'orderQty',
                        name: 'Order Qty',
                        key: 'orderQty',
                    
                    },
                    {
                        def: 'openQty',
                        name: 'Open Qty',
                        key: 'openQty',
                    
                    },
                    {
                        def: 'uom',
                        name: 'UOM',
                        key: 'uom',
                    
                    },
                    {
                        def: 'createdDate',
                        name: 'Created Date',
                        key: 'createdDate',
                    
                    },
                    {
                        def: 'firstPromisedDate',
                        name: 'Promised Date',
                        key: 'firstPromisedDate',
                    
                    },
                    {
                        def: 'dueDate',
                        name: 'Due Date',
                        key: 'dueDate',
                    
                    },
                    {
                        def: 'leadTime',
                        name: 'CurrentLeadTime',
                        key: 'leadTime',
                    
                    },
                    {
                        def: 'actualLeadTime',
                        name: 'Actual Lead Time',
                        key: 'actualLeadTime',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'buyerCode',
                        name: 'Buyer Code',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];    
       
            break;
      
      
            case "VendorRole-Material Number-ackneededorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'status',
                        name: 'Status',
                        key: 'status',
                    
                    },
                    {
                        def: 'material',
                        name: 'Material',
                        key: 'material',
                    
                    },
                    {
                        def: 'description',
                        name: 'Description',
                        key: 'description',
                    
                    },
                    {
                        def: 'poNumber',
                        name: 'PO Number',
                        key: 'poNumber',
                    
                    },
                    {
                        def: 'line',
                        name: 'Lines',
                        key: 'line',
                    
                    },
                    
                    {
                        def: 'orderQty',
                        name: 'Order Qty',
                        key: 'orderQty',
                    
                    },
                    {
                        def: 'openQty',
                        name: 'Open Qty',
                        key: 'openQty',
                    
                    },
                    {
                        def: 'uom',
                        name: 'UOM',
                        key: 'uom',
                    
                    },
                    {
                        def: 'createdDate',
                        name: 'Created Date',
                        key: 'createdDate',
                    
                    },
                    {
                        def: 'firstPromisedDate',
                        name: 'Promised Date',
                        key: 'firstPromisedDate',
                    
                    },
                    {
                        def: 'dueDate',
                        name: 'Due Date',
                        key: 'dueDate',
                    
                    },
                    {
                        def: 'leadTime',
                        name: 'CurrentLeadTime',
                        key: 'leadTime',
                    
                    },
                    {
                        def: 'actualLeadTime',
                        name: 'Actual Lead Time',
                        key: 'actualLeadTime',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];    
       
            break;
      
            case "VendorRole-Material Number-futurepastdueorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'status',
                        name: 'Status',
                        key: 'status',
                    
                    },
                    {
                        def: 'material',
                        name: 'Material',
                        key: 'material',
                    
                    },
                    {
                        def: 'description',
                        name: 'Description',
                        key: 'description',
                    
                    },
                    {
                        def: 'poNumber',
                        name: 'PO Number',
                        key: 'poNumber',
                    
                    },
                    {
                        def: 'line',
                        name: 'Lines',
                        key: 'line',
                    
                    },
                    
                    {
                        def: 'orderQty',
                        name: 'Order Qty',
                        key: 'orderQty',
                    
                    },
                    {
                        def: 'openQty',
                        name: 'Open Qty',
                        key: 'openQty',
                    
                    },
                    {
                        def: 'uom',
                        name: 'UOM',
                        key: 'uom',
                    
                    },
                    {
                        def: 'createdDate',
                        name: 'Created Date',
                        key: 'createdDate',
                    
                    },
                    {
                        def: 'firstPromisedDate',
                        name: 'Promised Date',
                        key: 'firstPromisedDate',
                    
                    },
                    {
                        def: 'dueDate',
                        name: 'Due Date',
                        key: 'dueDate',
                    
                    },
                    {
                        def: 'leadTime',
                        name: 'CurrentLeadTime',
                        key: 'leadTime',
                    
                    },
                    {
                        def: 'actualLeadTime',
                        name: 'Actual Lead Time',
                        key: 'actualLeadTime',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];    
       
            break;
            //For VendorRole
            
            //For Vendor
            case "Buyer-ackneededorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'buyerCode',
                        name: 'Buyer Code',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    
                    {
                        def: 'totalLines',
                        name: 'Ack Needed Lines',
                        key: 'totalLines',
                    
                    },
                    {
                        def: 'totalLinePer',
                        name: 'Ack Needed Line %',
                        key: 'totalLinePer',
                    
                    },
                    {
                        def: 'totalValue',
                        name: 'Ack Needed Value',
                        key: (i:any)=>  "$"+i.totalValue.toLocaleString(),
                    
                    },
                    {
                        def: 'totalValuePer',
                        name: 'Ack Needed Value %',
                        key: 'totalValuePer',
                    
                    },
                    {
                        def: 'vendorCode',
                        name: 'Vendor Number',
                        key: 'vendorCode',
                    
                    },
                    {
                        def: 'vendorName',
                        name: 'Vendor Name',
                        key: 'vendorName',
                    
                    },
                    {
                        def: 'plant',
                        name: 'Plant Number',
                        key: 'plant',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];
                break;
            case "Buyer-pastdueorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'buyerCode',
                        name: 'Buyer Code',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'totalLines',
                        name: 'Pastdue Lines',
                        key: 'totalLines',
                    
                    },
                    {
                        def: 'totalLinePer',
                        name: 'Pastdue Line %',
                        key: 'totalLinePer',
                    
                    },
                    {
                        def: 'totalValue',
                        name: 'Pastdue Value',
                        key: (i:any)=>  "$"+i.totalValue.toLocaleString(),
                    
                    },
                    {
                        def: 'totalValuePer',
                        name: 'Pastdue Value %',
                        key: 'totalValuePer',
                    
                    },
                    {
                        def: 'vendorCode',
                        name: 'Vendor Number',
                        key: 'vendorCode',
                    
                    },
                    {
                        def: 'vendorName',
                        name: 'Vendor Name',
                        key: 'vendorName',
                    
                    },
                    {
                        def: 'plant',
                        name: 'Plant Number',
                        key: 'plant',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];
                break;
            case "Buyer-futurepastdueorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'buyerCode',
                        name: 'Buyer Code',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'totalLines',
                        name: 'Future Pastdue Lines',
                        key: 'totalLines',
                    
                    },
                    {
                        def: 'totalLinePer',
                        name: 'Future Pastdue Line %',
                        key: 'totalLinePer',
                    
                    },
                    {
                        def: 'totalValue',
                        name: 'Future Pastdue Value',
                        key: (i:any)=>  "$"+i.totalValue.toLocaleString(),
                    
                    },
                    {
                        def: 'totalValuePer',
                        name: 'Future Pastdue Value %',
                        key: 'totalValuePer',
                    
                    },
                    {
                        def: 'vendorCode',
                        name: 'Vendor Number',
                        key: 'vendorCode',
                    
                    },
                    {
                        def: 'vendorName',
                        name: 'Vendor Name',
                        key: 'vendorName',
                    
                    },
                    {
                        def: 'plant',
                        name: 'Plant Number',
                        key: 'plant',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];
                break;
            case "Buyer-leadtimecheckorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'buyerCode',
                        name: 'Buyer Code',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'totalLines',
                        name: 'Total Counts',
                        key: 'totalLines',
                    
                    },
                    {
                        def: 'totalLinePer',
                        name: 'Total Count %',
                        key: 'totalLinePer',
                    
                    },
                    {
                        def: 'totalValue',
                        name: 'Total Value',
                        key: (i:any)=>  "$"+i.totalValue.toLocaleString(),
                        
                    },
                    {
                        def: 'totalValuePer',
                        name: 'Total Value %',
                        key: 'totalValuePer',
                    
                    },
                    {
                        def: 'vendorCode',
                        name: 'Vendor Number',
                        key: 'vendorCode',
                    
                    },
                    {
                        def: 'vendorName',
                        name: 'Vendor Name',
                        key: 'vendorName',
                    
                    },
                    {
                        def: 'plant',
                        name: 'Plant Number',
                        key: 'plant',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];
                break;
            //For Vendor

            case "Vendor-allopenorder":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'vendorCode',
                        name: 'Vendor Code',
                        key: 'vendorCode',
                    
                    },
                    {
                        def: 'vendorName',
                        name: 'Vendor Name',
                        key: 'vendorName',
                    
                    },
                    {
                        def: 'totalLines',
                        name: 'Total Lines',
                        key: 'totalLines',
                    
                    },
                    {
                        def: 'totalLinePer',
                        name: 'Total Line %',
                        key: 'totalLinePer',
                    
                    },
                    {
                        def: 'totalValue',
                        name: 'Total Value',
                        key: (i:any)=>  "$"+i.totalValue.toLocaleString(),
                        
                    },
                    {
                        def: 'totalValuePer',
                        name: 'Total Value %',
                        key: 'totalValuePer',
                    
                    },
                    {
                        def: 'buyerCode',
                        name: 'Buyer Code',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'plant',
                        name: 'Plant Number',
                        key: 'plant',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];
                break;
            case "Vendor-ackneededorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'vendorCode',
                        name: 'Vendor Number',
                        key: 'vendorCode',
                    
                    },
                    {
                        def: 'vendorName',
                        name: 'Vendor Name',
                        key: 'vendorName',
                    
                    },
                    {
                        def: 'totalLines',
                        name: 'Ack Needed Lines',
                        key: 'totalLines',
                    
                    },
                    {
                        def: 'totalLinePer',
                        name: 'Ack Needed Line %',
                        key: 'totalLinePer',
                    
                    },
                    {
                        def: 'totalValue',
                        name: 'Ack Needed Value',
                        key: (i:any)=>  "$"+i.totalValue.toLocaleString(),
                    
                    },
                    {
                        def: 'totalValuePer',
                        name: 'Ack Needed Value %',
                        key: 'totalValuePer',
                    
                    },
                    
                    {
                        def: 'buyerCode',
                        name: 'Buyer Code',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'plant',
                        name: 'Plant Number',
                        key: 'plant',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];
                break;
            case "Vendor-pastdueorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'vendorCode',
                        name: 'Vendor Number',
                        key: 'vendorCode',
                    
                    },
                    {
                        def: 'vendorName',
                        name: 'Vendor Name',
                        key: 'vendorName',
                    
                    },
                    {
                        def: 'totalLines',
                        name: 'Pastdue Lines',
                        key: 'totalLines',
                    
                    },
                    {
                        def: 'totalLinePer',
                        name: 'Pastdue Line %',
                        key: 'totalLinePer',
                    
                    },
                    {
                        def: 'totalValue',
                        name: 'Pastdue Value',
                        key: (i:any)=>  "$"+i.totalValue.toLocaleString(),
                    
                    },
                    {
                        def: 'totalValuePer',
                        name: 'Pastdue Value %',
                        key: 'totalValuePer',
                    
                    },
                    
                    {
                        def: 'buyerCode',
                        name: 'Buyer Code',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'plant',
                        name: 'Plant Number',
                        key: 'plant',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];
                break;
            case "Vendor-futurepastdueorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'vendorCode',
                        name: 'Vendor Number',
                        key: 'vendorCode',
                    
                    },
                    {
                        def: 'vendorName',
                        name: 'Vendor Name',
                        key: 'vendorName',
                    
                    },
                    {
                        def: 'totalLines',
                        name: 'Future Pastdue Lines',
                        key: 'totalLines',
                    
                    },
                    {
                        def: 'totalLinePer',
                        name: 'Future Pastdue Line %',
                        key: 'totalLinePer',
                    
                    },
                    {
                        def: 'totalValue',
                        name: 'Future Pastdue Value',
                        key: (i:any)=>  "$"+i.totalValue.toLocaleString(),
                    
                    },
                    {
                        def: 'totalValuePer',
                        name: 'Future Pastdue Value %',
                        key: 'totalValuePer',
                    
                    },
                    
                    {
                        def: 'buyerCode',
                        name: 'Buyer Code',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'plant',
                        name: 'Plant Number',
                        key: 'plant',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];
                break;
            case "Vendor-leadtimecheckorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'vendorCode',
                        name: 'Vendor Number',
                        key: 'vendorCode',
                    
                    },
                    {
                        def: 'vendorName',
                        name: 'Vendor Name',
                        key: 'vendorName',
                    
                    },
                    {
                        def: 'totalLines',
                        name: 'Total Counts',
                        key: 'totalLines',
                    
                    },
                    {
                        def: 'totalLinePer',
                        name: 'Total Counts %',
                        key: 'totalLinePer',
                    
                    },
                    {
                        def: 'totalValue',
                        name: 'Total Value',
                        key: (i:any)=>  "$"+i.totalValue.toLocaleString(),
                        
                    },
                    {
                        def: 'totalValuePer',
                        name: 'Total Value %',
                        key: 'totalValuePer',
                    
                    },
                    
                    {
                        def: 'buyerCode',
                        name: 'Buyer Code',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'plant',
                        name: 'Plant Number',
                        key: 'plant',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];
                break;
            
            case "Material Number-allopenorder":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'material',
                        name: 'Material Number',
                        key: 'material',
                    
                    },
                    {
                        def: 'description',
                        name: 'Description',
                        key: 'description',
                    
                    },
                    {
                        def: 'openQuantity',
                        name: 'Open Qty',
                        key: 'openQuantity',
                    
                    },
                    {
                        def: 'openValue',
                        name: 'Open Value',
                        key: (i:any)=>  "$"+i.openValue.toLocaleString(),
                    
                    },
                    {
                        def: 'firstPromisedDate',
                        name: 'Promised Date',
                        key: 'firstPromisedDate',
                    
                    },
                    {
                        def: 'dueDate',
                        name: 'Due Date',
                        key: 'dueDate',
                    
                    },
                    {
                        def: 'line',
                        name: 'Line number',
                        key: 'line',
                    
                    },
                    {
                        def: 'poNumber',
                        name: 'PO Number',
                        key: 'poNumber',
                    
                    },
                    {
                        def: 'vendorCode',
                        name: 'Vendor Number',
                        key: 'vendorCode',
                    
                    },
                    {
                        def: 'vendorName',
                        name: 'Vendor Name',
                        key: 'vendorName',
                    
                    },
                    {
                        def: 'buyerCode',
                        name: 'Buyer Number',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'plant',
                        name: 'Plant Number',
                        key: 'plant',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];
                break;
            
            case "Material Number-ackneededorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'material',
                        name: 'Material Number',
                        key: 'material',
                    
                    },
                    {
                        def: 'description',
                        name: 'Description',
                        key: 'description',
                    
                    },
                    {
                        def: 'openQuantity',
                        name: 'Ack Needed Qty',
                        key: 'openQuantity',
                    
                    },
                    {
                        def: 'openValue',
                        name: 'Ack Needed value',
                        key: (i:any)=>  "$"+i.openValue.toLocaleString(),
                    
                    },
                    {
                        def: 'firstPromisedDate',
                        name: 'Promised Date',
                        key: 'firstPromisedDate',
                    
                    },
                    {
                        def: 'dueDate',
                        name: 'Due Date',
                        key: 'dueDate',
                    
                    },
                    {
                        def: 'line',
                        name: 'Line number',
                        key: 'line',
                    
                    },
                    {
                        def: 'poNumber',
                        name: 'PO Number',
                        key: 'poNumber',
                    
                    },
                    {
                        def: 'vendorCode',
                        name: 'Vendor Number',
                        key: 'vendorCode',
                    
                    },
                    {
                        def: 'vendorName',
                        name: 'Vendor Name',
                        key: 'vendorName',
                    
                    },
                    {
                        def: 'buyerCode',
                        name: 'Buyer Number',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'plant',
                        name: 'Plant Number',
                        key: 'plant',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];
                break;

            case "Material Number-pastdueorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'material',
                        name: 'Material Number',
                        key: 'material',
                    
                    },
                    {
                        def: 'description',
                        name: 'Description',
                        key: 'description',
                    
                    },
                    {
                        def: 'openQuantity',
                        name: 'Pastdue Qty',
                        key: 'openQuantity',
                    
                    },
                    {
                        def: 'openValue',
                        name: 'Pastdue value',
                        key: (i:any)=>  "$"+i.openValue.toLocaleString(),
                    
                    },
                    {
                        def: 'firstPromisedDate',
                        name: 'Promised Date',
                        key: 'firstPromisedDate',
                    
                    },
                    {
                        def: 'dueDate',
                        name: 'Due Date',
                        key: 'dueDate',
                    
                    },
                    {
                        def: 'line',
                        name: 'Line number',
                        key: 'line',
                    
                    },
                    {
                        def: 'poNumber',
                        name: 'PO Number',
                        key: 'poNumber',
                    
                    },
                    {
                        def: 'vendorCode',
                        name: 'Vendor Number',
                        key: 'vendorCode',
                    
                    },
                    {
                        def: 'vendorName',
                        name: 'Vendor Name',
                        key: 'vendorName',
                    
                    },
                    {
                        def: 'buyerCode',
                        name: 'Buyer Number',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'plant',
                        name: 'Plant Number',
                        key: 'plant',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];
                break;

            case "Material Number-futurepastdueorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'material',
                        name: 'Material Number',
                        key: 'material',
                    
                    },
                    {
                        def: 'description',
                        name: 'Description',
                        key: 'description',
                    
                    },
                    {
                        def: 'openQuantity',
                        name: 'Future Pastdue Qty',
                        key: 'openQuantity',
                    
                    },
                    {
                        def: 'openValue',
                        name: 'Future Pastdue value',
                        key: (i:any)=>  "$"+i.openValue.toLocaleString(),
                    
                    },
                    {
                        def: 'firstPromisedDate',
                        name: 'Promised Date',
                        key: 'firstPromisedDate',
                    
                    },
                    {
                        def: 'dueDate',
                        name: 'Due Date',
                        key: 'dueDate',
                    
                    },
                    {
                        def: 'line',
                        name: 'Line number',
                        key: 'line',
                    
                    },
                    {
                        def: 'poNumber',
                        name: 'PO Number',
                        key: 'poNumber',
                    
                    },
                    {
                        def: 'vendorCode',
                        name: 'Vendor Number',
                        key: 'vendorCode',
                    
                    },
                    {
                        def: 'vendorName',
                        name: 'Vendor Name',
                        key: 'vendorName',
                    
                    },
                    {
                        def: 'buyerCode',
                        name: 'Buyer Number',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'plant',
                        name: 'Plant Number',
                        key: 'plant',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];
                break;

            case "Material Number-leadtimecheckorders":
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                    },
                    {
                        def: 'material',
                        name: 'Material Number',
                        key: 'material',
                    
                    },
                    {
                        def: 'description',
                        name: 'Description',
                        key: 'description',
                    
                    },
                    {
                        def: 'totalLines',
                        name: 'Total Counts',
                        key: 'totalLines',
                    
                    },
                    {
                        def: 'totalLinePer',
                        name: 'Total Count %',
                        key: 'totalLinePer',
                    
                    },
                    {
                        def: 'totalValue',
                        name: 'Total Value',
                        key: (i:any)=>  "$"+i.totalValue.toLocaleString(),
                        
                    },
                    {
                        def: 'totalValuePer',
                        name: 'Total Value %',
                        key: 'totalValuePer',
                    
                    },
                    {
                        def: 'vendorCode',
                        name: 'Vendor Number',
                        key: 'vendorCode',
                    
                    },
                    {
                        def: 'vendorName',
                        name: 'Vendor Name',
                        key: 'vendorName',
                    
                    },
                    {
                        def: 'buyerCode',
                        name: 'Buyer Number',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'plant',
                        name: 'Plant Number',
                        key: 'plant',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];
                break;

            default:
                this.columns = [
                    {
                        def: 'compare',
                        name: 'Select',
                        key: 'compare',
                        isSticky: true,
                        projection: true,
                        cannotExport: true,
                        sortable: false
                    },
                    {
                        def: 'buyerCode',
                        name: 'Buyer Code',
                        key: 'buyerCode',
                    
                    },
                    {
                        def: 'buyerName',
                        name: 'Buyer Name',
                        key: 'buyerName',
                    
                    },
                    {
                        def: 'totalLines',
                        name: 'Total Lines',
                        key: 'totalLines',
                    
                    },
                    {
                        def: 'totalLinePer',
                        name: 'Total Line %',
                        key: 'totalLinePer',
                    
                    },
                    {
                        def: 'totalValue',
                        name: 'Total Value',
                        key: (i:any)=>  "$"+i.totalValue.toLocaleString(),
                        
                    },
                    {
                        def: 'totalValuePer',
                        name: 'Total Value %',
                        key: 'totalValuePer',
                    
                    },
                    
                    {
                        def: 'vendorCode',
                        name: 'Vendor Number',
                        key: 'vendorCode',
                    
                    },
                    {
                        def: 'vendorName',
                        name: 'Vendor Name',
                        key: 'vendorName',
                    
                    },
                    {
                        def: 'plant',
                        name: 'Plant Number',
                        key: 'plant',
                    
                    },
                    {
                        def: 'plantName',
                        name: 'Plant Name',
                        key: 'plantName',
                    
                    }
                ];
        }
        this.cdr.detectChanges()
    }

    sendEmail() {
        if(this.listCheckedRecords.length > 0){
            if(this.filters.sendEmailTo != ""){
                
                if(this.filters.sendEmailFor == "directEmail") {
                    this._apiService.isCompareLoader$.next(true)
                    
                    this._apiService.get(api.OpenPOExpeditorSentEmailTemplate)
                    .subscribe((res:any)=>{
                        this._apiService.isCompareLoader$.next(false)
                        let reportsData = [];
                        let existReportsData = [];
                        this.listCheckedRecordsForEmail.forEach((i: any) => {
                            if (this.filters.sendEmailTo == "Buyer") {
                                reportsData.push({
                                    vendorCode : i.vendorCode,
                                    code: i.buyerCode,
                                    name: i.buyerName,
                                    vendorName: i.vendorName,
                                    contact: i.phoneNo,
                                    email: [i.buyerEmail],
                                    cc: []
                                });
                            } else {
                                if (existReportsData.includes(i.vendorEmail)) {
                                    return;
                                } else {
                                    existReportsData.push(i.vendorEmail);
                                }
                                reportsData.push({
                                    vendorCode : i.vendorCode,
                                    code: i.vendorCode,
                                    name: i.vendorName,
                                    contact: i.phoneNo,
                                    email: [i.vendorEmail],
                                    cc: []
                                });
                            }
                        });
                        
                            
                        let response = {};

                        response["records"]      =   this.listCheckedRecordsForEmail;
                        response["listReportModel"]      =   {
                            "listReportToSend" : reportsData,
                            "subject": res.data.subject,
                            "body": res.data.body,
                        }
                        response["apiRequestData"]      =   {
                            "UserId": this.loggedInUser.userID,
                            "tenantId": this.filters.tenantId,
                            "OnTimeDeliveryOption": this.filters.OnTimeDeliveryOption,
                            "byBuyerOrSupplierOption": this.filters.byBuyerOrSupplierOption,
                            "byBuyerOrSupplier": this.filters.byBuyerOrSupplier,
                            "PageIndex": this.filters.PageIndex,
                            "PageSize": this.filters.PageSize,
                            "plantCode": this.filters.plantCode,
                            "searchText": this.filters.searchText,
                            "vendorCodes": this.filters.forVendorEmails,
                            "sendEmailTo": this.filters.sendEmailTo,
                            "buyerCodes":[],
                            "bufferDays": Number(this.filters.bufferDays),
                            "selfdefinedfuturedays": Number(this.filters.selfdefinedfuturedays),
                        };

                        this.dialog.open(UserdialogoutComponent,
                            {
                                data: {
                                height: '75%',
                                width: '25%!important',
                                minWidth: '25%',
                                top: '20%',
                                resize: 'none',
                                message: "Your report is being generated and will be sent shortly. This process may take a few minutes. You can continue using the system as usual, and you will receive a notification once the report has been successfully sent.",
                                heading: 'Notification',
                                isMessage: true,
                                }
                            });

                        this._apiService.post(api.OpenPOExpeditorSentEmail,response)
                        .subscribe((res:any)=>{

                            this.listCheckedRecords = [];
                            this.listCheckedRecordsForEmail = [];
                            // $("#mat-checkbox-1-input").click();

                            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                            checkboxes.forEach((checkbox) => {
                            const input = checkbox as HTMLInputElement; // Cast to HTMLInputElement
                                if(input.checked)
                                {
                                    input.click();
                                }
                            });

                            this._apiService.isCompareLoader$.next(false);
                            this.cdr.detectChanges();
                            this._notificationService.push("Email Sent Successfully.",1);
                        },
                        (error:any)=>{
                            this._apiService.isCompareLoader$.next(false)
                        })
                        
                    },
                    (error:any)=>{
                        this._apiService.isCompareLoader$.next(false)
                    })       
                    
                } else {
                 
                    this._apiService.get(api.OpenPOExpeditorSentEmailTemplate)
                    .subscribe((res:any)=>{
                        this._apiService.isCompareLoader$.next(false)
                        let reportsData = [];
                        let existReportsData = [];
                        this.listCheckedRecordsForEmail.forEach((i: any) => {
                            if (this.filters.sendEmailTo == "Buyer") {
                                    
                                    reportsData.push({
                                        vendorCode : i.vendorCode,
                                        code: i.buyerCode,
                                        name: i.buyerName,
                                        vendorName: i.vendorName,
                                        contact: i.phoneNo,
                                        email: [i.buyerEmail],
                                        cc: []
                                    });
                                } else {
                                    if (existReportsData.includes(i.vendorEmail)) {
                                        return;
                                    } else {
                                        existReportsData.push(i.vendorEmail);
                                    }
                                    reportsData.push({
                                        vendorCode : i.vendorCode,
                                        code: i.vendorCode,
                                        name: i.vendorName,
                                        contact: i.phoneNo,
                                        email: [i.vendorEmail],
                                        cc: []
                                    });
                                }
                        });
                        const dialogRef = this.dialog.open(SendreportdialogComponent, {
                            panelClass: 'sendreportcontainer',
                            data: {
                              usersData : reportsData,
                              message: res.data.body,
                              subject : res.data.subject,
                              sendFrom: "expeditor",
                              sendTo: this.filters.sendEmailTo,
                              roleID: this.loggedInUser.roleID,
                            },
                        });

                        dialogRef.afterClosed().subscribe((res:any)=>{
                            if(res === null)
                              return
                            
                            this.dialog.open(UserdialogoutComponent,
                            {
                                data: {
                                height: '75%',
                                width: '25%!important',
                                minWidth: '25%',
                                top: '20%',
                                resize: 'none',
                                message: "Your report is being generated and will be sent shortly. This process may take a few minutes. You can continue using the system as usual, and you will receive a notification once the report has been successfully sent.",
                                heading: 'Notification',
                                isMessage: true,
                                }
                            });

                            let response = {};

                            response["records"]      =   this.listCheckedRecordsForEmail;
                            response["listReportModel"]      =   {
                                "listReportToSend" : res.listReportToSend,
                                "subject": res.subject,
                                "body": res.message,
                            }
                            response["apiRequestData"]      =   {
                                    "UserId": this.loggedInUser.userID,
                                    "tenantId": this.filters.tenantId,
                                    "OnTimeDeliveryOption": this.filters.OnTimeDeliveryOption,
                                    "byBuyerOrSupplierOption": this.filters.byBuyerOrSupplierOption,
                                    "byBuyerOrSupplier": this.filters.byBuyerOrSupplier,
                                    "PageIndex": this.filters.PageIndex,
                                    "PageSize": this.filters.PageSize,
                                    "plantCode": this.filters.plantCode,
                                    "searchText": this.filters.searchText,
                                    "vendorCodes": this.filters.forVendorEmails,
                                    "sendEmailTo": this.filters.sendEmailTo,
                                    "bufferDays": Number(this.filters.bufferDays),
                                    "selfdefinedfuturedays": Number(this.filters.selfdefinedfuturedays),
                                    "buyerCodes":[],
                                };

                            this._apiService.post(api.OpenPOExpeditorSentEmail,response)
                            .subscribe((res:any)=>{
                                this.listCheckedRecords = [];
                                this.listCheckedRecordsForEmail = [];
                                // $("#mat-checkbox-1-input").click();
                                const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                                checkboxes.forEach((checkbox) => {
                                const input = checkbox as HTMLInputElement; // Cast to HTMLInputElement
                                    if(input.checked)
                                    {
                                        input.click();
                                    }
                                });

                                this._apiService.isCompareLoader$.next(false);
                                this.cdr.detectChanges();
                                this._notificationService.push("Email Sent Successfully.",1);
                            },
                            (error:any)=>{
                                this._apiService.isCompareLoader$.next(false)
                            })
                        })
                    },
                    (error:any)=>{
                        this._apiService.isCompareLoader$.next(false)
                    })
                }
            } else {
                this._notificationService.push("Please select send to vendor or buyer option.", 2)
            }
            
        } else {
            this._notificationService.push("Please checked checkbox first", 2)
        }
    }

    //   async openDialog() {
    //    // this.showChartEmitter.emit(true);
      
    //     if (!this.apiRequestData) {
    //       this._notificationService.push("No data set selected", 2);
    //       return;
    //     }
      
    //     // if (this.selected.length < 1) {
    //     //   this._notificationService.push("At least 1 report must be selected", 2);
    //     //   return;
    //     // }
    //     // if(this.selected.length == 1 && this.selected.includes(1))
    //     //   {
    //     //     for(let index = 2; index < 14; index++)
    //     //     {
    //     //        this.selected.push(index)
    //     //     }
    //     //   }
    //     // if (this.listSelectedCommodity.length < 1) {
    //     //   this._notificationService.push("At least 1 commodity must be selected", 2);
    //     //   return;
    //     //   }
    
    //       var CommodityWithOverAll = this.listSelectedCommodity.filter((i:any) => i.split("-")[0] == 'Overall')
    //       var commodities = [] // commodities with over all
    //       let commodityList = [] //commodities to send email
    //       let mergedCommodites = []  
    //     if(CommodityWithOverAll.length > 0){
    //       CommodityWithOverAll.forEach((i:any)=> {
            
    //         commodities.push(i.split("-")[1])
          
    //       })
    
    //       commodityList =  this.listAllCommodity.filter((i:any)=> commodities.includes(i.commodity))
        
        
    //     var listCommodities = this.listAllCommodity.filter((i:any)=> !commodities.includes(i.value.split("-")[1]) && i.value.split("-")[0] !== "Overall" || this.listSelectedCommodity.includes(i.value))
        
        
    //      mergedCommodites = [...new Set([...commodityList, ...listCommodities])];
        
    
    
    
    //     }else{
    
    //       mergedCommodites = this.listAllCommodity.filter((i:any)=> this.listSelectedCommodity.includes(i.value));
    //     }
        
    
    
    //     let message = ''
    //     let reportsData = []
    //     mergedCommodites.forEach((i:any)=>{
    //       reportsData.push({code : i.commodity , name : i.plantName , contact : '' , email : [i.email] , cc : []})
    //     })
    
    //     // if(!this.isViewFirst){
    //     //   this.sendReportsModelForNotViewFirst(reportsData)
    //     //   return;
    //     // }
    
    
    
    //     const dialogRef = this.dialog.open(SendreportdialogComponent, {
    //       panelClass: 'sendreportcontainer',
    //       data: {
    //         isCommodity : true,
    //         usersData : reportsData,
    //        message: this._emailService.message,
    //         subject : this._emailService.poSubject
    //       },
    //     });
      
    
    //     dialogRef.afterClosed().subscribe((res:any)=>{
    //       if(res === null)
    //         return
    
    //      // this.sendReportsModel(res)
    //     })
    
        
    //   }

    // openDialog(chartData:any,chartFor:any) {
    //     this.dialog.open(BarComponent,
    //         {
    //             panelClass:'graph-style',
    //             data: {
    //                 chartData,
    //                 chartFor
    //             }
    //         }
    //     );
    // }
    
    openDialogNew(heading:any,executeData:any,chartFor:any) {
        this.dialog.open(PopupchartComponent,
            {
                panelClass:'graph-style',
                data: {
                    name:heading,
                    expeditorBarChartData: executeData,
                    chartFor:chartFor
                }
            }
        );
    }

    remove(fruit: string): void {
        const index = this.selected.indexOf(fruit);
    
        if (index >= 0) {
          this.selected.splice(index, 1);
        }
    }
    
    onBuyerInput(data: any) {
    // if (this.buyerInput === '' || this.buyerInput === undefined) {
    //   this.listBuyer = this.buyerDropDown;
    // } else {
    //   this.listBuyer = this.buyerDropDown.filter((i: any) => i.name.toLowerCase().includes(this.buyerInput.toLowerCase()));
    // }
    }

    onSelected(event: MatAutocompleteSelectedEvent): void {
        // if(this.selected.length>0 && event.option.value == "ALL"){
        //   this._notificationService.push("Can not Select All after selecting any of the buyer",2)
        //   return
        // }


        // if (this.selected.some((i: any) => i.id == "ALL")) {
        //   this._notificationService.push("Can not select any other buyer now", 2)
        //   return
        // }

        var alreadyExist = this.selected.find((i: any) => i.vendorCode == event.option.value)
        if (alreadyExist) {
          this._notificationService.push("Vendor already selected", 2)
          return
        }
        // if(event.option.value == "ALL") 
        this.selected.push(this.listVendors.filter((i: any) => i.vendorCode == event.option.value)[0]);
        
        this.vendorInputEle.nativeElement. value = '';
        // this.listVendors = this.buyerDropDown;
    }

    public onFilterChange(item: any) {
        // console.log(item);
    }
    public onDropDownClose(item: any) {
        // console.log(item);
    }
    
    public onItemSelect(item: any) {
        // console.log(item);
    }
    public onDeSelect(item: any) {
        // console.log(item);
    }
    
    public onSelectAll(items: any) {
    }
    public onDeSelectAll(items: any) {
    }
  
}
