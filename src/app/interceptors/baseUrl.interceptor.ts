import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  private baseUrl = environment.apiUrl;
  private geocodingBaseUrl = 'https://maps.googleapis.com/maps/api/geocode';
  
  constructor() {

  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let modifiedReq={};
    if (req.url.includes('./assets/i18n/en.json') || req.url.includes('./assets/i18n/zh-cn.json') || req.url.includes('./assets/i18n/false.json') || req.url.includes('./assets/i18n/true.json')) {
      // If URL includes /assets/i18n/en.json, use the original request
      modifiedReq = req.clone({
        url: `${req.url}`,
      });

    }
     else if (req.url.startsWith(this.geocodingBaseUrl)) {
      modifiedReq = req.clone({
        url: `${req.url}`,
      });
    } else if(req.url.includes('/vendorReport') || req.url.includes('/plantReport')
      || req.url.includes('/buyerReport') || req.url.includes('/commodityReport') || req.url.includes('/materialReport')){


      modifiedReq = req.clone({
        url: `${environment.sendReportUrl}${req.url}`,
      });
    
      }
    else{
      modifiedReq= req.clone({
        url: `${this.baseUrl}${req.url}`
      })
    }
    
    return next.handle(
      req.clone(
        modifiedReq
      )
    );
  }
}