import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-vendortotal-coregraph-dialog',
  templateUrl: './vendortotal-coregraph-dialog.component.html',
  styleUrls: ['./vendortotal-coregraph-dialog.component.css']
})
export class VendortotalCoregraphDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
