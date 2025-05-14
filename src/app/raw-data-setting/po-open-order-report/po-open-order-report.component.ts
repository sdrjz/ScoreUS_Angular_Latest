
import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { api } from 'src/app/api.endpoints';
import { TargetpopupComponent } from 'src/app/general/targetpopup/targetpopup.component';
import { UserdialogoutComponent } from 'src/app/general/userdialogout/userdialogout.component';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { tips } from 'src/app/tootTips';

@Component({
  selector: 'app-po-open-order-report',
  templateUrl: './po-open-order-report.component.html',
  styleUrls: ['./po-open-order-report.component.css']
})
export class PoOpenOrderReportComponent implements OnInit {
  loggedInUser:any
  constructor(private _apiService:GeneralApiService,
    private _notificationService:NotificationService,
    private dialog:MatDialog,
    private translateService:TranslateService,
    private cdr :ChangeDetectorRef) { }
  tips = tips
  
  ngOnInit(): void {
     
   

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    var user = localStorage.getItem('userData')
    if(user)
    this.loggedInUser = JSON.parse(user);
  }
  
  isDeleted:boolean = false
  getProjectsUrl:string = api.openOrderRawData
  poRowcolumns = [
    {
      def: 'id',
      name: 'ID',
      // key: 'po',
      key: (i:any)=>{
        if(i.id === null)
        {
          return "N/A";
        }else if(i.id == "0"){
          return 0;
        }
        else{
          return i.id;
        }
      },

      // isSticky: true
    },
    {
      def: 'poNumber',
      name: 'PO NO',
      // key: 'po',
      key: (i:any)=>{
        if(i.poNumber === null)
        {
          return "N/A";
        }else if(i.poNumber == "0"){
          return 0;
        }
        else{
          return i.poNumber;
        }
      },

      // isSticky: true
    },
      
    {
      def: 'line',
      name: 'Line No',
      // key: 'pO_LineNo',
      key: (i:any)=>{
        if(i.line === null)
        {
          return "N/A";
        }else if(i.line == "0"){
          return 0;
        }
        else{
          return i.line;
        }
      },

    },
    {
      def: 'vendor',
      name: 'Vendor Code',
      // key: 'vendorCode',
      key: (i:any)=>{
        if(i.vendor === null)
        {
          return "N/A";
        }else if(i.vendor == "0"){
          return 0;
        }
        else{
          return i.vendor;
        }
      },

      // isSticky: true
    },
    {
      def: 'vendorName',
      name: 'Vendor Name',
      // key: 'vendorName',
      key: (i:any)=>{
        if(i.vendorName === null)
        {
          return "N/A";
        }else if(i.vendorName == "0"){
          return 0;
        }
        else{
          return i.vendorName;
        }
      },

      // isSticky: true
    },
    {
      def: 'poIssueDate',
      name: 'Po issue date',
      // key: 'pO_Issue_Date',
      key:(i:any)=> i.poIssueDate.split("T")[0]
      // key:(i:any)=> i.poIssueDate.toISOString().split('T')[0]
      // projection:true
    },
    {
      def: 'materialDescription',
      name: 'Material Description',
      // key: 'partDescription',
      key: (i:any)=>{
        if(i.materialDescription === null)
        {
          return "N/A";
        }else if(i.materialDescription == "0"){
          return 0;
        }
        else{
          return i.materialDescription;
        }
      },


    },
    
    {
      def: 'orderQuantity',
      name: 'Order Quantity',
      // key: 'qty',
      key: (i:any)=>{
        if(i.orderQuantity === null)
        {
          return "N/A";
        }else if(i.orderQuantity == "0"){
          return 0;
        }
        else{
          return i.orderQuantity;
        }
      },
    },
    
    {
      def: 'deliveredQty',
      name: 'Deliver Quantity',
      // key: 'qty',
      key: (i:any)=>{
        if(i.deliveredQty === null)
        {
          return "N/A";
        }else if(i.deliveredQty == "0"){
          return 0;
        }
        else{
          return i.deliveredQty;
        }
      },
    },
    {
      def: 'unitPrice',
      name: 'Unit Price',
      // key: 'unitPrice',
      key: (i:any)=>{
        if(i.unitPrice === null)
        return "N/A"
        else
        return i.unitPrice
      },
    },
    {
      def: 'dueDate',
      name: 'Due Date',
      // key: 'pO_Post_Rec_Date',
      key:(i:any)=> i.dueDate.split("T")[0]
      // projection:true
    },
    {
      def: 'firstPromisedDate',
      name: 'First Promised Date',
      // key: 'pO_Post_Rec_Date',
      key:(i:any)=> i.firstPromisedDate.split("T")[0]
      // projection:true
    },
    
    {
      def: 'currency',
      name: 'Currency',
      // key: 'currency',
      key: (i:any)=>{
        if(i.currency === null)
        return "N/A"
        else
        return i.currency
      },
    },
    {
      def: 'orderUnit',
      name: 'Order Unit',
      // key: 'orderUnit',
      key: (i:any)=>{
        if(i.orderUnit === null)
        return "N/A"
        else
        return i.orderUnit
      },
    },
    {
      def: 'buyerCode',
      name: 'Buyer Code',
      // key: 'buyerCode',
      key: (i:any)=>{
        if(i.buyerCode === null)
        return "N/A"
        else
        return i.buyerCode
      },
    },
    {
      def: 'plant',
      name: 'Plant Code',
      // key: 'plantCode',
      key: (i:any)=>{
        if(i.plant === null)
        return "N/A"
        else
        return i.plant
      },
    },
    {
      def: 'acknowledgementdate',
      name: 'Acknowledgement Date',
      // key: 'pO_Post_Rec_Date',
      key:(i:any)=> i.acknowledgementdate.split("T")[0]
      // projection:true
    },
     
    {
      def: 'leadtime',
      name: 'Lead time',
      // key: 'leadTime',
      key: (i:any)=>{
        if(i.leadtime === null)
        return "N/A"
        else
        return i.leadtime
      },
    },
    {
      def: 'material',
      name: 'Material Number',
      // key: 'plantCode',
      key: (i:any)=>{
        if(i.material === null)
        return "N/A"
        else
        return i.material
      },
    },
    
    
    
    // {
    //   def: 'createdAt',
    //   name: 'Created At',
    //   // key: 'createdAt',
    //   //key:(i:any)=> i.createdAt.split(" ")[0]
    //   // projection:true
    // },
    // {
    //   def: 'updatedAt',
    //   name: 'Updated At',
    //   // key: 'updatedAt',
    //   //id:(i:any)=> i.updatedAt.split(" ")[0]
    //   // projection:true
    // },
    {
      def: 'view',
      name: 'Action',
      projection:true,
      sortable: false
    },
    
  ];

  onDelete(data:any){
    let dialogRef = this.dialog.open(UserdialogoutComponent,
      {
        data: {
          height: '75%',
          width: '40%',
          message: "Are you sure you want to delete the data?",
          heading: 'Delete'
        }
      });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res === null || res === undefined)
        return
    this._apiService.isCompareLoader$.next(true);
    this._apiService.get(`${api.deleteDataFromTargetAndRaw}/OpenOrderReport/${data.id}`)
    .subscribe((res:any)=>{
      this._notificationService.push("Data deleted successfully",1)
      this._apiService.isCompareLoader$.next(false)
      this.isDeleted = !this.isDeleted
    },(e:any)=>this._apiService.isCompareLoader$.next(false))
  })
}

onUpdate(data:any){
  let dialogRef = this.dialog.open(TargetpopupComponent,
    {
      data: {
        height: '85%',
        width: '90%',
        heading: 'Open Order Report',
        data :data
      }
    });

  dialogRef.afterClosed().subscribe((res: any) => {
    if (res === null || res === undefined)
      return

    this._apiService.isCompareLoader$.next(true);
    console.log(res)
    this._apiService.post(api.updateOpenOrderRecord,res)
    .subscribe((innerRes:any)=>{

      this.isDeleted  = !this.isDeleted;
      this._notificationService.push("Data updated successfully",1)
      this._apiService.isCompareLoader$.next(false);
    },(e:any)=>{
      this._apiService.isCompareLoader$.next(false);
  })
  
  })
 }  

}
