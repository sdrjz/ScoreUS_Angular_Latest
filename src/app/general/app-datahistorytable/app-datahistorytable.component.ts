import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, OnInit, Output, SimpleChange, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LIST_STYLE_POSITION } from 'html2canvas/dist/types/css/property-descriptors/list-style-position';
import { map } from 'jquery';
import { debounceTime } from 'rxjs/operators';
import { api } from 'src/app/api.endpoints';
import { PaginationController } from 'src/app/controller/paginator.controller';
import { paginationModel } from 'src/app/modal/paginationModel';
import { NotificationService } from 'src/app/notification.service';
import { ExportToExcelService } from 'src/app/services/appService/exportToExcelService';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { paginationService } from 'src/app/services/appService/pagination.service';
import { UiService } from 'src/app/services/appService/ui.service';

@Component({
  selector: 'app-app-datahistorytable',
  templateUrl: './app-datahistorytable.component.html',
  styleUrls: ['./app-datahistorytable.component.css']
})
export class AppDatahistorytableComponent extends PaginationController implements OnInit {
  completeRecord: any[]
  @Input() route: any
  public pageSize: any = 10;
  public pageSizeOption: any[] = [5, 10, 20]
  @Input() file: any
  @Input() isForCorrectData: boolean = false
  @Input() dataSourceForTable: any;
  @Input() apiRequestData: any
  @Input() detailType!: any
  @Input() requestType: string = 'POST';
  // @Input() apiRequestType: any = 'get'
  @Input() isItemDeleted: boolean = false;
  @Input() columns: any[] = [];
  @Input() isPopUp: boolean = false;
  @Input() url: string = '';
  @Input() defaultSortBy: string = 'id';
  @Input() rowModifier!: any;
  @Input() dataClass: string = '';
  @Input() tableData: any;
  @Output() dataOutput = new EventEmitter();
  @Output() recordOutput = new EventEmitter();
  @Input() fileTypeId: any
  collectionData!: any[];
  fetching: boolean = false;
  totalRecords: number = 0;
  searching: boolean = false;
  searchText$: any = new FormControl('');
  allColumns: any[] = [];
  dataSource: any = new MatTableDataSource<any>([]);
  role: any = '';
  filters: any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sorter: MatSort = new MatSort();

  public loggedInUser: any
  @ContentChild(TemplateRef) templateOutlet!: TemplateRef<any>;
  constructor(
    private _paginationService: paginationService,
    private http: HttpClient,
    private exporter: ExportToExcelService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private _apiService: GeneralApiService,
    private _notificationService: NotificationService,
    private translateService: TranslateService,
    private routes: ActivatedRoute
  ) {
    super();
    // this.generalapiservice.collegedata$.subscribe(res=>{
    //     let index = this.collectionData.findIndex((row)=>row.id==res)
    //     this.collectionData.splice(index,1)
    //     this.dataSource = this.collectionData
    // })
    this.searchText$.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (res: any) => {

        this.apiRequestData.searchText = res;
        this.searching = true;
        this.getData();
      },
    });
  }
  ngOnInit(): void {
    var user = localStorage.getItem('userData')
    if (user)
      this.loggedInUser = JSON.parse(user)

    this._apiService.isLanguageSelector$.subscribe((res: any) => {
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    if (this.file === null)
      this.setDataInTable();
    this.getData();
  }


  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sorter;
    // this.dataSource.paginator = this.paginator;
    // this.sorter.sortChange.subscribe({
    //   next: (res: any) => {
    //     this.sortBy = res.active;
    //     this.sort = res.direction;
    //     this.getData();
    //   },
    // });
  }


  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    // if (this.questionTypeId != 0) {
    //   if (changes['isItemDeleted']) {
    //     this.sortBy = this.defaultSortBy;
    //     this.getData();
    //     this.dataSource.paginator = this.paginator
    //   }
    // }


    if (changes["columns"]) {
      if (this.columns !== null || this.columns !== undefined)
        this.allColumns = this.columns?.map((column) => {
          return { ...column, show: true };
        });

      this.cdr.detectChanges();
    }



    if (changes['apiRequestData']) {
      if (Object.keys(this.apiRequestData).length < 1) return
      this.sortBy = this.defaultSortBy;
      this.getData();
    }

    if (changes['isPopUp']) {
      this.pageSizeOption = [5]
    }
  }

  paginatorUpdated(event: any) {
    this.updatePaginator(event);
    // this.getUpdatedPaginatedData(event)
    this.getData();
  }


  getUpdatedPaginatedData(data: any) {
    let params = this.params(this.url);
    // let paginatedData: paginationModel = this._paginationService.getPaginatedData(this.completeRecord, params)
    // this.totalRecords = paginatedData.totalRecord;
    // this.dataSource = paginatedData.data;
  }

  get filteredColumns() {
    return this.allColumns.filter((c) => c.show);
  }

  get displayedColumns() {
    return this.filteredColumns.map((c) => c.def);
  }

  getData(pageSize?: number, forExport: boolean = false) {

    //mapping columns in table
    this.allColumns = this.columns.map((column) => {
      return { ...column, show: true };
    });
    this.fetching = true;
    let params = this.params(this.url);

    this._apiService.isCompareLoader$.next(true)
    // this.apiRequestData.pageSize = 10;
    if (this.requestType === "POST") {
      this._apiService.post(this.route, { ...this.apiRequestData, pageSize: params.pageSize, pageNumber: params.pageNumber })
        .subscribe((res: any) => {
          if (res.data.hasOwnProperty("totalRecords")) {
            this.totalRecords = res.data.totalRecords;
            if (res.data.list_OTD_Details) {
              if (res.data.list_OTD_Details.length > 0) {
                this.dataSource = res.data.list_OTD_Details
              } else {
                this.dataSource = []
              }
            } else if (res.data.list_NCR_Details) {
              if (res.data.list_NCR_Details.length > 0) {
                this.dataSource = res.data.list_NCR_Details
              } else {
                this.dataSource = [];
              }
            } else if (res.data.list_LTA_Details) {
              if (res.data.list_LTA_Details.length > 0) {
                this.dataSource = res.data.list_LTA_Details
              } else {
                this.dataSource = [];
              }
            } else if (res.data.list_PPV_Details) {
              if (res.data.list_PPV_Details.length > 0) {
                this.dataSource = res.data.list_PPV_Details
              } else {
                this.dataSource = []
              }
            }
          }
          else {
            this.totalRecords = res.data[0]?.totalRecords
            if (this.totalRecords > 0) {
              this.dataSource = res.data;
            } else {
              this.dataSource = []
            }
          }

          this._notificationService.push("data retreived", 1);
          this._apiService.isCompareLoader$.next(false)
        }, (e: any) => this._apiService.isCompareLoader$.next(false))
    } else {
     // document.getElementById("export").style.display="none";
      this.routes.url.subscribe(
        (re: any) => {
          let currentPath = re[0].path
          let reportFor = 0
          switch (currentPath) {
            case 'vendorsreporthistory':
              reportFor = 3
              break;
            case 'plantsreporthistory':
              reportFor = 0
              break;
            case 'commoditiesreporthistory':
              reportFor = 1
              break;
            case 'buyersreporthistory':
              reportFor = 2
              break;
            case 'materialsreporthistory':
              reportFor = 4
              break;
            case 'openorders':
              reportFor = 101
              break;
            case 'pastdueorders':
              reportFor = 102
              break;
            case 'ackNeededOrders':
              reportFor = 103
              break;
            case 'futurepastdue':
              reportFor = 104
              break;
            case 'leadtimecheck':
              reportFor = 105
              break;

            default:
              break;
          }
          // this._apiService.get(this.url+"?pageSize=100000&pageNumber=1&ReportFor=3&TenantId="+this.loggedInUser.tenantID).subscribe((res:any)=>{


          this.apiRequestData.searchText = this.apiRequestData.searchText === undefined ? '': this.apiRequestData.searchText;
          // this._apiService.get(`/Report/GetReportHistory?pageSize=10000000&pageNumber=1&ReportFor=${reportFor}&TenantId=${this.loggedInUser.tenantID}`).subscribe((res: any) => {
          this._apiService.get(`/Report/GetReportHistory?pageSize=${this.pageSize}&pageNumber=${this.pageNumber}&ReportFor=${reportFor}&TenantId=${this.loggedInUser.tenantID}&searchText=${this.apiRequestData.searchText}`).subscribe((res: any) => {
            if(  res.data.length < 1 )
              {
            this._apiService.isCompareLoader$.next(false)
            this._notificationService.push("No records",1);
            return
          }

          this.dataSource = res.data
          this.totalRecords = res.data[0].totalRecords;
            // this.dataSource = new MatTableDataSource(res.data);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
            this.cdr.detectChanges();
            this._apiService.isCompareLoader$.next(false)

          }, (e: any) => {
            console.log(e)
            this._apiService.isCompareLoader$.next(false);
          })
        })
    }

  }


  onHeadingClick(data:any,event : any){
    const index = this.allColumns.findIndex((i:any) => i.def === data.def);

    // Check if the user was found
    if (index !== -1) {
      // Update the name property
     this.allColumns[index].orderBy = this.allColumns[index].orderBy == "ASC" ? "DESC" : "ASC" ;
     this.orderBy = `ORDER BY ${data.def} ${this.allColumns[index].orderBy}`
     this.getData();
  }
}

  columnValue(el: any, column: any) {
    if (typeof column.key == 'function') return column.key(el);
    return el[column.key] || "--";
  }

  processExport() {
    var headers = []
    this.allColumns.forEach((i: any) => headers.push(i.name))
    this._apiService.isCompareLoader$.next(true);
    this._apiService.post(this.route, this.apiRequestData).subscribe((res: any) => {


      if (res.data.list_OTD_Details) {
        this.exporter.exportArrayToExcel(res.data.list_OTD_Details, headers, 'OTD detail', null, this.allColumns)
      } else if (res.data.list_NCR_Details) {
        this.exporter.exportArrayToExcel(res.data.list_NCR_Details, headers, 'NCR detail', null, this.allColumns)
      } else if (res.data.list_LTA_Details) {
        this.exporter.exportArrayToExcel(res.data.list_LTA_Details, headers, 'LTA detail', null, this.allColumns)
      } else if (res.data.list_PPV_Details) {
        this.exporter.exportArrayToExcel(res.data.list_PPV_Details, headers, 'PPV detail', null, this.allColumns)
      }











      this._apiService.isCompareLoader$.next(false)
    }, (err: any) => { this._apiService.isCompareLoader$.next(false) })
    //   this.getData(this.totalRecords, true);
  }


  onHeaderCheckBoxTick(data: any) {
    this.dataOutput.emit(data.checked);
  }
  onHeaderClick(data: any) {

  }


  // exportData(dataArr: any) {
  //   let header;
  //   let arr: any = dataArr;
  //   let data = arr.map((row: any) => {
  //     return this.exportRow(row);
  //   });

  //   switch (this.url) {
  //     case 'college':
  //       header = 'COLLEGE LIST';
  //       break;
  //   }

  //   /*
  //     call export service and export data through it.
  //   */
  //   this.exporter.exportArrayToExcel(data, ['ID', 'Name'], header, header);
  // }

  // exportRow(row: any) {
  //   let newRow: any = {};

  //   this.filteredColumns.forEach((col) => {
  //     if (col.cannotExport) return;
  //     newRow[col.name.toString()] = this.columnValue(row, col);
  //   });

  //   return newRow;
  // }

  setDataInTable() {
    this.getData();
    this.sortBy = this.defaultSortBy;
    this.dataSource.paginator = this.paginator;
    this.allColumns = this.columns.map((column) => {
      return { ...column, show: true };
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
