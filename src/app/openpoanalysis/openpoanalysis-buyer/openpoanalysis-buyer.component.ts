import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { api } from 'src/app/api.endpoints';
import { SendreportdialogComponent } from 'src/app/general/sendreportdialog/sendreportdialog.component';
import { NotificationService } from 'src/app/notification.service';
import { ExportToExcelService } from 'src/app/services/appService/exportToExcelService';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { OpenpoanalysisPiechartComponent } from '../openpoanalysis-piechart/openpoanalysis-piechart.component';
import { OpenpoanalysisBarchartComponent } from '../openpoanalysis-barchart/openpoanalysis-barchart.component';
import { PopupchartComponent } from '../../general/popupchart/popupchart.component';
import { MatOption } from '@angular/material/core';
import { ThirdPartyDraggable } from '@fullcalendar/interaction';
@Component({
    selector: 'app-openpoanalysis-buyer',
    templateUrl: './openpoanalysis-buyer.component.html',
    styleUrls: ['./openpoanalysis-buyer.component.css']
})
export class OpenpoanalysisBuyerComponent implements OnInit {
    totalRecords: any;

    @Output() eventDataEmitter = new EventEmitter();
    @ViewChild('allSelected') private allSelected: MatOption;
    public show: boolean = false;
    public buttonName: any = 'View Chart';

    allBuyers: any = [];
    allPlants: any = [];
    loggedInUser: any;
    columns: any = [];
    records: any = [];
    filters: any = {
        tenantId: '',
        plantCode: 'All',
        PageIndex: 1,
        PageSize: 20000,
        searchText: '',
        BuyerCode: ['ALL'],
        vendorCode: "N/A",
        bufferDays: 5,
        selfdefinedfuturedays: 14,
    }

    OpenPOValue: any = [];
    OpenPOValueChartShow: any = false;

    OpenPOLine: any = [];
    OpenPOLineChartShow: any = false;

    PastDuePOValue: any = [];
    PastDuePOValueChartShow: any = false;

    PastDuePOLine: any = [];
    PastDuePOLineChartShow: any = false;

    AckdNeededPOValue: any = [];
    AckdNeededPOValueChartShow: any = false;

    AckdNeededPOLine: any = [];
    AckdNeededPOLineChartShow: any = false;

    FuturePastPOValue: any = [];
    FuturePastPOValueChartShow: any = false;

    FuturePastPOLine: any = [];
    FuturePastPOLineChartShow: any = false;

    LeadTimeCheckPOValue: any = [];
    LeadTimeCheckPOValueChartShow: any = false;

    LeadTimeCheckPOLine: any = [];
    LeadTimeCheckPOLineChartShow: any = false;

    //For bar chart
    OpenPO: any = [];
    OpenPOBarChartShow: any = false;

    PastDuePO: any = [];
    PastDuePOBarChartShow: any = false;

    AckNeededPO: any = [];
    AckNeededPOBarChartShow: any = false;

    FuturePastPO: any = [];
    FuturePastPOBarChartShow: any = false;

    LeadTimeCheckPO: any = [];
    LeadTimeCheckPOBarChartShow: any = false;
    //For bar chart

    avrgTabelRecords: any = [];
    avrgTabelHeading: any = [];

    url: any = "";

    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    // allSelected = true;
    constructor(
        // public dialog:MatDialog
        private readonly dialog: MatDialog,
        private _apiService: GeneralApiService,
        private _notificationService: NotificationService,
        private cdr: ChangeDetectorRef,
        private exporter: ExportToExcelService
    ) { }

    ngOnInit(): void {


        var user = localStorage.getItem("userData")
        if (user)
            this.loggedInUser = JSON.parse(user)
        this.filters.tenantId = this.loggedInUser.tenantID;
        if (this.loggedInUser.vendorCode != null) {
            this.filters.vendorCode = this.loggedInUser.vendorCode;
        }
        this.callSettings();

    }

    previousArray = ['ALL']
    // onSelection(data: any) {
    //     if (this.filters.BuyerCode.length === 1 && this.filters.BuyerCode.includes('ALL')) this.previousArray.push('ALL');

    //     if (data.value.includes('ALL') && this.filters.BuyerCode.includes('ALL')) {
    //         if (this.filters.BuyerCode.length !== this.previousArray.length && this.filters.BuyerCode.length < this.previousArray.length) {
    //             this.filters.BuyerCode = this.filters.BuyerCode.filter((i: any) => i !== 'ALL')
    //             this.previousArray = this.filters.BuyerCode;
    //             return
    //         }


    //         this.filters.BuyerCode = []
    //         for (let index = 0; index < this.allBuyers.length; index++) {
    //             this.filters.BuyerCode.push(this.allBuyers[index].item_id)
    //             this.previousArray.push(this.allBuyers[index].item_id)
    //         }
    //     } else {
    //         if (this.previousArray.length !== this.filters.BuyerCode.length && (this.previousArray.includes('ALL'))) {
    //             this.filters.BuyerCode = [];
    //             this.previousArray = [];
    //         } else {
    //             this.previousArray = this.filters.BuyerCode
    //         }
    //     }
    //     this.cdr.detectChanges();
    // }

    onSelection(data: any) {
        if (this.filters.BuyerCode.length === 1 && this.filters.BuyerCode.includes('ALL')) this.previousArray.push('ALL');

        if (data.value.includes('ALL') && this.filters.BuyerCode.includes('ALL')) {
            if (this.filters.BuyerCode.length !== this.previousArray.length && this.filters.BuyerCode.length < this.previousArray.length) {
                this.filters.BuyerCode = this.filters.BuyerCode.filter((i: any) => i !== 'ALL')
                this.previousArray = this.filters.BuyerCode;
                return
            }


            // this.filters.BuyerCode = []
            // for (let index = 0; index < this.allBuyers.length; index++) {
            //     this.filters.BuyerCode.push(this.allBuyers[index].item_id)
            //     this.previousArray.push(this.allBuyers[index].item_id)
            // }

            this.filters.BuyerCode = ['ALL'];
            this.previousArray = ['ALL'];
            this.allBuyers.forEach((buyer: any) => {
                buyer.check = true;
            });


        } else {
            if (this.previousArray.length !== this.filters.BuyerCode.length && (this.previousArray.includes('ALL'))) {
                this.filters.BuyerCode = [];
                this.previousArray = [];
                this.allBuyers.forEach((buyer: any) => {
                    buyer.check = false;
                });
            } else {
                this.previousArray = this.filters.BuyerCode
            }
        }
        this.cdr.detectChanges();
    }

    callSettings() {
        this._apiService.isCompareLoader$.next(true)
        var url_query_params = api.ByDefaultSetting + '?tenantId=' + this.filters.tenantId + '&VendorCode=' + this.filters.vendorCode;
        this._apiService.get(url_query_params)
            .subscribe((res: any) => {
                // const indexToRemove = res.buyer.findIndex(item => item.item_id === "ALL" && item.item_text === "ALL");

                // // If the object is found, remove it
                // if (indexToRemove !== -1) {
                //     res.buyer.splice(indexToRemove, 1);
                // }


                this.allBuyers = res.buyer;
                // if (this.filters.BuyerCode.includes('ALL')) {
                //     this.filters.BuyerCode = this.allBuyers.map(buyer => buyer.item_id);
                // }
                this.allPlants = res.plant;
                this.filters.bufferDays = res.setting[0].bufferDays;
                this.filters.selfdefinedfuturedays = res.setting[0].selfDefinedFutureDays;
                this.eventDataEmitter.emit(res.setting)
                this.cdr.detectChanges();
                this.Search();
                // this._apiService.isCompareLoader$.next(false)
            },
                (error: any) => {
                    this._apiService.isCompareLoader$.next(false)
                })
    }

    changePlanCode() {
        this._apiService.isCompareLoader$.next(true)
        let plantCode = (this.filters.plantCode == 'All') ? 0 : this.filters.plantCode;
        var url_query_params = api.ByDefaultSetting + '?tenantId=' + this.filters.tenantId + '&PlantID=' + plantCode + '&VendorCode=' + this.filters.vendorCode;
        this._apiService.get(url_query_params)
            .subscribe((res: any) => {
                this.allBuyers = res.buyer;
                this.filters.BuyerCode = ['ALL'];

                // if (this.filters.BuyerCode.includes('ALL')) {
                //     this.filters.BuyerCode = this.allBuyers.map(buyer => buyer.item_id);
                // }

                this.cdr.detectChanges();

                this._apiService.isCompareLoader$.next(false)
            },
                (error: any) => {
                    this._apiService.isCompareLoader$.next(false)
                })
    }

    Search() {
        // console.log(this.filters);
        // return;
        this._apiService.isCompareLoader$.next(true)
        if (this.loggedInUser.vendorCode !== null) {
            this.filters.vendorCode = this.loggedInUser.vendorCode;
        }

        this.url = api.OpenPOAnalysisBuyer;

        var url_query_params = api.OpenPOAnalysisBuyer;
        if (this.filters !== null || this.filters !== undefined)
            url_query_params += '?';
        Object.keys(this.filters).map(key => {
            if (key == "BuyerCode") {
                let BuyerCode = this.filters.BuyerCode;
                if (this.filters.BuyerCode.includes('ALL')) {
                    BuyerCode = ['ALL'];
                }
                url_query_params += `${key}=${BuyerCode}&`;
            } else {
                url_query_params += `${key}=${this.filters[key]}&`;
            }

        });
        url_query_params = url_query_params.slice(0, -1);

        this._apiService.get(url_query_params)
            .subscribe((res: any) => {
                this.records = [];
                // if(res.data.length > 0){
                //     const keys = Object.keys(res.data[0]);
                //     const columns = keys.map(key => ({
                //         def: key,
                //         name: key.replace(/(?=[A-Z])(?=[A-Z][a-z])/g, ' ') // Add space before capital letters
                //                     .replace(/^./, str => str.toUpperCase()) // Capitalize the first letter
                //                     .trim(), // Remove any leading spaces
                //         // key: key,
                //         key: (i: any) => {
                //             const value = i[key]; // Get the value corresponding to the current key
                //             if (typeof value === 'number') {
                //                 // Format the value with commas
                //                 let getDollor = value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 });

                //                 // Check if the formatted value contains a comma
                //                 if (getDollor.includes(',')) {
                //                     // Add the dollar sign if a comma is present
                //                     getDollor = '$ ' + getDollor;
                //                 }

                //                 return getDollor;
                //             }
                //             return value; // Return the value unchanged if it's not a number

                //         },
                //         isSticky : key== 'BuyerCode' || key == 'BuyerName' ? true:false
                //     }));
                //     this.columns = columns;
                //     this.records = res.data;

                //     this.totalRecords = res.totalData[0]?.buyerCounts
                // }

                if (res.data.length > 0) {
                    const keys = Object.keys(res.data[0]);
                    const getDollarValue = [
                        "BuyerOpenPOValue",
                        "BuyerPastDuePOValue",
                        "BuyerAckNeededPOValue",
                        "BuyerFuturePastPOValue",
                        "BuyerLeadTimeCheckPOValue",
                    ];

                    const getBuyer = [
                        "BuyerOpenPOValuePer",
                    ]

            
                    const columns = keys.map(key => ({

                        
                        def: key,
                        // name: key = 'Per' ? key.replace(/per/i, '%') : key // Replace Per to %
                        name: key.replace(/Per$/, ' %') // Replace Per to %
                        .replace(/Po/, ' PO ') 
                        .replace(/PO/, ' PO ') 
                        .replace(/(?<=[a-z])(?=[A-Z][a-z])/g, ' ') 
                        // name: key.replace(/(?=[A-Z])(?=[A-Z][a-z])/g, ' ') // Add space before capital letters
                     
                        .replace(/^./, str => str.toUpperCase()) // Capitalize the first letter
                        .trim(), // Remove any leading spaces
                        key: (i: any) => {
                                // if(getBuyer.includes(key)){
                                //     key = key.replace("BuyerOpenPOValuePer", "BuyerOpenPOValue%");
                                // }
                                const value = i[key]; // Get the value corresponding to the current key
                                
                                // console.log(key)
                            
                
                            if (typeof value === 'number') {
                                // Format the value with commas
                                let formattedValue = value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 });
                
                                // Add the dollar sign if the column name is in the getDollarValue array
                                if (getDollarValue.includes(key)) {
                                    formattedValue = '$ ' + formattedValue;
                                }
                
                                return formattedValue;
                            }
                            return value; // Return the value unchanged if it's not a number
                        },
                        isSticky: key === 'BuyerCode' || key === 'BuyerName' ? true : false
                    }));




                    


                    this.columns = columns;
                    this.records = res.data;
                
                    this.totalRecords = res.totalData[0]?.buyerCounts;
                }
                

                //For avg
                this.avrgTabelHeading = [
                    {
                        def: 'buyerCounts',
                        name: 'Buyer Counts',
                        key: (i: any) => i.buyerCounts.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'averageOpenOrderValue',
                        name: 'Average Open Order Value',
                        key: (i: any) => '$ ' + i.averageOpenOrderValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'totalOpenOrderValue',
                        name: 'Total Open Order Value',
                        key: (i: any) => '$ ' + i.totalOpenOrderValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'averageOpenOrderLines',
                        name: 'Average Open Order Lines',
                        key: (i: any) => i.averageOpenOrderLines.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'totalOpenOrderLines',
                        name: 'Total Open Order Lines',
                        key: (i: any) => i.totalOpenOrderLines.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'averagePastdueOrderValue',
                        name: 'Average Pastdue Order Value',
                        key: (i: any) => '$ ' + i.averagePastdueOrderValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'totalpastduevaluePer',
                        name: 'Total pastdue value%',
                        key: (i: any) => i.totalpastduevaluePer.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'averagePastdueOrderLines',
                        name: 'Average Pastdue Order Lines',
                        key: (i: any) => i.averagePastdueOrderLines.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'totalPastduelinesPer',
                        name: 'Total Pastdue Lines%',
                        key: (i: any) => i.totalPastduelinesPer.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'averageckneededOrderValue',
                        name: 'Average ack needed Order Value',
                        key: (i: any) => '$ ' + i.averageckneededOrderValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'ackneededorderValuePer',
                        name: 'Ack needed order Value%',
                        key: (i: any) => i.ackneededorderValuePer.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'averageackneededorderLines',
                        name: 'Average ack needed order Lines',
                        key: (i: any) => i.averageackneededorderLines.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'ackneededorderlinesPer',
                        name: 'ack needed order lines%',
                        key: (i: any) => i.ackneededorderlinesPer.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'averagefuturepastdueOrderValue',
                        name: 'Average future pastdue Order Value',
                        key: (i: any) => '$ ' + i.averagefuturepastdueOrderValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'futurepastdueorderValuePer',
                        name: 'future pastdue order Value%',
                        key: (i: any) => i.futurepastdueorderValuePer.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'averageFuturePastdueOrderLines',
                        name: 'Average future pastdue order Lines',
                        key: (i: any) => i.averageFuturePastdueOrderLines.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'futurePastdueOrderLinesPer',
                        name: 'future pastdue order lines%',
                        key: (i: any) => i.futurePastdueOrderLinesPer.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'averageLeadTimeCheckValue',
                        name: 'Average LeadTime Check Value',
                        key: (i: any) => '$ ' + i.averageLeadTimeCheckValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'futureLeadTimeCheckValuePer',
                        name: 'future LeadTime Check  Value%',
                        key: (i: any) => i.futureLeadTimeCheckValuePer.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'averageLeadTimeCheckLines',
                        name: 'Average LeadTime Check  Lines',
                        key: (i: any) => i.averageLeadTimeCheckLines.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'futureLeadTimeChecklinesPer',
                        name: 'future LeadTime Check lines%',
                        key: (i: any) => i.futureLeadTimeChecklinesPer.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    }
                ];

                // Check if any column heading includes 'value'
                // this.avrgTabelHeading.forEach(column => {
                //     if (column.name.toLowerCase().includes('value')) {
                //         column.key = (i: any) => '$ ' + i[column.def].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 });
                //     }
                // });

                this.avrgTabelRecords = res.totalData
                //For avg


                this.OpenPOValue = [];
                this.OpenPOValueChartShow = false;

                this.OpenPOLine = [];
                this.OpenPOLineChartShow = false;

                this.PastDuePOValue = [];
                this.PastDuePOValueChartShow = false;

                this.PastDuePOLine = [];
                this.PastDuePOLineChartShow = false;

                this.AckdNeededPOValue = [];
                this.AckdNeededPOValueChartShow = false;

                this.AckdNeededPOLine = [];
                this.AckdNeededPOLineChartShow = false;

                this.FuturePastPOValue = [];
                this.FuturePastPOValueChartShow = false;

                this.FuturePastPOLine = [];
                this.FuturePastPOLineChartShow = false;

                this.LeadTimeCheckPOValue = [];
                this.LeadTimeCheckPOValueChartShow = false;

                this.LeadTimeCheckPOLine = [];
                this.LeadTimeCheckPOLineChartShow = false;

                this.OpenPO = [];
                this.OpenPOBarChartShow = false;

                this.PastDuePO = [];
                this.PastDuePOBarChartShow = false;

                this.AckNeededPO = [];
                this.AckNeededPOBarChartShow = false;

                this.FuturePastPO = [];
                this.FuturePastPOBarChartShow = false;

                this.LeadTimeCheckPO = [];
                this.LeadTimeCheckPOBarChartShow = false;

                res.data.forEach((item: any) => {
                    // console.log(item)
                    let OpenPOValue = {
                        name: item['BuyerName'],
                        val: item['BuyerOpenPOValue']
                    }
                    if (item['BuyerOpenPOValue'] > 0) {
                        this.OpenPOValueChartShow = true;
                    }
                    this.OpenPOValue.push(OpenPOValue)

                    let OpenPOLine = {
                        name: item['BuyerName'],
                        val: item['BuyerOpenPOLine']
                    }
                    if (item['BuyerOpenPOLine'] > 0) {
                        this.OpenPOLineChartShow = true;
                    }
                    this.OpenPOLine.push(OpenPOLine)

                    //For bar chart
                    let OpenPO = {
                        name: item['BuyerName'],
                        value: item['BuyerOpenPOValuePer'],
                        line: item['BuyerOpenPoLinePer']
                    }
                    if ((this.OpenPOBarChartShow == false) && (item['BuyerOpenPOValuePer'] > 0 || item['BuyerOpenPoLinePer'] > 0)) {
                        this.OpenPOBarChartShow = true;
                    }
                    this.OpenPO.push(OpenPO);
                    //For bar chart

                    let PastDuePOValue = {
                        name: item['BuyerName'],
                        val: item['BuyerPastDuePOValue']
                    }
                    if (item['BuyerPastDuePOValue'] > 0) {
                        this.PastDuePOValueChartShow = true;
                    }
                    this.PastDuePOValue.push(PastDuePOValue)

                    let PastDuePOLine = {
                        name: item['BuyerName'],
                        val: item['BuyerPastDuePOLine']
                    }
                    if (item['BuyerPastDuePOLine'] > 0) {
                        this.PastDuePOLineChartShow = true;
                    }
                    this.PastDuePOLine.push(PastDuePOLine)

                    //For bar chart
                    let PastDuePO = {
                        name: item['BuyerName'],
                        value: item['BuyerPastDuePoValuePer'],
                        line: item['BuyerPastDuePoLinePer']
                    }
                    if ((this.PastDuePOBarChartShow == false) && (item['BuyerPastDuePoValuePer'] > 0 || item['BuyerPastDuePoLinePer'] > 0)) {
                        this.PastDuePOBarChartShow = true;
                    }
                    this.PastDuePO.push(PastDuePO);
                    //For bar chart


                    let AckdNeededPOValue = {
                        name: item['BuyerName'],
                        val: item['BuyerAckNeededPOValue']
                    }
                    if (item['BuyerAckNeededPOValue'] > 0) {
                        this.AckdNeededPOValueChartShow = true;
                    }
                    this.AckdNeededPOValue.push(AckdNeededPOValue)

                    let AckdNeededPOLine = {
                        name: item['BuyerName'],
                        val: item['BuyerAckNeededPOLine']
                    }
                    if (item['BuyerAckNeededPOLine'] > 0) {
                        this.AckdNeededPOLineChartShow = true;
                    }
                    this.AckdNeededPOLine.push(AckdNeededPOLine)

                    //For bar chart
                    let AckNeededPO = {
                        name: item['BuyerName'],
                        value: item['BuyerAckNeededPoValuePer'],
                        line: item['BuyerAckNeededPoLinePer']
                    }
                    if ((this.AckNeededPOBarChartShow == false) && (item['BuyerAckNeededPoValuePer'] > 0 || item['BuyerAckNeededPoLinePer'] > 0)) {
                        this.AckNeededPOBarChartShow = true;
                    }
                    this.AckNeededPO.push(AckNeededPO);
                    //For bar chart

                    let FuturePastPOValue = {
                        name: item['BuyerName'],
                        val: item['BuyerFuturePastPOValue']
                    }
                    if (item['BuyerFuturePastPOValue'] > 0) {
                        this.FuturePastPOValueChartShow = true;
                    }
                    this.FuturePastPOValue.push(FuturePastPOValue)

                    let FuturePastPOLine = {
                        name: item['BuyerName'],
                        val: item['BuyerFuturePastPOLine']
                    }
                    if (item['BuyerFuturePastPOLine'] > 0) {
                        this.FuturePastPOLineChartShow = true;
                    }
                    this.FuturePastPOLine.push(FuturePastPOLine)
                    //For bar chart
                    let FuturePastPO = {
                        name: item['BuyerName'],
                        value: item['BuyerFuturePastPoValuePer'],
                        line: item['BuyerFuturePastPoLinePer']
                    }
                    if ((this.FuturePastPOBarChartShow == false) && (item['BuyerFuturePastPoValuePer'] > 0 || item['BuyerFuturePastPoLinePer'] > 0)) {
                        this.FuturePastPOBarChartShow = true;
                    }
                    this.FuturePastPO.push(FuturePastPO);
                    //For bar chart


                    let LeadTimeCheckPOValue = {
                        name: item['BuyerName'],
                        val: item['BuyerLeadTimeCheckPOValue']
                    }
                    if (item['BuyerLeadTimeCheckPOValue'] > 0) {
                        this.LeadTimeCheckPOValueChartShow = true;
                    }
                    this.LeadTimeCheckPOValue.push(LeadTimeCheckPOValue)

                    let LeadTimeCheckPOLine = {
                        name: item['BuyerName'],
                        val: item['BuyerLeadTimeCheckPOLine']
                    }
                    if (item['BuyerLeadTimeCheckPOLine'] > 0) {
                        this.LeadTimeCheckPOLineChartShow = true;
                    }
                    this.LeadTimeCheckPOLine.push(LeadTimeCheckPOLine)

                    //For bar chart
                    let LeadTimeCheckPO = {
                        name: item['BuyerName'],
                        value: item['BuyerLeadTimeCheckPoValuePer'],
                        line: item['BuyerLeadTimeCheckPoLinePer']
                    }
                    if ((this.LeadTimeCheckPOBarChartShow == false) && (item['BuyerLeadTimeCheckPoValuePer'] > 0 || item['BuyerLeadTimeCheckPoLinePer'] > 0)) {
                        this.LeadTimeCheckPOBarChartShow = true;
                    }
                    this.LeadTimeCheckPO.push(LeadTimeCheckPO);
                    //For bar chart

                });
                this.cdr.detectChanges()
                this._notificationService.push("Data retrieved", 1)
                this._apiService.isCompareLoader$.next(false)
            },
                (error: any) => {
                    this._apiService.isCompareLoader$.next(false)
                })
    }

    openPieChartDialog(executeData: any) {
        this.dialog.open(OpenpoanalysisPiechartComponent,
            {
                panelClass: 'graph-style',
                data: {
                    executeData
                }
            });
    }

    openBarChartDialog(executeData: any) {
        this.dialog.open(OpenpoanalysisBarchartComponent,
            {
                panelClass: 'graph-style',
                data: {
                    executeData
                }
            });
    }

    openBarChartDialogNew(heading: any, executeData: any) {
        this.dialog.open(PopupchartComponent,
            {
                panelClass: 'graph-style',
                data: {
                    name: heading,
                    openpoanalysisBarChartData: executeData,
                }
            });
    }

    openPieChartDialogNew(heading: any, executeData: any) {
        this.dialog.open(PopupchartComponent,
            {
                panelClass: 'graph-style',
                data: {
                    name: heading,
                    openpoanalysisPieChartData: executeData,
                }
            });
    }

    //View Chart Button  
    toggle() {
        this.show = !this.show;
        //CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "Hide Chart";
        else
            this.buttonName = "View Chart";
    }

    processExport() {
        this._apiService.isCompareLoader$.next(true);
        var headers = []
        this.columns.forEach((i: any) => headers.push(i.name))

        this.exporter.exportArrayToExcel(this.records, headers, "Open PO Analysis", null, this.columns)
        this._apiService.isCompareLoader$.next(false)
    }

}
