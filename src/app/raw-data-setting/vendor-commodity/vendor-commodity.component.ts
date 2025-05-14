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
  selector: 'app-vendor-commodity',
  templateUrl: './vendor-commodity.component.html',
  styleUrls: ['./vendor-commodity.component.css']
})
export class VendorCommodityComponent implements OnInit {
  public loggedInUser :any
  constructor(private _apiService:GeneralApiService,
    private _notificationService:NotificationService,
    private dialog:MatDialog,
    private translateService :TranslateService,
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
  isDeleted:boolean = false
  getProjectsUrl: string = api.vendorRawData
  poRowcolumns = [
    {
      def: 'plantCode',
      name: 'Plant Code',
      // key: 'plantCode',
      key: (i: any) => {
        if (i.plantCOde === null) {
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
        if (i.vendorCode === null) {
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
        if (i.vendorName === null) {
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
      def: 'commodity',
      name: 'Commodity',
      // key: 'commodity',
      key: (i: any) => {
        if (i.commodity === null) {
          return "N/A";
        } else if (i.commodity == "0") {
          return 0;
        }
        else {
          return i.commodity;
        }
      },

      isSticky: true
    },
    {
      def: 'email',
      name: 'Email',
      // key: 'email',
      key: (i: any) => {
        if (i.email === null) {
          return "N/A";
        } else if (i.email == "0") {
          return 0;
        }
        else {
          return i.email;
        }
      },

    },
    {
      def: 'contactName',
      name: 'Contact name',
      // key: 'contactName',
      key: (i: any) => {
        if (i.contactName === null) {
          return "N/A";
        } else if (i.contactName == "0") {
          return 0;
        }
        else {
          return i.contactName;
        }
      },

    },
    {
      def: 'country',
      name: 'Country',
      // key: 'country',
      key: (i: any) => {
        if (i.country === null) {
          return "N/A";
        } else if (i.country == "0") {
          return 0;
        }
        else {
          return i.country;
        }
      },

    },
    {
      def: 'city',
      name: 'City',
      // key: 'city',
      key: (i: any) => {
        if (i.city === null) {
          return "N/A";
        } else if (i.city == "0") {
          return 0;
        }
        else {
          return i.city;
        }
      },

    },
    {
      def: 'address',
      name: 'Address',
      // key: 'address',
      key: (i: any) => {
        if (i.address === null) {
          return "N/A";
        } else if (i.address == "0") {
          return 0;
        }
        else {
          return i.address;
        }
      },

    },
    {
      def: 'zipCode',
      name: 'Zipcode',
      // key: 'zipCode',
      key: (i: any) => {
        if (i.zipCOde === null) {
          return "N/A";
        } else if (i.zipCode == "0") {
          return 0;
        }
        else {
          return i.zipCode;
        }
      },

    },

    // {
    //   def: 'phoneNo',
    //   name: 'Phone no.',
    //   // key: 'phoneNo',
    //   key: (i: any) => {
    //     if (i.phoneNo === null) {
    //       return "N/A";
    //     } else if (i.phoneNo == "0") {
    //       return 0;
    //     }
    //     else {
    //       return i.phoneNo;
    //     }
    //   },
    // },

    {
      def: 'createdAt',
      name: 'Created At',
      key: 'createdAt',
      projection: true
    },
    {
      def: 'updatedAt',
      name: 'Updated At',
      key: 'updatedAt',
      projection: true
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
    this._apiService.get(`${api.deleteDataFromTargetAndRaw}/Vendor/${data.id}`)
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
        heading: 'Commodity data',
        data :data
      }
    });

  dialogRef.afterClosed().subscribe((res: any) => {
    if (res === null || res === undefined)
      return
    this._apiService.isCompareLoader$.next(true);
    this._apiService.post(api.updateCommodity,res)
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
