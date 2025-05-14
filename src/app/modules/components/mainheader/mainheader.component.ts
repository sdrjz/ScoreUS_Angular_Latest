import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.css']
})
export class MainheaderComponent implements OnInit {
	public userData :any={}
	toggleChat: boolean = true;
	toggleSingle: boolean = true;
	subscription: any;
	heading: string = "Dashboard";
	
	constructor(public dialog: MatDialog,
		 private router:Router,
		 private _notificationService:NotificationService,
		 private cdr : ChangeDetectorRef,
		 private _apiService : GeneralApiService,
		 private translateService :TranslateService) {
	var user = localStorage.getItem('userData');
	if(user)
	this.userData = JSON.parse(user)
	}
	
	ngOnInit(): void {
	

		this._apiService.isLanguageSelector$.subscribe((res:any)=>{
			this.translateService.use(res)
			this.cdr.detectChanges()
		  })
		

	}



	changeHeading(heading: string) {
	
		this.heading = heading;
	}

	
	togglechatbar() {
		this.toggleChat = !this.toggleChat;
	}
	singleChatWindow() {
		this.toggleSingle = !this.toggleSingle;
	}


	onDropDownToggleClick(){
	var element=document.getElementById("logout-dropdown")
	element.classList.contains('show')? element.classList.remove('show'):element.classList.add("show");
	}

	openDialog(){
		let dialogRef = this.dialog.open(ConfirmDialogComponent,
			{data:{
				height : '75%',
				width : '80%',
				message:"Are you sure you want to logout?",
				heading:'Logout'
			}});

			dialogRef.afterClosed().subscribe((res:any)=>{
				if(res !== null){
					localStorage.removeItem('userData');
					localStorage.removeItem('access-token');
					this._notificationService.push('user logged out',1);
					this.router.navigate(['/login']);
				}
				
			})
	}

	
}


@Component({
	selector: 'app-maindialog',
	templateUrl: './maindialog-logout.html',
  })
  export class mainDialogComponent{
	constructor(public dialog: MatDialog){}

  }

