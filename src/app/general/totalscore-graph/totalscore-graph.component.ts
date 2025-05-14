import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from "moment";


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexYAxis
} from "ng-apexcharts";
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  yaxis: ApexYAxis | ApexYAxis[];
};


@Component({
  selector: 'app-totalscore-graph',
  templateUrl: './totalscore-graph.component.html',
  styleUrls: ['./totalscore-graph.component.css']
})
export class TotalscoreGraphComponent implements OnInit,OnChanges {
  ncrList: any[]
  ppvList: any[]
  ltaList: any[]
  otdList: any[]
  dateList: any[] 
  
  series:any[]= [
    {
      name:"Total Score",
      data:[]
    },
    {
      name:"Total OTD",
      data:[]
    },
    {
      name:"Total NCR",
      data:[]
    },
    {
      name:"Total PPV",
      data:[]
    },
    {
      name:"Total LTA",
      data:[]
    },
  ]

  parameterValue: any[]
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() executeData: any
  @Input() totalScores: any
  lineBarChartOption: any
  @Output() charDataEmitter = new EventEmitter();
  constructor(public _apiService:GeneralApiService,
    private translateService :TranslateService,
    private cdr : ChangeDetectorRef) {

    this.chartOptions = {
      series: [
        {
          name: "sea green",
          data: [10, 20, 40, 60, 80, 100]
        },
        {
          name: "purple",
          data: [0, 41, 51, 49, 72, 90]
        },
        {
          name: "red",
          data: [0, 25, 58, 69, 70, 95]
        },
        {
          name: "yellow",
          data: [0, 22, 50, 60, 80, 95]
        },
        {
          name: "light green",
          data: [0, 24, 55, 59, 78, 96]
        }

      ],
      chart: {
        //width: "100% !important",
        width: "100%",
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight",
        width: [2, 2, 2],
        colors:["#A7FF34", "#8B00DA", "#FF3465", "#FFCF64", "#00D9A6"],
      },
      title: {
        text: "",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ]
      },
      yaxis:[
        {
          seriesName: "Revenue",
          opposite: false,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#FEB019"
          },
          title: {
            text: "Revenue (thousand crores)",
            style: {
              color: "#FEB019"
            }
          }
        }
      ],
    };
    

   }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['executeData']) {
      if (this.executeData === undefined)
        return
      let lineBarChartOption = this.lineBarChartOption?.value;
      if (this.lineBarChartOption?.value === undefined || this.lineBarChartOption?.value === '') {
        lineBarChartOption = 30;
      }
      this.dateList = this.equalIntervalDates(this.executeData.startDate, this.executeData.endDate, lineBarChartOption)
    }

    if (changes['totalScores']) {
      this.series[0].data=this.totalScores?.totalScores
      this.series[1].data=this.totalScores?.otdScores
      this.series[2].data=this.totalScores?.ncrScores
      this.series[3].data=this.totalScores?.ppvScores
      this.series[4].data=this.totalScores?.ltaScores
    
      
      this.chartOptions.series = this.series
      this.chartOptions.xaxis.categories = this.dateList
      this.charDataEmitter.emit({ name: 'Dashboard total Score', data: this.chartOptions })
    }
  }

  ngOnInit(): void {
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })

    this._apiService.kpiParameter
    .subscribe((res: any) => {
      this.lineBarChartOption = res?.adminSettingList.filter((i: any) => i.attribute == 'Line Chart Report Option')[0]
      this.parameterValue = res?.scoreSettingList;
      this.ncrList = res?.scoreSettingList.filter((i: any) => i.parameterType == "NCR Parameter")
      this.ppvList = res?.scoreSettingList.filter((i: any) => i.parameterType == "PPV Parameter")
      this.ltaList = res?.scoreSettingList.filter((i: any) => i.parameterType == "LTA Parameter")
      this.otdList = res?.scoreSettingList.filter((i: any) => i.parameterType == "OTD Parameter")
    })
  }


  equalIntervalDates(startDate, endDate, interval) {
    const dateList = [];
    let start = new Date(startDate);
    const end = new Date(endDate);
    while (start <= end) {
      dateList.push(moment(start).format('DD MMMM YYYY'));
      start = moment(start).add(interval, 'days').toDate();
    }
    dateList.push(moment(endDate).format('DD MMMM YYYY'));
    return dateList.map(date => date);
  }


}
