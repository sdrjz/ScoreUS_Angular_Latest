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
  selector: 'app-po-history-info',
  templateUrl: './po-history-info.component.html',
  styleUrls: ['./po-history-info.component.css']
})
export class PoHistoryInfoComponent implements OnInit {
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
  getProjectsUrl:string = api.poRawData
  poRowcolumns = [
    {
      def: 'vendorCode',
      name: 'Vendor Code',
      // key: 'vendorCode',
      key: (i:any)=>{
        if(i.vendorCode === null)
        {
          return "N/A";
        }else if(i.vendorCode == "0"){
          return 0;
        }
        else{
          return i.vendorCode;
        }
      },

      isSticky: true
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

      isSticky: true
    },
    {
      def: 'po',
      name: 'PO NO',
      // key: 'po',
      key: (i:any)=>{
        if(i.po === null)
        {
          return "N/A";
        }else if(i.po == "0"){
          return 0;
        }
        else{
          return i.po;
        }
      },

      isSticky: true
    },
    {
      def: 'pO_LineNo',
      name: 'PO Line no',
      // key: 'pO_LineNo',
      key: (i:any)=>{
        if(i.pO_LineNo === null)
        {
          return "N/A";
        }else if(i.pO_LineNo == "0"){
          return 0;
        }
        else{
          return i.pO_LineNo;
        }
      },

    },
    {
      def: 'partNo',
      name: 'Part No',
      // key: 'partNo',
      key: (i:any)=>{
        if(i.partNo === null)
        {
          return "N/A";
        }else if(i.partNo == "0"){
          return 0;
        }
        else{
          return i.partNo;
        }
      },

    },
    {
      def: 'partDescription',
      name: 'Part Description',
      // key: 'partDescription',
      key: (i:any)=>{
        if(i.partDescription === null)
        {
          return "N/A";
        }else if(i.partDescription == "0"){
          return 0;
        }
        else{
          return i.partDescription;
        }
      },


    },
    {
      def: 'qty',
      name: 'Quantity',
      // key: 'qty',
      key: (i:any)=>{
        if(i.qty === null)
        {
          return "N/A";
        }else if(i.qty == "0"){
          return 0;
        }
        else{
          return i.qty;
        }
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
      def: 'pO_Post_Rec_Date',
      name: 'PO Post Rec Date',
      // key: 'pO_Post_Rec_Date',
      key:(i:any)=> i.pO_Post_Rec_Date.split(" ")[0]
      // projection:true
    },
    {
      def: 'pO_Frist_Delivery_Date',
      name: 'PO first delivery date',
      // key: 'pO_Frist_Delivery_Date',
      key:(i:any)=> i.pO_Frist_Delivery_Date.split(" ")[0]
      // projection:true
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
      def: 'plantCode',
      name: 'Plant Code',
      // key: 'plantCode',
      key: (i:any)=>{
        if(i.plantCode === null)
        return "N/A"
        else
        return i.plantCode
      },
    },
    {
      def: 'pO_Issue_Date',
      name: 'Po issue date',
      // key: 'pO_Issue_Date',
      key:(i:any)=> i.pO_Issue_Date.split(" ")[0]
      // projection:true
    },
    {
      def: 'leadTime',
      name: 'Lead time',
      // key: 'leadTime',
      key: (i:any)=>{
        if(i.leadTime === null)
        return "N/A"
        else
        return i.leadTime
      },
    },
    {
      def: 'commodity',
      name: 'Commodity',
      // key: 'commodity',
      key: (i:any)=>{
        if(i.commodity === null)
        return "N/A"
        else
        return i.commodity
      },
    },
    {
      def: 'createdAt',
      name: 'Created At',
      // key: 'createdAt',
      key:(i:any)=> i.createdAt.split(" ")[0]
      // projection:true
    },
    {
      def: 'updatedAt',
      name: 'Updated At',
      // key: 'updatedAt',
      key:(i:any)=> i.updatedAt.split(" ")[0]
      // projection:true
    },
    {
      def: 'view',
      name: 'Action',
      projection:true
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
    this._apiService.get(`${api.deleteDataFromTargetAndRaw}/POHistory/${data.id}`)
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
        height: '75%',
        width: '90%',
        heading: 'PoHistory',
        data :data
      }
    });

  dialogRef.afterClosed().subscribe((res: any) => {
    if (res === null || res === undefined)
      return
    this._apiService.isCompareLoader$.next(true);
    this._apiService.post(api.updatePOHistory,res)
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
