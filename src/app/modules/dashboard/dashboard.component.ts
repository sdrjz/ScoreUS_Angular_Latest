import { Component, OnInit } from '@angular/core';
import { api } from 'src/app/api.endpoints';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'kripton';
  navSidebarClass: boolean = true;
  hamburgerClass: boolean = false;

  constructor(public sharedService: SharedService,
              public _apiService:GeneralApiService) { }

  ngOnInit(): void {
     

  }

}
