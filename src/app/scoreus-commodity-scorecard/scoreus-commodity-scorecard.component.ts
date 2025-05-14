import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { twoLineChartModel } from '../modal/twoLinseChartDataModel';
import { NotificationService } from '../notification.service';
import { GeneralApiService } from '../services/appService/generalApiService';
import { api } from '../api.endpoints';
import { PopupchartComponent } from '../general/popupchart/popupchart.component';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as _moment from 'moment/moment';
import { tips } from '../tootTips';
import { TranslateService } from '@ngx-translate/core';
import { PageReloaderService } from '../services/appService/pageReloaderService';
@Component({
  selector: 'app-scoreus-commodity-scorecard',
  templateUrl: './scoreus-commodity-scorecard.component.html',
  styleUrls: ['./scoreus-commodity-scorecard.component.css']
})
export class ScoreusCommodityScorecardComponent implements OnInit {
  allPlantsAndCommodity : any = {
    commodity : '',
    plant : ''
  }      
  commodityAllData :any|null = null; // to store all data of scorecard
  requiredCommodityGraph!:any[]
  commodityGraphData:any[]=
  [
  ]
  
  previousDateFromApi! :any
  totalScores:any[]=[]
  replicaColorZoneStat
  dateDiffSentance: any
  previousStatus: any
  tips = tips
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
  public averageApiData: any
  public listsDropDown: any
  public apiRequestData: any
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
  public onCommodityPageLoad:any | null = null
  public commodityData: any[]
  public commodityName: any[]
  public commodityStatistic: any = {
    currentStatus: [],
    previousStatus: []
  }
  
  public dataForCommodityStatistics: any = {
    currentStatus: [],
    previousStatus: []
  }
  public PreviousData: any
  public commodityGraph: any
  @Input() subtitle: string;


  constructor(private _apiService: GeneralApiService,
    private _notificationService: NotificationService,
    private dialog: MatDialog,
    private translate:TranslateService,
    private cdr:ChangeDetectorRef,
    private _pageLoaderService: PageReloaderService
   ) { }



  async ngOnInit():  Promise<any> {
     

    this.currentDate = new Date().toString().split(" ")[0] + "," + new Date().toString().split(" ")[1] + " " + new Date().toString().split(" ")[2] + " " + new Date().toString().split(" ")[3];
    var userData = localStorage.getItem('userData');
    if (userData) {
      this.loggedInUser = JSON.parse(userData)
    } else {

    }
    // const result = await this.getSubjectResult()
    // if(result !== null)
    // {
    //   this.setDataInPage(result)
    //   return
    // }
    // this._apiService.isCompareLoader$.next(true);

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translate.use(res)
      this.cdr.detectChanges()
    })
    this.onCommodityPageLoad = null
    this._apiService.isCompareLoader$.next(true);
    
    this._pageLoaderService.commodityScorecard$.subscribe((i:any|null)=>{
      if(i !== null)// to preload data after rerouting
      {
        switch (i.hasWhichData) {
          case 0: // on page load
          this.onCommodityPageLoad = i.currentData
            this.apiRequestData = i.currentData
            this.listsDropDown = i.listsDropDown
            this.allPlantsAndCommodity = i.allPlantAndCommodity
            this.fillDataInStatisticsAndColorZone(i.resData,0,1,2,3,0,4,null,null)
            break;
            
            case 1: // without previous
            this.onCommodityPageLoad = i.currentData
            this.apiData = i.currentData
            this.apiRequestData = i.currentData
            this.listsDropDown = i.listsDropDown
            this.allPlantsAndCommodity = i.allPlantAndCommodity
            this.fillDataInStatisticsAndColorZone(i.resData,0,null,2,null,0,3,1,null)
            break;
          
          case 2:// with previous
          this.onCommodityPageLoad = i.currentData
            this.apiData = i.currentData
            this.apiRequestData = i.currentData
            this.listsDropDown = i.listsDropDown
            this.allPlantsAndCommodity = i.allPlantAndCommodity
            this.fillDataInStatisticsAndColorZone(i.resData,0,1,3,4,0,5,2,null)
            break;
         }
         this._apiService.isCompareLoader$.next(false)
        }else
      {
        this._apiService.get(`${api.commoditypageLoad}?tenantId=${this.loggedInUser.tenantID}`).subscribe((res:any)=>{
          if(res.data.length<1){
            this._apiService.isCompareLoader$.next(false);
            this._notificationService.push("No record for this tenant",2);
            return
          }
         
    
          this.commodityAllData = {...this.commodityAllData,res : res.data};
          let currentData = {
            startDate : res.data.startDate,
            endDate 	: res.data.endDate ,
            plantCode : res.data.plantCode,
            plantCodeForField : res.data.plantCodeForField,
            commodity : res.data.commodity,
            commodityWithPlant : res.data.commodityWithPlant,
            allCommodity : res.data.allCommodity,
            tenantId : this.loggedInUser.tenantID
          }
          this.allPlantsAndCommodity.commodity = res.data.commodity;
          this.allPlantsAndCommodity.plant = res.data.plantCode;
          localStorage.removeItem('allPlantsWithCommodity')
          localStorage.setItem('allPlantsWithCommodity',JSON.stringify(this.allPlantsAndCommodity))
          this.apiData = currentData;
          this.commodityAllData = {...this.commodityAllData,currentData : currentData};
          this.commodityAllData = {...this.commodityAllData,allPlantAndCommodity : this.allPlantsAndCommodity}
          this.onCommodityPageLoad = currentData
    
          let previousData = {
            startDate : res.previousDate.startDate,
            endDate 	: res.previousDate.endDate ,
            plantCode : res.data.plantCode,
            plantCodeForField : res.data.plantCodeForField,
            commodity : res.data.commodity,
            commodityWithPlant : res.data.commodityWithPlant,
            allCommodity : res.data.allCommodity,
            tenantId : this.loggedInUser.tenantID
          }
          this.commodityAllData = {...this.commodityAllData,previousData : previousData};
          this.commodityAllData = {...this.commodityAllData,apiRequestData:this.apiRequestData }
          this.commodityAllData = {...this.commodityAllData,allPlantsAndCommodity:this.allPlantsAndCommodity }
          this._apiService.isCompareLoader$.next(true);
        
          Promise.all([
            this._apiService.post(api.commodityColorZone, currentData).toPromise(),
            this._apiService.post(api.commodityColorZone, previousData).toPromise(),
            this._apiService.post(api.commodityStatistics, currentData).toPromise(),
            this._apiService.post(api.commodityStatistics, previousData).toPromise(),
            this._apiService.post(api.commodityAverageGraph, currentData).toPromise(),
            this._apiService.post(api.commodityData,currentData).toPromise(),
            this._apiService.post(api.commodityStatistics, {...currentData,commodity :currentData.allCommodity}).toPromise()
          ]).then((resData: any) => {
    
            if (resData === null || resData === undefined) {
              this._apiService.isCompareLoader$.next(false)
              return
            }

            this._apiService.isCompareLoader$.next(false)
            this._notificationService.push("Commodity scorecard data retrieved", 1);
            this.commodityAllData = {...this.commodityAllData,resData : resData}
            this.commodityAllData = {...this.commodityAllData,hasWhichData : 0} // 0 for on pageLoad
            this.commodityAllData = {...this.commodityAllData,listsDropDown :  this.listsDropDown} // 0 for on pageLoad
               
            this.fillDataInStatisticsAndColorZone(resData,0,1,2,3,0,4,5,6)      
            this._pageLoaderService.commodityScorecard$.next(this.commodityAllData)
          }, (e: any) => {
            this._notificationService.push("Data set not valid", 2);
            this._apiService.isCompareLoader$.next(false)
          }).finally(() =>{})


        },((e:any)=>this._apiService.isCompareLoader$.next(false)))
    

      }
    })

  }


  fillDataInStatisticsAndColorZone(resData:any,
    currentColorZone:number | null,previousColorZone:number | null,
    currentStats:number | null,previousStats:number | null,
    currentData:number | null,totalScore:number | null,commodityData:any|null,average:any|null){
      this.colorZoneGraphData = []
    this.colorZoneGraphData = resData[currentColorZone].data;
    this.colorZoneStat = []
    this.dateDiffSentance = resData[currentStats].dateDiff
    this._apiService.averageScore$.next(resData[currentStats].data)
    let redCount = 0
    let yellowCount = 0
    let greenCount = 0
    let deno = 0
    let red1Count = 0
    let yellow1Count = 0
    let green1Count = 0
    let deno1 = 0
    if(currentColorZone !==  null)
    resData[currentColorZone].data.forEach((element:any) => {
      redCount = redCount + element.redNeum
      yellowCount = yellowCount + element.yellowNeum
      greenCount = greenCount + element.greenNeum
      deno = deno + element.deno
    });
    
    if(previousColorZone !== null)
    resData[previousColorZone].data.forEach((element:any) => {
      red1Count = red1Count + element.redNeum
      yellow1Count = yellow1Count + element.yellowNeum
      green1Count = green1Count + element.greenNeum
      deno1 = deno1 + element.deno
    });

    if(currentColorZone !== null)
    this.colorZoneStat.push([greenCount,yellowCount,redCount,deno])

    if(previousColorZone !== null)
    this.colorZoneStat.push([green1Count,yellow1Count,red1Count,deno1])

    // this.buyerData = res[2].data;
    
    if(commodityData !== null)
    this.commodityData = resData[commodityData].data;

    this.arrangeProperData(resData[currentColorZone].graphData)

    this.commodityStatistic = {
      currentStatus: resData[currentStats].data,
      previousStatus:previousStats === null ? null : resData[previousStats].data
    }
    // this.dateDiffSentance = resData[currentStats].dateDiff
    if(resData.length > 6)
      {
        average = 6 ; 
      }
    else
    {
      average = 5;
    }
    this.dataForCommodityStatistics = {
      currentStatus: resData[average].data,
      previousStatus:previousStats === null ? null : resData[previousStats].data
    }
    this.totalScores  = resData[totalScore].data


  
  }



  arrangeProperData(data:any){
    if(this.apiRequestData === null || this.apiRequestData === undefined) return;
   let commodity = []
   let allCommodity = []
   data.forEach((element:any) => {
     if (!allCommodity.includes(element.value)) {
         allCommodity.push(element.value);
     }
 });
   
    allCommodity.forEach((ele:any)=>{
      commodity.push({code:ele,name:ele,
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
          averageOtdScore:[],
          averageOtdPercentage:[],
          averageNcrScore:[],
          averageNcrPercentage:[],
          averagePpvScore:[],
          averagePpvPercentage:[],
          averageLtaScore:[],
          averageLtaPercentage:[],
        }})
    })
    commodity.forEach((element:any)=>{
      data.forEach((graphData:any) => {
        if(element.code == graphData.value){
          if(element.value =='')
          element.name = graphData.value === null ? '':graphData.value
        
            element.data.startDate.push(graphData.startDate)
            element.data.otd.push((graphData.totalScore == 0 )? null : graphData.otdScore)
            element.data.ncr.push((graphData.totalScore == 0 )? null :graphData.ncrScore)
            element.data.ppv.push((graphData.totalScore == 0 )? null :graphData.ppvScore)
            element.data.lta.push((graphData.totalScore == 0 )? null :graphData.ltaScore)
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
            element.data.totalScore.push((graphData.totalScore == 0 )? null :graphData.totalScore)
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
      this.commodityGraphData = commodity
    }


   getAverageFormGroupData(data:any){
    this.averageApiData = data
   }

  showChart(data: boolean) {
    let chartDiv = document.getElementById("graph")
    chartDiv.style.display = data === true ? 'block' : 'none'
  }

  getPreviousDate(data:any)
 {
   this.previousDateFromApi = data;
}

   getCommodityExecutiveData(data: any) {
    this.loader = true
    this._apiService.isCompareLoader$.next(true)

    if (data)
      data.tenantId = +this.loggedInUser.tenantID


    this.apiData = data
    this.apiRequestData = this.apiData


    this.getCommodityGraphData('')

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


  async getCommodityGraphData(data: any) {
    // this.cdr.detectChanges()
this.previousYear = { ...this.apiRequestData }
this.apiData = this.apiRequestData  

const currentStart = new Date(this.apiRequestData.startDate)
const currentEnd = new Date(this.apiRequestData.endDate)
const dayDiff = Math.floor((currentEnd.getTime() - currentStart.getTime()) / (1000 * 3600 * 24)) + 1

const newPrevEnd = new Date(currentStart)
newPrevEnd.setDate(currentStart.getDate() - 1)

const newPrevStart = new Date(newPrevEnd)
newPrevStart.setDate(newPrevEnd.getDate() - (dayDiff - 1))

this.previousYear.startDate = newPrevStart.toISOString().split("T")[0]
this.previousYear.endDate = newPrevEnd.toISOString().split("T")[0]

  
    this.averageApiData.endDate = this.apiRequestData.endDate
    this.averageApiData.startDate = this.apiRequestData.startDate
    this._apiService.isCompareLoader$.next(true);
      
    
    if (data != '') {
      if(data.indexOf(",")>0){
        let commodity = []
        data.split(",").forEach((element:any) => {
          commodity.push(element)
      });
     this.requiredCommodityGraph =this.commodityGraphData.filter((element:any)=>commodity.includes(element.code))
    }else{
      this.requiredCommodityGraph = this.commodityGraphData.filter((element:any)=>element.code == data)      
    }
    this._apiService.isCompareLoader$.next(false);
      
    
    


    } else {
   

      if (data != '') {
        this.apiData.commodity = data
        this.apiRequestData.commodity = data
      }
  
  
      this.apiRequestData = this.apiData;
      

      let model = {
        startDate : this.previousYear.startDate,
        endDate : this.previousYear.endDate,
        tenantId : this.previousYear.tenantId
      }      
     let result = await this.getData(model)
     if(result.data == false)
     {
      this.dateDiffSentance = 0
      this.commodityStatistic = null
      this.colorZoneGraphData = null;
      this.colorZoneStat = [];
      this.commodityData = null
      this.commodityAllData = null

      let plantStatisticsData = {
        startDate : this.apiRequestData.startDate,
        endDate  : this.apiRequestData.endDate,
        plantCode : this.apiRequestData.plantCodeForField,
        allPlantCode :this.apiRequestData.plantCodeForField,
        tenantId : this.loggedInUser.tenantId
      }


      Promise.all([
        this._apiService.post(api.commodityColorZone, {...this.apiRequestData,allCommodity:this.averageApiData.commodity}).toPromise(),
        // this._apiService.post(api.VendorColorZone, {...this.previousYear,allVendorCode:this.averageApiData.vendorCode}).toPromise(),
        this._apiService.post(api.commodityData, this.apiRequestData).toPromise(),
        this._apiService.post(api.plantStatistics, plantStatisticsData).toPromise(),
        // this._apiService.post(api.vendorStatistics, this.previousYear).toPromise(),
        // this._apiService.post(api.vendorGraph, this.apiRequestData).toPromise()
        this._apiService.post(api.commodityAverageGraph,{...this.apiRequestData}).toPromise(),

      ]).then((res: any) => {
        if (res === null || res === undefined) {
          this._apiService.isCompareLoader$.next(false)
          return
        }
       
        this.requiredCommodityGraph = null
        this.commodityAllData = {...this.commodityAllData,currentData:this.apiRequestData}
        this.commodityAllData = {...this.commodityAllData,averageData:this.averageApiData}
        this.commodityAllData = {...this.commodityAllData,resData:res}
        this.commodityAllData = {...this.commodityAllData,hasWhichData:1} // 1 for without previous data
        this.commodityAllData = {...this.commodityAllData,listsDropDown : this.listsDropDown} // 1 for without previous data
        this.commodityAllData = {...this.commodityAllData,allPlantsAndCommodity:this.allPlantsAndCommodity }
        // this._apiService.averageScore$.next(res[2].data);
        this.fillDataInStatisticsAndColorZone(res,0,null,2,null,0,3,1,null)
        this._pageLoaderService.commodityScorecard$.next(this.commodityAllData)
        this._notificationService.push("Commodity scorecard data retrieved", 1);

        
        this.cdr.detectChanges()
        this._apiService.isCompareLoader$.next(false)
        this.loader = false
      }, (e: any) => {
        this._notificationService.push("Data set not valid", 2);
        this._apiService.isCompareLoader$.next(false)
      }).finally(() => this._apiService.isCompareLoader$.next(false))
     }else{
     
      this.commodityAllData = null
      this.dateDiffSentance = 0
      this.commodityStatistic = null
      this.colorZoneGraphData = null;
      this.colorZoneStat = [];
      this.commodityData = null
      let plantStatisticsData = {
        startDate : this.apiRequestData.startDate,
        endDate  : this.apiRequestData.endDate,
        plantCode : this.apiRequestData.plantCodeForField,
        allPlantCode :this.apiRequestData.plantCodeForField,
        tenantId : this.apiRequestData.tenantId
      }
      Promise.all([
        this._apiService.post(api.commodityColorZone, {...this.apiRequestData,allCommodity:this.averageApiData.commodity}).toPromise(),
        this._apiService.post(api.commodityColorZone, {...this.previousYear,allCommodity:this.averageApiData.commodity}).toPromise(),
        this._apiService.post(api.commodityData, this.apiRequestData).toPromise(),
        this._apiService.post(api.commodityStatistics, {...this.apiRequestData}).toPromise(),
        this._apiService.post(api.commodityStatistics, this.previousYear).toPromise(),
        // this._apiService.post(api.vendorGraph, this.apiRequestData).toPromise()
        this._apiService.post(api.commodityAverageGraph,{...this.apiRequestData}).toPromise(),
        this._apiService.post(api.plantStatistics, plantStatisticsData).toPromise(),

      ]).then((res: any) => {
        
        this.requiredCommodityGraph = null
        if (res === null || res === undefined) {
          this._apiService.isCompareLoader$.next(false)
          return
        }

        this.commodityAllData = {...this.commodityAllData,currentData : this.apiRequestData}
        this.commodityAllData = {...this.commodityAllData,previousData : this.previousYear}
        this.commodityAllData = {...this.commodityAllData,resData : res}
        this.commodityAllData = {...this.commodityAllData,hasWhichData:2} // 2 for with previous
        this.commodityAllData = {...this.commodityAllData,allPlantsAndCommodity:this.allPlantsAndCommodity }
        // this._apiService.averageScore$.next(res[3].data);
        this._notificationService.push("Commodity scorecard data retrieved", 1);
        this.fillDataInStatisticsAndColorZone(res,0,1,3,4,0,5,2,6)
        this._pageLoaderService.commodityScorecard$.next(this.commodityAllData)
        
        this.cdr.detectChanges()
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
        break;
        case 'Compare total score':
        this.totalCompareScoreList = data.data
        break;

      default:
        break
    }




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
// unused method
  async getSubjectResult(): Promise<any> {
    let subscription:any
    return new Promise((resolve, reject) => {
       subscription = this._apiService.vendorScorecard$.subscribe((res: any) => {
        resolve(res); // Resolve the Promise with the received value
        if(subscription)
        subscription.unsubscribe(); // Unsubscribe from the observable
      }, (error: any) => {
        reject(error); // Reject the Promise with the error, if any
        if(subscription)
        subscription.unsubscribe(); // Unsubscribe from the observable
      });
    });
  }

  async sendCommodityReport(data: any) {

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
