import { Component, OnInit } from '@angular/core';
import { GeneralApiService } from '../services/appService/generalApiService';

@Component({
  selector: 'app-aboutscoreus',
  templateUrl: './aboutscoreus.component.html',
  styleUrls: ['./aboutscoreus.component.css']
})
export class AboutscoreusComponent implements OnInit {

  constructor(private _apiService :GeneralApiService) { }

  ngOnInit(): void {
  }

}
