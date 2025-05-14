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
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  public loggedInUser :any
  constructor(private _apiService:GeneralApiService,
    private _notificationService:NotificationService,
    private dialog:MatDialog,
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
  isDeleted:boolean = false
  getProjectsUrl: string = api.plantsRawData
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

    },
    {
      def: 'plantName',
      name: 'Plant Name',
      // key: 'plantName',
      key: (i: any) => {
        if (i.plantName === null) {
          return "N/A";
        } else if (i.plantName == "0") {
          return 0;
        }
        else {
          return i.plantName;
        }
      },

    },
    {
      def: 'contactName',
      name: 'Contact Name',
      // key: 'contactName',
      key: (i: any) => {
        if (i.contactName === null) {
          return "N/A";
        } else if (i.contanctName == "0") {
          return 0;
        }
        else {
          return i.contactName;
        }
      },

    },
    {
      def: 'repEmail',
      name: 'Email',
      // key: 'repEmail',
      key: (i: any) => {
        if (i.repEmail === null) {
          return "N/A";
        } else if (i.repEmail == "0") {
          return 0;
        }
        else {
          return i.repEmail;
        }
      },

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
    this._apiService.get(`${api.deleteDataFromTargetAndRaw}/Plant/${data.id}`)
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
        heading: 'Plant data',
        data :data
      }
    });

  dialogRef.afterClosed().subscribe((res: any) => {
    if (res === null || res === undefined)
      return
    this._apiService.isCompareLoader$.next(true);
    this._apiService.post(api.updatePlant,res)
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
