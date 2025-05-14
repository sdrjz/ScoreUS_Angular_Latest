import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

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
  selector: 'app-pouserdashboard-linechart',
  templateUrl: './pouserdashboard-linechart.component.html',
  styleUrls: ['./pouserdashboard-linechart.component.css']
})
export class PouserdashboardLinechartComponent implements OnInit,OnChanges {
    series:any[]= []
    categories:any[] = [];
    randomColors: string[] = [];
    strokeWidth:any[] = []

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: any;
    @Input() executeData: any
    @Input() chartFor: any

    @Output() charDataEmitter = new EventEmitter();
    constructor(
        public _apiService:GeneralApiService,
        private translateService :TranslateService,
        private cdr : ChangeDetectorRef,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.chartOptions = {
        series: this.series, 
        chart: {
          width: "100%",
          height: 350,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        colors:['#A7FF34','#8B00DA','#FF3465','#000fff'],
        markers: {
          size: 10,
          colors: ['#A7FF34','#8B00DA','#FF3465','#000fff'] // Customize the bullet color here
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'center',
        },
        stroke: {
          curve: "straight",
          width: [3,3,3,3],
          colors: ['#A7FF34','#8B00DA','#FF3465','#000fff'],
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
          categories: this.categories, 
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
              text: "",
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
          this.changeFilters();
            
        }
    }

    changeFilters(){
      if (this.executeData === undefined || this.executeData === null)
                return
      if(!this.executeData.hasOwnProperty("dashboardLineGraph") && !this.executeData.hasOwnProperty("dashboardTotalValueGraph") ) return
      
      this.categories = [];
      
      if(this.chartFor == 'DashboardPoLine'){
          this.series = [
              {
                  name : "All Pastdue Lines",
                  data : []
              },
              {  
                  name : "All Ack'd Needed Lines",
                  data : []
              },
              {
                name : "Lead Time Check Lines",
                data : []
              },
              {
                  name : "All Future Lines",
                  data : []
              }
          ]

          this.executeData.dashboardLineGraph.forEach((item:any) => {
              this.categories.push(item.monthName);
              this.series[0].data.push(item.allPastDueLines)
              this.series[1].data.push(item.allAckNeededLines)
              this.series[2].data.push(item.allLeadTimeCheckOrdersLines)
              this.series[3].data.push(item.allFutureDaysPasdueLines)
          });
      } else if(this.chartFor == 'DashboardPoValue') {
          this.series = [
              {
                  name : "All Pastdue Values",
                  data : []
              },
              {  
                  name : "All Ack'd Needed Values",
                  data : []
              },
              {
                name : "Lead Time Check Values",
                data : []
              },
              {
                  name : "All Future Values",
                  data : []
              }
          ]

          this.executeData.dashboardTotalValueGraph.forEach((item:any) => {
              this.categories.push(item.monthName);
              this.series[0].data.push(item.allPastDueValue)
              this.series[1].data.push(item.allAckNeededValue)
              this.series[2].data.push(item.allLeadTimeCheckOrdersValue)
              this.series[3].data.push(item.allFutureDaysPasdueValue)
          });
      }
      
      this.loadChart()
    }

    loadChart(){
        this.chartOptions = {
          series: this.series, 
          chart: {
            width: "100%",
            height: 350,
            type: "line",
            zoom: {
              enabled: false
            }
          },
          colors:['#A7FF34','#8B00DA','#FF3465','#000fff'],
          markers: {
            size: 10,
            colors: ['#A7FF34','#8B00DA','#FF3465','#000fff'] // Customize the bullet color here
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'center',
          },
          stroke: {
            curve: "straight",
            width: [3,3,3,3],
            colors: ['#A7FF34','#8B00DA','#FF3465','#000fff'],
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
            categories: this.categories, 
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
                text: "",
                style: {
                  color: "#FEB019"
                }
              }
            }
          ],
        };
        this.cdr.detectChanges();
    }
    
    ngOnInit(): void {
     

      if(this.data.executeData != undefined) {
        this.executeData = this.data.executeData;
        this.chartFor = this.data.chartFor;
        this.changeFilters();
      }
    }

}
