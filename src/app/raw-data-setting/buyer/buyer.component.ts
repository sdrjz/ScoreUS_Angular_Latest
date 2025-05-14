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
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  public loggedInUser :any
  constructor(private _apiService:GeneralApiService,
    private _notificationService:NotificationService,
    private dialog: MatDialog,
    private translateService:TranslateService,
    private cdr : ChangeDetectorRef) { }
  tips = tips
  ngOnInit(): void {
     
    

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    var user = localStorage.getItem('userData')
    if(user)
    this.loggedInUser = JSON.parse(user)
  }
  isDeleted:boolean = false

  getProjectsUrl:string = api.buyerRawData
  poRowcolumns = [
    {
      def: 'buyerCode',
      name: 'Buyer Code',
      // key: 'buyerCode',
      key: (i:any)=>{
        if(i.buyerCode === null)
        {
          return "N/A";
        }else if(i.buyerCode == "0"){
          return 0;
        }
        else{
          return i.buyerCode;
        }
      },

    },
    {
      def: 'buyerName',
      name: 'Buyer Name',
       //key: 'buyerName',
      key: (i:any)=>{
        if(i.buyuerName === null)
        {
          return "N/A";
        }else if(i.buyerName == "0"){
          return 0;
        }
        else{
         return i.buyerName;
        }
      },

    },
    {
      def: 'plantCode',
      name: 'Plant Code',
      // key: 'plantCode',
      key: (i:any)=>{
        if(i.plantCode === null)
        {
          return "N/A";
        }else if(i.plantCode == "0"){
          return 0;
        }
        else{
          return i.plantCode;
        }
      },

    },
    {
      def: 'email',
      name: 'Email',
      // key: 'email',
      key: (i:any)=>{
        if(i.email === null)
        {
          return "N/A";
        }else if(i.email == "0"){
          return 0;
        }
        else{
          return i.email;
        }
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
    this._apiService.get(`${api.deleteDataFromTargetAndRaw}/Buyer/${data.id}`)
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
        heading: 'Buyer data',
        data :data
      }
    });

  dialogRef.afterClosed().subscribe((res: any) => {
    if (res === null || res === undefined)
      return
    this._apiService.isCompareLoader$.next(true);
    this._apiService.post(api.updateBuyer,res)
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
