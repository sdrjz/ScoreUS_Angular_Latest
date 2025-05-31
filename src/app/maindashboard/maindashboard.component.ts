import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { api } from '../api.endpoints';
import { VendortotalCoregraphDialogComponent } from '../general/vendortotal-coregraph-dialog/vendortotal-coregraph-dialog.component';
import { GeneralApiService } from '../services/appService/generalApiService';
import { NotificationService } from '../notification.service';
import { twoLineChartModel } from '../modal/twoLinseChartDataModel';
import { PopupchartComponent } from '../general/popupchart/popupchart.component';
import { TranslateService } from '@ngx-translate/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-maindashboard',
    templateUrl: './maindashboard.component.html',
    styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {
    currentData: any
    previousData: any
    apiPlantRequestData: any
    isCustomDate : boolean = false
    poData: any
    totalScores: any =
        {
            ppvScores: [],
            ltaScores: [],
            otdScores: [],
            ncrScores: [],
            totalScores: []
        }
    startDate!: any
    endDate!: any
    a: string = "as/as"
    // plantColorZoneGraphData: any
    // commodityColorZoneGraphData: any
    // buyerColorZoneGraphData: any
    // materialColorZoneGraphData: any
    // vendorColorZoneGraphData: any
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
    // vendorColorZoneStats: any
    // buyerColorZoneStats: any
    // plantColorZoneStats: any
    // commodityColorZoneStats: any
    // materialColorZoneStats: any
    plantGraphData: any
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
    // plantColorZoneChartData: any
    // commodityColorZoneChartData: any
    // buyerColorZoneChartData: any
    // materialColorZoneChartData: any
    // vendorColorZoneChartData: any
    @Input() subtitle: string;

    @Input() numberScore: string;
    
    startDateControl:any;
    endDateControl:any;
    date:any;
    serializedDate:any;
    // datesGroup: any = new FormGroup({
    //     startDate : new FormControl(),  
    //     endDate : new FormControl()  
    // })

    viewFirst:any;
    
    constructor(public dialog: MatDialog,
        public _apiService: GeneralApiService,
        public _notificationService: NotificationService,
        private cdr: ChangeDetectorRef,
        private translateService: TranslateService) { }
    
    ngOnInit(): void {
     
       

        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl(new Date().toISOString());
       
        // serializedDate = new FormControl(new Date().toISOString());
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

pageLoadCall() {
    Promise.all([
        this._apiService.get(`${api.GetMaterialScoreCard}/${this.loggedInUser.tenantID}`).toPromise(),
        this._apiService.get(`${api.GetBuyerScoreCard}/${this.loggedInUser.tenantID}`).toPromise()
    ]).then((res: any) => {

        if (res[1].data.length < 1) {
            this._apiService.isCompareLoader$.next(false);
            this._notificationService.push("No record for this tenant", 2);
            return;
        }

        this.dateDiffSentance = res[1].dateDiff;

        const currentData = {
            startDate: res[1].data.startDate,
            endDate: res[1].data.endDate,
            plantCode: res[0].data.plantCode,
            commodity: res[0].data.commodity,
            vendorCode: res[0].data.vendorCode,
            buyerCode: res[1].data.buyerCode,
            materialCode: "ALL",
            tenantId: this.loggedInUser.tenantID
        };

        this.apiPlantRequestData = currentData;
        this.currentData = { ...currentData };

        const previousData = {
            startDate: res[1].previousDate.startDate,
            endDate: res[1].previousDate.endDate,
            plantCode: res[0].data.plantCode,
            commodity: res[0].data.commodity,
            vendorCode: res[0].data.vendorCode,
            buyerCode: res[1].data.buyerCode,
            materialCode: "ALL",
            tenantId: this.loggedInUser.tenantID
        };

        this.previousData = { ...previousData };
        this.startDate = this.currentData.startDate;
        this.endDate = this.currentData.endDate;

        this.startDateControl = new FormControl(new Date(this.startDate));
        this.endDateControl = new FormControl(new Date(this.endDate));

        if (!this.isCustomDate) {
            this.startDateControl.disable();
            this.endDateControl.disable();
        }

        this.cdr.detectChanges();

        // Remaining necessary API calls
        Promise.all([
            this._apiService.post(`${api.dashboardGraphPO}`, {
                startDate: currentData.startDate.split("T")[0],
                endDate: currentData.endDate.split("T")[0],
                tenantId: this.loggedInUser.tenantID
            }).toPromise(), // 0

            this._apiService.post(`${api.dashboardStats}`, {
                startDate: currentData.startDate.split("T")[0],
                lastDate: currentData.endDate.split("T")[0],
                tenantId: this.loggedInUser.tenantID
            }).toPromise(), // 1

            this._apiService.post(`${api.dashboardStats}`, {
                startDate: previousData.startDate.split("T")[0],
                lastDate: previousData.endDate.split("T")[0],
                tenantId: this.loggedInUser.tenantID
            }).toPromise(), // 2

            this._apiService.post(`${api.dashboardKPICount}`, {
                startDate: currentData.startDate.split("T")[0],
                lastDate: currentData.endDate.split("T")[0],
                tenantId: this.loggedInUser.tenantID
            }).toPromise(), // 3

            this._apiService.post(`${api.dashboardKPICount}`, {
                startDate: previousData.startDate.split("T")[0],
                lastDate: previousData.endDate.split("T")[0],
                tenantId: this.loggedInUser.tenantID
            }).toPromise(), // 4

            this._apiService.post(api.plantStatistics, { ...currentData }).toPromise(), // 5
            this._apiService.post(api.plantStatistics, { ...previousData }).toPromise(), // 6

            this._apiService.post(api.plantAverageGraph, { ...currentData }).toPromise() // 7 ✅ for Total Score
        ]).then((innerResponse: any) => {
            if (!innerResponse) {
                this._apiService.isCompareLoader$.next(false);
                return;
            }

            this.poData = innerResponse[0].data;

            this.dashBoardStatistic = {
                currentStatus: innerResponse[5].data,
                previousStatus: innerResponse[6].data
            };

            this.dashBoardRegistration = {
                currentRegistration: innerResponse[3].data,
                previousRegistration: innerResponse[4].data
            };

            this.dataStats = {
                currentData: innerResponse[1].data[0],
                previousData: innerResponse[2].data[0]
            };

            // ✅ Total Score Graph Data
            this.totalScores = innerResponse[7].data;

            // Optional: prepare graph chart object
            this.arrangeProperData(innerResponse[7].data);

            // ✅ Resize & loader off after 3s
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
                this._apiService.isCompareLoader$.next(false);
            }, 1000);

        }).catch((e: any) => {
            this._apiService.isCompareLoader$.next(false);
        });

    }).catch((e: any) => {
        this._apiService.isCompareLoader$.next(false);
    });
}

    openDialog() {
        this.dialog.open(VendortotalCoregraphDialogComponent);
    }

    onApplyCustomDate(): void {
        const inputStartDate = this.startDateControl?.value;
        const inputEndDate = this.endDateControl?.value;
      
        if (!inputStartDate || !inputEndDate) {
          this._notificationService.push("Both start and end dates must be selected", 2);
          return;
        }
      
        this.startDate = this._apiService.setInputControlDate(inputStartDate, 'startDate');
        this.endDate = this._apiService.setInputControlDate(inputEndDate, 'endDate');
      
        if (!this.startDate || !this.endDate) return;
      
        if (this.startDate > this.endDate) {
          this._notificationService.push("Start date must be before end date", 2);
          this.startDate = null;
          return;
        }
      
        this.loadDashboardData();
      }
      
 loadDashboardData(): void {
  const currentStart = new Date(this.startDate);
  const currentEnd = new Date(this.endDate);

  if (isNaN(currentStart.getTime()) || isNaN(currentEnd.getTime())) {
    this._notificationService.push("Invalid date format", 2);
    return;
  }

  const dayDiff = Math.floor((currentEnd.getTime() - currentStart.getTime()) / (1000 * 3600 * 24)) + 1;

  const prevEnd = new Date(currentStart);
  prevEnd.setDate(prevEnd.getDate() - 1);

  const prevStart = new Date(prevEnd);
  prevStart.setDate(prevStart.getDate() - (dayDiff - 1));

  this.previousData.endDate = prevEnd.toISOString().split("T")[0];
  this.previousData.startDate = prevStart.toISOString().split("T")[0];

  this.currentData.startDate = this.startDate;
  this.currentData.endDate = this.endDate;

  const obj = {
    startDate: this.startDate,
    endDate: this.endDate,
    tenantId: this.loggedInUser.tenantID
  };

  this._apiService.isCompareLoader$.next(true);

  this._apiService.post(api.getPlantDropDown, obj).subscribe((res: any) => {
    this.dashBoardRegistration = null;
    this.dataStats = null;
    this.dateDiffSentance = null;

    Promise.all([
      this._apiService.post(api.plantStatistics, { ...this.currentData }).toPromise(), // 0
      this._apiService.post(api.plantStatistics, { ...this.previousData }).toPromise(), // 1
      this._apiService.post(api.plantAverageGraph, { ...this.currentData }).toPromise(), // 2
      this._apiService.post(`${api.dashboardGraphPO}`, {
        startDate: this.currentData.startDate,
        endDate: this.currentData.endDate,
        tenantId: this.loggedInUser.tenantID
      }).toPromise(), // 3
      this._apiService.post(`${api.dashboardStats}`, {
        startDate: this.currentData.startDate,
        lastDate: this.currentData.endDate,
        tenantId: this.loggedInUser.tenantID
      }).toPromise(), // 4
      this._apiService.post(`${api.dashboardStats}`, {
        startDate: this.previousData.startDate,
        lastDate: this.previousData.endDate,
        tenantId: this.loggedInUser.tenantID
      }).toPromise(), // 5
      this._apiService.post(`${api.dashboardKPICount}`, {
        startDate: this.currentData.startDate,
        lastDate: this.currentData.endDate,
        tenantId: this.loggedInUser.tenantID
      }).toPromise(), // 6
      this._apiService.post(`${api.dashboardKPICount}`, {
        startDate: this.previousData.startDate,
        lastDate: this.previousData.endDate,
        tenantId: this.loggedInUser.tenantID
      }).toPromise() // 7
    ])
    .then((innerResponse: any) => {
      if (!innerResponse) {
        this._apiService.isCompareLoader$.next(false);
        return;
      }

      this.dateDiffSentance = res.dateDiff;

      this.dashBoardStatistic = {
        currentStatus: innerResponse[0].data,
        previousStatus: innerResponse[1].data
      };

      this.totalScores = innerResponse[2].data;
      this.arrangeProperData(innerResponse[2].data);

      this.poData = innerResponse[3].data;
      this.dataStats = {
        currentData: innerResponse[4].data[0],
        previousData: innerResponse[5].data[0]
      };

      this.dashBoardRegistration = {
        currentRegistration: innerResponse[6].data,
        previousRegistration: innerResponse[7].data
      };

      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        this._apiService.isCompareLoader$.next(false);
      }, 3000);
    })
    .catch(() => this._apiService.isCompareLoader$.next(false));
  });
}
    // onStartDateChange(event: Event) {
    //     const inputStartDate = (event.target as HTMLInputElement).value;
    //     this.startDate = this._apiService.setInputControlDate(inputStartDate, 'startDate');
    
    //     if (!this.endDate) {
    //         this._notificationService.push("end date must be selected first", 2);
    //         this.startDate = null;
    //         return;
    //     }
    
    //     if (!this.startDate || !this.endDate) return;
    
    //     if (this.startDate > this.endDate) {
    //         this._notificationService.push("start date must be lower than end date", 2);
    //         this.startDate = null;
    //         return;
    //     }
    
    //     const currentStart = new Date(this.startDate);
    //     const currentEnd = new Date(this.endDate);
    
    //     if (isNaN(currentStart.getTime()) || isNaN(currentEnd.getTime())) {
    //         this._notificationService.push("Invalid date format", 2);
    //         return;
    //     }
    
    //     const dayDiff = Math.floor((currentEnd.getTime() - currentStart.getTime()) / (1000 * 3600 * 24)) + 1;
    
    //     const prevEnd = new Date(currentStart);
    //     prevEnd.setDate(prevEnd.getDate() - 1);
    
    //     const prevStart = new Date(prevEnd);
    //     prevStart.setDate(prevStart.getDate() - (dayDiff - 1));
    
    //     this.previousData.endDate = prevEnd.toISOString().split("T")[0];
    //     this.previousData.startDate = prevStart.toISOString().split("T")[0];
    
    //     this.currentData.startDate = this.startDate;
    //     this.currentData.endDate = this.endDate;
    
    //     const obj = {
    //         startDate: this.startDate,
    //         endDate: this.endDate,
    //         tenantId: this.loggedInUser.tenantID
    //     };
    
    //     this._apiService.isCompareLoader$.next(true);
    
    //     this._apiService.post(api.getPlantDropDown, obj).subscribe((res: any) => {
    //         this.startDate = this.currentData.startDate;
    //         this.endDate = this.currentData.endDate;
    
    //         this.dashBoardRegistration = null;
    //         this.dataStats = null;
    //         this.dateDiffSentance = null;
    
    //         Promise.all([
    //             this._apiService.post(api.VendorColorZone, { ...this.currentData, allVendorCode: this.currentData.vendorCode }).toPromise(),
    //             this._apiService.post(api.VendorColorZone, { ...this.previousData, allVendorCode: this.currentData.vendorCode }).toPromise(),
    //             this._apiService.post(api.buyerColorZone, { ...this.currentData, allBuyerCode: this.currentData.buyerCode }).toPromise(),
    //             this._apiService.post(api.buyerColorZone, { ...this.previousData, allBuyerCode: this.currentData.buyerCode }).toPromise(),
    //             this._apiService.post(api.plantColorZone, { ...this.currentData, allPlantCode: this.currentData.plantCode }).toPromise(),
    //             this._apiService.post(api.plantColorZone, { ...this.previousData, allPlantCode: this.currentData.plantCode }).toPromise(),
    //             this._apiService.post(api.plantStatistics, { ...this.currentData }).toPromise(),
    //             this._apiService.post(api.plantStatistics, { ...this.previousData }).toPromise(),
    //             this._apiService.post(api.plantAverageGraph, { ...this.currentData }).toPromise(),
    //             this._apiService.post(`${api.dashboardGraphPO}`, {
    //                 startDate: this.currentData.startDate,
    //                 endDate: this.currentData.endDate,
    //                 tenantId: this.loggedInUser.tenantID
    //             }).toPromise(),
    //             this._apiService.post(`${api.dashboardStats}`, {
    //                 startDate: this.currentData.startDate,
    //                 lastDate: this.currentData.endDate,
    //                 tenantId: this.loggedInUser.tenantID
    //             }).toPromise(),
    //             this._apiService.post(`${api.dashboardStats}`, {
    //                 startDate: this.previousData.startDate,
    //                 lastDate: this.previousData.endDate,
    //                 tenantId: this.loggedInUser.tenantID
    //             }).toPromise(),
    //             this._apiService.post(`${api.dashboardKPICount}`, {
    //                 startDate: this.currentData.startDate,
    //                 lastDate: this.currentData.endDate,
    //                 tenantId: this.loggedInUser.tenantID
    //             }).toPromise(),
    //             this._apiService.post(`${api.dashboardKPICount}`, {
    //                 startDate: this.previousData.startDate,
    //                 lastDate: this.previousData.endDate,
    //                 tenantId: this.loggedInUser.tenantID
    //             }).toPromise()
    //         ])
    //         .then((innerResponse: any) => {
    //             if (!innerResponse) {
    //                 this._apiService.isCompareLoader$.next(false);
    //                 return;
    //             }
    
    //             this.dateDiffSentance = res.dateDiff;
    //             this.vendorColorZoneGraphData = innerResponse[0].data;
    //             this.buyerColorZoneGraphData = innerResponse[2].data;
    //             this.plantColorZoneGraphData = innerResponse[4].data;
    
    //             this.arrangeProperData(innerResponse[4].graphData);
    
    //             this.dashBoardStatistic = {
    //                 currentStatus: innerResponse[6].data,
    //                 previousStatus: innerResponse[7].data
    //             };
    
    //             this.dashBoardRegistration = {
    //                 currentRegistration: innerResponse[12].data,
    //                 previousRegistration: innerResponse[13].data
    //             };
    
    //             this.plantColorZoneStats = this.getColorZoneStat(innerResponse[4].data, innerResponse[5].data);
    //             this.vendorColorZoneStats = this.getColorZoneStat(innerResponse[0].data, innerResponse[1].data);
    //             this.buyerColorZoneStats = this.getColorZoneStat(innerResponse[2].data, innerResponse[3].data);
    
    //             this.totalScores = innerResponse[8].data;
    //             this.poData = innerResponse[9].data;
    //             this.dataStats = {
    //                 currentData: innerResponse[10].data[0],
    //                 previousData: innerResponse[11].data[0]
    //             };
    
    //             this._apiService.isCompareLoader$.next(false);
    //         })
    //         .catch(() => {
    //             this._apiService.isCompareLoader$.next(false);
    //         });
    //     });
    // }
    
    

    // onEndDateChange(event: Event) {
    //     const inputEndDate = (event.target as HTMLInputElement).value;
    //     this.endDate = this._apiService.setInputControlDate(inputEndDate, 'endDate');
    
    //     if (!this.startDate) {
    //         this._notificationService.push("start date must be selected first", 2);
    //         this.endDate = null;
    //         return;
    //     }
    
    //     if (!this.startDate || !this.endDate) return;
    
    //     if (this.startDate > this.endDate) {
    //         this._notificationService.push("start date must be lower than end date", 2);
    //         this.endDate = null;
    //         return;
    //     }
    
    //     const currentStart = new Date(this.startDate);
    //     const currentEnd = new Date(this.endDate);
    
    //     if (isNaN(currentStart.getTime()) || isNaN(currentEnd.getTime())) {
    //         this._notificationService.push("Invalid date format", 2);
    //         return;
    //     }
    
    //     const dayDiff = Math.floor((currentEnd.getTime() - currentStart.getTime()) / (1000 * 3600 * 24)) + 1;
    
    //     const prevEnd = new Date(currentStart);
    //     prevEnd.setDate(prevEnd.getDate() - 1);
    
    //     const prevStart = new Date(prevEnd);
    //     prevStart.setDate(prevStart.getDate() - (dayDiff - 1));
    
    //     this.previousData.endDate = prevEnd.toISOString().split("T")[0];
    //     this.previousData.startDate = prevStart.toISOString().split("T")[0];
    
    //     this.currentData.startDate = this.startDate;
    //     this.currentData.endDate = this.endDate;
    
    //     const obj = {
    //         startDate: this.startDate,
    //         endDate: this.endDate,
    //         tenantId: this.loggedInUser.tenantID
    //     };
    
    //     this._apiService.isCompareLoader$.next(true);
    
    //     this._apiService.post(api.getPlantDropDown, obj).subscribe((res: any) => {
    //         this.startDate = this.currentData.startDate;
    //         this.endDate = this.currentData.endDate;
    
    //         this.dashBoardRegistration = null;
    //         this.dataStats = null;
    //         this.dateDiffSentance = null;
    
    //         Promise.all([
    //             this._apiService.post(api.VendorColorZone, { ...this.currentData, allVendorCode: this.currentData.vendorCode }).toPromise(),
    //             this._apiService.post(api.VendorColorZone, { ...this.previousData, allVendorCode: this.currentData.vendorCode }).toPromise(),
    //             this._apiService.post(api.buyerColorZone, { ...this.currentData, allBuyerCode: this.currentData.buyerCode }).toPromise(),
    //             this._apiService.post(api.buyerColorZone, { ...this.previousData, allBuyerCode: this.currentData.buyerCode }).toPromise(),
    //             this._apiService.post(api.plantColorZone, { ...this.currentData, allPlantCode: this.currentData.plantCode }).toPromise(),
    //             this._apiService.post(api.plantColorZone, { ...this.previousData, allPlantCode: this.currentData.plantCode }).toPromise(),
    //             this._apiService.post(api.plantStatistics, { ...this.currentData }).toPromise(),
    //             this._apiService.post(api.plantStatistics, { ...this.previousData }).toPromise(),
    //             this._apiService.post(api.plantAverageGraph, { ...this.currentData }).toPromise(),
    //             this._apiService.post(`${api.dashboardGraphPO}`, {
    //                 startDate: this.currentData.startDate,
    //                 endDate: this.currentData.endDate,
    //                 tenantId: this.loggedInUser.tenantID
    //             }).toPromise(),
    //             this._apiService.post(`${api.dashboardStats}`, {
    //                 startDate: this.currentData.startDate,
    //                 lastDate: this.currentData.endDate,
    //                 tenantId: this.loggedInUser.tenantID
    //             }).toPromise(),
    //             this._apiService.post(`${api.dashboardStats}`, {
    //                 startDate: this.previousData.startDate,
    //                 lastDate: this.previousData.endDate,
    //                 tenantId: this.loggedInUser.tenantID
    //             }).toPromise(),
    //             this._apiService.post(`${api.dashboardKPICount}`, {
    //                 startDate: this.currentData.startDate,
    //                 lastDate: this.currentData.endDate,
    //                 tenantId: this.loggedInUser.tenantID
    //             }).toPromise(),
    //             this._apiService.post(`${api.dashboardKPICount}`, {
    //                 startDate: this.previousData.startDate,
    //                 lastDate: this.previousData.endDate,
    //                 tenantId: this.loggedInUser.tenantID
    //             }).toPromise()
    //         ])
    //         .then((innerResponse: any) => {
    //             if (!innerResponse) {
    //                 this._apiService.isCompareLoader$.next(false);
    //                 return;
    //             }
    
    //             this.dateDiffSentance = res.dateDiff;
    //             this.vendorColorZoneGraphData = innerResponse[0].data;
    //             this.buyerColorZoneGraphData = innerResponse[2].data;
    //             this.plantColorZoneGraphData = innerResponse[4].data;
    
    //             this.arrangeProperData(innerResponse[4].graphData);
    
    //             this.dashBoardStatistic = {
    //                 currentStatus: innerResponse[6].data,
    //                 previousStatus: innerResponse[7].data
    //             };
    
    //             this.dashBoardRegistration = {
    //                 currentRegistration: innerResponse[12].data,
    //                 previousRegistration: innerResponse[13].data
    //             };
    
    //             this.plantColorZoneStats = this.getColorZoneStat(innerResponse[4].data, innerResponse[5].data);
    //             this.vendorColorZoneStats = this.getColorZoneStat(innerResponse[0].data, innerResponse[1].data);
    //             this.buyerColorZoneStats = this.getColorZoneStat(innerResponse[2].data, innerResponse[3].data);
    
    //             this.totalScores = innerResponse[8].data;
    //             this.poData = innerResponse[9].data;
    //             this.dataStats = {
    //                 currentData: innerResponse[10].data[0],
    //                 previousData: innerResponse[11].data[0]
    //             };
    
    //             this._apiService.isCompareLoader$.next(false);
    //         })
    //         .catch(() => this._apiService.isCompareLoader$.next(false));
    //     });
    // }
    


    getColorZoneStat(currentData: any, previousData: any) {
        let colorZoneStat = []
        let redCount = 0
        let yellowCount = 0
        let greenCount = 0
        let deno = 0
        let red1Count = 0
        let yellow1Count = 0
        let green1Count = 0
        let deno1 = 0
        currentData.forEach((element: any) => {
            redCount = redCount + element.redNeum
            yellowCount = yellowCount + element.yellowNeum
            greenCount = greenCount + element.greenNeum
            deno = deno + element.deno
        });

        previousData.forEach((element: any) => {
            red1Count = red1Count + element.redNeum
            yellow1Count = yellow1Count + element.yellowNeum
            green1Count = green1Count + element.greenNeum
            deno1 = deno1 + element.deno
        });

        colorZoneStat.push([greenCount, yellowCount, redCount, deno])
        colorZoneStat.push([green1Count, yellow1Count, red1Count, deno1])

        return colorZoneStat
    }


    

    getColorZonesState(colorData: any, colorPrevious: any) {
        let colorZoneStat = []

        const redPlantCount = colorData.data.reduce((count, element) => {
            return count + (element.redPercentage > 0 ? 1 : 0);
        }, 0);

        const yellowPlantCount = colorData.data.reduce((count, element) => {
            return count + (element.yellowPercentage > 0 ? 1 : 0);
        }, 0);

        const greenPlantCount = colorData.data.reduce((count, element) => {
            return count + (element.greenPercentage > 0 ? 1 : 0);
        }, 0);

        const plantDataCount = colorData.data.length
        const plantDataCount1 = colorPrevious.data.length
        const plantRedCount1 = colorPrevious.data.reduce((count, element) => {
            return count + (element.redPercentage > 0 ? 1 : 0);
        }, 0);

        const plantYellowCount1 = colorPrevious.data.reduce((count, element) => {
            return count + (element.yellowPercentage > 0 ? 1 : 0);
        }, 0);

        const plantGreenCount1 = colorPrevious.data.reduce((count, element) => {
            return count + (element.greenPercentage > 0 ? 1 : 0);
        }, 0);

        colorZoneStat.push([greenPlantCount, yellowPlantCount, redPlantCount, plantDataCount], [plantGreenCount1, plantYellowCount1, plantRedCount1, plantDataCount1])



        return colorZoneStat;
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



        // this.apiPlantRequestData.plantCode.split(",").forEach((ele:any)=>{
        //   plants.push({code:ele,name:'',
        //     data:{
        //       startDate:[],
        //       otd:[],
        //       ncr:[],
        //       lta:[],
        //       ppv:[],
        //       totalScore:[],
        //       otdPercentage:[],
        //       otdTargetPercentage:[],
        //       otdTargetScore:[],
        //       ncrPercentage:[],
        //       ncrTargetPercentage:[],
        //       ncrTargetScore:[],
        //       ltaPercentage:[],
        //       ltaTargetScore:[],
        //       ltaTargetPercentage:[],
        //       ppvPercentage:[],
        //       ppvTargetPercentage:[],
        //       ppvTargetScore:[],
        //       averageScore:[],
        //       targetScore:[],
        //       totalScoreTargetPercentage:[]
        //     }})
        // })
        // plants.forEach((element:any)=>{
        //   data.forEach((graphData:any) => {

        //     if(element.code == graphData.plantCode){

        //       if(element.name =='')
        //       element.name = graphData.plantName

        //         element.data.startDate.push(graphData.startDate)
        //         element.data.otd.push(graphData.otdScore)
        //         element.data.ncr.push(graphData.ncrScore)
        //         element.data.ppv.push(graphData.ppvScore)
        //         element.data.lta.push(graphData.ltaScore)
        //         element.data.otdPercentage.push(graphData.otdPercentage)
        //         element.data.otdTargetPercentage.push(graphData.otdTargetPercentage)
        //         element.data.otdTargetScore.push(graphData.otdTargetScore)
        //         element.data.ncrPercentage.push(graphData.ncrPercentage)
        //         element.data.ncrTargetPercentage.push(graphData.ncrTargetPercentage)
        //         element.data.ncrTargetScore.push(graphData.ncrTargetScore)
        //         element.data.ppvPercentage.push(graphData.ppvPercentage)
        //         element.data.ppvTargetPercentage.push(graphData.ppvTargetPercentage)
        //         element.data.ppvTargetScore.push(graphData.ppvTargetScore)
        //         element.data.ltaPercentage.push(graphData.ltaPercentage)
        //         element.data.ltaTargetPercentage.push(graphData.ltaTargetPercentage)
        //         element.data.ltaTargetScore.push(graphData.ltaTargetScore)
        //         element.data.targetScore.push(graphData.totalScoreTarget)
        //         element.data.averageScore.push(graphData.averageScore)
        //         element.data.totalScore.push(graphData.totalScore)
        //         element.data.totalScoreTargetPercentage.push(graphData.totalTargetPercentage)

        //       }

        //     });
        //   })


        this.plantGraphData = plants
    }

    getDashBoardData(data) {

        if(data == "")
        {
            this.isCustomDate = true
            this.startDateControl.enable()
            this.endDateControl.enable()
        }
        else
        {
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
                // this.datesGroup.control["startDate"].setValue(this.startDate)
                // this.datesGroup.control["endDate"].setValue(this.endDate)
                this.cdr.detectChanges();
                this._apiService.isCompareLoader$.next(true);
                // this._apiService.isCompareLoader$.next(true);
                  
                Promise.all([
                    this._apiService.post(api.VendorColorZone, { ...currentData, allVendorCode: currentData.vendorCode }).toPromise(),//0
                    this._apiService.post(api.VendorColorZone, { ...previousData, allVendorCode: currentData.vendorCode }).toPromise(),//1
                    this._apiService.post(api.buyerColorZone, { ...currentData, allBuyerCode: currentData.buyerCode }).toPromise(),//2
                    this._apiService.post(api.buyerColorZone, { ...previousData, allBuyerCode: currentData.buyerCode }).toPromise(),//3
                    this._apiService.post(api.plantColorZone, { ...currentData, allPlantCode: currentData.plantCode }).toPromise(),//6
                    this._apiService.post(api.plantColorZone, { ...previousData, allPlantCode: currentData.plantCode }).toPromise(),//7
                    this._apiService.post(api.plantStatistics, { ...currentData }).toPromise(),//8
                    this._apiService.post(api.plantStatistics, { ...previousData }).toPromise(),//9
                    this._apiService.post(api.plantAverageGraph, { ...currentData }).toPromise(),//16
                    this._apiService.post(`${api.dashboardGraphPO}`, {startDate: currentData.startDate.split("T")[0], endDate: currentData.endDate.split("T")[0], tenantId: this.loggedInUser.tenantID }).toPromise(),//19
                    this._apiService.post(`${api.dashboardStats}`, { startDate: currentData.startDate.split("T")[0], lastDate: currentData.endDate.split("T")[0], tenantId: this.loggedInUser.tenantID }).toPromise(),//19
                    this._apiService.post(`${api.dashboardStats}`, { startDate: previousData.startDate.split("T")[0], lastDate: previousData.endDate.split("T")[0], tenantId: this.loggedInUser.tenantID }).toPromise(),//19
                    this._apiService.post(`${api.dashboardKPICount}`, { startDate: currentData.startDate.split("T")[0], lastDate: currentData.endDate.split("T")[0], tenantId: this.loggedInUser.tenantID }).toPromise(),//19
                    this._apiService.post(`${api.dashboardKPICount}`, { startDate: previousData.startDate.split("T")[0], lastDate: previousData.endDate.split("T")[0], tenantId: this.loggedInUser.tenantID }).toPromise()//19
                ]).then((innerResponse: any) => {
                    if (innerResponse === null || innerResponse === undefined) {
                        this._apiService.isCompareLoader$.next(false)
                        return
                    }
                    // this.dateDiffSentance = 90
    
                    // this.vendorColorZoneGraphData = []
                    // this.buyerColorZoneGraphData = []
                    // this.materialColorZoneGraphData = []
                    // this.plantColorZoneGraphData = []
    
                    // this.vendorColorZoneGraphData = innerResponse[0].data
                    // this.buyerColorZoneGraphData = innerResponse[2].data
                    // this.plantColorZoneGraphData = innerResponse[4].data
    
                    // this.arrangeProperData(innerResponse[4].graphData)

                    setTimeout(() => {
                        // this.vendorColorZoneGraphData = innerResponse[0].data;
                        // this.buyerColorZoneGraphData = innerResponse[2].data;
                        // this.plantColorZoneGraphData = innerResponse[4].data;
                        this.arrangeProperData(innerResponse[4].graphData);
                        
                          window.dispatchEvent(new Event('resize'));
                        this._apiService.isCompareLoader$.next(false); // show loader until delay is over
                      }, 3000); // 3 seconds

                    // this.commodityColorZoneGraphData = innerResponse[2].data
                    this.dashBoardStatistic = {
                        currentStatus: innerResponse[6].data,
                        previousStatus: innerResponse[7].data
                    }
    
                    this.dashBoardRegistration = {
                        currentRegistration: innerResponse[12].data,
                        previousRegistration: innerResponse[13].data
                    }
    
    
                    // this.plantColorZoneStats = this.getColorZonesState(innerResponse[4].data,innerResponse[5].data)
                    // this.commodityColorZoneStats = this.getColorZonesState(innerResponse[6].data,innerResponse[7].data)
                    // this.materialColorZoneStats = this.getColorZonesState(innerResponse[0].data,innerResponse[1].data)
                    // this.vendorColorZoneStats = this.getColorZonesState(innerResponse[0].data,innerResponse[1].data)
                    // this.buyerColorZoneStats = this.getColorZonesState(innerResponse[2].data,innerResponse[3].data)
                    this.totalScores = innerResponse[8].data
                    // this.colorZoneStat = []
                    this.poData = innerResponse[9].data
                    this.dataStats = {
                        currentData: innerResponse[10].data[0],
                        previousData: innerResponse[11].data[0],
    
                    }
    
    
                    // this.plantColorZoneStats = this.getColorZoneStat(innerResponse[4].data, innerResponse[5].data)
                    // this.vendorColorZoneStats = this.getColorZoneStat(innerResponse[0].data, innerResponse[1].data)
                    // this.commodityColorZoneStats = this.getColorZoneStat(innerResponse[0].data, innerResponse[1].data)
                    // this.buyerColorZoneStats = this.getColorZoneStat(innerResponse[2].data, innerResponse[3].data)
                    // this.materialColorZoneStats = this.getColorZoneStat(innerResponse[0].data, innerResponse[1].data)
    
    
    
    
    
                    this._apiService.isCompareLoader$.next(false)
                }).catch(()=>this._apiService.isCompareLoader$.next(false))
                .finally(() =>
                    {})
    
    
    
            }).catch((e: any) => {
                    // this._apiService.isCompareLoader$.next(false)
                })
                .finally(() => {
    
            })
    
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

            case 'Total Po Spend':
                this.totalPoSpendData = data.data
                break;

            case 'Total Issued PO':
                this.totalIssuePoData = data.data
                break;

            case 'Total Sourced Material':
                this.totalSourceMaterialData = data.data
                break;

            case 'Total Recieved PO':
                this.totalRecievedPoData = data.data
                break;

            case 'Dashboard total Score':
                this.dashBoardChartData = data.data
                break;

            case 'Dashboard total Score':
                this.dashBoardChartData = data.data
                break;

            // case 'commodityColorZone':
            //     this.commodityColorZoneChartData = data.data
            //     break;

            // case 'materialColorZone':
            //     this.materialColorZoneChartData = data.data
            //     break;

            // case 'vendorColorZone':
            //     this.vendorColorZoneChartData = data.data
            //     break;

            // case 'buyerColorZone':
            //     this.buyerColorZoneChartData = data.data
            //     break;

            // case 'plantColorZone':
            //     this.plantColorZoneChartData = data.data
            //     break;


            default:
                break
        }
    }


    popUpChart(heading: any) {
        let chartHeading = ['LTA', 'PPV', 'NCR', 'OTD']
        let dashBoardChartData!: any
        let requiredChartData!: any
        let requiredColorData!: any
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

            case 'colorZone':
                requiredChartData = null
                requiredPoData = null
                // requiredColorData = this.colorZoneGraphData;
                break;

            // case 'vendorColorZone':
            //     requiredChartData = this.vendorColorZoneChartData;
            //     break;

            // case 'commodityColorZone':
            //     requiredChartData = this.commodityColorZoneChartData;
            //     break;

            // case 'buyerColorZone':
            //     requiredChartData = this.buyerColorZoneChartData;
            //     break;

            // case 'plantColorZone':
            //     requiredChartData = this.plantColorZoneChartData;
            //     break;

            // case 'materialColorZone':
            //     requiredChartData = this.materialColorZoneChartData;
            //     break;

            case 'Compare Total Score':
                requiredChartData = this.totalCompareScoreList.data;
                break;

            case 'Total Po Spend':
                requiredChartData = this.totalPoSpendData;
                poNamr = 'poSpend'
                break;
            case 'Total Issued PO':
                requiredChartData = this.totalIssuePoData;
                poNamr = 'issuePo'
                break;
            case 'Total Sourced Material':
                requiredChartData = this.totalSourceMaterialData;
                poNamr = 'sourceMaterial'
                break;
            case 'Total Recieved PO':
                requiredChartData = this.totalRecievedPoData;
                poNamr = 'recievedPo'
                break;

            case 'Dashboard total Score':
                // poNamr = 'recievedPo'
                requiredChartData = this.dashBoardChartData
                break;

            default:
                break



        }

        // if(chartHeading.includes(heading))
        // {
        //   if(requiredChartData === null || requiredChartData === undefined){
        //     this._notificationService.push("No graph data", 2)
        //     return  
        //   }
        // }
        if ((requiredChartData === null || requiredChartData === undefined)) {
            this._notificationService.push("No graph data", 2)
            return
        }
        let dialogRef = this.dialog.open(PopupchartComponent,
            {
                width: '90%',
                height: '80%',
                panelClass: 'graph-style',
                data: {
                    name: heading,
                    dashBoardData: requiredChartData,
                    // colorZoneGraphData: requiredColorData,
                    // chartData: requiredChartData,
                    // vendorName: this.vendorName,
                    // executeData: this.apiRequestData
                }
            })
    }

}
