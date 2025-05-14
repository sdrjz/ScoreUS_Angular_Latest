import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NavigationService } from 'src/app/navigation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdialogoutComponent } from 'src/app/general/userdialogout/userdialogout.component';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	// public serverUrl = environment.serverUrl
	public loggedInUser: any
	toggleChat: boolean = true;
	toggleSingle: boolean = true;
	subscription: any;
	heading: string = "Dashboard";
	selectedOption: any = 'en'
	constructor(public dialog: MatDialog
		, private _notificationService: NotificationService,
		private router: Router,
		private _apiService: GeneralApiService,
		private navigationService: NavigationService,
		private cdr : ChangeDetectorRef,
		private translateService : TranslateService
	) { }

	ngOnInit(): void {
		this.changeHeading(localStorage.getItem('page'))

		this._apiService.user$.subscribe((res: any) => {
			this.loggedInUser = res;
		})
		var userData = localStorage.getItem('userData')
		if (userData)
			this.loggedInUser = JSON.parse(userData)

		this._apiService.route$.subscribe((res: string) => {
			this.heading = res;
		})
		this._apiService.isLanguageSelector$.subscribe((res:any)=>{
			this.translateService.use(res)
			this.cdr.detectChanges()
		  })
		// 	this.subscription = this.navigationService.getNavChangeEmitter()
		//   .subscribe(heading => this.changeHeading(heading));
	}

	onUserProfileClick() {
		localStorage.removeItem('page')
		localStorage.setItem('page', 'Edit Profile')
		this.changeHeading(localStorage.getItem('page'))
		this.router.navigate(['/user/userprofile'])
	}

	changeHeading(heading: string) {

		this.heading = heading;
	}

	onDropDownToggleClick() {
		var element = document.getElementById("logout-dropdown")
		element.classList.contains('show') ? element.classList.remove('show') : element.classList.add("show");
	}

	openDialog() {
		let dialogRef = this.dialog.open(UserdialogoutComponent,
			{
				data: {
					height: '75%',
					width: '25%!important',
					minWidth: '25%',
					top: '20%',
					resize: 'none',
					message: "Are you sure you want to logout?",
					heading: 'Logout'
				}
			});

		dialogRef.afterClosed().subscribe((res: any) => {
			if(res !== null){
				var rememberMe = localStorage.getItem('rememberMe')
				if(rememberMe)
				{
					localStorage.removeItem('userData');
					localStorage.removeItem('access-token');
					
					localStorage.removeItem('rememberMeUserData');
					localStorage.removeItem('rememberMeToken');
					
				}else{
					localStorage.clear()
				}
				this._notificationService.push('user logged out',1);
				this.router.navigate(['/login']);
			}
		

		})




	}



	onLanguageChange() {
		this._apiService.isLanguageSelector$.next(this.selectedOption)
		// window.location.reload();
	}
}