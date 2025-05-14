import { Routes } from "@angular/router";
import { Error400Component } from "../pages/error400/error400.component";
import { Error403Component } from "../pages/error403/error403.component";
import { Error404Component } from "../pages/error404/error404.component";
import { Error500Component } from "../pages/error500/error500.component";
import { Error503Component } from "../pages/error503/error503.component";
import { ForgotPasswordComponent } from "../pages/forgot-password/forgot-password.component";
import { LockScreenComponent } from "../pages/lock-screen/lock-screen.component";
import { LoginComponent } from "../pages/login/login.component";
import { RegisterComponent } from "../pages/register/register.component";
import { RequestSentComponent } from "../pages/request-sent/request-sent.component";
import { ResetPasswordComponent } from "../pages/reset-password/reset-password.component";
import { SignupwizardComponent } from "../signupwizard/signupwizard.component";
import { SignupwizardstepfourComponent } from "../signupwizardstepfour/signupwizardstepfour.component";
import { SignupwizardstepthreeComponent } from "../signupwizardstepthree/signupwizardstepthree.component";
import { SignupwizardsteptwoComponent } from "../signupwizardsteptwo/signupwizardsteptwo.component";
import { SigupwizardthankyouComponent } from "../sigupwizardthankyou/sigupwizardthankyou.component";


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // {path: 'app-profile', component:ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'reset-password/:linkID', component: ResetPasswordComponent },

    { path: 'page-register', component: RegisterComponent },
    { path: 'request-sent', component: RequestSentComponent },
    { path: 'page-lock-screen', component: LockScreenComponent },

    { path: 'page-error-400', component: Error400Component },
    { path: 'page-error-403', component: Error403Component },
    { path: 'page-error-404', component: Error404Component },
    { path: 'page-error-500', component: Error500Component },
    { path: 'page-error-503', component: Error503Component },
    { path: 'signupwizard', component: SignupwizardComponent },
    { path: 'signupwizardsteptwo/:linkID', component: SignupwizardsteptwoComponent },
    { path: 'signupwizardsteptwo/:linkID/:email', component: SignupwizardsteptwoComponent , pathMatch:"full"},
    { path: 'signupwizardstepthree', component: SignupwizardstepthreeComponent },
    { path: 'signupwizardstepfour', component: SignupwizardstepfourComponent },
    { path: 'sigupwizardthankyou', component: SigupwizardthankyouComponent },

    {
        path: '',
        // resolve:{
        //     user:UserResolver
        // },
        // canLoad:[AuthGuard],
        loadChildren: () =>
            import('../../app/innercomponentModule/poscorecard/poscorecard.module').then(
                (m) => m.PoscorecardModule
            ),
        // canLoad: [AuthGuard],
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
    },
    
    // {
    //     path: 'user', component: AdminComponent, canActivate: [AuthGuard],
    //     children: [
    //         { path: 'maindashboard', component: MaindashboardComponent },
    //         { path: 'dashboard', component: MaindashboardComponent, canActivate: [AuthGuard] },
    //         { path: 'vendorscorecard', component: VendorScorecardComponent, canActivate: [AuthGuard] },
    //         { path: 'vendorscorecard', component: VendorScorecardComponent, canActivate: [AuthGuard] },
    //         { path: 'vendor/vendorscore', component: VendorScoreComponentComponent, canActivate: [AuthGuard] },
    //         { path: 'importdata', component: ImportdataComponent, canActivate: [AuthGuard] },
    //         { path: 'kpiparameter', component: KpiparameterComponent, canActivate: [AuthGuard],canDeactivate:[KpiDeactivateGuard] },
    //         { path: 'rawdatasetting', component: RawDataSettingComponent, canActivate: [AuthGuard] },
    //         { path: 'buyerScoreCard', component: ScoreusBuyerScorecardComponent, canActivate: [AuthGuard] },
    //         { path: 'commodityScoreCard', component: ScoreusCommodityScorecardComponent, canActivate: [AuthGuard] },
    //         { path: 'plantScoreCard', component: ScoreusPlantScorecardComponent, canActivate: [AuthGuard] },
    //         { path: 'materialScoreCard', component: ScoreusMaterialScorecardComponent, canActivate: [AuthGuard] },
    //         { path: 'mapoutvendor', component: MapoutVendorComponent, canActivate: [AuthGuard] },
    //         { path: 'datalog', component: DatalogComponent, canActivate: [AuthGuard] },
    //         { path: 'targetsettings', component: TargetSettingsComponent, canActivate: [AuthGuard] },
    //         { path: 'subscriptionpayment', component: SubscriptionpaymentComponent },
    //         { path: 'activeusers', component: ActiveusersComponent, canActivate: [AuthGuard] },
    //         { path: 'invitevendor', component: InvitevendorbyuserComponent, canActivate: [AuthGuard] },
    //         { path: 'reporthistory', component: ReporthistoryComponent, canActivate: [AuthGuard] },
    //         { path: 'Referral', component: ReferralComponent, canActivate: [AuthGuard] },
    //         { path: 'referafriend', component: ReferafriendComponent, canActivate: [AuthGuard] },
    //         { path: 'subsription-payment-inviteuser', component: SubsriptionPaymentInviteuserComponent, canActivate: [AuthGuard] },
    //         { path: 'aboutscoreus', component: AboutscoreusComponent, canActivate: [AuthGuard] },
    //         { path: 'vendor/aboutscoreus', component: AboutscoreusComponent, canActivate: [AuthGuard] },
    //         { path: 'howtouse', component: HowtouseComponent, canActivate: [AuthGuard] },
    //         { path: 'ltadetail', component: LtadetailComponent, canActivate: [AuthGuard] },
    //         { path: 'userprofile', component: UserprofileComponent, canActivate: [AuthGuard] },
    //         { path: 'reporthistory', component: ReporthistoryComponent },
    //         { path: 'buyersreporthistory', component: BuyersreporthistoryComponent },
    //         { path: 'commoditiesreporthistory', component: CommoditiesreporthistoryComponent },
    //         { path: 'plantsreporthistory', component: PlantsreporthistoryComponent },
    //         { path: 'vendorsreporthistory', component: VendorsreporthistoryComponent },
    //         { path: 'materialsreporthistory', component: MaterialsreporthistoryComponent },
    //         { path: 'openordersreporthistory', component: OpenordersreporthistoryComponent },
    //         { path: 'pastdueordersreporthistory', component: PastdueordersreporthistoryComponent },
    //         { path: 'ackdneededorderseporthistory', component: AckdneededorderseporthistoryComponent },
    //         { path: 'futurepastduereporthistory', component: FuturepastduereporthistoryComponent },
    //         { path: 'buyersreporthistory', component: BuyersreporthistoryComponent },
    //         { path: 'commoditiesreporthistory', component: CommoditiesreporthistoryComponent },
    //         { path: 'plantsreporthistory', component: PlantsreporthistoryComponent },
    //         { path: 'vendorsreporthistory', component: VendorsreporthistoryComponent },
    //         { path: 'materialsreporthistory', component: MaterialsreporthistoryComponent },
    //     ]
    // },

    
    // {
    //     path: 'admin', component: AdminComponent, children:

    //         [
    //             // {path: '', component: Index1Component},
    //             // {path: 'index', component: Index1Component},

    //             // {path: '',   component: MaindashboardComponent},
    //             // {path: 'index', component: MaindashboardComponent},

    //             // PO Manager Vendor

    //             // {path: '', component: OpenpostatusComponent},
    //             // {path: 'index', component: OpenpostatusComponent},

    //             // PO Manager Vendor
    //             //SuperAdmin Dashboard
    //             { path: '', component: SuperadmindashboardComponent },
    //             { path: 'maindashboard', component: SuperadmindashboardComponent },
    //             { path: 'superadmincompletedashboard', component: SuperadmincompletedashboardComponent },
    //             { path: 'superadminscorecarddashboard', component: SuperadminscorecarddashboardComponent },
    //             { path: 'superadminpodashboard', component: SuperadminpoDashboardComponent },
    //             //SuperAdmin Dashboard 
    //             { path :'managescorecardusers' ,component:ManageusersComponent},     
    //             {path:'managepousers' ,component:ManageusersComponent},     
    //             { path:'managecompleteusers' ,component:ManageusersComponent},
    //             // { path: 'index-1', component: Index1Component },
    //             // { path: 'dashboard', component: Index1Component },
    //             // { path: 'index-2', component: Index2Component },
    //             // { path: 'dashboard-2', component: Index2Component },
    //             // { path: 'index-3', component: Index3Component },
    //             // { path: 'dashboard-3', component: Index3Component },
    //             // { path: 'index-4', component: Index4Component },
    //             // { path: 'dashboard-4', component: Index4Component },
    //             { path: 'app-profile', component: ProfileComponent },
               

    //             { path: 'userdetail/:userId', component: UserdetailComponent },
    //             { path: 'userDetail/:userId', component: UserdetailComponent },
    //             { path: 'manageusers', component: ManageusersComponent },
    //             { path: 'referralpomanagement', component: ReferralmanagementComponent },
    //             { path: 'referralusermanagement', component: ReferralmanagementComponent },
    //             { path: 'referralscorecardmanagement', component: ReferralmanagementComponent },
    //             { path: 'maindashboard', component: MaindashboardComponent },
    //             { path: 'aboutscoreus', component: AboutscoreusComponent },
    //             { path: 'inviteuser', component: InviteuserComponent },
    //             { path: 'datalog', component: DatalogComponent },
    //             { path: 'target-settings', component: TargetSettingsComponent },
    //             { path: 'raw-data-setting', component: RawDataSettingComponent },
    //             { path: 'kpi-parameter-setting', component: KpiParameterSettingComponent },
    //             { path: 'vendor-scorecard', component: VendorScorecardComponent },
    //             { path: 'scoreus-buyer-scorecard', component: ScoreusBuyerScorecardComponent },
    //             { path: 'scoreus-commodity-scorecard', component: ScoreusCommodityScorecardComponent },
    //             { path: 'scoreus-plant-scorecard', component: ScoreusPlantScorecardComponent },
    //             { path: 'scoreus-material-scorecard', component: ScoreusMaterialScorecardComponent },
    //             { path: 'mapout-vendor', component: MapoutVendorComponent },
    //             { path: 'userprofile', component: UserprofileComponent },
    //             { path: 'kpiparameter', component: KpiparameterComponent },
    //             { path: 'subscriptionpayment', component: SubscriptionpaymentComponent },
    //             { path: 'activeusers', component: ActiveusersComponent },
    //             { path: 'Referral', component: ReferralComponent },
    //             { path: 'referafriend', component: ReferafriendComponent },
    //             { path: 'subsription-payment-inviteuser', component: SubsriptionPaymentInviteuserComponent },
    //             { path: 'packageupgrade', component: PackageupgradeComponent },
    //             { path: 'importdata', component: ImportdataComponent },
    //             { path: 'payment', component: PaymentComponent },
    //             { path: 'howtouse', component: HowtouseComponent },
    //             { path: 'reporthistory', component: ReporthistoryComponent },
    //             { path: 'buyersreporthistory', component: BuyersreporthistoryComponent },
    //             { path: 'commoditiesreporthistory', component: CommoditiesreporthistoryComponent },
    //             { path: 'plantsreporthistory', component: PlantsreporthistoryComponent },
    //             { path: 'vendorsreporthistory', component: VendorsreporthistoryComponent },
    //             { path: 'materialsreporthistory', component: MaterialsreporthistoryComponent },
    //             { path: 'openordersreporthistory', component: OpenordersreporthistoryComponent },
    //             { path: 'pastdueordersreporthistory', component: PastdueordersreporthistoryComponent },
    //             { path: 'ackdneededorderseporthistory', component: AckdneededorderseporthistoryComponent },
    //             { path: 'futurepastduereporthistory', component: FuturepastduereporthistoryComponent },
    //             { path: 'superadmindashboard', component: SuperadmindashboardComponent },
    //             { path: 'openpostatus', component: OpenpostatusComponent },
    //             { path: 'openpotrendlines', component: OpenpotrendlinesComponent },
    //             { path: 'openpoexpeditor', component: OpenpoexpeditorComponent },
    //             { path: 'pouserdashboard', component: PouserdashboardComponent },
    //             { path: 'openpoanalysis', component: OpenpoanalysisComponent },
    //             { path: 'poreporthistory', component: PoreporthistoryComponent },
    //             { path: 'openpotrendlinesuseradmin', component: OpenpotrendlinesuseradminComponent },

    //         ]
    // },
    { path: '**', component: Error404Component },

];

