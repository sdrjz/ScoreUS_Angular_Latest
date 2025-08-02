import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core'; 
import { MatDialog } from '@angular/material/dialog';
import { api } from '../api.endpoints';
import { VendortotalCoregraphDialogComponent } from '../general/vendortotal-coregraph-dialog/vendortotal-coregraph-dialog.component';
import { GeneralApiService } from '../services/appService/generalApiService';
import { NotificationService } from '../notification.service';
import { twoLineChartModel } from '../modal/twoLinseChartDataModel';
import { PopupchartComponent } from '../general/popupchart/popupchart.component';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-maindashboard',
    templateUrl: './maindashboard.component.html',
    styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {
    currentData: any
    previousData: any
    apiPlantRequestData: any
    isCustomDate: boolean = false
    poData: any
    totalScores: any = {
        ppvScores: [],
        ltaScores: [],
        otdScores: [],
        ncrScores: [],
        totalScores: []
    }
    startDate!: any
    endDate!: any
    a: string = "as/as"
    totalPoSpendData: any
    totalIssuePoData: any
    totalSourceMaterialData: any
    totalRecievedPoData: any
    public vendorName: any[]
    public ncrGraphData: twoLineChartModel
    public totalScoreList: twoLineChartModel
    public totalCompareScoreList: twoLineChartModel
    public ncrPercentageGraphData: twoLineChartModel
    public ppvGraphData: twoLineChartModel
    public ppvPercentageGraphData: twoLineChartModel
    public ltaPercentageGraphData: twoLineChartModel
    public ltaGraphData: twoLineChartModel
    public otdGraphData: twoLineChartModel
    public otdPercentageGraphData: twoLineChartModel
    ltaAverageScore: any[] = []
    ppvAverageScore: any[] = []
    ncrAverageScore: any[] = []
    otdAverageScore: any[] = []
    compareAverageScore: any[] = []
    executeData: any
    dataStats: any
    dateDiffSentance: any
    loggedInUser: any
    listComodity: any[]
    listReport: any[]
    listPlant: any[]
    listVendor: any[]
    dashBoardStatistic: any = {}
    dashBoardRegistration: any = {}
    ltaChartData: any
    ltaPercentageChartData: any
    ppvChartData: any
    ppvPercentageChartData: any
    otdChartData: any
    otdPercentageChartData: any
    ncrChartData: any
    ncrPercentageChartData: any
    totalScoreChartData: any
    dashBoardChartData: any
    plantGraphData: { name: string, data: { 
        startDate: any[], 
        otd: any[], 
        ppv: any[], 
        ncr: any[], 
        lta: any[], 
        otdPercentage: any[], 
        ppvPercentage: any[], 
        ncrPercentage: any[], 
        ltaPercentage: any[] 
    } }[] // Added declaration to fix redline error
    @Input() subtitle: string;
    @Input() numberScore: string;
    
    startDateControl: any;
    endDateControl: any;
    date: any;
    serializedDate: any;
    viewFirst: any;
    
    constructor(
        public dialog: MatDialog,
        public _apiService: GeneralApiService,
        public _notificationService: NotificationService,
        private cdr: ChangeDetectorRef,
        private translateService: TranslateService
    ) { }
    
    ngOnInit(): void {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl(new Date().toISOString());
        var user = localStorage.getItem('userData')
        if (user)
            this.loggedInUser = JSON.parse(user)

        this._apiService.isLanguageSelector$.subscribe((res: any) => {
            this.translateService.use(res)
            this.cdr.detectChanges()
        })

        this._apiService.isCompareLoader$.next(true);
        this.pageLoadCall()
     
        this._apiService.get(`${api.adminKpiSetting}?tenantId=${this.loggedInUser?.tenantID}`)
        .subscribe((res: any) => {
            this.viewFirst = res.data.adminSettingList;
            localStorage.setItem('kpiSettingAdmin', JSON.stringify(this.viewFirst));
            if(this.viewFirst[7].value == '0'){
                this.viewFirst = false;
            }else{
                this.viewFirst = true;
            }
            localStorage.setItem('kpiSettingSendReportValue', JSON.stringify(this.viewFirst));
        })
    }

    pageLoadCall(){
        Promise.all([
            this._apiService.get(`${api.GetMaterialScoreCard}/${this.loggedInUser.tenantID}`).toPromise(),
            this._apiService.get(`${api.GetBuyerScoreCard}/${this.loggedInUser.tenantID}`).toPromise(),
        ]).then((res: any) => {
            if (res[1].data.length < 1) {
                this._apiService.isCompareLoader$.next(false);
                this._notificationService.push("No record for this tenant", 2);
                return
            }
        
            this.dateDiffSentance = res[1].dateDiff
            var currentData = {
                startDate: res[1].data.startDate,
                endDate: res[1].data.endDate,
                plantCode: res[0].data.plantCode,
                commodity: res[0].data.commodity,
                vendorCode: res[0].data.vendorCode,
                buyerCode: res[1].data.buyerCode,
                materialCode: "ALL",
                tenantId: this.loggedInUser.tenantID
            };
            this.apiPlantRequestData = currentData
            this.currentData = { ...currentData }
            let previousData = {
                startDate: res[1].previousDate.startDate,
                endDate: res[1].previousDate.endDate,
                plantCode: res[0].data.plantCode,
                commodity: res[0].data.commodity,
                vendorCode: res[0].data.vendorCode,
                buyerCode: res[1].data.buyerCode,
                materialCode: "ALL",
                tenantId: this.loggedInUser.tenantID
            }
            this.previousData = { ...previousData }
            this.startDate = this.currentData.startDate
            this.endDate = this.currentData.endDate
            this.startDateControl = new FormControl(new Date(this.startDate));
            this.endDateControl = new FormControl(new Date(this.endDate));
            if(!this.isCustomDate){
                this.startDateControl.disable()
                this.endDateControl.disable()
            }
            this.cdr.detectChanges();
            
            Promise.all([
                this._apiService.post(api.plantStatistics, { ...currentData }).toPromise(),
                this._apiService.post(api.plantStatistics, { ...previousData }).toPromise(),
                this._apiService.post(api.plantAverageGraph, { ...currentData }).toPromise(),
                this._apiService.post(`${api.dashboardGraphPO}`, {startDate: currentData.startDate.split("T")[0], endDate: currentData.endDate.split("T")[0],tenantId: this.loggedInUser.tenantID }).toPromise(),
                this._apiService.post(`${api.dashboardStats}`, { startDate: currentData.startDate.split("T")[0], lastDate: currentData.endDate.split("T")[0], tenantId: this.loggedInUser.tenantID }).toPromise(),
                this._apiService.post(`${api.dashboardStats}`, { startDate: previousData.startDate.split("T")[0], lastDate: previousData.endDate.split("T")[0], tenantId: this.loggedInUser.tenantID }).toPromise(),
                this._apiService.post(`${api.dashboardKPICount}`, { startDate: currentData.startDate.split("T")[0], lastDate: currentData.endDate.split("T")[0], tenantId: this.loggedInUser.tenantID }).toPromise(),
                this._apiService.post(`${api.dashboardKPICount}`, { startDate: previousData.startDate.split("T")[0], lastDate: previousData.endDate.split("T")[0], tenantId: this.loggedInUser.tenantID }).toPromise(),
            ]).then((innerResponse: any) => {
                if (innerResponse === null || innerResponse === undefined) {
                    this._apiService.isCompareLoader$.next(false)
                    return
                }
                this.dashBoardStatistic = {
                    currentStatus: innerResponse[0].data,
                    previousStatus: innerResponse[1].data
                }
                this.dashBoardRegistration = {
                    currentRegistration: innerResponse[6].data,
                    previousRegistration: innerResponse[7].data
                }
                this.totalScores = innerResponse[2].data
                this.poData = innerResponse[3].data
                this.dataStats = {
                    currentData: innerResponse[4].data[0],
                    previousData: innerResponse[5].data[0],
                }
                this.arrangeProperData(innerResponse[2].graphData)
                this._apiService.isCompareLoader$.next(false)
            }).catch((e:any)=> this._apiService.isCompareLoader$.next(false))
            .finally(() =>{})
        }).catch((e: any) => {
            this._apiService.isCompareLoader$.next(false)
        }).finally(() => {})
    }

    openDialog() {
        this.dialog.open(VendortotalCoregraphDialogComponent);
    }

    onStartDateChange(event: Event) {
        const inputStartDate = (event.target as HTMLInputElement).value;
        this.startDate = this._apiService.setInputControlDate(inputStartDate, 'startDate')
    }

    onEndDateChange(event: Event) {
        const inputEndDate = (event.target as HTMLInputElement).value;
        this.endDate = this._apiService.setInputControlDate(inputEndDate, 'endDate')
        if (!this.startDate) {
            this._notificationService.push("start date must be selected first", 2)
            this.endDate = null
            return
        }
        if(this.startDate === undefined || this.startDate === null) return
        if(this.endDate === undefined || this.endDate === null) return
        if (this.startDate > this.endDate) {
            this._notificationService.push("start date must be lower than end date", 2)
            this.endDate = null
            return
        }
        this.currentData.startDate = this.startDate
        this.currentData.endDate = this.endDate
        let obj = {
            startDate: this.startDate,
            endDate: this.endDate,
            tenantId: this.loggedInUser.tenantID
        }
        this._apiService.isCompareLoader$.next(true)
        const currentStart = new Date(this.startDate);
        const currentEnd = new Date(this.endDate);
        const dayDiff = Math.floor((currentEnd.getTime() - currentStart.getTime()) / (1000 * 3600 * 24)) + 1;
        const prevEnd = new Date(currentStart);
        prevEnd.setDate(prevEnd.getDate() - 1);
        const prevStart = new Date(prevEnd);
        prevStart.setDate(prevStart.getDate() - (dayDiff - 1));
        this.previousData.endDate = prevEnd.toISOString().split("T")[0];
        this.previousData.startDate = prevStart.toISOString().split("T")[0];
        this._apiService.post(api.getPlantDropDown, obj).subscribe((res: any) => {
            this.startDate = this.currentData.startDate
            this.endDate = this.currentData.endDate
            this.dashBoardRegistration = null
            this.dataStats = null
            this.dateDiffSentance = null
            Promise.all([
                this._apiService.post(api.plantStatistics, { ...this.currentData }).toPromise(),
                this._apiService.post(api.plantStatistics, { ...this.previousData }).toPromise(),
                this._apiService.post(api.plantAverageGraph, { ...this.currentData }).toPromise(),
                this._apiService.post(`${api.dashboardGraphPO}`, {startDate: this.currentData.startDate, endDate: this.currentData.endDate, tenantId: this.loggedInUser.tenantID }).toPromise(),
                this._apiService.post(`${api.dashboardStats}`, { startDate: this.currentData.startDate, lastDate: this.currentData.endDate, tenantId: this.loggedInUser.tenantID }).toPromise(),
                this._apiService.post(`${api.dashboardStats}`, { startDate: this.previousData.startDate, lastDate: this.previousData.endDate, tenantId: this.loggedInUser.tenantID }).toPromise(),
                this._apiService.post(`${api.dashboardKPICount}`, { startDate: this.currentData.startDate, lastDate: this.currentData.endDate, tenantId: this.loggedInUser.tenantID }).toPromise(),
                this._apiService.post(`${api.dashboardKPICount}`, { startDate: this.previousData.startDate, lastDate: this.previousData.endDate, tenantId: this.loggedInUser.tenantID }).toPromise(),
            ]).then((innerResponse: any) => {
                if (innerResponse === null || innerResponse === undefined) {
                    this._apiService.isCompareLoader$.next(false)
                    return
                }
                this.dateDiffSentance = res.dateDiff
                this.dashBoardStatistic = {
                    currentStatus: innerResponse[0].data,
                    previousStatus: innerResponse[1].data
                }
                this.dashBoardRegistration = {
                    currentRegistration: innerResponse[6].data,
                    previousRegistration: innerResponse[7].data
                }
                this.totalScores = innerResponse[2].data
                this.poData = innerResponse[3].data
                this.dataStats = {
                    currentData: innerResponse[4].data[0],
                    previousData: innerResponse[5].data[0],
                }
                this.arrangeProperData(innerResponse[2].graphData)
                this._apiService.isCompareLoader$.next(false)
            }).finally(() => this._apiService.isCompareLoader$.next(false))
        })
    }

    arrangeProperData(data: any) {
        let plants = [{
            name: 'average', data: {
                startDate: [],
                otd: [],
                ppv: [],
                ncr: [],
                lta: [],
                otdPercentage: [],
                ppvPercentage: [],
                ncrPercentage: [],
                ltaPercentage: [],
            }
        }, {
            name: 'target', data: {
                startDate: [],
                otd: [],
                ppv: [],
                ncr: [],
                lta: [],
                otdPercentage: [],
                ppvPercentage: [],
                ncrPercentage: [],
                ltaPercentage: [],
            }
        }]
        data.forEach((element: any) => {
            if (plants[0].data.startDate.includes(element.startDate)) return
            plants[0].data.startDate.push(element.startDate)
            plants[0].data.otd.push(element.otdScore)
            plants[0].data.ncr.push(element.ncrScore)
            plants[0].data.ppv.push(element.ppvScore)
            plants[0].data.lta.push(element.ltaScore)
            plants[0].data.otdPercentage.push(element.otdPercentage)
            plants[0].data.ncrPercentage.push(element.ncrPercentage)
            plants[0].data.ppvPercentage.push(element.ppvPercentage)
            plants[0].data.ltaPercentage.push(element.ltaPercentage)
            plants[1].data.startDate.push(element.startDate)
            plants[1].data.otd.push(element.otdTargetScore)
            plants[1].data.ncr.push(element.ncrTargetScore)
            plants[1].data.ppv.push(element.ppvTargetScore)
            plants[1].data.lta.push(element.ltaTargetScore)
            plants[1].data.otdPercentage.push(element.otdTargetPercentage)
            plants[1].data.ncrPercentage.push(element.ncrTargetPercentage)
            plants[1].data.ppvPercentage.push(element.ppvTargetPercentage)
            plants[1].data.ltaPercentage.push(element.ltaTargetPercentage)
        });
        this.plantGraphData = plants
    }

    getDashBoardData(data) {
        if(data == "") {
            this.isCustomDate = true
            this.startDateControl.enable()
            this.endDateControl.enable()
        } else {
            this.isCustomDate = false
            this._apiService.isCompareLoader$.next(true);
            Promise.all([
                this._apiService.get(`${api.getDashBoardDto}?day=${data}&TenantId=${this.loggedInUser.tenantID}`).toPromise(),
            ]).then((res: any) => {
                if (res === 0) {
                    this._apiService.isCompareLoader$.next(false);
                    this._notificationService.push("No record for this tenant", 2);
                    return
                }
                this.dateDiffSentance = data
                var currentData = {
                    startDate: res[0].data.startDate,
                    endDate: res[0].data.endDate,
                    plantCode: res[0].data.plantCode,
                    commodity: res[0].data.commodity,
                    vendorCode: res[0].data.vendorCode,
                    buyerCode: res[0].data.buyerCode,
                    materialCode: res[0].data.materialCode,
                    tenantId: this.loggedInUser.tenantID
                };
                this.apiPlantRequestData = currentData
                this.currentData = { ...currentData }
                let previousData = {
                    startDate: res[0].data.previousStartDate,
                    endDate: res[0].data.previousEndDate,
                    plantCode: res[0].data.plantCode,
                    commodity: res[0].data.commodity,
                    vendorCode: res[0].data.vendorCode,
                    buyerCode: res[0].data.buyerCode,
                    materialCode: res[0].data.materialCode,
                    tenantId: this.loggedInUser.tenantID
                }
                this.previousData = { ...previousData }
                this.startDate = this.currentData.startDate
                this.endDate = this.currentData.endDate
                this.startDateControl = new FormControl(new Date(this.startDate));
                this.endDateControl = new FormControl(new Date(this.endDate));
                if(!this.isCustomDate){
                    this.startDateControl.disable()
                    this.endDateControl.disable()
                }
                this.cdr.detectChanges();
                this._apiService.isCompareLoader$.next(true);
                Promise.all([
                    this._apiService.post(api.plantStatistics, { ...currentData }).toPromise(),
                    this._apiService.post(api.plantStatistics, { ...previousData }).toPromise(),
                    this._apiService.post(api.plantAverageGraph, { ...currentData }).toPromise(),
                    this._apiService.post(`${api.dashboardGraphPO}`, {startDate: currentData.startDate.split("T")[0], endDate: currentData.endDate.split("T")[0], tenantId: this.loggedInUser.tenantID }).toPromise(),
                    this._apiService.post(`${api.dashboardStats}`, { startDate: currentData.startDate, lastDate: currentData.endDate, tenantId: this.loggedInUser.tenantID }).toPromise(),
                    this._apiService.post(`${api.dashboardStats}`, { startDate: previousData.startDate, lastDate: previousData.endDate, tenantId: this.loggedInUser.tenantID }).toPromise(),
                    this._apiService.post(`${api.dashboardKPICount}`, { startDate: currentData.startDate.split("T")[0], lastDate: currentData.endDate.split("T")[0], tenantId: this.loggedInUser.tenantID }).toPromise(),
                    this._apiService.post(`${api.dashboardKPICount}`, { startDate: previousData.startDate.split("T")[0], lastDate: previousData.endDate.split("T")[0], tenantId: this.loggedInUser.tenantID }).toPromise()
                ]).then((innerResponse: any) => {
                    if (innerResponse === null || innerResponse === undefined) {
                        this._apiService.isCompareLoader$.next(false)
                        return
                    }
                    this.dashBoardStatistic = {
                        currentStatus: innerResponse[0].data,
                        previousStatus: innerResponse[1].data
                    }
                    this.dashBoardRegistration = {
                        currentRegistration: innerResponse[6].data,
                        previousRegistration: innerResponse[7].data
                    }
                    this.totalScores = innerResponse[2].data
                    this.poData = innerResponse[3].data
                    this.dataStats = {
                        currentData: innerResponse[4].data[0],
                        previousData: innerResponse[5].data[0],
                    }
                    this.arrangeProperData(innerResponse[2].graphData)
                    this._apiService.isCompareLoader$.next(false)
                }).catch(() => this._apiService.isCompareLoader$.next(false))
                .finally(() => {})
            }).catch((e: any) => {}).finally(() => {})
        }
    }

    getChartData(data: any) {
        switch (data.name) {
            case 'LTA Score':
                this.ltaChartData = data.data;
                break;
            case 'LTA Percentage':
                this.ltaPercentageChartData = data.data;
                break;
            case 'PPV Score':
                this.ppvChartData = data.data;
                break;
            case 'PPV Percentage':
                this.ppvPercentageChartData = data.data
                break;
            case 'NCR Score':
                this.ncrChartData = data.data
                break;
            case 'NCR Percentage':
                this.ncrPercentageChartData = data.data
                break;
            case 'OTD Score':
                this.otdChartData = data.data
                break;
            case 'OTD Percentage':
                this.otdPercentageChartData = data.data
                break;
            case 'Total Score':
                this.totalScoreChartData = data.data
                break;
            case 'Total PO Spend':
                this.totalPoSpendData = data.data
                break;
            case 'Total Issued PO Lines':
                this.totalIssuePoData = data.data
                break;
            case 'Total Sourced Material':
                this.totalSourceMaterialData = data.data
                break;
            case 'Total Received PO Lines':
                this.totalRecievedPoData = data.data
                break;
            case 'Dashboard total Score':
                this.dashBoardChartData = data.data
                break;
            default:
                break
        }
    }

    popUpChart(heading: any) {
        let chartHeading = ['LTA', 'PPV', 'NCR', 'OTD']
        let dashBoardChartData!: any
        let requiredChartData!: any
        let requiredPoData!: any
        let poNamr: any
        switch (heading) {
            case 'LTA Score':
                requiredChartData = this.ltaChartData;
                break;
            case 'LTA Percentage':
                requiredChartData = this.ltaPercentageChartData;
                break;
            case 'PPV Score':
                requiredChartData = this.ppvChartData;
                break;
            case 'PPV Percentage':
                requiredChartData = this.ppvPercentageChartData;
                break;
            case 'NCR Score':
                requiredChartData = this.ncrChartData;
                break;
            case 'NCR Percentage':
                requiredChartData = this.ncrPercentageChartData;
                break;
            case 'OTD Score':
                requiredChartData = this.otdChartData;
                break;
            case 'OTD Percentage':
                requiredChartData = this.otdPercentageChartData;
                break;
            case 'Total Score':
                requiredChartData = this.totalScoreChartData;
                break;
            case 'Total PO Spend':
                requiredChartData = this.totalPoSpendData;
                poNamr = 'poSpend'
                break;
            case 'Total Issued PO Lines':
                requiredChartData = this.totalIssuePoData;
                poNamr = 'issuePo'
                break;
            case 'Total Sourced Material':
                requiredChartData = this.totalSourceMaterialData;
                poNamr = 'sourceMaterial'
                break;
            case 'Total Received PO Lines':
                requiredChartData = this.totalRecievedPoData;
                poNamr = 'recievedPo'
                break;
            case 'Dashboard total Score':
                requiredChartData = this.dashBoardChartData
                break;
            default:
                break
        }
        if ((requiredChartData === null || requiredChartData === undefined)) {
            this._notificationService.push("No graph data", 2)
            return
        }
        let dialogRef = this.dialog.open(PopupchartComponent, {
            width: '90%',
            height: '80%',
            panelClass: 'graph-style',
            data: {
                name: heading,
                dashBoardData: requiredChartData,
            }
        })
    }
}