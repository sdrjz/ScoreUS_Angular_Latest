import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpResponse,
} from "@angular/common/http";
import { APP_CONFIG } from "src/app/core/app.config";
import { Subject } from "rxjs";

//import { Router } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class graphService {
    ltaDetail:any[]
    ppvDetail:any[];
    ncrDetail:any[];
    otdDetail:any[];

    constructor(
		private http: HttpClient,
		// private toastr: ToastrService,
		// private router: Router
	) {}




getLtaNativeElement(listLta:any[]){

let chartData= ` <div  style="height:100px !important;background-color: #d6dce5; width:150%;" >
<h2 style="color: #9c918a !important;" class="d-flex justify-content-center align-items-center">Vendor LTA Detail</h2>
</div>
<div class="container-fluid"  > <div class="row">       
        <div class="col-sm-12>    
            <div class="container-fluid">    
            <table class="table table-striped">
                   <thead>
                      <tr>
                        <th scope="col">Accurate</th>
                        <th scope="col">Posting Date</th>
                        <th scope="col">Issue Date</th>
                        <th scope="col">Lt Vendor</th>
                        <th scope="col">PO#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Material</th>
                        <th scope="col">Material Description</th>
                        <th scope="col">Plant</th>
                    <th scope="col">Commodity</th>
                     </tr>
                    </thead>
                    <tbody>`
            listLta.forEach((i:any)=>{
                chartData = chartData+`<tr style="height:20px;">`;
                chartData = chartData+"<td>"+i.lT_Accurate+"</td>";
                chartData = chartData+"<td>"+i.posting_Date.split(" ")[0]+"</td>";
                chartData = chartData+"<td>"+i.issue_Date.split(" ")[0]+"</td>";
                chartData = chartData+"<td>"+i.vendorName+"</td>";
                chartData = chartData+"<td>"+i.purchasing_Document+"</td>";
                chartData = chartData+"<td>"+i.item+"</td>";
                chartData = chartData+"<td>"+i.material+"</td>";
                chartData = chartData+"<td>"+i.material_Description+"</td>";
                chartData = chartData+"<td>"+i.plantCode+"</td>";
                chartData = chartData+"<td>"+i.commodity+"</td></tr>";
             
                
            })
            chartData = chartData+"</table></div></div></div></div>"

return chartData;
}
getNcrNativeElement(listLta:any[]){

let chartData= `<div  style="height:100px !important;background-color: #d6dce5; width:210%;" >
<h2 style="color: #9c918a !important;" class="d-flex justify-content-center align-items-center">Vendor NCR Detail</h2>
</div>
<div class="container-fluid"> <div class="row">       
        <div class="col-sm-12">    
            <div class="container-fluid">    
            <table class="table table-striped">
                   <thead>
                      <tr>
                        <th scope="col">Vendor</th>
                        <th scope="col">Vendor name</th>
                        <th scope="col">Created on</th>
                        <th scope="col">Material</th>
                        <th scope="col">Part Description</th>
                        <th scope="col">Compl</th>
                        <th scope="col">Order</th>
                        <th scope="col">UOM</th>
                        <th scope="col">Buyer#</th>
                        <th scope="col">PO#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Posting date</th>
                        <th scope="col">Material cost</th>
                        <th scope="col">NCR cost</th>
                        <th scope="col">Plant</th>
                     </tr>
                    </thead>
                    <tbody>`
            listLta.forEach((i:any)=>{
                chartData = chartData+`<tr style="height:20px;">`;
                chartData = chartData+`<td style="width:auto !important;">`+i.vendorCode+`</td>`;
                chartData = chartData+`<td style="width:auto !important;">`+i.vendorName+"</td>";
                chartData = chartData+`<td style="width:auto !important;">`+i.created_On+"</td>";
                chartData = chartData+`<td style="width:auto !important;">`+i.material+"</td>";
                chartData = chartData+`<td style="width:auto !important;">`+i.part_Description+"</td>";
                chartData = chartData+`<td style="width:auto !important;">`+i.completionDate.split(" ")[0]+"</td>";
                chartData = chartData+`<td style="width:auto !important;">`+i.order_Qty+"</td><";
                chartData = chartData+`<td style="width:auto !important;">`+i.unit_of_Measure+"</td>";
                chartData = chartData+`<td style="width:auto !important;">`+i.purchasing_Doc+"</td>";
                chartData = chartData+`<td style="width:auto !important;">`+i.purchGroup+"</td>";
                chartData = chartData+`<td style="width:auto !important;">`+i.item_pur_doc+"</td>";
                chartData = chartData+`<td style="width:auto !important;">`+i.posting_Date.split(" ")[0]+"</td>";
                chartData = chartData+`<td style="width:auto !important;">`+i.material_Cost+"</td>";
                chartData = chartData+`<td style="width:auto !important;">`+i.ncR_Cost+"</td>";
                chartData = chartData+`<td style="width:auto !important;">`+i.plantCode+"</td></tr> </tbody>";
                
                
            })
            chartData = chartData+"</table></div></div></div></div>"

return chartData;
}

getOtdNativeElement(listLta:any[]){

let chartData= ` <div  style="height:100px !important;background-color: #d6dce5; width:200%;" >
<h2 style="color: #9c918a !important;" class="d-flex justify-content-center align-items-center">Vendor OTD Detail</h2>
</div>
<div class="container-fluid"  > <div class="row">       
        <div class="col-sm-12">    
            <div class="container-fluid">    
            <table class="table table-striped">
                   <thead>
                      <tr>
                        <th scope="col">Ontime</th>
                        <th scope="col">Days</th>
                        <th scope="col">Posting Date</th>
                        <th scope="col">Rel Date</th>
                        <th scope="col">Vendor</th>
                        <th scope="col">VendorName</th>
                        <th scope="col">PO#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Material</th>
                        <th scope="col">Material Description</th>
                        <th scope="col">UOM</th>
                    <th scope="col">Net Order Price</th>
                    <th scope="col">Currency</th>
                     </tr>
                    </thead>
                    <tbody>`
            listLta.forEach((i:any)=>{
                chartData = chartData+`<tr style="height:20px;">`;
                chartData = chartData+"<td>"+i.ontime+"</td>";
                chartData = chartData+"<td>"+i.pastdue_Days+"</td>";
                chartData = chartData+"<td>"+i.posting_Date.split(" ")[0]+"</td>";
                chartData = chartData+"<td>"+i.stat_Rel_Del.split(" ")[0]+"</td>";
                chartData = chartData+"<td>"+i.vendorCode+"</td>";
                chartData = chartData+"<td>"+i.vendorName+"</td>";
                chartData = chartData+"<td>"+i.purchasing_Document+"</td>";
                chartData = chartData+"<td>"+i.item+"</td>";
                chartData = chartData+"<td>"+i.material+"</td>";
                chartData = chartData+"<td>"+i.material_Description+"</td>";
                chartData = chartData+"<td>N/A</td>";
                chartData = chartData+"<td>"+i.net_Order_Price+"</td>";
                chartData = chartData+"<td>"+i.currency+"</td></tr>";
             
                
            })
            chartData = chartData+"</table></div></div></div></div>"

return chartData;
}

getPPVNativeElement(listLta:any[]){

    let chartData= ` <div  style="height:100px !important;background-color: #d6dce5; width:200%;" >
    <h2 style="color: #9c918a !important;" class="d-flex justify-content-center align-items-center">Vendor PPV Detail</h2>
    </div>
    <div class="container-fluid"  > <div class="row">       
            <div class="col-sm-12">    
                <div class="container-fluid">    
                <table class="table table-striped">
                       <thead>
                          <tr>
                            <th scope="col">Vendor code</th>
                            <th scope="col">Vendor Name</th>
                            <th scope="col">Material</th>
                            <th scope="col">Material Discription</th>
                            <th scope="col">Price Discripency</th>
                            <th scope="col">Discripency%</th>
                            <th scope="col">Days</th>
                            <th scope="col">Increased Amount</th>
                            <th scope="col">Latest Posting Date</th>
                            <th scope="col">Latest Price</th>
                            <th scope="col">Latest PO</th>
                            <th scope="col">Latest PO Item</th>
                            <th scope="col">Last posting Date</th>
                            <th scope="col">Last Price</th>
                            <th scope="col">Last PO</th>
                            <th scope="col">Last PO Item</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">OrderIunit</th>
                        <th scope="col"></th>
                        <th scope="col">Currency</th>
                         </tr>
                        </thead>
                        <tbody>`
                listLta.forEach((i:any)=>{
                    chartData = chartData+`<tr style="height:20px;">`;
                    chartData = chartData+"<td>"+i.vendorName+"</td>";
                    chartData = chartData+"<td>"+i.vendorCode+"</td>";
                    chartData = chartData+"<td>"+i.material+"</td>";
                    chartData = chartData+"<td>"+i.materialDescription+"</td>";
                    chartData = chartData+"<td>"+this.getStringValue(i.priceDiscripency)+"</td>";
                    chartData = chartData+"<td>"+this.getStringValue(i.discripency)+"</td>";
                    chartData = chartData+"<td>"+this.getStringValue(i.days)+"</td>";
                    chartData = chartData+"<td>"+this.getStringValue(i.increasedAmount)+"</td>";
                    chartData = chartData+"<td>"+this.getDateData(i.latestPostingDate)+"</td>";
                    chartData = chartData+"<td>"+i.latestPrice+"</td>";
                    chartData = chartData+"<td>"+i.latestPO+"</td>";
                    chartData = chartData+"<td>"+i.poItem+"</td>";
                    chartData = chartData+"<td>"+this.getDateData(i.lastPostingDate)+"</td>";
                    chartData = chartData+"<td>"+this.getStringValue(i.lastPrice)+"</td>";
                    chartData = chartData+"<td>"+this.getStringValue(i.lastPO)+"</td>";
                    chartData = chartData+"<td>"+this.getStringValue(i.lastPOItem)+"</td>";
                    chartData = chartData+"<td>"+ i.quantity+"</td>";
                    chartData = chartData+"<td>"+ i.orderUnit+"</td></tr>";
                 
                    
                })
                chartData = chartData+"</table></div></div></div></div>"
    
    return chartData;
    }

    private getDateData(data:string){
        if(data.includes("01/01/0001")){
            return "N/A"
        }else{
            return data.split("T")[0]
        }
    }

    private getStringValue(data:any){
        if(data === undefined || data === null){
            return "N/A"
        }else if(data == 0)
        {
            return "0"
        }else return data
    }
}