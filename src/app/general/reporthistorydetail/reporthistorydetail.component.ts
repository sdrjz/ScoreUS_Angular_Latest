import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reporthistorydetail',
  templateUrl: './reporthistorydetail.component.html',
  styleUrls: ['./reporthistorydetail.component.css']
})
export class ReporthistorydetailComponent implements OnInit {

  @Input () subtitle:string;

  constructor() { }

  ngOnInit(): void {
  }

}
