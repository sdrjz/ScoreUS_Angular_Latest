import { ChangeDetectorRef, Component, Inject, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors: any;
};

@Component({
  selector: 'app-openpoanalysis-barchart',
  templateUrl: './openpoanalysis-barchart.component.html',
  styleUrls: ['./openpoanalysis-barchart.component.css']
})
export class OpenpoanalysisBarchartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() executeData: any

  seriesData:any[]= []
  categoryData:any[] = [];

  constructor(
    public _apiService:GeneralApiService,
    private translateService :TranslateService,
    private cdr : ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.chartOptions = {
      series: [],
      chart: {
        type: "bar",
        height: 350
      },
      colors: ["#FFCF64", "#E61849"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          // endingShape: "rounded",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: []
      },
      // yaxis: {
      //   title: {
      //     text: "$ (thousands)"
      //   }
      // },
      fill: {
        opacity: 1
      },
      // tooltip: {
      //   y: {
      //     formatter: function(val) {
      //       return "" + val;
      //     }
      //   }
      // }
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['executeData']) {
      if (this.executeData === undefined || this.executeData === null)
        return
      
      this.changeFilters();
    }
  }

  changeFilters(){
    // this.seriesData     =   [];
    this.categoryData     =   [];
    const valArray = [];
    const lineArray = [];
    this.executeData.forEach(item => {
        valArray.push(item.value)
        lineArray.push(item.line)
        this.categoryData.push(item.name)
    })

    this.seriesData = [
      {
        name: "Value %",
        data: valArray
      },
      {
        name: "Line %",
        data: lineArray
      }
    ];

    this.loadChart();
    this.cdr.detectChanges();
  }
 
  ngOnInit(): void {
     

    if(this.data.executeData != undefined) {
      this.executeData = this.data.executeData;
      this.changeFilters();
   }
  }

  loadChart(){
    this.chartOptions = {
      series: this.seriesData,
      chart: {
        type: "bar",
        height: 350
      },
      colors: ["#FFCF64", "#E61849"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          // endingShape: "rounded",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: this.categoryData
      },
      // yaxis: {
      //   title: {
      //     text: "$ (thousands)"
      //   }
      // },
      fill: {
        opacity: 1
      },
      // tooltip: {
      //   y: {
      //     formatter: function(val) {
      //       return "" + val;
      //     }
      //   }
      // }
    };
  }
}
