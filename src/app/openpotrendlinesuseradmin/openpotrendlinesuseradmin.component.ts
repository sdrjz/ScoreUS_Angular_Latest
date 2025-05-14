import { Component, OnInit, Input } from '@angular/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { api } from 'src/app/api.endpoints';

@Component({
  selector: 'app-openpotrendlinesuseradmin',
  templateUrl: './openpotrendlinesuseradmin.component.html',
  styleUrls: ['./openpotrendlinesuseradmin.component.css']
})
export class OpenpotrendlinesuseradminComponent implements OnInit {

    constructor(
        private _apiService: GeneralApiService,
    ) { }

    fields:any = {
        tenantId:"",
        poIssueDate:""
    }
    loggedInUser:any;

    ngOnInit(): void {
     

        var user = localStorage.getItem("userData")
        if(user)
            this.loggedInUser = JSON.parse(user)
            this.fields.tenantId = this.loggedInUser.tenantID;
            // this.callSettings();
    }

    callSettings(){
        var url_query_params    =   api.ByDefaultSetting+'?tenantId='+this.fields.tenantId;
        this._apiService.get(url_query_params)
            .subscribe((res:any)=>{
                // this.allBuyers = res.buyer;
                // this.allPlants = res.plant;
                // this.filters.bufferDays = res.setting[0].bufferDays;
                // this.filters.selfdefinedfuturedays = res.setting[0].selfDefinedFutureDays;
               
            },
            (error:any)=>{
                this._apiService.isCompareLoader$.next(false)
            })
    }


    getDataFromChild(data){
        this.fields.poIssueDate    =   data[0]['poIssueDate'];
    }

    formatDate(dateString: string): string {
        const [day, month, year] = dateString.split('/');
        const date = new Date(`${year}-${month}-${day}`);
        if (isNaN(date.getTime())) {
          return '';
        }
        const formattedDay = ('0' + date.getDate()).slice(-2);
        const formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
        const formattedYear = date.getFullYear();
        return `${formattedMonth}/${formattedDay}/${formattedYear}`;
    }
}
