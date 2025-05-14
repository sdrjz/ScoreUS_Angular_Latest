import { ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GeneralApiService } from '../services/appService/generalApiService';
import { api } from '../api.endpoints';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../notification.service';
import { URLSearchParams } from 'url';
import { Observable, observable } from 'rxjs';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserdialogoutComponent } from '../general/userdialogout/userdialogout.component';
import { OkdialogcomponentComponent } from '../general/okdialogcomponent/okdialogcomponent.component';
import { FLAG_UNRESTRICTED } from 'html2canvas/dist/types/css/syntax/tokenizer';
import { tips } from '../tootTips';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-importdata',
  templateUrl: './importdata.component.html',
  styleUrls: ['./importdata.component.css']
})

export class ImportdataComponent implements OnInit {
  tips=tips
  hasErrorData:boolean = true;
  showTable:boolean = false;
  errorMessage: string = null;
  fileUploadedName :string
  showProcessButton :boolean = false;
  excelExtensions = ["xlsm", "csv", "xlsx", "xlsb", "xltx", "xltm", "xls"]
  public formData = new FormData();
  public responseTableData: any[]
  selectedFileType: any = null
  apiDataforTable: any = {
    fileTypeId: 0,
    file: new FormData(),
    tenantId: 0,
    isFileUploaded:false,
  }
  
  fileNameForServer: any
  fileToDownload: any
  fileToUpload: any
  loggedInUser: any
  dataSourceForTable: any[]
  columns: any[]=[]
  totalRecords:any
  correctColumns:any[]=[]
  // public serverUtl = environment.serverUrl
  public listImportData: any[] = []
  fileName = '';
  fileTypeId: any = null
  constructor(private _apiService: GeneralApiService
    , private notificationService: NotificationService
    , private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog,
    private translateService : TranslateService
  ) { }


  errorDataInFile(event: any) {
    this.formData = new FormData();
    if (event?.message === "OK") {
      // this.errorMessage = "File uploaded successfully"
    }
    else {
      this.errorMessage = event?.error?.message
      // this.apiDataforTable.formData = new FormData();
      this.apiDataforTable.isFileUploaded = false
      this.fileName = null
      this.showProcessButton= false      
      this.showTable = false;
    }
    
  }


  onFileSelected(event) {

    if (this.fileTypeId === undefined || this.fileTypeId === null) {
      this.notificationService.push("File type must be selected", 2)
      return
    }

    let fileExt = event.target.files[0].name.split(".")[1]
    if (!this.excelExtensions.includes(fileExt)) {
      this.notificationService.push("Upload only excel sheets", 2)
      return
    }
    this.errorMessage = null
    
    let dialogRef = this.dialog.open(UserdialogoutComponent,
      {
        data: {
          height: '75%',
          width: '40%',
          message: "Are you sure you want to proceed?",
          noteMessage:"(Note: Accepting will delete the previous file data.)",
          heading: 'Excel Import'
        }
      });

    dialogRef.afterClosed().subscribe((res: any) => {

      if (res === null) {
        // this.fileName = null
        // this.apiDataforTable.file = new FormData();
        // window.location.reload()
        
      
        return
      }
      this.hasErrorData = true
      // this.fileUploadedName = this.listImportData.filter((i:any)=>i.id == this.fileTypeId)[0].value
      this.showTable = true
      this.formData = new FormData();  // Reset formData
      this.apiDataforTable = null;     // Clear apiData
      this.setDataColumns(this.fileTypeId);
      this.formData = new FormData()
      let file: File = event.target.files[0];
      if (file) {

        this.fileName = file.name;
        this.cdr.detectChanges();

     
       
      
       
     
       

        
        this.formData.append("file", file, file?.name);


        // this.loggedInUser.tenantID = 1;
        this.apiDataforTable = {
          fileTypeId: this.fileTypeId,
          formData: this.formData,
          tenantId: this.loggedInUser.tenantID,
          isFileUploaded :true,
        }

        // this._apiService.post(api.excelImport + "?FileType=" + this.fileTypeId + "&tenantId=" + this.loggedInUser?.tenantID, formData)
        //   .subscribe((res: any) => {
        //     this.totalRecord = res?.data?.length
        //     this.dataSourceForTable = res?.data
        //     this.fileNameForServer = res?.fileName
        //     file=null
        //     this.fileName=null
        //   })
        // const upload$ = this.http.post("/api/thumbnail-upload", formData);
        // upload$.subscribe();
      }



    })




  }

  // constructor() { }

  ngOnInit(): void {
     
    
    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })

    let user = localStorage.getItem('userData')
    if (user)
      this.loggedInUser = JSON.parse(user);
      this._apiService.isCompareLoader$.next(true)
    // this._apiService.get(api.excelImport+"/"+ Number(this.loggedInUser.roleID))
    //   .subscribe((res: any) => {
    //     this._apiService.isCompareLoader$.next(false)
    //     this.listImportData = this.sortListByTarget(res.data)
    //     this.notificationService.push("Import list retrieved", 1)
    //   }),(e:any)=>{this._apiService.isCompareLoader$.next(false)}
    this._apiService.get(api.excelImport + "/" + this.loggedInUser.roleID + "/" + this.loggedInUser.tenantID)
  .subscribe((res: any) => {
    this._apiService.isCompareLoader$.next(false);
    this.listImportData = this.sortListByTarget(res.data);
    this.notificationService.push("Import list retrieved", 1);
  }, (e: any) => {
    this._apiService.isCompareLoader$.next(false);
  });
  }


  onSelection(data: any) {
    // this.apiDataforTable = null
    this.formData = new FormData();
    this.fileTypeId = null;
    this.fileName = null;
    this.showTable = false;
    this.showProcessButton = false;
    this.fileTypeId = data.target.value 
    
    this.errorMessage = null
    this.apiDataforTable.isFileUploaded = false; // so wont hit api in data table component
    this.setDataColumns(this.fileTypeId)
    this.cdr.detectChanges();

  }

  onFileSampleSelect(data: any) {
    this.fileToDownload = data.target.value
  }


  downloadFile() {

    // let blob:any = new Blob([], { type: '.xlxs' });
    // const url= window.URL.createObjectURL(this.fileToDownload);
    // window.open(url);

    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.fileToDownload);
    link.setAttribute('download', `sampleData.xlx`);
    link.click();
    link.remove();
  }

  setDataColumns(data: any) {
    switch (+data) {
      case 1:
        this.columns = [
          {
            def: 'description',
            name: 'Message',
            key: 'description',
            //isSticky: true,
            projection: true
          },
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'vendorName',
            name: 'Vendor Name',
            // key: 'vendorName',
            key:(i:any)=>{
              if(i.vendorName === null || i.vendorName === undefined)return "N/A"
              return i.vendorName
            },
            //isSticky: true
          },
          {
            def: 'vendorCode',
            name: 'Vendor Code',
            // key: 'vendorCode',
            key:(i:any)=>{
              if(i.vendorCode === null || i.vendorCode === undefined)return "N/A"
              return i.vendorCode
            },
            //isSticky: true
          },
         
          {
            def: 'po',
            name: 'PO NO.',
            // key: 'po',
            key:(i:any)=>{
              if(i.po === null || i.po === undefined)return "N/A"
              return i.po
            },
          },
          {
            def: 'pO_LineNo',
            name: 'Line no',
            // key: 'pO_LineNo',
            key:(i:any)=>{
              if(i.pO_LineNo === null || i.pO_LineNo === undefined)return "N/A"
              return i.pO_LineNo
            },
          },
          {
            def: 'partNo',
            name: 'Part No',
            // key: 'partNo',
            key:(i:any)=>{
              if(i.partNo === null || i.partNo === undefined)return "N/A"
              return i.partNo
            },
          },
          {
            def: 'pO_Post_Rec_Date',
            name: 'Po Rec Date',
            key: 'pO_Post_Rec_Date',
            projection: true
          },
          {
            def: 'qty',
            name: 'Quantity',
            // key: 'qty',
            key:(i:any)=>{
              if(i.qty === null || i.qty === undefined)return "N/A"
              return i.qty
            },
          },
          {
            def: 'unitPrice',
            name: 'Unit Price',
            // key: 'unitPrice',
            key:(i:any)=>{
              if(i.unitPrice === null || i.unitPrice === undefined)return "N/A"
              return i.unitPrice
            },
          },
          {
            def: 'plantCode',
            name: 'Plant Code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === undefined)return "N/A"
              return i.plantCode
            },
          },
          {
            def: 'orderUnit',
            name: 'Order unit',
            // key: 'orderUnit',
            key:(i:any)=>{
              if(i.orderUnit === null || i.orderUnit === undefined)return "N/A"
              return i.orderUnit
            },
          },
          {
            def: 'pO_Issue_Date',
            name: 'PO Issue Date',
            // key: 'pO_Issue_Date',
            key:(i:any)=>{
              if(i.pO_Issue_Date === null || i.pO_Issue_Date === undefined)return "N/A"
              return i.pO_Issue_Date
            },
            projection: true
          },

          {
            def: 'pO_Frist_Delivery_Date',
            name: 'First Delivery Date',
            // key: 'pO_Frist_Delivery_Date',
            key:(i:any)=>{
              if(i.pO_Frist_Delivery_Date === null || i.pO_Frist_Delivery_Date === undefined)return "N/A"
              return i.pO_Frist_Delivery_Date
            },
            projection: true
          },
          {
            def: 'leadTime',
            name: 'Lead Time',
            // key: 'leadTime',
            key:(i:any)=>{
              if(i.leadTime === null || i.leadTime === undefined)return "N/A"
              return i.leadTime
            }
          },
          {
            def: 'buyerCode',
            name: 'Buyer Code',
            // key: 'buyerCode',
            key:(i:any)=>{
              if(i.buyerCode === null || i.buyerCode === undefined)return "N/A"
              return i.buyerCode
            }
          },
          {
            def: 'commodity',
            name: 'Commodity',
            // key: 'commodity',
            key:(i:any)=>{
              if(i.commodity === null || i.commodity === undefined)return "N/A"
              return i.commodity
            }
          },
        ];
        this.correctColumns = [
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'vendorName',
            name: 'Vendor Name',
            // key: 'vendorName',
            key:(i:any)=>{
              if(i.vendorName === null || i.vendorName === undefined)return "N/A"
              return i.vendorName
            },
            //isSticky: true
          },
          {
            def: 'vendorCode',
            name: 'Vendor Code',
            // key: 'vendorCode',
            key:(i:any)=>{
              if(i.vendorCode === null || i.vendorCode === undefined)return "N/A"
              return i.vendorCode
            },
            //isSticky: true
          },
          {
            def: 'po',
            name: 'PO NO.',
            // key: 'po',
            key:(i:any)=>{
              if(i.po === null || i.po === undefined)return "N/A"
              return i.po
            },
          },
          {
            def: 'pO_LineNo',
            name: 'Line no',
            // key: 'pO_LineNo',
            key:(i:any)=>{
              if(i.pO_LineNo === null || i.pO_LineNo === undefined)return "N/A"
              return i.pO_LineNo
            },
          },
          {
            def: 'partNo',
            name: 'Part No',
            // key: 'partNo',
            key:(i:any)=>{
              if(i.partNo === null || i.partNo === undefined)return "N/A"
              return i.partNo
            },
          },
          {
            def: 'pO_Post_Rec_Date',
            name: 'Po Rec Date',
            key: 'pO_Post_Rec_Date',
            projection: true
          },
          {
            def: 'qty',
            name: 'Quantity',
            // key: 'qty',
            key:(i:any)=>{
              if(i.qty === null || i.qty === undefined)return "N/A"
              return i.qty
            },
          },
          {
            def: 'unitPrice',
            name: 'Unit Price',
            // key: 'unitPrice',
            key:(i:any)=>{
              if(i.unitPrice === null || i.unitPrice === undefined)return "N/A"
              return i.unitPrice
            },
          },
          {
            def: 'plantCode',
            name: 'Plant Code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === undefined)return "N/A"
              return i.plantCode
            },
          },
          {
            def: 'orderUnit',
            name: 'Order unit',
            // key: 'orderUnit',
            key:(i:any)=>{
              if(i.orderUnit === null || i.orderUnit === undefined)return "N/A"
              return i.orderUnit
            },
          },
          {
            def: 'pO_Issue_Date',
            name: 'PO Issue Date',
            // key: 'pO_Issue_Date',
            key:(i:any)=>{
              if(i.pO_Issue_Date === null || i.pO_Issue_Date === undefined)return "N/A"
              return i.pO_Issue_Date
            },
            projection: true
          },

          {
            def: 'pO_Frist_Delivery_Date',
            name: 'First Delivery Date',
            // key: 'pO_Frist_Delivery_Date',
            key:(i:any)=>{
              if(i.pO_Frist_Delivery_Date === null || i.pO_Frist_Delivery_Date === undefined)return "N/A"
              return i.pO_Frist_Delivery_Date
            },
            projection: true
          },
          {
            def: 'leadTime',
            name: 'Lead Time',
            // key: 'leadTime',
            key:(i:any)=>{
              if(i.leadTime === null || i.leadTime === undefined)return "N/A"
              return i.leadTime
            }
          },
          {
            def: 'buyerCode',
            name: 'Buyer Code',
            // key: 'buyerCode',
            key:(i:any)=>{
              if(i.buyerCode === null || i.buyerCode === undefined)return "N/A"
              return i.buyerCode
            }
          },
          {
            def: 'commodity',
            name: 'Commodity',
            // key: 'commodity',
            key:(i:any)=>{
              if(i.commodity === null || i.commodity === undefined)return "N/A"
              return i.commodity
            }
          },
        ];
        break;
      case 2:
        this.columns = [
          {
            def: 'description',
            name: 'Message',
            key: 'description',
            //isSticky: true,
            projection: true
          },
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'vendorName',
            name: 'Vendor Name',
            // key: 'vendorName',
            key:(i:any)=>{
              if(i.vendorName === null || i.vendorName === undefined)return "N/A"
              return i.vendorName
            }
            //isSticky: true
          },
          {
            def: 'vendorCode',
            name: 'Vendor Code',
            // key: 'vendorCode',
            key:(i:any)=>{
              if(i.vendorCode === null || i.vendorCode === undefined)return "N/A"
              return i.vendorCode
            }
            //isSticky: true
          },
          
          {
            def: 'plantCode',
            name: 'Plant Code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === undefined)return "N/A"
              return i.plantCode
            }
            //isSticky: true
          },
          {
            def: 'partno',
            name: 'Part No.',
            // key: 'partno',
            key:(i:any)=>{
              if(i.partno === null || i.partno === undefined)return "N/A"
              return i.partno;
            }
          },
          {
            def: 'part_Description',
            name: 'Part Description',
            // key: 'part_Description',
            key:(i:any)=>{
              if(i.part_Description === null || i.part_Description === undefined)return "N/A"
              return i.part_Description
            }
            
          },
          {
            def: 'complaint_Qty',
            name: 'Complain quantity',
            // key: 'complaint_Qty',
            key:(i:any)=>{
              if(i.complaint_Qty === null || i.complaint_Qty === undefined)return "N/A"
              return i.complaint_Qty
            }
          },
          {
            def: 'order_Unit',
            name: 'Order unit',
            // key: 'order_Unit',
            key:(i:any)=>{
              if(i.order_Unit === null || i.order_Unit === undefined)return "N/A"
              return i.order_Unit
            }
          },
          {
            def: 'buyerCode',
            name: 'Buyer code',
            // key: 'buyerCode',
            key:(i:any)=>{
              if(i.buyerCode === null || i.buyerCode === undefined)return "N/A"
              return i.buyerCode
            }

          },
          {
            def: 'pO_Orderno',
            name: 'PO Number',
            // key: 'pO_Orderno',
            key:(i:any)=>{
              if(i.pO_Orderno === null || i.pO_Orderno === undefined)return "N/A"
              return i.pO_Orderno
            }

          },
          {
            def: 'pO_lineno',
            name: 'Line no',
            // key: 'pO_lineno',   
            key:(i:any)=>{
              if(i.pO_lineno === null || i.pO_lineno === undefined)return "N/A"
              return i.pO_lineno
            }
          },
          {
            def: 'completionDate',
            name: 'CompletionDate',
            key: 'completionDate',
            projection: true
          },

          {
            def: 'createdAt',
            name: 'Created Date',
            key: 'createdAt',
            // projection: true
          },


        ];
        this.correctColumns = [
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'vendorName',
            name: 'Vendor Name',
            // key: 'vendorName',
            key:(i:any)=>{
              if(i.vendorName === null || i.vendorName === undefined)return "N/A"
              return i.vendorName
            }
            //isSticky: true
          },
          {
            def: 'vendorCode',
            name: 'Vendor Code',
            // key: 'vendorCode',
            key:(i:any)=>{
              if(i.vendorCode === null || i.vendorCode === undefined)return "N/A"
              return i.vendorCode
            }
            //isSticky: true
          },
          {
            def: 'plantCode',
            name: 'Plant Code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === undefined)return "N/A"
              return i.plantCode
            }
            //isSticky: true
          },
          {
            def: 'partno',
            name: 'Part No. ',
            // key: 'partno',
            key:(i:any)=>{
              if(i.partno === null || i.partno === undefined)return "N/A"
              return i.partno;
            }
          },
          {
            def: 'part_Description',
            name: 'Part Description',
            // key: 'part_Description',
            key:(i:any)=>{
              if(i.part_Description === null || i.part_Description === undefined)return "N/A"
              return i.part_Description
            }
            
          },
          {
            def: 'complaint_Qty',
            name: 'Complain quantity',
            // key: 'complaint_Qty',
            key:(i:any)=>{
              if(i.complaint_Qty === null || i.complaint_Qty === undefined)return "N/A"
              return i.complaint_Qty
            }
          },
          {
            def: 'order_Unit',
            name: 'Order unit',
            // key: 'order_Unit',
            key:(i:any)=>{
              if(i.order_Unit === null || i.order_Unit === undefined)return "N/A"
              return i.order_Unit
            }
          },
          {
            def: 'buyerCode',
            name: 'Buyer code',
            // key: 'buyerCode',
            key:(i:any)=>{
              if(i.buyerCode === null || i.buyerCode === undefined)return "N/A"
              return i.buyerCode
            }

          },
          {
            def: 'pO_Orderno',
            name: 'PO Number',
            // key: 'pO_Orderno',
            key:(i:any)=>{
              if(i.pO_Orderno === null || i.pO_Orderno === undefined)return "N/A"
              return i.pO_Orderno
            }

          },
          {
            def: 'pO_lineno',
            name: 'Line no',
            // key: 'pO_lineno',   
            key:(i:any)=>{
              if(i.pO_lineno === null || i.pO_lineno === undefined)return "N/A"
              return i.pO_lineno
            }
          },

          {
            def: 'completionDate',
            name: 'CompletionDate',
            key: 'completionDate',
            projection: true
          },
          {
            def: 'createdAt',
            name: 'Created Date',
            key: 'createdAt',
            // projection: true
          },


        ];
        break;
      case 3:
        this.columns = [
          {
            def: 'description',
            name: 'Message',
            key: 'description',
            //isSticky: true,
            projection: true
          },
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'vendorName',
            name: 'Vendor Name',
            // key: 'vendorName',
            key:(i:any)=>{
              if(i.vendorName === null || i.vendorName === undefined) return "N/A"
              return i.vendorName;
            }

            //isSticky: true
          },
          {
            def: 'vendorCode',
            name: 'Vendor Code',
            // key: 'vendorCode',
            key:(i:any)=>{
              if(i.vendorCode === null || i.vendorCode === null)return "N/A"
              return i.vendorCode
            },
            //isSticky: true
          },
          
          {
            def: 'ncR_percentage',
            name: 'NCR%',
            // key: 'ncR_percentage',
            key:(i:any)=>{
              if(i.ncR_percentage === null || i.ncR_percentage === null)return "N/A"
              return i.ncR_percentage == "0"?0:i.ncR_percentage*100;
            },
          },
          {
            def: 'pV_percentage',
            name: 'PV%',
            // key: 'pV_percentage',
            key:(i:any)=>{
              if(i.pV_percentage === null || i.pV_percentage === null)return "N/A"
              return i.pV_percentage == "0"?0:i.pV_percentage*100;
            },
          },
          {
            def: 'otD_percentage',
            name: 'OTD%',
            // key: 'otD_percentage',
            key:(i:any)=>{
              if(i.otD_percentage === null || i.otD_percentage === null)return "N/A"
              return i.otD_percentage == "0"?0:i.otD_percentage*100;
            },
          },
          {
            def: 'ltA_percentage',
            name: 'LTA%',
            // key: 'ltA_percentage',
            key:(i:any)=>{
              if(i.ltA_percentage === null || i.ltA_percentage === null)return "N/A"
              return i.ltA_percentage == "0"?0:i.ltA_percentage*100;
            },
          },
        ];
        this.correctColumns = [
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'vendorName',
            name: 'Vendor Name',
            // key: 'vendorName',
            key:(i:any)=>{
              if(i.vendorName === null || i.vendorName === undefined) return "N/A"
              return i.vendorName;
            }

            //isSticky: true
          },
          {
            def: 'vendorCode',
            name: 'Vendor Code',
            // key: 'vendorCode',
            key:(i:any)=>{
              if(i.vendorCode === null || i.vendorCode === null)return "N/A"
              return i.vendorCode
            },
            //isSticky: true
          },
          {
            def: 'ncR_percentage',
            name: 'NCR%',
            // key: 'ncR_percentage',
            key:(i:any)=>{
              if(i.ncR_percentage === null || i.ncR_percentage === null)return "N/A"
              return i.ncR_percentage == "0"?0:i.ncR_percentage*100;
            },
          },
          {
            def: 'pV_percentage',
            name: 'PV%',
            // key: 'pV_percentage',
            key:(i:any)=>{
              if(i.pV_percentage === null || i.pV_percentage === null)return "N/A"
              return i.pV_percentage == "0"?0:i.pV_percentage*100;
            },
          },
          {
            def: 'otD_percentage',
            name: 'OTD%',
            // key: 'otD_percentage',
            key:(i:any)=>{
              if(i.otD_percentage === null || i.otD_percentage === null)return "N/A"
              return i.otD_percentage == "0"?0:i.otD_percentage*100;
            },
          },
          {
            def: 'ltA_percentage',
            name: 'LTA%',
            // key: 'ltA_percentage',
            key:(i:any)=>{
              if(i.ltA_percentage === null || i.ltA_percentage === null)return "N/A"
              return i.ltA_percentage == "0"?0:i.ltA_percentage*100;
            },
          },

        ];
        break;
      case 4:
        this.columns = [
          {
            def: 'description',
            name: 'Message',
            key: 'description',
            //isSticky: true,
            projection: true
          },
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'buyerName',
            name: 'Buyer Name',
            // key: 'buyerName',
            key:(i:any)=>{
              if(i.buyerName === null || i.buyerName === null)return "N/A"
              return i.buyerName
            },
            //isSticky: true
          },
          {
            def: 'buyerCode',
            name: 'Buyer Code',
            // key: 'buyerCode',
            key:(i:any)=>{
              if(i.buyerCode === null || i.buyerCode === null)return "N/A"
              return i.buyerCode
            },
            //isSticky: true
          },
          
          {
            def: 'ncR_percentage',
            name: 'NCR%',
            // key: 'ncR_percentage',
            key:(i:any)=>{
              if(i.ncR_percentage === null || i.ncR_percentage === null)return "N/A"
              return i.ncR_percentage == "0"?0:i.ncR_percentage*100;
            },
          },
          {
            def: 'pV_percentage',
            name: 'PV%',
            // key: 'pV_percentage',
            key:(i:any)=>{
              if(i.pV_percentage === null || i.pV_percentage === null)return "N/A"
              return i.pV_percentage == "0"?0:i.pV_percentage*100;
            },
          },
          {
            def: 'otD_percentage',
            name: 'OTD%',
            // key: 'otD_percentage',
            key:(i:any)=>{
              if(i.otD_percentage === null || i.otD_percentage === null)return "N/A"
              return i.otD_percentage == "0"?0:i.otD_percentage*100;
            },
          },
          {
            def: 'ltA_percentage',
            name: 'LTA%',
            // key: 'ltA_percentage',
            key:(i:any)=>{
              if(i.ltA_percentage === null || i.ltA_percentage === null)return "N/A"
              return i.ltA_percentage == "0"?0:i.ltA_percentage*100;
            },
          },
          {
            def: 'plantCode',
            name: 'Plant code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              return i.plantCode
            },

          },
          
        ];
        this.correctColumns = [
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'buyerName',
            name: 'Buyer Name',
            // key: 'buyerName',
            key:(i:any)=>{
              if(i.buyerName === null || i.buyerName === null)return "N/A"
              return i.buyerName
            },
            //isSticky: true
          },
          {
            def: 'buyerCode',
            name: 'Buyer Code',
            // key: 'buyerCode',
            key:(i:any)=>{
              if(i.buyerCode === null || i.buyerCode === null)return "N/A"
              return i.buyerCode
            },
            //isSticky: true
          },
          {
            def: 'ncR_percentage',
            name: 'NCR%',
            // key: 'ncR_percentage',
            key:(i:any)=>{
              if(i.ncR_percentage === null || i.ncR_percentage === null)return "N/A"
              return i.ncR_percentage == "0"?0:i.ncR_percentage*100;
            },
          },
          {
            def: 'pV_percentage',
            name: 'PV%',
            // key: 'pV_percentage',
            key:(i:any)=>{
              if(i.pV_percentage === null || i.pV_percentage === null)return "N/A"
              return i.pV_percentage == "0"?0:i.pV_percentage*100;
            },
          },
          {
            def: 'otD_percentage',
            name: 'OTD%',
            // key: 'otD_percentage',
            key:(i:any)=>{
              if(i.otD_percentage === null || i.otD_percentage === null)return "N/A"
              return i.otD_percentage == "0"?0:i.otD_percentage*100;
            },
          },
          {
            def: 'ltA_percentage',
            name: 'LTA%',
            // key: 'ltA_percentage',
            key:(i:any)=>{
              if(i.ltA_percentage === null || i.ltA_percentage === null)return "N/A"
              return i.ltA_percentage == "0"?0:i.ltA_percentage*100;
            },
          },
          {
            def: 'plantCode',
            name: 'Plant code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              return i.plantCode
            },

          },
        ];
        break;
      case 5:
        this.columns = [
          {
            def: 'description',
            name: 'Message',
            key: 'description',
            //isSticky: true,
            projection: true
          },
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'commodity',
            name: 'Commodity',
            // key: 'commodity',
            key:(i:any)=>{
              if(i.commodity === null || i.commodity === null)return "N/A"
              return i.commodity
            },
            //isSticky: true
          },
          {
            def: 'plantCode',
            name: 'Plant Code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              return i.plantCode == "0"?0:i.plantCode;
            },
            //isSticky: true
          },
          
          {
            def: 'ncR_percentage',
            name: 'NCR%',
            // key: 'ncR_percentage',
            key:(i:any)=>{
              if(i.ncR_percentage === null || i.ncR_percentage === null)return "N/A"
              return i.ncR_percentage == "0"?0:i.ncR_percentage*100;
            },
          },
          {
            def: 'pV_percentage',
            name: 'PV%',
            // key: 'pV_percentage',
            key:(i:any)=>{
              if(i.pV_percentage === null || i.pV_percentage === null)return "N/A"
              return i.pV_percentage == "0"?0:i.pV_percentage*100;
            },
          },
          {
            def: 'otD_percentage',
            name: 'OTD%',
            // key: 'otD_percentage',
            key:(i:any)=>{
              if(i.otD_percentage === null || i.otD_percentage === null)return "N/A"
              return i.otD_percentage == "0"?0:i.otD_percentage*100;
            },
          },
          {
            def: 'ltA_percentage',
            name: 'LTA%',
            // key: 'ltA_percentage',
            key:(i:any)=>{
              if(i.ltA_percentage === null || i.ltA_percentage === null)return "N/A"
              return i.ltA_percentage == "0"?0:i.ltA_percentage*100;
            },
          },
         
         
        ];
        this.correctColumns = [
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'commodity',
            name: 'Commodity',
            // key: 'commodity',
            key:(i:any)=>{
              if(i.commodity === null || i.commodity === null)return "N/A"
              return i.commodity
            },
            //isSticky: true
          },
          {
            def: 'plantCode',
            name: 'Plant Code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              return i.plantCode == "0"?0:i.plantCode;
            },
            //isSticky: true
          },
          {
            def: 'ncR_percentage',
            name: 'NCR%',
            // key: 'ncR_percentage',
            key:(i:any)=>{
              if(i.ncR_percentage === null || i.ncR_percentage === null)return "N/A"
              return i.ncR_percentage == "0"?0:i.ncR_percentage*100;
            },
          },
          {
            def: 'pV_percentage',
            name: 'PV%',
            // key: 'pV_percentage',
            key:(i:any)=>{
              if(i.pV_percentage === null || i.pV_percentage === null)return "N/A"
              return i.pV_percentage == "0"?0:i.pV_percentage*100;
            },
          },
          {
            def: 'otD_percentage',
            name: 'OTD%',
            // key: 'otD_percentage',
            key:(i:any)=>{
              if(i.otD_percentage === null || i.otD_percentage === null)return "N/A"
              return i.otD_percentage == "0"?0:i.otD_percentage*100;
            },
          },
          {
            def: 'ltA_percentage',
            name: 'LTA%',
            // key: 'ltA_percentage',
            key:(i:any)=>{
              if(i.ltA_percentage === null || i.ltA_percentage === null)return "N/A"
              return i.ltA_percentage == "0"?0:i.ltA_percentage*100;
            },
          },
        ];
        break;
      case 6:
        this.columns = [
          {
            def: 'description',
            name: 'Message',
            key: 'description',
            //isSticky: true,
            projection: true
          },
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'plantCode',
            name: 'Plant Code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              return i.plantCode
            },

            //isSticky: true
          },
          {
            def: 'plantName',
            name: 'Plant Name',
            // key: 'plantName',
            key:(i:any)=>{
              if(i.plantName === null || i.plantName === null)return "N/A"
              return i.plantName
            },

            //isSticky: true
          },
          
          {
            def: 'ncR_percentage',
            name: 'NCR%',
            // key: 'ncR_percentage',
            key:(i:any)=>{
              if(i.ncR_percentage === null || i.ncR_percentage === null)return "N/A"
              return i.ncR_percentage == "0"?0:i.ncR_percentage*100;
            },
          },
          {
            def: 'pV_percentage',
            name: 'PV%',
            // key: 'pV_percentage',
            key:(i:any)=>{
              if(i.pV_percentage === null || i.pV_percentage === null)return "N/A"
              return i.pV_percentage == "0"?0:i.pV_percentage*100;
            },
          },
          {
            def: 'otD_percentage',
            name: 'OTD%',
            // key: 'otD_percentage',
            key:(i:any)=>{
              if(i.otD_percentage === null || i.otD_percentage === null)return "N/A"
              return i.otD_percentage == "0"?0:i.otD_percentage*100;
            },
          },
          {
            def: 'ltA_percentage',
            name: 'LTA%',
            // key: 'ltA_percentage',
            key:(i:any)=>{
              if(i.ltA_percentage === null || i.ltA_percentage === null)return "N/A"
              return i.ltA_percentage == "0"?0:i.ltA_percentage*100;
            },
          },
        
        ];
        this.correctColumns = [
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'plantCode',
            name: 'Plant Code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              return i.plantCode
            },

            //isSticky: true
          },
          {
            def: 'plantName',
            name: 'Plant Name',
            // key: 'plantName',
            key:(i:any)=>{
              if(i.plantName === null || i.plantName === null)return "N/A"
              return i.plantName
            },

            //isSticky: true
          },
          {
            def: 'ncR_percentage',
            name: 'NCR%',
            // key: 'ncR_percentage',
            key:(i:any)=>{
              if(i.ncR_percentage === null || i.ncR_percentage === null)return "N/A"
              return i.ncR_percentage == "0"?0:i.ncR_percentage*100;
            },
          },
          {
            def: 'pV_percentage',
            name: 'PV%',
            // key: 'pV_percentage',
            key:(i:any)=>{
              if(i.pV_percentage === null || i.pV_percentage === null)return "N/A"
              return i.pV_percentage == "0"?0:i.pV_percentage*100;
            },
          },
          {
            def: 'otD_percentage',
            name: 'OTD%',
            // key: 'otD_percentage',
            key:(i:any)=>{
              if(i.otD_percentage === null || i.otD_percentage === null)return "N/A"
              return i.otD_percentage == "0"?0:i.otD_percentage*100;
            },
          },
          {
            def: 'ltA_percentage',
            name: 'LTA%',
            // key: 'ltA_percentage',
            key:(i:any)=>{
              if(i.ltA_percentage === null || i.ltA_percentage === null)return "N/A"
              return i.ltA_percentage == "0"?0:i.ltA_percentage*100;
            },
          },
        ];
        break;
      case 7:
        this.columns = [
          {
            def: 'description',
            name: 'Message',
            key: 'description',
            //isSticky: true,
            projection: true
          },
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'buyerCode',
            name: 'Buyer Code',
            // key: 'buyerCode',
            key:(i:any)=>{
              if(i.buyerCode === null || i.buyerCode === null)return "N/A"
              return i.buyerCode
            },

            //isSticky: true
          },
          {
            def: 'buyerName',
            name: 'Buyer Name',
            // key: 'buyerName',
            key:(i:any)=>{
              if(i.buyerName === null || i.buyerName === null)return "N/A"
              return i.buyerName
            },

            //isSticky: true
          },
          
          {
            def: 'plantCode',
            name: 'Plant code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              return i.plantCode
            },

          },
          {
            def: 'email',
            name: 'Email',
            // key: 'email',
            key:(i:any)=>{
              if(i.email === null || i.email === null)return "N/A"
              return i.email
            },
  
          },
          
          
          
          

        ];
        this.correctColumns = [
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'buyerCode',
            name: 'Buyer Code',
            // key: 'buyerCode',
            key:(i:any)=>{
              if(i.buyerCode === null || i.buyerCode === null)return "N/A"
              return i.buyerCode
            },

            //isSticky: true
          },
          {
            def: 'buyerName',
            name: 'Buyer Name',
            // key: 'buyerName',
            key:(i:any)=>{
              if(i.buyerName === null || i.buyerName === null)return "N/A"
              return i.buyerName
            },

            //isSticky: true
          },
          
          {
            def: 'plantCode',
            name: 'Plant code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              return i.plantCode
            },

          },
          {
            def: 'email',
            name: 'Email',
            // key: 'email',
            key:(i:any)=>{
              if(i.email === null || i.email === null)return "N/A"
              return i.email
            },
  
          },
          
        ];
        break;
      case 8:
        this.columns = [
          {
            def: 'description',
            name: 'Message',
            key: 'description',
            //isSticky: true,
            projection: true
          },
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'vendorCode',
            name: 'Vendor Code',
            // key: 'vendorCode',
            key:(i:any)=>{
              if(i.vendorCode === null || i.vendorCode === null)return "N/A"
              return i.vendorCode
            },

            //isSticky: true
          },
          {
            def: 'vendorName',
            name: 'Vendor Name',
            // key: 'vendorName',
            key:(i:any)=>{
              if(i.vendorName === null || i.vendorName === null)return "N/A"
              return i.vendorName
            },

            //isSticky: true
          },
         
          {
            def: 'commodity',
            name: 'Commodity',
            // key: 'commodity',
            key:(i:any)=>{
              if(i.commodity === null || i.commodity === null)return "N/A"
              return i.commodity
            },

          },
          {
            def: 'email',
            name: 'Email',
            // key: 'email',
            key:(i:any)=>{
              if(i.email === null || i.email === null)return "N/A"
              return i.email
            },

          },
          {
            def: 'country',
            name: 'Country',
            // key: 'country',
            key:(i:any)=>{
              if(i.country === null || i.country === null)return "N/A"
              return i.country
            },

          },
          {
            def: 'city',
            name: 'City',
            // key: 'city',
            key:(i:any)=>{
              if(i.city === null || i.city === null)return "N/A"
              return i.city
            },
          },
          {
            def: 'address',
            name: 'Address',
            // key: 'address',
            key:(i:any)=>{
              if(i.address === null || i.address === null)return "N/A"
              return i.address
            },
          },
          {
            def: 'zipCode',
            name: 'ZipCode',
            // key: 'zipCode',
            key:(i:any)=>{
              if(i.zipCode === null || i.zipCode === null)return "N/A"
              
              return i.zipCode
            },
          },
          {
            def: 'phoneNo',
            name: 'Phone',
            // key: 'phoneNo',
            key:(i:any)=>{
              if(i.phoneNo === null || i.phoneNo === null)return "N/A"
              
              return i.phoneNo
            },
          },
          {
            def: 'plantCode',
            name: 'Plant code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              
              return i.plantCode
            }
          }
        ];
        this.correctColumns = [
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'vendorCode',
            name: 'Vendor Code',
            // key: 'vendorCode',
            key:(i:any)=>{
              if(i.vendorCode === null || i.vendorCode === null)return "N/A"
              return i.vendorCode
            },

            //isSticky: true
          },
          {
            def: 'vendorName',
            name: 'Vendor Name',
            // key: 'vendorName',
            key:(i:any)=>{
              if(i.vendorName === null || i.vendorName === null)return "N/A"
              return i.vendorName
            },

            //isSticky: true
          },
          {
            def: 'commodity',
            name: 'Commodity',
            // key: 'commodity',
            key:(i:any)=>{
              if(i.commodity === null || i.commodity === null)return "N/A"
              return i.commodity
            },

          },
          {
            def: 'email',
            name: 'Email',
            // key: 'email',
            key:(i:any)=>{
              if(i.email === null || i.email === null)return "N/A"
              return i.email
            },

          },
          {
            def: 'country',
            name: 'Country',
            // key: 'country',
            key:(i:any)=>{
              if(i.country === null || i.country === null)return "N/A"
              return i.country
            },

          },
          {
            def: 'city',
            name: 'City',
            // key: 'city',
            key:(i:any)=>{
              if(i.city === null || i.city === null)return "N/A"
              return i.city
            },
              
          },
          {
            def: 'address',
            name: 'Address',
            // key: 'address',
            key:(i:any)=>{
              if(i.address === null || i.address === null)return "N/A"
              return i.address
            },
          },
          {
            def: 'zipCode',
            name: 'ZipCode',
            // key: 'zipCode',
            key:(i:any)=>{
              if(i.zipCode === null || i.zipCode === null)return "N/A"
              
              return i.zipCode
            },
          },
          {
            def: 'phoneNo',
            name: 'Phone',
            // key: 'phoneNo',
            key:(i:any)=>{
              if(i.phoneNo === null || i.phoneNo === null)return "N/A"
              
              return i.phoneNo
            },
          },
          {
            def: 'plantCode',
            name: 'Plant code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              
              return i.plantCode
            },
          },
        ];
        break;
      case 9:
        this.columns = [
          {
            def: 'description',
            name: 'Message',
            key: 'description',
            //isSticky: true,
            projection: true
          },
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'plantCode',
            name: 'Plant Code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              return i.plantCode
            }
            // //isSticky: true
          },
          {
            def: 'plantName',
            name: 'Plant Name',
            // key: 'plantName',
            key:(i:any)=>{
              if(i.plantName === null || i.plantName === null)return "N/A"
              return i.plantName
            }              

          },
          
          {
            def: 'repEmail',
            name: 'Email',
            // key: 'repEmail',
            key:(i:any)=>{
              if(i.repEmail === null || i.repEmail === null)return "N/A"
              return i.repEmail
            }
          },
          {
            def: 'contactName',
            name: 'Contact Name',
            // key: 'contactName',
            key:(i:any)=>{
              if(i.contactName === null || i.contactName === null)return "N/A"
              
              return i.contactName
            }
          },
        ];
        this.correctColumns = [
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            // //isSticky: true
          },
          {
            def: 'plantCode',
            name: 'Plant Code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              return i.plantCode
            }
            // //isSticky: true
          },
          {
            def: 'plantName',
            name: 'Plant Name',
            // key: 'plantName',
            key:(i:any)=>{
              if(i.plantName === null || i.plantName === null)return "N/A"
              return i.plantName
            }              

          },
          {
            def: 'repEmail',
            name: 'Email',
            // key: 'repEmail',
            key:(i:any)=>{
              if(i.repEmail === null || i.repEmail === null)return "N/A"
              return i.repEmail
            }
          },
          {
            def: 'contactName',
            name: 'Contact Name',
            // key: 'contactName',
            key:(i:any)=>{
              if(i.contactName === null || i.contactName === null)return "N/A"
              
              return i.contactName
            }
          },

        ];
        break;
      case 10:
        this.columns = [
          {
            def: 'description',
            name: 'Message',
            key: 'description',
            //isSticky: true,
            projection: true
          },
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'material',
            name: 'Material',
            // key: 'material',
            key:(i:any)=>{
              if(i.material === null || i.material === null)return "N/A"
              
              return i.material;
            }
            //isSticky: true
          },
          {
            def: 'materialDescription',
            name: 'Material Description',
            // key: 'materialDescription',
            key:(i:any)=>{
              if(i.materialDescription === null || i.materialDescription === null)return "N/A"
              
              return i.materialDescription
            }
            // isSticky: true
          },
          
          {
            def: 'plantCode',
            name: 'Plant Code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              
              return i.plantCode
            }
          },
          {
            def: 'ncR_percentage',
            name: 'NCR%',
            // key: 'ncR_percentage',
            key:(i:any)=>{
              if(i.ncR_percentage === null || i.ncR_percentage === null)return "N/A"
              return i.ncR_percentage == "0"?0:i.ncR_percentage*100;
            },
          },
          {
            def: 'pV_percentage',
            name: 'PV%',
            // key: 'pV_percentage',
            key:(i:any)=>{
              if(i.pV_percentage === null || i.pV_percentage === null)return "N/A"
              return i.pV_percentage == "0"?0:i.pV_percentage*100;
            },
          },
          {
            def: 'otD_percentage',
            name: 'OTD%',
            // key: 'otD_percentage',
            key:(i:any)=>{
              if(i.otD_percentage === null || i.otD_percentage === null)return "N/A"
              return i.otD_percentage == "0"?0:i.otD_percentage*100;
            },
          },
          {
            def: 'ltA_percentage',
            name: 'LTA%',
            // key: 'ltA_percentage',
            key:(i:any)=>{
              if(i.ltA_percentage === null || i.ltA_percentage === null)return "N/A"
              return i.ltA_percentage == "0"?0:i.ltA_percentage*100;
            },
          },

        ];
        this.correctColumns = [
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            isSticky: true
          },
          {
            def: 'material',
            name: 'Material',
            // key: 'material',
            key:(i:any)=>{
              if(i.material === null || i.material === null)return "N/A"

              return i.material
            },
            isSticky: true
          },
          {
            def: 'materialDescription',
            name: 'Material Description',
            // key: 'materialDescription',
            key:(i:any)=>{
              if(i.materialDescription === null || i.materialDescription === null)return "N/A"
              
              return i.materialDescription
            },
            isSticky: true
          },
          {
            def: 'plantCode',
            name: 'Plant Code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              
              return i.plantCode
            }
          },
          {
            def: 'ncR_percentage',
            name: 'NCR%',
            // key: 'ncR_percentage',
            key:(i:any)=>{
              if(i.ncR_percentage === null || i.ncR_percentage === null)return "N/A"
              return i.ncR_percentage == "0"?0:i.ncR_percentage*100;
            },
          },
          {
            def: 'pV_percentage',
            name: 'PV%',
            // key: 'pV_percentage',
            key:(i:any)=>{
              if(i.pV_percentage === null || i.pV_percentage === null)return "N/A"
              return i.pV_percentage == "0"?0:i.pV_percentage*100;
            },
          },
          {
            def: 'otD_percentage',
            name: 'OTD%',
            // key: 'otD_percentage',
            key:(i:any)=>{
              if(i.otD_percentage === null || i.otD_percentage === null)return "N/A"
              return i.otD_percentage == "0"?0:i.otD_percentage*100;
            },
          },
          {
            def: 'ltA_percentage',
            name: 'LTA%',
            // key: 'ltA_percentage',
            key:(i:any)=>{
              if(i.ltA_percentage === null || i.ltA_percentage === null)return "N/A"
              return i.ltA_percentage == "0"?0:i.ltA_percentage*100;
            },
          },

        ];
        break;
      case 11:
        
        this.columns = [
          {
            def: 'description',
            name: 'Message',
            key: 'description',
            //isSticky: true,
            projection: true
          },
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            isSticky: true
          },
          {
            def: 'poNumber',
            name: 'Po number',
            // key: 'material',
            key: "poNumber",
          },
          {
            def: 'line',
            name: 'Line no',
            // key: 'materialDescription',
            key:'line',
            isSticky: true
          },
          {
            def: 'vendor',
            name: 'Vendor Code',
            // key: 'materialDescription',
            key:'vendor',
          },
          {
            def: 'vendorName',
            name: 'Vendor Name',
            // key: 'materialDescription',
            key:'vendorName',
          },
          {
            def: 'poIssueDate',
            name: 'Issue Date',
            // key: 'materialDescription',
            key:'poIssueDate',
          },
          {
            def: 'plant',
            name: 'Plant Code',
            // key: 'plantCode',
            key:'plant'
          },
          {
            def : 'material',
            name : 'Material',
            key : 'material'
          },
          {
            def : 'materialDescription',
            name : 'Material Description',
            key : 'materialDescription'
          },
          {
            def : 'orderUnit',
            name : 'Order Unit',
            key : 'orderUnit'
          },
          
          {
            def : 'buyerCode',
            name : 'Buyer Code',
            key : 'buyerCode'
          },
          {
            def : 'orderQuantity',
            name : 'Order Quantity',
            key : 'orderQuantity'
          },
          {
            def : 'deliveredQty',
            name : 'Quantity Delivered',
            key : 'deliveredQty'
          },
          {
            def : 'currency',
            name : 'Currency',
            key : 'currency'
          },
          {
            def : 'unitPrice',
            name : 'Unit Price',
            key : 'unitPrice'
          },
          {
            def : 'firstPromisedDate',
            name : 'First Promised Date',
            key : 'firstPromisedDate'
          },
          {
            def : 'acknowledgementdate',
            name : 'Order Acknowledge Date',
            key : 'acknowledgementdate'
          },
          {
            def : 'leadtime',
            name : 'Lead Time',
            key : 'leadtime'
          },
          {
            def : 'dueDate',
            name : 'Due Date',
            key : 'dueDate'
          },
          
          

        ];
        this.correctColumns = [
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            isSticky: true
          },
          {
            def: 'poNumber',
            name: 'Po number',
            // key: 'material',
            key: "poNumber",
            isSticky: true
          },
          {
            def: 'line',
            name: 'Line no',
            // key: 'materialDescription',
            key:'line',
            isSticky: true
          },
          {
            def: 'vendor',
            name: 'Vendor Code',
            // key: 'materialDescription',
            key:'vendor',
          },
          {
            def: 'vendorName',
            name: 'Vendor Name',
            // key: 'materialDescription',
            key:'vendorName',
          },
          {
            def: 'poIssueDate',
            name: 'Issue Date',
            // key: 'materialDescription',
            key:'poIssueDate',
          },
          {
            def: 'plant',
            name: 'Plant Code',
            // key: 'plantCode',
            key:'plant'
          },
          {
            def : 'material',
            name : 'Material',
            key : 'material'
          },
          {
            def : 'materialDescription',
            name : 'Material Description',
            key : 'materialDescription'
          },
          {
            def : 'orderUnit',
            name : 'Order Unit',
            key : 'orderUnit'
          },
          {
            def : 'buyerCode',
            name : 'Buyer Code',
            key : 'buyerCode'
          },
          {
            def : 'orderQuantity',
            name : 'Order Quantity',
            key : 'orderQuantity'
          },
          {
            def : 'deliveredQty',
            name : 'Quantity Delivered',
            key : 'deliveredQty'
          },
          {
            def : 'currency',
            name : 'Currency',
            key : 'currency'
          },
          {
            def : 'unitPrice',
            name : 'Unit Price',
            key : 'unitPrice'
          },
          {
            def : 'firstPromisedDate',
            name : 'First Promised Date',
            key : 'firstPromisedDate'
          },
          {
            def : 'acknowledgementdate',
            name : 'Order Acknowledge Date',
            key : 'acknowledgementdate'
          },
          {
            def : 'leadtime',
            name : 'Lead Time',
            key : 'leadtime'
          },
          {
            def : 'dueDate',
            name : 'Due Date',
            key : 'dueDate'
          },
          
          

        ];
        break;
     
     
     
        default:
        this.columns = [
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            // isSticky: true
          },
          {
            def: 'plantCode',
            name: 'Plant Code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              return i.plantCode
            }
            // //isSticky: true
          },
          {
            def: 'plantName',
            name: 'Plant Name',
            // key: 'plantName',
            key:(i:any)=>{
              if(i.plantName === null || i.plantName === null)return "N/A"
              return i.plantName
            }
            // //isSticky: true
          },
          
          {
            def: 'plantEmailAddress',
            name: 'Email',
            // key: 'plantEmailAddress',
            key:(i:any)=>{
              if(i.plantEmailAddress === null || i.plantEmailAddress === null)return "N/A"
              return i.plantEmailAddress
            }
          },
          {
            def: 'plantContactName',
            name: 'Contact Name',
            // key: 'plantContactName',
            key:(i:any)=>{
              if(i.plantContactName === null || i.plantContactName === null)return "N/A"
              return i.plantContactName
            }
          },

        ];
        this.correctColumns = [
          {
            def: 'rowNo',
            name: 'Row no',
            key: 'id',
            // projection:true,
            //isSticky: true
          },
          {
            def: 'plantCode',
            name: 'Plant Code',
            // key: 'plantCode',
            key:(i:any)=>{
              if(i.plantCode === null || i.plantCode === null)return "N/A"
              return i.plantCode
            }
            //isSticky: true
          },
          {
            def: 'plantName',
            name: 'Plant Name',
            // key: 'plantName',
            key:(i:any)=>{
              if(i.plantName === null || i.plantName === null)return "N/A"
              return i.plantName
            }
            
            //isSticky: true
          },
          {
            def: 'plantEmailAddress',
            name: 'Email',
            // key: 'plantEmailAddress',
            key:(i:any)=>{
              if(i.plantEmailAddress === null || i.plantEmailAddress === null)return "N/A"
              return i.plantEmailAddress
            }
          },
          {
            def: 'plantContactName',
            name: 'Contact Name',
            // key: 'plantContactName',
            key:(i:any)=>{
              if(i.plantContactName === null || i.plantContactName === null)return "N/A"
              return i.plantContactName
            }
          },

        ];
        break;
    }
  }


  gotData(data: any) {
    if(data.filename){
      this.fileNameForServer = data.filename;
      this.totalRecords= data.totalRecords;

    }

    if(this.totalRecords > 0){
      
    }

    if((data?.data.errorList === undefined || data?.data.errorList === null) || data?.data.errorList.length<1)
    {
      this.hasErrorData = false
    }
    
    // if((data.errorList !== undefined || data.errorList !== null))
    // {
    //   this.hasErrorData = false
    // }
    
    this.showProcessButton= true;
    this.responseTableData = data?.data?.successList
    this.cdr.detectChanges();
  }


 async onProceedClick() {
  
  var index  = -1
  var arr = [3,4,5,6,10]

  index = arr.find((i:any)=> i == this.fileTypeId)
 if(index > -1 && this.hasErrorData){
  var result = await this.onConfirmationOnTargetFiles()
  return
}


    if (this.fileNameForServer === null){
      this.notificationService.push("file must be uploaded",2)
      return
    }
    this.errorMessage = null;

    let dialogRef = this.dialog.open(UserdialogoutComponent,
      {
        data: {
          height: '75%',
          width: '40%',
          message: "Are you sure you want to proceed with the File?",
          noteMessage:"(Total records = "+this.totalRecords+")", 
          heading: 'Excel Import'
        }
      });

      dialogRef.afterClosed().subscribe((res:any)=>{

        if(res === null)
        {
          return
        }

        
        let postData = {
          fileType: +this.fileTypeId,
          fileName: this.fileNameForServer,
          tenantId: this.loggedInUser?.tenantID,
          userId: this.loggedInUser?.userID
        }
        this._apiService.isCompareLoader$.next(true)
        this._apiService.post(api.excelSubmit, postData).subscribe((res: any) => {
          this._apiService.isCompareLoader$.next(false)
          this.notificationService.push(res.message, 1)
          this.errorMessage=this.fileUploadedName +" File "+ res.message
          postData = null;

          



          let innerDialog = this.dialog.open(OkdialogcomponentComponent,{
            data: {
              height: '75%',
              width: '40%',
              message: "Data File Successfully Uploaded",
              buttonText:"OK",
              heading:"File Upload"
            }
          })

          innerDialog.afterClosed().subscribe((res:any)=>{


            this.onResetClick();          
          })


        }, (err: any) => {
            this._apiService.isCompareLoader$.next(false);
          // window.location.reload();
        })

      })

    
  }



async  onConfirmationOnTargetFiles(){
    new Promise((resolve:any,reject:any)=>{

      let dialogRef = this.dialog.open(UserdialogoutComponent,
        {
          data: {
            height: '75%',
            width: '40%',
            message: "Date can not be saved if any cell is empty in target sheet?",
            heading: 'Target empty',
            isMessage : true
          }
        });


        dialogRef.afterClosed().subscribe((result:any) => {
          if (result == "") {
            // The user clicked 'OK' or some positive action in the dialog
            resolve({data:result});
          }else
          {
            reject({data:result});
          }
        })

    })
  }

  onRemoveErrorClick() {
    this.errorMessage = null;
  }


onResetClick(){
  this.selectedFileType = null
  // window.location.reload();
  this.fileTypeId = null
  this.fileName = null
  this.apiDataforTable.formData = new FormData()
  this.apiDataforTable.isFileUploaded = false;
  this.fileNameForServer = null
  this.totalRecords = null
  this.showProcessButton = false;
  this.showTable =false
  this.errorMessage = null
  this.cdr.detectChanges();
}

sortListByTarget(list: { id: number, value: string }[]): { id: number, value: string }[] {
  return list.sort((a, b) => {
    // Move items containing 'target' to the end
    if (a.value.toLowerCase().includes('target') && !b.value.toLowerCase().includes('target')) {
      return 1;
    }
    if (!a.value.toLowerCase().includes('target') && b.value.toLowerCase().includes('target')) {
      return -1;
    }
    return 0; // Maintain original order for items not containing 'target'
  });
}

}
