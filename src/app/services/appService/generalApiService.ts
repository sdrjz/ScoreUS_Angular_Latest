import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import * as _moment from 'moment/moment';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralApiService {
  user$ = new BehaviorSubject<any>(null);
  isReferralAllowed$ = new BehaviorSubject<any>(null);
  kpiParameter  = new BehaviorSubject<any>(null);
  vendorScorecard$  = new BehaviorSubject<any>(null);
  buyerScorecard$  = new BehaviorSubject<any>(null);
  plantScorecard$  = new BehaviorSubject<any>(null);
  submitKpiParams$ = new BehaviorSubject<any>(false);
  route$ = new BehaviorSubject<any>(null);
  
  
  averageScore$ = new BehaviorSubject<any>(null);
  otdWeight$ = new BehaviorSubject<any>(null);
  ncrWeight$ = new BehaviorSubject<any>(null);
  ltaWeight$ = new BehaviorSubject<any>(null);
  ppvWeight$ = new BehaviorSubject<any>(null);
  collegedata$ = new Subject<any>();
  isCompareLoader$ = new BehaviorSubject<any>(false)
  isLanguageSelector$ =new BehaviorSubject<string>('en');

  constructor(private http: HttpClient,
    private translateService:TranslateService) { }

  postWithParams(path: string, data: any) {
    let params = new HttpParams({ fromObject: data });
    return this.http.post(path, null, { params })
  }


  postWithClientParams(path:string,data:any,dataParams:any)
  {
    return this.http.post(path,data,{params:dataParams})
  }

  setFormControlDate(form: FormGroup, controlName: string) {
    return _moment(form.controls[controlName].value).format('YYYY-MM-DD')

  }
  setInputControlDate(form: any, controlName: string) {
    return _moment(form).format('YYYY-MM-DD')

  }
  

  setDateFormat(data:any) {
    return _moment(data).format('YYYY-MM-DD')

  }
 
  post(path: string, data: any) {
    return this.http.post(path, data)
  }

  delete(path: string, id: any) {

    return this.http.delete(`${path}/${id}`)
  }
  deleteWithParam(path: string) {

    return this.http.delete(path)
  }


  put(path: string, data: any) {

    return this.http.put(`${path}/${data.id}`, data)
  }
  
  putWithIdAndData(path: string, data: any) {
    return this.http.put(`${path}`, data)
  }

  putWithHeader(path: string, data: any, header: any) {
    return this.http.put(`${path}`, data, header)
  }

  putWithoutData(path:any){
    return this.http.put(path,{})
  }

  putStatus(path: string, data: any) {
    return this.http.put(`${path}/${data.id}`, { status: data.status })
  }


  getForDropDown(path: string) {

    return this.http.get(path + "?pageSize=10000")
  }


  get(path: string) {
    return this.http.get(path)
  }
  putWithId(path: string, data: any) {
    return this.http.put(path, data);
  }

  getDateDifference(startDate:number,endDate:number)
  {
     return ((endDate - startDate)/(1000*60*60*24))
  }

  getMonthName(data:string,monthName:string){
    let monthData=''
    switch(data?.toLowerCase()){
      case 'january':
         monthData= 'Jan';
         break;
      case 'february':
        monthData = 'Feb';
        break;
      case 'march':
        monthData = 'Mar';
        break;
      case 'april':
        monthData = 'Apr';
        break;
      case 'may':
        monthData= 'May';
        break;
      case 'june':
        monthData = 'Jun';
        break;
      case 'july':
        monthData = 'Jul';
        break;
      case 'august':
       monthData = 'Aug';
       break;
      case 'september':
        monthData =  'Sept';
        break;
      case 'october':
        monthData = 'Oct';
        break;
      case 'november':
        monthData = 'Nov';
        break;
      case 'december':
        monthData = 'Dec';
        break;
        default :
        break;
    }
   return '1 '+monthData+''+monthName.substring(monthName.indexOf(' '))
  }


  


}