import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-upgradesubscription-dialog',
  templateUrl: './upgradesubscription-dialog.component.html',
  styleUrls: ['./upgradesubscription-dialog.component.css']
})
export class UpgradesubscriptionDialogComponent implements OnInit {
  public currentPlan: any;
  public selectedPlan: any;
  today: Date = new Date();
  constructor(public dialogRef: MatDialogRef<UpgradesubscriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data,
    private cdr : ChangeDetectorRef,
    private _apiService :GeneralApiService,
    private translateService :TranslateService) {
      dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    console.log(this.data);
    this.selectedPlan = this.data.selected_plan;
    let filterCurrentPlan = this.data.packages ? this.data.packages.filter((x) => { return x.stripePriceId === this.data.loggedInUser.stripePriceID }) : [];
    if(filterCurrentPlan.length > 0){
      this.currentPlan = filterCurrentPlan[0];
    }
    // console.log(this.selectedPlan);
    // console.log(this.currentPlan);
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
