import { Routes } from "@angular/router";
import { AuthGuard } from "src/app/gaurd/auth.guard";
import { MaindashboardComponent } from "src/app/maindashboard/maindashboard.component";
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { ReferralComponent } from "../pages/referral/referral.component";
import { AboutscoreusComponent } from "src/app/aboutscoreus/aboutscoreus.component";
import { AckdneededorderseporthistoryComponent } from "src/app/ackdneededorderseporthistory/ackdneededorderseporthistory.component";
import { AdminComponent } from "src/app/admin/admin.component";
import { ProfileComponent } from "src/app/apps/profile/profile.component";
import { BuyersreporthistoryComponent } from "src/app/buyersreporthistory/buyersreporthistory.component";
import { CommoditiesreporthistoryComponent } from "src/app/commoditiesreporthistory/commoditiesreporthistory.component";
import { DatalogComponent } from "src/app/datalog/datalog.component";
import { FuturepastduereporthistoryComponent } from "src/app/futurepastduereporthistory/futurepastduereporthistory.component";
import { KpiDeactivateGuard } from "src/app/gaurd/kpi-deactivate.guard";
import { ActiveusersComponent } from "src/app/general/activeusers/activeusers.component";
import { LtadetailComponent } from "src/app/general/report/ltadetail/ltadetail.component";
import { SubsriptionPaymentInviteuserComponent } from "src/app/general/subsription-payment-inviteuser/subsription-payment-inviteuser.component";
import { HowtouseComponent } from "src/app/howtouse/howtouse.component";
import { ImportdataComponent } from "src/app/importdata/importdata.component";
import { InviteuserComponent } from "src/app/inviteuser/inviteuser.component";
import { KpiParameterSettingComponent } from "src/app/kpi-parameter-setting/kpi-parameter-setting.component";
import { KpiparameterComponent } from "src/app/kpiparameter/kpiparameter.component";
import { ManageusersComponent } from "src/app/manageusers/manageusers.component";
import { MapoutVendorComponent } from "src/app/mapout-vendor/mapout-vendor.component";
import { MaterialsreporthistoryComponent } from "src/app/materialsreporthistory/materialsreporthistory.component";
import { OpenordersreporthistoryComponent } from "src/app/openordersreporthistory/openordersreporthistory.component";
import { OpenpoanalysisComponent } from "src/app/openpoanalysis/openpoanalysis.component";
import { OpenpoexpeditorComponent } from "src/app/openpoexpeditor/openpoexpeditor.component";
import { OpenpostatusComponent } from "src/app/openpostatus/openpostatus.component";
// import { OpenpotrendlinesComponent } from "src/app/openpotrendlines/openpotrendlines.component";
import { OpenpotrendlinesuseradminComponent } from "src/app/openpotrendlinesuseradmin/openpotrendlinesuseradmin.component";
import { PackageupgradeComponent } from "src/app/packageupgrade/packageupgrade.component";
import { PastdueordersreporthistoryComponent } from "src/app/pastdueordersreporthistory/pastdueordersreporthistory.component";
import { PaymentComponent } from "src/app/payment/payment.component";
import { PlantsreporthistoryComponent } from "src/app/plantsreporthistory/plantsreporthistory.component";
import { PoreporthistoryComponent } from "src/app/poreporthistory/poreporthistory.component";
import { PouserdashboardComponent } from "src/app/pouserdashboard/pouserdashboard.component";
import { RawDataSettingComponent } from "src/app/raw-data-setting/raw-data-setting.component";
import { ReferafriendComponent } from "src/app/referafriend/referafriend.component";
import { ReferralmanagementComponent } from "src/app/referralmanagement/referralmanagement.component";
import { ReporthistoryComponent } from "src/app/reporthistory/reporthistory.component";
import { ScoreusBuyerScorecardComponent } from "src/app/scoreus-buyer-scorecard/scoreus-buyer-scorecard.component";
import { ScoreusCommodityScorecardComponent } from "src/app/scoreus-commodity-scorecard/scoreus-commodity-scorecard.component";
import { ScoreusMaterialScorecardComponent } from "src/app/scoreus-material-scorecard/scoreus-material-scorecard.component";
import { ScoreusPlantScorecardComponent } from "src/app/scoreus-plant-scorecard/scoreus-plant-scorecard.component";
import { SubscriptionpaymentComponent } from "src/app/subscriptionpayment/subscriptionpayment.component";
import { SuperadmincompletedashboardComponent } from "src/app/superadmincompletedashboard/superadmincompletedashboard.component";
import { SuperadminpoDashboardComponent } from "src/app/superadminpo-dashboard/superadminpo-dashboard.component";
import { SuperadminscorecarddashboardComponent } from "src/app/superadminscorecarddashboard/superadminscorecarddashboard.component";
import { TargetSettingsComponent } from "src/app/target-settings/target-settings.component";
import { UserdetailComponent } from "src/app/userdetail/userdetail.component";
import { UserprofileComponent } from "src/app/userprofile/userprofile.component";
import { VendorScoreComponentComponent } from "src/app/vendor-score-component/vendor-score-component.component";
import { VendorScorecardComponent } from "src/app/vendor-scorecard/vendor-scorecard.component";
import { VendorsreporthistoryComponent } from "src/app/vendorsreporthistory/vendorsreporthistory.component";
import { InvitevendorbyuserComponent } from "src/invitevendorbyuser/invitevendorbyuser.component";
import { SuperadmindashboardComponent } from "src/app/superadmindashboard/superadmindashboard.component";
import { PoKpiparamComponent } from "src/app/general/po-kpiparam/po-kpiparam.component";
import { LeadtimecheckhistoryComponent } from "src/app/leadtimecheckhistory/leadtimecheckhistory.component";
import { SignupwizardstepthreeComponent } from "src/app/signupwizardstepthree/signupwizardstepthree.component";
import { BillingComponent } from "src/app/general/billing/billing.component";
import { SuperadminsettingComponent } from "src/app/superadminsetting/superadminsetting.component";

export const routes : Routes=[
    // {path: '',
    // component: DashboardComponent,
    // children:[
    //     // {path:'referralManagement',component:ReferralComponent},
    //     // {path:'superadmindashboard',component:SuperadmindashboardComponent}
    // ]
    // } 
  


    {
        path: 'user', component: AdminComponent, canActivate: [AuthGuard],
        children: [
            { path: 'maindashboard', component: MaindashboardComponent },
            { path: 'dashboard', component: MaindashboardComponent, canActivate: [AuthGuard] },
            { path: 'vendorscorecard', component: VendorScorecardComponent, canActivate: [AuthGuard] },
            // { path: 'vendorscorecard', component: VendorScorecardComponent, canActivate: [AuthGuard] },
            { path: 'vendor/vendorscore', component: VendorScoreComponentComponent, canActivate: [AuthGuard] },
            { path: 'importdata', component: ImportdataComponent, canActivate: [AuthGuard] },
            { path: 'plans', component: SignupwizardstepthreeComponent },
            { path: 'mybills', component: BillingComponent },
            { path: 'kpiparameter', component: KpiparameterComponent, canActivate: [AuthGuard],canDeactivate:[KpiDeactivateGuard] },
            { path: 'rawdatasetting', component: RawDataSettingComponent, canActivate: [AuthGuard] },
            { path: 'buyerScoreCard', component: ScoreusBuyerScorecardComponent, canActivate: [AuthGuard] },
            { path: 'commodityScoreCard', component: ScoreusCommodityScorecardComponent, canActivate: [AuthGuard] },
            { path: 'plantScoreCard', component: ScoreusPlantScorecardComponent, canActivate: [AuthGuard] },
            { path: 'materialScoreCard', component: ScoreusMaterialScorecardComponent, canActivate: [AuthGuard] },
            { path: 'mapoutvendor', component: MapoutVendorComponent, canActivate: [AuthGuard] },
            { path: 'datalog', component: DatalogComponent, canActivate: [AuthGuard] },
            { path: 'targetsettings', component: TargetSettingsComponent, canActivate: [AuthGuard] },
            { path: 'subscriptionpayment', component: SubscriptionpaymentComponent },
            { path: 'activeusers', component: ActiveusersComponent, canActivate: [AuthGuard] },
            { path: 'invitevendor', component: InvitevendorbyuserComponent, canActivate: [AuthGuard] },
            { path: 'reporthistory', component: ReporthistoryComponent, canActivate: [AuthGuard] },
            { path: 'Referral', component: ReferralComponent, canActivate: [AuthGuard] },
            { path: 'referafriend', component: ReferafriendComponent, canActivate: [AuthGuard] },
            { path: 'subsription-payment-inviteuser', component: SubsriptionPaymentInviteuserComponent, canActivate: [AuthGuard] },
            { path: 'aboutscoreus', component: AboutscoreusComponent, canActivate: [AuthGuard] },
            { path: 'vendor/aboutscoreus', component: AboutscoreusComponent, canActivate: [AuthGuard] },
            { path: 'howtouse', component: HowtouseComponent, canActivate: [AuthGuard] },
            { path: 'ltadetail', component: LtadetailComponent, canActivate: [AuthGuard] },
            { path: 'userprofile', component: UserprofileComponent, canActivate: [AuthGuard] },
            { path: 'reporthistory', component: ReporthistoryComponent },
            { path: 'buyersreporthistory', component: BuyersreporthistoryComponent },
            { path: 'commoditiesreporthistory', component: CommoditiesreporthistoryComponent },
            { path: 'plantsreporthistory', component: PlantsreporthistoryComponent },
            { path: 'vendorsreporthistory', component: VendorsreporthistoryComponent },
            { path: 'materialsreporthistory', component: MaterialsreporthistoryComponent },
            { path: 'openordersreporthistory', component: OpenordersreporthistoryComponent },
            { path: 'pastdueordersreporthistory', component: PastdueordersreporthistoryComponent },
            { path: 'ackdneededorderseporthistory', component: AckdneededorderseporthistoryComponent },
            { path: 'futurepastduereporthistory', component: FuturepastduereporthistoryComponent },
            { path: 'buyersreporthistory', component: BuyersreporthistoryComponent },
            { path: 'commoditiesreporthistory', component: CommoditiesreporthistoryComponent },
            { path: 'plantsreporthistory', component: PlantsreporthistoryComponent },
            { path: 'vendorsreporthistory', component: VendorsreporthistoryComponent },
            { path: 'materialsreporthistory', component: MaterialsreporthistoryComponent },
        ]
    },

    
    {
        path: 'admin', component: AdminComponent,canActivate: [AuthGuard], children:

            [
                // {path: '', component: Index1Component},
                // {path: 'index', component: Index1Component},

                // {path: '',   component: MaindashboardComponent},
                // {path: 'index', component: MaindashboardComponent},

                // PO Manager Vendor

                // {path: '', component: OpenpostatusComponent},
                // {path: 'index', component: OpenpostatusComponent},

                // PO Manager Vendor
                //SuperAdmin Dashboard
                { path: '', component: SuperadmindashboardComponent },
                { path: 'maindashboard', component: SuperadmindashboardComponent },
                { path: 'superadmincompletedashboard', component: SuperadmincompletedashboardComponent },
                { path: 'superadminscorecarddashboard', component: SuperadminscorecarddashboardComponent },
                { path: 'superadminpodashboard', component: SuperadminpoDashboardComponent },
                //SuperAdmin Dashboard 
                { path :'managescorecardusers' ,component:ManageusersComponent},     
                {path:'managepousers' ,component:ManageusersComponent},     
                { path:'managecompleteusers' ,component:ManageusersComponent},
                { path:'refSettings' ,component:SuperadminsettingComponent},
                // { path: 'index-1', component: Index1Component },
                // { path: 'dashboard', component: Index1Component },
                // { path: 'index-2', component: Index2Component },
                // { path: 'dashboard-2', component: Index2Component },
                // { path: 'index-3', component: Index3Component },
                // { path: 'dashboard-3', component: Index3Component },
                // { path: 'index-4', component: Index4Component },
                // { path: 'dashboard-4', component: Index4Component },
                { path: 'app-profile', component: ProfileComponent },
               

                { path: 'userdetail/:userId', component: UserdetailComponent },
                { path: 'userDetail/:userId', component: UserdetailComponent },
                { path: 'manageusers', component: ManageusersComponent },
                { path: 'referralpomanagement', component: ReferralmanagementComponent },
                { path: 'referralusermanagement', component: ReferralmanagementComponent },
                { path: 'referralscorecardmanagement', component: ReferralmanagementComponent },
                { path: 'maindashboard', component: MaindashboardComponent },
                { path: 'aboutscoreus', component: AboutscoreusComponent },
                { path: 'inviteuser', component: InviteuserComponent },
                { path: 'datalog', component: DatalogComponent },
                { path: 'target-settings', component: TargetSettingsComponent },
                { path: 'raw-data-setting', component: RawDataSettingComponent },
                { path: 'kpi-parameter-setting', component: KpiParameterSettingComponent },
                { path: 'vendor-scorecard', component: VendorScorecardComponent },
                { path: 'scoreus-buyer-scorecard', component: ScoreusBuyerScorecardComponent },
                { path: 'scoreus-commodity-scorecard', component: ScoreusCommodityScorecardComponent },
                { path: 'scoreus-plant-scorecard', component: ScoreusPlantScorecardComponent },
                { path: 'scoreus-material-scorecard', component: ScoreusMaterialScorecardComponent },
                { path: 'mapout-vendor', component: MapoutVendorComponent },
                { path: 'userprofile', component: UserprofileComponent },
                { path: 'kpiparameter', component: KpiparameterComponent },
                { path: 'subscriptionpayment', component: SubscriptionpaymentComponent },
                { path: 'activeusers', component: ActiveusersComponent },
                { path: 'Referral', component: ReferralComponent },
                { path: 'referafriend', component: ReferafriendComponent },
                { path: 'subsription-payment-inviteuser', component: SubsriptionPaymentInviteuserComponent },
                { path: 'packageupgrade', component: PackageupgradeComponent },
                { path: 'importdata', component: ImportdataComponent },
                { path: 'payment', component: PaymentComponent },
                { path: 'howtouse', component: HowtouseComponent },
                { path: 'reporthistory', component: ReporthistoryComponent },
                { path: 'buyersreporthistory', component: BuyersreporthistoryComponent },
                { path: 'commoditiesreporthistory', component: CommoditiesreporthistoryComponent },
                { path: 'plantsreporthistory', component: PlantsreporthistoryComponent },
                { path: 'vendorsreporthistory', component: VendorsreporthistoryComponent },
                { path: 'materialsreporthistory', component: MaterialsreporthistoryComponent },
               
               
                { path: 'openorders', component: OpenordersreporthistoryComponent },
                { path: 'pastdueorders', component: PastdueordersreporthistoryComponent },
                { path: 'ackNeededOrders', component: AckdneededorderseporthistoryComponent },
                { path: 'futurepastdue', component: FuturepastduereporthistoryComponent },
                { path: 'superadmindashboard', component: SuperadmindashboardComponent },
                { path: 'openpostatus', component: OpenpostatusComponent },
                { path: 'leadtimecheck', component: LeadtimecheckhistoryComponent },
                
                // { path: 'openpotrendlines', component: OpenpotrendlinesComponent },
                { path: 'openpoexpeditor', component: OpenpoexpeditorComponent },
                { path: 'pouserdashboard', component: PouserdashboardComponent },
                { path: 'openpoanalysis', component: OpenpoanalysisComponent },
                { path: 'poreporthistory', component: PoreporthistoryComponent },
                { path: 'openpotrendlinesuseradmin', component: OpenpotrendlinesuseradminComponent },
                { path: 'kpiparam', component: PoKpiparamComponent, canActivate: [AuthGuard],canDeactivate:[KpiDeactivateGuard] },

            ]
    },

]