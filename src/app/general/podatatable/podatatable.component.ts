import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, OnInit, Output, SimpleChange, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime } from 'rxjs/operators';
import { PaginationController } from 'src/app/controller/paginator.controller';
import { NotificationService } from 'src/app/notification.service';
import { ExportToExcelService } from 'src/app/services/appService/exportToExcelService';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { paginationService } from 'src/app/services/appService/pagination.service';
import { UiService } from 'src/app/services/appService/ui.service';

@Component({
  selector: 'app-podatatable',
  templateUrl: './podatatable.component.html',
  styleUrls: ['./podatatable.component.css']
})
export class PodatatableComponent extends PaginationController implements OnInit {
  isSortedAsc: boolean = false;
  currentSortColumn: string = '';  
    currentPage: number = 0; 
  completeRecord: any[]
  @Input() route: any =""
  @Input() filters : any
  public pageSize: any = 10;
  public pageSizeOption: any[] = [5, 10, 20]
  @Input() file: any
  @Input() isForCorrectData: boolean = false
  @Input() dataSourceForTable: any;
  @Input() apiRequestData: any
  @Input() detailType!: any
  // @Input() apiRequestType: any = 'get'
  @Input() isItemDeleted: boolean = false;
  @Input() columns: any[] | null = [];
  @Input() isPopUp: boolean = false;
  @Input() url: string = '';
  @Input() defaultSortBy: string = 'id';
  @Input() rowModifier!: any;
  @Input() dataClass: string = '';
  @Input() tableData: any;
  @Output() dataOutput = new EventEmitter();
  @Output() recordOutput = new EventEmitter();
  @Input() fileTypeId: any
  @Input() totalRecordsForTable: number = 0;
  totalRecords: any;
  collectionData!: any[];
  fetching: boolean = false;
  searching: boolean = false;
  searchText$: any = new FormControl('');
  allColumns: any[] = [];
  dataSource: any = new MatTableDataSource<any>([]);
  role: any = '';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sorter: MatSort = new MatSort();

  @ContentChild(TemplateRef) templateOutlet!: TemplateRef<any>;
  sortBy: string;
  constructor(
    private _paginationService: paginationService,
    private http: HttpClient,
    private exporter: ExportToExcelService,
    private uiService: UiService,
    private generalapiservice: GeneralApiService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private _apiService: GeneralApiService,
    private _notificationService: NotificationService,
    private translateService: TranslateService
  ) {
    super();
    // this.generalapiservice.collegedata$.subscribe(res=>{
    //     let index = this.collectionData.findIndex((row)=>row.id==res)
    //     this.collectionData.splice(index,1)
    //     this.dataSource = this.collectionData
    // })
    this.searchText$.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (res: any) => {
        this.filters.searchText = res;
        // this.searching = true;
        this.getData();
      },
    });
  }
  ngOnInit(): void {

    this._apiService.isLanguageSelector$.subscribe((res: any) => {
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    if (this.file === null)
      this.setDataInTable();
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
      this.sortBy = this.defaultSortBy;
      this.getData();
    }

    if (changes['isPopUp']) {
      this.pageSizeOption = [5]
    }

     if(changes["dataSourceForTable"]){
      if(this.dataSourceForTable === null || this.dataSourceForTable === undefined) return
      
      this.completeRecord = this.dataSourceForTable
      this.recordOutput.emit(this.dataSourceForTable)
      
      if(this.totalRecordsForTable>0)
      this.totalRecords = this.totalRecordsForTable;
      else
      this.totalRecords = this.dataSourceForTable?.length;
  
       this.dataSource = new MatTableDataSource<any>(this.dataSourceForTable);
      
      this.sortBy = this.defaultSortBy;
      if(this.route == "")
        this.dataSource.paginator = this.paginator;
    
      this.cdr.detectChanges()
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

  getData(pageSize: number = 10, forExport: boolean = false) {
    if (this.route === "") return;

    // Mapping columns in the table
    this.allColumns = this.columns.map((column) => {
      return { ...column, show: true };
    });

    this.fetching = true;
    let url_query_params = this.route;

    // Prepare query params
    if (this.filters !== null && this.filters !== undefined) {
      url_query_params += '?';
      Object.keys(this.filters).map((key) => {
        switch (key) {
          case 'PageIndex':
            url_query_params += `${key}=${this.params(this.route).pageNumber}&`;
            break;
          case 'PageSize':
            url_query_params += `${key}=${this.params(this.route).pageSize}&`;
            break;
          default:
            url_query_params += `${key}=${this.filters[key]}&`;
            break;
        }
      });
    }

    // Request data from API
    this._apiService.isCompareLoader$.next(true);
    this._apiService.get(url_query_params)
      .subscribe((res: any) => {
        // Update the source with fetched data
        this.dataSourceForTable = res.data;  // All records
        this.totalRecords = res.otD_OverView.allLines;  // Total records for pagination

        // Apply sorting if needed
        const sortedData = this.sortData(this.dataSourceForTable, this.currentSortColumn, this.isSortedAsc);

        // Apply pagination to the sorted data
        const paginatedData = this.getPaginatedData(sortedData);

        // Set the complete data for the table and update the paginator
        this.completeRecord = sortedData;
        this.recordOutput.emit(sortedData);
        this.dataSource = new MatTableDataSource<any>(paginatedData);
        this.dataSource.paginator = this.paginator;

        this._notificationService.push("Data retrieved", 1);
        this._apiService.isCompareLoader$.next(false);
      }, (e: any) => {
        this._apiService.isCompareLoader$.next(false);
      });
  }
// Function to sort the data based on a specific column and order (ASC/DESC)
sortData(data: any[], column: string, isAsc: boolean): any[] {
  return data.sort((a, b) => {
    const valueA = a[column];
    const valueB = b[column];

    // Handle undefined, null, or non-comparable values gracefully
    if (valueA == null) return isAsc ? -1 : 1;
    if (valueB == null) return isAsc ? 1 : -1;

    if (typeof valueA === 'string') {
      // If the values are strings, use localeCompare for comparison
      return isAsc ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    } else {
      // For numbers and other types, do normal comparison
      return isAsc ? valueA - valueB : valueB - valueA;
    }
  });
}

// Method to be called when the user clicks on a column header for sorting
onHeadingClick(column: string, event: any) {
  this._apiService.isCompareLoader$.next(true);
  setTimeout(() => this._apiService.isCompareLoader$.next(false), 1000);

  // Check if the same column is clicked again
  if (this.currentSortColumn === column) {
    // If the same column is clicked again, toggle the sorting direction (ASC/DESC)
    this.isSortedAsc = !this.isSortedAsc;
  } else {
    // If a different column is clicked, default to ascending order
    this.isSortedAsc = true;
  }

  // Store the current sort column to apply sorting to the correct column
  this.currentSortColumn = column;

  // Sort the data based on the column and order (ASC or DESC) using the correct direction
  const sortedData = this.sortData(this.dataSourceForTable, this.currentSortColumn, true);

  // Store the sorted data and update the table
  this.completeRecord = sortedData;
  this.recordOutput.emit(sortedData);
  this.dataSource = new MatTableDataSource<any>(sortedData);
  this.dataSource.paginator = this.paginator;

  // Optional: Reload the data after sorting
  this.getData();
}

  // Method to get paginated data based on current page and page size
  getPaginatedData(data: any[]): any[] {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return data.slice(startIndex, endIndex);
  }

  // Optional: Method to handle page changes (when user changes the page in the paginator)
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;  // Update current page
    this.pageSize = event.pageSize;  // Update page size
    this.updateTableData();  // Update the table data based on the new page
  }

  // Method to update table data after page change, sort, or reverse
  updateTableData() {
    const currentData = this.isSortedAsc
      ? this.sortData(this.dataSourceForTable, this.currentSortColumn, true)  // Sort ascending
      : this.sortData(this.dataSourceForTable, this.currentSortColumn, false);  // Sort descending

    // Apply pagination to the sorted data
    const paginatedData = this.getPaginatedData(currentData);

    // Set the MatTableDataSource with the complete dataset
    this.dataSource.data = paginatedData;
  }


  columnValue(el: any, column: any) {
    if (typeof column.key == 'function') return column.key(el);
    return el[column.key] || "--";
  }

  processExport() {
    var headers = []
    this.allColumns.forEach((i: any) => headers.push(i.name))
    this.apiRequestData.pageSize = 10000
    this._apiService.isCompareLoader$.next(true);
    this._apiService.post(this.route, this.apiRequestData).subscribe((res: any) => {


      if (res.data.list_OTD_Details) {
        this.exporter.exportArrayToExcel(res.data.list_OTD_Details,headers,'OTD detail',null,this.allColumns)
      } else if (res.data.list_NCR_Details) {
          this.exporter.exportArrayToExcel(res.data.list_NCR_Details,headers,'NCR detail',null,this.allColumns)
      } else if (res.data.list_LTA_Details) {
        this.exporter.exportArrayToExcel(res.data.list_LTA_Details,headers,'LTA detail',null,this.allColumns)
      } else if (res.data.list_PPV_Details) {
          this.exporter.exportArrayToExcel(res.data.list_PPV_Details,headers,'PPV detail',null,this.allColumns)
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
