import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserdialogoutComponent } from '../userdialogout/userdialogout.component';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-okdialogcomponent',
  templateUrl: './okdialogcomponent.component.html',
  styleUrls: ['./okdialogcomponent.component.css']
})
export class OkdialogcomponentComponent implements OnInit {
  message: string = ""
  heading: string = ""
  buttonText: string = ""
  constructor(public dialogRef: MatDialogRef<OkdialogcomponentComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data,
    private _apiService : GeneralApiService,
    private translateService : TranslateService,
    private cdr : ChangeDetectorRef) {
    this.message = data?.message;
    this.heading = data?.heading;
    if (data?.hasOwnProperty('buttonText'))
      this.buttonText= data?.buttonText

    dialogRef.disableClose = true;
  }

  ngOnInit(): void {

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }


  onClose() {
      this.dialogRef.close(null);
  }
}
