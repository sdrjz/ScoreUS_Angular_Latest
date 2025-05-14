import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentpaynowDialogComponent } from '../general/paymentpaynow-dialog/paymentpaynow-dialog.component';
import { SuccessfullyDialogComponent } from '../general/successfully-dialog/successfully-dialog.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  openDialog(){
    this.dialog.open(PaymentpaynowDialogComponent);
  }

  ngOnInit(): void {
  }

}
