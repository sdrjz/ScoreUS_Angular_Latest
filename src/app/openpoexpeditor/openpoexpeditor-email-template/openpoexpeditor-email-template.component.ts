import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { api } from 'src/app/api.endpoints';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';


@Component({
    selector: 'app-openpoexpeditor-email-template',
    templateUrl: './openpoexpeditor-email-template.component.html',
    styleUrls: ['./openpoexpeditor-email-template.component.css']
})

export class OpenpoexpeditorEmailTemplateComponent implements OnInit {
    // private _notificationService: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private _apiService: GeneralApiService,
        public dialogRef: MatDialogRef<OpenpoexpeditorEmailTemplateComponent>,
        private _notificationService:NotificationService
        
    ) {}
    
    public params:any;

    ngOnInit(): void {
     

        this.params = this.data;
    }

    submit(){
        this._apiService.post(api.OpenPOExpeditorSentEmail,this.params)
        .subscribe((res:any)=>{
            this._apiService.isCompareLoader$.next(false)
            this._notificationService.push("Email Sent Successfully.",1);
            this.dialogRef.close({status:'mailSend'})
        },
        (error:any)=>{
            this._apiService.isCompareLoader$.next(false)
        })
    }

    close(){
        this.dialogRef.close(null)
    }

    onInput(event:any){
        this.params.body = event.target.innerHTML;
    }
}
