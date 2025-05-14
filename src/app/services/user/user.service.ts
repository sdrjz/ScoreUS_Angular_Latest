import { Injectable } from '@angular/core';
import { genericService } from '../appService/genericService';
import { MatDialog } from '@angular/material/dialog';
import { RequestSentComponent } from 'src/app/pages/request-sent/request-sent.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpEvent, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInUser:any
  constructor(
    public generic_service:genericService, 
    public dialog:MatDialog,
    private router: Router
  ) 
  { }

  //#region Change Password Area
  changePassword(password:string){
    let resp;
    const body={
      Password:password
    };
    this.generic_service
    .servicePOSTAPI_WithoutToken_queryString('Login/ResetPassword', body, 'post', 'json', false)
    .subscribe(result => {
      resp = result;
      if (resp.statusCode == 200){
        this.router.navigate(['/login'])
       }
       else {
       }
    });
  }
  //#endregion Change Password Area

  //#region  file uploading
 
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    return;

    // const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
    //   reportProgress: true,
    //   responseType: 'json'
    // });

    // return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return;
    // return this.http.get(`${this.baseUrl}/files`);
  }
  //#endregion file uploading


  isUserAuthorize(){
    var user  = localStorage.getItem('userData')
    if(user)
    this.loggedInUser = JSON.parse(user);

    if(this.loggedInUser !== null)
    {
      return false
    }else{
     return true
    }
  }


}
