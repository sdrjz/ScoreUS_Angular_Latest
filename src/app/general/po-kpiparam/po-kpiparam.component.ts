import { ChangeDetectorRef, Component, OnInit, OnDestroy,AfterContentInit } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
// import { UserdialogoutComponent } from '../general/userdialogout/userdialogout.component';
import { UserdialogoutComponent } from '../userdialogout/userdialogout.component';
import { MatDialog } from '@angular/material/dialog';

import { api } from 'src/app/api.endpoints';
 
@Component({
    selector: 'app-po-kpiparam',
    templateUrl: './po-kpiparam.component.html',
    styleUrls: ['./po-kpiparam.component.css']
})
export class PoKpiparamComponent implements OnInit,AfterContentInit,OnDestroy {
    isChangedWithoutSave:boolean = false;
    loggedInUser : any;
    constructor(
        private _apiService: GeneralApiService,
        private _notificationService:NotificationService,
        private cdr : ChangeDetectorRef,
        public dialog: MatDialog,
    ) { }
    ngAfterContentInit(): void {
        this.isChangedWithoutSave = false
      }

    filters:any={
        tenantId:'',
        selfDefinedFutureDays:'',
        receivingBufferDays:'',
    }

    records: any[] = [];
   
    ngOnInit(): void {
       

        var user = localStorage.getItem("userData")
        if(user)
            this.loggedInUser = JSON.parse(user)
            this.filters.tenantId = this.loggedInUser.tenantID;
            this.createKpis("");

            this._apiService.submitKpiParams$.subscribe(
                (res:any)=>{
                    if(typeof res == "string" && res.includes("/"))
                      {
                        this.onSubmitBySubject(res);
                        //alert('hello')

                      }
          
                })


    }

    onSubmitBySubject(data:any) {
    
            if (data === null || data === undefined){

                return
       
        }else{
            this._apiService.isCompareLoader$.next(true)
            const resltArry = [];
            this.records.forEach(function(val,index){
                val.value = val.value.toString();
                resltArry.push(val);
            });
            this.isChangedWithoutSave = false;
            this._apiService.post(api.adminSetting,resltArry)
                  .subscribe((res: any) => {
                    this._notificationService.push('Settings update successfully.', 1)
                    this.isChangedWithoutSave = false;
                    this._apiService.isCompareLoader$.next(false)
                },
                (error:any)=>{
                    this._apiService.isCompareLoader$.next(false)
                })
        }
      
          
    
    
    
        }
    
      
    
    
    
      createKpis(data:any) {
        this._apiService.isCompareLoader$.next(true)
        this._apiService.post(api.adminKpiSetting + '?tenantId=' + this.loggedInUser.tenantID, {}).subscribe((res: any) => {
            this.getPoManagerSetting();

        }, (e: any) => {
            this.getPoManagerSetting();

        })
      }


    getPoManagerSetting() {
        this._apiService.isCompareLoader$.next(true)
        var url_query_params    =   api.PoManagerSetting+'?tenantId='+this.filters.tenantId;
        this._apiService.get(url_query_params)
            .subscribe((res:any)=>{
                this.records = res.data
                // this.filters.selfDefinedFutureDays  =   res.data[0].value
                // this.filters.receivingBufferDays    =   res.data[1].value
                this._apiService.isCompareLoader$.next(false)
            },
            (error:any)=>{
                this._apiService.isCompareLoader$.next(false)
            })
    }

    onSubmit() {

        let dialogRef = this.dialog.open(UserdialogoutComponent,
            {
              data: {
                height: '75%',
                width: '40%',
                message: "Are you sure you want to reset these params?",
                heading: 'Reset params'
              }
            });
      
          dialogRef.afterClosed().subscribe((res: any) => {
            if (res === null || res === undefined){

                return
       
        }else{
            this._apiService.isCompareLoader$.next(true)
            const resltArry = [];
            this.records.forEach(function(val,index){
                val.value = val.value.toString();
                resltArry.push(val);
            });
            this.isChangedWithoutSave = false;
            this._apiService.post(api.adminSetting,resltArry)
                  .subscribe((res: any) => {
                    this._notificationService.push('Settings update successfully.', 1)
                    this.isChangedWithoutSave = false;
                    this._apiService.isCompareLoader$.next(false)
                },
                (error:any)=>{
                    this._apiService.isCompareLoader$.next(false)
                })
        }
      
          })



    }

    onInputChange(event: any): void {
        this.isChangedWithoutSave = true;
      }

    ngOnDestroy(): void {
        // this.isChangedWithoutSave = true;

       
    }

}
