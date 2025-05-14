import { Component, OnInit, ViewChild } from '@angular/core';


import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-current-open-po-status-tablegraph',
  templateUrl: './current-open-po-status-tablegraph.component.html',
  styleUrls: ['./current-open-po-status-tablegraph.component.css']
})
export class CurrentOpenPoStatusTablegraphComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Current Open PO Status",
          data: [21, 22, 10, 40, 28, 16]
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function(chart, w, e) {
          }
        }
      },
      colors: [
        "#A7FF34",
        "#008CB3",
        "#BC1A20",
        "#FFCF64",
        "#00D9A6",
        "#A030E1",
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          ["FuturedueLine%", "21%"],
          ["FuturedueValue%", "22%"],
          ["Ack'dNeededLine%", "10%"],
          ["Ack'd needed value%", "40%"],
          ["PastdueLine%", "28%"],
          ["PastdueValue%", "16%"],
        ],
        labels: {
          style: {
            colors: [
              "#A7FF34",
              "#008CB3",
              "#BC1A20",
              "#FFCF64",
              "#00D9A6",
              "#A030E1",
            ],
            fontSize: "12px"
          }
        }
      }
    };
   }

  ngOnInit(): void {
  }

}
