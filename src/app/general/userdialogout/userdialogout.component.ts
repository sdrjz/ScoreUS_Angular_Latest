import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-userdialogout',
  templateUrl: './userdialogout.component.html',
  styleUrls: ['./userdialogout.component.css']
})
export class UserdialogoutComponent implements OnInit {
  message: string = ""
  heading: string = ""
  noteMessage: string = ""
  isMessage = false
  width = "505px";
  yesBtn = "Yes";
  noBtn = "No";
  showWidht:any; 

  constructor(public dialogRef: MatDialogRef<UserdialogoutComponent>,
   private _apiService:GeneralApiService,
   private translateService:TranslateService
   , @Inject(MAT_DIALOG_DATA)
    public data,
    private cdr : ChangeDetectorRef) {
    this.message = data?.message;
    this.heading = data?.heading;
    
    if (data?.hasOwnProperty('yesBtn'))
      this.yesBtn =  data?.yesBtn;
    
    if (data?.hasOwnProperty('noBtn'))
      this.noBtn =  data?.noBtn;

    if (data?.hasOwnProperty('noteMessage'))
      this.noteMessage = data?.noteMessage
    
    if (data?.hasOwnProperty('isMessage'))
      this.isMessage = data?.isMessage

    if (data?.hasOwnProperty('width'))
      this.width = data?.width

    if (data?.hasOwnProperty('showWidht'))
      this.showWidht = data?.showWidht

      dialogRef.disableClose = true;
  }

  ngOnInit(): void {

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }


  onClose(data: any) {
    if (data === null) {
      this.dialogRef.close(null);
    }
    else {
      this.dialogRef.close(data)
     
    }
  }
}
