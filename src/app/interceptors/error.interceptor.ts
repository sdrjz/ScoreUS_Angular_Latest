import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../notification.service';
import { GeneralApiService } from '../services/appService/generalApiService';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notification: NotificationService,
    private _apiService:GeneralApiService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if ([401].includes(err?.error?.statusCode)) {
          localStorage.removeItem('access_token');
          this.notification.push('Your session has expired, please login again',2);
          window.location.reload();
        }
        
      
        
        if ([400].includes(err?.error?.statusCode)) {
         this.notification.push(err?.error?.message,2)
        }
      
        if ([500].includes(err.status)) {
          
        }
      
        // this._apiService.isCompareLoader$.next(false);
        return throwError(err);
      })
    );
  }
}