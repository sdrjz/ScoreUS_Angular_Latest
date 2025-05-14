import { Component, OnInit } from '@angular/core';
import { GeneralApiService } from '../services/appService/generalApiService';

@Component({
  selector: 'app-openpoanalysis',
  templateUrl: './openpoanalysis.component.html',
  styleUrls: ['./openpoanalysis.component.css']
})
export class OpenpoanalysisComponent implements OnInit {
  loggedInUser : any;
  fields:any = {
    tenantId:"",
    poIssueDate:""
}
  constructor(private _apiService :GeneralApiService) { }

  ngOnInit(): void {
     

    var user = localStorage.getItem("userData")
    if(user)
        this.loggedInUser = JSON.parse(user)
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
