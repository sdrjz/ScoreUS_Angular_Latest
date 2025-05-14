import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { twoLineChartModel } from '../modal/twoLinseChartDataModel';
import { tips } from '../tootTips';
import { GeneralApiService } from '../services/appService/generalApiService';
import { NotificationService } from '../notification.service';
import { MatDialog } from '@angular/material/dialog';
import { api } from '../api.endpoints';
import * as _moment from 'moment/moment';
import { PopupchartComponent } from '../general/popupchart/popupchart.component';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-scoreus-buyer-scorecard',
  templateUrl: './scoreus-buyer-scorecard.component.html',
  styleUrls: ['./scoreus-buyer-scorecard.component.css']
})
export class ScoreusBuyerScorecardComponent implements OnInit {
  requiredBuyerGraph!:any[]
  buyerPageLoad : any
  buyerGraphData:any[]=
  [
  ]

  totalScores:any[]=[]
  replicaColorZoneStat
  dateDiffSentance: any
  previousStatus: any
  tips = tips
 previousDateFromApi! : any

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
  colorZoneChartData:any
  // these variables are used for change detected output data and sending to pop up component
  previousYear: any
  colorZoneStat: any[]=[]
  chartOption: any
  loggedInUser: any
  ltaAverageScore: any[] = []
  ppvAverageScore: any[] = []
  ncrAverageScore: any[] = []
  otdAverageScore: any[] = []
  compareAverageScore: any[] = []
  public apiData: any
  public averageBuyerApiData: any
  public listsDropDown: any
  public apiBuyerRequestData: any
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
  public buyerData: any[]
  public buyerName: any[]
  public buyerStatistic: any = {
    currentStatus: [],
    previousStatus: []
  }
  public dataForBuyerStatistics: any = {
    currentStatus: [],
    previousStatus: []
  }
  public PreviousData: any
  public BuyerGraph: any
  @Input() subtitle: string;

  constructor(private _apiService: GeneralApiService,
    private _notificationService: NotificationService,
    private dialog: MatDialog,
    private translateService:TranslateService,
    private cdr :ChangeDetectorRef) { }

  ngOnInit(): void {
     console.log("✅ scoreus-buyer-scorecard.component.ts loaded");

    this.currentDate = new Date().toString().split(" ")[0] + "," + new Date().toString().split(" ")[1] + " " + new Date().toString().split(" ")[2] + " " + new Date().toString().split(" ")[3];
    var userData = localStorage.getItem('userData');
    if (userData) {
      this.loggedInUser = JSON.parse(userData)
    } else {

    }
    

    

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    this._apiService.isCompareLoader$.next(true);
    this._apiService.get(`${api.GetBuyerScoreCard}/${this.loggedInUser.tenantID}`).subscribe((res:any)=>{
      
      if(res.data.length<1){
        this._apiService.isCompareLoader$.next(false);
        this._notificationService.push("No record for this tenant",2);
        return
      }
      
      let currentData = {
        startDate : res.data.startDate,
        endDate 	: res.data.endDate ,
        plantCode : res.data.plantCode,
        buyerCode : res.data.buyerCode,
        allBuyerCode : res.data.buyerCode,
        tenantId : this.loggedInUser.tenantID
      }
      this.apiBuyerRequestData = currentData
      this.apiData = currentData
      this.buyerPageLoad  = currentData
      
      


      let previousData = {
        startDate : res.previousDate.startDate,
        endDate 	: res.previousDate.endDate ,
        plantCode : res.data.plantCode,
        buyerCode : res.data.buyerCode,
        allBuyerCode : res.data.buyerCode,
        tenantId : this.loggedInUser.tenantID
      }
   
      Promise.all([
        this._apiService.post(api.buyerColorZone, currentData).toPromise(),
        this._apiService.post(api.buyerColorZone, previousData).toPromise(),
        this._apiService.post(api.buyerStatistics, currentData).toPromise(),
        this._apiService.post(api.buyerStatistics, previousData).toPromise(),
        // this._apiService.post(api.vendorGraph, this.apiRequestData).toPromise()
        this._apiService.post(api.buyerAverageGraph, currentData).toPromise()
      ]).then((resData: any) => {

        if (resData === null || resData === undefined) {
          this._apiService.isCompareLoader$.next(false)
          return
        }
       
        this.dateDiffSentance = resData[2].dateDiff
        this._notificationService.push("Buyer scorecard data retrieved", 1);
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
        resData[0].data.forEach((element:any) => {
          redCount = redCount + element.redNeum
          yellowCount = yellowCount + element.yellowNeum
          greenCount = greenCount + element.greenNeum
          deno = deno + element.deno

        });
        
        resData[1].data.forEach((element:any) => {
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
      

        this.colorZoneStat.push([greenCount,yellowCount,redCount,deno])
        this.colorZoneStat.push([green1Count,yellow1Count,red1Count,deno1])
console.log("🌐 [Landing Page] colorZoneStat initialized:", this.colorZoneStat);
console.log("🟥 Landing Red1 Count:", red1Count);
console.log("🟥 Landing Denominator:", deno1);
console.log("🟥 Landing Red %:", (red1Count / deno1) * 100);
        // this.buyerData = res[2].data;
        this.buyerStatistic = {
          currentStatus: resData[2].data,
          previousStatus: resData[3].data
        }

        this.dataForBuyerStatistics = {
          currentStatus: resData[2].data,
          previousStatus: resData[3].data
        }
        this.totalScores  = resData[4].data
        
        this.arrangeProperData(resData[0].graphData)

        this._apiService.isCompareLoader$.next(false)
      }, (e: any) => {
        this._notificationService.push("Data set not valid", 2);
        this._apiService.isCompareLoader$.next(false)
      }).finally(() => this._apiService.isCompareLoader$.next(false))
    },((e:any)=>this._apiService.isCompareLoader$.next(false)))



    // this.loggedInUser.tenantID =1
    // this._apiService.isCompareLoader$.next(true)
    this._apiService.get(`${api.vendorDropdown}?tenantId=${this.loggedInUser.tenantID}`).
      subscribe((res: any) => {
        this.listsDropDown = res?.data
        // this._apiService.isCompareLoader$.next(false)
        if (res.message == 'Plant Data Not Found!!') {
          this._notificationService.push('No data for this tenant', 1)
        }

      }, (e: any) => this._apiService.isCompareLoader$.next(false))
  }


 arrangeProperData(data:any){



    let buyers = []
    this.apiBuyerRequestData.buyerCode.split(",").forEach((ele:any)=>{
      buyers.push({code:ele,name:'',
        data:{
          startDate:[],
          otd:[],
          ncr:[],
          lta:[],
          ppv:[],
          totalScore:[],
          otdPercentage:[],
          otdTargetPercentage:[],
          otdTargetScore:[],
          ncrPercentage:[],
          ncrTargetPercentage:[],
          ncrTargetScore:[],
          ltaPercentage:[],
          ltaTargetScore:[],
          ltaTargetPercentage:[],
          ppvPercentage:[],
          ppvTargetPercentage:[],
          ppvTargetScore:[],
          averageScore:[],
          targetScore:[],
          totalScoreTargetPercentage:[],
          averageOtdScore: [],
          averageOtdPercentage: [],
          averageNcrScore: [],
          averageNcrPercentage: [],
          averagePpvScore: [],
          averagePpvPercentage: [],
          averageLtaScore: [],
          averageLtaPercentage: []
        }})
    })
    buyers.forEach((element:any)=>{
      data.forEach((graphData:any) => {
        
        if(element.code == graphData.buyerCode){
          
          if(element.name =='')
          element.name = graphData.buyerName
        
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
      this.buyerGraphData = buyers
 }

 showChart(data: boolean) {
    let chartDiv = document.getElementById("graph")
    chartDiv.style.display = data === true ? 'block' : 'none'
 }
 getBuyerExecutiveData(data: any) {
console.log('📥 getBuyerExecutiveData() called with:', data);
    console.trace("Trace from getBuyerExecutiveData");
    this.loader = true
    this._apiService.isCompareLoader$.next(true)

    if (data)
      data.tenantId = +this.loggedInUser.tenantID

    this.apiData = data
    this.apiBuyerRequestData = this.apiData

 
    this.getBuyerGraphData('')



 }
 async getData(model): Promise<any> {
    try {
      const response = await this._apiService.post(api.hasPlantData,model).toPromise();
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
 }
  getPreviousDate(data:any){
    this.previousDateFromApi = data
  }
 async getBuyerGraphData(data: any) {
   
    
   
    if (data != '') {
      this.apiData.buyerCode = data
      this.apiBuyerRequestData.buyerCode = data

    }
    this.apiBuyerRequestData = this.apiData;
    this.previousYear = { ...this.apiBuyerRequestData }
    let endDate = new Date(this.apiData.endDate)
    let startDate = new Date(this.apiData.startDate)
    
    // let d = new Date(this.apiData.startDate)
    // d.setDate(d.getDate()-1)
    // this.previousYear.endDate = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+ d.getDate()
    // this.previousYear.startDate = this._apiService.setDateFormat(_moment(_moment(this.apiData.startDate, 'YYYY-MM-DD')).add(-(this._apiService.getDateDifference(startDate.getTime(), endDate.getTime())+1), 'days').toDate()).toString();

const currentStart = new Date(this.apiBuyerRequestData.startDate);
const currentEnd = new Date(this.apiBuyerRequestData.endDate);

// Calculate the number of days in the current range
const dayDiff = Math.floor((currentEnd.getTime() - currentStart.getTime()) / (1000 * 3600 * 24)) + 1;

// Calculate previous end (1 day before current start)
const newPrevEnd = new Date(currentStart);
newPrevEnd.setDate(newPrevEnd.getDate() - 1);

// Calculate previous start using timestamp arithmetic
const newPrevStart = new Date(newPrevEnd.getTime() - (dayDiff - 1) * 24 * 60 * 60 * 1000);

// Format to YYYY-MM-DD and assign to previousYear
this.previousYear.startDate = newPrevStart.toISOString().split("T")[0];
this.previousYear.endDate = newPrevEnd.toISOString().split("T")[0];

console.log("📅 Buyer Previous Start Date:", this.previousYear.startDate);
console.log("📅 Buyer Previous End Date:", this.previousYear.endDate);
    

    // this.previousYear.endDate = this.apiData.startDate
    // this.previousYear.startDate = this._apiService.setDateFormat(_moment(_moment(this.apiData.startDate, 'YYYY-MM-DD')).add(-this._apiService.getDateDifference(startDate.getTime(), endDate.getTime()), 'days').toDate()).toString();

    this._apiService.isCompareLoader$.next(true);
    if (data != '') {
    

      if(data.indexOf(",")>0){
        let buyerCode = []
        data.split(",").forEach((element:any) => {
          buyerCode.push(element)
      });
     this.requiredBuyerGraph =this.buyerGraphData.filter((element:any)=>buyerCode.includes(element.code))
    }else{
      this.requiredBuyerGraph = this.buyerGraphData.filter((element:any)=>element.code == data)      
    }
    this._apiService.isCompareLoader$.next(false);
      
    



    } else {



      this.averageBuyerApiData.startDate = this.apiBuyerRequestData.startDate;
      this.averageBuyerApiData.endDate = this.apiBuyerRequestData.endDate

      let model = {
        startDate : this.previousYear.startDate,
        endDate : this.previousYear.endDate,
        tenantId : this.previousYear.tenantId
      }      
     let result = await this.getData(model)
     if(result.data == false)
     {
      this.dateDiffSentance = 0
      this.buyerStatistic = null
      this.colorZoneGraphData = null;
      this.colorZoneStat = [];
      this.buyerData = null
  

      Promise.all([
        this._apiService.post(api.buyerColorZone, {...this.apiBuyerRequestData,allBuyerCode : this.averageBuyerApiData.buyerCode}).toPromise(),
        // this._apiService.post(api.buyerColorZone, {...this.previousYear , allBuyerCode:this.averageBuyerApiData.buyerCode}).toPromise(),
        this._apiService.post(api.buyerData, this.apiBuyerRequestData).toPromise(),
        this._apiService.post(api.buyerStatistics, {...this.averageBuyerApiData,tenantId:this.loggedInUser.tenantID}).toPromise(),
        // this._apiService.post(api.buyerStatistics, this.previousYear).toPromise(),
        // this._apiService.post(api.vendorGraph, this.apiRequestData).toPromise()
        this._apiService.post(api.buyerAverageGraph, {...this.apiBuyerRequestData}).toPromise()
        
      ]).then((res: any) => {

        if (res === null || res === undefined) {
          this._apiService.isCompareLoader$.next(false)
          return
        }
        this.requiredBuyerGraph = null
        this._notificationService.push("Buyer scorecard data retrieved", 1);
        this.colorZoneGraphData = res[0].data;
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
        this.dateDiffSentance = res[2].dateDiff 
        res[0].data.forEach((element:any) => {
          redCount = redCount + element.redNeum
          yellowCount = yellowCount + element.yellowNeum
          greenCount = greenCount + element.greenNeum
          deno = deno + element.deno
        });
        
        // res[1].data.forEach((element:any) => {
        //   red1Count = redCount + element.redNeum
        //   yellow1Count = yellowCount + element.yellowNeum
        //   green1Count = greenCount + element.greenNeum
        //   deno1 = deno + element.deno
        // });

        this.colorZoneStat.push([greenCount,yellowCount,redCount,deno])
        // this.colorZoneStat.push([green1Count,yellow1Count,red1Count,deno1])
       
        this.buyerData = res[1].data;
        this.buyerStatistic = {
          currentStatus: res[2].data,
          previousStatus: null
        }
        this._apiService.averageScore$.next(res[2].data)
        this.dataForBuyerStatistics = {
          currentStatus: res[2].data,
          previousStatus: null
        }


        this.buyerName = []
        // let i = 1
        // res[5].data.ltA_List.forEach((element: any) => {
        //   if (!this.vendorName.some((i: any) => i.vendorName == element.vendorName)) {
        //     this.vendorName.push({ id: i, vendorName: element.vendorName })
        //     i++
        //   }
        // });

        this.buyerName.unshift({ id: 0, buyerName: 'Target' })
        this.buyerName.unshift({ id: 1, buyerName: 'Average' })

        let list = []
        this.totalScores = res[3].data

        this.compareAverageScore = []
       
        

        this._apiService.isCompareLoader$.next(false)
        this.loader = false
      }, (e: any) => {
        this._notificationService.push("Data set not valid", 2);
        this._apiService.isCompareLoader$.next(false)
      }).finally(() => this._apiService.isCompareLoader$.next(false))
     }else{
     
      this.dateDiffSentance = 0
      this.buyerStatistic = null
      this.colorZoneGraphData = null;
      this.colorZoneStat = [];
      this.buyerData = null
  

      Promise.all([
        this._apiService.post(api.buyerColorZone, {...this.apiBuyerRequestData,allBuyerCode : this.averageBuyerApiData.buyerCode}).toPromise(),
        this._apiService.post(api.buyerColorZone, {...this.previousYear , allBuyerCode:this.averageBuyerApiData.buyerCode}).toPromise(),
        this._apiService.post(api.buyerData, this.apiBuyerRequestData).toPromise(),
        this._apiService.post(api.buyerStatistics, {...this.apiBuyerRequestData}).toPromise(),
        this._apiService.post(api.buyerStatistics, this.previousYear).toPromise(),
        // this._apiService.post(api.vendorGraph, this.apiRequestData).toPromise()
        this._apiService.post(api.buyerAverageGraph, {...this.apiBuyerRequestData}).toPromise(),
        this._apiService.post(api.buyerStatistics, {...this.apiBuyerRequestData,buyerCode : this.averageBuyerApiData.buyerCode}).toPromise()

      ]).then((res: any) => {

        if (res === null || res === undefined) {
          this._apiService.isCompareLoader$.next(false)
          return
        }
        this.requiredBuyerGraph = null;
        this._notificationService.push("Buyer scorecard data retrieved", 1);
        this.colorZoneGraphData = res[0].data;
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
        this.dateDiffSentance = res[3].dateDiff 
        res[0].data.forEach((element:any) => {
          redCount = redCount + element.redNeum
          yellowCount = yellowCount + element.yellowNeum
          greenCount = greenCount + element.greenNeum
          deno = deno + element.deno
        });
        
        res[1].data.forEach((element:any) => {
          red1Count = red1Count + element.redNeum
          yellow1Count = yellow1Count + element.yellowNeum
          green1Count = green1Count + element.greenNeum
          deno1 = deno1 + element.deno
        });

        this.colorZoneStat.push([greenCount,yellowCount,redCount,deno])
        this.colorZoneStat.push([green1Count,yellow1Count,red1Count,deno1])
console.log("⚙️ [Execute Click] colorZoneStat updated:", this.colorZoneStat);
console.log("🟥 Execute Red1 Count:", red1Count);
console.log("🟥 Execute Denominator:", deno1);
console.log("🟥 Execute Red %:", (red1Count / deno1) * 100);
        this.buyerData = res[2].data;
        this.buyerStatistic = {
          currentStatus: res[3].data,
          previousStatus: res[4].data
        }
        this._apiService.averageScore$.next(res[3].data)
        this.dataForBuyerStatistics = {
          currentStatus: res[6].data,
          previousStatus: res[4].data
        }


        this.buyerName = []
        // let i = 1
        // res[5].data.ltA_List.forEach((element: any) => {
        //   if (!this.vendorName.some((i: any) => i.vendorName == element.vendorName)) {
        //     this.vendorName.push({ id: i, vendorName: element.vendorName })
        //     i++
        //   }
        // });

        this.buyerName.unshift({ id: 0, buyerName: 'Target' })
        this.buyerName.unshift({ id: 1, buyerName: 'Average' })

        let list = []
        this.totalScores = res[5].data

        this.compareAverageScore = []
        res[5]?.data?.totalscorE_List.forEach((i: any) => {
          let isMonthExist = false;
          isMonthExist = this.compareAverageScore.some((j:any)=>j.monthName == i.monthName)
          if(!isMonthExist)
          this.compareAverageScore.push({ monthName: i.monthName, percentage: i.percentage, score: i.score })
        });

        

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
      
        case 'buyercolorzone':
        this.colorZoneChartData = data.data
        break;
        case 'Compare total score':
        this.totalCompareScoreList = data.data
        break;

      default:
        break
    }




 }
 getAverageData(data:any){
  this.averageBuyerApiData = data
 }
 popUpChart(heading: any) {
  let requiredChartData!: any
  let requiredColorData!: any
  switch (heading) {
    case 'LTA SCORE':
      requiredChartData = this.ltaChartData;
      // requiredColorData = null
      break;

    case 'LTA percentage':
      requiredChartData = this.ltaPercentageChartData;
      // requiredColorData = null
      break;

    case 'PPV SCORE':
      requiredChartData = this.ppvChartData;
      // requiredColorData = null
      break;

    case 'PPV percentage':
      requiredChartData = this.ppvPercentageChartData;
      // requiredColorData = null
      break;

    case 'NCR SCORE':
      requiredChartData = this.ncrChartData;
      // requiredColorData = null
      break;

    case 'NCR percentage':
      requiredChartData = this.ncrPercentageChartData;
      // requiredColorData = null
      break;

    case 'OTD SCORE':
      requiredChartData = this.otdChartData;
      // requiredColorData = null
      break;

    case 'OTD percentage':
      requiredChartData = this.otdPercentageChartData;
      // requiredColorData = null
      break;

    case 'Total Score':
      requiredChartData = this.totalScoreChartData;
      // requiredColorData = null
      break;

    case 'colorZone':
      requiredChartData = this.colorZoneChartData
      // requiredColorData = null
      break;

    case 'Compare Total Score':
      requiredChartData = this.totalCompareScoreList
      // requiredColorData = this.totalCompareScoreList.data;
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
      panelClass:'graph-style',
      data: {
        name:heading,
        dashBoardData: requiredChartData,
        // colorZoneGraphData: requiredColorData,
        // chartData: requiredChartData,
        // vendorName: this.vendorName,
        // executeData: this.apiRequestData
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
  async sendBuyerReport(data: any) {
    var totalDoc = new jsPDF('p', 'mm', 'a4');

    var img = new Image()
    img.src = '../../assets/images/score_us_logo.PNG'



    let totalScore = document.getElementById('score');
    let colorZone = document.getElementById('colorZone');
    let lta = document.getElementById('lta');
    let ppv = document.getElementById('ppv');
    let otd = document.getElementById('otd');
    let ncr = document.getElementById('ncr');



    // for total score
    let index = -1
    index = data[0].selected.indexOf(1)
    if (index > -1) {
      let totalImageBase64 = await this.generateLtaImageBase64(totalScore, data);
      for(var i=0;i<data.length;i++)
      data[i].formData.push({ name: "total_" + this.loggedInUser.tenantID+data[i].codes + "_" + _moment(new Date()).format('MM/DD/YYYY'), fileString: totalImageBase64 });
    }


    //for color zone
    index = -1
    index = data[0].selected.indexOf(7)

    if (index > -1) {
      let colorZoneImageBase64 = await this.generateLtaImageBase64(colorZone, data[0]);
      for(var i=0;i<data.length;i++)
      data[i].formData.push({ name: "color_" + this.loggedInUser.tenantID+data[i].codes + "_" + _moment(new Date()).format('MM/DD/YYYY'), fileString: colorZoneImageBase64 });
    }

    // for lta
    index = -1
    index = data[0].selected.indexOf(11)

    if (index > -1) {
      let ltaImageBase64 = await this.generateLtaImageBase64(lta, data[0]);
      for(var i=0;i<data.length;i++)
      data[i].formData.push({ name: "lta_" + this.loggedInUser.tenantID+data[i].codes + "_" + _moment(new Date()).format('MM/DD/YYYY'), fileString: ltaImageBase64 });
    }


    // for ppv
    index = -1
    index = data[0].selected.indexOf(10)

    if (index > -1) {
      let ppvImageBase64 = await this.generateLtaImageBase64(ppv, data[0]);
      for(var i=0;i<data.length;i++)
      data[i].formData.push({ name: "ppv_" + this.loggedInUser.tenantID+data[i].codes + "_" + _moment(new Date()).format('MM/DD/YYYY'), fileString: ppvImageBase64 });
    }

    // for ncr
    index = -1
    index = data[0].selected.indexOf(9)

    if (index > -1) {
      let ncrImageBase64 = await this.generateLtaImageBase64(ncr, data[0]);
      for(var i=0;i<data.length;i++)
      data[i].formData.push({ name: "ncr_" + this.loggedInUser.tenantID+data[i].codes + "_" + _moment(new Date()).format('MM/DD/YYYY'), fileString: ncrImageBase64 });
    }

    // for otd
    index = -1
    index = data[0].selected.indexOf(8)

    if (index > -1) {
      let otdImageBase64 = await this.generateLtaImageBase64(otd, data[0]);
      for(var i=0;i<data.length;i++)
      data[i].formData.push({ name: "otd_" + this.loggedInUser.tenantID+data[i].code + "_" + _moment(new Date()).format('MM/DD/YYYY'), fileString: otdImageBase64 });
    }


    delete data[0].isViewFirst
    delete data[0].selected
    delete data[0].currentDate
    // data.tenantId = this.loggedInUser.TenantID;
    // if (this.apiRequestData.vendorCode.split(",").length > 0) {
    //   this.apiRequestData.vendorCode.split(",").forEach((element: any) => {
    //     data.codes.push(element)
    //   });
    // } else {
    //   data.codes = this.apiRequestData.vendorCodes
    // }

    let chartDiv = document.getElementById("graph")

    //for new api new var were introduced
    // data.tenantId = this.loggedInUser.tenantID;
    // data.Id = this.loggedInUser.userID
    // data.ReportFor = 0;
    data.forEach((element:any) => {
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
    



  }
}
