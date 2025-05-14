import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  colors: any;
};

@Component({
  selector: 'app-pomanager-piechart',
  templateUrl: './pomanager-piechart.component.html',
  styleUrls: ['./pomanager-piechart.component.css']
})
export class PomanagerPiechartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [25, 85, 13, 35],
      chart: {
        width: 377,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D"],

      colors: ["#2FBF34", "#E61849", "#FFCF64", "#16E2C6"],
      
      responsive: [
        {
          breakpoint: 575,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: "bottom",
              show: true,
            },
            dataLabels: {
                enabled: false,
            },
          }
        }
      ]
    };
  }

  ngOnInit(): void {
  }

}
