import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment'
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
import { api } from 'src/app/api.endpoints';
import { twoLineChartModel } from 'src/app/modal/twoLinseChartDataModel';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { VendorsreporthistoryComponent } from 'src/app/vendorsreporthistory/vendorsreporthistory.component';

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
  selector: 'app-basic-line-chart',
  templateUrl: './basic-line-chart.component.html',
  styleUrls: ['./basic-line-chart.component.css']
})
export class BasicLineChartComponent implements OnInit, OnChanges {
  dateList: any[] = []
  @Input() name: any
  @Input() chartDataFromParent: any
  @Input() executeData: any
  @Input() colorZoneGraphData!: any
  @Input() compareColorScore!: any
  @Output() charDataEmitter = new EventEmitter<any>();
  monthName: any[] = []
  yellowData: any[] = []
  redData: any[] = []
  lineBarChartOption
  greenData: any[] = []
  public monthArray: any[] = []
  public acheived: any[] = []
  public target: any[] = []
  @Input() height = 400
  @Input() graphData: twoLineChartModel
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any;
  user: any

  constructor(public _apiService: GeneralApiService,
    private cdr : ChangeDetectorRef,
    private translateService: TranslateService) {
    this.chartOptions = {
      series: [
       
      ],
      chart: {
        height: this.height,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#FF3465", "#FFCF64", "#00d9a6"],
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'center',
        },
        markers:{
          colors: ["#FF3465", "#FFCF64", "#00d9a6"]
        },
        stroke: {
          curve: "straight",
          width: [2, 2, 2],
          colors: ["#FF3465", "#FFCF64", "#00d9a6"],
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
          "Dec"
        ],
        labels: {
          rotate: -45,
          skipOverlap: true,
        },
      },
      yaxis: [
        {
          seriesName: "",
          opposite: false,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#FEB019"
          },
          title: {
            text: "",
            style: {
              color: "#FEB019"
            }
          }
        }
      ],
    };
  }

  ngOnInit(): void {

    let user = localStorage.getItem('userData')
    if (user)
      this.user = JSON.parse(user);

this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["chartDataFromParent"]) {
      this.chartOptions = this.chartDataFromParent.data
    }



    if (changes['colorZoneGraphData']) {


      if (this.colorZoneGraphData === null || this.colorZoneGraphData === undefined){
        return
      }
      if (this.colorZoneGraphData.hasOwnProperty('data')) {
        this.chartOptions = this.colorZoneGraphData.data
        return
      }

      this.greenData = []
      this.yellowData = []
      this.redData = []
      this.monthName = []

      this.colorZoneGraphData.forEach((element: any) => {

        this.monthName.push(element.startDate)
      });

      // this._apiService.kpiParameter
      // .subscribe((res: any) => {

      //   this.lineBarChartOption = res?.adminSettingList.filter((i: any) => i.attribute == 'Line Chart Report Option')[0]
      //   let lineBarChartOption = this.lineBarChartOption?.value;
      //   if (this.lineBarChartOption?.value === undefined || this.lineBarChartOption?.value === '') {
      //     lineBarChartOption = 30;
      //   }
      //   this.monthName =this.equalIntervalDates(this.executeData.startDate,this.executeData.endDate,lineBarChartOption)
      // })

      this.colorZoneGraphData?.forEach((element: any) => {
        // this.monthName.push(element.monthName)
        this.redData.push(element.redPercentage)
        this.greenData.push(element.greenPercentage)
        this.yellowData.push(element.yellowPercentage)
      });
      let dataLabel = false
      if(this.redData.length < 2)
      dataLabel  = true
      this.chartOptions = {
        series: [
          {
            name: "Red",
            data: this.redData
          },
          {
            name: "Yellow",
            data: this.yellowData
          },
          {
            name: "Green",
            data: this.greenData
          }
        ],
        chart: {
          height: this.height,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        colors: ["#f5180c","#FFCF64" ,"#00b831"],
        markers:{
          size:6,
          colors: ["#f5180c","#FFCF64" ,"#00b831"],

        },
        dataLabels: {
          enabled: dataLabel
        },
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'center',
          labels:{
            colors: ["#f5180c","#FFCF64" ,"#00b831"],


          }
        },
        stroke: {
          curve: "straight",
          width: [3, 3, 3],
          colors: ["#f5180c","#FFCF64" ,"#00b831"],

        },
        title: {
          text: "",
          align: "left"
        },
        grid: {
          row: {
            colors: ["#fff", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: this.monthName,
          labels: {
            rotate: -45,
            skipOverlap: true,
          },
        },
        yaxis: [
          {
            seriesName: "Percentage",
            opposite: false,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#FEB019"
            },
            title: {
              text: "Color Zone",
              style: {
                color: "#FEB019"
              }
            },
            min: 0,
            max: 100
          }
        ],
      };


      this.cdr.detectChanges(); 

      this.charDataEmitter.emit({ name: this.name, data: this.chartOptions })






    }

    if (changes['compareColorScore']) {
      this.chartOptions = this.compareColorScore.data
    }

    if (changes['executeData']) {
      if (this.executeData === undefined)
        return
      let lineBarChartOption = this.lineBarChartOption?.value;
      if (this.lineBarChartOption?.value === undefined || this.lineBarChartOption?.value === '') {
        lineBarChartOption = 30;
      }
      this.dateList = this.equalIntervalDates(this.executeData.startDate, this.executeData.endDate, lineBarChartOption)
    }

    if (changes['graphData']) {

      if (this?.graphData) {
        this.graphData.data = this.graphData?.data?.map((i: any) => {
          return {
            ...i,
            month: this._apiService.getMonthName(i.monthName.substring(0, i.monthName?.indexOf(' ')), i.monthName),
            monthName: '1 ' + i.monthName
          }
        }
        )

        this.graphData?.data?.sort((val1, val2) => {
          return new
            Date(val1.monthName).getTime() - new Date(val2.monthName).getTime()
        })


        this.monthArray = this.dateList
        this.graphData?.data?.forEach((i: any) => {
          // this.monthArray.push(i.month)


          this.acheived.push(i.totalScore)
          this.target.push(i.totalScoreTargetScore)

          // if(this.graphData.chartFor == 'percentage'){

          // }else{
          //   this.acheived.push(i.score)
          //   this.target.push(i.targetScore)
          // }
        })





        // this.chartOptions = {
        //   series: [
        //     {
        //       name: "Red",
        //       data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        //     },
        //     {
        //       name: "Yellow",
        //       data: this.acheived
        //     },
        //     {
        //       name: "Green",
        //       data: this.target
        //     }
        //   ],
        //   chart: {
        //     height: this.height,
        //     type: "line",
        //     zoom: {
        //       enabled: false
        //     }
        //   },
        //   legend: {
        //     show: true,
        //     position: 'top',
        //     horizontalAlign: 'center',
        //     labels: {
        //       colors: ["#FF3465", "#FFCF64", "#00d9a6"],
        //       useSeriesColors: true
        //     },
        //   },
        //   dataLabels: {
        //     enabled: false
        //   },
        //   stroke: {
        //     curve: "straight",
        //     width: [2, 2, 2],
        //     colors: ["#FF3465", "#FFCF64", "#00d9a6"],
        //   },
        //   title: {
        //     text: "",
        //     align: "left"
        //   },
        //   grid: {
        //     row: {
        //       colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        //       opacity: 0.5
        //     }
        //   },

        //   xaxis: {
        //     categories: this.monthArray,
        //     labels: {
        //       rotate: -45,
        //       skipOverlap: true,
        //     },
        //   },
        //   yaxis: [
        //     {
        //       seriesName: "Revenue",
        //       opposite: false,
        //       axisTicks: {
        //         show: true
        //       },
        //       axisBorder: {
        //         show: true,
        //         color: "#FEB019"
        //       },
        //       title: {
        //         text: this.graphData.heading,
        //         style: {
        //           color: "#FEB019"
        //         }
        //       }
        //     }
        //   ],
        // };

      }
    }
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