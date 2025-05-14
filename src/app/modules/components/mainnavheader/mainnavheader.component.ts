import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-mainnavheader',
  templateUrl: './mainnavheader.component.html',
  styleUrls: ['./mainnavheader.component.css']
})
export class MainnavheaderComponent implements OnInit {
  loggedInUser :any
  hamburgerClass: boolean = false;
  
  screenHeight: number;
  screenWidth: number;
  subscription: any;
  heading: string;
  
    constructor(private sharedService: SharedService,
      private cdr :ChangeDetectorRef,
      private _apiService: GeneralApiService,
      private translateService: TranslateService) { 
        this.getScreenSize();
    }
    
  ngOnInit(): void {
    
    var user = localStorage.getItem('userData')
    if(user)
    this.loggedInUser = JSON.parse(user)

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })

  } 

  
  toggleHamburgerClass(){
	this.hamburgerClass = this.sharedService.toggleHamburgerClass();
  }
  
   @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        const div =  document.getElementById('main-wrapper');
        if(this.screenWidth <768) {
            document.body.setAttribute('data-sidebar-style', 'overlay');
        } else if(this.screenWidth >=768 && this.screenWidth <=1023) {
            document.body.setAttribute('data-sidebar-style', 'mini');
        } else {
            document.body.setAttribute('data-sidebar-style', 'full');
        }
    }

}
