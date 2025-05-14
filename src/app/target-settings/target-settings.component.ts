import { Component, OnInit } from '@angular/core';
import { GeneralApiService } from '../services/appService/generalApiService';

@Component({
  selector: 'app-target-settings',
  templateUrl: './target-settings.component.html',
  styleUrls: ['./target-settings.component.css']
})
export class TargetSettingsComponent implements OnInit {

  constructor(private _apiService :GeneralApiService) { }

  ngOnInit(): void {
     

  }

}
