import { I, O, R } from '@angular/cdk/keycodes';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import html2canvas from 'html2canvas';
import { data } from 'jquery';
import jsPDF from 'jspdf';
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
import { api } from 'src/app/api.endpoints';
import { twoLineChartModel } from 'src/app/modal/twoLinseChartDataModel';
import { VendorCommodityComponent } from 'src/app/raw-data-setting/vendor-commodity/vendor-commodity.component';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { createPartiallyEmittedExpression } from 'typescript';

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
  selector: 'app-twoline-basic-line-chart',
  templateUrl: './twoline-basic-line-chart.component.html',
  styleUrls: ['./twoline-basic-line-chart.component.css']
})
export class TwolineBasicLineChartComponent implements OnInit, OnChanges {
  @Input() isMainDashBoard:boolean = false
  @Input() vendorTotalScore!:any
  @Input() helper!: any
  @Input() poData: any
  @Input() poName: string = ""
  @Input() height = 400 // for maintaining height
  @Input() executeData: any
  @Input() averageScore!: any
  @Input() chartDataFromParent!: any
  @Input() graphData: twoLineChartModel|any
  @Input() dashBoardData:any
  @Input() superAdminDashboardGraphData: any
  @Input() requiredVendorGraphData : any // for only vendor score card
  @Input() superAdminCompleteDashboardGraphData: any
  @Input() superAdminpoDashboardGraphData: any
  @Input() superAdminVendorDashboardGraphData: any
  @Input() heading: any //for super admin graph name help
  @Input() totalScore! :any
  @Output() charDataEmitter = new EventEmitter();
  @Input() requiredScorecardGraphData!:any[]
  @Input() scoreCardGraphHeading:any


  chartYMin: any;
  chartYMax: any;
  ncrList: any[]
  ppvList: any[]
  ltaList: any[]
  otdList: any[]
  dateList: any[] = []
  parameterValue: any[]
  lineBarChartOption: any
  user: any
  targetIndex = 2
  strokedColors: any[] = ["#cf2c29", "#ada50e", "#56cc16", '#0c85f0', '#000', '#e00b68']
  acheived: number[] = []
  target: number[] = []
  monthArray: any = []
  series: any[] = [
    {
      name: "target",
      data: []
    },
    {
      name: "sea green",
      data: []
    },
    {
      name: "purple",
      data: []
    },
    {
      name: "dark maroon",
      data: []
    },
    {
      name: "lemon yellow",
      data: []
    },
    {
      name: "fresh green",
      data: []
    },
    {
      name: "fresh pink",
      data: []
    },
  ]
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any;

  constructor(public _apiService: GeneralApiService,
     private cdr: ChangeDetectorRef,
     private translateService :TranslateService,
     ) {
    let userData = localStorage.getItem('userData');
    if (userData)
      this.user = JSON.parse(userData)

    this.chartOptions = {
      series: [
        
      ],
      chart: {
        //width: "100% !important",
        width: "100%",
        height: this.height,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 10,
        colors: ["#FF3465", "#003C4D", "#A2422E"] // Customize the bullet color here
      },
      colors: ["#FF3465", "#003C4D", "#A2422E"],
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center',
      },
      stroke: {
        curve: "straight",
        width: [3, 3, 3],
        colors:["#FF3465", "#003C4D", "#A2422E"] ,
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
          "1 January 2018",
          "1 Febuary 2018",
          "1 March 2018",
          "1 April 2018",
          "1 May 2018",
          "1 June 2018",
          "1 July 2018",
          "1 August 2018",
          "1 september 2018",
          "1 october 2018",
          "1 november 2018",
          "1 december 2018",
        ]
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


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['requiredScorecardGraphData'])
    {
      if(this.requiredScorecardGraphData === null || this.requiredScorecardGraphData === undefined)
      {
        this.chartOptions = {
          series: [
            
          ],
          chart: {
            //width: "100% !important",
            width: "100%",
            height: this.height,
            type: "line",
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 10,
            colors: ["#FF3465", "#003C4D", "#A2422E"] // Customize the bullet color here
          },
          colors: ["#FF3465", "#003C4D", "#A2422E"],
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'center',
          },
          stroke: {
            curve: "straight",
            width: [3, 3, 3],
            colors:["#FF3465", "#003C4D", "#A2422E"] ,
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
              "1 January 2018",
              "1 Febuary 2018",
              "1 March 2018",
              "1 April 2018",
              "1 May 2018",
              "1 June 2018",
              "1 July 2018",
              "1 August 2018",
              "1 september 2018",
              "1 october 2018",
              "1 november 2018",
              "1 december 2018",
            ]
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
        return
      }
      if(this.requiredScorecardGraphData.length<1)return
      if(this.requiredScorecardGraphData.length==1){
        switch(this.scoreCardGraphHeading){
          
          case 'Compare total score':
            this.series = [
              {
                name:'Average Score',
                data:this.requiredScorecardGraphData[0].data.averageScore
              },
              {
                name:this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.totalScore
              },
              {
                name:'Target Score',
                data:this.requiredScorecardGraphData[0].data.targetScore
              },
            ]
            break;
          case 'OTD percentage':
         
          //   if(!this.isMainDashBoard)
          //  { 
          //  // console.log('hello' +  this.requiredScorecardGraphData[0].data.averageOtdPercentage)
            
          //   this.series = [
          //     {
          //       name:'Average Score',
          //       data: this.requiredScorecardGraphData[0].data.averageOtdPercentage
          //     },
          //     {
          //       name:this.requiredScorecardGraphData[0].name,
          //       data:this.requiredScorecardGraphData[0].data.otdPercentage
          //     },
          //     {
          //       name:'Target Percentage',
          //       data:this.requiredScorecardGraphData[0].data.otdTargetPercentage
          //     },
          //   ]

          // }
          if (!this.isMainDashBoard) {
            // Log the average OTD percentage to verify its value
            console.log('hello ' + this.requiredScorecardGraphData[0].data.averageOtdPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) );
            
            // Extract and format the data
            // const averageOtdPercentage = this.requiredScorecardGraphData[0].data.averageOtdPercentage.map(value => Number(value.toFixed(3)));
            // const formattedAverageOtdPercentage = averageOtdPercentage;
            // const formattedAverageOtdPercentage = averageOtdPercentage
            // const formattedAverageOtdPercentage = parseFloat(averageOtdPercentage.toFixed(3));
            
           
            
            // Set up the series with formatted data
            // console.log("number check " + formattedAverageOtdPercentage),
            this.series = [
              {
                      name: 'Average Percentage',
                      data: this.requiredScorecardGraphData[0].data.averageOtdPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) // Ensure this is a number, not an array
              },
              {
                      name:this.requiredScorecardGraphData[0].name,
                      data:this.requiredScorecardGraphData[0].data.otdPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
                    },
                    {
                      name:'Target Percentage',
                      data:this.requiredScorecardGraphData[0].data.otdTargetPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
                    },
            ];
          
            console.log(this.series); // Verify the series data
          }
          // if (!this.isMainDashBoard) {
          //   console.log('Not main dashboard');
            
          //   const averageOtdPercentage = this.requiredScorecardGraphData[0].data.averageOtdPercentage;
          //   const formattedAverageOtdPercentage = parseFloat(averageOtdPercentage.toFixed(3));
            
          //   this.series = [
          //     {
          //       name: 'Average Score',
          //       data: formattedAverageOtdPercentage
          //     },
          //     {
          //       name: this.requiredScorecardGraphData[0].name,
          //       data: this.requiredScorecardGraphData[0].data.otdPercentage
          //     },
          //     {
          //       name: 'Target Percentage',
          //       data: this.requiredScorecardGraphData[0].data.otdTargetPercentage
          //     }
          //   ];
            
          //   console.log(this.series);  // Log series to check the data structure
          // }
          else{
            
            this.series=[
              {
                name: this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.otdPercentage
              },
              {
                name: this.requiredScorecardGraphData[1].name,
                data:this.requiredScorecardGraphData[1].data.otdPercentage
              }
            ]
          } 
          break;
          case 'OTD SCORE':
          if(!this.isMainDashBoard){  
         
            this.series = [
              {
                name:'Average Score',
                data:this.requiredScorecardGraphData[0].data.averageOtdScore
              },
              {
                name:this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.otd
              },
              {
                name:'Target Score',
                data:this.requiredScorecardGraphData[0].data.otdTargetScore
              },
            ]
          }else
          {
            this.series=[
              {
                name: this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.otd
              },
              {
                name: this.requiredScorecardGraphData[1].name,
                data:this.requiredScorecardGraphData[1].data.otd
              }
            ]
          }
          break;
          case 'NCR percentage':
          
          if(!this.isMainDashBoard){
            // console.log(this.requiredScorecardGraphData[0].data.ncrPercentage)
          this.series = [
              {
                name:'Average Percentage',
                data:this.requiredScorecardGraphData[0].data.averageNcrPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
              {
                name:this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.ncrPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
              {
                name:'Target Percentage',
                data:this.requiredScorecardGraphData[0].data.ncrTargetPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
            ]  
          }else{
            this.series=[
              {
                name: this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.ncrPercentage
              },
              {
                name: this.requiredScorecardGraphData[1].name,
                data:this.requiredScorecardGraphData[1].data.ncrPercentage
              }
            ]
          }

            break;
          case 'NCR SCORE':
          if(!this.isMainDashBoard){
          this.series = [
              {
                name:'Average Score',
                data:this.requiredScorecardGraphData[0].data.averageNcrScore
              },
              {
                name:this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.ncr
              },
              {
                name:'Target Score',
                data:this.requiredScorecardGraphData[0].data.ncrTargetScore
              },
              
            ]
          }else
          {
            this.series=[
              {
                name: this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.ncrPercentage
              },
              {
                name: this.requiredScorecardGraphData[1].name,
                data:this.requiredScorecardGraphData[1].data.ncrPercentage
              }
            ]
          }
            break;
          case 'LTA percentage':
            
            if(!this.isMainDashBoard){
            this.series = [
              {
                name:'Average Percentage',
                data:this.requiredScorecardGraphData[0].data.averageLtaPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
              {
               // name:'LTA Percentage',
               name: this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.ltaPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
              {
                name:'Target Percentage',
                data:this.requiredScorecardGraphData[0].data.ltaTargetPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
            ]  
          }else
          {
            this.series=[
              {
                name: this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.ltaPercentage
              },
              {
                name: this.requiredScorecardGraphData[1].name,
                data:this.requiredScorecardGraphData[1].data.ltaPercentage
              }
            ]
          }
            break;
          case 'LTA SCORE':
          if(!this.isMainDashBoard){  
          this.series = [
              {
                name:'Average Score',
                data:this.requiredScorecardGraphData[0].data.averageLtaScore
              },
              {
                name:this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.lta
              },
              {
                name:'Target Score',
                data:this.requiredScorecardGraphData[0].data.ltaTargetScore
              },
            ]  
          }
          else
          {
            this.series=[
              {
                name: this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.lta
              },
              {
                name: this.requiredScorecardGraphData[1].name,
                data:this.requiredScorecardGraphData[1].data.lta
              }
            ]
          }
          break;
          case 'PPV percentage':
            this.chartYMin = 0
            this.chartYMax = 100
          if(!this.isMainDashBoard){  
          this.series = [
              {
                name:'Average Percentage',
                data:this.requiredScorecardGraphData[0].data.averagePpvPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
              {
                name:this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.ppvPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
              {
                name:'Target Percentage',
                data:this.requiredScorecardGraphData[0].data.ppvTargetPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
            ]  
          }else
          {
            this.series=[
              {
                name: this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.ppvPercentage
              },
              {
                name: this.requiredScorecardGraphData[1].name,
                data:this.requiredScorecardGraphData[1].data.ppvPercentage
              }
            ]
          }
            break;
          case 'PPV SCORE':
          if(!this.isMainDashBoard){  
          this.series = [
              {
                name:'Average Score',
                data:this.requiredScorecardGraphData[0].data.averagePpvScore
              },
              {
                name:this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.ppv
              },
              {
                name:'Target Score',
                data:this.requiredScorecardGraphData[0].data.ppvTargetScore
              },
            ]
          }else
          {
            this.series=[
              {
                name: this.requiredScorecardGraphData[0].name,
                data:this.requiredScorecardGraphData[0].data.ppvScore
              },
              {
                name: this.requiredScorecardGraphData[1].name,
                data:this.requiredScorecardGraphData[1].data.ppvScore
              }
            ]
          }
            break;
        }
        let strokeWidth = []
        let colors = []
        for(let i = 0 ; i < this.series.length ; i++){
          strokeWidth.push(3);
          colors.push(this.strokedColors[i]);
        } 
// graph data
          this.chartOptions = {
            series: this.series,
            chart: {
              //width: "100% !important",
              width: "90%",
              height: this.height,
              type: "line",
              zoom: {
                enabled: false
              }
            },
            markers: {
              size: 10,
              colors: colors // Customize the bullet color here
            },
            
            dataLabels: {
              enabled: true,
            },
            colors: colors,
            stroke: {
              curve: "straight",
              width: strokeWidth,
              colors: colors,
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
            legend: {
              show: true,
              position: 'top',
              horizontalAlign: 'center',
              labels:{
                colors: colors

              }
            },
            xaxis: {
              categories: this.requiredScorecardGraphData[0].data.startDate,
              tickPlacement: 'on',
              labels: {
                rotate: -45,
                skipOverlap: true,
              },
            },
            yaxis: [
              {
                seriesName: this.scoreCardGraphHeading,
                // min: this.chartYMin == 0? 0 :null,
                // max: this.chartYMax == 100? 100:null,
                opposite: false,
                  axisTicks: {
                  show: true,

                },
                axisBorder: {
                  show: true,
                  color: "#FEB019"
                },
                title: {
                  text: this.scoreCardGraphHeading,
                  style: {
                    color: "#FEB019"
                  }
                },
                labels: {
                  formatter: function (value) {
                    return parseFloat(value).toFixed(0) // This line will format the label to remove decimal places
                  }
                }
              },
              
            ],
          };
          this.cdr.detectChanges();
          this.charDataEmitter.emit({ name:this.scoreCardGraphHeading , data: this.chartOptions })
          return
     
        }else{
        this.series = []
        switch(this.scoreCardGraphHeading){
          case 'Compare total score':
            this.series.push({name:'Average',data:this.requiredScorecardGraphData[0].data.averageScore})
              this.requiredScorecardGraphData.forEach((element:any)=>{
              this.series.push({name:element.name,data:element.data.totalScore});
              })
            break;
          case 'OTD percentage':
              
          // this.series.push({name:'average',data:this.requiredScorecardGraphData[0].data.averageScore})
            this.series.push({name:'Average', data:this.requiredScorecardGraphData[0].data.averageOtdPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) })
            this.requiredScorecardGraphData.forEach((element:any)=>{
            this.series.push({name:element.name,data:element.data.otdPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) });
            })  
          break;
          case 'OTD SCORE':
            this.series.push({name:'Average', data:this.requiredScorecardGraphData[0].data.averageOtdScore})
            this.requiredScorecardGraphData.forEach((element:any)=>{
              this.series.push({name:element.name,data:element.data.otd});
              })    
          break;
          
          case 'NCR percentage':
            this.series.push({name:'Average', data:this.requiredScorecardGraphData[0].data.averageNcrPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) })
            this.requiredScorecardGraphData.forEach((element:any)=>{
              this.series.push({name:element.name,data:element.data.ncrPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) });
              })
          break;
          case 'NCR SCORE':
            this.series.push({name:'Average', data:this.requiredScorecardGraphData[0].data.averageNcrScore})
            this.requiredScorecardGraphData.forEach((element:any)=>{
              this.series.push({name:element.name,data:element.data.ncr});
              })
            break;
          case 'LTA percentage':
  
            this.series.push({name:'Average', data:this.requiredScorecardGraphData[0].data.averageLtaPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) })
            this.requiredScorecardGraphData.forEach((element:any)=>{
              this.series.push({name:element.name,data:element.data.ltaPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) });
              })
            break;
          case 'LTA SCORE':
            this.series.push({name:'Average', data:this.requiredScorecardGraphData[0].data.averageLtaScore})
            this.requiredScorecardGraphData.forEach((element:any)=>{
              this.series.push({name:element.name,data:element.data.lta});
              })
            break;
          case 'PPV percentage':
            this.chartYMin = 0
            this.chartYMax = 100
            this.series.push({name:'Average', data:this.requiredScorecardGraphData[0].data.averagePpvPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) })
            this.requiredScorecardGraphData.forEach((element:any)=>{
              this.series.push({name:element.name,data:element.data.ppvPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) });
              }) 
          break;
          case 'PPV SCORE':
            this.series.push({name:'Average', data:this.requiredScorecardGraphData[0].data.averagePpvScore})
            this.requiredScorecardGraphData.forEach((element:any)=>{
              this.series.push({name:element.name,data:element.data.ppv});
              })
            break;
        }
        let i =0;
       for(let index = 0; index < this.requiredScorecardGraphData.length-1;index++){
        if(this.requiredScorecardGraphData[index+1].data.startDate.length > this.requiredScorecardGraphData[index].data.startDate.length)
        i=(index+1)        
      }

      let strokeWidth = []
        let colors = []
        for(let i = 0 ; i < this.series.length ; i++){
          strokeWidth.push(3);
          colors.push(this.strokedColors[i]);
        }  
        let dataLabel = false
        if(this.series[0].data.length < 2)
        dataLabel = true
// ScoreCard Graph Table mil gaya
        this.chartOptions = {
          series: this.series,
          chart: {
            //width: "100% !important",
            width: "90%",
            height: this.height,
            type: "line",
            zoom: {
              enabled: false
            }
          },
          markers: {
            size: 10,
            colors: colors // Customize the bullet color here
          },
          colors:colors,
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: "straight",
            width: strokeWidth,
            colors: colors,
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
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'center',
          },
          xaxis: {
            categories: this.requiredScorecardGraphData[i].data.startDate,
            tickPlacement: 'on',
            labels: {
              rotate: -45,
              skipOverlap: true,
            },
          },
          yaxis: [
            {
              seriesName: this.scoreCardGraphHeading,
              decimalsInFloat: 2,
              opposite: false,
              axisTicks: {
                show: true,

              },
              axisBorder: {
                show: true,
                color: "#FEB019"
              },
              title: {
                text: this.scoreCardGraphHeading,
                style: {
                  color: "#FEB019"
                }
              }
            }
          ],
        };
        this.cdr.detectChanges();
        this.charDataEmitter.emit({ name:this.scoreCardGraphHeading , data: this.chartOptions })
        return

      }

    }

    if(changes['requiredVendorGraphData']){
      if(this.requiredVendorGraphData === null || this.requiredVendorGraphData === undefined)
      {
        this.chartOptions = {
          series: [
            
          ],
          chart: {
            //width: "100% !important",
            width: "100%",
            height: this.height,
            type: "line",
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 10,
            colors: ["#FF3465", "#003C4D", "#A2422E"] // Customize the bullet color here
          },
          colors: ["#FF3465", "#003C4D", "#A2422E"],
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'center',
          },
          stroke: {
            curve: "straight",
            width: [3, 3, 3],
            colors:["#FF3465", "#003C4D", "#A2422E"] ,
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
              "1 January 2018",
              "1 Febuary 2018",
              "1 March 2018",
              "1 April 2018",
              "1 May 2018",
              "1 June 2018",
              "1 July 2018",
              "1 August 2018",
              "1 september 2018",
              "1 october 2018",
              "1 november 2018",
              "1 december 2018",
            ]
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
        return
      }
      if(this.requiredVendorGraphData.length<1)return
      if(this.requiredVendorGraphData.length==1){
        switch(this.scoreCardGraphHeading){
          
          case 'Compare total score':
            this.series = [
              // {
              //   name:'Average Score',
              //   data:this.requiredScorecardGraphData[0].data.averageScore
              // },
              {
                name:this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.totalScore
              },
              {
                name:'Target Score',
                data:this.requiredVendorGraphData[0].data.targetScore
              },
            ]
            break;
          case 'OTD percentage':
         
            if(!this.isMainDashBoard)
           { 
            this.series = [
              // {
              //   name:'Average Score',
              //   data:this.requiredScorecardGraphData[0].data.averageOtdPercentage
              // },
              {
                name:this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.otdPercentage
              },
              {
                name:'Target Percentage',
                data:this.requiredVendorGraphData[0].data.otdTargetPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
            ]

          } else{
            this.series=[
              {
                name: this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.otdPercentage
              },
              {
                name: this.requiredVendorGraphData[1].name,
                data:this.requiredVendorGraphData[1].data.otdPercentage
              }
            ]
          } 
          break;
          case 'OTD SCORE':
          if(!this.isMainDashBoard){  
         
            this.series = [
              // {
              //   name:'Average Score',
              //   data:this.requiredVendorGraphData[0].data.averageOtdScore
              // },
              {
                name:this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.otd
              },
              {
                name:'Target Score',
                data:this.requiredVendorGraphData[0].data.otdTargetScore
              },
            ]
          }else
          {
            this.series=[
              {
                name: this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.otd
              },
              {
                name: this.requiredVendorGraphData[1].name,
                data:this.requiredVendorGraphData[1].data.otd
              }
            ]
          }
          break;
          case 'NCR percentage':
          
          if(!this.isMainDashBoard){
          this.series = [
              // {
              //   name:'Average Score',
              //   data:this.requiredScorecardGraphData[0].data.averageNcrPercentage
              // },
              {
                name:this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.ncrPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
              {
                name:'Target Percentage',
                data:this.requiredVendorGraphData[0].data.ncrTargetPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
            ]  
          }else{
            this.series=[
              {
                name: this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.ncrPercentage
              },
              {
                name: this.requiredVendorGraphData[1].name,
                data:this.requiredVendorGraphData[1].data.ncrPercentage
              }
            ]
          }

            break;
          case 'NCR SCORE':
          if(!this.isMainDashBoard){
          this.series = [
              // {
              //   name:'Average Score',
              //   data:this.requiredVendorGraphData[0].data.averageNcrScore
              // },
              {
                name:this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.ncr
              },
              {
                name:'Target Score',
                data:this.requiredVendorGraphData[0].data.ncrTargetScore
              },
              
            ]
          }else
          {
            this.series=[
              {
                name: this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.ncrPercentage
              },
              {
                name: this.requiredVendorGraphData[1].name,
                data:this.requiredVendorGraphData[1].data.ncrPercentage
              }
            ]
          }
            break;
          case 'LTA percentage':
            
            if(!this.isMainDashBoard){
            this.series = [
              // {
              //   name:'Average Score',
              //   data:this.requiredVendorGraphData[0].data.averageLtaPercentage
              // },
              {
                // name:'LTA Percentage',
                name:this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.ltaPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
              {
                name:'Target Percentage',
                data:this.requiredVendorGraphData[0].data.ltaTargetPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
            ]  
          }else
          {
            this.series=[
              {
                name: this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.ltaPercentage
              },
              {
                name: this.requiredVendorGraphData[1].name,
                data:this.requiredVendorGraphData[1].data.ltaPercentage
              }
            ]
          }
            break;
          case 'LTA SCORE':
          if(!this.isMainDashBoard){  
          this.series = [
              // {
              //   name:'Average Score',
              //   data:this.requiredScorecardGraphData[0].data.averageLtaScore
              // },
              {
                name:this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.lta
              },
              {
                name:'Target Score',
                data:this.requiredVendorGraphData[0].data.ltaTargetScore
              },
            ]  
          }
          else
          {
            this.series=[
              {
                name: this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.lta
              },
              {
                name: this.requiredVendorGraphData[1].name,
                data:this.requiredVendorGraphData[1].data.lta
              }
            ]
          }
          break;
          case 'PPV percentage':
            this.chartYMin = 0
            this.chartYMax = 100
          if(!this.isMainDashBoard){  
          this.series = [
              // {
              //   name:'Average Percentage',
              //   data:this.requiredScorecardGraphData[0].data.averagePpvPercentage
              // },
              {
                name:this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.ppvPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
              {
                name:'Target Percentage',
                data:this.requiredVendorGraphData[0].data.ppvTargetPercentage.map(value => value === undefined || value === null ? null : Number(value).toFixed(3)) 
              },
            ]  
          }else
          {
            this.series=[
              {
                name: this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.ppvPercentage
              },
              {
                name: this.requiredVendorGraphData[1].name,
                data:this.requiredVendorGraphData[1].data.ppvPercentage
              }
            ]
          }
            break;
          case 'PPV SCORE':
          if(!this.isMainDashBoard){  
          this.series = [
              // {
              //   name:'Average Score',
              //   data:this.requiredVendorGraphData[0].data.averagePpvScore
              // },
              {
                name:this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.ppv
              },
              {
                name:'Target Score',
                data:this.requiredVendorGraphData[0].data.ppvTargetScore
              },
            ]
          }else
          {
            this.series=[
              {
                name: this.requiredVendorGraphData[0].name,
                data:this.requiredVendorGraphData[0].data.ppvScore
              },
              {
                name: this.requiredVendorGraphData[1].name,
                data:this.requiredVendorGraphData[1].data.ppvScore
              }
            ]
          }
            break;
        }
        let strokeWidth = []
        let colors = []
        for(let i = 0 ; i < this.series.length ; i++){
          strokeWidth.push(3);
          colors.push(this.strokedColors[i]);
        } 

          this.chartOptions = {
            series: this.series,
            chart: {
              //width: "100% !important",
              width: "90%",
              height: this.height,
              type: "line",
              zoom: {
                enabled: false
              }
            },
            markers: {
              size: 10,
              colors: colors // Customize the bullet color here
            },
            dataLabels: {
              enabled: true,
            },
            colors: colors,
            stroke: {
              curve: "straight",
              width: strokeWidth,
              colors: colors,
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
            legend: {
              show: true,
              position: 'top',
              horizontalAlign: 'center',
              labels:{
                colors: colors

              }
            },
            xaxis: {
              categories: this.requiredVendorGraphData[0].data.startDate,
              tickPlacement: 'on',
              labels: {
                rotate: -45,
                skipOverlap: true,
              },
            },
            yaxis: [
              {
                seriesName: this.scoreCardGraphHeading,
                // min: this.chartYMin == 0? 0 :null,
                // max: this.chartYMax == 100? 100:null,
                opposite: false,
                  axisTicks: {
                  show: true,

                },
                axisBorder: {
                  show: true,
                  color: "#FEB019"
                },
                title: {
                  text: this.scoreCardGraphHeading,
                  style: {
                    color: "#FEB019"
                  }
                },
                labels: {
                  formatter: function (value) {
                    return parseFloat(value).toFixed(0) // This line will format the label to remove decimal places
                  }
                }
              },
              
            ],
          };
          this.cdr.detectChanges();
          this.charDataEmitter.emit({ name:this.scoreCardGraphHeading , data: this.chartOptions })
          return
     
        }

    }

    if(changes['dashBoardData'])
    {
      this.chartOptions = this.dashBoardData
    }

    if (changes['superAdminDashboardGraphData']) {
      if (this.superAdminDashboardGraphData === null || this.superAdminDashboardGraphData === undefined){
        return
      } 
      var dateList = [] 
      this.superAdminDashboardGraphData.forEach((element:any) => {
        dateList.push(element.startDate)
      });
      
      // this.equalIntervalDates(this.executeData.startDate, this.executeData.endDate, 30)

      var series = [
        {
          name: "",
          data: []
        },
        {
          name: "",
          data: []
        },
        {
          name: "",
          data: []
        },
        {
          name: "",
          data: []
        },
        {
          name: "",
          data: []
        }
      ]

      switch (this.heading) {
        case 'revenue':
          series[0].name = 'Overall'
          series[0].data = []
          series[1].name = 'ScoreCard'
          series[1].data = []
          series[2].name = 'PO Manager'
          series[2].data = []
          series[3].name = 'Complete'
          series[3].data = []
          series.pop()
          // series[4].name = 'Complete revenue'
          // series[4].data = []
          this.superAdminDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.sumOverALLTotalPrice);
            series[1].data.push(ele.sumVendorTotalPrice);
            series[2].data.push(ele.sumPOTotalPrice);
            series[3].data.push(ele.sumALLTotalPrice);
            // series[4].data.push(ele.sumUserTotalPrice);

          })
          break;
        case 'newUserRegistration':
          series[0].name = 'Overall'
          series[0].data = []
          series[1].name = 'ScoreCard'
          series[1].data = []
          series[2].name = 'PO Manager'
          series[2].data = []
          series[3].name = 'Complete'
          series[3].data = []
          series.pop()
          this.superAdminDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.newUserOverALLRegistration);
            series[1].data.push(ele.newUserVendorRegistration);
            series[2].data.push(ele.newUserPoRegistration);
            series[3].data.push(ele.newUserALLRegistration);

          })
          break;

        case 'activeUser':
          series[0].name = 'Overall'
          series[0].data = []
          series[1].name = 'ScoreCard'
          series[1].data = []
          series[2].name = 'PO Manager'
          series[2].data = []
          series[3].name = 'Complete'
          series[3].data = []
          series.pop();
          // series[4].name = 'Active User'
          // series[4].data = []
          this.superAdminDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.activeOverALLUsers);
            series[1].data.push(ele.activeVendorUsers);
            series[2].data.push(ele.activePOUsers);
            series[3].data.push(ele.activeALLUsers);
            // series[4].data.push(ele.activeUsers);

          })
          break;
       
        case 'activeTimeOnSite':
          series[0].name = 'Overall'
          series[0].data = []
          series[1].name = 'ScoreCard'
          series[1].data = []
          series[2].name = 'PO Manager'
          series[2].data = []
          series[3].name = 'Complete'
          series[3].data = []
          series.pop()
          this.superAdminDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.allActiveTimeOnSite);
            series[1].data.push(ele.scActiveTimeOnSite);
            series[2].data.push(ele.poActiveTimeOnSite);
            series[3].data.push(ele.activeTimeOnSite);

          })
          break;

        case 'referralSignUp':
          series[0].name = 'Overall'
          series[0].data = []
          series[1].name = 'ScoreCard'
          series[1].data = []
          series[2].name = 'PO Manager'
          series[2].data = []
          series[3].name = 'Complete'
          series[3].data = []
          // series[4].name = 'User SignUps'
          // series[4].data = []
          
          this.superAdminDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.referralOverALLCount);
            series[1].data.push(ele.referralVendorCount);
            series[2].data.push(ele.referralPOCount);
            series[3].data.push(ele.referralALLCount);
            // series[4].data.push(ele.referralUserCount);

          })
          break;
     
          case 'discontinuedRegistration':
          series[0].name = 'Overall'
          series[0].data = []
          series[1].name = 'ScoreCard'
          series[1].data = []
          series[2].name = 'PO Manager'
          series[2].data = []
          series[3].name = 'Complete'
          series[3].data = []
          series.pop();
          // series[4].name = 'User'
          // series[4].data = []
          this.superAdminDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.discontinuedOverALL);
            series[1].data.push(ele.discontinuedVendor);
            series[2].data.push(ele.discontinuedPO);
            series[3].data.push(ele.discontinuedALL);
            // series[4].data.push(ele.discontinuedUser);

          })
          break;
        
          case 'cancelRegistration':
          series[0].name = 'Overall'
          series[0].data = [] 
          series[1].name = 'ScoreCard'
          series[1].data = []
          series[2].name = 'PO Manager'
          series[2].data = []
          series[3].name = 'Complete'
          series[3].data = []
          series.pop()
          // series[4].name = 'Cancelled User'
          // series[4].data = []
          this.superAdminDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.cancelOverALLSubscription);
            series[1].data.push(ele.cancelVendorSubscription);
            series[2].data.push(ele.cancelPOSubscription);
            series[3].data.push(ele.cancelALLSubscription);
            // series[4].data.push(ele.cancelUserSubscription);

          })
          break;

        case 'yearlySubscription':
          series[0].name = 'Overall'
          series[0].data = []
          series[1].name = 'ScoreCard'
          series[1].data = []
          series[2].name = 'PO Manager'
          series[2].data = []
          series[3].name = 'Complete'
          series[3].data = []
          series.pop()
          // series[4].name = 'User Yearly Subscription'
          // series[4].data = []
          this.superAdminDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.yearlyOverALLSubsctription);
            series[1].data.push(ele.yearlyVendorSubsctription);
            series[2].data.push(ele.yearlyPOSubsctription);
            series[3].data.push(ele.yearlyALLSubsctription);
            // series[4].data.push(ele.yearlyUserSubsctription);

          })
          break;
       
          case 'monthlySubscription':
          series[0].name = 'Overall'
          series[0].data = []
          series[1].name = 'ScoreCard'
          series[1].data = []
          series[2].name = 'PO Manager'
          series[2].data = []
          series[3].name = 'Complete'
          series[3].data = []
          series.pop();
          // series[4].name = 'User Monthly Subscription'
          // series[4].data = []
          this.superAdminDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.monthlyOverALLSubsctription);
            series[1].data.push(ele.monthlyVendorSubsctription);
            series[2].data.push(ele.monthlyPOSubsctription);
            series[3].data.push(ele.monthlyALLSubsctription);
            // series[4].data.push(ele.monthlyUserSubsctription);

          })
          break;



        default:
          break;
      }

      let strokeWidth = []
      let colors = []
      for(let i = 0 ; i < this.series.length ; i++){
        strokeWidth.push(3);
        colors.push(this.strokedColors[i]);
      }

      this.chartOptions = {
        series: series,
        chart: {
          //width: "100% !important",
          width: "100%",
          height: this.height,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        colors:colors,
        stroke: {
          curve: "straight",
          width: strokeWidth,
          colors: colors,
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
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'center',
          labels:{
            colors:colors
          }
        },
        xaxis: {
          categories: dateList,
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

      this.cdr.detectChanges();
      this.charDataEmitter.emit({ name: this.heading, data: this.chartOptions })

    }

    if (changes['superAdminVendorDashboardGraphData']) {
      if (this.superAdminVendorDashboardGraphData === null || this.superAdminVendorDashboardGraphData === undefined) return
      var dateList = [] 
      this.superAdminVendorDashboardGraphData.forEach((element:any) => {
        dateList.push(element.startDate)
      });

      var series = [
        {
          name: "ScoreCard",
          data: []
        },
        {
          name: "User Admin",
          data: []
        },
        {
          name: "User",
          data: []
        },
        {
          name: "Vendor",
          data: []
        }
      ]

      switch (this.heading) {
        case 'revenue':
          this.superAdminVendorDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.productRevenue);
            series[1].data.push(ele.userAdminRevenue);
            series[2].data.push(ele.userRevenue);
            series[3].data.push(ele.vendorRevenue);
            
          })
          break;
     
          case 'newUserRegistration':
         
          this.superAdminVendorDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.newProductRegistration);       
            series[1].data.push(ele.newUserAdminRegistration);         
            series[2].data.push(ele.newUserRegistration);
            series[3].data.push(ele.newVendorRegistration);
            // series[2].data.push(0);
            // series[3].data.push(0);
            
          })
          break;

        case 'activeUser':
          
          this.superAdminVendorDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.activeProductUser);
            series[1].data.push(ele.activeUserAdmin);
            series[2].data.push(ele.activeUser);
            series[3].data.push(ele.activeVendor);
            
          })
          break;
       
        case 'activeTimeOnSite':
        
          this.superAdminVendorDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.productActiveTimeOnSite);
            series[1].data.push(ele.userAdminActiveTimeOnSite);
            series[2].data.push(ele.userActiveTimeOnSite);
            series[3].data.push(ele.vendorActiveTimeOnSite);
          
          })
          break;

        case 'referralSignUp':
         
          this.superAdminVendorDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.referralProduct);
            series[1].data.push(ele.referralUserAdmin);
            series[2].data.push(ele.referralUser);
            series[3].data.push(ele.referralVendor);
            
          })
          break;
        case 'discontinuedRegistration':
         
          this.superAdminVendorDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.discontinuedProduct);
            series[1].data.push(ele.discontinuedUserAdmin);
            series[2].data.push(ele.discontinuedUser);
            series[3].data.push(ele.discontinuedVendor);
          
          })
          break;
     
          case 'cancelRegistration':
         
          this.superAdminVendorDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.cancelProductSubscription);
            series[1].data.push(ele.cancelUserAdminSubscription);
            series[2].data.push(ele.cancelUserSubscription);
            series[3].data.push(ele.cancelVendorSubscription);
          
          })
          break;

        case 'yearlySubscription':
         
          this.superAdminVendorDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.yearlyProductSubscription);
            series[1].data.push(ele.yearlyUserAdminSubscription);
            series[2].data.push(ele.yearlyUserSubscription);
            series[3].data.push(ele.yearlyVendorSubscription);
            
          })
          break;
        case 'monthlySubscription':
         
          this.superAdminVendorDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.monthlyProductSubscription);
            series[1].data.push(ele.monthlyUserAdminSubscription);
            series[2].data.push(ele.monthlyUserSubscription);
            series[3].data.push(ele.monthlyVendorSubscription);
         
          })
          break;



        default:
          break;
      }

      let strokeWidth = []
      let colors = []
      for(let i = 0 ; i < series.length ; i++){
        strokeWidth.push(3);
        colors.push(this.strokedColors[i]);
      }

      this.chartOptions = {
        series: series,
        chart: {
          //width: "100% !important",
          width: "100%",
          height: this.height,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        colors:colors,
        stroke: {
          curve: "straight",
          width: strokeWidth,
          colors: colors,
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
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'center',
        },
        xaxis: {
          categories: dateList,
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

      this.cdr.detectChanges();
      this.charDataEmitter.emit({ name: this.heading, data: this.chartOptions })

    }
    
    if (changes['superAdminpoDashboardGraphData']) {
      if (this.superAdminpoDashboardGraphData === null || this.superAdminpoDashboardGraphData === undefined) return
      var dateList = [] 
      this.superAdminpoDashboardGraphData.forEach((element:any) => {
        dateList.push(element.startDate)
      });

      var series = [
        {
          name: "PO Manager",
          data: []
        },
        {
          name: "User Admin",
          data: []
        },
        {
          name: "User",
          data: []
        },
        {
          name: "Vendor",
          data: []
        }
      ]

      switch (this.heading) {
        case 'revenue':
          this.superAdminpoDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.productRevenue);
            series[1].data.push(ele.userAdminRevenue);
            series[2].data.push(ele.userRevenue);
            series[3].data.push(ele.vendorRevenue);
            
          })
          break;
     
          case 'newUserRegistration':
         
          this.superAdminpoDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.newProductRegistration);
            series[1].data.push(ele.newUserAdminRegistration);         
            series[2].data.push(ele.newUserRegistration);
            series[3].data.push(ele.newVendorRegistration);
            // series[2].data.push(0);
            // series[3].data.push(0);
            
          })
          break;

        case 'activeUser':
          
          this.superAdminpoDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.activeProductUser);
            series[1].data.push(ele.activeUserAdmin);
            series[2].data.push(ele.activeUser);
            series[3].data.push(ele.activeVendor);
            
          })
          break;
       
        case 'activeTimeOnSite':
        
          this.superAdminpoDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.productActiveTimeOnSite);
            series[1].data.push(ele.userAdminActiveTimeOnSite);
            series[2].data.push(ele.userActiveTimeOnSite);
            series[3].data.push(ele.vendorActiveTimeOnSite);
          
          })
          break;

        case 'referralSignUp':
         
          this.superAdminpoDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.referralProduct);
            series[1].data.push(ele.referralUserAdmin);
            series[2].data.push(ele.referralUser);
            series[3].data.push(ele.referralVendor);
            
          })
          break;
        case 'discontinuedRegistration':
         
          this.superAdminpoDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.discontinuedProduct);
            series[1].data.push(ele.discontinuedUserAdmin);
            series[2].data.push(ele.discontinuedUser);
            series[3].data.push(ele.discontinuedVendor);
          
          })
          break;
     
          case 'cancelRegistration':
         
          this.superAdminpoDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.cancelProductSubscription);
            series[1].data.push(ele.cancelUserAdminSubscription);
            series[2].data.push(ele.cancelUserSubscription);
            series[3].data.push(ele.cancelVendorSubscription);
          
          })
          break;

        case 'yearlySubscription':
         
          this.superAdminpoDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.yearlyProductSubscription);
            series[1].data.push(ele.yearlyUserAdminSubscription);
            series[2].data.push(ele.yearlyUserSubscription);
            series[3].data.push(ele.yearlyVendorSubscription);
            
          })
          break;
        case 'monthlySubscription':
         
          this.superAdminpoDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.monthlyProductSubscription);
            series[1].data.push(ele.monthlyUserAdminSubscription);
            series[2].data.push(ele.monthlyUserSubscription);
            series[3].data.push(ele.monthlyVendorSubscription);
         
          })
          break;



        default:
          break;
      }

      let strokeWidth = []
      let colors = []
      for(let i = 0 ; i < series.length ; i++){
        strokeWidth.push(3);
        colors.push(this.strokedColors[i]);
      }

      this.chartOptions = {
        series: series,
        chart: {
          //width: "100% !important",
          width: "100%",
          height: this.height,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        colors:colors,
        stroke: {
          curve: "straight",
          width: strokeWidth,
          colors: colors,
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
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'center',
        },
        xaxis: {
          categories: dateList,
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

      this.cdr.detectChanges();
      this.charDataEmitter.emit({ name: this.heading, data: this.chartOptions })

    }
    
    if (changes['superAdminCompleteDashboardGraphData']) {
      if (this.superAdminCompleteDashboardGraphData === null || this.superAdminCompleteDashboardGraphData === undefined) return
      var dateList = [] 
      this.superAdminCompleteDashboardGraphData.forEach((element:any) => {
        dateList.push(element.startDate)
      });

      var series = [
        {
          name: "Complete",
          data: []
        },
        {
          name: "User Admin",
          data: []
        },
        {
          name: "User",
          data: []
        },
        {
          name: "Vendor",
          data: []
        }
      ]

      switch (this.heading) {
        case 'revenue':
          this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.productRevenue);
            series[1].data.push(ele.userAdminRevenue);
            series[2].data.push(ele.userRevenue);
            series[3].data.push(ele.vendorRevenue);
            
          })
          break;
     
          case 'newUserRegistration':
         
          this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.newProductRegistration);    
            series[1].data.push(ele.newUserAdminRegistration);         
            series[2].data.push(ele.newUserRegistration);
            series[3].data.push(ele.newVendorRegistration);
            // series[2].data.push(0);
            // series[3].data.push(0);
            
          })
          break;

        case 'activeUser':
          
          this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.activeProductUser);
            series[1].data.push(ele.activeUserAdmin);
            series[2].data.push(ele.activeUser);
            series[3].data.push(ele.activeVendor);
            
          })
          break;
       
        case 'activeTimeOnSite':
        
          this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.productActiveTimeOnSite);
            series[1].data.push(ele.userAdminActiveTimeOnSite);
            series[2].data.push(ele.userActiveTimeOnSite);
            series[3].data.push(ele.vendorActiveTimeOnSite);
          
          })
          break;

        case 'referralSignUp':
         
          this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.referralProduct);
            series[1].data.push(ele.referralUserAdmin);
            series[2].data.push(ele.referralUser);
            series[3].data.push(ele.referralVendor);
            
          })
          break;
        case 'discontinuedRegistration':
         
          this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.discontinuedProduct);
            series[1].data.push(ele.discontinuedUserAdmin);
            series[2].data.push(ele.discontinuedUser);
            series[3].data.push(ele.discontinuedVendor);
          
          })
          break;
     
          case 'cancelRegistration':
         
          this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.cancelProductSubscription);
            series[1].data.push(ele.cancelUserAdminSubscription);
            series[2].data.push(ele.cancelUserSubscription);
            series[3].data.push(ele.cancelVendorSubscription);
          
          })
          break;

        case 'yearlySubscription':
         
          this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.yearlyProductSubscription);
            series[1].data.push(ele.yearlyUserAdminSubscription);
            series[2].data.push(ele.yearlyUserSubscription);
            series[3].data.push(ele.yearlyVendorSubscription);
            
          })
          break;
        case 'monthlySubscription':
         
          this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
            series[0].data.push(ele.monthlyProductSubscription);
            series[1].data.push(ele.monthlyUserAdminSubscription);
            series[2].data.push(ele.monthlyUserSubscription);
            series[3].data.push(ele.monthlyVendorSubscription);
         
          })
          break;



        default:
          break;
      }

      let strokeWidth = []
      let colors = []
      for(let i = 0 ; i < series.length ; i++){
        strokeWidth.push(3);
        colors.push(this.strokedColors[i]);
      }

      this.chartOptions = {
        series: series,
        chart: {
          //width: "100% !important",
          width: "100%",
          height: this.height,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        colors:colors,
        stroke: {
          curve: "straight",
          width: strokeWidth,
          colors: colors,
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
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'center',
        },
        xaxis: {
          categories: dateList,
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

      this.cdr.detectChanges();
      this.charDataEmitter.emit({ name: this.heading, data: this.chartOptions })

    }

    // if (changes['superAdminpoDashboardGraphData']) {
    //   if (this.superAdminpoDashboardGraphData === null || this.superAdminpoDashboardGraphData === undefined) return
    //   var dateList = [] 
    //   this.superAdminpoDashboardGraphData.forEach((element:any) => {
    //     dateList.push(element.startDate)
    //   });


    //   var series = [
    //     {
    //       name: "",
    //       data: []
    //     },
    //     {
    //       name: "",
    //       data: []
    //     },
    //           ]

    //   switch (this.heading) {
    //     case 'revenue':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'PO Manager'
    //       series[1].data = []
    //       this.superAdminpoDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.sumOverALLTotalPrice);
    //         series[1].data.push(ele.sumPOTotalPrice);
            
    //       })
    //       break;
    //     case 'newUserRegistration':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'PO Manager'
    //       series[1].data = []
    //       this.superAdminpoDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.newUserOverALLRegistration);
    //         series[1].data.push(ele.newUserPoRegistration);
    //       })
    //       break;

    //     case 'activeUser':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'PO Manager'
    //       series[1].data = []
    //       this.superAdminpoDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.activeOverALLUsers);
    //         series[1].data.push(ele.activePOUsers);
    //       })
    //       break;
       
    //     case 'activeTimeOnSite':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'PO Manager'
    //       series[1].data = []
    //       this.superAdminpoDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.allActiveTimeOnSite);
    //         series[1].data.push(ele.scActiveTimeOnSite);

    //       })
    //       break;

    //     case 'referralSignUp':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'PO Manager'
    //       series[1].data = []
    //       this.superAdminpoDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.referralOverALLCount);
    //         series[1].data.push(ele.referralPOCount);

    //       })
    //       break;
    //     case 'discontinuedRegistration':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'PO Manager'
    //       series[1].data = []
    //       this.superAdminpoDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.discontinuedOverALL);
    //         series[1].data.push(ele.discontinuedPO);

    //       })
    //       break;
    //     case 'cancelRegistration':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'PO Manager'
    //       series[1].data = []
    //       this.superAdminpoDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.cancelOverALLSubscription);
    //         series[1].data.push(ele.cancelPOSubscription);

    //       })
    //       break;

    //     case 'yearlySubscription':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'PO Manager'
    //       series[1].data = []
    //       this.superAdminpoDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.yearlyOverALLSubsctription);
    //         series[1].data.push(ele.yearlyPOSubsctription);

    //       })
    //       break;
    //     case 'monthlySubscription':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'PO Manager'
    //       series[1].data = []
    //       this.superAdminpoDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.monthlyOverALLSubsctription);
    //         series[1].data.push(ele.monthlyPOSubsctription);

    //       })
    //       break;
    //     default:
    //       break;
    //   }

    //   let strokeWidth = []
    //   let colors = []
    //   for(let i = 0 ; i < this.series.length ; i++){
    //     strokeWidth.push(3);
    //     colors.push(this.strokedColors[i]);
    //   }

    //   this.chartOptions = {
    //     series: series,
    //     chart: {
    //       //width: "100% !important",
    //       width: "100%",
    //       height: this.height,
    //       type: "line",
    //       zoom: {
    //         enabled: false
    //       }
    //     },
    //     dataLabels: {
    //       enabled: false
    //     },
    //     colors:colors,
    //     stroke: {
    //       curve: "straight",
    //       width: strokeWidth,
    //       colors: colors,
    //     },
    //     title: {
    //       text: "",
    //       align: "left"
    //     },
    //     grid: {
    //       row: {
    //         colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
    //         opacity: 0.5
    //       }
    //     },
    //     legend: {
    //       show: true,
    //       position: 'top',
    //       horizontalAlign: 'center',
    //       labels:{
    //         colors:colors
    //       }
    //     },
    //     xaxis: {
    //       categories: dateList,
    //       labels: {
    //         rotate: -45,
    //         skipOverlap: true,
    //       },
    //     },
    //     yaxis: [
    //       {
    //         seriesName: "",
    //         opposite: false,

    //         axisTicks: {
    //           show: true
    //         },
    //         axisBorder: {
    //           show: true,
    //           color: "#FEB019"
    //         },
    //         title: {
    //           text: "",
    //           style: {
    //             color: "#FEB019"
    //           }
    //         }
    //       }
    //     ],
    //   };
    //   this.cdr.detectChanges();
    //   this.charDataEmitter.emit({ name: this.heading, data: this.chartOptions })

    // }

    // if (changes['superAdminCompleteDashboardGraphData']) {
    //   if (this.superAdminCompleteDashboardGraphData === null || this.superAdminCompleteDashboardGraphData === undefined) return
    //   var dateList = [] 
    //   this.superAdminCompleteDashboardGraphData.forEach((element:any) => {
    //     dateList.push(element.startDate)
    //   });



    //   var series = [
    //     {
    //       name: "",
    //       data: []
    //     },
    //     {
    //       name: "",
    //       data: []
    //     },
        
    //   ]

    //   switch (this.heading) {
    //     case 'revenue':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'Complete'
    //       series[1].data = []
    //       this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.sumOverALLTotalPrice);
    //         series[1].data.push(ele.sumALLTotalPrice);

    //       })
    //       break;
    //     case 'newUserRegistration':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'Complete'
    //       series[1].data = []
    //       this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.newUserOverALLRegistration);
    //         series[1].data.push(ele.newUserALLRegistration);

    //       })
    //       break;

    //     case 'activeUser':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'Complete'
    //       series[1].data = []
    //       this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.activeOverALLUsers);
    //         series[1].data.push(ele.activeALLUsers);

    //       })
    //       break;

    //     case 'activeTimeOnSite':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'Complete'
    //       series[1].data = []
    //       this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.allActiveTimeOnSite);
    //         series[1].data.push(ele.activeTimeOnSite);
    //         // series[2].data.push(ele.newUserPoRegistration);
    //         // series[3].data.push(ele.newUserRegistration);

    //       })
    //       break;

    //     case 'referralSignUp':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'Complete'
    //       series[1].data = []
    //       this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.referralOverALLCount);
    //         series[1].data.push(ele.referralALLCount);

    //       })
    //       break;
    //     case 'discontinuedRegistration':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'Complete'
    //       series[1].data = []
    //       this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.discontinuedOverALL);
    //         series[1].data.push(ele.discontinuedALL);

    //       })
    //       break;
    //     case 'cancelRegistration':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'Complete'
    //       series[1].data = []
    //       this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.cancelOverALLSubscription);
    //         series[1].data.push(ele.cancelALLSubscription);

    //       })
    //       break;

    //     case 'yearlySubscription':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'Complete'
    //       series[1].data = []
    //       this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.yearlyOverALLSubsctription);
    //         series[1].data.push(ele.yearlyALLSubsctription);

    //       })
    //       break;
    //     case 'monthlySubscription':
    //       series[0].name = 'Overall'
    //       series[0].data = []
    //       series[1].name = 'Complete'
    //       series[1].data = []
    //       this.superAdminCompleteDashboardGraphData.forEach((ele: any) => {
    //         series[0].data.push(ele.monthlyOverALLSubsctription);
    //         series[1].data.push(ele.monthlyALLSubsctription);

    //       })
    //       break;



    //     default:
    //       break;
    //   }

    //   let strokeWidth = []
    //   let colors = []
    //   for(let i = 0 ; i < series.length ; i++){
    //     strokeWidth.push(3);
    //     colors.push(this.strokedColors[i]);
    //   }

    //   this.chartOptions = {
    //     series: series,
    //     chart: {
    //       //width: "100% !important",
    //       width: "100%",
    //       height: this.height,
    //       type: "line",
    //       zoom: {
    //         enabled: false
    //       }
    //     },
    //     dataLabels: {
    //       enabled: false
    //     },
    //     colors:colors,
    //     stroke: {
    //       curve: "straight",
    //       width: strokeWidth,
    //       colors: colors,
    //     },
    //     title: {
    //       text: "",
    //       align: "left"
    //     },
    //     grid: {
    //       row: {
    //         colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
    //         opacity: 0.5
    //       }
    //     },
    //     legend: {
    //       show: true,
    //       position: 'top',
    //       horizontalAlign: 'center',
    //     },
    //     xaxis: {
    //       categories: dateList,
    //       labels: {
    //         rotate: -45,
    //         skipOverlap: true,
    //       },
    //     },
    //     yaxis: [
    //       {
    //         seriesName: "",
    //         opposite: false,

    //         axisTicks: {
    //           show: true
    //         },
    //         axisBorder: {
    //           show: true,
    //           color: "#FEB019"
    //         },
    //         title: {
    //           text: "",
    //           style: {
    //             color: "#FEB019"
    //           }
    //         }
    //       }
    //     ],
    //   };

    //   this.cdr.detectChanges();
    //   this.charDataEmitter.emit({ name: this.heading, data: this.chartOptions })

    // }


    if(changes['vendorTotalScore'])
    {
      if(this.vendorTotalScore === null )
      {
        return
      } 
      if(this.vendorTotalScore === undefined) return
      if(Object.keys(this.vendorTotalScore).length == 0) return
      if(this.vendorTotalScore[0] && this.vendorTotalScore[0].length <1) return 
      if(this.vendorTotalScore.length <1)
        return
      if(this.vendorTotalScore.hasOwnProperty("ppvScores") && this.vendorTotalScore.ppvScores.length < 1)
        return
      this.series = [
        {
          name:'LTA Score',
          data:[]
        },
        {
          name:'OTD Score',
          data:[]
        },
        {
          name:'NCR Score',
          data:[]
        },
        {
          name:'PPV Score',
          data:[]
        },
        {
          name:'Total Score',
          data:[]
        },
      ]
      var dateList = []
      this.vendorTotalScore.forEach((element:any) => {
        this.series[0].data.push(element.ltA_Score)
        this.series[1].data.push(element.otD_Score)
        this.series[2].data.push(element.ncR_Score)
        this.series[3].data.push(element.pV_Score)
        this.series[4].data.push(element.totalScore)
        dateList.push(element.startDate)
      });
      let strokeWidth = []
      let colors = []
      for(let i = 0 ; i < this.series.length ; i++){
        strokeWidth.push(3);
        colors.push(this.strokedColors[i]);
      }
      let dataLabel = false
      if(this.series[0].data.length < 2)
      dataLabel = true

      this.chartOptions = {
        series: this.series,
        chart: {
          //width: "100% !important",
          width: "100%",
          height: this.height,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: dataLabel
        },
        colors:colors,
        stroke: {
          curve: "straight",
          width: strokeWidth,
          colors: colors,
        },
        markers: {
          size: 10,
          colors: colors, // Set the same color as stroke.colors
          strokeWidth: 0,
          hover: {
            size: 8,
          },
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
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'center',
          labels :{
            colors : colors
          }
        },
        xaxis: {
          categories: dateList,
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
      this.charDataEmitter.emit({ name: 'Total Score', data: this.chartOptions })
      return
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

    if (changes['poData']) {
      let issuePO = []
      let spendPO = []
      let recievedPO = []
      let sourceMaterial = []
      let date = []
      let otd = []
      let ncr = []
      let ppv = []
      let lta = []
      let otdPercentage = []
      let ncrPercentage = []
      let ppvPercentage = []
      let ltaPercentage = []
      this.poData?.forEach((element: any) => {
        date.push(element.startDate.split("T")[0])
        issuePO.push(element.totalIssuedPOLines)
        spendPO.push(element.totalPOSpend)
        sourceMaterial.push(element.totalSourcedItems)
        recievedPO.push(element.totalReceivedPOLines)
        otd.push(element.otd)
        ncr.push(element.ncr)
        ppv.push(element.ppv)
        lta.push(element.lta)
        otdPercentage.push(element.otdPercentage)
        ncrPercentage.push(element.ncrPercentage)
        ppvPercentage.push(element.ppvPercentage)
        ltaPercentage.push(element.ltaPercentage)
      })

      switch (this.poName) {
        case 'poSpend':
          this.series = [
            {
              name: 'Total Po Spend',
              data: spendPO
            }
          ]
          break;
        case 'issuePo':
          this.series = [
            {
              name: 'Total Issued PO',
              data: issuePO
            }
          ]
          break;
        case 'sourceMaterial':
          this.series = [
            {
              name: 'Total Sourced Material',
              data: sourceMaterial
            }
          ]
          break;
        case 'recievedPO':
          this.series = [
            {
              name: 'Total Recieved PO',
              data: recievedPO
            }
          ]
          break;
          case 'OTD Score':
          this.series = [
            {
              name: 'OTD Score',
              data: otd
            }
          ]
          break;
          case 'NCR Score':
          this.series = [
            {
              name: 'NCR Score',
              data: ncr
            }
          ]
          break;
          case 'PPV Score':
          this.series = [
            {
              name: 'PPV Score',
              data: ppv
            }
          ]
          break;
          case 'LTA Score':
          this.series = [
            {
              name: 'LTA Score',
              data: lta
            }
          ]
          break;
          case 'OTD Percentage':
            this.series = [
              {
                name: 'OTD Percentage',
                data: otdPercentage
              }
            ]
            break;
          case 'NCR Percentage':
            this.series = [
              {
                name: 'NCR Percentage',
                data: ncrPercentage
              }
            ]
            break;
          case 'PPV Percentage':
            this.series = [
              {
                name: 'PPV Percentage',
                data: ppvPercentage
              }
            ]
            break;
          case 'LTA Percentage':
            this.series = [
              {
                name: 'LTA Percentage',
                data: ltaPercentage
              }
            ]
            break;


      }
      let strokeWidth = []
      let colors = []
      for(let i = 0 ; i < this.series.length ; i++){
        strokeWidth.push(3);
        colors.push(this.strokedColors[i]);
      }

      this.chartOptions = {
        series: this.series,
        chart: {
          //width: "100% !important",
          width: "90%",
          height: this.height,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        markers: {
          size: 10,
          colors: colors // Customize the bullet color here
        },
        colors:colors,
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight",
          width: strokeWidth,
          colors: colors,
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
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'center',
        },
        xaxis: {
          categories:date,
          tickPlacement: 'on',
          labels: {
            rotate: -45,
            skipOverlap: true,
          },
        },
        yaxis: [
          {
            seriesName: this.scoreCardGraphHeading,
            decimalsInFloat: 2,
            opposite: false,
            axisTicks: {
              show: true,

            },
            axisBorder: {
              show: true,
              color: "#FEB019"
            },
            title: {
              text: this.scoreCardGraphHeading,
              style: {
                color: "#FEB019"
              }
            }
          }
        ],
      };
      this.cdr.detectChanges();
      this.charDataEmitter.emit({ name: this.series[0].name, data: this.chartOptions })
    }

    if (changes['totalScore']) {
    
    }
    

    if (changes['chartDataFromParent']) {

      if (this.chartDataFromParent.hasOwnProperty('data')) {
        this.chartOptions = this.chartDataFromParent.data
      }
      else {
        this.chartOptions = this.chartDataFromParent;
      }


    }

  }





  setSeriesData(vendorName: string, data: any[], list: any[]) {
    // let filteredData = data.filter((i: any) => i.vendorName == vendorName)
    let filteredData = []
    if (data[0].hasOwnProperty("vendorName") && (data[0].vendorName !== null)) {
      filteredData = data.filter((i: any) => i.vendorName == vendorName)
    } else if (data[0].hasOwnProperty("commodityName") && (data[0].commodityName !== null)) {
      filteredData = data.filter((i: any) => i.commodityName == vendorName)
    }
    else if (data[0].hasOwnProperty("plantName") && (data[0].plantName !== null)) {
      filteredData = data.filter((i: any) => i.plantName == vendorName)
    }
    else if (data[0].hasOwnProperty("buyerName") && (data[0].buyerName !== null)) {
      filteredData = data.filter((i: any) => i.buyerName == vendorName)
    }
    else if (data[0].hasOwnProperty("materialName") && (data[0].materialName !== null)) {
      filteredData = data.filter((i: any) => i.materialName == vendorName)
    }

    filteredData.forEach((i: any) => {
      if (this.graphData.chartFor == 'score') {
        list.push(i.score)
      } else if (this.graphData.chartFor == 'percentage') {
        list.push(i.percentage)
      } else if (this.graphData.chartFor == 'totalScore') {
        list.push(i.totalScore)
        // list.push(i.t)
      }

    })

  }

  getTargetData(listVendor: any[], data: any[]) {
    // let filteredData = data.filter((i: any) => i.vendorName == listVendor[this.targetIndex].vendorName)
    let filteredData = []

    if (data[0].vendorName !== null) {
      filteredData = data.filter((i: any) => i.vendorName == listVendor[this.targetIndex]?.vendorName)
    } else if (data[0].commodityName !== null) {
      if (listVendor[this.targetIndex] === undefined)
        this.targetIndex;
      filteredData = data.filter((i: any) => i.commodityName == listVendor[this.targetIndex]?.commodityName)

    }
    else if (data[0].plantName !== null) {
      filteredData = data.filter((i: any) => i.plantName == listVendor[this.targetIndex]?.plantName)
    }
    else if (data[0].buyerName !== null) {
      filteredData = data.filter((i: any) => i.buyerName == listVendor[this.targetIndex]?.buyerName)
    }
    else if (data[0].materialName !== null) {
      filteredData = data.filter((i: any) => i.materialName == listVendor[this.targetIndex]?.materialName)
    }

    if (this.graphData.chartFor == 'score') {
      filteredData.forEach((i: any) => {
        if (i.hasOwnProperty('targetScore')) {
          this.series[1].data.push(i.targetScore)
        }
      }
      )


    } else if (this.graphData.chartFor == 'percentage') {
      filteredData.forEach((i: any) => {
        if (i.hasOwnProperty('targetPercentage')) {
          this.series[1].data.push(i.targetPercentage)
        }
      }
      )


    } else if (this.graphData.chartFor == 'totalScore') {

      filteredData.forEach((i: any) => {
        if (i.hasOwnProperty('totalScoreTargetScore')) {
          this.series[1].data.push(i.totalScoreTargetScore)
        }
      })

    }
  }

  setVendorName(vendorName: any, list: any, i: any) {
    list.push({ name: vendorName, data: [] })
  }


  getMonthData(listVendor: any[], data: any[]) {
    let arr: any = [
      [], [], [], [], [], []
    ]
    let index = 1;
    for (let j = index; j < listVendor.length; j++) {
      data.forEach((i: any) => {
        if (i.vendorName == listVendor[j].vendorName)
          arr[j - 1].push(i.month)
      })
    }
    let selectedArray: any[] = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > selectedArray.length) {
        this.targetIndex = i
        selectedArray = arr[i]
      }
    }
    this.monthArray = selectedArray
    // let filterData =data.filter((i:any)=>i.vendorName == listVendor[1].vendorName)
    // filterData.forEach((i:any)=>{
    //   this.monthArray.push(i.monthName)
    // })

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
