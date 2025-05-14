import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VendortotalCoregraphDialogComponent } from '../general/vendortotal-coregraph-dialog/vendortotal-coregraph-dialog.component';
import { GeneralApiService } from '../services/appService/generalApiService';
import { NotificationService } from '../notification.service';
import { api } from '../api.endpoints';
import { PopupchartComponent } from '../general/popupchart/popupchart.component';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-superadmindashboard',
  templateUrl: './superadmindashboard.component.html',
  styleUrls: ['./superadmindashboard.component.css']
})
export class SuperadmindashboardComponent implements OnInit, OnDestroy {
  totalRevenueChartData: any
  isCustomDate: boolean = false
  startDateControl: any;
  endDateControl: any;
  revenueGraphData: any
  newRegistrationGraphData: any
  activeUserGraphData: any
  activeTimeOnSiteGraphData: any
  referralSignUpGraphData: any
  discontinuedRegistrationGraphData: any
  cancelRegistrationGraphData: any
  monthlySubsctionGraphData: any
  yearlySubsctionGraphData: any
  startDate: any | null = null
  endDate: any | null = null
  superAdminCounts: any
  dateDiff: any
  listDropDown: any[] = [
    { id: "30", value: "30 days" },
    { id: "60", value: "60 days" },
    { id: "180", value: "180 days" },
    { id: "365", value: "365 days" },
  ]

  graphData!: any
  adminSetting: any
  //   graphData:any = {
  //   graphFor:'',
  //   monthlyAll:[],
  //   monthlyVendor:[],
  //   monthlyPO:[],
  //   monthlyUser:[],
  //   yearlyAll:[],
  //   yearlyVendor:[],
  //   yearlyPO:[],
  //   yearlyUser:[],
  //   referralAll:[],
  //   referralVendor:[],
  //   referralPO:[],
  //   referralUser:[],
  //   allRevenue:[],
  //   vendorRevenue:[],
  //   poRevenue:[],
  //   usersRevenue:[],
  //   discontinuedAll:[],
  //   discontinuedVendor:[],
  //   discontinuedPO:[],
  //   discontinuedUser:[],
  //   userAllRegistration:[],
  //   vendorRegistration:[],
  //   poRegistration:[],
  //   userRegistration:[],
  //   activeAllUser:[],
  //   activeVendor:[],
  //   activePO:[],
  //   activeUser:[],
  //   cancelSubscriptionAll:[],
  //   cancelSubscriptionVendor:[],
  //   cancelSubscriptionPO:[],
  //   cancelSubscriptionuser:[],
  //   activeTimeOnSite:[],        
  // }
  executeData: any
  @Input() subtitle: string;

  @Input() numberScore: string;


  constructor(public dialog: MatDialog,
    private _apiService: GeneralApiService,
    private _notificationService: NotificationService,
    private translateService: TranslateService,
    private cdr: ChangeDetectorRef) { }
  ngOnDestroy(): void {
    this._apiService.post(`${api.superAdminParamUpdate}`, { id: 1, value: "180" })
      .subscribe((res: any) => {

      }, (err: any) => { this._apiService.isCompareLoader$.next(false) })

  }

  openDialog() {
    this.dialog.open(VendortotalCoregraphDialogComponent);
  }



  onFilterChange(data: any) {

    this.startDate = null
    this.endDate = null
    this.adminSetting = data.target.value
    if (data.target.value == null || data.target.value == 'null' || data.target.value == undefined || data.target.Value == "") {
      this.startDateControl.enable()
      this.endDateControl.enable()

      this.isCustomDate = true
      return
    }
    // else {
    //   this.startDateControl.disable()
    //   this.endDateControl.disable()

    //   this.cdr.detectChanges()
    // }

    this._apiService.isCompareLoader$.next(true)
    this._apiService.post(`${api.superAdminParamUpdate}`, { id: 1, value: data.target.value })
      .subscribe((res: any) => {
        this.isCustomDate = false
        this.getAllDashBoardData();
      }, (e: any) => {
        this._apiService.isCompareLoader$.next(false)
        this._notificationService.push("An error occured", 2)
      })


  }


  ngOnInit(): void {

    this.adminSetting = 180
    this._apiService.isLanguageSelector$.subscribe((res: any) => {
      this.translateService.use(res)
      this.cdr.detectChanges()
    })

    this._apiService.isCompareLoader$.next(true)
    this._apiService.post(`${api.superAdminParamUpdate}`, { id: 1, value: "180" })
      .subscribe((res: any) => {
        this.isCustomDate = false
        this.getAllDashBoardData();
      }, (e: any) => {
        this._notificationService.push("An error occured", 2)
        this._apiService.isCompareLoader$.next(false)
      })

  }


  getAllDashBoardData() {
    this._apiService.isCompareLoader$.next(true)
    Promise.all([
      this._apiService.get(`${api.superAdminDashboard}?startDate=${this.startDate}&endDate=${this.endDate}`).toPromise(),
      this._apiService.get(`${api.superAdminParam}?startDate=${this.startDate}&endDate=${this.endDate}`).toPromise(),
      this._apiService.get(`${api.superAdminCount}?startDate=${this.startDate}&endDate=${this.endDate}`).toPromise(),
    ]).then((res: any) => {

      if (res === null || res === undefined) {
        this._apiService.isCompareLoader$.next(false)
        this._notificationService.push("No data retrieved", 2);
        return
      }
      this._notificationService.push("Data retreived", 1)
      this.graphData = res[0].data
      this.executeData = res[0].dataDateRange
      this.superAdminCounts = res[2].data
      this.dateDiff = res[0].dateDiff
      this.startDateControl = new FormControl(new Date(res[0].dataDateRange.startDate));
      this.endDateControl = new FormControl(new Date(res[0].dataDateRange.endDate));
      if (!this.isCustomDate) {
        this.startDateControl.disable()
        this.endDateControl.disable()

      }
      // if(this.adminSetting == '' || this.adminSetting == undefined)
      // {
      //   this.adminSetting = res[1].data.value
      // }

      this.cdr.detectChanges()
      this._apiService.isCompareLoader$.next(false)
    }).catch(() => this._apiService.isCompareLoader$.next(false))
      .finally(() => { })
  }

  onStartDateChange(event: Event) {
    const inputStartDate = (event.target as HTMLInputElement).value;

    this.startDate = this._apiService.setInputControlDate(inputStartDate, 'startDate')

  }


  onEndDateChange(event: Event) {
    const inputEndDate = (event.target as HTMLInputElement).value;
    this.endDate = this._apiService.setInputControlDate(inputEndDate, 'endDate')


    if (this.startDate === null || this.startDate === undefined)
      return

    if (this.endDate === null || this.endDate === undefined)
      return


    if (!this.startDate) {
      this._notificationService.push("start date must be seleted first", 2)
      this.endDate = null
      return
    }

    if (this.startDate > this.endDate) {
      this._notificationService.push("start date must be lower then end date", 2)
      this.endDate = null
      return
    }
    this.getAllDashBoardData()
  }

  popUpChart(heading: any) {
    let requiredChartData!: any
    let requiredColorData!: any
    switch (heading) {
      case 'Revenue':
        requiredChartData = this.revenueGraphData;
        break;

      case 'New User Registration':
        requiredChartData = this.newRegistrationGraphData;
        break;

      case 'Active User':
        requiredChartData = this.activeUserGraphData;
        break;

      case 'Active Time On Site':
        requiredChartData = this.activeTimeOnSiteGraphData;
        break;

      case 'Referral SignUp':
        requiredChartData = this.referralSignUpGraphData;

        break;

      case 'Discontinued Registration':
        requiredChartData = this.discontinuedRegistrationGraphData;
        break;

      case 'Cancel Registration':
        requiredChartData = this.cancelRegistrationGraphData;
        break;

      case 'Monthly Subscription':
        requiredChartData = this.monthlySubsctionGraphData;
        break;

      case 'Yearly Subscription':
        requiredChartData = this.yearlySubsctionGraphData;
        break;

      default:
        break




    }
    if (requiredChartData === null || requiredChartData === undefined) {
      this._notificationService.push("No graph data", 2)
      return
    }
    let dialogRef = this.dialog.open(PopupchartComponent,
      {
        width: '90%',
        height: '60%',
        panelClass: 'graph-style',
        data: {
          name: heading,
          dashBoardData: requiredChartData,
        }
      })
  }

  getChartData(data: any) {

    switch (data.name) {
      case 'revenue':
        this.revenueGraphData = data.data
        break;
      case 'newUserRegistration':
        this.newRegistrationGraphData = data.data
        break;
      case 'activeUser':
        this.activeUserGraphData = data.data
        break;
      case 'activeTimeOnSite':
        this.activeTimeOnSiteGraphData = data.data
        break;
      case 'referralSignUp':
        this.referralSignUpGraphData = data.data
        break;
      case 'discontinuedRegistration':
        this.discontinuedRegistrationGraphData = data.data
        break;
      case 'cancelRegistration':
        this.cancelRegistrationGraphData = data.data
        break;
      case 'monthlySubscription':
        this.monthlySubsctionGraphData = data.data
        break;
      case 'yearlySubscription':
        this.yearlySubsctionGraphData = data.data
        break;

      default:
        break;
    }

  }
}
