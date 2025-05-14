import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  message:string=""
  heading:string=""
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) 
   public data,
   private cdr : ChangeDetectorRef,
   private _apiService :GeneralApiService,
   private translateService :TranslateService) {
    this.message = data?.message;
    this.heading = data?.heading;
    dialogRef.disableClose = true;
    }

  ngOnInit(): void {
    

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }


  onClose(data:any){
    if(data === null){
      this.dialogRef.close(null);
    }
    else
    {
      this.dialogRef.close(data)
    }
  }
}
