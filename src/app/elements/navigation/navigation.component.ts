import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NavigationService } from 'src/app/navigation.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})



export class NavigationComponent implements OnInit {
  loggedInUser :any
  isReferralAllowed : boolean = true
  public currentHref: string = "";
  subscription: any;
  isMmActive: boolean = false;
  userRoutes: any[];
  constructor(private location: Location,
    private router: Router,
    private _apiService:GeneralApiService,
    private translateService:TranslateService,
    private cdr : ChangeDetectorRef,
    private renderer: Renderer2, private el: ElementRef) {
   

      // /user/plan new route
        //  /user/mybills new route
    router.events.subscribe((val:any) => {
      if(location.path() != ''){
        this.currentHref = location.path();
        
        if(this.currentHref.includes('/admin/userDetail/') || this.currentHref.includes('/admin/userdetail/'))
        this._apiService.route$.next('User Detail')
        else
          {
        this._apiService.route$.next(this.headingArray[this.currentHref].heading)
          }
        // if (val instanceof NavigationEnd) {
        //   this.navigationService.emitNavChangeEvent(this.headingArray[this.currentHref].heading);
        // }
        
      } else {
        this.currentHref = 'Home'
      }
    });
  }
  
  onClick(data:string){
    this.router.events.subscribe((val:any) => {
      if(this.location.path() != ''){
        this.currentHref = this.location.path();
        if(this.currentHref.includes('/admin/userDetail/') || this.currentHref.includes('/admin/userdetail/'))
        {
          this._apiService.route$.next('User Detail')

        }
        else
          {
          this._apiService.route$.next(this.headingArray[this.currentHref].heading)
          }
       
           // if (val instanceof NavigationEnd) {
           //   this.navigationService.emitNavChangeEvent(this.headingArray[this.currentHref].heading);
           // }
        
      } else {
        this.currentHref = 'Home'
      }
    });
  }




  onMenuClick(data:any){
    data.showChildMenu = ! data.showChildMenu
    var element = document.getElementById(data.id)
  element.classList.contains('mm-active')? element.classList.remove('mm-active'):element.classList.add('mm-active')
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
      showChildMenu:true,
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




  getChildRoute(data:any){
    let requriedData =this.userRoutes.filter((i:any)=>i.parentId == data.id)
    return requriedData
  
}


  mainMenuClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
  clickedElement.parentElement.classList.toggle('mm-active');
  this.cdr.detectChanges();
  event.preventDefault();
  }

    // var heading = localStorage.getItem('page')
    // if(heading)
    // localStorage.removeItem('page')

    // localStorage.setItem('page',data);
    // this._apiService.route$.next(data);
  
  

  ngOnInit(): void { 
    
    var user = localStorage.getItem('userData')
    if(user)
    this.loggedInUser = JSON.parse(user)
    

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    this._apiService.isReferralAllowed$.subscribe((res:any)=>{
      this.isReferralAllowed = res
    })
    
    
    this.userRoutes = this.adminRoute
    this.cdr.detectChanges()
    }
  
  toggleIcon: boolean = true;
  
    toggleLoveIcon() {
        this.toggleIcon = !this.toggleIcon;
    }
    
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
      '/admin/refSettings' : {heading : 'Settings'},
      '/user/plans' : { heading : 'Plans'},
      '/user/mybills' : { heading : 'My Bills'},
      '/user/vendorscorecard' : {heading : "Vendor Scorecard"},      
      '/user/commodityScoreCard' : {heading : "Commodity Scorecard"},      
      '/user/plantScoreCard' : {heading : "Plant Scorecard"},      
      '/user/buyerScoreCard' : {heading : "Buyer Scorecard"},      
      '/user/materialScoreCard' : {heading : "Material Scorecard"},      
      '/user/vendor/vendorscore' : {heading : "Vendor Scorecard"},
      'user/vendor/aboutscoreus': {heading: 'About ScoreUs'},      
      '/admin': {heading: 'Dashboard'},
      '/admin/index': {heading: 'Dashboard'},
      '/admin/maindashboard': {heading: 'Dashboard'},
      '/admin/superadmincompletedashboard': {heading: 'Complete Dashboard'},
      '/admin/superadminscorecarddashboard': {heading: 'Scorecard Dashboard'},
      '/admin/superadminpodashboard': {heading: 'PO Dashboard'},
      '/admin/referralpomanagement': {heading :'Referral PO Management' },
      '/admin/referralscorecardmanagement': {heading :'Referral Management' },
      '/admin/referralusermanagement': {heading :'Referral Management' },
      '/admin/managescorecardusers' : {heading : 'Manage Scorecard User'},         
      '/admin/managepousers' : {heading : 'Manage PO User'},         
      '/admin/managecompleteusers' : {heading : 'Manage complete user'},         
      '/user/subsription-payment-inviteuser?id=1' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=2' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=3' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=4' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=5' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=6' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=7' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=8' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=9' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=10' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=11' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=12' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=13' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=14' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=15' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=16' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=17' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=18' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=19' : {heading : 'Buy Users & Vendors'},
      '/user/subsription-payment-inviteuser?id=20' : {heading : 'Buy Users & Vendors'},
      '/user/invitevendor' : {heading : 'Invite Vendor'},
      'login' : {heading : 'Login'},
      // '/admin/index-2': {heading: 'Referral'},
      // '/admin/index-3': {heading: 'Referral'},
      // '/admin/index-4': {heading: 'Referral'},
      // '/admin/coin-details': {heading: 'Referral'},
      // '/admin/my-wallets': {heading: 'Referral'},
      // '/admin/transactions': {heading: 'Referral'},
      // '/admin/portofolio': {heading: 'Referral'},
      // '/admin/market-capital': {heading: 'Referral'},
      '/admin/superadmindashboard': {heading: 'Dashboard'},
      '/user/maindashboard' :{heading:'Dashboard'},     
      '/user/referralmanagement': {heading: 'Referral Management'},     
      '/user/manageusers': {heading: 'Manage Users'},     
      '/user/userprofile': {heading: 'Edit Profile'},
      '/user/aboutscoreus': {heading: 'About ScoreUs'},     
      '/admin/aboutscoreus': {heading: 'About ScoreUs'},     
      '/user/inviteuser': {heading: 'Invite Vendor'},     
      '/admin/datalog': {heading: 'Data Log'},     
      '/user/datalog': {heading: 'Data Log'},     
      '/admin/current-users': {heading: 'Current Users'},     
      '/user/targetsettings': {heading: 'Target Settings'},     
      '/user/rawdatasetting': {heading: 'Raw Data Setting'},     
      '/user/kpi-parameter-setting': {heading: 'KPI Parameter Setting'},    
      '/user/kpiparameter': {heading: 'KPI Parameter Setting'},    
      '/admin/vendor-scorecard': {heading: 'Vendor ScoreCard'},     
      '/admin/scoreus-buyer-scorecard': {heading: 'Buyer ScoreCard'},     
      '/admin/scoreus-commodity-scorecard': {heading: 'Commodity Scorecard'},     
      '/admin/scoreus-plant-scorecard': {heading: 'Plant ScoreCard'},     
      '/admin/scoreus-material-scorecard': {heading: 'Material ScoreCard'},     
      '/user/mapout-vendor': {heading: 'Mapout Vendors'},     
      '/admin/kpiparameter': {heading: 'KPI Parameter Setting'},     
      '/user/subscriptionpayment': {heading: 'Subscription & Payment'},
      '/user/referafriend': {heading: 'Refer a Professional'},
      '/admin/subsription-payment-inviteuser' : {heading: 'Invite User'},
      '/admin/packageupgrade' : {heading: 'Package Upgrade'},
      '/user/reporthistory'  : {heading: 'Report History'},
      '/admin/payment' : {heading: 'Payment'},    
      '/admin/howtouse' : {heading: 'How to Use'},    
      '/user/buyersreporthistory' : {heading: 'Buyers Report History'},    
      '/user/commoditiesreporthistory' : {heading: 'Commodities Report History'},    
      '/user/plantsreporthistory' : {heading: 'Plants Report History'},    
      '/user/vendorsreporthistory' : {heading: 'Vendors Report History'},    
      '/user/materialsreporthistory' : {heading: 'Materials Report History'},    
      '/user/openordersreporthistory' : {heading: 'Open Orders Report History'},    
      '/user/pastdueordersreporthistory' : {heading: 'Past Due Orders'},    
      '/user/ackdneededorderseporthistory' : {heading: 'Ack’d Needed Orders'},    
      '/user/futurepastduereporthistory' : {heading: 'Future Past Due'},    
      '/admin/openorders' : {heading: 'Open Orders Report History'},    
      '/admin/pastdueorders' : {heading: 'Past Due Orders'},    
      '/admin/ackNeededOrders' : {heading: 'Ack’d Needed Orders'},    
      '/admin/futurepastdue' : {heading: 'Future Past Due'},    
      '/admin/leadtimecheck' : {heading: 'Lead time check'},    
      '/user/dashboard' :{heading: 'Dashboard'},
      '/user/importdata' : {heading: 'Import Data'},    
      '/admin/importdata' : {heading: 'Import Data'},    
      '/admin/openpostatus' : {heading: 'Open PO Status'},    
      '/admin/openpotrendlines' : {heading: 'Open PO Trendlines'},    
      '/admin/openpoexpeditor' : {heading: 'Open PO Expeditor'},    
      '/admin/pouserdashboard' : {heading: 'Dashboard'},    
      '/admin/openpoanalysis' : {heading: 'Open PO Analysis'},    
      '/admin/poreporthistory' : {heading: 'Report History'},    
      '/admin/openpotrendlinesuseradmin' : {heading: 'Open PO Trendlines'},    
      '/user/mapoutvendor' : {heading : 'Map out vendor'},
       '/user/howtouse' : {heading : 'How to use?'},
       '/admin/kpiparam' : {heading : 'Kpi parameter'},
       '/admin/subscriptionpayment' : {heading : 'Subscription & Payment'}
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
    
    bootstrapArray = [
         '/admin/ui-accordion',
         '/admin/ui-alert',
         '/admin/ui-badge',
         '/admin/ui-button',
         '/admin/ui-datepicker',
         '/admin/ui-modal',
         '/admin/ui-button-group',
         '/admin/ui-list-group',
         '/admin/ui-media-object',
         '/admin/ui-card',
         '/admin/ui-carousel',
         '/admin/ui-dropdown',
         '/admin/ui-popover',
         '/admin/ui-progressbar',
         '/admin/ui-nav',
         '/admin/ui-rating',
         '/admin/ui-typography',
         '/admin/ui-table',
         '/admin/ui-pagination',
         '/admin/ui-timepicker',
         '/admin/ui-toast',
         '/admin/ui-tooltip',
         '/admin/ui-typeahead',
         '/admin/ui-grid',
	];
    
    materialArray = [
         '/admin/mat-autocomplete',
         '/admin/mat-badge',
         '/admin/mat-bottom-sheet',
         '/admin/mat-button',
         '/admin/mat-button-toggle',
         '/admin/mat-card',
         '/admin/mat-checkbox',
         '/admin/mat-chips',
         '/admin/mat-datepicker',
         '/admin/mat-dialog',
         '/admin/mat-divider',
         '/admin/mat-expansion',
         '/admin/mat-form-field',
         '/admin/mat-grid-list',
         '/admin/mat-icon',
         '/admin/mat-input',
         '/admin/mat-list',
         '/admin/mat-menu',
         '/admin/mat-paginator',
         '/admin/mat-progress-bar',
         '/admin/mat-progress-spinner',
         '/admin/mat-radio',
         '/admin/mat-ripple',
         '/admin/mat-select',
         '/admin/mat-sidenav',
         '/admin/mat-slide-toggle',
         '/admin/mat-slider',
         '/admin/mat-snack-bar',
         '/admin/mat-sort',
         '/admin/mat-stepper',
         '/admin/mat-table',
         '/admin/mat-tab',
         '/admin/mat-tooltip',
         '/admin/mat-tree',
         '/admin/mat-toolbar',
	];
    
    pluginsArray = [
         '/admin/uc-nestable',
         '/admin/uc-lightgallery',
	];
    
    formsArray = [
         '/admin/form-element',
         '/admin/form-validate',
	];













  
}
