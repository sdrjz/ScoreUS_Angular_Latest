import { I } from '@angular/cdk/keycodes';
import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { api } from '../api.endpoints';
import { NotificationService } from '../notification.service';
import { GeneralApiService } from '../services/appService/generalApiService';
import { UserdialogoutComponent } from '../general/userdialogout/userdialogout.component';
import { MatDialog } from '@angular/material/dialog';
import { tips } from '../tootTips';
import { TranslateService } from '@ngx-translate/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-kpiparameter',
  templateUrl: './kpiparameter.component.html',
  styleUrls: ['./kpiparameter.component.css']
})
export class KpiparameterComponent implements OnInit, OnDestroy, AfterContentInit {

  lineChartCount: number = 1;
  DeliveryTimeCount: number = 1;
  listPpvCount: number = 1;
  listLtaCount: number = 1;
  listNcrCount: number = 1;
  listOtdCount: number = 1;

  // replicaListScores:any[]=[]
  // replicaListAdmin:any[]=[]
  isChangedWithoutSave: boolean = false;
  hasOTDError: boolean = false;
  hasPPVError: boolean = false;
  hasNCRError: boolean = false;
  hasLTAError: boolean = false;
  scoreList: any[] = []
  adminList: any[] = []
  tips = tips
  responseData: any = {
    adminSettingList: [] = [],
    scoreSettingList: [] = []
  }
  maxScores: any = {
    timeDelivery: 0,
    nonConformanceReport: 0,
    purchasePriceVariance: 0,
    leadTimeAccuracy: 0,
  }
  lineChartData: any[] = []
  isDataValid: boolean = false;
  scoreSettingList: any[] = []
  responseLineChart: any[] = []
  responceEarlyDelivery: any[] = []
  responseListOTD: any[] = []
  responseListNCR: any[] = []
  responseListPPV: any[] = []
  responseListLTA: any[] = []
  loggedInUser: any
  viewFirst: any
  listOtdParameter: any[] = []
  listNcrParameter: any[] = []
  listPpvParameter: any[] = []
  listLtaParameter: any[] = []
  adminSettingList: any[] = []
  totalRecords: string;
  constructor(public _apiService: GeneralApiService,
    public _notificationService: NotificationService,
    public dialog: MatDialog,
    private translateService: TranslateService,
    private router: Router
  ) { }
  ngAfterContentInit(): void {
    this.isChangedWithoutSave = false
  }

  ngOnInit(): void {
    this._apiService.isLanguageSelector$.subscribe((res: any) => this.translateService.use(res))

    var user = localStorage.getItem('userData')
    if (user)
      this.loggedInUser = JSON.parse(user);
    // +this.loggedInUser?.tenantID
    this.createKpis("");

    this._apiService.submitKpiParams$.subscribe(
      (res: any) => {
        if (typeof res == "string" && res.includes("/")) {
          this.onSubmitBySubject(res);
        }

      })

  }



  createKpis(data: any) {
    this._apiService.isCompareLoader$.next(true)
    this._apiService.post(api.adminKpiSetting + '?tenantId=' + this.loggedInUser.tenantID, {}).subscribe((res: any) => {
      this.getKPIParameter(data)
    }, (e: any) => {
      this.getKPIParameter(data)
    })
  }

  onReset() {
    let dialogRef = this.dialog.open(UserdialogoutComponent,
      {
        data: {
          height: '75%',
          width: '40%',
          message: "Are you sure you want to reset these params?",
          heading: 'Reset params'
        }
      });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res === null || res === undefined)
        return
      this._apiService.isCompareLoader$.next(true)
      this._apiService.post(api.adminDeleteKpiSetting + "?tenantId=" + this.loggedInUser.tenantID, {})
        .subscribe((res: any) => {
          this.createKpis("resetParams")
        }, () => this._apiService.isCompareLoader$.next(false))

    })

  }


  getKPIParameter(data: any) {
    this.listOtdParameter = []
    this.listNcrParameter = []
    this.listPpvParameter = []
    this.listLtaParameter = []
    this._apiService.get(api.adminKpiSetting + '?tenantId=' + this.loggedInUser.tenantID)
      .subscribe((res: any) => {
        this._apiService.isCompareLoader$.next(false)
        let message: string

        if (data == "") {
          message = "KPI parameters data retrieved"
        } else {
          message = "KPI Params reset"
        }
        this.scoreSettingList = res?.data?.scoreSettingList;
        this.scoreSettingList.sort((a, b) => a.id - b.id);
        this._notificationService.push(message, 1)
        this.adminSettingList = JSON.parse(JSON.stringify(res.data?.adminSettingList))
        // this.replicaListAdmin = JSON.parse(JSON.stringify(res.data?.adminSettingList))
        res?.data?.scoreSettingList?.forEach((element: any) => {

          switch (element.parameterType) {
            case "OTD Parameter":
              this.listOtdParameter.push(element);
              break;
            case "NCR Parameter":
              this.listNcrParameter.push(element);
              break;
            case "PPV Parameter":
              this.listPpvParameter.push(element);
              break;
            case "LTA Parameter":
              this.listLtaParameter.push(element);
              break;
            default:
              break;
          }

        });
        this.responceEarlyDelivery = this.getResponceEarlyData()
        this.lineChartData = this.getLineData()


        this.maxScores.timeDelivery = this.listOtdParameter[0].score
        this.maxScores.nonConformanceReport = this.listNcrParameter[0].score
        this.maxScores.purchasePriceVariance = this.listPpvParameter[0].score
        this.maxScores.leadTimeAccuracy = this.listLtaParameter[0].score


        let sum = Object.values(this.maxScores).reduce((a: number, b: number) => a + b, 0)
        if (sum != 100) {
          this.isDataValid = false;
        }
        {
          this.isDataValid = true;
        }
      }, (e: any) => this._apiService.isCompareLoader$.next(false))

  }

  // [...this.listLtaParameter, ...this.listNcrParameter, ...this.listOtdParameter, ...this.listPpvParameter]
  //      this.adminSettingList = this.responseData.adminSettingList = [...this.responceEarlyDelivery, ...this.lineChartData]


  getListOTD(data: any) {
    this.hasOTDError = false
    this.responseListOTD = data;
    this.listOtdParameter = this.responseListOTD.map((i: any) => {
      return {
        ...i,
        score: i.score == "" ? 0 : +i.score,
      }
    })
    // this.replicaListScores = [...this.listLtaParameter, ...this.listNcrParameter, ...this.listOtdParameter, ...this.listPpvParameter]
    // this.replicaListScores.sort((a, b) => a.id - b.id);
    this.maxScores.timeDelivery = this.listOtdParameter[0].score
    this.maxScores.nonConformanceReport = this.listNcrParameter[0].score
    this.maxScores.purchasePriceVariance = this.listPpvParameter[0].score
    this.maxScores.leadTimeAccuracy = this.listLtaParameter[0].score

    this.isChangedWithoutSave = true

    let sum = Object.values(this.maxScores).reduce((a: number, b: number) => a + b, 0)
    if (sum != 100) {
      this.isDataValid = false;
    }
    {
      this.isDataValid = true;
    }


  }



  getListNCR(data: any) {
    this.hasNCRError = false
    this.responseListNCR = data;
    this.listNcrParameter = this.responseListNCR.map((i: any) => {
      return {
        ...i,
        score: i.score == "" ? 0 : +i.score,
      }
    })



    this.isChangedWithoutSave = true

    this.maxScores.timeDelivery = this.listOtdParameter[0].score
    this.maxScores.nonConformanceReport = this.listNcrParameter[0].score
    this.maxScores.purchasePriceVariance = this.listPpvParameter[0].score
    this.maxScores.leadTimeAccuracy = this.listLtaParameter[0].score

    let sum = Object.values(this.maxScores).reduce((a: number, b: number) => a + b, 0)
    if (sum != 100) {
      this.isDataValid = false;
    }
    {
      this.isDataValid = true;
    }


  }


  getListLTA(data: any) {
    this.hasLTAError = false
    this.responseListLTA = data;
    this.listLtaParameter = this.responseListLTA.map((i: any) => {
      return {
        ...i,
        score: i.score == "" ? 0 : +i.score,
      }
    })

    this.maxScores.timeDelivery = this.listOtdParameter[0].score
    this.maxScores.nonConformanceReport = this.listNcrParameter[0].score
    this.maxScores.purchasePriceVariance = this.listPpvParameter[0].score
    this.maxScores.leadTimeAccuracy = this.listLtaParameter[0].score

    this.isChangedWithoutSave = true

    let sum = Object.values(this.maxScores).reduce((a: number, b: number) => a + b, 0)
    if (sum != 100) {
      this.isDataValid = false;
    }
    {
      this.isDataValid = true;
    }

  }


  getListPPV(data: any) {
    this.hasPPVError = false
    this.responseListPPV = data;
    this.listPpvParameter = this.responseListPPV.map((i: any) => {
      return {
        ...i,
        score: i.score == "" ? 0 : +i.score,
      }
    })
    // this.replicaListScores = [...this.listLtaParameter, ...this.listNcrParameter, ...this.listOtdParameter, ...this.listPpvParameter]
    // this.replicaListScores.sort((a, b) => a.id - b.id);
    this.maxScores.timeDelivery = this.listOtdParameter[0].score
    this.maxScores.nonConformanceReport = this.listNcrParameter[0].score
    this.maxScores.purchasePriceVariance = this.listPpvParameter[0].score
    this.maxScores.leadTimeAccuracy = this.listLtaParameter[0].score

    this.isChangedWithoutSave = true

    // this.maxScores.timeDelivery = Math.max(...this.responseListOTD?.map((i: any) => i.score))
    // this.maxScores.nonConformanceReport = Math.max(...this.listNcrParameter?.map((i: any) => i.score))
    // this.maxScores.purchasePriceVariance = Math.max(...this.listPpvParameter?.map((i: any) => i.score))
    // this.maxScores.leadTimeAccuracy = Math.max(...this.listLtaParameter?.map((i: any) => i.score))

    let sum = Object.values(this.maxScores).reduce((a: number, b: number) => a + b, 0)
    if (sum != 100) {
      this.isDataValid = false;
    }
    {
      this.isDataValid = true;
    }

  }

  getDeliveryTimeData(data: any) {
    this.responceEarlyDelivery = data


    this.isChangedWithoutSave = true

    // this.replicaListAdmin= [...this.responceEarlyDelivery, ...this.lineChartData]
  }


  getLineChartData(data: any) {
    this.lineChartData = data
    this.isChangedWithoutSave = true

  }

  onSubmit() {
    if (this.hasLTAError || this.hasNCRError || this.hasOTDError || this.hasPPVError)
      return


    let sum = Object.values(this.maxScores).reduce((a: number, b: number) => a + b, 0)
    if (sum != 100)
      this.isDataValid = false


    if (!this.isDataValid) {
      this._notificationService.push("Kpi parameters sum must be equal to 100", 2)
      return
    } else {

      let dialogRef = this.dialog.open(UserdialogoutComponent,
        {
          data: {
            height: '75%',
            width: '40%',
            message: "Are you sure you want to save these params?",
            heading: 'Update params'
          }
        });

      dialogRef.afterClosed().subscribe((res: any) => {
        if (res === null || res === undefined)
          return



        this.responseData.scoreSettingList = [...this.listLtaParameter, ...this.listNcrParameter, ...this.listOtdParameter, ...this.listPpvParameter]
        this.scoreSettingList = [...this.listLtaParameter, ...this.listNcrParameter, ...this.listOtdParameter, ...this.listPpvParameter]
        this.adminSettingList = this.responseData.adminSettingList = [...this.responceEarlyDelivery, ...this.lineChartData]

        this.responseData.scoreSettingList.sort((a, b) => a.id - b.id);
        this._apiService.isCompareLoader$.next(true)
        this._apiService.post(api.adminKpiSettingUpdate, this.responseData.scoreSettingList)
          .subscribe((res: any) => {
            this._notificationService.push('admin scores updated', 1)
            this._apiService.post(api.adminSetting, this.responseData.adminSettingList)
              .subscribe((res: any) => {


                this._notificationService.push('admin settings updated', 1)
                // this.replicaListAdmin = JSON.parse(JSON.stringify([this.responseData.adminSettingList]))
                // this.replicaListScores = JSON.parse(JSON.stringify([this.responseData.scoreSettingList]))
                this.isChangedWithoutSave = false;
                this.maxScores.timeDelivery = Math.max(...this.listOtdParameter?.map((i: any) => i.score))
                this.maxScores.nonConformanceReport = Math.max(...this.listNcrParameter?.map((i: any) => i.score))
                this.maxScores.purchasePriceVariance = Math.max(...this.listPpvParameter?.map((i: any) => i.score))
                this.maxScores.leadTimeAccuracy = Math.max(...this.listLtaParameter?.map((i: any) => i.score))
                this._apiService.isCompareLoader$.next(false)
                //Admin Setting Report Value Start

                localStorage.setItem('kpiSettingAdmin', JSON.stringify(this.adminSettingList));
                if (this.adminSettingList[7].value == '0') {
                  this.viewFirst = false;
                } else {
                  this.viewFirst = true;
                }
                localStorage.setItem('kpiSettingSendReportValue', JSON.stringify(this.viewFirst));

                //  Admin Seting Report Value End
              })

          })





      })


    }

  }


  onSubmitBySubject(data: any) {
    if (this.hasLTAError || this.hasNCRError || this.hasOTDError || this.hasPPVError)
      return


    let sum = Object.values(this.maxScores).reduce((a: number, b: number) => a + b, 0)
    if (sum != 100)
      this.isDataValid = false


    if (!this.isDataValid) {
      this._notificationService.push("Kpi parameters sum must be equal to 100", 2)
      return
    } else {
      this.responseData.scoreSettingList = [...this.listLtaParameter, ...this.listNcrParameter, ...this.listOtdParameter, ...this.listPpvParameter]
      this.scoreSettingList = [...this.listLtaParameter, ...this.listNcrParameter, ...this.listOtdParameter, ...this.listPpvParameter]
      this.adminSettingList = this.responseData.adminSettingList = [...this.responceEarlyDelivery, ...this.lineChartData]

      this.responseData.scoreSettingList.sort((a, b) => a.id - b.id);
      this._apiService.isCompareLoader$.next(true)
      this._apiService.post(api.adminKpiSettingUpdate, this.responseData.scoreSettingList)
        .subscribe((res: any) => {
          this._notificationService.push('admin scores updated', 1)
          this._apiService.post(api.adminSetting, this.responseData.adminSettingList)
            .subscribe((res: any) => {


              this._notificationService.push('admin settings updated', 1)
              // this.replicaListAdmin = JSON.parse(JSON.stringify([this.responseData.adminSettingList]))
              // this.replicaListScores = JSON.parse(JSON.stringify([this.responseData.scoreSettingList]))
              this.maxScores.timeDelivery = Math.max(...this.listOtdParameter?.map((i: any) => i.score))
              this.maxScores.nonConformanceReport = Math.max(...this.listNcrParameter?.map((i: any) => i.score))
              this.maxScores.purchasePriceVariance = Math.max(...this.listPpvParameter?.map((i: any) => i.score))
              this.maxScores.leadTimeAccuracy = Math.max(...this.listLtaParameter?.map((i: any) => i.score))
              this.isChangedWithoutSave = false;
              this._apiService.submitKpiParams$.next(true);
              this.router.navigateByUrl(data);
              this._apiService.isCompareLoader$.next(false)
            }, (e: any) => {


              this._apiService.isCompareLoader$.next(false)
            })

        })




    }

  }

  getResponceEarlyData() {
    return this.adminSettingList.filter((i: any) => i.attribute.toLowerCase() == 'accept early delivery'
      || i.attribute.toLowerCase() == 'not accept early delivery'
      || i.attribute.toLowerCase() == 'receiving buffer days'
      || i.attribute.toLowerCase() == 'price variance day range min'
      || i.attribute.toLowerCase() == 'price variance day range max'
      || i.attribute.toLowerCase() == 'order acknowledging days'
      || i.attribute.toLowerCase() == 'Scorecard Filter')
  }

  getLineData() {
    return this.adminSettingList.filter((i: any) => i.attribute.toLowerCase() == 'line chart report option'
      || i.attribute.toLowerCase() == 'view first'
      || i.attribute.toLowerCase() == 'send direct'
      || i.attribute.toLowerCase() == 'by vendor'
      || i.attribute.toLowerCase() == 'by material')
  }

  getErrorFromOTDParameters() {
    this.hasOTDError = true;
  }

  getErrorFromLTAParameters() {
    this.hasLTAError = true;
  }
  getErrorFromPPVParameters() {
    this.hasPPVError = true;
  }
  getErrorFromNCRParameters() {
    this.hasNCRError = true;
  }

  resetIsChangedWithoutSave() {
    this.isChangedWithoutSave = false;
  }

  ngOnDestroy(): void {
  }
}
