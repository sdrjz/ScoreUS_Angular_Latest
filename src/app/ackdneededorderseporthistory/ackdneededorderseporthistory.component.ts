import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { api } from '../api.endpoints';
import { GeneralApiService } from '../services/appService/generalApiService';
import { tips } from '../tootTips';

@Component({
    selector: 'app-ackdneededorderseporthistory',
    templateUrl: './ackdneededorderseporthistory.component.html',
    styleUrls: ['./ackdneededorderseporthistory.component.css']
})
export class AckdneededorderseporthistoryComponent implements OnInit {
    loggedInUser:any
    public apiRequestData :any={}
    constructor(private _apiService:GeneralApiService,
        private translateService:TranslateService,
        private cdr : ChangeDetectorRef) { }

    ngOnInit(): void {
        var user = localStorage.getItem('userData')
        if(user)
            this.loggedInUser = JSON.parse(user)

        this._apiService.isLanguageSelector$.subscribe((res:any)=>{
            this.translateService.use(res)
            this.cdr.detectChanges()
        })

        // this.apiRequestData.tenantId = this.loggedInUser.tenantID
        // this.apiRequestData.userId = this.loggedInUser.userID
        // this.apiRequestData.reportFor = 1
        // this.apiRequestData.searchText = ''
        // this.apiRequestData.pageSize = 10
        // this.apiRequestData.pageNumber = 1
        let reportFor = 1;
        if(this.loggedInUser.roleID == 8){
            reportFor = 103
        } else {
            reportFor = 1
        }

        this.apiRequestData = {
            tenantId:   this.loggedInUser.tenantID,
            userId:   this.loggedInUser.userID,
            reportFor: reportFor,
            searchText: '',
            pageNumber: 1,
            pageSize: 10
        }
    }

    tips=tips
    getProjectsUrl: string = api.getReport;
    columns = [
        {
        def: 'createdAt',
        name: 'Date',
        key: 'createdAt',
        // key:(i:any)=> 
        // {
        //     const [year, month, day] = i.createdAt.split("T")[0].split("-");
        //     const date = new Date(`${year}-${month}-${day}`);
        //     const formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
        //     const formattedDay = ('0' + date.getDate()).slice(-2);
        //     const formattedYear = date.getFullYear();
        //     return `${formattedMonth}/${formattedDay}/${formattedYear}`;
        // }
        },
        {
            def: 'reportType',
            name: 'Report Type',
            key: 'reportType'
        },
        {
            def: 'reportFileName',
            name: 'File Name',
            key: 'reportFileName'
        },
        {
            def: 'reportExtension',
            name: 'Ext.',
            key: 'reportExtension'
        },
        {
        def: 'createdTime',
        name: 'Time',
        // key: 'createdAt',
        key:(i:any)=> {
            
        return  i.createdTime.split("T")[1]
        }  
        },
        {
        def: 'email',
        name: 'Recipient email',
        key: 'email',
        },
        // {
        // def: 'status',
        // name: 'Status',
        // key: (i:any)=>'Send',
        // },
        {
            def: 'name',
            name: 'Sender Name',
            key:(i:any)=> {
                return  i.name?i.name:"-";
            } 
        },
        {
        def: 'action',
        name: 'Action',
        key: 'path',
        projection:true
        },
    ];

    onDownloadClick(data:any){
    }

}
