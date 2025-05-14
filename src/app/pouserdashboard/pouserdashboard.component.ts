import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CurrentOpenPoStatusTablegraphDialogComponent } from '../general/current-open-po-status-tablegraph-dialog/current-open-po-status-tablegraph-dialog.component';
import { VendortotalCoregraphDialogComponent } from '../general/vendortotal-coregraph-dialog/vendortotal-coregraph-dialog.component';
import { GeneralApiService } from '../services/appService/generalApiService';
import { NotificationService } from '../notification.service';
import { ExportToExcelService } from '../services/appService/exportToExcelService';
import { api } from '../api.endpoints';
import { BarComponent } from '../charts/apex/bar/bar.component';
import { PouserdashboardLinechartComponent } from './pouserdashboard-linechart/pouserdashboard-linechart.component';
import { PopupchartComponent } from '../general/popupchart/popupchart.component';
@Component({
  selector: 'app-pouserdashboard',
  templateUrl: './pouserdashboard.component.html',
  styleUrls: ['./pouserdashboard.component.css']
})
export class PouserdashboardComponent implements OnInit {
    constructor(
        private readonly dialog: MatDialog,
        private _apiService: GeneralApiService,
        private _notificationService:NotificationService,
        private cdr : ChangeDetectorRef,
        private exporter: ExportToExcelService
    ) { }

    public show:boolean = false;
    public show2:boolean = false;
    public buttonName:any = 'View Data';
    public buttonName2:any = 'View Data';
    
    
    public showCards:boolean = false;
    public showTable = false;
    loggedInUser : any;
    filters:any={
        tenantId:'',
        days:14,
        selfdefinedfuturedays:14,
        currentMonth:false,
        currentYear:true,
        vendorCode : "N/A",
        avgDays:5,
       
        
    }
    public cardDays:any= 14;
    public selectFilter:any = "currentYear";
    public result:any = [];
    public resultGraph:any = [];
    public performanceData:any = [];

    openPoLineColumns:any[] | null = [];
    openPoLineTotalRecords: any;
    openPoLineRecords : any = {};
    
    public allOpenPO_all_Spend:any;

    public exportReportName = "";
    public changeAvgDaysDisabled = false;
    public columns = [
        {
            def: 'id',
            name: 'Buyer Code',
            key: 'id',
           
        },{
            def: 'name',
            name: 'Buyer Name',
            key: 'name',
           
        },
    ];
    ngOnInit(): void {
     

        var user = localStorage.getItem("userData")
        if(user)
            this.loggedInUser = JSON.parse(user)
            if(this.loggedInUser.vendorCode != null){
                this.changeAvgDaysDisabled = true;
            }
            this.filters.tenantId = this.loggedInUser.tenantID;
            this.callSettings();
            this.getFuturDays();
            this.changeCardDays();  
    }

    getFuturDays(){
        this._apiService.isCompareLoader$.next(true)
      
        this._apiService.get(api.ByDefaultSetting+'?tenantId='+this.filters.tenantId)
            .subscribe((res:any)=>{
                this.filters.days =  res.setting[0].selfDefinedFutureDays;
                //  console.log(this.filters.days + ' days value')
                this.cardDays = res.setting[0].selfDefinedFutureDays;
                this.callDashboard();
            },
            (error:any)=>{
                this._apiService.isCompareLoader$.next(false)
            })
    }

    callSettings(){
        this._apiService.isCompareLoader$.next(true)
        var url_query_params    =   api.GetDaysFromSetting+'?tenantId='+this.filters.tenantId;
        this._apiService.get(url_query_params)
            .subscribe((res:any)=>{
               // this.filters.days = res.setting.selfDefinedFutureDays;
               // this.cardDays = res.setting.selfDefinedFutureDays;
                // this.callDashboardGraph();
                this.callDashboard();
            },
            (error:any)=>{
                this._apiService.isCompareLoader$.next(false)
            })
    }

    callDashboard(){
        if(this.loggedInUser.vendorCode !== null){
            this.filters.vendorCode = this.loggedInUser.vendorCode; 
        }

        var url_query_params    =   api.POMangerDashBoard;
        if (this.filters !== null || this.filters !== undefined) {
            url_query_params += '?';
            Object.keys(this.filters).map(key => {
                url_query_params += `${key}=${this.filters[key]}&`;
            });
            url_query_params =    url_query_params.slice(0, -1);
        }

        this.resultGraph = null; 
        var url_query_params1    =   api.POManagerDashboardGraph;
        if (this.filters !== null || this.filters !== undefined) {
            url_query_params1 += '?';
            Object.keys(this.filters).map(key => {
                url_query_params1 += `${key}=${this.filters[key]}&`;
            });
            url_query_params1 =    url_query_params1.slice(0, -1);
        }
        
        var url_query_params2    =   api.DashboardPerformanceChart+"?Days="+this.filters.avgDays+"&TenantId="+this.filters.tenantId+"&selfdefinedfuturedays="+this.filters.selfdefinedfuturedays+"&VendorCode="+this.filters.vendorCode;
        
        Promise.all([
            this._apiService.get(url_query_params).toPromise(),
            this._apiService.get(url_query_params1).toPromise(),
            this._apiService.get(url_query_params2).toPromise()
        ]).then((res:any)=>{

            if(!res) return
            this.result = res[0];
            this.showCards = true;
            
            this.resultGraph = res[1];

            this.performanceData = res[2]?.data;
            this._apiService.isCompareLoader$.next(false)
            this.cdr.detectChanges()
        }).catch((e:any)=>{
            this._notificationService.push("Data set not valid", 2);
            this._apiService.isCompareLoader$.next(false)
        }).finally(()=>{
            this._apiService.isCompareLoader$.next(false) 
        });
    }

    changeAvgDays(){
        if(this.filters.avgDays < 1){
            this._notificationService.push("Enter minimum 1 day.", 2);
            return; 
        }

        this._apiService.isCompareLoader$.next(true)
        var url_query_params2    =   api.DashboardPerformanceChart+"?Days="+this.filters.avgDays+"&TenantId="+this.filters.tenantId+"&selfdefinedfuturedays="+this.filters.selfdefinedfuturedays+"&VendorCode="+this.filters.vendorCode;
        this._apiService.get(url_query_params2)
            .subscribe((res:any)=>{
                this.performanceData = res.data;
                this._apiService.isCompareLoader$.next(false)
            },
            (error:any)=>{
                this._apiService.isCompareLoader$.next(false)
            })
    }
    
    changeCardDays(){

        
        this._apiService.isCompareLoader$.next(true)
        this.filters.days = this.cardDays
        this.filters.selfdefinedfuturedays = this.cardDays
        if(this.selectFilter == "currentMonth") {
            this.filters.currentMonth = true;
            this.filters.currentYear = false;
        } else {
            this.filters.currentMonth = false;
            this.filters.currentYear = true;
        }
        
        this.callDashboard();
        // this.callDashboardGraph();
    }
    
    exportDetailReport() {
        if(this.exportReportName != ""){
            this._apiService.isCompareLoader$.next(true)
            
            if(this.loggedInUser.vendorCode !== null){
                this.filters.vendorCode = this.loggedInUser.vendorCode; 
            }
    
            var url_query_params    =   api.DashboardDownloadFiles;
            if (this.filters !== null || this.filters !== undefined)
                url_query_params += '?DropdownOption='+this.exportReportName+"&";
                Object.keys(this.filters).map(key => {
                    url_query_params += `${key}=${this.filters[key]}&`;
                });
                url_query_params =    url_query_params.slice(0, -1);
                let exportColumns = [];
                this._apiService.get(url_query_params)
                    .subscribe((res:any)=>{
                        var headers = [
                            'PO Number',
                            'Line',
                            'Vendor',
                            'Vendor Name',
                            'PO Create Date',
                            'Material Description',
                            'Order Quantity',
                            'Qty Delivered',
                            'Unit Price',
                            'Delivery Date',
                            'FirstPromisedDate',
                            'Currency',
                            'Order Unit',
                            'Purchase Group',
                            'Plant',
                            'Acknowledgement date',
                            'Lead time',
                            'Material'
                            // 'tenantID'
                        ]
                    
                        res.data.forEach(items => {
                            if(exportColumns.length < 1) {
                                for (let item in items) {
                                    let col = {
                                        'def':  item,
                                        'key':  item
                                    }
                                    // headers.push(item);
                                    exportColumns.push(col);
                                }
                            }
                        });
                        this.exporter.exportArrayToExcel(res.data,headers,this.exportReportName,null,exportColumns)
                        this._apiService.isCompareLoader$.next(false)
                    },
                    (error:any)=>{
                        this._apiService.isCompareLoader$.next(false)
                    })
        }
    }

    openPouserdashboardLinechart(heading:any,executeData:any,chartFor:any){
        this.dialog.open(PopupchartComponent,
            {
                panelClass:'graph-style',
                data: {
                    name:heading,
                    dashboardLineChartData: executeData,
                    chartFor:chartFor
                }
            }
        );
        // this.dialog.open(PouserdashboardLinechartComponent,
        //     {
        //         panelClass:'graph-style',
        //         data: {
        //             executeData,
        //             chartFor
        //         }
        //     }
        // );
    }

    // openBarComponentDialog(chartData,chartFor) {
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
    
    openBarComponentDialog(heading:any,executeData:any,chartFor:any) {
        this.dialog.open(PopupchartComponent,
            {
                panelClass:'graph-style',
                data: {
                    name:heading,
                    dashboardBarChartData: executeData,
                    chartFor:chartFor
                }
            }
        );
    }

    // callDashboardGraph(){

    //     if(this.loggedInUser.vendorCode !== null){
    //         this.filters.vendorCode = this.loggedInUser.vendorCode; 
    //     }

    //     this.resultGraph = null; 
    //     var url_query_params    =   api.POManagerDashboardGraph;
    //     if (this.filters !== null || this.filters !== undefined)
    //         url_query_params += '?';
    //         Object.keys(this.filters).map(key => {
    //             url_query_params += `${key}=${this.filters[key]}&`;
    //         });
    //         url_query_params =    url_query_params.slice(0, -1);
    //     this._apiService.get(url_query_params)
    //         .subscribe((res:any)=>{
    //             this.resultGraph = res;
    //             // this.showCards = true;
    //             this._apiService.isCompareLoader$.next(false)
    //         },
    //         (error:any)=>{
    //             this._apiService.isCompareLoader$.next(false)
    //         })
    // }
}
