import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { api } from '../api.endpoints';
import { tips } from '../tootTips';
import { GeneralApiService } from '../services/appService/generalApiService';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-materialsreporthistory',
  templateUrl: './materialsreporthistory.component.html',
  styleUrls: ['./materialsreporthistory.component.css']
})
export class MaterialsreporthistoryComponent implements OnInit {
  loggedInUser:any
  constructor(private cdr : ChangeDetectorRef,
    private _apiService : GeneralApiService,
    private translateService :TranslateService) { }

  ngOnInit(): void {
   var user = localStorage.getItem('userData')
   if(user)
   this.loggedInUser = JSON.parse(user)

   this.apiRequestData.tenantId = this.loggedInUser.tenantID
   this.apiRequestData.userId = this.loggedInUser.userID
   this.apiRequestData.reportFor = 4
   this.apiRequestData.searchText = ''
   this.apiRequestData.pageSize = 10
   this.apiRequestData.pageNumber = 1
   


   this._apiService.isLanguageSelector$.subscribe((res:any)=>{
    this.translateService.use(res)
    this.cdr.detectChanges()
  })

  }
  apiRequestData :any={}
  tips=tips
  getProjectsUrl: string = api.getReport;
  columns = [
    {
      def: 'createdAt',
      name: 'Date',
      // key: 'createdAt',
      key:(i:any)=> 
      {
       return i.createdAt.split("T")[0]
      }
    },
    {
      def: 'reportType',
      name: 'Report Type',
      key:(i:any)=> 
        {
          return i.reportType
      }
    },
    {
      def: 'reportFileName',
      name: 'File Name',
      key:(i:any)=> 
      {
       return i.reportFileName
      }
    },
    {
      def: 'reportExtension',
      name: 'File Ext.',
      key:(i:any)=> 
      {
       return i.reportExtension
      }
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
    {
      def: 'status',
      name: 'Status',
      key: 'status',
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
