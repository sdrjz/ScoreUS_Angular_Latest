import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
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
  selector: 'app-trendlines-pomanager-average-linechart',
  templateUrl: './trendlines-pomanager-average-linechart.component.html',
  styleUrls: ['./trendlines-pomanager-average-linechart.component.css']
})
export class TrendlinesPomanagerAverageLinechartComponent implements OnInit,OnChanges {
  series:any[]= []
  categories:any[] = [];
  randomColors: string[] = [];
  strokeWidth:any[] = []

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any;
  @Input() executeData: any

  @Output() charDataEmitter = new EventEmitter();
  constructor(public _apiService:GeneralApiService,
    private translateService :TranslateService,
    private cdr : ChangeDetectorRef) {

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['executeData']) {
      if (this.executeData === undefined || this.executeData === null)
          return
      let seriesData = [];  
      this.series = [];
      this.randomColors = [];
      this.categories = [];
      this.strokeWidth = [];
      this.executeData.forEach(item => {
        seriesData.push(item.avarage)
        this.categories.push(item.days);
        // let seriesData1 = {
        //     name: item.days,
        //     data: [item.avarage]
        // };
        // seriesData.push(seriesData1);
      });
      let seriesData1 = {
          name: 'Avg',
          data: seriesData
      };
      this.series.push(seriesData1);

      this.loadChart();
    }
  }

  ngOnInit(): void {
     

    this.loadChart();
  }

  loadChart(){
    this.chartOptions = {
      series: this.series, 
      // [
      //     {
      //       name: "sea green",
      //       data: [10, 20, 40, 60, 80, 100]
      //     },
      //     {
      //       name: "purple",
      //       data: [0, 41, 51, 49, 72, 90]
      //     },
      //     {
      //       name: "red",
      //       data: [0, 25, 58, 69, 70, 95]
      //     },
      //     {
      //       name: "yellow",
      //       data: [0, 22, 50, 60, 80, 95]
      //     },
      //     {
      //       name: "light green",
      //       data: [0, 24, 55, 59, 78, 96]
      //     }
  
      //   ],
      chart: {
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
        width: [3],
        colors: ["#d81b22"],
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
            text: "Average Line Chart",
            style: {
              color: "#FEB019"
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
