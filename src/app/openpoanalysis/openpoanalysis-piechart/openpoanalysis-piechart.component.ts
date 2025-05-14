import { ChangeDetectorRef, Component, Inject, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ApexTooltip, ChartComponent } from "ng-apexcharts";
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexLegend
} from "ng-apexcharts";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    legend: ApexLegend;
    colors: any;
    tooltip: ApexTooltip;
};

@Component({
    selector: 'app-openpoanalysis-piechart',
    templateUrl: './openpoanalysis-piechart.component.html',
    styleUrls: ['./openpoanalysis-piechart.component.css']
})
export class OpenpoanalysisPiechartComponent implements OnInit {
    
    @ViewChild("chart") chart: ChartComponent;
    @Input() executeData: any

    seriesData:any[]= []
    labelsData:any[] = [];
    randomColors: string[] = [];
    strokeWidth:any[] = []

    public chartOptions: Partial<ChartOptions>;

    constructor(
        public _apiService:GeneralApiService,
        private translateService :TranslateService,
        private cdr : ChangeDetectorRef,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        // this.chartOptions = {
        //     series: [],
        //     chart: {
        //         width: 550,
        //         type: "pie"
        //     },
        //     labels: [],

        //     colors: [],
        //     legend: {
        //         show: true,
        //         position: 'top',
        //         horizontalAlign: 'center',
        //     },
        //     responsive: [
        //         {
        //             breakpoint: 575,
        //             options: {
        //                 chart: {
        //                     width: 300
        //                 },
        //                 legend: {
        //                     position: "top",
        //                     show: true,
        //                 },
        //                 dataLabels: {
        //                     enabled: false,
        //                 },
        //             }
        //         }
        //     ]
        // };

        this.chartOptions = {
            series: [], // Pie chart data values
            chart: {
                width: 550,
                type: "pie"
            },
            labels: [], // Pie chart labels
            colors: [], // Pie chart slice colors
            legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'center',
            },
            tooltip: {
                y: {
                    formatter: (value: number) => {
                        return '$ ' + Number(value).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                        
                    }
                }
            },
            responsive: [
                {
                    breakpoint: 575,
                    options: {
                        chart: {
                            width: 300
                        },
                        legend: {
                            position: "top",
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

    ngOnChanges(changes: SimpleChanges): void {

        if (changes['executeData']) {
            if (this.executeData === undefined || this.executeData === null)
                return

            this.changeFilters();
        }
    }

    changeFilters(){
        this.seriesData     =   [];
        this.labelsData     =   [];
        this.randomColors   =   [];
        this.executeData.forEach(item => {
            this.seriesData.push(item.val)
            this.labelsData.push(item.name)
            const randomColor = this.getRandomColor();
            this.randomColors.push(randomColor);
        })
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
        // this.chartOptions = {
        //     series: this.seriesData,
        //     chart: {
        //         width: 1000,
        //         type: "pie"
        //     },
        //     labels: this.labelsData,

        //     colors: this.randomColors,
        //     legend: {
        //         show: true,
        //         position: 'top',
        //         horizontalAlign: 'center',
        //     },
        //     responsive: [
        //         {
        //             breakpoint: 575,
        //             options: {
        //                 chart: {
        //                     width: 300
        //                 },
        //                 legend: {
        //                     position: "top",
        //                     show: true,
        //                 },
        //                 dataLabels: {
        //                     enabled: false,
        //                 },
        //             }
        //         }
        //     ]
        // };

        this.chartOptions = {
            series: this.seriesData,
            chart: {
                width: "100%", // Set width to 100%
                type: "pie"
            },
            labels: this.labelsData,
        
            colors: this.randomColors,
            legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'center',
            },
            tooltip: {
                y: {
                    formatter: (value: number) => {
                        return '$ ' + Number(value).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                        
                    }
                }
            },
            responsive: [
                {
                    breakpoint: 575,
                    options: {
                        chart: {
                            width: "100%" // Ensure width is responsive
                        },
                        legend: {
                            position: "top",
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

    getRandomColor(): string {
        // const letters = '0123456789ABCDEF';
        // let color = '#';
        // for (let i = 0; i < 6; i++) {
        //   color += letters[Math.floor(Math.random() * 16)];
        // }
        // return color;
        const randomComponent = () => Math.floor(Math.random() * 256); // Function to generate a random component (0-255)
        return `rgb(${randomComponent()}, ${randomComponent()}, ${randomComponent()})`; // Constructing a random RGB color
    }
}   
