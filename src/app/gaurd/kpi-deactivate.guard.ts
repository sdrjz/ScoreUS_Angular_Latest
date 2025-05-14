import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { KpiparameterComponent } from '../kpiparameter/kpiparameter.component';
import { api } from '../api.endpoints';
import { UserdialogoutComponent } from '../general/userdialogout/userdialogout.component';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { GeneralApiService } from '../services/appService/generalApiService';

@Injectable({
  providedIn: 'root'
})
export class KpiDeactivateGuard implements CanDeactivate<KpiparameterComponent> {
 
  constructor(public dialog: MatDialog,
    public _apiService: GeneralApiService,
    
  ){
    
  }


  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const boolean = this.compareFields(component.replicaListScores, component.scoreSettingList);
    // const bool = this.compareFields(component.replicaListAdmin, component.adminSettingList);
    if (!component.isChangedWithoutSave) {
      
      return true;
    } else {
      const dialogResultSubject: Subject<boolean> = new Subject<boolean>();
      let dialogRef = this.dialog.open(UserdialogoutComponent, {
        data: {
          height: '75%',
          width: '40%',
          message: 'Do you want to save changes before you leave KPI settings?',
          heading: 'Save changes'
        }
      });

       dialogRef.afterClosed().pipe(take(1)).subscribe((res: any) => {
          
          
          if (res === null || res === undefined) {
          dialogResultSubject.next(true);
        } else {
          const nextRoutePath = nextState?.url;
          this._apiService.submitKpiParams$.next(nextRoutePath);
          
          // dialogResultSubject.next(false);
          dialogResultSubject.next(true);
        }

        dialogResultSubject.complete();
      });


    
      return dialogResultSubject.asObservable();
    }
  }

  // canDeactivate(
  //   component: KpiparameterComponent,
  //   currentRoute: ActivatedRouteSnapshot,
  //   currentState: RouterStateSnapshot,
  //   nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     const boolean = this.compareFields(component.replicaListScores, component.scoreSettingList)  
  //     const bool =  this.compareFields(component.replicaListAdmin,component.adminSettingList)
      
  //     if(bool && boolean)
  //     return true
      
  //     let dialogRef = this.dialog.open(UserdialogoutComponent,
  //       {
  //         data: {
  //           height: '75%',
  //           width: '40%',
  //           message: "Are you sure you want to leave this page without saving changed values?",
  //           heading: 'Save changes'
  //         }
  //       });

  //     dialogRef.afterClosed().subscribe((res: any) => {
  //       if (res === null || res === undefined)
  //         return false

  //         return true
  //     })
  // }
  

   compareFields(field1: any[], field2: any[]): boolean {
    if (field1.length !== field2.length) {
      return false;
    }
  
    for (let i = 0; i < field1.length; i++) {
      if (!this.isEqual(field1[i], field2[i])) {
        return false;
      }
    }
  
    return true;
  }
  
   isEqual(obj1: any, obj2: any): boolean {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
}
