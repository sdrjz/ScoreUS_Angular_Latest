import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { api } from '../api.endpoints';
import { NotificationService } from '../notification.service';
import { GeneralApiService } from '../services/appService/generalApiService';
import { twoLineChartModel } from '../modal/twoLinseChartDataModel';
import { tips } from '../tootTips';
import { MatDialog } from '@angular/material/dialog';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PopupchartComponent } from '../general/popupchart/popupchart.component';
import * as _moment from 'moment/moment';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-scoreus-plant-scorecard',
  templateUrl: './scoreus-plant-scorecard.component.html',
  styleUrls: ['./scoreus-plant-scorecard.component.css']
})
export class ScoreusPlantScorecardComponent implements OnInit {
  totalScores: any
  requiredPlantGraph: any
  plantGraphData: any
  averageApiData: any
  plantPageLoad :any = null;
  dateDiffSentance: any
  previousDateFromApi! : any
  previousStatus: any
  allPlantCode:any;
  tips = tips
  averagePlantApiData :any
  colorZoneGraphData: any
  loader = false
  currentDate: any
  ltaChartData: any
  ltaPercentageChartData: any
  ppvChartData: any
  ppvPercentageChartData: any
  otdChartData: any
  otdPercentageChartData: any
  ncrChartData: any
  ncrPercentageChartData: any
  totalScoreChartData: any
  colorZoneChartData: any
  // these variables are used for change detected output data and sending to pop up component
  previousYear: any
  colorZoneStat: any = []
  chartOption: any
  loggedInUser: any
  ltaAverageScore: any[] = []
  ppvAverageScore: any[] = []
  ncrAverageScore: any[] = []
  otdAverageScore: any[] = []
  compareAverageScore: any[] = []

  public apiPlantData: any
  public listsDropDown: any
  public apiPlantRequestData: any
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
  public plantData: any[]
  public plantName: any[]
  public plantStatistic: any = {
    currentStatus: [],
    previousStatus: []
  }
  public dataForPlantStatistics: any = {
    currentStatus: [],
    previousStatus: []
  }
  public PreviousData: any
  public plantGraph: any
  @Input() subtitle: string;


  constructor(private _apiService: GeneralApiService,
    private _notificationService: NotificationService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private cdr :ChangeDetectorRef
  ) { }





  ngOnInit(): void {
   
     
    

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    // this._apiService.isLanguageSelector$.subscribe((res: any) => this.translateService.use(res))

    this.currentDate = new Date().toString().split(" ")[0] + "," + new Date().toString().split(" ")[1] + " " + new Date().toString().split(" ")[2] + " " + new Date().toString().split(" ")[3];
    var userData = localStorage.getItem('userData');
    if (userData) {
      this.loggedInUser = JSON.parse(userData)
    } else {

    }

    this._apiService.isCompareLoader$.next(true);
    this._apiService.get(`${api.GetPlantScoreCard}/${this.loggedInUser.tenantID}`).subscribe((res: any) => {
      
      if(res.data.length<1){
        this._apiService.isCompareLoader$.next(false);
        this._notificationService.push("No record for this tenant",2);
        return
      }
      
      let currentData = {
        startDate: res.data.startDate,
        endDate: res.data.endDate,
        plantCode: res.data.plantCode,
        allPlantCode: res.data.plantCode,
        tenantId: this.loggedInUser.tenantID
      }
      this.allPlantCode = res.data.plantCode;
      this.apiPlantRequestData = currentData
      this.apiPlantData = currentData
      this.plantPageLoad = currentData
      // var dateComponents = res.data.startDate.split('/');

      // Extract day, month, and year components
      // var day = parseInt(dateComponents[0], 10);
      // var month = parseInt(dateComponents[1], 10) - 1; // Month is 0-based in JavaScript
      // var year = parseInt(dateComponents[2], 10);

      // Create a Date object from the components
      // var inputDate = new Date(year, month, day);

      // Calculate the date one year before
      // var oneYearAgo = new Date(inputDate);
      // oneYearAgo.setFullYear(year - 1);

      // Format the result as "DD/MM/YYYY"
      // var oneYearAgoStr = oneYearAgo.getDate().toString().padStart(2, '0') + '/' +
        // (oneYearAgo.getMonth() + 1).toString().padStart(2, '0') + '/' +
        // oneYearAgo.getFullYear();




      let previousData = {
        startDate: res.previousDate.startDate,
        endDate: res.previousDate.endDate,
        plantCode: res.data.plantCode,
        allPlantCode: res.data.plantCode,
        tenantId: this.loggedInUser.tenantID
      }


      // this.dateDiffSentance = this._apiService.getDateDifference(currentData.startDate.getTime(),currentData.endDate.getTime())+1
      Promise.all([
        this._apiService.post(api.plantColorZone, currentData).toPromise(),
        this._apiService.post(api.plantColorZone, previousData).toPromise(),
        this._apiService.post(api.plantStatistics, currentData).toPromise(),
        this._apiService.post(api.plantStatistics, previousData).toPromise(),
        // this._apiService.post(api.vendorGraph, this.apiRequestData).toPromise()
        this._apiService.post(api.plantAverageGraph, currentData).toPromise()
      ]).then((resData: any) => {

        if (resData === null || resData === undefined) {
          this._apiService.isCompareLoader$.next(false)
          return
        }
        this.arrangeProperData(resData[0].graphData)
        this.dateDiffSentance = resData[2].dateDiff
        this._notificationService.push("Plant scorecard data retrieved", 1);
        this.colorZoneGraphData = []
        this.colorZoneGraphData = resData[0].data;
        this.colorZoneStat = []
        let redCount = 0
        let yellowCount = 0
        let greenCount = 0
        let deno = 0
        let red1Count = 0
        let yellow1Count = 0
        let green1Count = 0
        let deno1 = 0
        resData[0].data.forEach((element: any) => {
          redCount = redCount + element.redNeum
          yellowCount = yellowCount + element.yellowNeum
          greenCount = greenCount + element.greenNeum
          deno = deno + element.deno

        });

        resData[1].data.forEach((element: any) => {
          red1Count = red1Count + element.redNeum
          yellow1Count = yellow1Count + element.yellowNeum
          green1Count = green1Count + element.greenNeum
          deno1 = deno1 + element.deno
        });
console.log('🔴 Current Red Count:', redCount);
console.log('🔴 Current Denominator:', deno);
console.log('🔴 Current Red %:', (redCount / deno) * 100);

console.log('🟥 Previous Red Count:', red1Count);
console.log('🟥 Previous Denominator:', deno1);
console.log('🟥 Previous Red %:', (red1Count / deno1) * 100);

        this.colorZoneStat.push([greenCount, yellowCount, redCount, deno])
        this.colorZoneStat.push([green1Count, yellow1Count, red1Count, deno1])
console.log("🌐 [Landing Page] colorZoneStat initialized:", this.colorZoneStat);
console.log("🟥 Landing Red1 Count:", red1Count);
console.log("🟥 Landing Denominator:", deno1);
console.log("🟥 Landing Red %:", (red1Count / deno1) * 100);
        // this.buyerData = res[2].data;
        this.plantStatistic = {
          currentStatus: resData[2].data,
          previousStatus: resData[3].data
        }
if (resData[2]?.data?.length > 0 && resData[3]?.data?.length > 0) {
  const current = resData[2].data[0].otd_percentage;
  const previous = resData[3].data[0].otd_percentage;
  const change = ((current - previous) / (previous || 1)) * 100;
  console.log("📊 OTD Percentages:");
  console.log("➡️ Current OTD_Per:", current);
  console.log("⬅️ Previous OTD_Per:", previous);
  console.log("📈 OTD Change %:", change.toFixed(2));
} else {
  console.log("⚠️ Missing OTD data to calculate change %");
}


        this.dataForPlantStatistics = {
          currentStatus: resData[2].data,
          previousStatus: resData[3].data
        }
if (resData[2]?.data?.length > 0 && resData[3]?.data?.length > 0) {
  const current = resData[2].data[0].otd_percentage;
  const previous = resData[3].data[0].otd_percentage;
  const change = ((current - previous) / (previous || 1)) * 100;
  console.log("📊 OTD Percentages:");
  console.log("➡️ Current OTD_Per:", current);
  console.log("⬅️ Previous OTD_Per:", previous);
  console.log("📈 OTD Change %:", change.toFixed(2));
} else {
  console.log("⚠️ Missing OTD data to calculate change %");
}
        this.totalScores = resData[4].data



        this._apiService.isCompareLoader$.next(false)
      }, (e: any) => {
        this._notificationService.push("Data set not valid", 2);
        this._apiService.isCompareLoader$.next(false)
      }).finally(() => this._apiService.isCompareLoader$.next(false))






    },((e:any)=>this._apiService.isCompareLoader$.next(false)))




    this._apiService.get(`${api.vendorDropdown}?tenantId=${this.loggedInUser.tenantID}`).
      subscribe((res: any) => {
        this.listsDropDown = res?.data
        // this._apiService.isCompareLoader$.next(false)
        if (res.message == 'Plant Data Not Found!!') {
          this._notificationService.push('No data for this tenant', 1)
        }

      }, (e: any) => this._apiService.isCompareLoader$.next(false))
    // this.getExecutiveData('')
  }


  showChart(data: boolean) {
    let chartDiv = document.getElementById("graph")
    chartDiv.style.display = data === true ? 'block' : 'none'
  }


  getPlantExecutiveData(data: any) {
console.log('📥 getplantExecutiveData() called with:', data);
    this.loader = true
    this._apiService.isCompareLoader$.next(true)

    if (data)
      data.tenantId = +this.loggedInUser.tenantID

    this.apiPlantData = data
    this.apiPlantRequestData = this.apiPlantData

    this.getPlantGraphData('')
  }


  arrangeProperData(data: any) {




    // let elementWithMaxStartDateLength = data.reduce((maxElement, currentElement) => {
    //   if (currentElement.startDate.length > maxElement.startDate.length) {
    //     return currentElement;
    //   } else {
    //     return maxElement;
    //   }
    // }, data[0]);


    let plants = []
    this.apiPlantRequestData.plantCode.split(",").forEach((ele: any) => {
      plants.push({
        code: ele, name: '',
        data: {
          startDate: [],
          otd: [],
          ncr: [],
          lta: [],
          ppv: [],
          totalScore: [],
          otdPercentage: [],
          otdTargetPercentage: [],
          otdTargetScore: [],
          ncrPercentage: [],
          ncrTargetPercentage: [],
          ncrTargetScore: [],
          ltaPercentage: [],
          ltaTargetScore: [],
          ltaTargetPercentage: [],
          ppvPercentage: [],
          ppvTargetPercentage: [],
          ppvTargetScore: [],
          averageScore: [],
          targetScore: [],
          totalScoreTargetPercentage: [],
          averageOtdScore: [],
          averageOtdPercentage: [],
          averageNcrScore: [],
          averageNcrPercentage: [],
          averagePpvScore: [],
          averagePpvPercentage: [],
          averageLtaScore: [],
          averageLtaPercentage: []
        }
      })
    })
    plants.forEach((element: any) => {
      data.forEach((graphData: any) => {

        if (element.code == graphData.plantCode) {

          if (element.name == '')
            element.name = graphData.plantName

          element.data.startDate.push(graphData.startDate)
          element.data.otd.push(graphData.otdScore)
          element.data.ncr.push(graphData.ncrScore)
          element.data.ppv.push(graphData.ppvScore)
          element.data.lta.push(graphData.ltaScore)
          element.data.otdPercentage.push(graphData.otdPercentage)
          element.data.otdTargetPercentage.push(graphData.otdTargetPercentage)
          element.data.otdTargetScore.push(graphData.otdTargetScore)
          element.data.ncrPercentage.push(graphData.ncrPercentage)
          element.data.ncrTargetPercentage.push(graphData.ncrTargetPercentage)
          element.data.ncrTargetScore.push(graphData.ncrTargetScore)
          element.data.ppvPercentage.push(graphData.ppvPercentage)
          element.data.ppvTargetPercentage.push(graphData.ppvTargetPercentage)
          element.data.ppvTargetScore.push(graphData.ppvTargetScore)
          element.data.ltaPercentage.push(graphData.ltaPercentage)
          element.data.ltaTargetPercentage.push(graphData.ltaTargetPercentage)
          element.data.ltaTargetScore.push(graphData.ltaTargetScore)
          element.data.targetScore.push(graphData.totalScoreTarget)
          element.data.averageScore.push(graphData.averageScore)
          element.data.totalScore.push(graphData.totalScore)
          element.data.totalScoreTargetPercentage.push(graphData.totalTargetPercentage)
          element.data.averageLtaScore.push(graphData.averageLtaScore)
          element.data.averageLtaPercentage.push(graphData.averageLtaPercentage)
          element.data.averageOtdScore.push(graphData.averageOtdScore)
          element.data.averageOtdPercentage.push(graphData.averageOtdPercentage)
          element.data.averageNcrScore.push(graphData.averageNcrScore)
          element.data.averageNcrPercentage.push(graphData.averageNcrPercentage)
          element.data.averagePpvScore.push(graphData.averagePpvScore)
          element.data.averagePpvPercentage.push(graphData.averagePpvPercentage)
        }

      });
    })
    this.plantGraphData = plants
  }

  async getData(model): Promise<any> {
    try {
      const response = await this._apiService.post(api.hasPlantData, model).toPromise();
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  getPreviousDate(data:any){
    this.previousDateFromApi = data
  }

  async getPlantGraphData(data: any) {



    if (data != '') {
      this.apiPlantData.plantCode = data
      this.apiPlantRequestData.plantCode = data

    }
    this.apiPlantRequestData = this.apiPlantData;
    this.previousYear = { ...this.apiPlantRequestData }
    let endDate = new Date(this.apiPlantData.endDate)
    let startDate = new Date(this.apiPlantData.startDate)

    // let d = new Date(this.apiPlantRequestData.startDate)
    // d.setDate(d.getDate() - 1)
    // this.previousYear.endDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
    // this.previousYear.startDate = this._apiService.setDateFormat(_moment(_moment(this.apiPlantRequestData.startDate, 'YYYY-MM-DD')).add(-(this._apiService.getDateDifference(startDate.getTime(), endDate.getTime()) + 1), 'days').toDate()).toString();
const currentStart = new Date(this.apiPlantRequestData.startDate);
const currentEnd = new Date(this.apiPlantRequestData.endDate);
const dayDiff = Math.floor((currentEnd.getTime() - currentStart.getTime()) / (1000 * 3600 * 24)) + 1;

const newPrevEnd = new Date(currentStart);
newPrevEnd.setDate(newPrevEnd.getDate() - 1);

const newPrevStart = new Date(newPrevEnd.getTime() - (dayDiff - 1) * 24 * 60 * 60 * 1000);

this.previousYear.startDate = newPrevStart.toISOString().split("T")[0];
this.previousYear.endDate = newPrevEnd.toISOString().split("T")[0];


console.log("🌿 Previous Period Range Calculated:")
console.log("⬅️ Start:", this.previousYear.startDate)
console.log("⬅️ End:", this.previousYear.endDate)

this._apiService.isCompareLoader$.next(true);



    // this.previousYear.endDate = this.apiPlantData.startDate
    // this.previousYear.startDate = this._apiService.setDateFormat(_moment(_moment(this.apiPlantData.startDate, 'YYYY-MM-DD')).add(-this._apiService.getDateDifference(startDate.getTime(), endDate.getTime()), 'days').toDate()).toString();
    // this.dateDiffSentance = this._apiService.getDateDifference(startDate.getTime(), endDate.getTime())+1


    this._apiService.isCompareLoader$.next(true);

    
    if (data != '') {

      if (data.indexOf(",") > 0) {
        let plantCode = []
        data.split(",").forEach((element: any) => {
          plantCode.push(element)
        });
        this.requiredPlantGraph = this.plantGraphData.filter((element: any) => plantCode.includes(element.code))
      } else {
        this.requiredPlantGraph = this.plantGraphData.filter((element: any) => element.code == data)
      }
      this._apiService.isCompareLoader$.next(false);
      
    } else {
      this.averagePlantApiData.startDate = this.apiPlantRequestData.startDate;
      this.averagePlantApiData.endDate = this.apiPlantRequestData.endDate
      
      let model = {
        startDate: this.previousYear.startDate,
        endDate: this.previousYear.endDate,
        tenantId: this.previousYear.tenantId
      }
      let result = await this.getData(model)
      if (result.data == false) {

        this.dateDiffSentance = 0
        this.plantStatistic = null
        this.colorZoneGraphData = null;
        this.colorZoneStat = [];
        this.plantData = null

        Promise.all([
          this._apiService.post(api.plantColorZone, { ...this.apiPlantRequestData, allPlantCode: this.averagePlantApiData.plantCode }).toPromise(),
          // this._apiService.post(api.plantColorZone, { ...this.previousYear, allPlantCode: this.averageApiData.plantCode }).toPromise(),
          this._apiService.post(api.plantData, this.apiPlantRequestData).toPromise(),
          this._apiService.post(api.plantStatistics, {... this.averagePlantApiData}).toPromise(),
          // this._apiService.post(api.plantStatistics, this.previousYear).toPromise(),
          // this._apiService.post(api.plantGraph, this.apiPlantRequestData).toPromise(),
          // this._apiService.post(api.plantAverageGraph, { ...this.averageApiData, tenantId: this.loggedInUser.tenantID }).toPromise()
          this._apiService.post(api.plantAverageGraph, { ...this.apiPlantRequestData }).toPromise(),
          this._apiService.post(api.plantStatistics, {... this.averagePlantApiData,plantCode:this.allPlantCode}).toPromise(),

        ]).then((res: any) => {
          if (res === null || res === undefined) {
            this._apiService.isCompareLoader$.next(false)
            return
          }
          this.requiredPlantGraph = null
          this._notificationService.push("Plant scorecard data retrieved", 1);
          this.colorZoneGraphData = res[0].data;
          // this.colorZoneStat = res[1].data;
          this.arrangeProperData(res[0].graphData)
          this.colorZoneStat = []

          let redCount = 0
          let yellowCount = 0
          let greenCount = 0
          let deno = 0
          let red1Count = 0
          let yellow1Count = 0
          let green1Count = 0
          let deno1 = 0
          res[0].data.forEach((element: any) => {
            redCount = redCount + element.redNeum
            yellowCount = yellowCount + element.yellowNeum
            greenCount = greenCount + element.greenNeum
            deno = deno + element.deno
          });

          // res[1].data.forEach((element: any) => {
          //   red1Count = redCount + element.redNeum
          //   yellow1Count = yellowCount + element.yellowNeum
          //   green1Count = greenCount + element.greenNeum
          //   deno1 = deno + element.deno
          // });
          this._apiService.averageScore$.next(res[2].data)
          this.colorZoneStat.push([greenCount, yellowCount, redCount, deno])
          // this.colorZoneStat.push([green1Count, yellow1Count, red1Count, deno1])

          this.dateDiffSentance = res[2].dateDiff

          this.plantData = res[1].data;
          this.plantStatistic = {
            currentStatus: res[2].data,
            previousStatus: null
          }

          this.dataForPlantStatistics = {
            currentStatus: res[2].data,
            previousStatus: null
          }


          this.plantName = []

          this.plantName.unshift({ id: 0, plantName: 'Target' })
          this.plantName.unshift({ id: 1, plantName: 'Average' })


          let list = []
          this.totalScores = res[3].data

          this._apiService.isCompareLoader$.next(false)
          this.loader = false
        }, (e: any) => {
          this._notificationService.push("Data set not valid", 2);
          this._apiService.isCompareLoader$.next(false)
        }).finally(() => this._apiService.isCompareLoader$.next(false))      
      
      } else {





        this.dateDiffSentance = 0
        this.plantStatistic = null
        this.colorZoneGraphData = null;
        this.colorZoneStat = [];
        this.plantData = null
console.log("🌿 Previous Period Payload:", this.previousYear);
console.log("📅 Current Period Payload:", this.apiPlantRequestData);


        Promise.all([
          this._apiService.post(api.plantColorZone, { ...this.apiPlantRequestData, allPlantCode: this.averagePlantApiData.plantCode }).toPromise(),
          this._apiService.post(api.plantColorZone, { ...this.previousYear, allPlantCode: this.averagePlantApiData.plantCode }).toPromise(),
          this._apiService.post(api.plantData, this.apiPlantRequestData).toPromise(),
          this._apiService.post(api.plantStatistics, { ...this.apiPlantRequestData, tenantId: this.loggedInUser.tenantID }).toPromise(),


          this._apiService.post(api.plantStatistics, this.previousYear).toPromise(),
          // this._apiService.post(api.plantGraph, this.apiPlantRequestData).toPromise(),
          this._apiService.post(api.plantAverageGraph, { ...this.apiPlantRequestData, tenantId: this.loggedInUser.tenantID }).toPromise(),
          this._apiService.post(api.plantStatistics, { ...this.apiPlantRequestData, tenantId: this.loggedInUser.tenantID,plantCode :this.allPlantCode }).toPromise(),

        ]).then((res: any) => {
  console.log("📦 res[3] currentStats:", res[3]?.data);
  console.log("📦 res[4] previousStats:", res[4]?.data);
          if (res === null || res === undefined) {
            this._apiService.isCompareLoader$.next(false)
            return
          }
          
          this.requiredPlantGraph = null
          this._notificationService.push("Plant scorecard data retrieved", 1);
          this.colorZoneGraphData = res[0].data;
          // this.colorZoneStat = res[1].data;
          this.arrangeProperData(res[0].graphData)
          this.colorZoneStat = []
          this._apiService.averageScore$.next(res[3].data)
          let redCount = 0
          let yellowCount = 0
          let greenCount = 0
          let deno = 0
          let red1Count = 0
          let yellow1Count = 0
          let green1Count = 0
          let deno1 = 0
          res[0].data.forEach((element: any) => {
            redCount = redCount + element.redNeum
            yellowCount = yellowCount + element.yellowNeum
            greenCount = greenCount + element.greenNeum
            deno = deno + element.deno
          });

          res[1].data.forEach((element: any) => {
            red1Count = red1Count + element.redNeum
            yellow1Count = yellow1Count + element.yellowNeum
            green1Count = green1Count + element.greenNeum
            deno1 = deno1 + element.deno
          });

          this.colorZoneStat.push([greenCount, yellowCount, redCount, deno])
          this.colorZoneStat.push([green1Count, yellow1Count, red1Count, deno1])
console.log("⚙️ [Execute Click] colorZoneStat updated:", this.colorZoneStat);
console.log("🟥 Execute Red1 Count:", red1Count);
console.log("🟥 Execute Denominator:", deno1);
console.log("🟥 Execute Red %:", (red1Count / deno1) * 100);

          this.dateDiffSentance = res[3].dateDiff

          this.plantData = res[2].data;
          this.plantStatistic = {
            currentStatus: res[3].data,
            previousStatus: res[4].data
          }
if (res[3]?.data?.length > 0 && res[4]?.data?.length > 0) {
  const current = res[3].data[0].otd_percentage;
  const previous = res[4].data[0].otd_percentage;
  const change = ((current - previous) / (previous || 1)) * 100;
  console.log("📊 [Execute Click] OTD Percentages:");
  console.log("➡️ Current OTD_Per:", current);
  console.log("⬅️ Previous OTD_Per:", previous);
  console.log("📈 OTD Change %:", change.toFixed(2));
} else {
  console.log("⚠️ [Execute Click] Missing OTD data to calculate change %");
}

          this.dataForPlantStatistics = {
            currentStatus: res[6].data,
            previousStatus: res[4].data
          }


          this.plantName = []
          // let i = 1
          // res[5].data.ltA_List.forEach((element: any) => {
          //   if (!this.vendorName.some((i: any) => i.vendorName == element.vendorName)) {
          //     this.vendorName.push({ id: i, vendorName: element.vendorName })
          //     i++
          //   }
          // });

          this.plantName.unshift({ id: 0, plantName: 'Target' })
          this.plantName.unshift({ id: 1, plantName: 'Average' })


          let list = []
          this.totalScores = res[5].data
          // res[5]?.data?.totalscorE_List.forEach((i: any) => {
          //   let isMonthExist = false
          //   isMonthExist = list.some((j:any)=>j.monthName == i.monthName)
          //   if(!isMonthExist)
          //   list.push({ monthName: i.monthName, totalScoreTargetScore: i.totalScoreTargetScore, totalScore: i.totalScore })
          // });


          // this.totalScoreList = {
          //   data: list,
          //   chartFor: 'totalScore',
          //   heading: 'Total Score',
          //   listVendor: this.plantName
          // }
          // this.otdAverageScore = []
          // res[5]?.data?.otD_List.forEach((i: any) => {
          //   let isMonthExist = false;
          //   isMonthExist = this.otdAverageScore.some((j:any)=>j.monthName == i.monthName)
          //   if(!isMonthExist)
          //   this.otdAverageScore.push({ monthName: i.monthName, percentage: i.percentage, score: i.score })
          // });
          // this.ncrAverageScore = []
          // res[5]?.data?.ncR_List.forEach((i: any) => {
          //   let isMonthExist = false;
          //   isMonthExist = this.ncrAverageScore.some((j:any)=>j.monthName == i.monthName)
          //   if(!isMonthExist)
          //   this.ncrAverageScore.push({ monthName: i.monthName, percentage: i.percentage, score: i.score })
          // });

          // this.ppvAverageScore = []
          // res[5]?.data?.ppV_List.forEach((i: any) => {
          //   let isMonthExist = false;
          //   isMonthExist = this.ppvAverageScore.some((j:any)=>j.monthName == i.monthName)
          //   if(!isMonthExist)
          //   this.ppvAverageScore.push({ monthName: i.monthName, percentage: i.percentage, score: i.score })
          // });

          // this.ltaAverageScore = []
          // res[5]?.data?.ltA_List.forEach((i: any) => {
          //   let isMonthExist = false;
          //   isMonthExist = this.ltaAverageScore.some((j:any)=>j.monthName == i.monthName)
          //   if(!isMonthExist)
          //   this.ltaAverageScore.push({ monthName: i.monthName, percentage: i.percentage, score: i.score })
          // });

          // this.compareAverageScore = []
          // res[5]?.data?.totalscorE_List.forEach((i: any) => {
          //   let isMonthExist = false;
          //   isMonthExist = this.compareAverageScore.some((j:any)=>j.monthName == i.monthName)
          //   if(!isMonthExist)
          //   this.compareAverageScore.push({ monthName: i.monthName, percentage: i.percentage, score: i.score })
          // });

          this._apiService.isCompareLoader$.next(false)
          this.loader = false
        }, (e: any) => {
          this._notificationService.push("Data set not valid", 2);
          this._apiService.isCompareLoader$.next(false)
        }).finally(() => this._apiService.isCompareLoader$.next(false))
      }
    }

  }



  getChartData(data: any) {
    switch (data.name) {
      case 'LTA SCORE':
        this.ltaChartData = data.data;
        break;

      case 'LTA percentage':
        this.ltaPercentageChartData = data.data;
        break;

      case 'PPV SCORE':
        this.ppvChartData = data.data;
        break;

      case 'PPV percentage':
        this.ppvPercentageChartData = data.data
        break;

      case 'NCR SCORE':
        this.ncrChartData = data.data
        break;

      case 'NCR percentage':
        this.ncrPercentageChartData = data.data
        break;

      case 'OTD SCORE':
        this.otdChartData = data.data
        break;

      case 'OTD percentage':
        this.otdPercentageChartData = data.data
        break;

      case 'Total Score':
        this.totalScoreChartData = data.data
        break;
      case 'vendorcolorzone':
        this.colorZoneChartData = data.data
      case 'Compare total score':
        this.totalCompareScoreList = data.data
      default:
        break
    }




  }


  popUpChart(heading: any) {
    let requiredChartData: any
    let requiredColorData: any
    let requiredCompareColorData: any
    switch (heading) {
      case 'LTA SCORE':
        requiredChartData = this.ltaChartData;
        break;

      case 'LTA percentage':
        requiredChartData = this.ltaPercentageChartData;
        break;

      case 'PPV SCORE':
        requiredChartData = this.ppvChartData;
        break;

      case 'PPV percentage':
        requiredChartData = this.ppvPercentageChartData;
        break;

      case 'NCR SCORE':
        requiredChartData = this.ncrChartData;
        break;

      case 'NCR percentage':
        requiredChartData = this.ncrPercentageChartData;
        break;

      case 'OTD SCORE':
        requiredChartData = this.otdChartData;
        break;

      case 'OTD percentage':
        requiredChartData = this.otdPercentageChartData;
        break;

      case 'Total Score':
        requiredChartData = this.totalScoreChartData;
        break;

      case 'colorZone':
        requiredChartData = this.colorZoneChartData
        break;
      case 'Compare Total Score':
        requiredChartData = null
        break;
      default:
        break



    }

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
          dashBoardData: requiredChartData
        }
      })
  }


  async generateLtaImageBase64(lta: any, data: any) {
    return new Promise((resolve, reject) => {
      var img = new Image()
      img.src = '../../assets/images/score_us_logo.PNG'

      html2canvas(lta).then(canvas => {

        let ltaImage = canvas.toDataURL('image/png')
        var lta_Doc = new jsPDF('p', 'mm', 'a4');
        lta_Doc.text(this.currentDate, 8, 10)
        lta_Doc.setFont("helvetica");
        lta_Doc.setFontSize(9);
        lta_Doc.addImage(img, 'png', 190, 2, 15, 10)
        lta_Doc.addImage(ltaImage, 'png', 5, 20, 200, 250)
        let otdString = lta_Doc.output('datauristring');
        if (data?.isViewFirst) {
          lta_Doc.save();
        }
        resolve(otdString);
        reject(
          this._apiService.isCompareLoader$.next(false))
      });
    });
  }








  async sendPlantReport(data: any) {

    var totalDoc = new jsPDF('p', 'mm', 'a4');

    var img = new Image()
    img.src = '../../assets/images/score_us_logo.PNG'



    // let ltaPercentage = document.getElementById('ltaP');
    // let ltaScore = document.getElementById('lta');
    // let otdScore = document.getElementById('otd');
    // let otdPercentage = document.getElementById('otdP');
    // let ncrPercentage = document.getElementById('ncrP');
    // let ncrScore = document.getElementById('ncr');
    // let ppvScore = document.getElementById('ppv');
    // let ppvPercentage = document.getElementById('ppvP');
    let totalScore = document.getElementById('score');
    let colorZone = document.getElementById('colorZone');
    let lta = document.getElementById('lta');
    let ppv = document.getElementById('ppv');
    let otd = document.getElementById('otd');
    let ncr = document.getElementById('ncr');



    // for total score
    let index = -1
    index = data.selected.indexOf(1)
    if (index > -1) {
      let totalImageBase64 = await this.generateLtaImageBase64(totalScore, data);
      for (var i = 0; i < data.length; i++)
        data[i].formData.push({ name: "plantTotal_" + this.loggedInUser.tenantID + data[i].codes + "_" + _moment(new Date()).format('MM/DD/YYYY'), fileString: totalImageBase64 });
    }


    //for color zone
    index = -1
    index = data.selected.indexOf(7)

    if (index > -1) {
      let colorZoneImageBase64 = await this.generateLtaImageBase64(colorZone, data[0]);
      for (var i = 0; i < data.length; i++)
        data[i].formData.push({ name: "color_" + this.loggedInUser.tenantID + data[i].codes + "_" + _moment(new Date()).format('MM/DD/YYYY'), fileString: colorZoneImageBase64 });
    }

    // for lta
    index = -1
    index = data.selected.indexOf(11)

    if (index > -1) {
      let ltaImageBase64 = await this.generateLtaImageBase64(lta, data[0]);
      for (var i = 0; i < data.length; i++)
        data[i].formData.push({ name: "lta_" + this.loggedInUser.tenantID + data[i].codes + "_" + _moment(new Date()).format('MM/DD/YYYY'), fileString: ltaImageBase64 });
    }


    // for ppv
    index = -1
    index = data.selected.indexOf(10)

    if (index > -1) {
      let ppvImageBase64 = await this.generateLtaImageBase64(ppv, data[0]);
      for (var i = 0; i < data.length; i++)
        data[i].formData.push({ name: "ppv_" + this.loggedInUser.tenantID + data[i].codes + "_" + _moment(new Date()).format('MM/DD/YYYY'), fileString: ppvImageBase64 });
    }

    // for ncr
    index = -1
    index = data.selected.indexOf(9)

    if (index > -1) {
      let ncrImageBase64 = await this.generateLtaImageBase64(ncr, data[0]);
      for (var i = 0; i < data.length; i++)
        data[i].formData.push({ name: "ncr_" + this.loggedInUser.tenantID + data[i].codes + "_" + _moment(new Date()).format('MM/DD/YYYY'), fileString: ncrImageBase64 });
    }

    // for otd
    index = -1
    index = data.selected.indexOf(8)

    if (index > -1) {
      let otdImageBase64 = await this.generateLtaImageBase64(otd, data[0]);
      for (var i = 0; i < data.length; i++)
        data[i].formData.push({ name: "otd_" + this.loggedInUser.tenantID + data[i].code + "_" + _moment(new Date()).format('MM/DD/YYYY'), fileString: otdImageBase64 });
    }


    delete data[0].isViewFirst
    delete data[0].selected
    delete data[0].currentDate
    // data.codes = []
    // data.tenantId = this.loggedInUser.TenantID;
    // if (this.apiPlantRequestData.plantCode.split(",").length > 0) {
    //   this.apiPlantRequestData.plantCode.split(",").forEach((element: any) => {
    //     data.codes.push(element)
    //   });
    // } else {
    //   data.codes = this.apiPlantRequestData.plantCode
    // }

    let chartDiv = document.getElementById("graph")


    data.forEach((element: any) => {
      this._apiService.post(api.sendVendorReport, element)
        .subscribe((res: any) => {
          this._apiService.isCompareLoader$.next(false)
          chartDiv.style.display = 'none';
          this._apiService.isCompareLoader$.next(false)
        },
          (err: any) => {
            this._apiService.isCompareLoader$.next(false)
            chartDiv.style.display = 'none';


          })


    });

    //for new api new var were introduced
    // data.tenantId = this.loggedInUser.tenantID;
    // data.Id = this.loggedInUser.userID
    // data.ReportFor = 2;
    // this._apiService.post(api.sendReport, data)
    //   .subscribe((res: any) => {
    //     this._apiService.isCompareLoader$.next(false)
    //     chartDiv.style.display = 'none';
    //     this._apiService.isCompareLoader$.next(false)
    //   },
    //     (err: any) => {
    //       this._apiService.isCompareLoader$.next(false)
    //       chartDiv.style.display = 'none';

    //     })


  }


  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
  getAverageFormGroupData(data: any) {
    this.averageApiData = data
  }

  getAverageData(data:any){
    this.averagePlantApiData = data
  }
  

}
