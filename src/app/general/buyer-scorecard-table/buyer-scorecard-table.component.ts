import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { graphService } from 'src/app/services/appService/graphservice';
import { tips } from 'src/app/tootTips';
import * as _moment from 'moment/moment';
import { api } from 'src/app/api.endpoints';
import { SendreportdialogComponent } from '../sendreportdialog/sendreportdialog.component';
import { PopuptableComponent } from '../popuptable/popuptable.component';
import { TranslateService } from '@ngx-translate/core';
import { ScoreCardEmailService } from 'src/app/services/appService/scorecardEmailService';
import { UserdialogoutComponent } from 'src/app/general/userdialogout/userdialogout.component';


@Component({
  selector: 'app-buyer-scorecard-table',
  templateUrl: './buyer-scorecard-table.component.html',
  styleUrls: ['./buyer-scorecard-table.component.css']
})
export class BuyerScorecardTableComponent implements OnInit {
  selectedColor: any = "ALL";
  tips = tips
  isCompareLoading: boolean = false;
  currentDate: any
  @Output() formDataEmitter = new EventEmitter();
  public listLtaData: any[]
  public listNcrData: any[]
  public listPpvData: any[]
  public listData: any[]
  buyersDetail: any
  form = new FormData();
  public ltaDetailpdf: any
  public ncrDetailpdf: any
  public ppvDetailpdf: any
  public otdDetailpdf: any
  public listLtaDetail: any[]
  public listNcrDetail: any[] // to be use to get data first hand so when report create not to make api request again
  public listPpvDetail: any[]
  public listOtdDetail: any[]


  buyerViseLta: any[] = []
  buyerViseOtd: any[] = []
  buyerVisePpv: any[] = []
  buyerViseNcr: any[] = []
  allBuyers: any



  ltaPdf = new jsPDF('p', 'mm', 'a4',);
  ncrPdf = new jsPDF('p', 'mm', 'a4',);
  ppvPdf = new jsPDF('p', 'mm', 'a4',);
  otdPdf = new jsPDF('p', 'mm', 'a4',);
  lta!: Form
  @Output() showChartEmitter = new EventEmitter()
  @Output() buyerDataEmitter = new EventEmitter()
  @Input() public data: any
  @Input() public buyerData: any
  @Input() public apiRequestData: any = {}
  @Input() public apiRequestType: any = 'post'
  @ViewChild('chart', { read: ElementRef, static: true }) chart!: ElementRef;
  // @ViewChild('chart',{static:true}) chart!:ElementRef
  listDropDown: any = {}
  public loggedInUser: any;
  public listSelectedBuyer: string[] = [];
  public listReport: any[] = []
  selected = [];
  listBuyerDetail: any[] = []
  selectreports = [
    { value: 'Vendor ScoreCard', viewValue: 'Vendor Scorecard' },
    { value: 'Buyer ScoreCard', viewValue: 'Buyer Scorecard' },
    { value: 'Commodity ScoreCard', viewValue: 'Commodity Scorecard' },
    { value: 'Plant ScoreCard', viewValue: 'Plant Scorecard' },
    { value: 'Material ScoreCard', viewValue: 'Material Scorecard' },
    { value: 'Mapout ScoreCard', viewValue: 'Mapout Scorecard' },
    { value: 'Total Score Line', viewValue: 'Total Score Line' },
    { value: 'OTD Detail Report', viewValue: 'OTD Detail Report' },
    { value: 'NCR Detail Report', viewValue: 'NCR Detail Report' },
    { value: 'PPV Detail Report', viewValue: 'PPV Detail Report' },
    { value: 'LTA Detail Report', viewValue: 'LTA Detail Report' },
    { value: 'Summary Report', viewValue: 'Summary Report' },
    { value: 'Color Zone Pie', viewValue: 'Color Zone Pie' },
    { value: 'OTD% and Score Line', viewValue: 'OTD% and Score Line' },
    { value: 'NCR% and Score Line', viewValue: 'NCR% and Score Line' },
    { value: 'PPV% and Score Line', viewValue: 'PPV% and Score Line' },
    { value: 'LTA% and Score Line', viewValue: 'LTA% and Score Line' },
    { value: 'Total Score Data', viewValue: 'Total Score Data' },
  ];
  public isViewFirst: boolean = true;
  listAllBuyers: any[] = [];

  @Input() subtitle: string;

  title = 'Compare';
  masterSelected: boolean;
  checklist: any;
  checkedList: any;


  getProjectsUrl: string = '';
  columns = [
    {
      def: 'compare',
      name: 'Compare',
      key: 'compare',
      isSticky: true,
      projection: true,
      cannotExport: true,
    },
    {
      def: 'buyerCode',
      name: 'Buyer Code',
      key: 'buyerCode',
      isSticky: true,
    },
    {
      def: 'buyerName',
      name: 'Buyer Name',
      key: 'buyerName',
      isSticky: true
    },

    {
      def: 'otdPercentage',
      name: 'OTD%',
      // key: 'otdPercentage',
      key: (i: any) => {
        if (i.otdPercentage == 0) {
          return 0
        } else {
          return parseFloat(i.otdPercentage).toFixed(2)
        }
      },
    },
    {
      def: 'ncrPercentage',
      name: 'NCR%',
      // key: 'ncrPercentage',
      key: (i: any) => {
        if (i.ncrPercentage == 0) {
          return 0
        } else {
          return parseFloat(i.ncrPercentage).toFixed(2)
        }
      },
    },
    {
      def: 'ppvPercentage',
      name: 'PPV%',
      // key: 'ppvPercentage',
      key: (i: any) => {
        if (i.ppvPercentage == 0) {
          return 0
        } else {
          return parseFloat(i.ppvPercentage).toFixed(2)
        }
      },
    },
    {
      def: 'ltaPercentage',
      name: 'LTA%',
      // key: 'ltaPercentage',
      key: (i: any) => {
        if (i.ltaPercentage == 0) {
          return 0
        } else {
          return parseFloat(i.ltaPercentage).toFixed(2)
        }
      },
    },
    {
      def: 'otdScore',
      name: 'OTD Score',
      // key: 'otdScore',
      key: (i: any) => {
        if (i.otdScore == 0) {
          return 0
        } else {
          return i.otdScore
        }
      },
    },
    {
      def: 'ncrScore',
      name: 'NCR Score',
      key: (i: any) => {
        if (i.ncrScore == 0) {
          return 0
        } else {
          return i.ncrScore
        }
      },
      // key: 'ncrScore',
    },
    {
      def: 'ppvScore',
      name: 'PPV Score',
      // key: 'ppvScore',
      key: (i: any) => {
        if (i.ppvScore == 0) {
          return 0
        } else {
          return i.ppvScore
        }
      },
    },
    {
      def: 'ltaScore',
      name: 'LTA Score',
      // key: 'ltaScore',
      key: (i: any) => {
        if (i.ltaScore == 0) {
          return 0
        } else {
          return i.ltaScore
        }
      },
    },
    {
      def: 'totalScore',
      name: 'Total Score',
      key: (i: any) => {
        if (i.totalScore == 0) {
          return 0
        } else {
          return i.totalScore
        }
      },
      // key: 'totalScore',
    },
    {
      def: 'spend',
      name: 'Spend',
      // key: 'spend',
      key: (i: any) => {
        if (i.spend == 0) {
          return 0
        } else {
          return '$ ' + Number(i.spend).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      },
    },
    {
      def: 'spendPercentage',
      name: 'Spend%',
      key: (i: any) => {
        if (i.spendPercentage == 0) {
          return 0
        } else {
          return parseFloat(i.spendPercentage).toFixed(2)
        }
      },
      // key: 'spendPercentage',
    },
    {
      def: 'sourcedItem',
      name: 'Sourced Matl.',
      key: (i: any) => {
        if (i.sourcedItem == 0) {
          return 0
        } else {
          return i.sourcedItem
        }
      },
      // key: 'sourcedItem',
    },
    {
      def: 'sourcedPercentage',
      name: 'Sourced Matl.%',
      key: (i: any) => {
        if (i.sourcedPercentage == 0) {
          return 0
        } else {
          return parseFloat(i.sourcedPercentage).toFixed(2)
        }
      },
      // key: 'sourcedPercentage',
    },
    {
      def: 'receivedPOLines',
      name: 'Recieved PO Lines',
      key: (i: any) => {
        if (i.receivedPOLines == 0) {
          return 0
        } else {
          return i.receivedPOLines
        }
      },
      // key: 'receivedPOLines',
    },
    {
      def: 'receivedPOLinesPercentage',
      name: 'Recieved PO Lines %',
      key: (i: any) => {
        if (i.receivedPOLinesPercentage == 0) {
          return 0
        } else {
          return parseFloat(i.receivedPOLinesPercentage).toFixed(2)
        }
      },
      // key: 'receivedPOLinesPercentage',
    },
    {
      def: 'issuedPOLines',
      name: 'Issued PO Lines',
      key: (i: any) => {
        if (i.issuedPOLines == 0) {
          return 0
        } else {
          return i.issuedPOLines
        }
      },
      // key: 'issuedPOLines',
    },
    {
      def: 'issuedPOLinesPercentage',
      name: 'Issued PO Lines%',
      key: (i: any) => {
        if (i.issuedPOLinesPercentage == 0) {
          return 0
        } else {
          return parseFloat(i.issuedPOLinesPercentage).toFixed(2)
        }
      },
      // key: 'issuedPOLinesPercentage',

    },
  ];
  buyerColumns = [
    {
      def: 'compare',
      name: 'Compare',
      key: 'compare',
      isSticky: true,
      projection: true,
      cannotExport: true,
    },
    {
      def: 'buyerCode',
      name: 'Buyer',
      key: 'buyerCode',
      isSticky: true,
    },
    {
      def: 'buyerName',
      name: 'Buyer',
      key: 'buyerName',
      isSticky: true
    },

    {
      def: 'otdPercentage',
      name: 'OTD%',
      // key: 'otdPercentage',
      key: (i: any) => i.otdPercentage == 0 ? 0 : Number(i.otdPercentage).toFixed(3),
    },
    {
      def: 'ncrPercentage',
      name: 'NCR%',
      // key: 'ncrPercentage',
      key: (i: any) => i.ncrPercentage == 0 ? 0 : Number(i.ncrPercentage).toFixed(3),
    },
    {
      def: 'ppvPercentage',
      name: 'PPV%',
      // key: 'ppvPercentage',
      key: (i: any) => i.pvvPercentage == 0 ? 0 : Number(i.ppvPercentage).toFixed(3),

    },
    {
      def: 'ltaPercentage',
      name: 'LTA%',
      // key: 'ltaPercentage',
      key: (i: any) => i.ltaPercentage == 0 ? 0 : Number(i.ltaPercentage).toFixed(3),
    },
    {
      def: 'otdScore',
      name: 'OTD Score',
      // key: 'otdScore',
      key: (i: any) => i.otdScore == 0 ? 0 : Number(i.otdScore).toFixed(3),
    },
    {
      def: 'ncrScore',
      name: 'NCR Score',
      // key: 'ncrScore',
      key: (i: any) => i.ncrScore == 0 ? 0 : Number(i.ncrScore).toFixed(3),
    },
    {
      def: 'ppvScore',
      name: 'PPV Score',
      // key: 'ppvScore',
      key: (i: any) => i.ppvScore == 0 ? 0 : Number(i.ppvScore).toFixed(3),
    },
    {
      def: 'ltaScore',
      name: 'LTA Score',
      // key: 'ltaScore',
      key: (i: any) => i.ltaScore == 0 ? 0 : Number(i.ltaScore).toFixed(3),
    },
    {
      def: 'totalScore',
      name: 'Total Score',
      // key: 'totalScore',
      key: (i: any) => i.totalScore == 0 ? 0 : Number(i.totalScore).toFixed(3),
    },
    {
      def: 'spend',
      name: 'Spend',
      // key: 'spend',
      //key: (i:any)=> i.spend==0?0:Number(i.spend).toFixed(3),
      key: (i) => i.spend === 0 ? '0' : '$ ' + Number(i.spend).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    },
    {
      def: 'spendPercentage',
      name: 'Spend%',
      // key: 'spendPercentage',
      key: (i: any) => i.spendPercentage == 0 ? 0 : Number(i.spendPercentage).toFixed(3),
    },
    {
      def: 'sourcedItem',
      name: 'Sourced Matl.',
      // key: 'sourcedItem',
      key: (i: any) => i.sourcedItem == 0 ? 0 : Number(i.sourcedItem).toFixed(3),
    },
    {
      def: 'sourcedPercentage',
      name: 'Sourced Matl.%',
      // key: 'sourcedPercentage',
      key: (i: any) => i.sourcedPercentage == 0 ? 0 : Number(i.sourcedPercentage).toFixed(3),
    },
    {
      def: 'receivedPOLines',
      name: 'Recieved PO Lines',
      // key: 'receivedPOLines',
      key: (i: any) => i.receivedPOLines == 0 ? 0 : Number(i.receivedPOLines).toFixed(3),
    },
    {
      def: 'receivedPOLinesPercentage',
      name: 'Recieved PO Lines %',
      // key: 'receivedPOLinesPercentage',
      key: (i: any) => i.receivedPOLinesPercentage == 0 ? 0 : Number(i.receivedPOLinesPercentage).toFixed(3),
    },
    {
      def: 'issuedPOLines',
      name: 'Issued PO Lines',
      // key: 'issuedPOLines',
      key: (i: any) => i.issuedPOLines == 0 ? 0 : Number(i.issuedPOLines).toFixed(3),
    },
    {
      def: 'issuedPOLinesPercentage',
      name: 'Issued PO Lines%',
      // key: 'issuedPOLinesPercentage',
      key: (i: any) => i.issuedPOLinesPercentage == 0 ? 0 : Number(i.issuedPOLinesPercentage).toFixed(3),

    },
  ];
  statisticColumns = [
    {
      def: 'all',
      name: 'Average',
      key: ((i: any) => {
        let message = ""
        if (this.apiRequestData === null || this.apiRequestData === undefined)
          return "ALL";
        if (this.apiRequestData.plantCode.includes(",")) {
          message = 'All Plants ';
        } else {
          message = this.listDropDown.plantDropDown.filter((i: any) => i.plantCode == this.apiRequestData.plantCode)[0].plantName;
        }


        //  if(this.apiRequestData.commodity.includes(","))
        //  {
        //    message = message + " All Commodity"
        //  }else
        //  message = message  +" "+ this.apiRequestData.commodity

        return message
      }),
      isSticky: true,
    },
    {
      def: 'otd_percentage',
      name: 'OTD%',
      // key: 'otd_percentage',
      key: (i: any) => {
        if (i.otd_percentage == 0) {
          return 0
        } else {
          return parseFloat(i.otd_percentage).toFixed(2)
        }
      },
    },
    {
      def: 'ncr_percentage',
      name: 'NCR%',
      key: (i: any) => {
        if (i.ncr_percentage == 0) {
          return 0
        } else {
          return parseFloat(i.ncr_percentage).toFixed(2)
        }
      },
      // key: 'ncr_percentage',
    },
    {
      def: 'ppv_percentage',
      name: 'PPV%',
      key: (i: any) => {
        if (i.ppv_percentage == 0) {
          return 0
        } else {
          return parseFloat(i.ppv_percentage).toFixed(2)
        }
      },
      // key: 'ppv_percentage',
    },
    {
      def: 'lta_percentage',
      name: 'LTA%',
      key: (i: any) => {
        if (i.lta_percentage == 0) {
          return 0
        } else {
          return parseFloat(i.lta_percentage).toFixed(2)
        }
      },
      // key: 'lta_percentage',
    },
    {
      def: 'otd_score',
      name: 'OTD Score',
      key: (i: any) => {
        if (i.otd_score == 0) {
          return 0
        } else {
          return i.otd_score
        }
      },
      // key: 'otd_score',
    },
    {
      def: 'ncr_score',
      name: 'NCR Score',
      key: (i: any) => {
        if (i.ncr_score == 0) {
          return 0
        } else {
          return i.ncr_score
        }
      },
      // key: 'ncr_score',
    },
    {
      def: 'ppv_score',
      name: 'PPV Score',
      key: (i: any) => {
        if (i.ppv_score == 0) {
          return 0
        } else {
          return i.ppv_score
        }
      },
      // key: 'ppv_score',
    },
    {
      def: 'lta_score',
      name: 'LTA Score',
      key: (i: any) => {
        if (i.lta_score == 0) {
          return 0
        } else {
          return i.lta_score
        }
      },
      // key: 'lta_score',
    },
    {
      def: 'totalScore',
      name: 'Total Score',
      key: (i: any) => {
        if (i.totalScore == 0) {
          return 0
        } else {
          return i.totalScore
        }
      },
      // key: 'totalScore',
    },

  ];





  constructor(public dialog: MatDialog,
    public _apiService: GeneralApiService,
    private cdr: ChangeDetectorRef,
    private _notificationService: NotificationService,
    private router: Router,
    private _emailService: ScoreCardEmailService,
    private translateService: TranslateService) {
    this.masterSelected = false;
    this.checklist = [
      { id: 0, value: '', isSelected: false },
      { id: 1, value: '', isSelected: true },
      { id: 2, value: '', isSelected: false },
      { id: 3, value: '', isSelected: false },
      { id: 4, value: '', isSelected: false },
      { id: 5, value: '', isSelected: false },
      { id: 6, value: '', isSelected: false },
      { id: 8, value: '', isSelected: false },
      { id: 9, value: '', isSelected: false },
      { id: 10, value: '', isSelected: false },
      { id: 11, value: '', isSelected: false },
      { id: 12, value: '', isSelected: false },
      { id: 13, value: '', isSelected: false },
      { id: 14, value: '', isSelected: false },
      { id: 15, value: '', isSelected: false },
      { id: 16, value: '', isSelected: false },
      { id: 17, value: '', isSelected: false },
      { id: 18, value: '', isSelected: false },
      { id: 19, value: '', isSelected: false },
      { id: 20, value: '', isSelected: false },
    ];
    this.currentDate = _moment(new Date()).format('MM/DD/YYYY')

  }

  ngOnInit(): void {
    // this._apiService.isCompareLoader$.subscribe((res: boolean) => {
    //   this.isCompareLoading = res
    // })
    this._apiService.isLanguageSelector$.subscribe((res: any) => {
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    var user = localStorage.getItem('userData');
    if (user)
      this.loggedInUser = JSON.parse(user);

    switch (this.subtitle) {
      case 'Vendor':
        this.getProjectsUrl = api.vendorData
        break;
      case 'Plant':
        this.getProjectsUrl = api.plantData
        break;
      case 'Commodity':
        this.getProjectsUrl = api.commodityData
        break;
      case 'Buyer':
        this.getProjectsUrl = api.buyerData
        break;
      default:
        break;
    }


    this._apiService.get(`${api.vendorDropdown}?tenantId=${this.loggedInUser?.tenantID}`)
      .subscribe((res: any) => {
        this.listDropDown = res.data
        this.listAllBuyers = res.data?.buyerDropDown.filter((i: any) => i.buyerCode !== "ALL")
        this.listReport = res.data.reportDropDown
        this.listReport = this.listReport.filter((i: any) => i.id !== 0)
      })

    // Value ko parse karein aur boolean format mein set karein
    this.isViewFirst = JSON.parse(localStorage.getItem('kpiSettingSendReportValue') || 'false');
  }


  async openDialog() {
    this.showChartEmitter.emit(true);
    if (this.apiRequestData === null || this.apiRequestData === undefined) {
      this._notificationService.push("No data set selected", 2);
      return
    }

    if (this.selected.length < 1) {
      this._notificationService.push("Atleast 1 report must be selected", 2)
      return
    }

    if (this.selected.length == 1 && this.selected.includes(1)) {
      for (let index = 2; index < 14; index++) {
        this.selected.push(index)
      }
    }

    if (this.listSelectedBuyer.length < 1) {
      this._notificationService.push("At least 1 buyer must be selected", 2);
      return;
    }
    let buyerList = this.listAllBuyers.filter((i: any) => this.listSelectedBuyer.includes(i.buyerCode))
    // let message = this.getMessage([],2);
    let reportsData = []
    buyerList.forEach((i: any) => {
      reportsData.push({ code: i.buyerCode, name: i.buyerName, contact: '', email: [i.email], cc: [] })
    })


    if (!this.isViewFirst) {
      this.sendReportsModelForNotViewFirst(reportsData)
      return;
    }

    const dialogRef = this.dialog.open(SendreportdialogComponent, {
      panelClass: 'sendreportcontainer',
      data: {
        usersData: reportsData,
        message: this._emailService.message,
        subject: 'Buyer ScoreCard for [Buyer Name] Between [Start date] to [End date]'
      },
    });


    dialogRef.afterClosed().subscribe((res: any) => {
      if (res === null)
        return

      this.sendReportsModel(res)
    })



  }

sendReportsModel(data: any) {
  this.apiRequestData.userId = this.loggedInUser.userID;
  let allBuyerCode = '';
  this.listAllBuyers.forEach((element: any) => {
    allBuyerCode = allBuyerCode + element.buyerCode + ",";
  });
  allBuyerCode = allBuyerCode.slice(0, -1);
  this.apiRequestData.allBuyerCode = allBuyerCode;

  let sendResponseModel = {
    listReportModel: data,
    apiRequestData: this.apiRequestData,
    listSelectedReports: this.selected
  };

  console.log("📡 Sending to URL:", api.sendBuyerReport);
  console.log("📦 Payload:", sendResponseModel);

  this.dialog.open(UserdialogoutComponent, {
    data: {
      height: '75%',
      width: '25%!important',
      minWidth: '25%',
      top: '20%',
      resize: 'none',
      message: "Your report is being generated and will be sent shortly. This process may take a few minutes. You can continue using the system as usual, and you will receive a notification once the report has been successfully sent.",
      heading: 'Notification',
      isMessage: true,
    }
  });

  this._apiService.post(api.sendBuyerReport, sendResponseModel)
    .subscribe((res: any) => {
      console.log("✅ Server response:", res);
      this._notificationService.push("Reports sent successfully", 1);
    }, (e: any) => {
      console.error("❌ Error sending report:", e);
      this._notificationService.push("Reports not sent", 2);
    });
}

  sendReportsModelForNotViewFirst(data: any) {

    this.apiRequestData.userId = this.loggedInUser.userID
    let allBuyerCode = ''
    this.listAllBuyers.forEach((element: any) => {
      allBuyerCode = allBuyerCode + element.buyerCode + ","
    });
    allBuyerCode = allBuyerCode.slice(0, -1);
    this.apiRequestData.allBuyerCode = allBuyerCode
    let sendResponseModel = {
      listReportModel: { listReportToSend: data, message: this._emailService.message, subject: 'Buyer ScoreCard for [Buyer Name] Between [Start date] to [End date]' },
      apiRequestData: this.apiRequestData,
      listSelectedReports: this.selected
    }

    this.dialog.open(UserdialogoutComponent,
      {
        data: {
          height: '75%',
          width: '25%!important',
          minWidth: '25%',
          top: '20%',
          resize: 'none',
          message: "Your report is being generated and will be sent shortly. This process may take a few minutes. You can continue using the system as usual, and you will receive a notification once the report has been successfully sent.",
          heading: 'Notification',
          isMessage: true,
        }
      });

console.log("🔍 API endpoint:", api.sendBuyerReport);
    this._apiService.post(api.sendBuyerReport, sendResponseModel)
      .subscribe((res: any) => {
        this._notificationService.push("Reports sent successfully", 1)
        console.log(res);
      }, (e: any) => {
        this._notificationService.push("Reports not sent ", 2)
      })


  }





  isViewFirstClick(data: any) {
    this.isViewFirst = true
  }

  isNotViewFirstClick(data: any) {
    this.isViewFirst = false
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.masterSelected = this.checklist.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
  }


  check(id) {
    return this.checklist[id].isSelected = true;
  }

  getCheckedItemList() {
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isSelected)
        this.checkedList.push(this.checklist[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }


  previousArray = []
  // onSelection(data: any) {


  //     if(this.selected.length === 1 && this.selected.includes(1))this.previousArray.push(1);

  //     if(data.value.includes(1)){

  //       if(this.selected.length !== this.previousArray.length && this.selected.length < this.previousArray.length){
  //         this.selected = this.selected.filter((i:any)=>  i !==1)
  //         this.previousArray = this.selected;
  //         return
  //       }


  //       this.selected = []
  //       for (let index = 1; index < 14; index++) {
  //         this.selected.push(index)
  //       this.previousArray.push(index) 
  //       }
  //       }else
  //       {

  //         if(this.previousArray.length !== this.selected.length && (this.previousArray.includes(1)))
  //           {
  //             this.selected = [];
  //             this.previousArray = [];
  //           }
  //           else{

  //             this.previousArray = this.selected
  //           }
  //       }

  //       this.cdr.detectChanges();


  //   }

  onSelection(data: any) {


    if (this.selected.length === 1 && this.selected.includes(1)) {
      this.previousArray.push(1);
    }

    if (data.value.includes(1)) {

      if (this.selected.length !== 1 && this.selected.includes(1)) {
        this.selected = [1]
        for (let index = 2; index < 14; index++) {
          this.previousArray.push(index)
        }
        return
      }

      if (this.selected.length !== this.previousArray.length && this.selected.length < this.previousArray.length) {
        this.selected = this.selected.filter((i: any) => i !== 1)
        this.previousArray = this.selected;
        return
      }
      for (let index = 2; index < 14; index++) {
        this.selected.push(index)
        this.previousArray.push(index)
      }
    }
    else {

      if (this.previousArray.length !== this.selected.length && (this.previousArray.includes(1))) {
        this.selected = [];
        this.previousArray = [];
      }
      else {

        this.previousArray = this.selected
      }
    }

    this.cdr.detectChanges();


  }

  getTableRecord(data: any) {
    this.listBuyerDetail = data;
  }


  getCheckedDataOutput(eventData: any) {

    if (eventData) {
      this.listBuyerDetail.forEach((element: any) => {
        if (!this.listSelectedBuyer.includes(element.buyerCode)) {
          this.listSelectedBuyer.push(element.buyerCode);
        }
      });
    } else {
      this.listSelectedBuyer = []
    }
  }

  onCheckBoxClick(event: any, data: any) {
    // if(this.listSelectedBuyer.length>4)
    // {
    //   event.checked = false
    //   this._notificationService.push("Can not select more then 5 Buyer for comparison",2);
    //   return
    // }

    if (event.checked) {
      if (!this.listSelectedBuyer.includes(data.buyerCode))
        this.listSelectedBuyer.push(data.buyerCode)
    } else {
      if (this.listSelectedBuyer.includes(data.buyerCode))
        this.listSelectedBuyer.splice(this.listSelectedBuyer.indexOf(data.buyerCode), 1);
    }


  }

  isBuyerSelected(data: any) {
    return this.listSelectedBuyer.includes(data?.buyerCode)
  }


  ngOnChanges(changes: SimpleChanges) {
    // if (changes['apiRequestData']) {
    //   if(this.apiRequestData === null || this.apiRequestData === undefined )
    //   return null

    //   delete this.apiRequestData.detialType
    //   Promise.all([
    //     this._apiService.post(api.buyerDetails, {...this.apiRequestData,detailType:'LTA',pageSize:1000,pageNumber:1}).toPromise(),
    //     this._apiService.post(api.buyerDetails, {...this.apiRequestData,detailType:'NCR',pageSize:1000,pageNumber:1}).toPromise(),
    //     this._apiService.post(api.buyerDetails, {...this.apiRequestData,detailType:'PPV',pageSize:1000,pageNumber:1}).toPromise(),
    //     this._apiService.post(api.buyerDetails, {...this.apiRequestData,detailType:'OTD',pageSize:1000,pageNumber:1}).toPromise(),
    //     this._apiService.post(api.getBuyerEmail,this.apiRequestData).toPromise()
    //   ]).then((res: any) => {

    //       if (res === null || res === undefined) {
    //         this._apiService.isCompareLoader$.next(false)
    //         return
    //       }
    //       this.listLtaDetail = res[0].data.list_LTA_Details
    //       this.listNcrDetail = res[1].data.list_NCR_Details
    //       this.listPpvDetail = res[2].data.list_PPV_Details
    //       this.listOtdDetail = res[3].data.list_OTD_Details
    //       this.buyersDetail = res[4].vendorData;

    //       this.buyersDetail.forEach((element:any) => {
    //         this.buyerViseLta.push({buyerCode:element.buyerCode, data:this.listLtaDetail.filter((i:any)=>i.buyerCode== element.buyerCode)}) 
    //         this.buyerVisePpv.push({buyerCode:element.buyerCode, data:this.listPpvDetail.filter((i:any)=>i.buyerCode== element.buyerCode)}) 
    //         this.buyerViseNcr.push({buyerCode:element.buyerCode, data:this.listNcrDetail.filter((i:any)=>i.buyerCode== element.buyerCode)}) 
    //         this.buyerViseOtd.push({buyerCode:element.buyerCode, data:this.listOtdDetail.filter((i:any)=>i.buyerCode== element.buyerCode)}) 

    //       });
    //       for(let i = 0 ;i < this.buyerViseLta.length;i++){
    //         this.buyerViseLta[i].nativeElement = this._graphService.getLtaNativeElement(this.buyerViseLta[i].data)
    //         this.buyerViseOtd[i].nativeElement = this._graphService.getOtdNativeElement(this.buyerViseOtd[i].data)
    //         this.buyerViseNcr[i].nativeElement = this._graphService.getNcrNativeElement(this.buyerViseNcr[i].data)
    //         this.buyerVisePpv[i].nativeElement = this._graphService.getPPVNativeElement(this.buyerVisePpv[i].data)
    //       }           

    //     }, (e: any) => {
    //       this._notificationService.push("Data set not valid", 2);
    //     }).finally(() =>{ 
    //   });

    // }


  }

  openModel(tableName: string) {

    if (this.listSelectedBuyer.length < 1) {
      this._notificationService.push("no data selected", 2)
      return
    }
    this._apiService.isCompareLoader$.next(true)
    if (this.apiRequestData === null || this.apiRequestData === undefined) {
      this._notificationService.push("no data selected", 2)
      return
    }
    let data = { ...this.apiRequestData }
    let apiRoute: string = ''

    switch (this.subtitle) {
      case 'Vendor':
        apiRoute = api.vendorDetails
        break;
      case 'Plant':
        apiRoute = api.plantDetails
        break;
      case 'Buyer':
        apiRoute = api.buyerDetails
        break;
      case 'Commodity':
        apiRoute = api.commodityDetails
        break;
      case 'Material':
        break;
      default:
        break;
    }


    switch (tableName) {
      case 'otdDetail':
        this.apiRequestData.detailType = 'OTD'
        data.detailType = 'OTD'
        break;
      case 'ltaDetail':
        this.apiRequestData.detailType = 'LTA'
        data.detailType = 'LTA'
        break;
      case 'ncrDetail':
        this.apiRequestData.detailType = 'NCR'
        data.detailType = 'NCR'
        break;
      case 'ppvDetail':
        this.apiRequestData.detailType = 'PPV'
        data.detailType = 'PPV'
        break;
      default:
        break;
    }

    let buyer: any = ''
    this.listSelectedBuyer.forEach((i: any) => {
      buyer = buyer + i + ","
    })
    buyer = buyer.slice(0, -1)

  data.buyerCode = ',' + buyer + ',';
console.log("Selected buyerCode for NCR:", data.buyerCode);
    data.pageNumber = 1;
    data.searchText = ""
    data.pageSize = 10000;

    let dataSource;
    let columns;
    let heading;
    let sortBy = ''
    switch (tableName) {
      case 'otdDetail':
        heading = 'OTD Details'
        // dataSource = res?.data?.list_OTD_Details;
        // totalRecords = res?.data?.totalRecords;
        sortBy = 'posting_Date'
        columns = [
          {
            def: 'ontime',
            name: 'On time',
            key: 'ontime',
          },
          {
            def: 'pastdue_Days',
            name: 'Discrepancy days',
            key: 'pastdue_Days',
            // key: (i:any)=>i.pastdue_Days.split(" ")[0],
            // projection: true,
          },
          {
            def: 'posting_Date',
            name: 'Posting date',
            // key: 'posting_Date',
            key: (i: any) => i.posting_Date.split(" ")[0],
            // projection: true,
          },
          {
            def: 'stat_Rel_Del',
            name: 'First promised date',
            // key: 'stat_Rel_Del',
            // key: 'stat_Rel_Del',
            key: (i: any) => i.stat_Rel_Del.split(" ")[0],
            // projection: true,
          },
          {
            def: 'material',
            name: 'Material',
            key: 'material',
          },
          {
            def: 'material_Description',
            name: 'Material Description',
            key: 'material_Description',
          },
          {
            def: 'order_Unit',
            name: 'Order Unit',
            key: 'order_Unit',
          },
          {
            def: 'vendorCode',
            name: 'Vendor Code',
            key: 'vendorCode',
            isSticky: true
          },
          {
            def: 'vendorName',
            name: 'Vendor Name',
            key: 'vendorName',
            isSticky: true
          },
          {
            def: 'purchasing_Document',
            name: 'Purchasing document',
            key: 'purchasing_Document',
          },
          {
            def: 'item',
            name: 'Item',
            key: 'item',
          },

          {
            def: 'net_Order_Price',
            name: 'Unit Price',
            // key: 'material_Cost',
            key: (i: any) => {
              if (i.net_Order_Price === null || i.net_Order_Price === undefined)
                return ""

              var netOrderPrice = +i.net_Order_Price
              return "$" + netOrderPrice.toLocaleString()
            }
          },


          {
            def: 'currency',
            name: 'Currency',
            key: 'currency',
          },
        ];
        break;
      case 'ncrDetail':
        heading = 'NCR Details'
        // dataSource = res?.data?.list_NCR_Details;
        // totalRecords = res?.data?.totalRecords;
        sortBy = 'posting_Date'
        columns = [
          {
            def: 'NCR',
            name: 'NCR?',
            // key: 'complaint_Qty',
            key: (i: any) => i.complaint_Qty == "0" ? "NO" : "YES",
          },
          {
            def: 'complaint_Qty',
            name: 'Complaint quantity',
            // key: 'complaint_Qty',
            key: (i: any) => i.complaint_Qty == "0" ? 0 : i.complaint_Qty,
          },
          {
            def: 'order_Qty',
            name: 'Order quantity',
            key: 'order_Qty',
          },
          {
            def: 'unit_of_Measure',
            name: 'Order Unit',
            key: 'unit_of_Measure',
          },
          {
            def: 'created_On',
            name: 'Created on',
            // key: 'created_On',
            key: (i: any) => i.created_On === "" ? "N/A" : i.created_On,
            // projection: true,
          },
          {
            def: 'material',
            name: 'Material',
            key: 'material',
          },
          {
            def: 'part_Description',
            name: 'Material Description',
            key: 'part_Description',
          },
          {
            def: 'vendorCode',
            name: 'Vendor Code',
            key: 'vendorCode',
            isSticky: true
          },
          {
            def: 'vendorName',
            name: 'Vendor Name',
            key: 'vendorName',
            isSticky: true
          },
          {
            def: 'purchGroup',
            name: 'Buyer',
            key: 'purchGroup',
          },
          {
            def: 'purchasing_Doc',
            name: 'Purchasing Doc',
            key: 'purchasing_Doc',
          },
          {
            def: 'item_pur_doc',
            name: 'Line no',
            key: 'item_pur_doc',
          },
          {
            def: 'posting_Date',
            name: 'Posting date',
            // key: 'posting_Date',
            key: (i: any) => i.posting_Date.split(" ")[0],
            // projection: true,
          },
          {
            def: 'material_Cost',
            name: 'Unit Price',
            // key: 'material_Cost',
            key: (i: any) => {
              if (i.material_Cost === null || i.material_Cost === undefined)
                return ""

              var materialCost = +i.material_Cost
              return "$" + materialCost.toLocaleString()
            }
          },
          {
            def: 'ncR_Cost',
            name: 'NCR cost',
            // key: 'ncR_Cost',
            key: (i: any) => {
              if (i.ncR_Cost === null || i.ncR_Cost === undefined)
                return ""

              var ncrCost = +i.ncR_Cost
              return "$" + ncrCost.toLocaleString()
            }
          },
          {
            def: 'completionDate',
            name: 'Completion date',
            key: (i: any) => {
              if (i.completionDate === null || i.completionDate === undefined) return "N/A"
              return i.completionDate.split(" ")[0]
            },
            // key: 'completionDate',
            isSticky: true
          },
          {
            def: 'plantCode',
            name: 'Plant code',
            key: 'plantCode',
            isSticky: true
          },
          // {
          //   def: 'item_pur_doc',
          //   name: 'Item per doc',
          //   key: 'item_pur_doc',
          // },
          // {
          //   def: 'part_Description',
          //   name: 'Part description',
          //   key: 'part_Description',
          // },
        ];
        break;
      case 'ppvDetail':
        heading = 'PPV Details'
        // dataSource = res?.data?.list_PPV_Details;
        // totalRecords = res?.data?.totalRecords;
        sortBy = 'latestPostingDate'
        columns = [
          {
            def: 'priceDiscripency',
            name: 'Price Discripency',
            key: 'priceDiscripency',
            // key: (i: any) => {
            //   if (i.priceDiscripency === null) {
            //     return "N/A"
            //   } else if (i.priceDiscripency == 0) {
            //     return 0;
            //   } else {
            //     return i.priceDiscripency
            //   }
            // }
          },
          {
            def: 'days',
            name: 'Days',
            key: (i: any) => {
              if (i.days === null) {
                return "N/A"
              } else if (i.days == 0) {
                return "0"
              } else {
                return i.days
              }
            }
          },
          {
            def: 'discripency',
            name: 'Discripency%',
            key: (i: any) => {
              if (i.discripency === null) {
                return "N/A"
              } else if (i.discripency == 0) {
                return 0;
              } else {
                return i.discripency
              }
            }
          },
          {
            def: 'increasedAmount',
            name: 'Discrepency Amount',
            key: (i: any) => {
              if (i.increasedAmount === null) {
                return "N/A"
              } else if (i.increasedAmount == 0) {
                return "$0"
              } else {
                var cost = +i.increasedAmount
                return "$" + cost.toLocaleString()
              }
            },
          },
          {
            def: 'latestPostingDate',
            name: 'Latest Posting Date',
            // key: 'latestPostingDate',
            key: (i: any) => i.latestPostingDate.split("T")[0],
            projection: true,
          },
          {
            def: 'latestPrice',
            name: 'Latest Price',
            // key: 'material_Cost',
            key: (i: any) => {
              if (i.latestPrice === null || i.latestPrice === undefined)
                return ""

              var latestPrice = +i.latestPrice
              return "$" + latestPrice.toLocaleString()
            }
          },



          {
            def: 'latestPO',
            name: 'Latest PO',
            key: 'latestPO',
          },
          {
            def: 'poItem',
            name: 'Latest PO LineNo',
            key: 'poItem',
          },
          {
            def: 'lastPostingDate',
            name: 'Last Posting Date',
            // key: 'lastPostingDate',
            key: (i: any) => {
              if (i.lastPostingDate.includes("01/01/0001")) {
                return "N/A"
              } else {
                return i.lastPostingDate.split("T")[0]
              }
            },
          },
          {
            def: 'lastPrice',
            name: 'Last Price',
            key: (i: any) => {
              if (i.lastPrice === null || i.lastPrice === undefined)
                return ""

              var lastPrice = +i.lastPrice
              return "$" + lastPrice.toLocaleString()
            }
          },
          {
            def: 'lastPO',
            name: 'Last PO',
            key: (i: any) => {
              if (i.lastPO === null) {
                return "N/A"
              } else {
                return i.lastPO
              }
            }
          },
          {
            def: 'lastPOItem',
            name: 'Last PO LineNo',
            key: (i: any) => {
              if (i.lastPOItem === null) {
                return "N/A"
              } else {
                return i.lastPOItem
              }
            }
          },
          {
            def: 'material',
            name: 'Material',
            key: 'material',
          },
          {
            def: 'materialDescription',
            name: 'Material Description',
            key: 'materialDescription',
          },
          {
            def: 'quantity',
            name: 'Quantity',
            key: 'quantity',
          },
          {
            def: 'orderUnit',
            name: 'Order Unit',
            key: 'orderUnit',
          },
          {
            def: 'vendorCode',
            name: 'Vendor Code',
            key: 'vendorCode',
            isSticky: true
          },
          {
            def: 'vendorName',
            name: 'Vendor Name',
            key: 'vendorName',
            isSticky: true
          },


        ]
        break;
      case 'ltaDetail':
        heading = 'LTA Details'
        // totalRecords = res?.data?.totalRecords;
        // dataSource = res?.data?.list_LTA_Details;
        sortBy = 'posting_Date'
        columns = [
          {
            def: 'lT_Accurate',
            name: 'LTA Accurate?',
            key: 'lT_Accurate',
          },
          {
            def: 'posting_Date',
            name: 'Posting date',
            // key: 'posting_Date',
            key: (i: any) => i.posting_Date.split(" ")[0],

            // projection: true,
          },
          {
            def: 'issue_Date',
            name: 'Issue date',
            // key: 'issue_Date',
            key: (i: any) => i.issue_Date.split(" ")[0],
            // projection: true,
          },
          {
            def: 'actual_Lead_Time',
            name: 'Actual Lead time',
            key: 'actual_Lead_Time',
          },
          {
            def: 'system_Lead_Time',
            name: 'System lead time',
            key: 'system_Lead_Time',
          },
          {
            def: 'material',
            name: 'Material',
            key: 'material',
          },
          {
            def: 'material_Description',
            name: 'Material Description',
            key: 'material_Description',
          },
          {
            def: 'vendorCode',
            name: 'Vendor Code',
            key: 'vendorCode',
            isSticky: true
          },
          {
            def: 'vendorName',
            name: 'Vendor Name',
            key: 'vendorName',
            isSticky: true
          },

          {
            def: 'purchasing_Document',
            name: 'Purchasing Document',
            key: 'purchasing_Document',
          },
          {
            def: 'item',
            name: 'LineNo',
            key: 'item',
          },

          {
            def: 'plantCode',
            name: 'Plant',
            key: 'plantCode',
          },


          // {
          //   def: 'system_Lead_Time',
          //   name: 'Lead time',
          //   key: 'system_Lead_Time',
          // },
        ];

        break;
      default:
        break;
    }

 this.apiRequestData.vendorCode = buyer
    this.dialog.open(PopuptableComponent, {
      width: '40%',
      panelClass: 'app-detail',
      data: {
        tableData: dataSource,
        columns: columns,
        heading: heading,
        isPopUp: true,
        apiRequestData: data,
        route: apiRoute
      },
      position: { top: '5%', left: '10%' },
    })





  }

  emitSelectedBuyer() {
    if (this.apiRequestData === null || this.apiRequestData === undefined) {
      this._apiService.isCompareLoader$.next(false);
      this._notificationService.push("Data set not selected", 2)
      return
    }

    if (this.listSelectedBuyer.length < 1) {
      this._apiService.isCompareLoader$.next(false);
      this._notificationService.push("Atleat 1 buyer must be selected", 2)
      return
    }


    if (this.listSelectedBuyer.length > 5) {
      this._apiService.isCompareLoader$.next(false);
      this._notificationService.push("Can not select more then 5 buyers for comparison", 2)
      return
    }



    let data: any = ''
    this.listSelectedBuyer.forEach((i: any) => {
      data = data + i + ","
    })
    data = data.slice(0, -1)

    // this.apiRequestData.vendorCode = data
    this.isCompareLoading = true
    this.buyerDataEmitter.emit(data)

  }

  onTestClick() {
    this.router.navigate(['user/ltadetail'])
  }

}
