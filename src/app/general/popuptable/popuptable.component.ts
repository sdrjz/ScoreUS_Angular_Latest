import { Component, OnInit,Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
@Component({
  selector: 'app-popuptable',
  templateUrl: './popuptable.component.html',
  styleUrls: ['./popuptable.component.css']
})
export class PopuptableComponent implements OnInit {
  public heading:string;
  public isPopUp:boolean=true
  public totalRecords:any
  public tableData:any[]=[]
  public apiRequestData : any
  public apiUrl:any
  public sortBy : any
  constructor( public dialogRef: MatDialogRef<PopuptableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _apiService :GeneralApiService,
    private translateService : TranslateService,
    private cdr : ChangeDetectorRef) {
      if(data?.tableData && data?.columns){
        this.columns = data?.columns
        this.heading = data?.heading
        this.tableData = data?.tableData
        this.isPopUp = true;
        this.apiRequestData = data?.apiRequestData,
        this.apiUrl=data?.route 
        this.totalRecords  = data?.totalRecords
        this.sortBy = data?.sortBy
      }else if(data?.apiRequestData)
      {
        this.columns = data?.columns
        this.heading = data?.heading
        this.apiRequestData = data?.apiRequestData,
        this.apiUrl=data?.route
        this.totalRecords  = data?.totalRecords
        }

     }

  ngOnInit(): void {
     

    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
  }

  

  isVendorSelected(data:any){
    return true;
  }

  columns = [
    {
      def: 'compare',
      name: 'Compare',
      key: 'compare',
      isSticky: true,
      projection: true,
      cannotExport: true,
    },
    {
      def: 'vendorCode',
      name: 'Vendor Code',
      key: 'vendorCode',
      isSticky: true,
    },
    {
      def: 'vendorName',
      name: 'Vendor Name',
      key: 'vendorName',
      isSticky: true
    },

    {
      def: 'otdPercentage',
      name: 'OTD%',
      key: 'otdPercentage',
    },
    {
      def: 'ncrPercentage',
      name: 'NCR%',
      key: 'ncrPercentage',
    },
    {
      def: 'ppvPercentage',
      name: 'PPV%',
      key: 'ppvPercentage',
    },
    {
      def: 'ltaPercentage',
      name: 'LTA%',
      key: 'ltaPercentage',
    },
    {
      def: 'otdScore',
      name: 'OTD Score',
      key: 'otdScore',
    },
    {
      def: 'ncrScore',
      name: 'NCR Score',
      key: 'ncrScore',
    },
    {
      def: 'ppvScore',
      name: 'PPV Score',
      key: 'ppvScore',
    },
    {
      def: 'ltaScore',
      name: 'LTA Score',
      key: 'ltaScore',
    },
    {
      def: 'totalScore',
      name: 'Total Score',
      key: 'totalScore',
    },
    {
      def: 'spend',
      name: 'Spend',
      key: 'spend',
    },
    {
      def: 'spendPercentage',
      name: 'Spend%',
      key: 'spendPercentage',
    },
    {
      def: 'sourcedItem',
      name: 'Sourced Matl.',
      key: 'sourcedItem',
    },
    {
      def: 'sourcedPercentage',
      name: 'Sourced Matl.%',
      key: 'sourcedPercentage',
    },
    {
      def: 'receivedPOLines',
      name: 'Recieved PO Lines',
      key: 'receivedPOLines',
    },
    {
      def: 'receivedPOLinesPercentage',
      name: 'Recieved PO Lines %',
      key: 'receivedPOLinesPercentage',
    },
    {
      def: 'issuedPOLines',
      name: 'Issued PO Lines',
      key: 'issuedPOLines',
    },
    {
      def: 'issuedPOLinesPercentage',
      name: 'Issued PO Lines%',
      key: 'issuedPOLinesPercentage',

    },
  ];


  onCloseClick(){
    this.dialogRef.close();
  }

}
