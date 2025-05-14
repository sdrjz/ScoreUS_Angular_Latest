import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis-buyer-execute',
  templateUrl: './analysis-buyer-execute.component.html',
  styleUrls: ['./analysis-buyer-execute.component.css']
})
export class AnalysisBuyerExecuteComponent implements OnInit {

  selected =[''];

  selectreports = [
    {value: 'John Weever', viewValue:'John Weever'},
    {value: 'Jeremy Toms', viewValue:'Jeremy Toms'},
    {value: 'Mark Lo', viewValue:'Mark Lo'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
