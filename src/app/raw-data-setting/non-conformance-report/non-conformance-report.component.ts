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
  selector: 'app-non-conformance-report',
  templateUrl: './non-conformance-report.component.html',
  styleUrls: ['./non-conformance-report.component.css']
})
export class NonConformanceReportComponent implements OnInit {
  public loggedInUser :any
  constructor(private _apiService: GeneralApiService,
    private _notificationService: NotificationService,
    public dialog: MatDialog,
    private translateService:TranslateService,
    private cdr :ChangeDetectorRef) { }
  tips = tips
  
  ngOnInit(): void {
     

    var user = localStorage.getItem('userData')
    if(user)
    this.loggedInUser = JSON.parse(user)
  
  

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  
  }
  isDeleted: boolean = false
  getProjectsUrl: string = api.ncrRawData
  poRowcolumns = [
    {
      def: 'plantCode',
      name: 'Plant Code',
      // key: 'plantCode',
      key: (i: any) => {
        if (i.plantCode === null) {
          return "N/A";
        } else if (i.plantCode == "0") {
          return 0;
        }
        else {
          return i.plantCode;
        }
      },
      isSticky: true
    },
    {
      def: 'vendorCode',
      name: 'Vendor Code',
      // key: 'vendorCode',
      key: (i: any) => {
        if (i.vendorCode === null || i.vendorCode == "" || i.vendorCode == " ") {
          return "N/A";
        } else if (i.vendorCode == "0") {
          return 0;
        }
        else {
          return i.vendorCode;
        }
      },

      isSticky: true
    },
    {
      def: 'vendorName',
      name: 'Vendor Name',
      // key: 'vendorName',
      key: (i: any) => {
        if (i.vendorName === null || i.vendorName == "" || i.vendorName == " ") {
          return "N/A";
        } else if (i.vendorName == "0") {
          return 0;
        }
        else {
          return i.vendorName;
        }
      },

      isSticky: true
    },
    {
      def: 'buyerCode',
      name: 'Buyer Code',
      // key: 'buyerCode',
      key: (i: any) => {
        if (i.buyerCode === null || i.buyerCode == "" || i.buyerCode == " ") {
          return "N/A";
        } else if (i.buyerCode == "0") {
          return 0;
        }
        else {
          return i.buyerCode;
        }
      },
      isSticky: true
    },
    {
      def: 'pO_lineno',
      name: 'PO Line no',
      // key: 'pO_lineno',
      key: (i: any) => {
        if (i.pO_lineno === null || i.pO_lineno == "" || i.pO_lineno == " ") {
          return "N/A";
        } else if (i.pO_lineno == "0") {
          return 0;
        }
        else {
          return i.pO_lineno;
        }
      },

    },
    {
      def: 'pO_Orderno',
      name: 'PO Order no',
      // key: 'pO_Orderno',
      key: (i: any) => {
        if (i.pO_Orderno === null || i.pO_Orderno == "" || i.pO_Orderno == " ") {
          return "N/A";
        } else if (i.pO_Orderno == "0") {
          return 0;
        }
        else {
          return i.pO_Orderno;
        }
      },

    },
    {
      def: 'partno',
      name: 'Part No',
      // key: 'partno',
      key: (i: any) => {
        if (i.partno === null || i.partno == "" || i.partno == " ") {
          return "N/A";
        } else if (i.partno == "0") {
          return 0;
        }
        else {
          return i.partno;
        }
      },

    },
    {
      def: 'part_Description',
      name: 'Part Description',
      // key: 'part_Description',
      key: (i: any) => {
        if (i.part_Description === null || i.part_Description == "" || i.part_Description == " ") {
          return "N/A";
        } else if (i.part_Description == "0") {
          return 0;
        }
        else {
          return i.part_Description;
        }
      },

    },
    {
      def: 'complaint_Qty',
      name: 'Complaint Quantity',
     // key: 'complaint_Qty',
      key: (i: any) => {
        if (i.complaint_Qty === null || i.complaint_Qty == "" || i.complaint_Qty == " ") {
          return "N/A";
        } else if (i.complaint_Qty == "0") {
          return 0;
        }
        else {
          return i.complaint_Qty;
        }
      },

    },
    {
      def: 'order_Unit',
      name: 'Order Unit',
      // key: 'order_Unit',
      key: (i: any) => {
        if (i.order_Unit === null || i.order_Unit == "" || i.order_Unit == " ") {
          return "N/A";
        } else if (i.order_Unit == "0") {
          return 0;
        }
        else {
          return i.order_Unit;
        }
      },

    },

    {
      def: 'ncR_Date',
      name: 'NCR Date',
      // key: 'ncR_Date',
      key: (i: any) => i.ncR_Date.split(" ")[0]
      // projection:true
    },
    {
      def: 'completionDate',
      name: 'Completion Date',
      // key: 'completionDate',
      key: (i: any) => i.completionDate.split(" ")[0]
      // projection:true
    },
    {
      def: 'createdAt',
      name: 'Created At',
      // key: 'createdAt',
      key: (i: any) => i.createdAt.split(" ")[0]
      // projection:true
    },
    {
      def: 'updatedAt',
      name: 'Updated At',
      // key: 'updatedAt',
      key: (i: any) => i.updatedAt.split(" ")[0]
      // projection:true
    },
    {
      def: 'view',
      name: 'Action',
      projection: true
    },
  ];


  onUpdate(data: any) {
    let dialogRef = this.dialog.open(TargetpopupComponent,
      {
        data: {
          height: '75%',
          width: '90%',
          heading: 'Non conformance report',
          data: data
        }
      });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res === null || res === undefined)
        return
      this._apiService.isCompareLoader$.next(true);
      this._apiService.post(api.updateNCR, res)
        .subscribe((innerRes: any) => {
          this.isDeleted = !this.isDeleted;
          this._notificationService.push("Data updated successfully", 1)
          this._apiService.isCompareLoader$.next(false);
        }, (e: any) => {
          this._apiService.isCompareLoader$.next(false);
        })

    })
  }

  onDelete(data: any) {
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
      this._apiService.get(`${api.deleteDataFromTargetAndRaw}/NCR/${data.id}`)
        .subscribe((res: any) => {
          this._notificationService.push("Data deleted successfully", 1)
          this._apiService.isCompareLoader$.next(false)
          this.isDeleted = !this.isDeleted
        }, (e: any) => this._apiService.isCompareLoader$.next(false))
    })
  }

}
