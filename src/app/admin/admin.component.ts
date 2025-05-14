import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import { GeneralApiService } from '../services/appService/generalApiService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = 'kripton';
  navSidebarClass: boolean = true;
  hamburgerClass: boolean = false;

    constructor(public sharedService: SharedService,
      private _apiService :GeneralApiService
    ) {
      
    }

  ngOnInit(): void {
  }

}
