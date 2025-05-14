import {
  ChangeDetectorRef,
    Component,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild,
  } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
  import {
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexGrid,
    ApexLegend,
    ChartComponent,
  } from "ng-apexcharts";
import { GeneralApiService } from "src/app/services/appService/generalApiService";
  
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
    title: any;
  };
  
  @Component({
    selector: "app-bar",
    templateUrl: "./bar.component.html",
    styleUrls: ["./bar.component.css"],
  })
  export class BarComponent implements OnInit, OnChanges {
    @ViewChild("chart") chart: ChartComponent;
    @Input() chartData: any | null;
    @Input() chartFor: any | null;
    // @Output() chartDataEmitter = new EventEmitter<any>();
    // @Input() chartOptionsFromParent : any |null
    @Input() selfFutureDays : any | null
    series_data : any[] = [];
    categories_data : any[]  = [];

    public chartOptions: Partial<ChartOptions>;
  
    constructor(private cdr:ChangeDetectorRef,
      @Inject(MAT_DIALOG_DATA) public data: any,
    private _apiService :GeneralApiService) {
        
    }

    ngOnChanges(changes: SimpleChanges): void {
      if (changes["chartData"]) {
        // if(this.chartData.comparison_Left.length < 1 ) return
        this.sortParamData();
      }
    }
  
    sortParamData() {
        switch(this.chartFor) { 
            case 'openpoexpeditor-comparisons': 
                    this.series_data  = [];
                    this.categories_data   = [];
                    this.chartData.map(chart_data => {
                        this.categories_data.push(chart_data.optionValues+" Spend")
                        this.series_data.push(chart_data.spend);
                        this.categories_data.push(chart_data.optionValues+" Line")
                        this.series_data.push(chart_data.line);
                    })
                    this.renderdChart()
                break; 
            case 'dashboard-current-open-po-status': 
                  // this.categories_data = [
                  //   'Open PO Line',
                  //   'Open PO Value',
                  //   'PastDue Line',
                  //   'PastDue Value',
                  //   'Acknowledge Needed Line',
                  //   'Acknowledge Needed Value',
                  //   'Future Past due Line',
                  //   'Future Past due Value',
                  // ],
                  this.categories_data = [
                    
                    ["Pastdue Line"],
                    ["Pastdue Value"],
                    ["Ack'd Needed Line"],
                    ["Ack'd Needed Value"],
                    ["Future Pastdue Line"],
                    ["Future Pastdue Value"],
                    ["Lead Time Check Line"],
                    ["Lead Time Check Value"],
                  ];
                  this.series_data = [
                    this.chartData.totalPastduePO[0]?.pastLineCountPercentage, 
                    this.chartData.totalPastduePO[0]?.pastTotalValuePercentage, 
                    this.chartData.totalAcknowledgementPO[0]?.acknowledgementLineCountPercentage, 
                    this.chartData.totalAcknowledgementPO[0]?.acknowledgementTotalValuePercentage, 
                    this.chartData.totalFuturePastPO[0]?.futurePastLineCountPercentage, 
                    this.chartData.totalFuturePastPO[0]?.futurePastTotalValuePercentage, 
                    this.chartData.totalLeadTimeCheackLinePO[0]?.leadTimeCheackCountPercentage, 
                    this.chartData.totalLeadTimeCheackLinePO[0]?.leadTimeCheackTotalValuePercentage, 
                  ];
                this.renderdChart()
              break; 
        }
    }
    
    renderdChart(){
        this.chartOptions = {
            series: [
              {
                name: "Current Open PO Status",
                data: this.series_data,
              },
            ],
            chart: {
              height: 350,
              type: "bar",
              events: {
                click: function (chart, w, e) {
                },
              },
            },
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8",
            ],
            plotOptions: {
              bar: {
                columnWidth: "45%",
                distributed: true,
              },
            },
            title: {
              // text: "some text",
            },
            dataLabels: {
              enabled: true,
              offsetY: 4,
              formatter: function (value: number) {
                if (isNaN(value)) {
                  return 'No Value';  // Show 'NaN' for missing data points
                }
                return value + "%";  // Format normal values with '%' symbol
              },

              
             
              style: {
                colors: ["#000"],
                fontSize: "12px",
               
            },
              
            },
            legend: {
              show: false,
            },
            grid: {
              show: false,
            },
            xaxis: {
              categories: this.categories_data,
              // [
              //   ["John", "Doe"],
              //   ["Joe", "Smith"],
              //   ["Jake", "Williams"],
              //   "Amber",
              //   ["Peter", "Brown"],
              //   ["Mary", "Evans"],
              //   ["David", "Wilson"],
              //   ["Lily", "Roberts"],
              // ],
              labels: {
                style: {
                  colors: [
                    "#008FFB",
                    "#00E396",
                    "#FEB019",
                    "#FF4560",
                    "#775DD0",
                    "#546E7A",
                    "#26a69a",
                    "#D10CE8",
                  ],
                  fontSize: "12px",
                },
              },
            },
            yaxis: {
            labels: {
                formatter: function (value: number) {
                    return value + "%"; // Append the '%' symbol to Y-axis labels
                },
            },
        },
        };



        // this.chartDataEmitter.emit({name :'Chart1' , data : this.chartOptions})
    }

    ngOnInit(): void {
      // this.dataParams = {
      //   "chartData": this.data.chartData,
      //   "chartFor" : this.data.chartFor
      // } 
      if(this.data.chartData != undefined) {
        this.chartData = this.data.chartData;
        this.chartFor = this.data.chartFor;
        this.sortParamData()
      }
      this.renderdChart();
    }
  }
  