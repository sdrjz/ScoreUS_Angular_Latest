import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpResponse,
} from "@angular/common/http";
import { APP_CONFIG } from "src/app/core/app.config";

//import { Router } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class genericService {
    constructor(
		private http: HttpClient,
		// private toastr: ToastrService,
		// private router: Router
	) {}

    public token: string;

    
    // gettoken() {
	// 	let User = JSON.parse(localStorage.getItem("currUserr"));
	// 	let token_id = User.Result.Accesstoken;

	// 	this.token = token_id != null ? token_id : "";
	// 	if (this.token == "" || this.token == null || this.token == undefined) {
	// 		this.router.navigate(["/auth/login"]);
	// 		return;
	// 	}
	// 	return this.token;
	// }


    //FOR GET API without Token
    serviceGetAPI(
		method: string,
		contentType: string = "json",
		Accept: boolean = false
	) {
		let url= method;
		return this.http.get(url);
	}

     //FOR GET API with Token
     serviceGetAPIWtithToken(
		method: string,
		contentType: string = "json",
		Accept: boolean = false
	) {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json",
				//Authorization: "Bearer " + this.gettoken(),
                Authorization: "Bearer " + this.token, //uper wali line chale gi temprory band kri h 
			}),
		};

		let url = method;
		return this.http.get(url, httpOptions);
	}


	login(userCredential:any){
		
	}

	//without Token
	servicePOSTAPI_WithoutToken_queryString(
		method: string,
		body: any,
		httpAttribute: string = "post",
		contentType: string = "json",
		Accept: boolean = false
	) {
		let params = new HttpParams({fromObject: body});
		let url = method;
		if (httpAttribute == "put") {
			return this.http.put(url, body);
		} else if (httpAttribute == "delete") {
			return this.http.delete(url);
		} else if (httpAttribute == "patch") {
			return this.http.patch(url, body);
		} else {
			return this.http.post(url,null,{params});
		}
	}

	service_POSTAPI_WithoutToken(
		method: string,
		body: any,
		httpAttribute: string = "post",
		contentType: string = "json",
		Accept: boolean = false
	) {
		let url = method;
		if (httpAttribute == "put") {
			return this.http.put(url, body);
		} else if (httpAttribute == "delete") {
			return this.http.delete(url);
		} else if (httpAttribute == "patch") {
			return this.http.patch(url, body);
		} else {
			return this.http.post(url,body);
		}
	}


}