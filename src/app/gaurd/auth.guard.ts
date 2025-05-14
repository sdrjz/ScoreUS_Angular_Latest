import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NotificationService } from '../notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  loggedInUser: any = null
  constructor(private route: Router
    , private _notificationService: NotificationService) {
    var user = localStorage.getItem('userData');
    if (user)
      this.loggedInUser = JSON.parse(user);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loggedInUser === null) {
      // this._notificationService.push('User not logged in', 2)
      this.route.navigate(['login'])
      return false
    } else
      return true;

  }



  
  // canActivate(route: Route, segments: UrlSegment[]): boolean{
   
  // }

}
