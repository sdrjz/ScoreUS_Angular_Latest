import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { userInterface } from '../modal/user';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<userInterface> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<userInterface> {
    var user = new Observable<userInterface>(obs=> {
     var localData= localStorage.getItem('userData')
     if(localData)
     {
      obs.next(JSON.parse(localData))
      return JSON.parse(localData);
     }
  })

    return user
  }
}
