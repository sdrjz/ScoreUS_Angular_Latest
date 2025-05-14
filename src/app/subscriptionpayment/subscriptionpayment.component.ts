import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { api } from '../api.endpoints';
import { GeneralApiService } from '../services/appService/generalApiService';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-subscriptionpayment',
  templateUrl: './subscriptionpayment.component.html',
  styleUrls: ['./subscriptionpayment.component.css']
})
export class SubscriptionpaymentComponent implements OnInit {
  loggedInUser:any
  currentDate:any
  isReferralAllowed : any
  constructor(private _apiService:GeneralApiService,
    private translateService:TranslateService,
    private cdr :ChangeDetectorRef) { }


  getProjectsUrl: string = api.billing
  poRowcolumns = [
    {
      def: 'id',
      name: '#',
      key: 'id',
    },
    {
      def: 'paymentMode',
      name: 'Item',
      key: 'paymentMode',
    },
    {
      def: 'billingDate',
      name: 'Invoice Date',
      key: 'billingDate',
      projection: true
    },
    {
      def: 'amount',
      name: 'Amount',
      key: 'amount',
    },
    {
      def: 'status',
      name: 'Status',
      key: 'status',
      projection: true
    },
    {
      def: 'action',
      name: 'Action',
      key: 'action',
      projection: true
    },

  ];



  ngOnInit(): void {
     
   
    var user = localStorage.getItem('userData')
    if (user)
      this.loggedInUser = JSON.parse(user)


    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    this.currentDate = new Date().toString().split(" ")[0] + "," + new Date().toString().split(" ")[1] + " " + new Date().toString().split(" ")[2] + " " + new Date().toString().split(" ")[3];


    this.currentDate = new Date().toString().split(" ")[0] + "," + new Date().toString().split(" ")[1] + " " + new Date().toString().split(" ")[2] + " " + new Date().toString().split(" ")[3];
    
    this._apiService.get(api.getSuperAdminReferral)
    .subscribe((res:any)=>{
      this.isReferralAllowed = res.data.value == '1' ? true : false;
    },
  (err:any)=>{
    this._apiService.isCompareLoader$.next(false)
    
  })


  }


  getBillDetail(data: any) {
    this._apiService.get(`api.billDetial/${data.tenantId}/${data.subscriptionId}`)
      .subscribe((res: any) => {
        let resData = res.data
        let pdfData = this.getBillPDF(resData)
        let Pdf = new jsPDF('p', 'mm', 'a4',);

        Pdf.html(pdfData, {
          callback: (pdf) => {

            pdf.save()

          }
        })
      })
  }



  getBillPDF(data: any) {
    return `<div class="container">
    <div class="row">
        <div class="w-100 d-flex" style="background-color:lightgrey !important;">
            <div class="ml-5">
            <img src="../../../assets/images/score_us_logo.PNG" alt="">
            </div>
            <div class="text-center d-flex"><h2>Bill Detail(${this.loggedInUser.companyName})</h2></div>
            <div class="text-right d-flex">Date :${this.currentDate} </div>
        </div>
        <div class="p-5"></div>
        <div class="d-flex flex-row">
            <div class="d-flex mr-auto">
                Billing Date: ${data.billingDate}
            </div>  
            <div class="d-flex">
                Expiry Date: ${data.expiryDate}
            </div>
        </div>
        <div class="d-flex flex-column">
            <div class="d-flex flex-row">
                <div class="d-flex flex-row mr-auto">Package Name : ${data.name}</div>
                <div class="d-flex ">Description : ${data.description}</div>
            </div>
            <div class="d-flex flex-row">
                <div class="d-flex flex-row mr-auto">Status : ${data.status}</div>
                <div class="d-flex ">Payment Mode : ${data.paymentMode}</div>
            </div>
            <div class="d-flex flex-row">
                <div class="d-flex flex-row mr-auto">Amount : ${data.amount}</div>
                <div class="d-flex "></div>
            </div>
        </div>

    </div>
</div>`
  }


}
