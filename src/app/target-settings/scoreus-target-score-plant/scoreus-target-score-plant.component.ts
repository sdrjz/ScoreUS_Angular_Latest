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
  selector: 'app-scoreus-target-score-plant',
  templateUrl: './scoreus-target-score-plant.component.html',
  styleUrls: ['./scoreus-target-score-plant.component.css']
})
export class ScoreusTargetScorePlantComponent implements OnInit {
  public loggedInUser : any
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
  getProjectsUrl:string = api.plantTargetSetting
  poRowcolumns = [
    {
      def: 'plantCode',
      name: 'Plant Code',
      key: 'plantCode',
    },
    {
      def: 'plantName',
      name: 'Plant Name',
      key: 'plantName',
    },
    
    {
      def: 'ncR_percentage',
      name: 'NCR%',
      // key: 'ncR_percentage',
      key: (i:any)=>{
        if(i.ncR_percentage == "0"){
          return 0;
        }else
        {
        return (+i.ncR_percentage)*100
        }
      },
    },
    {
      def: 'pV_percentage',
      name: 'PPV%',
      // key: 'pV_percentage',
      key: (i:any)=>{
        if(i.pV_percentage == "0"){
          return 0;
        }else
        {
        return (+i.pV_percentage)*100
        }
      },
    },
    {
      def: 'otD_percentage',
      name: 'OTD%',
      // key: 'otD_percentage',
      key: (i:any)=>{
        if(i.otD_percentage == "0"){
          return 0;
        }else
        {
        return (+i.otD_percentage)*100
        }
      },
    },
    {
      def: 'ltA_percentage',
      name: 'LTA%',
      // key: 'ltA_percentage',
      key: (i:any)=>{
        if(i.ltA_percentage == "0"){
          return 0;
        }else
        {
        return (+i.ltA_percentage)*100
        }
      },
    },
    {
      def: 'createdAt',
      name: 'Created At',
      key: (i:any)=>i.createdAt.split(" ")[0],
      // key: 'createdAt',
      // projection:true
    },
    {
      def: 'updatedAt',
      name: 'Updated At',
      key: (i:any)=>i.createdAt.split(" ")[0],
      // key: 'updatedAt',
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
    this._apiService.get(`${api.deleteDataFromTargetAndRaw}/PlantTarget/${data.id}`)
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
        width: '80%',
        heading: 'Plant Target',
        data :data
      }
    });

  dialogRef.afterClosed().subscribe((res: any) => {
    if (res === null || res === undefined)
      return
      
    this._apiService.isCompareLoader$.next(true);
    this._apiService.post(api.updatePlantTarget,res)
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
