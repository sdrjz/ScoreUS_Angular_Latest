import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef, EventEmitter, Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SendreportdialogComponent } from '../sendreportdialog/sendreportdialog.component';
// import { MatSelectModule } from '@angular/material/select';
import { Form, FormControl } from '@angular/forms';
import { WizardcheckmailDialogComponent } from '../wizardcheckmail-dialog/wizardcheckmail-dialog.component';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { api } from 'src/app/api.endpoints';
import { PopupService } from '@ng-bootstrap/ng-bootstrap/util/popup';
import { PopuptableComponent } from '../popuptable/popuptable.component';
import { NotificationService } from 'src/app/notification.service';
import { Router } from '@angular/router';
import { graphService } from 'src/app/services/appService/graphservice';
import jsPDF from 'jspdf';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as _moment from 'moment/moment';
import { M, O } from '@angular/cdk/keycodes';
import { tips } from 'src/app/tootTips';
import { TranslateService } from '@ngx-translate/core';
import { ScoreCardEmailService } from 'src/app/services/appService/scorecardEmailService';
import { UserdialogoutComponent } from 'src/app/general/userdialogout/userdialogout.component';

@Component({
  selector: 'app-vendor-scorecard-table',
  templateUrl: './vendor-scorecard-table.component.html',
  styleUrls: ['./vendor-scorecard-table.component.css']
})
export  class  VendorScorecardTableComponent implements OnInit, OnChanges {
  isComparedClick:boolean=false; // to restrict user to compare for graph after compare
  selectedColor :any = 'ALL'
  vendorsDetail:any
  tips = tips
  isCompareLoading: boolean = false;
  currentDate: any
  @Output() formDataEmitter = new EventEmitter();
  listAllVendors : any[]
  public listLtaDetail:any[]
  public listNcrDetail:any[] // to be use to get data first hand so when report create not to make api request again
  public listPpvDetail:any[]
  public listOtdDetail:any[]


  vendorViseLta:any[] =[]
  vendorViseOtd:any[] =[]
  vendorVisePpv:any[] =[]
  vendorViseNcr:any[] =[]




  public listLtaData: any[]
  public listNcrData: any[]
  public listPpvData: any[]
  public listData: any[]
  form = new FormData();
  public ltaDetailpdf: any
  public ncrDetailpdf: any
  public ppvDetailpdf: any
  public otdDetailpdf: any
  
  ltaPdf = new jsPDF('p', 'mm', 'a4',);
  ncrPdf = new jsPDF('p', 'mm', 'a4',);
  ppvPdf = new jsPDF('p', 'mm', 'a4',);
  otdPdf = new jsPDF('p', 'mm', 'a4',);
  lta: Form
  @Output() showChartEmitter = new EventEmitter()
  @Output() vendorDataEmitter = new EventEmitter()
  @Input() public data: any
  @Input() public vendorData: any
  @Input() public apiRequestData: any = {}
  @Input() public apiRequestType: any = 'post'
  @ViewChild('chart', { read: ElementRef, static: true }) chart!: ElementRef;
  // @ViewChild('chart',{static:true}) chart!:ElementRef
  listDropDown:any={}
  sendReport:any={}
  sendReportYes: any;
  sendReportNo: any;
  public loggedInUser: any;
  public listSelectedVendor: string[] = [];
  public listReport: any[] = []
  selected = [];
  listVendorDetail: any[] = []
  
  selectreports = [
    { value: 'Vendor ScoreCard', viewValue: 'Vendor ScoreCard' },
    { value: 'Buyer ScoreCard', viewValue: 'Buyer ScoreCard' },
    { value: 'Commodity ScoreCard', viewValue: 'Commodity ScoreCard' },
    { value: 'Plant ScoreCard', viewValue: 'Plant ScoreCard' },
    { value: 'Material ScoreCard', viewValue: 'Material ScoreCard' },
    { value: 'Mapout ScoreCard', viewValue: 'Mapout ScoreCard' },
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

  public isViewFirst: boolean ;
  // selectedValue: string;

  // toppings = new FormControl('');
  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

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
      def: 'vendorCode',
      name: 'Vendor Code',
      key: 'vendorCode',
      isSticky: true,
    },
    {
      def: 'vendorName',
      name: 'Vendor Name',
      key: 'vendorName',
      isSticky: true
    },

    {
      def: 'otdPercentage',
      name: 'OTD%',
      // key: 'otdPercentage',
       key: (i:any)=>{
        if(i.otdPercentage == 0){
          return 0
        }else{
          return parseFloat(i.otdPercentage).toFixed(2)
        }
       },
    },
    {
      def: 'ncrPercentage',
      name: 'NCR%',
      // key: 'ncrPercentage',
      key: (i:any)=>{
        if(i.ncrPercentage == 0){
          return 0
        }else{
          return parseFloat(i.ncrPercentage).toFixed(2)
        }
       },
    },
    {
      def: 'ppvPercentage',
      name: 'PPV%',
      // key: 'ppvPercentage',
      key: (i:any)=>{
        if(i.ppvPercentage == 0){
          return 0
        }else{
          return parseFloat(i.ppvPercentage).toFixed(2)
        }
       },
    },
    {
      def: 'ltaPercentage',
      name: 'LTA%',
      // key: 'ltaPercentage',
      key: (i:any)=>{
        if(i.ltaPercentage == 0){
          return 0
        }else{
          return parseFloat(i.ltaPercentage).toFixed(2)
        }
       },
    },
    {
      def: 'otdScore',
      name: 'OTD Score',
      // key: 'otdScore',
      key: (i:any)=>{
        if(i.otdScore == 0){
          return 0
        }else{
          return i.otdScore
        }
       },
    },
    {
      def: 'ncrScore',
      name: 'NCR Score',
      key: (i:any)=>{
        if(i.ncrScore == 0){
          return 0
        }else{
          return i.ncrScore
        }
       },
      // key: 'ncrScore',
    },
    {
      def: 'ppvScore',
      name: 'PPV Score',
      // key: 'ppvScore',
      key: (i:any)=>{
        if(i.ppvScore == 0){
          return 0
        }else{
          return i.ppvScore
        }
       },
    },
    {
      def: 'ltaScore',
      name: 'LTA Score',
      // key: 'ltaScore',
      key: (i:any)=>{
        if(i.ltaScore == 0){
          return 0
        }else{
          return i.ltaScore
        }
       },
    },
    {
      def: 'totalScore',
      name: 'Total Score',
      key: (i:any)=>{
        if(i.totalScore == 0){
          return 0
        }else{
          return i.totalScore
        }
       },
      // key: 'totalScore',
    },
    {
      def: 'spend',
      name: 'Spend',
      // key: 'spend',
      key: (i:any)=>{
        if(i.spend == 0){
          return 0
        }else{
          return '$ ' + Number(i.spend).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
       },
    },
    {
      def: 'spendPercentage',
      name: 'Spend%',
      key: (i:any)=>{
        if(i.spendPercentage == 0){
          return 0
        }else{
          return parseFloat(i.spendPercentage).toFixed(2)
        }
       },
      // key: 'spendPercentage',
    },
    {
      def: 'sourcedItem',
      name: 'Sourced Matl.',
      key: (i:any)=>{
        if(i.sourcedItem == 0){
          return 0
        }else{
          return i.sourcedItem
        }
       },
      // key: 'sourcedItem',
    },
    {
      def: 'sourcedPercentage',
      name: 'Sourced Matl.%',
      key: (i:any)=>{
        if(i.sourcedPercentage == 0){
          return 0
        }else{
          return parseFloat(i.sourcedPercentage).toFixed(2)
        }
       },
      // key: 'sourcedPercentage',
    },
    {
      def: 'receivedPOLines',
      name: 'Recieved PO Lines',
      key: (i:any)=>{
        if(i.receivedPOLines == 0){
          return 0
        }else{
          return i.receivedPOLines
        }
       },
      // key: 'receivedPOLines',
    },
    {
      def: 'receivedPOLinesPercentage',
      name: 'Recieved PO Lines %',
      key: (i:any)=>{
        if(i.receivedPOLinesPercentage == 0){
          return 0
        }else{
          return parseFloat(i.receivedPOLinesPercentage).toFixed(2)
        }
       },
      // key: 'receivedPOLinesPercentage',
    },
    {
      def: 'issuedPOLines',
      name: 'Issued PO Lines',
      key: (i:any)=>{
        if(i.issuedPOLines == 0){
          return 0
        }else{
          return i.issuedPOLines
        }
       },
      // key: 'issuedPOLines',
    },
    {
      def: 'issuedPOLinesPercentage',
      name: 'Issued PO Lines%',
      key: (i:any)=>{
        if(i.issuedPOLinesPercentage == 0){
          return 0
        }else{
          return parseFloat(i.issuedPOLinesPercentage).toFixed(2)
        }
       },
      // key: 'issuedPOLinesPercentage',

    },
  ];
  
  commodityColumns = [
    {
      def: 'compare',
      name: 'Compare',
      key: 'compare',
      isSticky: true,
      projection: true,
      cannotExport: true,
    },
    {
      def: 'plantCode',
      name: 'Plant',
      key: 'plantCode',
      isSticky: true,
    },
    {
      def: 'commodity',
      name: 'Commodity',
      key: 'commodity',
      isSticky: true
    },

    {
      def: 'otdPercentage',
      name: 'OTD%',
      key: 'otdPercentage',
    },
    {
      def: 'ncrPercentage',
      name: 'NCR%',
      key: 'ncrPercentage',
    },
    {
      def: 'ppvPercentage',
      name: 'PPV%',
      key: 'ppvPercentage',
    },
    {
      def: 'ltaPercentage',
      name: 'LTA%',
      key: 'ltaPercentage',
    },
    {
      def: 'otdScore',
      name: 'OTD Score',
      key: 'otdScore',
    },
    {
      def: 'ncrScore',
      name: 'NCR Score',
      key: 'ncrScore',
    },
    {
      def: 'ppvScore',
      name: 'PPV Score',
      key: 'ppvScore',
    },
    {
      def: 'ltaScore',
      name: 'LTA Score',
      key: 'ltaScore',
    },
    {
      def: 'totalScore',
      name: 'Total Score',
      key: 'totalScore',
    },
    {
      def: 'spend',
      name: 'Spend',
      key: 'spend',
    },
    {
      def: 'spendPercentage',
      name: 'Spend%',
      key: 'spendPercentage',
    },
    {
      def: 'sourcedItem',
      name: 'Sourced Matl.',
      key: 'sourcedItem',
    },
    {
      def: 'sourcedPercentage',
      name: 'Sourced Matl.%',
      key: 'sourcedPercentage',
    },
    {
      def: 'receivedPOLines',
      name: 'Recieved PO Lines',
      key: 'receivedPOLines',
    },
    {
      def: 'receivedPOLinesPercentage',
      name: 'Recieved PO Lines %',
      key: 'receivedPOLinesPercentage',
    },
    {
      def: 'issuedPOLines',
      name: 'Issued PO Lines',
      key: 'issuedPOLines',
    },
    {
      def: 'issuedPOLinesPercentage',
      name: 'Issued PO Lines%',
      key: 'issuedPOLinesPercentage',

    },
  ];
  statisticColumns = [
    {
      def: 'all',
      name: 'Average',
      key: ((i: any) => {
       let message = ""
        if(this.apiRequestData === null || this.apiRequestData === undefined )
        return "ALL";
        if(!this.listDropDown.plantDropDown)
        return
          if(this.apiRequestData.plantCode.includes(","))
      {
        message = 'All Plants ,';
      }else{
          message  =  this.listDropDown.plantDropDown.filter((i:any)=> i.plantCode ==this.apiRequestData.plantCode)[0].plantName + " ,"; 
      }


      if(this.apiRequestData.commodity.includes(","))
      {
        message = message + " All Commodity "
      }else
      message = message  +" "+ this.apiRequestData.commodity

        return message
      }),
      isSticky: true,
    },
    {
      def: 'otd_percentage',
      name: 'OTD%',
      // key: 'otd_percentage',
      key: (i:any)=>{
        if(i.otd_percentage == 0){
          return 0
        }else{
          return parseFloat(i.otd_percentage).toFixed(2)
        }
       },
    },
    {
      def: 'ncr_percentage',
      name: 'NCR%',
      key: (i:any)=>{
        if(i.ncr_percentage == 0){
          return 0
        }else{
          return parseFloat(i.ncr_percentage).toFixed(2)
        }
       },
      // key: 'ncr_percentage',
    },
    {
      def: 'ppv_percentage',
      name: 'PPV%',
      key: (i:any)=>{
        if(i.ppv_percentage == 0){
          return 0
        }else{
          return parseFloat(i.ppv_percentage).toFixed(2)
        }
       },
      // key: 'ppv_percentage',
    },
    {
      def: 'lta_percentage',
      name: 'LTA%',
      key: (i:any)=>{
        if(i.lta_percentage == 0){
          return 0
        }else{
          return parseFloat(i.lta_percentage).toFixed(2)
        }
       },
      // key: 'lta_percentage',
    },
    {
      def: 'otd_score',
      name: 'OTD Score',
      key: (i:any)=>{
        if(i.otd_score == 0){
          return 0
        }else{
          return i.otd_score
        }
       },
      // key: 'otd_score',
    },
    {
      def: 'ncr_score',
      name: 'NCR Score',
      key: (i:any)=>{
        if(i.ncr_score == 0){
          return 0
        }else{
          return i.ncr_score
        }
       },
      // key: 'ncr_score',
    },
    {
      def: 'ppv_score',
      name: 'PPV Score',
      key: (i:any)=>{
        if(i.ppv_score == 0){
          return 0
        }else{
          return i.ppv_score
        }
       },
      // key: 'ppv_score',
    },
    {
      def: 'lta_score',
      name: 'LTA Score',
      key: (i:any)=>{
        if(i.lta_score == 0){
          return 0
        }else{
          return i.lta_score
        }
       },
      // key: 'lta_score',
    },
    {
      def: 'totalScore',
      name: 'Total Score',
      key: (i:any)=>{
        if(i.totalScore == 0){
          return 0
        }else{
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
    private translateService:TranslateService,
    private _emailService : ScoreCardEmailService) {
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
    // this.getCheckedItemList();
  }

  ngOnInit(): void {
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    // this._apiService.isCompareLoader$.subscribe((res: boolean) => {
    //   this.isCompareLoading = res
    // })

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
      default:
        break;
    }


    this._apiService.get(`${api.vendorDropdown}?tenantId=${this.loggedInUser?.tenantID}`)
      .subscribe((res: any) => {
        this.listDropDown = res.data
        this.listAllVendors = res.data?.vendorDropDown.filter((i:any)=> i.vendorCode !== "ALL")
         //gonna use listAllVendor For SendReports
        this.listReport = res.data.reportDropDown
        this.listReport = this.listReport.filter((i: any) => i.id !== 0)
      })


      
      
    //   this._apiService.get(`${api.adminKpiSetting}?tenantId=${this.loggedInUser?.tenantID}`)
    //   .subscribe((res: any) => {
    //     this.sendReport = res.data.adminSettingList;
    //     //console.log('hello ' + JSON.stringify(this.sendReport[7].value) + ' and ' + JSON.stringify(this.sendReport[8].value));
       
    //     this.sendReportYes = this.sendReport[7].value;
    //     this.sendReportNo = this.sendReport[8].value;
      
    //     if(this.sendReportYes == '0'){
    //       this.sendReportYes = false
    //       this.sendReportNo = true
    //     }else{
    //       this.sendReportYes = true
    //       this.sendReportNo = false
    //     }

    //     // this.listAllVendors = res.data?.vendorDropDown.filter((i:any)=> i.vendorCode !== "ALL")
    //     //  //gonna use listAllVendor For SendReports
    //     // this.listReport = res.data.reportDropDown
    //     // this.listReport = this.listReport.filter((i: any) => i.id !== 0)
    //   }
    
    
    // )


// Value ko parse karein aur boolean format mein set karein
this.isViewFirst = JSON.parse(localStorage.getItem('kpiSettingSendReportValue') || 'false');
  }


  async ngOnChanges(changes: SimpleChanges) {
    
  }



  onDisablePopUp(){
    if(this.selected.length<1 || this.listSelectedVendor.length<1 || !this.isCompareLoading)
    return true;
    
    

    return false;
  }







  async openDialog() {
    // this.showChartEmitter.emit(true);
  
    if (!this.apiRequestData) {
      this._notificationService.push("No data set selected", 2);
      return;
    }
  
    if (this.selected.length < 1) {
      this._notificationService.push("At least 1 report must be selected", 2);
      return;
    }
  
    if(this.selected.length == 1 && this.selected.includes(1))
      {
        for(let index = 2; index < 14; index++)
        {
           this.selected.push(index)
        }
      }
      
    if (this.listSelectedVendor.length < 1) {
      this._notificationService.push("At least 1 vendor must be selected", 2);
      return;
    }
    let vendorList = this.listAllVendors.filter((i:any)=> this.listSelectedVendor.includes(i.vendorCode))
    let message = this.getMessage([],2);
    let reportsData = []
    vendorList.forEach((i:any)=>{
      reportsData.push({code : i.vendorCode , name : i.vendorName , contact : i.phoneNo , email : [i.email] , cc : []})
    })

   

    if(!this.isViewFirst){
      this.sendReportsModelForNotViewFirst(reportsData)
      return;
    }



    const dialogRef = this.dialog.open(SendreportdialogComponent, {
      panelClass: 'sendreportcontainer',
      data: {
        usersData : reportsData,
        message: this._emailService.message,
        subject : 'Vendor ScoreCard for [Vendor Name] Between [Start date] to [End date]'
      },
    });
  

    dialogRef.afterClosed().subscribe((res:any)=>{
      if(res === null)
        return

      this.sendReportsModel(res)
    })

    
  }

  sendReportsModel(data : any){
    
    this.apiRequestData.userId = this.loggedInUser.userID
    let allVendorCode = ''
   this.listAllVendors.forEach((element:any) => {
    allVendorCode = allVendorCode + element.vendorCode+","
   }); 
   allVendorCode = allVendorCode.slice(0,-1);
   this.apiRequestData.allVendorCode = allVendorCode
   this.apiRequestData.userId = this.loggedInUser.userID
   let sendResponseModel = {
      listReportModel : data,
      apiRequestData  : this.apiRequestData,
      listSelectedReports : this.selected  
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
     console.log("📡 Vendor Report API Endpoint:", api.sendVendorReport);
console.log("📦 Vendor Payload:", sendResponseModel);
console.log("🌍 Full post URL:", window.location.origin + api.sendVendorReport);

    this._apiService.post(api.sendVendorReport,sendResponseModel)
    .subscribe((res: any)=>{
      this._notificationService.push("Reports sent successfully",1)
      console.log(res);

     

    },(e:any)=>{
      this._notificationService.push("Reports not sent ",2)
    })

  }



  sendReportsModelForNotViewFirst(data : any){
    
    this.apiRequestData.userId = this.loggedInUser.userID
    let allVendorCode = ''
   this.listAllVendors.forEach((element:any) => {
    allVendorCode = allVendorCode + element.vendorCode+","
   }); 
   allVendorCode = allVendorCode.slice(0,-1);
   this.apiRequestData.allVendorCode = allVendorCode
   this.apiRequestData.userId = this.loggedInUser.userID
   let sendResponseModel = {
      listReportModel : {listReportToSend:data,message:this._emailService.message,subject : 'Vendor ScoreCard for [Vendor Name] Between [Start date] to [End date]'},
      apiRequestData  : this.apiRequestData,
      listSelectedReports : this.selected  
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
     console.log("📡 Vendor Report API Endpoint:", api.sendVendorReport);
console.log("📦 Vendor Payload:", sendResponseModel);
    this._apiService.post(api.sendVendorReport,sendResponseModel)
    .subscribe((res: any)=>{
      this._notificationService.push("Reports sent successfully",1)
      console.log(res);
    },(e:any)=>{
      this._notificationService.push("Reports not sent ",2)
    })

  }












  async generateAndEmitPdf(elementId: string, chartData: any) {
    return this.generateOtdPdf(elementId, chartData);
      
  }
  
  async generateOtdPdf(name: string, chartData: any) {
    return new Promise<string>((resolve) => {
      const element = document.getElementById(name);
      element.innerHTML = chartData;
      this.otdPdf.html(element.innerHTML, {
        callback: (pdf) => {
          const pdfString = pdf.output('datauristring');

          if(this.isViewFirst)
          pdf.save()
          element.innerHTML=""
          resolve(pdfString);
        },
        margin: [10, 10, 10, 10],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 90,
        windowWidth: 675, // window width in CSS pixels
      });
    });

    
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

  // Check All Checkbox Checked
  isAllSelected() {
    this.masterSelected = this.checklist.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
  }

  check(id) {
    return this.checklist[id].isSelected = true;
  }

  // Get List of Checked Items
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

     
  if(this.selected.length === 1 && this.selected.includes(1))
    {
      this.previousArray.push(1);
    }
  
  if(data.value.includes(1)){
    
    if(this.selected.length !== 1 && this.selected.includes(1))
    {
        this.selected = [1]
        for (let index = 2; index < 14; index++) 
        {
          this.previousArray.push(index) 
        }
        return
    }

    if(this.selected.length !== this.previousArray.length && this.selected.length < this.previousArray.length){
      this.selected = this.selected.filter((i:any)=>  i !==1)
      this.previousArray = this.selected;
      return
    }
    for (let index = 2; index < 14; index++) {
      this.selected.push(index)
      this.previousArray.push(index) 
    }
    }
    else
    {
      
      if(this.previousArray.length !== this.selected.length && (this.previousArray.includes(1)))
        {
          this.selected = [];
          this.previousArray = [];
        }
        else{

          this.previousArray = this.selected
        }
    }
    
    this.cdr.detectChanges();


}



  getTableRecord(data: any) {
    this.listVendorDetail = data;
  }

  getMessage(data:any,vendorDetails:any){
   
  let message = "<p>[THIS IS AN AUTOMATED MESSAGE - PLEASE DO NOT REPLY DIRECTLY TO THIS EMAIL]</p>";
  message = message + "<p>" + 'start date' + " to " + 'end date' + "</p>"
  message = message + "<p>Your On time Delivery % is " + '60%' + "</p>"
  message = message + "<p>Price Variance % is " + '0.3' + " (Below -3% is favorable)  </p>"
  message = message + "<p>NCR QTY% is " + '0.1' + " (0% is the number we want to see)  </p>"
  message = message + "<p>Lead Time Accuracy% is " + '30' + " (Above 95% is favorable) </p>"
  message = message + "<p>Please work with your Buyer to verify the detail and improve your Score.Attached you can find the ScoreCard Detail. If you have any question, please contact our buyers for more information.</p>"

  return message
  }

  getEmail(data:any,vendorDetails:any){
  return vendorDetails.filter((i:any)=>i.vendorCode == data)[0].email
  }

  getCheckedDataOutput(eventData: any) {
 
    if (eventData) {
      this.listVendorDetail.forEach((element: any) => {
        if (!this.listSelectedVendor.includes(element.vendorCode)) {
          this.listSelectedVendor.push(element.vendorCode);
        }
      });
    } else {
      this.listSelectedVendor = []
    }
  }

  onCheckBoxClick(event: any, data: any) {
    
    if (event.checked == true) {

      // if(this.listSelectedVendor.length>4)
      // {
      //   event.checked = false
      //   this._notificationService.push("Can not select more then 5 vendor for comparison",2);
      //   return
      // }


      if (!this.listSelectedVendor.includes(data.vendorCode))
        this.listSelectedVendor.push(data.vendorCode)
    } else {
      if (this.listSelectedVendor.includes(data.vendorCode))
        this.listSelectedVendor.splice(this.listSelectedVendor.indexOf(data.vendorCode), 1);
    }

  }

  isVendorSelected(data: any) {
    return this.listSelectedVendor.includes(data?.vendorCode)
  }


  disablePopUpModelButton(){
    if(this.listSelectedVendor.length<1)
    return true;
  return false;
  }
 

  openModel(tableName: string) {
    if(this.listSelectedVendor.length<1)
    {
      this._notificationService.push("no vendor selected", 2)
      return
    }

    this._apiService.isCompareLoader$.next(true)
    if (this.apiRequestData === null || this.apiRequestData === undefined) {
      this._notificationService.push("no data selected", 2)
      return
    }
    let apiRoute: string = ''

    let data = {...this.apiRequestData}


    let dataSource;
    let columns;
    let heading;
    let totalRecords;

    switch (this.subtitle) {
      case 'Vendor':
        apiRoute = api.vendorDetails
        break;
      case 'Plant':
        apiRoute = api.plantDetails
        break;
      case 'Buyer':
        break;
      case 'Commodity':
        apiRoute = api.commodityDetails
        break;
      case 'Material':
        break;
      default:
        break;
    }
    let code: any = ''
    this.listSelectedVendor.forEach((i: any) => {
      code = code + i + ","
    })
    code = code.slice(0, -1)
    data.vendorCode = code;
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

    data.pageNumber = 1;
    data.pageSize = 10000;
    data.searchText = ""
    switch (tableName) {
      case 'otdDetail':
        data.detailType='OTD'
        break;
      case 'nrcDetail':
        data.detailType='NCR'
        break;
      case 'ppvDetail':
        data.detailType='PPV'
        break;
      case 'ltaDetail':
        data.detailType='LTA'
        break;
    
      default:
        break;
    }

    let sortBy =''
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
            key: (i:any)=> {
              if(i.net_Order_Price === null || i.net_Order_Price === undefined)
              return ""

              var netOrderPrice = +i.net_Order_Price
             return "$"+ netOrderPrice.toLocaleString()
          }
          },


          {
            def: 'currency',
            name: 'Currency',
            key: 'currency',
          },              
        ];
        break;
      case 'nrcDetail':
        heading = 'NCR Details'
        // dataSource = res?.data?.list_NCR_Details;
        // totalRecords = res?.data?.totalRecords;
        sortBy ='posting_Date'
        columns = [
            {
              def: 'NCR',
              name: 'NCR?',
              // key: 'complaint_Qty',
              key: (i: any) =>  i.complaint_Qty == "0"? "NO":"YES" ,
            },
          {
            def: 'complaint_Qty',
            name: 'Complaint quantity',
            // key: 'complaint_Qty',
            key: (i: any) =>  i.complaint_Qty == "0"? 0:i.complaint_Qty ,
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
            key: (i:any)=>i.created_On === ""? "N/A":i.created_On,
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
            key: (i:any)=> {
              if(i.material_Cost === null || i.material_Cost === undefined)
              return ""

              var materialCost = +i.material_Cost
             return "$"+ materialCost.toLocaleString()
          }
          },
          {
            def: 'ncR_Cost',
            name: 'NCR cost',
            // key: 'ncR_Cost',
            key: (i:any)=> {
              if(i.ncR_Cost === null || i.ncR_Cost === undefined)
              return ""

              var ncrCost = +i.ncR_Cost
             return "$"+ ncrCost.toLocaleString()
          }
          },
          {
            def: 'completionDate',
            name: 'Completion date',
            key: (i: any) =>
            {
            if(i.completionDate === null || i.completionDate === undefined)return "N/A"
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
                return "$"+cost.toLocaleString()
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
            key: (i:any)=> {
              if(i.latestPrice === null || i.latestPrice === undefined)
              return ""

              var latestPrice = +i.latestPrice
             return "$"+ latestPrice.toLocaleString()
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
            key: (i:any)=> {
              if(i.lastPrice === null || i.lastPrice === undefined)
              return ""

              var lastPrice = +i.lastPrice
             return "$"+ lastPrice.toLocaleString()
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

    this.apiRequestData.vendorCode = code
    this.dialog.open(PopuptableComponent, {
      height: '40%',
      width:'60%',
      panelClass:'app-detail',
      data: {
        route:apiRoute,
        apiRequestData:data,
        columns: columns,
        heading: heading,
        isPopUp: true,
        sortBy : sortBy
      },
      position: { top: '5%', left: '10%' },
    })







    delete data.detialType
    

  }


  emitSelectedVendor() {
    this._apiService.isCompareLoader$.next(true)
    if (this.apiRequestData === null || this.apiRequestData === undefined) {
      this._apiService.isCompareLoader$.next(false)
      this._notificationService.push("Data set not selected", 2)
      return
    }
    
    if (this.listSelectedVendor.length < 1) {
      this._apiService.isCompareLoader$.next(false)
      this._notificationService.push("Atleat 1 vendor must be selected", 2)
      return
    }


    
    if (this.listSelectedVendor.length > 5) {
      this._apiService.isCompareLoader$.next(false)
      this._notificationService.push("Can not select more then 5 vendors for comparison", 2)
      return
    }

    let data: any = ''
    this.listSelectedVendor.forEach((i: any) => {
      data = data + i + ","
    })
    data = data.slice(0, -1)
    // this.apiRequestData.vendorCode = data
    this.isComparedClick  = true;
    this.isCompareLoading = true
    this.vendorDataEmitter.emit(data)

  }

  async getVendorWiseUriString(){
    return new Promise((resolve)=>{
      
    })
  }


  onTestClick() {
    this.router.navigate(['user/ltadetail'])
  }






  
}


