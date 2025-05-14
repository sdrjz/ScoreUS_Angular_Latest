import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { api } from 'src/app/api.endpoints';
import { NotificationService } from 'src/app/notification.service';
import { ExportToExcelService } from 'src/app/services/appService/exportToExcelService';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { OpenpoanalysisPiechartComponent } from '../openpoanalysis-piechart/openpoanalysis-piechart.component';
import { OpenpoanalysisBarchartComponent } from '../openpoanalysis-barchart/openpoanalysis-barchart.component';
import { PopupchartComponent } from '../../general/popupchart/popupchart.component';

@Component({
    selector: 'app-openpoanalysis-vendor',
    templateUrl: './openpoanalysis-vendor.component.html',
    styleUrls: ['./openpoanalysis-vendor.component.css']
})
export class OpenpoanalysisVendorComponent implements OnInit {
    public show: boolean = false;
    public buttonName: any = 'View Chart';

    allVendors: any = [];
    allPlants: any = [];
    loggedInUser: any;
    columns: any = [];
    records: any = [];
    filters: any = {
        tenantId: '',
        plantCode: 'All',
        PageIndex: 1,
        PageSize: 10000000,
        searchText: '',
        VendorCode:"N/A",
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
    OpenPONoRecord: any = true;

    PastDuePO: any = [];
    PastDuePONoRecord: any = true;

    AckNeededPO: any = [];
    AckNeededPONoRecord: any = true;

    FuturePastPO: any = [];
    FuturePastPONoRecord: any = true;

    LeadTimeCheckPO: any = [];
    LeadTimeCheckPONoRecord: any = true;
    //For bar chart

    avrgTabelRecords: any = [];
    avrgTabelHeading: any = [];

    url: any = "";
    totalRecords: any = 0;

    constructor(
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

        if (this.loggedInUser.vendorCode !== null)
            this.filters.VendorCode = this.loggedInUser.vendorCode;

        this.callSettings();
    }

    callSettings() {
        this._apiService.isCompareLoader$.next(true)
        var url_query_params = api.ByDefaultSetting + '?tenantId=' + this.filters.tenantId + '&VendorCode=' + this.filters.VendorCode;
        this._apiService.get(url_query_params)
            .subscribe((res: any) => {
                this.allVendors = res.vendor;
                this.filters.VendorCode = ['ALL'];
                // if (this.filters.VendorCode.includes('ALL')) {
                //     this.filters.VendorCode = this.allVendors.map(buyer => buyer.item_id);
                // }

                this.allPlants = res.plant;
                this.filters.bufferDays = res.setting[0].bufferDays;
                this.filters.selfdefinedfuturedays = res.setting[0].selfDefinedFutureDays;
                this.cdr.detectChanges();
                this.Search();
                this._apiService.isCompareLoader$.next(false)
            },
                (error: any) => {
                    this._apiService.isCompareLoader$.next(false)
                })
    }

    previousArray = ['ALL']
    onSelection(data: any) {
        if (this.filters.VendorCode.length === 1 && this.filters.VendorCode.includes('ALL')) this.previousArray.push('ALL');

        if (data.value.includes('ALL') && this.filters.VendorCode.includes('ALL')) {

            if (this.filters.VendorCode.length !== this.previousArray.length && this.filters.VendorCode.length < this.previousArray.length) {
                this.filters.VendorCode = this.filters.VendorCode.filter((i: any) => i !== 'ALL')
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
            if (this.previousArray.length !== this.filters.VendorCode.length && (this.previousArray.includes('ALL'))) {
                this.filters.VendorCode = [];
                this.previousArray = [];
                 // Mark all buyers as checked
             this.allVendors.forEach((vendor: any) => {
                vendor.check = false;
            });
            }
            else {

                this.previousArray = this.filters.VendorCode
            }
        }
        this.cdr.detectChanges();
    }
    

    changePlanCode() {
        this._apiService.isCompareLoader$.next(true)
        let plantCode = (this.filters.plantCode == 'All') ? 0 : this.filters.plantCode;
        var url_query_params = api.ByDefaultSetting + '?tenantId=' + this.filters.tenantId + '&PlantID=' + plantCode + '&VendorCode=' + this.filters.vendorCode;
        this._apiService.get(url_query_params)
            .subscribe((res: any) => {
                this.allVendors = res.vendor;
                this.cdr.detectChanges();

                this._apiService.isCompareLoader$.next(false)
            },
                (error: any) => {
                    this._apiService.isCompareLoader$.next(false)
                })
    }

    Search() {
        this._apiService.isCompareLoader$.next(true)

        var url_query_params = api.OpenPOAnalysisVendor;
        if (this.filters !== null || this.filters !== undefined)
            url_query_params += '?';
        Object.keys(this.filters).map(key => {
            if (key == "VendorCode") {
                let VendorCode = this.filters.VendorCode;
                if (this.filters.VendorCode.includes('ALL')) {
                    this.filters.VendorCode = ['ALL'];
                }
                url_query_params += `${key}=${VendorCode}&`;
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

                //                 let getDollar = value.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 3}); // Format the value if it's a number

                //                 if(getDollar.includes(',')){
                //                     getDollar = '$ ' + getDollar
                //                 }

                //                 return getDollar;



                //             }
                //             return value; // Return the value unchanged if it's not a number
                //         },
                //         isSticky : key == 'VendorCode' || key == 'VendorName' ? true:false
                //     }));
                //     this.columns = columns;
                //     this.cdr.detectChanges()
                //     this.records = res.data;
                //     this.totalRecords = res.totalData[0]?.vendorCounts
                // }


                if (res.data.length > 0) {
                    const keys = Object.keys(res.data[0]);

                    const getDollarValue = [
                        "VendorOpenPOValue",
                        "VendorPastDuePOValue",
                        "VendorAckNeededPOValue",
                        "VendorFuturePastPOValue",
                        "VendorLeadTimeCheckPOValue",
                    ];
                    const columns = keys.map(key => {
                        console.log(key); // Debugging line to check key values
                        return {
                            def: key,
                            name: key.replace(/Per$/, ' %')
                                .replace(/Po/, ' PO ')
                                .replace(/PO/, ' PO ')
                                .replace(/(?<=[a-z])(?=[A-Z][a-z])/g, ' ')
                                .replace(/^./, str => str.toUpperCase())
                                .trim(),
                            key: (i) => {
                                const value = i[key];
                                if (typeof value === 'number') {
                                    let formattedValue = value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 });
                                    if (getDollarValue.includes(key)) {
                                        formattedValue = '$ ' + formattedValue;
                                    }
                                    return formattedValue;
                                }
                                //console.log('Current Key:', key);
                                return value;
                            },
                            
                        isSticky: key === 'VendorName' || key === 'VendorCode' ? true : false

                            
                        };
                        
                    });
                    
                    
                    this.columns = columns;
                    this.records = res.data;

                    this.totalRecords = res.totalData[0]?.buyerCounts;
                }

                //For avg
                this.avrgTabelHeading = [
                    {
                        def: 'vendorCounts',
                        name: 'Vendor Counts',
                        key: (i: any) => i.vendorCounts.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 })
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
                        name: 'Total Pastdue value%',
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
                        name: 'Ack needed order lines%',
                        key: (i: any) => i.ackneededorderlinesPer.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'averagefuturepastdueOrderValue',
                        name: 'Average future pastdue Order Value',
                        key: (i: any) => '$ ' + i.averagefuturepastdueOrderValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'futurepastdueorderValuePer',
                        name: 'Future pastdue order Value%',
                        key: (i: any) => i.futurepastdueorderValuePer.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'averageFuturePastdueOrderLines',
                        name: 'Average future pastdue order Lines',
                        key: (i: any) => i.averageFuturePastdueOrderLines.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'futurePastdueOrderLinesPer',
                        name: 'Future pastdue order lines%',
                        key: (i: any) => i.futurePastdueOrderLinesPer.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'averageLeadTimeCheckValue',
                        name: 'Average LeadTime Check Value',
                        key: (i: any) => '$ ' + i.averageLeadTimeCheckValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'futureLeadTimeCheckValuePer',
                        name: 'Future LeadTime Check  Value%',
                        key: (i: any) => i.futureLeadTimeCheckValuePer.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'averageLeadTimeCheckLines',
                        name: 'Average LeadTime Check  Lines',
                        key: (i: any) => i.averageLeadTimeCheckLines.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }),
                    },
                    {
                        def: 'futureLeadTimeChecklinesPer',
                        name: 'Future LeadTime Check lines%',
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
                this.OpenPONoRecord = true;

                this.PastDuePO = [];
                this.PastDuePONoRecord = true;

                this.AckNeededPO = [];
                this.AckNeededPONoRecord = true;

                this.FuturePastPO = [];
                this.FuturePastPONoRecord = true;

                this.LeadTimeCheckPO = [];
                this.LeadTimeCheckPONoRecord = true;

                res.data.forEach(item => {

                    let OpenPOValue = {
                        name: item['VendorName'],
                        val: item['VendorOpenPOValue']
                    }
                    if (item['VendorOpenPOValue'] > 0) {
                        this.OpenPOValueChartShow = true;
                    }
                    this.OpenPOValue.push(OpenPOValue)

                    let OpenPOLine = {
                        name: item['VendorName'],
                        val: item['VendorOpenPOLine']
                    }
                    if (item['VendorOpenPOLine'] > 0) {
                        this.OpenPOLineChartShow = true;
                    }
                    this.OpenPOLine.push(OpenPOLine)

                    let PastDuePOValue = {
                        name: item['VendorName'],
                        val: item['VendorPastDuePOValue']
                    }
                    if (item['VendorPastDuePOValue'] > 0) {
                        this.PastDuePOValueChartShow = true;
                    }
                    this.PastDuePOValue.push(PastDuePOValue)

                    let PastDuePOLine = {
                        name: item['VendorName'],
                        val: item['VendorPastDuePOLine']
                    }
                    if (item['VendorPastDuePOLine'] > 0) {
                        this.PastDuePOLineChartShow = true;
                    }
                    this.PastDuePOLine.push(PastDuePOLine)

                    let AckdNeededPOValue = {
                        name: item['VendorName'],
                        val: item['VendorAckNeededPOValue']
                    }
                    if (item['VendorAckNeededPOValue'] > 0) {
                        this.AckdNeededPOValueChartShow = true;
                    }
                    this.AckdNeededPOValue.push(AckdNeededPOValue)

                    let AckdNeededPOLine = {
                        name: item['VendorName'],
                        val: item['VendorAckNeededPOLine']
                    }
                    if (item['VendorAckNeededPOLine'] > 0) {
                        this.AckdNeededPOLineChartShow = true;
                    }
                    this.AckdNeededPOLine.push(AckdNeededPOLine)

                    let FuturePastPOValue = {
                        name: item['VendorName'],
                        val: item['VendorFuturePastPOValue']
                    }
                    if (item['VendorFuturePastPOValue'] > 0) {
                        this.FuturePastPOValueChartShow = true;
                    }
                    this.FuturePastPOValue.push(FuturePastPOValue)

                    let FuturePastPOLine = {
                        name: item['VendorName'],
                        val: item['VendorFuturePastPOLine']
                    }
                    if (item['VendorFuturePastPOLine'] > 0) {
                        this.FuturePastPOLineChartShow = true;
                    }
                    this.FuturePastPOLine.push(FuturePastPOLine)

                    let LeadTimeCheckPOValue = {
                        name: item['VendorName'],
                        val: item['VendorLeadTimeCheckPOValue']
                    }
                    if (item['VendorLeadTimeCheckPOValue'] > 0) {
                        this.LeadTimeCheckPOValueChartShow = true;
                    }
                    this.LeadTimeCheckPOValue.push(LeadTimeCheckPOValue)

                    let LeadTimeCheckPOLine = {
                        name: item['VendorName'],
                        val: item['VendorLeadTimeCheckPOLine']
                    }
                    if (item['VendorLeadTimeCheckPOLine'] > 0) {
                        this.LeadTimeCheckPOLineChartShow = true;
                    }
                    this.LeadTimeCheckPOLine.push(LeadTimeCheckPOLine)

                    //For bar chart
                    let OpenPO = {
                        name: item['VendorName'],
                        value: item['VendorOpenPoValuePer'],
                        line: item['VendorOpenPoLinePer']
                    }
                    if (item['VendorOpenPoValuePer'] > 0 || item['VendorOpenPoLinePer'] > 0) {
                        this.OpenPONoRecord = false;
                    }
                    this.OpenPO.push(OpenPO);

                    let PastDuePO = {
                        name: item['VendorName'],
                        value: item['VendorPastDuePoValuePer'],
                        line: item['VendorPastDuePoLinePer']
                    }
                    if (item['VendorPastDuePoValuePer'] > 0 || item['VendorPastDuePoLinePer'] > 0) {
                        this.PastDuePONoRecord = false;
                    }
                    this.PastDuePO.push(PastDuePO);

                    let AckNeededPO = {
                        name: item['VendorName'],
                        value: item['VendorAckNeededPoValuePer'],
                        line: item['VendorAckNeededPoLinePer']
                    }
                    if (item['VendorAckNeededPoValuePer'] > 0 || item['VendorAckNeededPoLinePer'] > 0) {
                        this.AckNeededPONoRecord = false;
                    }
                    this.AckNeededPO.push(AckNeededPO);

                    let FuturePastPO = {
                        name: item['VendorName'],
                        value: item['VendorFuturePastPoValuePer'],
                        line: item['VendorFuturePastPoLinePer']
                    }
                    if (item['VendorFuturePastPoValuePer'] > 0 || item['VendorFuturePastPoLinePer'] > 0) {
                        this.FuturePastPONoRecord = false;
                    }
                    this.FuturePastPO.push(FuturePastPO);

                    let LeadTimeCheckPO = {
                        name: item['VendorName'],
                        value: item['VendorLeadTimeCheckPoValuePer'],
                        line: item['VendorLeadTimeCheckPoLinePer']
                    }
                    if (item['VendorLeadTimeCheckPoValuePer'] > 0 || item['VendorLeadTimeCheckPoLinePer'] > 0) {
                        this.LeadTimeCheckPONoRecord = false;
                    }
                    this.LeadTimeCheckPO.push(LeadTimeCheckPO);
                    //For bar chart

                });

                this.cdr.detectChanges()
                this._notificationService.push("Data retrieved for vendor", 1)
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
