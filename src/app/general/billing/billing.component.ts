import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import jsPDF from 'jspdf';
import { api } from 'src/app/api.endpoints';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit,AfterViewInit {
  loggedInUser: any
  currentUrl :string = ""
  currentDate: any
  constructor(private _apiService: GeneralApiService,
    private translateService:TranslateService,
    private cdr : ChangeDetectorRef,
    private router : Router) { }
  ngAfterViewInit(): void {
  //     if(this.currentUrl == '/user/mybills')
  //       {
  //         $("#row").append("<div id='fahad'></div>")
  //         var row = document.getElementById("row")
  //         var div= document.createElement("div")
  //         div.classList.add("col-3")
  //         var div2 = document.getElementById("col-12")
  //         div2.classList.remove("col-xl-12")
  //         div2.classList.remove("col-lg-12")
  //         div2.classList.add('col-9')
  //         row.insertBefore(div, row.firstChild);
  //         this.cdr.detectChanges()
  //         }
  }



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
    this.currentUrl = this.router.url
    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    var user = localStorage.getItem('userData')
    if (user)
      this.loggedInUser = JSON.parse(user)
  




  }


  getBillDetail(data: any) {
    this._apiService.isCompareLoader$.next(true)
    this._apiService.get(`${api.billDetial}/${data.id}`)
      .subscribe((res: any) => {
        
        let resData = res.data
        this.currentDate = res.currentDate
        let pdfData = this.getBillPDF(resData)
        let Pdf = new jsPDF('p', 'mm', 'a4');

        Pdf.html(pdfData, {
          callback: (pdf) => {

            pdf.save()
            this._apiService.isCompareLoader$.next(false)
          },
          autoPaging: 'text',
          x: 5,
          y: 0,
          width:200,
          windowWidth: 750
        })
      },((e:any)=>{
        this._apiService.isCompareLoader$.next(false);
      }))

  }



//   getBillPDF(data: any) {
//     return `<div class="container">
//     <div class="row">
//         <div class="w-100 d-flex" style="background-color:lightgrey !important;">
//             <div class="mr-3">
//             <img src="../../../assets/images/score_us_logo.PNG" width="100px" alt="">
//             </div>
//             <div class="text-center d-flex mt-1"><h4 class="d-flex flex-row">Bill Detail(${this.loggedInUser.companyName})</h4></div>
//             <div class=" d-flex justify-content-end mt-1 ml-2">Date :${this.currentDate} </div>
//         </div>
//         <div class="p-5"></div>
//         <div class="d-flex flex-row">
//             <div style="display:flex; flex-flow:row wrap;flex:1;">
//                 Billing Date: ${data.billingDate.split("T")[0]}
//             </div>  
//             <div class="d-flex justify-content-end ml-5">
//                 Expiry Date: ${data.expiryDate.split("T")[0]}
//             </div>
//         </div>
//         <div class="d-flex flex-column">
//             <div class="d-flex flex-row">
//                 <div style="display:flex; flex-flow:row wrap;flex:1;">Package Name : ${data.name}</div>
//                 <div class="d-flex  justify-content-end " style="margin-left:100px !important;">Description : ${data.description}</div>
//             </div>
//             <div class="d-flex flex-row">
//                 <div style="display:flex; flex-flow:row wrap;flex:1;">Status : ${data.status}</div>
//                 <div class="d-flex justify-content-end ml-5">Payment Mode : ${data.paymentMode}</div>
//             </div>
//             <div class="d-flex flex-row">
//                 <div style="display:flex; flex-flow:row wrap;flex:1;">Amount :$${data.amount}</div>
//                 <div class="d-flex "></div>
//             </div>
//         </div>

//     </div>
// </div>`
//   }



getBillPDF(data: any) {
  return `
  <div style="width: 98%; margin-top: 0.5rem; border: 1px solid; padding: 0.5rem; padding-left: 1rem; padding-right: 1rem;">
        <div  style="display: flex; flex-direction: row; justify-content: center;">
          <img src="../../../assets/images/score_us_logo.PNG" width="100" height="60" />
        </div>
        <div style="margin-top: 3rem;" >
          <div style="display: flex; flex-direction: row; justify-content: space-between;">
            <div style="border : 1px solid #dee2e6; max-width: 48%;min-width: 48%;">
              <div style="display: flex ; flex-direction: column;">
                <div style="display: flex ; flex-direction: row;">
                  <h3 style="margin-left:10px;color:rgb(186, 50, 50);font-weight:bolder;">ScoreUs</h3>
                </div>
                <div style="font-weight: bolder;color:rgb(186, 50, 50);font-size:smaller;margin-left:10px">${this.loggedInUser.companyName}</div>
                <div style="font-weight: bold;color:rgb(186, 50, 50);font-size:small;margin-left:10px">${this.loggedInUser.firstName}&nbsp;${this.loggedInUser.lastName}</div>
                <div style="font-weight: bold;color:rgb(186, 50, 50);font-size:small;margin-left:10px">${this.loggedInUser.roleName}</div>
              </div>
            </div>
            <div  style="border : 1px solid #dee2e6; max-width: 48%;min-width: 48%;height:133px; background-color: #f8f9fa; ">
              <div  style="width:100%;background-color:rgb(186, 50, 50);">
                <p  style="margin-left: 0.5rem; margin-right: 0.5rem;color: white;font-weight: bold;height: fit-content;margin-top : -0px;">INVOICE</p>
              </div>
              <div  style="display: flex; flex-direction: row; justify-content:space-between ;margin-left: 0.5rem; margin-right: 0.5rem;margin-bottom:10px;">
                <div>Issued</div>
                <div>${this.currentDate.split("/")[0] + "<span style='margin-left:1px!important;margin-right:1px !important;'>/</span>" + this.currentDate.split("/")[1] + "<span style='margin-left:2px!important;margin-right:2px!important;'>/</span>" + this.currentDate.split("/")[2] }</div>
              </div>
              <div style="display: flex; flex-direction: row; justify-content:space-between ;margin-left: 0.5rem; margin-right: 0.5rem;">
                <div>Billing</div>
                <div>${data.billingDate.split("/")[0] + "<span style='margin-left:1px!important;margin-right:1px !important;'>/</span>" + data.billingDate.split("/")[1] + "<span style='margin-left:1px!important;margin-right:1px !important;'>/</span>" + data.billingDate.split("/")[2] }</div>
              </div>
              <div style="display: flex; flex-direction: row; justify-content:space-between ;margin-left: 0.5rem; margin-right: 0.5rem;">
                <div>Expiry</div>
                <div>${data.expiryDate.split("/")[0] + "<span style='margin-left:1px!important;margin-right:1px !important;'>/</span>" + data.expiryDate.split("/")[1] + "<span style='margin-left:1px!important;margin-right:1px !important;'>/</span>" + data.expiryDate.split("/")[2] }</div>
            
              </div>
              <div  style="width:100%; background-color:rgb(186, 50, 50);">
                <p  style="margin-left: 0.5rem; margin-right: 0.5rem;color: white;font-weight: bold;">&nbsp;</p>
              </div>
            </div>
          </div>
          <div style="width:100%;margin-top: 3rem;">
            <p style="color:brown;"><span style="margin-right:5px;">FOR</span><span style="margin-right:10px;">RENDERED</span> SERVICE:</p>
            <table style="width: 100%;margin-bottom: 1rem;vertical-align: top;">
              <thead style="background-color:rgb(186, 50, 50);">
                <tr>
                  <th scope="col" style="color:white;text-align:left">PRODUCT</th>
                  <th scope="col" style="color:white;text-align:left">DESCRIPTION</th>
                  <th scope="col" style="color:white;text-align:left;">STATUS</th>
                  <th scope="col" style="color:white;text-align:left;">PAYMENT MODE</th>
                  <th scope="col" style="color:white;text-align:left;">PRICE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" style="color:brown;">${data.name}</th>
                  <td style="color:brown;width:30px!important;padding-right:10px;word-spacing: -3px; ">${data.description}</td>
                  <td style="color:brown;">${data.status}</td>
                  <td style="color:brown;">${data.paymentMode}</td>
                  <td style="color:brown;"><span>$</span>${data.amount}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="" style="margin-top:20%;">
            <div style="display: flex; flex-flow:row wrap;">
              <div  style="width:35%;color:brown; ">
                <p style="color:brown;">Scoreus message</p>
                <p style="color:brown;">Thank you for your business. Please contact us at <b stlye="letter-spacing:0px;word-spacing:0px;">contact@scoreus.com</b> for any questions regarding this invoice.</p>
              </div>
              <div style="width:5%;"></div>
              <div style="width:60%;display:table;">
                <div style="border-bottom: 1px solid #ccc;display:table-cell;vertical-align:bottom">
                  <div style="color:brown;float:left;">Total</div>
                  <div style="color:brown;float:right;"><span>$</span> ${data.amount}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  `;
}




// getBillPDF(data: any) {
//   return `<div class="container-fluid mt-2 border  p-2 px-3">
//       <div class="d-flex flex-row justify-content-center">
//           <img src="../../../assets/images/score_us_logo.PNG" width="100" height="60" />
//       </div>
//       <div class="mt-5 px-5">
//           <div class="d-flex flex-row justify-content-between">
//               <div class="border" style="max-width: 48%;min-width: 48%;">

//                   <div class="d-flex flex-column">
//                       <div class=" d-flex flex-row    ">
//                           <h3 style="margin-left:10px;color:rgb(186, 50, 50);font-weight:bolder;">ScoreUs</h3>
//                       </div>
//                       <div style="font-weight: bolder;color:rgb(186, 50, 50);font-size:smaller;margin-left:10px">${this.loggedInUser.companyName}</div>
//                       <div style="font-weight: bold;color:rgb(186, 50, 50);font-size:small;margin-left:10px">${this.loggedInUser.firstName}&nbsp;${this.loggedInUser.lastName}  </div>
//                       <div style="font-weight: bold;color:rgb(186, 50, 50);font-size:small;margin-left:10px">${this.loggedInUser.roleName}</div>
                      
//                   </div>

//               </div>




//               <div class="border bg-light" style="max-width: 48%;min-width: 48%;height:133px;">
//                   <div class="w-100" style="background-color:rgb(186, 50, 50);">
//                       <p class="mx-2" style="color: white;font-weight: bold;height: fit-content;">Invoice</p>
//                   </div>
//                   <div class="d-flex flex-row justify-content-between mx-2" style="margin-top:-5px;">
//                       <div>Isseud</div>
//                       <div>${this.currentDate}</div>
//                   </div>
//                   <div class="d-flex flex-row justify-content-between mx-2">
//                       <div>Billing</div>
//                       <div>${data.billingDate.split("T")[0]}</div>
//                   </div>
//                   <div class="d-flex flex-row justify-content-between mx-2">
//                       <div>Expiry</div>
//                       <div>${data.expiryDate.split("T")[0]}</div>
//                   </div>
//                   <div class="w-100" style="background-color:rgb(186, 50, 50);">
//                       <p class="mx-2" style="color: white;font-weight: bold;">&nbsp</p>
//                   </div>

//               </div>
//           </div>


//           <div class="mt-5">
//               <h6 style="color:brown;">FOR RENDERED SERVICE:</h6>
//               <table class="table">
//                   <thead style="background-color:rgb(186, 50, 50);">
//                     <tr>
//                       <th scope="col" style="color:white;">PRODUCT/SERVICE</th>
//                       <th scope="col" style="color:white;">DESCRIPTION</th>
//                       <th scope="col" style="color:white;">STATUS</th>
//                       <th scope="col" style="color:white;">PAYMENT MODE</th>
//                       <th scope="col" style="color:white;">PRICE</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <th scope="row" style="color:brown;">${data.name}</th>
//                       <td style="color:brown;">${data.description}</td>
//                       <td style="color:brown;">${data.status}</td>
//                       <td style="color:brown;">${data.paymentMode}</td>
//                       <td style="color:brown;">${data.amount}</td>
//                     </tr>
                    
//                   </tbody>
//                 </table>
//           </div>
//           <div class="" style="margin-top:12%;">
//               <div class="row">
//                   <div class="col-sm-5 container" style="color:brown;">
//                       <p style="color:brown;">
//                           Score us message
//                       </p>
//                       <p style="color:brown;">Thank you for your business Please contact us with any questions regarding this invoice.
//                       </p>
//                       </div>
//                   <div class="col-sm-6">
//                       <div class="border-bottom d-flex flex-row justify-content-between">
//                           <div style="color:brown;">Total</div><div style="color:brown;">${data.amount}$</div>
//                       </div>
//                   </div>
//               </div>
//           </div>


//       </div>
//   </div>


//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
//       integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
//       crossorigin="anonymous"></script>`
// }




}
