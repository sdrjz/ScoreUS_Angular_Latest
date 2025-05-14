import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trendlines-buyer-execute',
  templateUrl: './trendlines-buyer-execute.component.html',
  styleUrls: ['./trendlines-buyer-execute.component.css']
})
export class TrendlinesBuyerExecuteComponent implements OnInit {

  
  @Input () openpotreuser:string;

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
