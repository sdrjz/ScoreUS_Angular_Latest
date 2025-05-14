import { Component, OnInit, Input, ChangeDetectorRef  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { api } from 'src/app/api.endpoints';
import { NotificationService } from 'src/app/notification.service';
import { ExportToExcelService } from 'src/app/services/appService/exportToExcelService';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { TrendlinesPomanagerLinechartComponent } from '../trendlines-pomanager-buyer/trendlines-pomanager-linechart/trendlines-pomanager-linechart.component';
import { PopupchartComponent } from '../../general/popupchart/popupchart.component';

@Component({
    selector: 'app-trendlines-pomanager-vendor',
    templateUrl: './trendlines-pomanager-vendor.component.html',
    styleUrls: ['./trendlines-pomanager-vendor.component.css']
})
export class TrendlinesPomanagerVendorComponent implements OnInit {

    constructor(
        private readonly dialog: MatDialog,
        private _apiService: GeneralApiService,
        private _notificationService:NotificationService,
        private cdr : ChangeDetectorRef,
        private exporter: ExportToExcelService
    ) { }

    //For filters
    loggedInUser : any;
    allVendors: any = [];
    allPlants: any = [];
    columns: any = [];
    records : any = [];
    graphData: any [];
    averageGraphData: any [];

    filters:any={
        tenantId:'',
        plantCode:'All',
        PageIndex:1,
        PageSize:100,
        searchText:'',
        days:10,
        bufferDays:0,
        selfdefinedfuturedays:0,
        VendorCode:"N/A",
    }
    
    //Chart and table
    
    public show:boolean = true;
    public buttonName:any = 'View Graph';
    
    public showOpenPOorders_Lines = true;
    public btnOpenPOorders_Lines = 'View Graph';
    OpenPOorders_Lines: any [];
    
    public showPastdueorders_Lines = true;
    public btnPastdueorders_Lines = 'View Graph';
    Pastdueorders_Lines: any [];

    public showAckneededorders_Lines = true;
    public btnAckneededorders_Lines = 'View Graph';
    Ackneededorders_Lines: any [];

    public showFuturepastdueorders_Lines = true;
    public btnFuturepastdueorders_Lines = 'View Graph';
    Futurepastdueorders_Lines: any [];

    public showLeadtimecheckorders_Lines = true;
    public btnLeadtimecheckorders_Lines = 'View Graph';
    Leadtimecheckorders_Lines: any [];
    
    public showOpenPOorders_Values = true;
    public btnOpenPOorders_Values = 'View Graph';
    OpenPOorders_Values: any [];

    public showPastdueorders_Values = true;
    public btnPastdueorders_Values = 'View Graph';
    Pastdueorders_Values: any [];

    public showAckneededorders_Values = true;
    public btnAckneededorders_Values = 'View Graph';
    Ackneededorders_Values: any [];

    public showFuturepastdueorders_Values = true;
    public btnFuturepastdueorders_Values = 'View Graph';
    Futurepastdueorders_Values: any [];

    public showLeadtimecheckorders_Values = true;
    public btnLeadtimecheckorders_Values = 'View Graph';
    Leadtimecheckorders_Values: any [];
    //Chart and table

    ngOnInit(): void {
         

        var user = localStorage.getItem("userData")
        if(user)
            this.loggedInUser = JSON.parse(user)
            this.filters.tenantId = this.loggedInUser.tenantID;
            
            if(this.loggedInUser.vendorCode !== null)
                this.filters.VendorCode = this.loggedInUser.vendorCode;
            
            this.callSettings();
    }

    previousArray = ['ALL']
    // onSelection(data: any) {
    //     if(this.filters.VendorCode.length === 1 && this.filters.VendorCode.includes('ALL'))this.previousArray.push('ALL');
    
    //     if(data.value.includes('ALL') && this.filters.VendorCode.includes('ALL')){
        
    //         if(this.filters.VendorCode.length !== this.previousArray.length && this.filters.VendorCode.length < this.previousArray.length){
    //             this.filters.VendorCode = this.filters.VendorCode.filter((i:any)=>  i !=='ALL')
    //             this.previousArray = this.filters.VendorCode;
    //             return
    //         }
            
        
    //         this.filters.VendorCode = []
    //         for (let index = 0; index < this.allVendors.length; index++) {
    //             this.filters.VendorCode.push(this.allVendors[index].item_id)
    //             this.previousArray.push(this.allVendors[index].item_id)
    //         }
    //     } else {
    //         if(this.previousArray.length !== this.filters.VendorCode.length && (this.previousArray.includes('ALL')))
    //         {
    //             this.filters.VendorCode = [];
    //             this.previousArray = [];
    //         }
    //         else{
    
    //             this.previousArray = this.filters.VendorCode
    //         }
    //     }
    //     this.cdr.detectChanges();
    // }


    onSelection(data: any) {
        if(this.filters.VendorCode.length === 1 && this.filters.VendorCode.includes('ALL'))this.previousArray.push('ALL');
    
        if(data.value.includes('ALL') && this.filters.VendorCode.includes('ALL')){
        
            if(this.filters.VendorCode.length !== this.previousArray.length && this.filters.VendorCode.length < this.previousArray.length){
                this.filters.VendorCode = this.filters.VendorCode.filter((i:any)=>  i !=='ALL')
                this.previousArray = this.filters.VendorCode;
                return
            }
            
        
            // this.filters.VendorCode = []
            // for (let index = 0; index < this.allVendors.length; index++) {
            //     this.filters.VendorCode.push(this.allVendors[index].item_id)
            //     this.previousArray.push(this.allVendors[index].item_id)
            // }

            // Select all buyers
            this.filters.VendorCode = ['ALL'];
            this.previousArray = ['ALL'];
    
            // Mark all buyers as checked
            this.allVendors.forEach((vendor: any) => {
                vendor.check = true;
            });


        } else {
            if(this.previousArray.length !== this.filters.VendorCode.length && (this.previousArray.includes('ALL')))
            {
                this.filters.VendorCode = [];
                this.previousArray = [];

                 // Reset checkboxes for all buyers
                 this.allVendors.forEach((vendor: any) => {
                    vendor.check = false;
                });
            }
            else{
    
                this.previousArray = this.filters.VendorCode
            }
        }
        this.cdr.detectChanges();
    }

    

    callSettings(){
        this._apiService.isCompareLoader$.next(true)
        var url_query_params    =   api.ByDefaultSetting+'?tenantId='+this.filters.tenantId+'&VendorCode='+this.filters.VendorCode;
        this._apiService.get(url_query_params)
            .subscribe((res:any)=>{
                if(res === null) return
                this.allVendors = res.vendor;
                this.filters.VendorCode = ['ALL'];
                // if(this.filters.VendorCode.includes('ALL')){
                //     this.filters.VendorCode = this.allVendors.map(buyer => buyer.item_id);
                // }

                this.allPlants = res.plant;
                this.filters.bufferDays = res.setting[0].bufferDays;
                this.filters.selfdefinedfuturedays = res.setting[0].selfDefinedFutureDays;
                this.cdr.detectChanges();
                this.Search();
                // this._apiService.isCompareLoader$.next(false)
            },
            (error:any)=>{
                this._apiService.isCompareLoader$.next(false)
            })
    }

    changePlantCode() {
        this._apiService.isCompareLoader$.next(true)
        let plantCode = (this.filters.plantCode == 'All')?0:this.filters.plantCode;
        let VendorCode = (this.filters.VendorCode == 'ALL')?'N/A':this.filters.VendorCode;
        var url_query_params    =   api.ByDefaultSetting+'?tenantId='+this.filters.tenantId+'&PlantID='+plantCode+'&VendorCode='+VendorCode;
        this._apiService.get(url_query_params)
            .subscribe((res:any)=>{
                this.allVendors = res.vendor;
                this.cdr.detectChanges();
                
                this._apiService.isCompareLoader$.next(false)
            },
            (error:any)=>{
                this._apiService.isCompareLoader$.next(false)
            })
    }
    
    Search() {
        this.columns = [
            {
                def: 'id',
                name: 'Vendor Code',
                key: 'id',
               isSticky: true
            },{
                def: 'name',
                name: 'Vendor Name',
                key: 'name',
                isSticky: true
            },
        ];

        for (let i = 1; i <= this.filters.days; i++) {
            this.columns.push({
                def: 'day'+i,
                name: 'Day '+i,
                key: 'day'+i,
                subHeading : 'Vendor-Total-Percentage'
            })
        }

        this._apiService.isCompareLoader$.next(true)
        
        var url_query_params    =   api.OpenPOTrendLineVendor;
        if (this.filters !== null || this.filters !== undefined)
            url_query_params += '?';

            Object.keys(this.filters).map(key => {
                if(key == "VendorCode"){
                    let VendorCode = this.filters.VendorCode;
                    if(this.filters.VendorCode.includes('ALL')){
                        VendorCode = ['ALL'];
                    }
                    url_query_params += `${key}=${VendorCode}&`; 
                } else {
                    url_query_params += `${key}=${this.filters[key]}&`;
                }
            });
        
            url_query_params =    url_query_params.slice(0, -1);
       
        this._apiService.get(url_query_params)
            .subscribe((res:any)=>{
                let maxDays = this.filters.bufferDays;
                this.graphData = res.graphData;
                if(Object.keys(this.graphData).length > 0){
                    this.OpenPOorders_Lines = null;
                    this.OpenPOorders_Lines = []
                    this.dataSetByDays(res.graphData.OpenPOorders_Lines,this.OpenPOorders_Lines,maxDays);
                
                    this.Pastdueorders_Lines = null;
                    this.Pastdueorders_Lines = []
                    this.dataSetByDays(res.graphData.Pastdueorders_Lines,this.Pastdueorders_Lines,maxDays);

                    this.Ackneededorders_Lines = null;
                    this.Ackneededorders_Lines = []
                    this.dataSetByDays(res.graphData.Ackneededorders_Lines,this.Ackneededorders_Lines,maxDays);

                    this.Futurepastdueorders_Lines = null;
                    this.Futurepastdueorders_Lines = []
                    this.dataSetByDays(res.graphData.Futurepastdueorders_Lines,this.Futurepastdueorders_Lines,maxDays);

                    this.Leadtimecheckorders_Lines = null;
                    this.Leadtimecheckorders_Lines = []
                    this.dataSetByDays(res.graphData.Leadtimecheckorders_Lines,this.Leadtimecheckorders_Lines,maxDays);

                    this.OpenPOorders_Values = null;
                    this.OpenPOorders_Values = []
                    this.dataSetByDays(res.graphData.OpenPOorders_Values,this.OpenPOorders_Values,maxDays);

                    this.Pastdueorders_Values = null;
                    this.Pastdueorders_Values = []
                    this.dataSetByDays(res.graphData.Pastdueorders_Values,this.Pastdueorders_Values,maxDays);

                    this.Ackneededorders_Values = null;
                    this.Ackneededorders_Values = []
                    this.dataSetByDays(res.graphData.Ackneededorders_Values,this.Ackneededorders_Values,maxDays);

                    this.Futurepastdueorders_Values = null;
                    this.Futurepastdueorders_Values = []
                    this.dataSetByDays(res.graphData.Futurepastdueorders_Values,this.Futurepastdueorders_Values,maxDays);

                    this.Leadtimecheckorders_Values = null;
                    this.Leadtimecheckorders_Values = []
                    this.dataSetByDays(res.graphData.Leadtimecheckorders_Values,this.Leadtimecheckorders_Values,maxDays);
                }
                this.cdr.detectChanges()

                this._apiService.isCompareLoader$.next(false)
            },
            (error:any)=>{
                // console.clear()
               
                this._apiService.isCompareLoader$.next(false)
            })
    }

    dataSetByDays(records,table,maxDays){
        let buyerRecordsMap1 = {}
        records.forEach(item => {
                    
            const { name, id, day1,average_Lines, poLineCount, poLinePercentage } = item;
            
            if (!buyerRecordsMap1[id]) {
                buyerRecordsMap1[id] = {
                    id: id,
                    name: name,
                };
            }

            for (let i = 1; i <= maxDays; i++) {
                if (!buyerRecordsMap1[id][`day${i}`]) {
                    buyerRecordsMap1[id][`day${i}`] = "-";
                }
            }

            buyerRecordsMap1[id][`day${day1}`] = `${parseFloat(average_Lines).toFixed(3)} - ${parseFloat(poLineCount).toFixed(3)} - ${poLinePercentage}`;
        });
        for (let buyerCode in buyerRecordsMap1) {
            table.push(buyerRecordsMap1[buyerCode]);
        }
    }

    toggleOpenPOorders_Lines() {
        this.showOpenPOorders_Lines = !this.showOpenPOorders_Lines;
        if(this.showOpenPOorders_Lines)
            this.btnOpenPOorders_Lines = "View Graph";
        else
            this.btnOpenPOorders_Lines = "View Data"; 
    }

    togglePastdueorders_Lines() {
        this.showPastdueorders_Lines = !this.showPastdueorders_Lines;
        if(this.showPastdueorders_Lines)
            this.btnPastdueorders_Lines = "View Graph";
        else
            this.btnPastdueorders_Lines = "View Data"; 
    }

    toggleAckneededorders_Lines() {
        this.showAckneededorders_Lines = !this.showAckneededorders_Lines;
        if(this.showAckneededorders_Lines)
            this.btnAckneededorders_Lines = "View Graph";
        else
            this.btnAckneededorders_Lines = "View Data"; 
    }

    toggleFuturepastdueorders_Lines() {
        this.showFuturepastdueorders_Lines = !this.showFuturepastdueorders_Lines;
        if(this.showFuturepastdueorders_Lines)
            this.btnFuturepastdueorders_Lines = "View Graph";
        else
            this.btnFuturepastdueorders_Lines = "View Data"; 
    }

    toggleLeadtimecheckorders_Lines() {
        this.showLeadtimecheckorders_Lines = !this.showLeadtimecheckorders_Lines;
        if(this.showLeadtimecheckorders_Lines)
            this.btnLeadtimecheckorders_Lines = "View Graph";
        else
            this.btnLeadtimecheckorders_Lines = "View Data"; 
    }

    toggleOpenPOorders_Values() {
        this.showOpenPOorders_Values = !this.showOpenPOorders_Values;
        if(this.showOpenPOorders_Values)
            this.btnOpenPOorders_Values = "View Graph";
        else
            this.btnOpenPOorders_Values = "View Data"; 
    }

    togglePastdueorders_Values() {
        this.showPastdueorders_Values = !this.showPastdueorders_Values;
        if(this.showPastdueorders_Values)
            this.btnPastdueorders_Values = "View Graph";
        else
            this.btnPastdueorders_Values = "View Data"; 
    }

    toggleAckneededorders_Values() {
        this.showAckneededorders_Values = !this.showAckneededorders_Values;
        if(this.showAckneededorders_Values)
            this.btnAckneededorders_Values = "View Graph";
        else
            this.btnAckneededorders_Values = "View Data"; 
    }

    toggleFuturepastdueorders_Values() {
        this.showFuturepastdueorders_Values = !this.showFuturepastdueorders_Values;
        if(this.showFuturepastdueorders_Values)
            this.btnFuturepastdueorders_Values = "View Graph";
        else
            this.btnFuturepastdueorders_Values = "View Data"; 
    }

    toggleLeadtimecheckorders_Values() {
        this.showLeadtimecheckorders_Values = !this.showLeadtimecheckorders_Values;
        if(this.showLeadtimecheckorders_Values)
            this.btnLeadtimecheckorders_Values = "View Graph";
        else
            this.btnLeadtimecheckorders_Values = "View Data"; 
    }

    processExport(records:any,heading:any) {
        this._apiService.isCompareLoader$.next(true);
        var headers = []
        this.columns.forEach((i: any) => headers.push(i.name))
    
        this.exporter.exportArrayToExcel(records,headers,heading,null,this.columns)
        this._apiService.isCompareLoader$.next(false)
    }

    toggle() {
        this.show = !this.show;
        //CHANGE THE NAME OF THE BUTTON.
        if(this.show)
          this.buttonName = "View Graph";
         else
          this.buttonName = "View Data"; 
      }
    //Second

    openDialog(executeData:any) {
        this.dialog.open(TrendlinesPomanagerLinechartComponent,
            {
                panelClass:'graph-style',
                data: {
                    executeData
                }
            }
        );
    }

    openDialogNew(heading:any,executeData:any) {
        this.dialog.open(PopupchartComponent,
            {
                panelClass:'graph-style',
                data: {
                    name:heading,
                    trendlinesPomanagerLineChartData: executeData,
                }
            }
        );
    }

}
