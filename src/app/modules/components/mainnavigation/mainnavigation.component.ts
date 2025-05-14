import { ChangeDetectorRef, Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { element } from 'protractor';
import { EMPTY } from 'rxjs';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';





@Component({
  selector: 'app-mainnavigation',
  templateUrl: './mainnavigation.component.html',
  styleUrls: ['./mainnavigation.component.css']
})



@Injectable({
  providedIn: 'root' // just before your class
})
export class MainnavigationComponent implements OnInit {
  public currentHref: string = "";
  subscription: any;
  public userRoutes:any[]
  constructor(public router: Router,private cdr: ChangeDetectorRef,
    private _apiService :GeneralApiService,
    private translateService :TranslateService ) {
  }

  

  ngOnInit(): void {
    
    

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })

    this.userRoutes = this.superAdminRoute
    
   }
  
  toggleIcon: boolean = true;
  

onLiClick(data:any){
  data.showChildMenu = !data.showChildMenu
}

onMenuClick(data:any){
  var element = document.getElementById(data.id)
element.classList.contains('mm-active')? element.classList.remove('mm-active'):element.classList.add('mm-active')
}

    toggleLoveIcon() {
        this.toggleIcon = !this.toggleIcon;
    }
  
    

    getChildRoute(data:any){
        let requriedData =this.userRoutes.filter((i:any)=>i.parentId == data.id)
        return requriedData
      
    }

    adminRoute = [
      {
        id:1,
        name:'Dashboard',
        route:'/',
        logoSource:'../../../../assets/images/dashboard.png',
        isParent:false,
        showChildMenu:false,
        parentId:null
      },
      {
        id:2,
        name:'PO manager',
        route:'/',
        logoSource:'../../../../assets/images/pomanager.png',
        isParent:true,
        showChildMenu:false,
        parentId:null
      },
      {
        id:3,
        name:'Open PO Expeditor',
        route:'/openpoexpoeditor',
        logoSource:'../../../../assets/images/dashboard.png',
        isParent:false,
        showChildMenu:false,
        parentId:2
      },
      {
        id:4,
        name:'Open PO Trendlines',
        route:'/openpotrendlines',
        logoSource:'../../../../assets/images/dashboard.png',
        isParent:false,
        showChildMenu:false,
        parentId:2
      },
      {
        id:5,
        name:'Open PO Analysis',
        route:'/openpoanalysis',
        logoSource:'../../../../assets/images/dashboard.png',
        isParent:false,
        showChildMenu:false,
        parentId:2
      },
      {
        id:6,
        name:'Report History',
        route:'/history',
        logoSource:'../../../../assets/images/reporthistory.png',
        isParent:false,
        showChildMenu:false,
        parentId:null
      },
      {
        id:7,
        name:'Subscription and Payment',
        route:'/subscriptionAndPayment',
        logoSource:'../../../../assets/images/subscriptionpayment.png',
        isParent:false,
        showChildMenu:false,
        parentId:null
      },
      {
        id:8,
        name:'Admin',
        route:'/',
        logoSource:'../../../../assets/images/admin.png',
        isParent:true,
        showChildMenu:false,
        parentId:null
      },
      {
        id:9,
        name:'Raw Data Setting',
        route:'/raw-data-setting',
        logoSource:'',
        isParent:false,
        showChildMenu:false,
        parentId:8
      },
      {
        id:10,
        name:'Data',
        route:'/',
        logoSource:'.../../../../assets/images/datalog.png',
        isParent:true,
        showChildMenu:false,
        parentId:null
      },
      {
        id:11,
        name:'Import Data',
        route:'/importdata',
        logoSource:'.../../../../assets/images/datalog.png',
        isParent:false,
        showChildMenu:false,
        parentId:10
      },
      {
        id:12,
        name:'Logs',
        route:'/dialog',
        logoSource:'.../../../../assets/images/datalog.png',
        isParent:false,
        showChildMenu:false,
        parentId:10
      },
      {
        id:13,
        name:'How to use',
        route:'/howtouse',
        logoSource:'../../../../assets/images/howtouse.png',
        isParent:false,
        showChildMenu:false,
        parentId:null
      },
      {
        id:14,
        name:'Abourt Score us',
        route:'/about',
        logoSource:'../../../../assets/images/about.png',
        isParent:false,
        showChildMenu:false,
        parentId:null
      },
      

    ]


    superAdminRoute = [
      {
        id:1,
        name:'Dashboard',
        route:'/',
        logoSource:'../../../../assets/images/dashboard.png',
        isParent:false,
        showChildMenu:false,
        parentId:null
      },
      {
        id:2,
        name:'ScoreCard',
        route:'/',
        logoSource:'../../../../assets/images/scorecard.png',
        isParent:true,
        parentId:null,
        showChildMenu:false,
      },
      {
        id:3,
        name:'Dashboard',
        route:'superadmindashboard',
        logoSource:'../../../../assets/images/dashboard.png',
        isParent:false,
        parentId:2,
        showChildMenu:false
      },
      {
        id:4,
        name:'Manage Users',
        route:'/manageusers',
        logoSource:'../../../../assets/images/dashboard.png',
        isParent:false,
        showChildMenu:false,
        parentId:2
      },
      {
        id:5,
        name:'Referral Management',
        route:'referralManagement',
        logoSource:'../../../../assets/images/dashboard.png',
        isParent:false,
        showChildMenu:false,
        parentId:2
      },
      {
        id:6,
        name:'PO Manager',
        route:'/',
        logoSource:'../../../../assets/images/scorecard.png',
        isParent:true,
        showChildMenu:false,
        parentId:null
      },
      {
  
        id:7,
        name:'Dashboard',
        route:'/superadmindashboard',
        logoSource:'../../../../assets/images/dashboard.png',
        isParent:false,
        showChildMenu:false,
        parentId:6
      },
      {
        id:8,
        name:'Manage Users',
        route:'/manageusers',
        logoSource:'../../../../assets/images/dashboard.png',
        isParent:false,
        showChildMenu:false,
        parentId:6
      },
      {
        id:9,
        name:'Referral Management',
        route:'/referralmanagement',
        logoSource:'../../../../assets/images/dashboard.png',
        isParent:false,
        showChildMenu:false,
        parentId:6
      },
      {
        id:10,
        name:'Complete',
        route:'/',
        logoSource:'../../../../assets/images/scorecard.png',
        isParent:true,
        showChildMenu:false,
        parentId:null
      },
      {
        id:11,
        name:'Dashboard',
        route:'/superadmindashboard',
        logoSource:'../../../../assets/images/dashboard.png',
        isParent:false,
        showChildMenu:false,
        parentId:10
      },
      {
        id:12,
        name:'Manage Users',
        route:'/manageusers',
        logoSource:'../../../../assets/images/dashboard.png',
        showChildMenu:false,
        isParent:false,
        parentId:10
      },
      {
        id:13,
        name:'Referral Management',
        route:'/referralmanagement',
        logoSource:'../../../../assets/images/dashboard.png',
        isParent:false,
        showChildMenu:false,
        parentId:10
      },
    ]


    poRoute = []


    maindashboardArray = [
      '/admin',
      '/admin/index',
      '/admin/maindashboard',
      '/admin/index-2',
      '/admin/index-3',
      '/admin/index-4',
      '/admin/coin-details',
      '/admin/my-wallets',
      '/admin/transactions',
      '/admin/portofolio',
      '/admin/market-capital',
      '/admin/referralmanagement',     
    ];

    headingArray = {
      '/admin': {heading: 'Dashboard'},
      '/admin/index': {heading: 'Dashboard'},
      '/admin/maindashboard': {heading: 'Dashboard'},
      // '/admin/index-2': {heading: 'Referral'},
      // '/admin/index-3': {heading: 'Referral'},
      // '/admin/index-4': {heading: 'Referral'},
      // '/admin/coin-details': {heading: 'Referral'},
      // '/admin/my-wallets': {heading: 'Referral'},
      // '/admin/transactions': {heading: 'Referral'},
      // '/admin/portofolio': {heading: 'Referral'},
      // '/admin/market-capital': {heading: 'Referral'},
      '/admin/superadmindashboard': {heading: 'Dashboard'},     
      '/admin/referralmanagement': {heading: 'Referral Management'},     
      '/admin/managescorecardusers': {heading: 'Manage Scorecard Users'},     
      '/admin/managepousers': {heading: 'Manage PO Users'},     
      '/admin/managecompleteusers': {heading: 'Manage Complete Users'},     
      '/admin/userprofile': {heading: 'Edit Profile'},
      '/admin/aboutscoreus': {heading: 'About ScoreUs'},     
      '/admin/inviteuser': {heading: 'Invite Vendor'},     
      '/admin/datalog': {heading: 'Data Log'},     
      '/admin/current-users': {heading: 'Current Users'},     
      '/admin/target-settings': {heading: 'Target Settings'},     
      '/admin/raw-data-setting': {heading: 'Raw Data Setting'},     
      '/admin/kpi-parameter-setting': {heading: 'KPI Parameter Setting'},    
      '/admin/vendor-scorecard': {heading: 'Vendor ScoreCard'},     
      '/admin/scoreus-buyer-scorecard': {heading: 'Buyer ScoreCard'},     
      '/admin/scoreus-commodity-scorecard': {heading: 'Commodity ScoreCard'},     
      '/admin/scoreus-plant-scorecard': {heading: 'Plant ScoreCard'},     
      '/admin/scoreus-material-scorecard': {heading: 'Material ScoreCard'},     
      '/admin/mapout-vendor': {heading: 'Mapout Vendors'},     
      '/admin/kpiparameter': {heading: 'KPI Parameter Setting'},     
      '/admin/subscriptionpayment': {heading: 'Subscription & Payment'},
      '/admin/referafriend': {heading: 'Refer a Professional'},
      '/admin/subsription-payment-inviteuser' : {heading: 'Invite User'},
      '/admin/packageupgrade' : {heading: 'Package Upgrade'},
      '/admin/reporthistory'  : {heading: 'Report History'},
      '/admin/payment' : {heading: 'Payment'},    
      '/admin/howtouse' : {heading: 'How to Use'},    
      '/admin/buyersreporthistory' : {heading: 'Buyers Report History'},    
      '/admin/commoditiesreporthistory' : {heading: 'Commodities Report History'},    
      '/admin/plantsreporthistory' : {heading: 'Plants Report History'},    
      '/admin/vendorsreporthistory' : {heading: 'Vendors Report History'},    
      '/admin/materialsreporthistory' : {heading: 'Materials Report History'},    
      '/admin/openordersreporthistory' : {heading: 'Open Orders Report History'},    
      '/admin/pastdueordersreporthistory' : {heading: 'Past Due Orders'},    
      '/admin/ackdneededorderseporthistory' : {heading: 'Ack’d Needed Orders'},    
      '/admin/futurepastduereporthistory' : {heading: 'Future Past Due'},    
      '/admin/importdata' : {heading: 'Import Data'},    
      '/admin/openpostatus' : {heading: 'Open PO Status'},    
      '/admin/openpotrendlines' : {heading: 'Open PO Trendlines'},    
      '/admin/openpoexpeditor' : {heading: 'Open PO Expeditor'},    
      '/admin/pouserdashboard' : {heading: 'Dashboard'},    
      '/admin/openpoanalysis' : {heading: 'Open PO Analysis'},    
      '/admin/poreporthistory' : {heading: 'Report History'},    
      '/admin/openpotrendlinesuseradmin' : {heading: 'Open PO Trendlines'},    
    };

    
    apsArray = [
        //'/admin/app-profile',
         '/admin/post-details',
         '/admin/email-compose',
         '/admin/email-inbox',
         '/admin/email-read',
         '/admin/app-calender',
         '/admin/ecom-product-grid',
         '/admin/ecom-product-list',
         '/admin/ecom-product-detail',
         '/admin/ecom-product-order',
         '/admin/ecom-checkout',
         '/admin/ecom-invoice',
         '/admin/ecom-customers',
         
	];
    
    chartsArray = [
         '/admin/chart-chartjs',
         '/admin/chart-apex',
         '/admin/apex-line',
         '/admin/apex-area',
         '/admin/apex-column',
         '/admin/apex-bar',
         '/admin/apex-mixed',
         '/admin/apex-timeline',
         '/admin/apex-candlestick',
         '/admin/apex-pie',
         '/admin/apex-radar',
         '/admin/apex-radialbar',
         '/admin/apex-polar-area',
         '/admin/apex-bubble',
         '/admin/apex-scatter',
         '/admin/apex-heatmap',
         '/admin/apex-treemap',
         '/admin/apex-sparklines',
	];
    
  
  
}