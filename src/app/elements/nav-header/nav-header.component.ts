import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  loggedInUser : any

  hamburgerClass: boolean = false;
  
  screenHeight: number;
  screenWidth: number;
  subscription: any;
  heading: string;
  
    constructor(private sharedService: SharedService) { 
        this.getScreenSize();
    }
    
  ngOnInit(): void {
    var user = localStorage.getItem('userData')
    if(user)
      this.loggedInUser = JSON.parse(user)
  
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
