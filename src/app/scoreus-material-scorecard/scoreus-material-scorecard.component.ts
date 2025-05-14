import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { tips } from '../tootTips';
import { twoLineChartModel } from '../modal/twoLinseChartDataModel';
import { GeneralApiService } from '../services/appService/generalApiService';
import { NotificationService } from '../notification.service';
import { MatDialog } from '@angular/material/dialog';
import { api } from '../api.endpoints';
import * as _moment from 'moment/moment';
import { PopupchartComponent } from '../general/popupchart/popupchart.component';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { TranslateService } from '@ngx-translate/core';
import { PageReloaderService } from '../services/appService/pageReloaderService';
@Component({
  selector: 'app-scoreus-material-scorecard',
  templateUrl: './scoreus-material-scorecard.component.html',
  styleUrls: ['./scoreus-material-scorecard.component.css']
})
export class ScoreusMaterialScorecardComponent implements OnInit {
  materialAllData :any|null = null; // to store all data of scorecard
  requiredMaterialGraph!:any[]
  materialGraphData:any[]=
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
  public onMaterialPageLoad:any | null = null
  public allMaterial : any 
  public materialData: any[]
  public materialName: any[]
  public materialStatistic: any = {
    currentStatus: [],
    previousStatus: []
  }
  public dataForMaterialStatistics: any = {
    currentStatus: [],
    previousStatus: []
  }
  public PreviousData: any
  public vendorGraph: any
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


    this._apiService.get(`${api.vendorDropdown}?tenantId=${this.loggedInUser.tenantID}`).
      subscribe((res: any) => {
        this.listsDropDown = res?.data
        if (res.message == 'Plant Data Not Found!!') {
          this._notificationService.push('No data for this tenant', 1)
        }

      }, (e: any) => this._apiService.isCompareLoader$.next(false))


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
    this.onMaterialPageLoad = null
    this._apiService.isCompareLoader$.next(true);
    this._pageLoaderService.materialScorecard$.subscribe((i:any|null)=>{
      if(i !== null)// to preload data after rerouting
      {
        switch (i.hasWhichData) {
          case 0: // on page load
          this.onMaterialPageLoad = i.currentData
            this.apiRequestData = i.currentData
            this.fillDataInStatisticsAndColorZone(i.resData,0,1,2,3,0,4,null,null)
            break;
            
            case 1: // without previous
            this.onMaterialPageLoad = i.currentData
            this.apiData = i.currentData
            this.apiRequestData = i.currentData
            this.fillDataInStatisticsAndColorZone(i.resData,0,null,2,null,0,3,1,null)
            break;
          
          case 2:// with previous
          this.onMaterialPageLoad = i.currentData
            this.apiData = i.currentData
            this.apiRequestData = i.currentData
            
            this.fillDataInStatisticsAndColorZone(i.resData,0,1,3,4,0,5,2,null)
            break;
         }
         this._apiService.isCompareLoader$.next(false)
        }else
      {

        this._apiService.get(`${api.GetMaterialScoreCard}/${this.loggedInUser.tenantID}`).subscribe((res:any)=>{
            
          if(res.data.length<1){
            this._apiService.isCompareLoader$.next(false);
            this._notificationService.push("No record for this tenant",2);
            return
          }
         
    
          this.materialAllData = {...this.materialAllData,res : res};
          let currentData = {
            startDate : res.data.startDate,
            endDate 	: res.data.endDate ,
            plantCode : res.data.plantCode,
            commodity : res.data.commodity,
            vendorCode : res.data.vendorCode,
            materialCode : "ALL",
            allMaterialCode : "ALL",
            tenantId : this.loggedInUser.tenantID
          }
          this.allMaterial = res.data.materialCode
          this.apiData = currentData
          this.materialAllData = {...this.materialAllData,currentData : currentData};
    
          this.onMaterialPageLoad = currentData
    
          let previousData = {
            startDate : res.previousDate.startDate,
            endDate 	: res.previousDate.endDate ,
            plantCode : res.data.plantCode,
            commodity : res.data.commodity,
            vendorCode : res.data.vendorCode,
            materialCode : 'ALL',
            allMaterialCode : 'ALL',
            tenantId : this.loggedInUser.tenantID
          }
          this.materialAllData = {...this.materialAllData,previousData : previousData};
          this.materialAllData = {...this.materialAllData,apiRequestData:this.apiRequestData }
         
          Promise.all([
            this._apiService.post(api.materialColorZone, {...currentData,allMaterialCode : 'ALL'}).toPromise(),
            this._apiService.post(api.materialColorZonePrevious,{...previousData,allMaterialCode : 'ALL'}  ).toPromise(),
            this._apiService.post(api.materialStatistics, currentData).toPromise(),
            this._apiService.post(api.materialStatistics, previousData).toPromise(),
            // this._apiService.post(api.vendorGraph, this.apiRequestData).toPromise()
            this._apiService.post(api.materialAverageGraph, currentData).toPromise(),
            this._apiService.post(api.materialStatistics, {...currentData,materialCode :currentData.allMaterialCode}).toPromise(),
          ]).then((resData: any) => {
            
            if (resData === null || resData === undefined) {
              this._apiService.isCompareLoader$.next(false)
              return
            }
            // this.dateDiffSentance = this._apiService.getDateDifference(new Date(currentData.startDate).getTime(), new Date(currentData.endDate).getTime())
            // this.dateDiffSentance = 60
            this._notificationService.push("Material scorecard data retrieved", 1);
            this.materialAllData = {...this.materialAllData,resData : resData}
            this.materialAllData = {...this.materialAllData,hasWhichData : 0} // 0 for on pageLoad
            this.fillDataInStatisticsAndColorZone(resData,0,1,2,3,0,4,null,5)      
            this._pageLoaderService.materialScorecard$.next(this.materialAllData)
            this._apiService.isCompareLoader$.next(false)
          }, (e: any) => {
            this._notificationService.push("Data set not valid", 2);
            this._apiService.isCompareLoader$.next(false)
          }).finally(() =>{this._apiService.isCompareLoader$.next(false)})
        
        },((e:any)=>this._apiService.isCompareLoader$.next(false)))
    

      }
    })

    // this._apiService.get(`${api.GetVendorScoreCard}/${this.loggedInUser.tenantID}`).subscribe((res:any)=>{
     
    //   if(res.data.length<1){
    //     this._apiService.isCompareLoader$.next(false);
    //     this._notificationService.push("No record for this tenant",2);
    //     return
    //   }
     

    //   this.vendorAllData = {...this.vendorAllData,res : res};
    //   let currentData = {
    //     startDate : res.data.startDate,
    //     endDate 	: res.data.endDate ,
    //     plantCode : res.data.plantCode,
    //     commodity : res.data.commodity,
    //     vendorCode : res.data.vendorCode,
    //     allVendorCode : res.data.vendorCode,
    //     tenantId : this.loggedInUser.tenantID
    //   }

    //   this.vendorAllData = {...this.vendorAllData,currentData : currentData};

    //   this.onVendorPageLoad = currentData

    //   let previousData = {
    //     startDate : res.previousDate.startDate,
    //     endDate 	: res.previousDate.endDate ,
    //     plantCode : res.data.plantCode,
    //     commodity : res.data.commodity,
    //     vendorCode : res.data.vendorCode,
    //     allVendorCode : res.data.vendorCode,
    //     tenantId : this.loggedInUser.tenantID
    //   }
    //   this.vendorAllData = {...this.vendorAllData,previousData : previousData};
    //   this.vendorAllData = {...this.vendorAllData,apiRequestData:this.apiRequestData }
    //   Promise.all([
    //     this._apiService.post(api.VendorColorZone, currentData).toPromise(),
    //     this._apiService.post(api.VendorColorZone, previousData).toPromise(),
    //     this._apiService.post(api.vendorStatistics, currentData).toPromise(),
    //     this._apiService.post(api.vendorStatistics, previousData).toPromise(),
    //     // this._apiService.post(api.vendorGraph, this.apiRequestData).toPromise()
    //     this._apiService.post(api.vendorAverageGraph, currentData).toPromise()
    //   ]).then((resData: any) => {

    //     if (resData === null || resData === undefined) {
    //       this._apiService.isCompareLoader$.next(false)
    //       return
    //     }
    //     // this.dateDiffSentance = this._apiService.getDateDifference(new Date(currentData.startDate).getTime(), new Date(currentData.endDate).getTime())
    //     // this.dateDiffSentance = 60
    //     this._notificationService.push("Vendor scorecard data retrieved", 1);
    //     this.vendorAllData = {...this.vendorAllData,resData : resData}
    //     this.vendorAllData = {...this.vendorAllData,hasWhichData : 0} // 0 for on pageLoad
    //     this.fillDataInStatisticsAndColorZone(resData,0,1,2,3,0,4,null)      
    //     this._pageLoaderService.vendorScorecard$.next(this.vendorAllData)
    //     this._apiService.isCompareLoader$.next(false)
    //   }, (e: any) => {
    //     this._notificationService.push("Data set not valid", 2);
    //     this._apiService.isCompareLoader$.next(false)
    //   }).finally(() =>{})
    // },((e:any)=>this._apiService.isCompareLoader$.next(false)))






  }


  fillDataInStatisticsAndColorZone(resData:any,
    currentColorZone:number | null,previousColorZone:number | null,
    currentStats:number | null,previousStats:number | null,
    currentData:number | null,totalScore:number | null,materialData:any|null,average:any|null){
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
    

    if(materialData !== null)
    this.materialData = resData[materialData].data;

  this.arrangeProperData(resData[currentColorZone].graphData)

    this.materialStatistic = {
      currentStatus: resData[currentStats].data,
      previousStatus:previousStats === null ? null : resData[previousStats].data
    }
    

    this.dateDiffSentance = resData[currentStats].dateDiff
    if(resData.length > 6)
      average = 6 ; 
    else
     average = 5;
    this.dataForMaterialStatistics = {
      currentStatus: average === null? resData[currentStats].data : resData[average].data,
      previousStatus:previousStats === null ? null : resData[previousStats].data
    }
    this.totalScores  = resData[totalScore].data


  }



  arrangeProperData(data:any){
   if(this.apiRequestData === null || this.apiRequestData === undefined) return;
    let material = []
    let allMaterial = []
    data.forEach((element:any) => {
      if (!allMaterial.includes(element.materialCode)) {
          allMaterial.push(element.materialCode);
      }
  });
    
    allMaterial.forEach((ele:any)=>{
      material.push({code:ele,name:'',
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
    material.forEach((element:any)=>{
      data.forEach((graphData:any) => {
        if(element.code == graphData.materialCode){
          if(element.name =='')
          element.name = graphData.materialCode === null ? '':graphData.materialCode
        
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
      this.materialGraphData = material
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

  getExecutiveData(data: any) {
  console.log("🚀 EXECUTE CLICKED");
  console.log("🌿 Selected Plant (from Execute):", data?.plantCode);
  console.log("📦 Payload Sent to Graph Data:", data);
    this.loader = true
    this._apiService.isCompareLoader$.next(true)

    if (data)
      data.tenantId = +this.loggedInUser.tenantID


    this.apiData = data
    this.apiRequestData = this.apiData


    this.getMaterialGraphData('')

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

  async getMaterialGraphData(data: any) {
  console.log("🌿 Selected Plant (PlantCode):", this.apiRequestData?.plantCode);
  console.log("📦 API Request Payload:", this.apiRequestData);
  console.log("📦 Average API Payload:", this.averageApiData);
    // this.cdr.detectChanges()
  this.apiData = this.apiRequestData
this.previousYear = { ...this.apiRequestData }

const currentStart = new Date(this.apiRequestData.startDate);
const currentEnd = new Date(this.apiRequestData.endDate);

// Calculate the number of days in the current range
const dayDiff = Math.floor((currentEnd.getTime() - currentStart.getTime()) / (1000 * 3600 * 24)) + 1;

// Calculate previous end (1 day before current start)
const newPrevEnd = new Date(currentStart);
newPrevEnd.setDate(newPrevEnd.getDate() - 1);

// Calculate previous start using timestamp arithmetic to avoid month/day rollover issues
const newPrevStart = new Date(newPrevEnd.getTime() - (dayDiff - 1) * 24 * 60 * 60 * 1000);

// Format and assign
this.previousYear.startDate = newPrevStart.toISOString().split("T")[0];
this.previousYear.endDate = newPrevEnd.toISOString().split("T")[0];
console.log("📅 Previous Start Date:", this.previousYear.startDate);
console.log("📅 Previous End Date:", this.previousYear.endDate);
  
    this.averageApiData.endDate = this.apiRequestData.endDate
    this.averageApiData.startDate = this.apiRequestData.startDate
    this._apiService.isCompareLoader$.next(true);
      
    

    if (data != '') {
      if(data.indexOf(",")>0){
        // if(data.split(",").length > 5)
        // {
        //   this._notificationService.push("Can not see more then 5 material graph at a time",2)
        //   return 
        // }
        let materialCode = []
        data.split(",").forEach((element:any) => {
          materialCode.push(element)
      });
     this.requiredMaterialGraph =this.materialGraphData.filter((element:any)=>materialCode.includes(element.code))
    }else{
      this.requiredMaterialGraph = this.materialGraphData.filter((element:any)=>element.code == data)      
    }
    this._apiService.isCompareLoader$.next(false);
      
    
    


    } else {
   

      if (data != '') {
        this.apiData.materialCode = data
        this.apiRequestData.materialCode = data
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
      this.materialStatistic = null
      this.colorZoneGraphData = null;
      this.colorZoneStat = [];
      this.materialData = null
      this.materialAllData = null

      Promise.all([
        this._apiService.post(api.materialColorZone, {...this.apiRequestData,allMaterialCode:this.averageApiData.materialCode}).toPromise(),
        // this._apiService.post(api.VendorColorZone, {...this.previousYear,allVendorCode:this.averageApiData.vendorCode}).toPromise(),
        this._apiService.post(api.materialData, this.apiRequestData).toPromise(),
        this._apiService.post(api.materialStatistics, {...this.averageApiData,tenantId : this.loggedInUser.tenantID}).toPromise(),
        // this._apiService.post(api.vendorStatistics, this.previousYear).toPromise(),
        // this._apiService.post(api.vendorGraph, this.apiRequestData).toPromise()
        this._apiService.post(api.materialAverageGraph,{...this.apiRequestData}).toPromise(),

      ]).then((res: any) => {
        if (res === null || res === undefined) {
          this._apiService.isCompareLoader$.next(false)
          return
        }
       
        this.requiredMaterialGraph = null
        this.materialAllData = {...this.materialAllData,currentData:this.apiRequestData}
        this.materialAllData = {...this.materialAllData,averageData:this.averageApiData}
        this.materialAllData = {...this.materialAllData,resData:res}
        this.materialAllData = {...this.materialAllData,hasWhichData:1} // 1 for without previous data

        // this._apiService.averageScore$.next(res[2].data);
        this.fillDataInStatisticsAndColorZone(res,0,null,2,null,0,3,1,null)
        this._pageLoaderService.materialScorecard$.next(this.materialAllData)
        this._notificationService.push("Material scorecard data retrieved", 1);

        
        this.cdr.detectChanges()
        this._apiService.isCompareLoader$.next(false)
        this.loader = false
      }, (e: any) => {
        this._notificationService.push("Data set not valid", 2);
        this._apiService.isCompareLoader$.next(false)
      }).finally(() => this._apiService.isCompareLoader$.next(false))
     }else{
     
      this.materialAllData = null
      this.dateDiffSentance = 0
      this.materialStatistic = null
      this.colorZoneGraphData = null;
      this.colorZoneStat = [];
      this.materialData = null
      Promise.all([
        this._apiService.post(api.materialColorZone, {...this.apiRequestData,allMaterialCode:'ALL'}).toPromise(),
        this._apiService.post(api.materialColorZonePrevious, {...this.previousYear,allMaterialCode:'ALL'}).toPromise(),
        this._apiService.post(api.materialData, this.apiRequestData).toPromise(),
        this._apiService.post(api.materialStatistics, {...this.apiRequestData}).toPromise(),
        this._apiService.post(api.materialStatistics, this.previousYear).toPromise(),
        // this._apiService.post(api.vendorGraph, this.apiRequestData).toPromise()
        this._apiService.post(api.materialAverageGraph,{...this.apiRequestData,}).toPromise(),
        this._apiService.post(api.materialStatistics, {...this.apiRequestData,materialCode:"ALL"}).toPromise(),

      ]).then((res: any) => {
        
        this.requiredMaterialGraph = null
        if (res === null || res === undefined) {
          this._apiService.isCompareLoader$.next(false)
          return
        }


        this.materialAllData = {...this.materialAllData,currentData : this.apiRequestData}
        this.materialAllData = {...this.materialAllData,previousData : this.previousYear}
        this.materialAllData = {...this.materialAllData,resData : res}
        this.materialAllData = {...this.materialAllData,hasWhichData:2} // 2 for with previous
        this.onMaterialPageLoad = null
        this.onMaterialPageLoad = this.apiRequestData
        this.cdr.detectChanges()
        // this._apiService.averageScore$.next(res[3].data);
        this._notificationService.push("Material scorecard data retrieved", 1);
        this.fillDataInStatisticsAndColorZone(res,0,1,3,4,0,5,2,6)
        this._pageLoaderService.materialScorecard$.next(this.materialAllData)
        
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
      
        case 'colorZone':
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

  async sendVendorReport(data: any) {

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

  setDataInPage(data:any)
  {
    this.materialStatistic = data.vendorStatistic,
    this.colorZoneStat = data.replicaColorZoneStat,
    this.dateDiffSentance = data.dateDiffSentance,
    this.listsDropDown = data.listsDropDown,
    this.apiRequestData = data.apiRequestData,
    this.previousYear = data.previousYear,
    this.dataForMaterialStatistics = data.dataForVendorStatistics,
    this.materialName=data.vendorName,
    this.totalScoreList = data.totalScoreList,
    this.otdAverageScore = data.otdAverageScore,
    this.ncrAverageScore = data.ncrAverageScore,
    this.ppvAverageScore = data.ppvAverageScore,
    this.ltaAverageScore = data.ltaAverageScore,
    this.compareAverageScore=data.compareAverageScore,
    this.ltaGraphData = data.ltaGraphData,
    this.ltaPercentageGraphData=data.ltaPercentageGraphData,
    this.ppvGraphData = data.ppvGraphData,
    this.ppvPercentageGraphData = data.ppvPercentageGraphData,
    this.ncrGraphData = data.ncrGraphData,
    this.ncrPercentageGraphData = data.ncrPercentageGraphData,
    this.otdGraphData = data.otdGraphData,
    this.otdPercentageGraphData =  data.otdPercentageGraphData,
    this.totalCompareScoreList =data.totalCompareScoreList


  }


  getSubjectDataForScoreCard(){
    return{
      vendorStatistic : this.materialStatistic,
    colorZoneStat : this.replicaColorZoneStat,
    dateDiffSentance : this.dateDiffSentance,
    listsDropDown : this.listsDropDown,
    apiRequestData : this.apiRequestData,
    previousYear : this.previousYear,
    dataForVendorStatistics : this.dataForMaterialStatistics,
    vendorName:this.materialName,
    totalScoreList : this.totalScoreList,
    otdAverageScore : this.otdAverageScore,
    ncrAverageScore : this.ncrAverageScore,
    ppvAverageScore : this.ppvAverageScore,
    ltaAverageScore : this.ltaAverageScore,
    compareAverageScore:this.compareAverageScore,
    ltaGraphData: this.ltaGraphData,
    ltaPercentageGraphData:this.ltaPercentageGraphData,
    ppvGraphData:this.ppvGraphData,
    ppvPercentageGraphData : this.ppvPercentageGraphData,
    ncrGraphData : this.ncrGraphData,
    ncrPercentageGraphData : this.ncrPercentageGraphData,
    otdGraphData : this.otdGraphData,
    otdPercentageGraphData :  this.otdPercentageGraphData,
    totalCompareScoreList:this.totalCompareScoreList

    }
  }


}
