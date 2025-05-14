import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutscoreusComponent } from 'src/app/aboutscoreus/aboutscoreus.component';
import { AckdneededorderseporthistoryComponent } from 'src/app/ackdneededorderseporthistory/ackdneededorderseporthistory.component';
import { ProfileComponent } from 'src/app/apps/profile/profile.component';
import { CardsComponent } from 'src/app/bootstrap/cards/cards.component';
import { DatepickerBasicComponent } from 'src/app/bootstrap/datepicker/datepicker-basic/datepicker-basic.component';
import { DatepickerRangeComponent } from 'src/app/bootstrap/datepicker/datepicker-range/datepicker-range.component';
import { GridComponent } from 'src/app/bootstrap/grid/grid.component';
import { ListGroupComponent } from 'src/app/bootstrap/list-group/list-group.component';
import { MediaObjectComponent } from 'src/app/bootstrap/media-object/media-object.component';
import { BuyersreporthistoryComponent } from 'src/app/buyersreporthistory/buyersreporthistory.component';
import { BasicLineChartComponent } from 'src/app/charts/apex/line/basic-line-chart/basic-line-chart.component';
import { CommoditiesreporthistoryComponent } from 'src/app/commoditiesreporthistory/commoditiesreporthistory.component';
import { DatalogComponent } from 'src/app/datalog/datalog.component';
import { InterestComponent } from 'src/app/elements/profile/interest/interest.component';
import { UserStatisticsComponent } from 'src/app/elements/profile/user-statistics/user-statistics.component';
import { FuturepastduereporthistoryComponent } from 'src/app/futurepastduereporthistory/futurepastduereporthistory.component';
import { ActiveusersComponent } from 'src/app/general/activeusers/activeusers.component';
import { AnalysisBuyerExecuteComponent } from 'src/app/general/analysis-buyer-execute/analysis-buyer-execute.component';
import { AnalysisBuyerTableComponent } from 'src/app/general/analysis-buyer-table/analysis-buyer-table.component';
import { AppDatahistorytableComponent } from 'src/app/general/app-datahistorytable/app-datahistorytable.component';
import { BillingComponent } from 'src/app/general/billing/billing.component';
import { BuyerScorecardTableComponent } from 'src/app/general/buyer-scorecard-table/buyer-scorecard-table.component';
import { CancelplanDialogComponent } from 'src/app/general/cancelplan-dialog/cancelplan-dialog.component';
import { CommodityScorecardTableComponent } from 'src/app/general/commodity-scorecard-table/commodity-scorecard-table.component';
import { CurrentOpenPoStatusTablegraphDialogComponent } from 'src/app/general/current-open-po-status-tablegraph-dialog/current-open-po-status-tablegraph-dialog.component';
import { CurrentOpenPoStatusTablegraphComponent } from 'src/app/general/current-open-po-status-tablegraph/current-open-po-status-tablegraph.component';
import { DatatableComponent } from 'src/app/general/datatable/datatable.component';
import { DatatablewithpaginationComponent } from 'src/app/general/datatablewithpagination/datatablewithpagination.component';
import { ExecuteBuyerComponent } from 'src/app/general/execute-buyer/execute-buyer.component';
import { ExecuteCommodityComponent } from 'src/app/general/execute-commodity/execute-commodity.component';
import { ExecuteMaterialComponent } from 'src/app/general/execute-material/execute-material.component';
import { ExecutePlantComponent } from 'src/app/general/execute-plant/execute-plant.component';
import { ExecuteComponent } from 'src/app/general/execute/execute.component';
import { FilterByDropdownTwoComponent } from 'src/app/general/filter-by-dropdown-two/filter-by-dropdown-two.component';
import { GeneralComponent } from 'src/app/general/general.component';
import { GenericDialogComponent } from 'src/app/general/generic-dialog/generic-dialog.component';
import { GraphlargetcComponent } from 'src/app/general/graphlargetc/graphlargetc.component';
import { LoaderComponent } from 'src/app/general/loader/loader.component';
import { MapoutVendorFiledComponent } from 'src/app/general/mapout-vendor-filed/mapout-vendor-filed.component';
import { MapoutVendorMapComponent } from 'src/app/general/mapout-vendor-map/mapout-vendor-map.component';
import { MaterialScorecardTableComponent } from 'src/app/general/material-scorecard-table/material-scorecard-table.component';
import { MyplanComponent } from 'src/app/general/myplan/myplan.component';
import { OkdialogcomponentComponent } from 'src/app/general/okdialogcomponent/okdialogcomponent.component';
import { PaymentpaynowDialogComponent } from 'src/app/general/paymentpaynow-dialog/paymentpaynow-dialog.component';
import { PlantScorecardTableComponent } from 'src/app/general/plant-scorecard-table/plant-scorecard-table.component';
import { PoNewuserregComponent } from 'src/app/general/po-newuserreg/po-newuserreg.component';
import { PoProductCatComponent } from 'src/app/general/po-product-cat/po-product-cat.component';
import { PoVendorAveragePerformanceComponent } from 'src/app/general/po-vendor-average-performance/po-vendor-average-performance.component';
import { PoVendorManagerComponent } from 'src/app/general/po-vendor-manager/po-vendor-manager.component';
// import { PomanagerByopenpoComponent } from 'src/app/general/pomanager-byopenpo_back/pomanager-byopenpo.component';
import { PomanagerPiechartComponent } from 'src/app/general/pomanager-piechart/pomanager-piechart.component';
import { PomanagerTablechartTwoComponent } from 'src/app/general/pomanager-tablechart-two/pomanager-tablechart-two.component';
import { PomanagerTablechartComponent } from 'src/app/general/pomanager-tablechart/pomanager-tablechart.component';
import { PomanagerVendorDeliveryoptionComponent } from 'src/app/general/pomanager-vendor-deliveryoption/pomanager-vendor-deliveryoption.component';
import { PomanagerVendorHistoryComponent } from 'src/app/general/pomanager-vendor-history/pomanager-vendor-history.component';
import { PomanagerVendorSearchComponent } from 'src/app/general/pomanager-vendor-search/pomanager-vendor-search.component';
// import { PomanagerbuyerComponent } from 'src/app/general/pomanagerbuyer/pomanagerbuyer.component';
import { PomanagerusercountsComponent } from 'src/app/general/pomanagerusercounts/pomanagerusercounts.component';
import { PomanageruserregComponent } from 'src/app/general/pomanageruserreg/pomanageruserreg.component';
// import { PomanagervendorComponent } from 'src/app/general/pomanagervendor/pomanagervendor.component';
import { PopupchartComponent } from 'src/app/general/popupchart/popupchart.component';
import { PopuptableComponent } from 'src/app/general/popuptable/popuptable.component';
import { PostatusFilterbyDropdownComponent } from 'src/app/general/postatus-filterby-dropdown/postatus-filterby-dropdown.component';
import { ReferafriendDialogComponent } from 'src/app/general/referafriend-dialog/referafriend-dialog.component';
import { ReferralComponent } from 'src/app/general/referral/referral.component';
import { RegistrationsDashboardComponent } from 'src/app/general/registrations-dashboard/registrations-dashboard.component';
import { LtadetailComponent } from 'src/app/general/report/ltadetail/ltadetail.component';
import { ReporthistorydetailComponent } from 'src/app/general/reporthistorydetail/reporthistorydetail.component';
import { SendreportdialogComponent } from 'src/app/general/sendreportdialog/sendreportdialog.component';
import { SubsriptionPaymentInviteuserComponent } from 'src/app/general/subsription-payment-inviteuser/subsription-payment-inviteuser.component';
import { SuccessfullyDialogComponent } from 'src/app/general/successfully-dialog/successfully-dialog.component';
import { SuperregboxesComponent } from 'src/app/general/superregboxes/superregboxes.component';
import { TargetpopupComponent } from 'src/app/general/targetpopup/targetpopup.component';
import { TotallineDashboardComponent } from 'src/app/general/totalline-dashboard/totalline-dashboard.component';
import { TotalscoreGraphComponent } from 'src/app/general/totalscore-graph/totalscore-graph.component';
import { TotalscoreComponent } from 'src/app/general/totalscore/totalscore.component';
import { TrendlinesBuyerExecuteComponent } from 'src/app/general/trendlines-buyer-execute/trendlines-buyer-execute.component';
import { TrendlinesBuyerUseradminTableComponent } from 'src/app/general/trendlines-buyer-useradmin-table/trendlines-buyer-useradmin-table.component';
import { TrendlinesPomanagerBuyerComponent } from 'src/app/general/trendlines-pomanager-buyer/trendlines-pomanager-buyer.component';
import { TrendlinesPomanagerVendorComponent } from 'src/app/general/trendlines-pomanager-vendor/trendlines-pomanager-vendor.component';
import { TwolineBasicLineChartComponent } from 'src/app/general/twoline-basic-line-chart/twoline-basic-line-chart.component';
import { UpgradesubscriptionDialogComponent } from 'src/app/general/upgradesubscription-dialog/upgradesubscription-dialog.component';
import { UploadDialogComponent } from 'src/app/general/upload-dialog/upload-dialog.component';
import { UserColorZoneComponent } from 'src/app/general/user-color-zone/user-color-zone.component';
import { UserdialogoutComponent } from 'src/app/general/userdialogout/userdialogout.component';
import { VendorColorZoneComponent } from 'src/app/general/vendor-color-zone/vendor-color-zone.component';
import { VendorScorecardTableComponent } from 'src/app/general/vendor-scorecard-table/vendor-scorecard-table.component';
import { VendorTotalScoreComponent } from 'src/app/general/vendor-total-score/vendor-total-score.component';
import { VendorexecutiveComponent } from 'src/app/general/vendorexecutive/vendorexecutive.component';
import { VendorscorecardBoxesComponent } from 'src/app/general/vendorscorecard-boxes/vendorscorecard-boxes.component';
import { VendortotalCoregraphDialogComponent } from 'src/app/general/vendortotal-coregraph-dialog/vendortotal-coregraph-dialog.component';
import { HowtouseComponent } from 'src/app/howtouse/howtouse.component';
import { ImportdataComponent } from 'src/app/importdata/importdata.component';
import { InviteuserComponent } from 'src/app/inviteuser/inviteuser.component';
import { DeliveryComponent } from 'src/app/kpi-parameter-setting/delivery/delivery.component';
import { KpiParameterSettingComponent } from 'src/app/kpi-parameter-setting/kpi-parameter-setting.component';
import { LinechartOptionComponent } from 'src/app/kpi-parameter-setting/linechart-option/linechart-option.component';
import { LtaParameterComponent } from 'src/app/kpi-parameter-setting/lta-parameter/lta-parameter.component';
import { MetricsWeightComponent } from 'src/app/kpi-parameter-setting/metrics-weight/metrics-weight.component';
import { NcrParameterComponent } from 'src/app/kpi-parameter-setting/ncr-parameter/ncr-parameter.component';
import { OtdParameterComponent } from 'src/app/kpi-parameter-setting/otd-parameter/otd-parameter.component';
import { PpvParameterComponent } from 'src/app/kpi-parameter-setting/ppv-parameter/ppv-parameter.component';
import { ProductCatComponent } from 'src/app/kpi-parameter-setting/product-cat/product-cat.component';
import { KpiparameterComponent } from 'src/app/kpiparameter/kpiparameter.component';
import { KpiparametersettingComponent } from 'src/app/kpiparametersetting/kpiparametersetting.component';
import { FilterbyDropdownComponent } from 'src/app/maindashboard/filterby-dropdown/filterby-dropdown.component';
import { MaindashboardComponent } from 'src/app/maindashboard/maindashboard.component';
import { NewuserregComponent } from 'src/app/maindashboard/newuserreg/newuserreg.component';
import { TotalrevenueComponent } from 'src/app/maindashboard/totalrevenue/totalrevenue.component';
import { YearMonthSignUpComponent } from 'src/app/maindashboard/year-month-sign-up/year-month-sign-up.component';
import { ManageusersComponent } from 'src/app/manageusers/manageusers.component';
import { MapoutVendorComponent } from 'src/app/mapout-vendor/mapout-vendor.component';
import { MaterialsreporthistoryComponent } from 'src/app/materialsreporthistory/materialsreporthistory.component';
import { OpenordersreporthistoryComponent } from 'src/app/openordersreporthistory/openordersreporthistory.component';
// import { OpenpoanalysisComponent } from 'src/app/openpoanalysis/openpoanalysis.component';
import { OpenpoexpeditorComponent } from 'src/app/openpoexpeditor/openpoexpeditor.component';
import { OpenpostatusComponent } from 'src/app/openpostatus/openpostatus.component';
// import { OpenpotrendlinesComponent } from 'src/app/openpotrendlines/openpotrendlines.component';
import { OpenpotrendlinesuseradminComponent } from 'src/app/openpotrendlinesuseradmin/openpotrendlinesuseradmin.component';
import { PackageupgradeComponent } from 'src/app/packageupgrade/packageupgrade.component';
import { PastdueordersreporthistoryComponent } from 'src/app/pastdueordersreporthistory/pastdueordersreporthistory.component';
import { PaymentComponent } from 'src/app/payment/payment.component';
import { PlantsreporthistoryComponent } from 'src/app/plantsreporthistory/plantsreporthistory.component';
import { PoreporthistoryComponent } from 'src/app/poreporthistory/poreporthistory.component';
import { PouserdashboardComponent } from 'src/app/pouserdashboard/pouserdashboard.component';
import { BuyerComponent } from 'src/app/raw-data-setting/buyer/buyer.component';
import { NonConformanceReportComponent } from 'src/app/raw-data-setting/non-conformance-report/non-conformance-report.component';
import { PlantComponent } from 'src/app/raw-data-setting/plant/plant.component';
import { PoHistoryInfoComponent } from 'src/app/raw-data-setting/po-history-info/po-history-info.component';
import { PoOpenOrderReportComponent } from 'src/app/raw-data-setting/po-open-order-report/po-open-order-report.component';
import { RawDataSettingComponent } from 'src/app/raw-data-setting/raw-data-setting.component';
import { VendorCommodityComponent } from 'src/app/raw-data-setting/vendor-commodity/vendor-commodity.component';
import { ReferafriendComponent } from 'src/app/referafriend/referafriend.component';
import { ReferralmanagementComponent } from 'src/app/referralmanagement/referralmanagement.component';
import { ReporthistoryComponent } from 'src/app/reporthistory/reporthistory.component';
import { ScoreusBuyerScorecardComponent } from 'src/app/scoreus-buyer-scorecard/scoreus-buyer-scorecard.component';
import { ScoreusCommodityScorecardComponent } from 'src/app/scoreus-commodity-scorecard/scoreus-commodity-scorecard.component';
import { ScoreusMaterialScorecardComponent } from 'src/app/scoreus-material-scorecard/scoreus-material-scorecard.component';
import { ScoreusPlantScorecardComponent } from 'src/app/scoreus-plant-scorecard/scoreus-plant-scorecard.component';
import { SubscriptionpaymentComponent } from 'src/app/subscriptionpayment/subscriptionpayment.component';
import { SuperadmincompletedashboardComponent } from 'src/app/superadmincompletedashboard/superadmincompletedashboard.component';
import { SuperadmindashboardComponent } from 'src/app/superadmindashboard/superadmindashboard.component';
import { SuperadminpoDashboardComponent } from 'src/app/superadminpo-dashboard/superadminpo-dashboard.component';
import { SuperadminscorecarddashboardComponent } from 'src/app/superadminscorecarddashboard/superadminscorecarddashboard.component';
import { ScoreusTargetScoreBuyerComponent } from 'src/app/target-settings/scoreus-target-score-buyer/scoreus-target-score-buyer.component';
import { ScoreusTargetScoreCommodityComponent } from 'src/app/target-settings/scoreus-target-score-commodity/scoreus-target-score-commodity.component';
import { ScoreusTargetScoreMaterialsComponent } from 'src/app/target-settings/scoreus-target-score-materials/scoreus-target-score-materials.component';
import { ScoreusTargetScorePlantComponent } from 'src/app/target-settings/scoreus-target-score-plant/scoreus-target-score-plant.component';
import { ScoreusTargetScoreVendorComponent } from 'src/app/target-settings/scoreus-target-score-vendor/scoreus-target-score-vendor.component';
import { TargetSettingsComponent } from 'src/app/target-settings/target-settings.component';
import { UserdetailComponent } from 'src/app/userdetail/userdetail.component';
import { UserprofileComponent } from 'src/app/userprofile/userprofile.component';
import { VendorScoreComponentComponent } from 'src/app/vendor-score-component/vendor-score-component.component';
import { VendorScorecardComponent } from 'src/app/vendor-scorecard/vendor-scorecard.component';
import { VendorsreporthistoryComponent } from 'src/app/vendorsreporthistory/vendorsreporthistory.component';
import { VnedortableComponent } from 'src/app/vnedortable/vnedortable.component';
import { InvitevendorbyuserComponent } from 'src/invitevendorbyuser/invitevendorbyuser.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RoutingModule } from 'src/app/modules/dashboard/routing/routing.module';
import { AdminComponent } from 'src/app/admin/admin.component';
import { FooterComponent } from 'src/app/elements/footer/footer.component';
import { HeaderComponent } from 'src/app/elements/header/header.component';
import { NavHeaderComponent } from 'src/app/elements/nav-header/nav-header.component';
import { NavigationComponent } from 'src/app/elements/navigation/navigation.component';
import { BarComponent } from 'src/app/charts/apex/bar/bar.component';
import { PodatatableComponent } from 'src/app/general/podatatable/podatatable.component';
import { OpenpoexpeditorEmailTemplateComponent } from 'src/app/openpoexpeditor/openpoexpeditor-email-template/openpoexpeditor-email-template.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TrendlinesPomanagerLinechartComponent } from 'src/app/general/trendlines-pomanager-buyer/trendlines-pomanager-linechart/trendlines-pomanager-linechart.component';
import { TrendlinesPomanagerAverageLinechartComponent } from 'src/app/general/trendlines-pomanager-average-linechart/trendlines-pomanager-average-linechart.component';
import { OpenpoanalysisComponent } from 'src/app/openpoanalysis/openpoanalysis.component';
import { OpenpoanalysisBuyerComponent } from 'src/app/openpoanalysis/openpoanalysis-buyer/openpoanalysis-buyer.component';
import { OpenpoanalysisVendorComponent } from 'src/app/openpoanalysis/openpoanalysis-vendor/openpoanalysis-vendor.component';
import { OpenpoanalysisPiechartComponent } from 'src/app/openpoanalysis/openpoanalysis-piechart/openpoanalysis-piechart.component';
import { OpenpoanalysisBarchartComponent } from 'src/app/openpoanalysis/openpoanalysis-barchart/openpoanalysis-barchart.component';
import { PoKpiparamComponent } from 'src/app/general/po-kpiparam/po-kpiparam.component';
import { PouserdashboardLinechartComponent } from 'src/app/pouserdashboard/pouserdashboard-linechart/pouserdashboard-linechart.component';
import { LeadtimecheckhistoryComponent } from 'src/app/leadtimecheckhistory/leadtimecheckhistory.component';
import { SuperadminsettingComponent } from 'src/app/superadminsetting/superadminsetting.component';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  // return new TranslateHttpLoader(http)
}





@NgModule({
  declarations: [
    AdminComponent,
    NavHeaderComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    UserStatisticsComponent,
    InterestComponent,
    ListGroupComponent,
    DatepickerBasicComponent,
    DatepickerRangeComponent,
    MediaObjectComponent,
    //NgbdSortableHeader,
    InvitevendorbyuserComponent,
    CardsComponent,
    GridComponent,
    UserdetailComponent,
    ManageusersComponent,
    ReferralmanagementComponent,
    MaindashboardComponent,
    NewuserregComponent,
    FilterbyDropdownComponent,
    TotalrevenueComponent,
    YearMonthSignUpComponent,
    GeneralComponent,
    TotalscoreComponent,
    TotalscoreGraphComponent,
    RegistrationsDashboardComponent,
    UserColorZoneComponent,
    TotallineDashboardComponent,
    AboutscoreusComponent,
    InviteuserComponent,
    DatalogComponent,
    TargetSettingsComponent,
    ScoreusTargetScoreVendorComponent,
    ScoreusTargetScoreBuyerComponent,
    ScoreusTargetScoreCommodityComponent,
    ScoreusTargetScorePlantComponent,
    RawDataSettingComponent,
    PoHistoryInfoComponent,
    PoOpenOrderReportComponent,
    NonConformanceReportComponent,
    BuyerComponent,
    VendorCommodityComponent,
    KpiParameterSettingComponent,
    OtdParameterComponent,
    NcrParameterComponent,
    PpvParameterComponent,
    LtaParameterComponent,
    DeliveryComponent,
    LinechartOptionComponent,
    MetricsWeightComponent,
    ProductCatComponent,
    VendorScorecardComponent,
    FilterByDropdownTwoComponent,
    VendorscorecardBoxesComponent,
    VendorColorZoneComponent,
    VendorTotalScoreComponent,
    ExecuteComponent,
    VendorScorecardTableComponent,
    ScoreusBuyerScorecardComponent,
    ScoreusCommodityScorecardComponent,
    ScoreusPlantScorecardComponent,
    ScoreusMaterialScorecardComponent,
    MapoutVendorComponent,
    MapoutVendorFiledComponent,
    MapoutVendorMapComponent,
    ExecuteBuyerComponent,
    ExecuteCommodityComponent,
    ExecutePlantComponent,
    ExecuteMaterialComponent,
    UserdialogoutComponent,
    PlantComponent,
    SendreportdialogComponent,
    VendortotalCoregraphDialogComponent,
    UserprofileComponent,
    UploadDialogComponent,
    BasicLineChartComponent,
    TwolineBasicLineChartComponent,
    KpiparametersettingComponent,
    KpiparameterComponent,
    ScoreusTargetScoreMaterialsComponent,
    SubscriptionpaymentComponent,
    ActiveusersComponent,
    ReferralComponent,
    BillingComponent,
    MyplanComponent,
    ReferafriendComponent,
    ReferafriendDialogComponent,
    SubsriptionPaymentInviteuserComponent,
    CancelplanDialogComponent,
    PackageupgradeComponent,
    ImportdataComponent,
    ReporthistoryComponent,
    SuccessfullyDialogComponent,
    PaymentComponent,
    UpgradesubscriptionDialogComponent,
    GraphlargetcComponent,
    HowtouseComponent,
    ReporthistorydetailComponent,
    BuyersreporthistoryComponent,
    CommoditiesreporthistoryComponent,
    PlantsreporthistoryComponent,
    VendorsreporthistoryComponent,
    MaterialsreporthistoryComponent,
    OpenordersreporthistoryComponent,
    PastdueordersreporthistoryComponent,
    AckdneededorderseporthistoryComponent,
    FuturepastduereporthistoryComponent,
    PaymentpaynowDialogComponent,
    GenericDialogComponent,
    SuperadmindashboardComponent,
    SuperregboxesComponent,
    OpenpostatusComponent,
    PostatusFilterbyDropdownComponent,
    PoNewuserregComponent,
    PoVendorManagerComponent,
    PoVendorAveragePerformanceComponent,
    CurrentOpenPoStatusTablegraphComponent,
    CurrentOpenPoStatusTablegraphDialogComponent,
    // OpenpotrendlinesComponent,
    OpenpoexpeditorComponent,
    PomanagerVendorDeliveryoptionComponent,
    PomanagerVendorSearchComponent,
    PomanagerVendorHistoryComponent,
    // PomanagerByopenpoComponent,
    PouserdashboardComponent,
    PomanageruserregComponent,
    PomanagerusercountsComponent,
    // OpenpoanalysisComponent,
    // PomanagerbuyerComponent,
    // PomanagervendorComponent,
    AnalysisBuyerExecuteComponent,
    AnalysisBuyerTableComponent,
    PoreporthistoryComponent,
    PoProductCatComponent,
 
    PomanagerPiechartComponent,
    PomanagerTablechartComponent,
    PomanagerTablechartTwoComponent,
    OpenpotrendlinesuseradminComponent,
    TrendlinesPomanagerBuyerComponent,
    TrendlinesPomanagerVendorComponent,
    TrendlinesBuyerExecuteComponent,
    TrendlinesBuyerUseradminTableComponent,
    DatatableComponent,
    PopuptableComponent,
    DatatablewithpaginationComponent,
    PopupchartComponent,
    LtadetailComponent,
    OkdialogcomponentComponent,
    CommodityScorecardTableComponent,
    BuyerScorecardTableComponent,
    MaterialScorecardTableComponent,
    PlantScorecardTableComponent,
    AppDatahistorytableComponent,
    TargetpopupComponent,
    SuperadminpoDashboardComponent,
    SuperadminscorecarddashboardComponent,
    SuperadmincompletedashboardComponent,
    VendorScoreComponentComponent,
    VendorexecutiveComponent,
    VnedortableComponent,
    BarComponent,
    PodatatableComponent,
    OpenpoexpeditorEmailTemplateComponent,
    TrendlinesPomanagerLinechartComponent,
    TrendlinesPomanagerAverageLinechartComponent,
    OpenpoanalysisComponent,
    OpenpoanalysisBuyerComponent,
    OpenpoanalysisVendorComponent,
    OpenpoanalysisPiechartComponent,
    OpenpoanalysisBarchartComponent,
    PoKpiparamComponent,
    PouserdashboardLinechartComponent,
    LeadtimecheckhistoryComponent,
    SuperadminsettingComponent
    
    // LeadtimecheckComponent,
    // PastdueordershistoryComponent,
    // OpenordersComponent,
    // AckNeededOrdersComponent,

  ],
  imports: [
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        // useFactory:(createTranslateLoader),
        deps:[HttpClient],
      },
      // defaultLanguage:''
    }),
    CommonModule,
    // RoutingModule,
    SharedModule,
    NgbModule,
    ChartsModule,
    NgApexchartsModule,
    // PerfectScrollbarModule,
    RoutingModule,
    GoogleMapsModule,
    // NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    // NgxMaskModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  
  ]
})
export class PoscorecardModule { }
