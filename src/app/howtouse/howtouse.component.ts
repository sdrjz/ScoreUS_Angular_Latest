import { Component, OnInit } from '@angular/core';
import { GeneralApiService } from '../services/appService/generalApiService';

@Component({
  selector: 'app-howtouse',
  templateUrl: './howtouse.component.html',
  styleUrls: ['./howtouse.component.css']
})
export class HowtouseComponent implements OnInit {

  constructor(private _apiService :GeneralApiService) { }

  ngOnInit(): void {
     

  }

}
