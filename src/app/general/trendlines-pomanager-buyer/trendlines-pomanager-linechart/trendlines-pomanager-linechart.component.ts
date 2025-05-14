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
  selector: 'app-trendlines-pomanager-linechart',
  templateUrl: './trendlines-pomanager-linechart.component.html',
  styleUrls: ['./trendlines-pomanager-linechart.component.css']
})
export class TrendlinesPomanagerLinechartComponent implements OnInit,OnChanges {

  series:any[]= []
  categories:any[] = [];
  randomColors: string[] = [];
  strokeWidth:any[] = []

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any;
  @Input() executeData: any
  @Input() yaxisTitle:any;
  @Input() chartFor:any;
  @Output() charDataEmitter = new EventEmitter();
  constructor(
    public _apiService:GeneralApiService,
    private translateService :TranslateService,
    private cdr : ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.chartOptions = {
        series: [],
        // [
        //   {
        //     name: "sea green",
        //     data: [10, 20, 40, 60, 80, 100]
        //   },
        //   {
        //     name: "purple",
        //     data: [0, 41, 51, 49, 72, 90]
        //   },
        //   {
        //     name: "red",
        //     data: [0, 25, 58, 69, 70, 95]
        //   },
        //   {
        //     name: "yellow",
        //     data: [0, 22, 50, 60, 80, 95]
        //   },
        //   {
        //     name: "light green",
        //     data: [0, 24, 55, 59, 78, 96]
        //   }
  
        // ],
        chart: {
          //width: "100% !important",
          width: "100%",
          height: 350,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        colors:[],
        markers: {
          size: 10,
          colors: [] // Customize the bullet color here
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
          width: [], 
          // [2, 2, 2],
          colors: [],
          // ["#A7FF34", "#8B00DA", "#FF3465", "#FFCF64", "#00D9A6"],
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
          categories:[]
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
            // title: {
            //   text: "Revenue (thousand crores)",
            //   style: {
            //     color: "#FEB019"
            //   }
            // }
          }
        ],
      };
  }


    ngOnChanges(changes: SimpleChanges): void {
       
        if (changes['executeData']) {
            if (this.executeData === undefined || this.executeData === null)
                return
              
            this.sortParamData();
            
        }
    }

    sortParamData(){
      // let series = [];
      this.series = [];
      this.randomColors = [];
      this.categories = [];
      this.strokeWidth = [];

      let unqiueBuyers =   {};
      
      let maxDays = Math.max(...this.executeData.map(item => item.day1));
      for (let index = 1; index <= maxDays; index++) {
        this.categories.push(index);
      }
      
      this.executeData.forEach(item => {
        const { id, name, day1,average_Lines, poLineCount, poLinePercentage } = item;
        
        if (!unqiueBuyers[id]) {
          unqiueBuyers[id] = {
                id: id,
                name: name,
            };
        }

        // Set default value for missing days
        for (let i = 1; i <= maxDays; i++) {
            if (!unqiueBuyers[id][`day${i}`]) {
              unqiueBuyers[id][`day${i}`] = 0;
            }
        }
        unqiueBuyers[id][`day${day1}`] = `${average_Lines}`;
        // if(this.chartFor == 'Line'){
        //   unqiueBuyers[id][`day${day1}`] = `${average_Lines}`;
        // } else {
        //   unqiueBuyers[id][`day${day1}`] = `${poLineCount}`;
        // }
      });
    
      for (const id in unqiueBuyers) {
        if (unqiueBuyers.hasOwnProperty(id)) {

          const randomColor = this.getRandomColor();
          this.randomColors.push(randomColor);

          this.strokeWidth.push(3)

          const buyer = unqiueBuyers[id];
          const buyerData = {
              name: buyer.name,
              data: []
          };
  
          for (let i = 1; i <= maxDays; i++) {
              buyerData.data.push(buyer[`day${i}`] || 0);
          }
  
          this.series.push(buyerData);
        }
      }
      this.loadChart();
    }

    ngOnInit(): void {
     

        if(this.data.executeData != undefined) {
          this.executeData = this.data.executeData;
          this.sortParamData();
        }
        // this.loadChart();
    }

    loadChart(){
        this.chartOptions = {
            series: this.series,
            // [
            //   {
            //     name: "sea green",
            //     data: [10, 20, 40, 60, 80, 100]
            //   },
            //   {
            //     name: "purple",
            //     data: [0, 41, 51, 49, 72, 90]
            //   },
            //   {
            //     name: "red",
            //     data: [0, 25, 58, 69, 70, 95]
            //   },
            //   {
            //     name: "yellow",
            //     data: [0, 22, 50, 60, 80, 95]
            //   },
            //   {
            //     name: "light green",
            //     data: [0, 24, 55, 59, 78, 96]
            //   }
      
            // ],
            chart: {
              //width: "100% !important",
              width: "100%",
              height: 350,
              type: "line",
              zoom: {
                enabled: false
              }
            },
            colors:this.randomColors,
            markers: {
              size: 10,
              colors: this.randomColors // Customize the bullet color here
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
              width: this.strokeWidth, 
              // [2, 2, 2],
              colors: this.randomColors,
              // ["#A7FF34", "#8B00DA", "#FF3465", "#FFCF64", "#00D9A6"],
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
              title: {
                text: "Days",
                style: {
                  color: "#bc1a20"
                }
              }
              // [
              //   "Jan",
              //   "Feb",
              //   "Mar",
              //   "Apr",
              //   "May",
              //   "Jun",
              //   "Jul",
              //   "Aug",
              //   "Sep",
              //   "Oct",
              //   "Nov",
              //   "Dec",
              // ]
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
                  text: this.yaxisTitle,
                  style: {
                    color: "#bc1a20"
                  }
                }
              }
            ],
          };

          this.cdr.detectChanges();
    }

    getRandomColor(): string {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
}