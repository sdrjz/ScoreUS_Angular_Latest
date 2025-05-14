import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _snackBar:MatSnackBar) { }


push(message:string,type:number){
 let snackBarType=""
  switch(type){
  case 1:
    snackBarType = "mat-snackbar";
    break;

  case 2:
    snackBarType ="mat-warn";
    break;
  default:
    snackBarType = 'mat-snackBar';
    break;
 }
const isStickyMessage = 
    message === 'Reports sent successfully' || message === 'Reports not sent ';

  this._snackBar.open(message, 'close', {
    duration: isStickyMessage ? undefined : 7000,
    horizontalPosition: 'end',
    verticalPosition: 'top',
    panelClass: ['mat-toolbar', snackBarType],
  });
}


}
