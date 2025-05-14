import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GeneralApiService } from '../services/appService/generalApiService';
import { api } from '../api.endpoints';
import { NotificationService } from '../notification.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user:any
  constructor(private modalService: NgbModal,
     public dialog: MatDialog,
     private route: ActivatedRoute,
     private _apiService:GeneralApiService,
     private _notificationService:NotificationService,
     private translateService:TranslateService,
     private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    
    const userId = this.route.snapshot.paramMap.get('userId');
    this._apiService.isCompareLoader$.next(true)
    this._apiService.get(api.superAdminGetUserDetail+userId).subscribe((res:any)=>{
      this.user = res.data[0]
      // document.getElementById('submitBtn').disabled = this.user?.isActive
      
     console.log(this.user.officePhone.replace(/-/g, ''));
      this._notificationService.push("User detail retrieved",1);
      this._apiService.isCompareLoader$.next(false)
    },(e:any)=>{
      this._apiService.isCompareLoader$.next(false)
    })
  }


  // getUSNumber(data:any){
  //   var USNumber = data.match(/(\d{3})(\d{3})(\d{4})/);
  //   let US = "(" + USNumber[1] + ") " + USNumber[2] + "-" + USNumber[3];
  //   return US
  //   }



  getUSNumber(data: any) {
    // '-' ko remove karein
    data = data.replace(/-/g, '');

    // Number ko match karein
    var USNumber = data.match(/(\d{3})(\d{3})(\d{4})/);
    if (USNumber) {
        let US = "(" + USNumber[1] + ") " + USNumber[2] + "-" + USNumber[3];
        return US;
    }
    return null; // agar match nahi hota hai, toh null return karein
}


  openDialog() {
    this._apiService.isCompareLoader$.next(true)
    this._apiService.get(`${api.superAdminActiveDeactiveUser}/${this.user.userId}/${false}`).subscribe((res:any)=>{
      this._apiService.isCompareLoader$.next(false)
      // this.dialog.open(userdetailuserdisableddialog);
      this._notificationService.push("user disbaled",1)
    },(e:any)=>{
      this._apiService.isCompareLoader$.next(false)
      
    })
	  }

    open(content) {
      this.modalService.open(content);
    }
    

}
@Component({
	selector: 'userdetail-user-disabled-dialog',
	templateUrl: 'userdetail-user-disabled-dialog.html',
  })
  export class userdetailuserdisableddialog{}
