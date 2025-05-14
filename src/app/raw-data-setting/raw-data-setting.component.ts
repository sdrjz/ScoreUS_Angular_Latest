import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api } from '../api.endpoints';
import { UserService } from '../services/user/user.service';
import { tips } from '../tootTips';
import { GeneralApiService } from '../services/appService/generalApiService';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-raw-data-setting',
  templateUrl: './raw-data-setting.component.html',
  styleUrls: ['./raw-data-setting.component.css']
})
export class RawDataSettingComponent implements OnInit {
loggedInUser:any
  
tips=tips

  constructor(private userService:UserService,
    private router: Router,
    private cdr :ChangeDetectorRef,
    private _apiService :GeneralApiService,
    private translateService :TranslateService) { }



    

  ngOnInit(): void {
   
     var user = localStorage.getItem("userData")
     if(user)
    this.loggedInUser = JSON.parse(user);

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }

  getProjectsUrl:string = api.poRawData
  poRowcolumns = [
    {
      def: 'vendorCode',
      name: 'Vendor Code',
      key: 'vendorCode',
      isSticky: true
    },
    {
      def: 'vendorName',
      name: 'Vendor Name',
      key: 'vendorName',
      isSticky: true
    },
    {
      def: 'po',
      name: 'PO NO',
      key: 'po',
      isSticky: true
    },
    {
      def: 'pO_LineNo',
      name: 'PO Line no',
      key: 'pO_LineNo',
    },
    {
      def: 'partNo',
      name: 'Part No',
      key: 'partNo',
    },
    {
      def: 'partDescription',
      name: 'Part Description',
      key: 'partDescription',
    },
    {
      def: 'qty',
      name: 'Quantity',
      key: 'qty',
    },
    {
      def: 'orderUnit',
      name: 'Order Unit',
      key: 'orderUnit',
    },
    {
      def: 'unitPrice',
      name: 'Unit Price',
      key: 'unitPrice',
    },
    {
      def: 'currency',
      name: 'Currency',
      key: 'currency',
    },
    {
      def: 'pO_Post_Rec_Date',
      name: 'PO Post Rec Date',
      key: 'pO_Post_Rec_Date',
    },
    {
      def: 'pO_Frist_Delivery_Date',
      name: 'PO first delivery date',
      key: 'pO_Frist_Delivery_Date',
    },
    {
      def: 'buyerCode',
      name: 'Buyer Code',
      key: 'buyerCode',
    },
    {
      def: 'plantCode',
      name: 'Plant Code',
      key: 'plantCode',
    },
    {
      def: 'pO_Issue_Date',
      name: 'Po issue date',
      key: 'pO_Issue_Date',
    },
    {
      def: 'leadTime',
      name: 'Lead time',
      key: 'leadTime',
    },
    {
      def: 'commodity',
      name: 'Commodity',
      key: 'commodity',
    },
    {
      def: 'createdAt',
      name: 'Created At',
      key: 'createdAt',
    },
    {
      def: 'updatedAt',
      name: 'Updated At',
      key: 'updatedAt',
    },
    
  ];

}
export class YourComponent {
  // loggedInUser: { roleID?: number; isCancelled?: boolean } = { roleID: 0, isCancelled: false };
  
  // // Example of fetching user data
  // ngOnInit() {
  //   // Simulate fetching data
  //   this.loggedInUser = {
  //     roleID: 8,
  //     isCancelled: false
  //   };
  // }
}