import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isShow = true;
  
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  constructor(private modalService: NgbModal, public dialog: MatDialog,private _apiService :GeneralApiService) {}

  public showPassword: boolean;
  

  ngOnInit(): void {
  }

  openDialog() {
		this.dialog.open(ProfileUploadDialog);
	  }
  
  news = [
        {
          image: "assets/images/profile/5.jpg",
          title: "Collection of textile samples",
          description: "I shared this on my fb wall a few months back, and I thought.",
          url: "admin/post-details",
        },
        {
          image: "assets/images/profile/6.jpg",
          title: "Collection of textile samples",
          description: "I shared this on my fb wall a few months back, and I thought.",
          url: "admin/post-details",
        },
        {
          image: "assets/images/profile/7.jpg",
          title: "Collection of textile samples",
          description: "I shared this on my fb wall a few months back, and I thought.", 
          url: "admin/post-details",
        },
    
  ];
  
  
	
	open(content) {
		this.modalService.open(content);
	}

}
@Component({
	selector: 'profile-upload-dialog',
	templateUrl: 'profile-upload-dialog.html',
  })
  export class ProfileUploadDialog{}
