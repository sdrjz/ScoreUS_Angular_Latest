import { Component, OnInit, ViewChild } from '@angular/core';

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
  selector: 'app-graphlargetc',
  templateUrl: './graphlargetc.component.html',
  styleUrls: ['./graphlargetc.component.css']
})
export class GraphlargetcComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {

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
        height: 550,
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

  ngOnInit(): void {
  }

}
