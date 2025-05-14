import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CurrentOpenPoStatusTablegraphDialogComponent } from '../general/current-open-po-status-tablegraph-dialog/current-open-po-status-tablegraph-dialog.component';
import { VendortotalCoregraphDialogComponent } from '../general/vendortotal-coregraph-dialog/vendortotal-coregraph-dialog.component';

@Component({
  selector: 'app-openpostatus',
  templateUrl: './openpostatus.component.html',
  styleUrls: ['./openpostatus.component.css']
})
export class OpenpostatusComponent implements OnInit {

  @Input () subtitle:string;
  

  constructor(public dialog:MatDialog) { }

  openDialogpograph(){
    this.dialog.open(CurrentOpenPoStatusTablegraphDialogComponent);
  }

  openDialog(){
    this.dialog.open(VendortotalCoregraphDialogComponent);
  }

  ngOnInit(): void {
  }

}
