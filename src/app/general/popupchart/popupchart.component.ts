import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-popupchart',
  templateUrl: './popupchart.component.html',
  styleUrls: ['./popupchart.component.css']
})
export class PopupchartComponent implements OnInit {
  colorZoneGraphData:any
  chartData!: any
  vendorName!: any
  dashBoardData:any
  poName:any
  poData:any
  heading!:any
  compareColorData!:any
  dashBoardTotalScore!:any
  executeData!:any
  openpoanalysisBarChartData!:any;
  openpoanalysisPieChartData!:any;
  trendlinesPomanagerLineChartData!:any;
  
  expeditorBarChartData!:any;
  chartFor!:any;

  dashboardBarChartData!:any;
  dashboardLineChartData!:any;

  constructor(public dialogRef: MatDialogRef<PopupchartComponent>,
    private translateService:TranslateService,
    private _apiService:GeneralApiService,
    private cdr :ChangeDetectorRef
    ,@Inject(MAT_DIALOG_DATA) public data: any,) {
    this.compareColorData = data?.compareColorData 
    this.colorZoneGraphData = data?.colorZoneGraphData
    this.chartData = data?.chartData?.data
    this.vendorName = data?.vendorName
    this.heading = data?.name
    this.executeData = data.executeData;
    this.poData = data?.poData
    this.poName = data?.poName
    this.dashBoardTotalScore = data?.dashBoardTotalScore
    this.dashBoardData = data.dashBoardData;
    
    this.openpoanalysisBarChartData = data?.openpoanalysisBarChartData;
    this.openpoanalysisPieChartData = data?.openpoanalysisPieChartData;

    this.trendlinesPomanagerLineChartData = data?.trendlinesPomanagerLineChartData;

    this.expeditorBarChartData = data?.expeditorBarChartData;
    this.chartFor = data?.chartFor;

    this.dashboardBarChartData = data?.dashboardBarChartData;
    this.dashboardLineChartData = data?.dashboardLineChartData;
    
  }

  ngOnInit(): void {
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })

    // this._apiService.isLanguageSelector$.subscribe((res:any)=>this.translateService.use)
  }

  onClose() {
    this.dialogRef.close()
  }
}
