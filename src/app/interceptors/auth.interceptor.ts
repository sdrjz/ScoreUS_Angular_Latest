import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private geocodingBaseUrl = 'https://maps.googleapis.com/maps/api/geocode';
  constructor(private router:Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let modifiedReq={};
    if (request.url.startsWith(this.geocodingBaseUrl)){
    return  next.handle(request)
    }else{
      const token = localStorage.getItem('access_token');
   
   
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      return next.handle(request).pipe(
        tap(
          // Do nothing on success
          () => {},
          // Handle errors
          error => {
            if (error.status === 401) {
              // If the response status is 401, log out the user and redirect them to the login page
              localStorage.clear()
              this.router.navigate(['/login']);
            }
          }
        )
      );
    }

    }
    
    
   
}