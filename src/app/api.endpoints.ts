import { M } from "@angular/cdk/keycodes";

export const api = {
    //LOGIN APIS START
    login: '/login',
    forgotPassword:'/Login/ForgetPassword',
    resetPassword:'/login/ResetPassword',
    //LOGIN APIS END


    // SIGNUP API START
    signUpVerifyEmail:'/SignUP/VerifyEmail',
    signUp : '/signUp',
    signUpEmailVerification:'/signUP/EamilVerificationCompleted',
    signupStripe:'/signUp/ShowStripePlans',
    getCities : '/SignUp/getCitiesByState',
    getState : '/SignUp/getStateByCountries',
    // SIGNUP API END


    //TENANT API START
    tenant:'/tenant',
    tenantActivation:'/tenant/ActiveReActive',
    tanatUpdate:'/tenant/Update',
    //Tenant API END



    //AdminSetting API
    adminKpiSettingUpdate:'/AdminSetting/KPIParameterSettingsUpdate',
    adminKpiSetting:'/AdminSetting/KPIParameterSettings',
    adminSetting:'/adminSetting',
    adminDeleteKpiSetting:'/AdminSetting/DeleteKPIParameterSettings',
    //AdminSetting API

    //Excel IMPORT API
    excelImport:'/ExcelImport',
    excelSubmit:'/ExcelImport/Submit',
    excelDataLOg:'/ExcelImport/Datalog',
    //Excel IMPORT API END

    //Role API Start
    role:'/role',
    //Role api end

    //User Api START
    user:'/User',
    updateUser:'/User/updateUser',
    userPasswordChange:'/User/changePassword',
    userEditPicture:'/User/EditPicture',
    getActiveUser:'/User/GetAllActiveUsers',
    InactiveUser:'/user/InActiveUsers',
    InviteUser:'/user/inviteUsers',
    //USER API END

    
    //VENDOR API START
    vendorpageLoad:'/vendor/vendorPageLoad',
    vendorDropdown:'/vendor/getDropDown',
    vendorData:'/vendor/VendorData',
    vendorGraph:'/vendor/vendorGraphs',
    vendorAverageGraph:'/vendor/vendorAverageGraphs',
    vendorStatistics:'/vendor/vendorStatistics',
    vendorDetails:'/Vendor/VendorDetails',
    VendorColorZone:'/Vendor/VendorColorZone',
    VendorColorStats:'/Vendor/VendorColorStats',
    getVendorEmail:'/Vendor/VendorEmail',
    GetVendorScoreCard:'/Vendor/GetVendorScorecardDTO',
    GetVendorScoreCardWithDays:'/Vendor/GetVendorScorecardWithDays',
    //Vendor API END
    
    //Commodity API START
    commoditypageLoad:'/commodity/commodityPageLoad',
    commodityDropdown:'/commodity/getDropDown',
    commodityData:'/commodity/commodityData',
    commodityGraph:'/commodity/commodityGraphs',
    commodityStatistics:'/commodity/commodityStatistics',
    commodityDetails:'/commodity/commodityDetails',
    commodityColorZone:'/commodity/commodityColorZone',
    commodityColorStats:'/commodity/commodityColorStats',
    commodityAverageGraph:'/commodity/commodityAverageGraphs',
    getCommodityEmail:'/commodity/commodityEmail',
    //Commodity API END
    
    //Plant API START
    hasPlantData:'/plant/planthasdata',
    plantPageLoad : '/plant/plantPageLoad',
    plantDropdown:'/plant/getDropDown',
    plantData:'/plant/plantData',
    plantGraph:'/plant/plantGraphs',
    plantStatistics:'/plant/plantStatistics',
    plantDetails:'/plant/plantDetails',
    plantColorZone:'/plant/plantColorZone',
    plantColorStats:'/plant/plantColorStats',
    plantAverageGraph:'/plant/plantAverageGraphs',
    getPlantEmail:'/plant/plantEmail',
    GetPlantScoreCard:'/Plant/GetPlantScorecardDTO',
    GetVendorCommodity:'/ExecutiveDropDown/VendorCommodity',
    //plant API END
  
    //Buyer API START
    buyerPageLoad : '/buyer/buyerPageLoad',
    buyerDropdown:'/buyer/getDropDown',
    buyerData:'/buyer/buyerData',
    buyerGraph:'/buyer/buyerGraphs',
    buyerStatistics:'/buyer/buyerStatistics',
    buyerDetails:'/buyer/buyerDetails',
    buyerColorZone:'/buyer/buyerColorZone',
    buyerColorStats:'/buyer/buyerColorStats',
    buyerAverageGraph:'/buyer/buyerAverageGraphs',
    getBuyerEmail:'/buyer/buyerEmail',
    GetBuyerScoreCard:'/Buyer/GetBuyerScorecardDTO',
    //Buyer API END
    
    //Material API START
    materialPageLoad : '/material/MaterialPageLoad',
    materialDropdown:'/material/getDropDown',
    materialData:'/material/materialData',
    materialGraph:'/material/materialGraphs',
    materialStatistics:'/material/materialStatistics',
    materialDetails:'/material/MaterialDetails',
    materialColorZone:'/material/MaterialColorZone',
    materialColorZonePrevious:'/material/MaterialColorZonePrevious',
    materialColorStats:'/material/MaterialColorStats',
    materialAverageGraph:'/material/materialAverageGraphs',
    getMaterialEmail:'/material/materialEmail',
    GetMaterialScoreCard:'/material/GetMaterialScorecardDTO',
    //Buyer API END



    //TENANT BILLING API START
    billing:'/billing',
    billDetial:'/billing',
    //TENANT BILLING API END

    //Referral Api Start
    referral:'/referral/getAll',
    referralUsers:'/Referral/GetReferralsUsers',
    referralProffesional:'/referral/referprofessional',
    //Referral Api ENd

    //SuperAdmin API START
    superAdminStatic:'/SuperAdmin/SuperAdminStatistic',
    getSuperAdminReferral : '/Superadmin/GetReferelManagement',
    setSuperAdminReferral : '/Superadmin/SetReferelManagement',
    //SUPER ADMIN API END
    //subscriptionApi START
    subscriptionCancel:'/Subscription/CancelSubscription',
    subscriptionUpgrade:'/Subscription/UpgradeSubscription',
    subscriptionRecreate:'/Subscription/ReCreateSubscription',
    subscriptionGetExpiryDate : '/Subscription/GetExpiryDate',
    ///Subscription API END

    

    //RAW DATA SETTING API START
    poRawData:'/rawData/GetPOHistoryInfo',
    openOrderRawData:'/rawData/GetOpenOrderReport',
    ncrRawData:'/rawData/GetNCR',
    buyerRawData:'/rawData/GetBuyer',
    vendorRawData:'/rawData/GetVendor',
    plantsRawData:'/rawData/GetPlants',
    //Raw data setting api End



    // Target data setting API start
    vendorTargetSetting: '/TargetSetting/getVendorTarget',
    buyerTargetSetting: '/TargetSetting/getBuyerTarget',
    commodityTargetSetting: '/TargetSetting/getCommodityTarget',
    plantTargetSetting: '/TargetSetting/getPlantTarget',
    materialTargetSetting: '/TargetSetting/getMaterialTarget',
    deleteDataFromTargetAndRaw: '/TargetSetting/DeleteTarget', 
    // Target data setting api end


    //REPORT API START
    sendReport:'/report/sendReport',
    sendCommodityReport:'/commodityReport',
    sendVendorReport:'/vendorReport',
    sendPlantReport:'/plantReport',
    sendBuyerReport:'/buyerReport',
    sendMaterialReport:'/materialReport',
    getReport: '/Report/GetReportHistory',
    //REPORT API END

    // EXECUTIVE DROPDOWN API START
    getPlantDropDown:'/ExecutiveDropDown/plants',
    getCommodityDropDown:'/ExecutiveDropDown/Commodity',
    getVendorDropDown:'/ExecutiveDropDown/Vendor',
    getBuyerDropDown:'/ExecutiveDropDown/Buyer',
    getMaterialDropDown:'/ExecutiveDropDown/Material',
    getCountries: '/ExecutiveDropDown/Country', 
    getCity: '/ExecutiveDropDown/City', 
    getAllVendor: '/ExecutiveDropDown/AllVendor', 
    getCommodityWithPlant:'/ExecutiveDropDown/CommodityWithPlant',
    // EXECUTIVE DROPDOWN API END


    //UPDATE RAW AND TARGET DATA SETTING
    updateVendorTarget:'/TargetSetting/UpdateVendorTarget',
    updateCommodityTarget:'/TargetSetting/UpdateCommodityTarget',
    updateBuyerTarget:'/TargetSetting/UpdateBuyerTarget',
    updatePlantTarget:'/TargetSetting/UpdatePlantTarget',
    updateMaterialTarget:'/TargetSetting/UpdateMaterialTarget',
    updatePOHistory:'/rawData/UpdatePoHistory',
    updateOpenOrderRecord:'/rawData/updateOpenOrderRecord',
    updateNCR:'/rawData/UpdateNCR',
    updateBuyer:'/rawData/UpdateBuyer',
    updatePlant:'/rawData/UpdatePlant',
    updateCommodity:'/rawData/UpdateVendor',
    // UPDATE RAW AND TARGET DATA SETTING ENDS

    //MAPOUTVENDOR API STARTS
    mapOutVendor:'/mapoutvendor/GetMapOutVendor',
    GetMapoutScoreCard:'/MapOutVendor/GetPlantScorecard',
    //MAPOUTVENDOR API ENDS

    //User Admin Dashboard APi Starts
    dashBoardScoreCardData:'/vendor/GetVendorScorecardDTO',
    dashboardKPICount : '/dashboard/dashboardKPI',
    dashboardCount : '/dashboard/dashboardCounts',
    dashboardStats : '/dashboard/dashboardStats',
    dashboardBuyerStats : '/dashboard/DashBoardBuyerColorStats',
    dashboardCommodityStats : '/dashboard/DashBoardPlantColorStats',
    dashboardPlantStats : '/dashboard/DashBoardCommodityColorStats',
    dashboardMaterialStats : '/dashboard/DashBoardMaterialColorStats',
    dashboardVendorStats : '/dashboard/DashBoardVendorColorStats',
    dashboardVendorColorZone : '/dashboard/DashBoardVendorColorGraph',
    dashboardMaterialColorZone : '/dashboard/DashBoardMaterialColorGraph',
    dashboardBuyerColorZone : '/dashboard/DashBoardBuyerColorGraph',
    dashboardCommodityColorZone : '/dashboard/DashBoardCommodityColorGraph',
    dashboardPlantColorZone : '/dashboard/DashBoardPlantColorGraph',
    dashboardGraph : '/dashboard/DashBoardScoreCardGraph',
    dashboardGraphPO : '/dashboard/DashBoardPOs',
    getDashBoardDto : '/dashboard/getDayChangeData',
    //User Admin Dashboard Api Ends

//   SUPER ADMIN API START
    superAdminDashboard: '/superadmin/GetDashboardGraph',
    superAdminDashboardProduct: '/superadmin/GetProductDashboardGraph',
    CalculateTimeOnSite:'/superadmin/averageTime',
    superAdminParam : '/superadmin/getSuperAdminFilter',
    superAdminParamUpdate : '/superadmin/UpdateSuperAdminFilter',
    superAdminCount : '/superAdmin/SACounts',
    superAdminUsers : '/superAdmin/GetAllUsers',
    superAdminReferral : '/superAdmin/GetAllReferrals',
    superAdminGetUserDetail:'/superAdmin/GetUser/',
    superAdminActiveDeactiveUser:'/superAdmin/ActiveInactiveUser',
    //   SUPER ADMIN API END

   // PO MANAGER ROUTE
   GetDaysFromSetting : '/POManager/GetDaysFromSetting',
   poOpenExpeditor : '/POManager/OpenPOExpeditor',
   OpenOrderReportDropDown:'/POManager/OpenOrderReportDropDown',
   GetPlantFilter:'/POManager/GetPlantFilter',
   OpenPOExpeditorSentEmail :'/POManager/OpenPOExpeditorSentEmail',
   OpenPOExpeditorSentEmailTemplate :'/POManager/OpenPOExpeditorSentEmailTemplate',

   //Open PO Trendlines
   OpenTrendLineBuyer : '/POManager/OpenTrendLineBuyer',
   OpenPOTrendLineVendor : '/POManager/OpenPOTrendLineVendor',
   ByDefaultSetting : '/POManager/ByDefaultSetting',
   
   //Open PO Analysis
   OpenPOAnalysisBuyer : '/POManager/OpenPOAnalysisBuyer',
   OpenPOAnalysisVendor : '/POManager/OpenPOAnalysisVendor',

   PoManagerSetting: '/AdminSetting/PoManagerSetting',

   POMangerDashBoard: '/POManager/POMangerDashBoard',
   POManagerDashboardGraph: '/POManager/POManagerDashboardGraph',
   DashboardDownloadFiles: '/POManager/DashboardDownloadFiles',
   DashboardPerformanceChart: '/POManager/DashboardPerformanceChart',
}