import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
  export class PageReloaderService {
   vendorScorecard$ = new BehaviorSubject<any>(null);
   plantScorecard$ = new BehaviorSubject<any>(null);
   commodityScorecard$ = new BehaviorSubject<any>(null);
   buyerScorecard$ = new BehaviorSubject<any>(null);
   dashBoardScorecard$ = new BehaviorSubject<any>(null);
   vendorRoleScorecard$ = new BehaviorSubject<any>(null);
   materialScorecard$ = new BehaviorSubject<any>(null);

   constructor(){}
    


}  