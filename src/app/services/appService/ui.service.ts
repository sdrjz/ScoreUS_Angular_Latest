import { Injectable } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  loading$ = new BehaviorSubject(false);
//   isHandset$: Observable<boolean> = this.breakpointObserver
//     .observe('(min-width: 0px) and (max-width: 1280px)')
//     .pipe(
//       map((result) => result.matches),
//       shareReplay()
//     );

  constructor(
  ) {}

//   openSelectRoleModal(rolesCount = 1) {
//     this.dialog.open(SelectRoleModalComponent, {
//       closeOnNavigation: false,
//       disableClose: true,
//       panelClass: ['panelClass'],
//       backdropClass: rolesCount > 1 ? ['bg-gray-900'] : '',
//     });
//   }

//   /**
//    *
//    * @param title: 'Confirm Action',
//    * @param message: 'Are you sure you want to do this?',
//    * @param confirmBtn: 'Yes',
//    * @param confirmBtnClass: '',
//    * @param confirmBtnColor: 'primary',
//    * @param rejectBtn: 'No',
//    * @param rejectBtnClass: '',
//    * @param rejectBtnColor: '',
//    * @param titleClass: 'text-lg text-bold text-gray-900',
//    * @param messageClass: 'text-gray-700',
//    */
//   confirmDialog(params = {}) {
//     let dialogData = {
//       title: 'Confirm Action',
//       message: 'Are you sure you want to do this?',
//       confirmBtn: 'Yes',
//       confirmBtnClass: '',
//       confirmBtnColor: 'primary',
//       rejectBtn: 'No',
//       rejectBtnClass: '',
//       rejectBtnColor: '',
//       titleClass: 'text-lg text-bold text-gray-900',
//       messageClass: 'text-gray-700',
//       ...params,
//     };

//     const dialogRef = this.dialog.open(ConfirmDialogComponent, {
//       data: dialogData,
//     });

//     return dialogRef.afterClosed();
//   }
}