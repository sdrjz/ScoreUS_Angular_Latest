import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, OnInit, Output, SimpleChange, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, map } from 'rxjs/operators';
import { api } from 'src/app/api.endpoints';
import { PaginationController } from 'src/app/controller/paginator.controller';
import { paginationModel } from 'src/app/modal/paginationModel';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { paginationService } from 'src/app/services/appService/pagination.service';
import { UiService } from 'src/app/services/appService/ui.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})

export class DatatableComponent extends PaginationController implements OnInit {
  averageScore : any // to maintain average score on every time change
  completeRecord: any[]
  public pageSize: any = 10;
  public pageSizeOption: any[] = [10,20, 40, 60, 80, 100]
  @Input() color:any
  @Input() data: any
  @Input() file: any
  @Input() isForCorrectData:boolean=false
  @Input() dataSourceForTable: any;
  @Input() apiRequestData: any
  @Input() apiRequestType: any = 'get'
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
  @Input() isCompact: boolean = false;

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

  @ContentChild(TemplateRef) templateOutlet!: TemplateRef<any>;
  constructor(
    private _paginationService: paginationService,
    private http: HttpClient,
    // private exporter: ExportToExcelService,
    private uiService: UiService,
    private generalapiservice: GeneralApiService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private _apiService: GeneralApiService,
    private _notificationService: NotificationService,
    private translateService:TranslateService
    ) {
    super();
    // this.generalapiservice.collegedata$.subscribe(res=>{
    //     let index = this.collectionData.findIndex((row)=>row.id==res)
    //     this.collectionData.splice(index,1)
    //     this.dataSource = this.collectionData
    // })
    // this.searchText$.valueChanges.pipe(debounceTime(500)).subscribe({
    //   next: (res: any) => {
    //     this.searchText = res;
    //     this.searching = true;
    //     this.getData();
    //   },
    // });
  }

  ngOnInit(): void {
    
    this._apiService.averageScore$.subscribe((res:any)=> {
      if(res === null) return
      this.averageScore = res[0].totalScore
      if(this.completeRecord === undefined) return
      let data = this.completeRecord.map((i:any)=>{
        // Add your conditions here to determine the color value
        if (i.totalScore < res[0].totalScore) {
          i.color = 'RED';
        } else if ((i.targetScore > i.totalScore) && (i.totalScore >= res[0].totalScore)) {
          i.color = 'YELLOW';
        } else if(i.totalScore >= res[0].totalScore) {
          i.colorValue = 'GREEN';
        }
      
        return i
        // Add the color property to the object
      });  
      this.completeRecord = data
      
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sorter;
      this.cdr.detectChanges();


    
    }) 


    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    if(this.file === null)
    this.setDataInTable();
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sorter;
    // this.dataSource.paginator = this.paginator;
    this.sorter.sortChange.subscribe({
      next: (res: any) => {
        this.sortBy = res.active;
        this.sort = res.direction;
        this.getData();
      },
    });
  }


  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    // if (this.questionTypeId != 0) {
    //   if (changes['isItemDeleted']) {
    //     this.sortBy = this.defaultSortBy;
    //     this.getData();
    //     this.dataSource.paginator = this.paginator
    //   }
    // }
    if(changes['color']){
      let data = []
      if(this.completeRecord === undefined) return
      if(!this.completeRecord[0].hasOwnProperty('color'))
      {
      this.completeRecord =  this.completeRecord.map((i:any)=>{
          // Add your conditions here to determine the color value
          if (i.totalScore < this.averageScore ) {
            i.color = 'RED';
          } else if ((i.targetScore > i.totalScore) && (i.totalScore >= this.averageScore)) {
            i.color = 'YELLOW';
          } else if(i.totalScore >= this.averageScore) {
            i.color = 'GREEN';
          }
        
          return i
          // Add the color property to the object
        });  
      }
      if(this.color == "ALL")
      {
        data = this.completeRecord
      }
      else
      {
        data = this.completeRecord.filter((i:any)=> i.color == this.color)
      }
      
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sorter;
      this.cdr.detectChanges();

    }

    if (changes['dataSourceForTable']) {
      this.getData();
    }


    if (changes['fileTypeId']) {
      if (this.file.formData === null) {
        this.dataSource = new MatTableDataSource<any>([]);
      }
    }



    if (changes["columns"]){
      if(this.columns !== null || this.columns !== undefined)
      this.allColumns = this.columns?.map((column) => {
        return { ...column, show: true };
      });

      this.cdr.detectChanges();
    }


    if (changes['file']) {
      if (this.file !== null)
        this.getData()
    }

    if (changes['apiRequestData']) {
      this.sortBy = this.defaultSortBy;
      this.getData();
    }

    if (changes['isPopUp']) {
      this.pageSizeOption = [10]
    }
  }

  paginatorUpdated(event: any) {
    this.updatePaginator(event);
    this.getUpdatedPaginatedData(event)
    // this.getData();
  }


  getUpdatedPaginatedData(data: any) {
    let params = this.params(this.url);
    let paginatedData: paginationModel = this._paginationService.getPaginatedData(this.completeRecord, params)
    this.totalRecords = paginatedData.totalRecord;
    this.dataSource = paginatedData.data;
  }

  get filteredColumns() {
    return this.allColumns.filter((c) => c.show);
  }

  get displayedColumns() {
    return this.filteredColumns.map((c) => c.def);
  }

  getData(pageSize?: number, forExport: boolean = false) {
    // this._apiService.isCompareLoader$.next(true)
    //mapping columns in table
    
    this.allColumns = this.columns.map((column) => {
          return { ...column, show: true };
        });
    this.fetching = true;
    let params = this.params(this.url);


    if (pageSize) {
      params.pageSize = pageSize;
    }
    // this.role = localStorage.getItem('selectedView');
    if (this.file?.formData && this.file.isFileUploaded) {
      this._apiService.isCompareLoader$.next(true);
      console.log('ss' + this.file.formData)
      this._apiService.post(api.excelImport + "?FileType=" + this.file.fileTypeId + "&tenantId=" + this.file.tenantId, this.file.formData)
        .subscribe((res: any) => {
          this._apiService.isCompareLoader$.next(false);
          this._notificationService.push('File uploaded successfully', 1)
          this.dataSource = new MatTableDataSource(res.data.errorList);
          this.cdr.detectChanges()
          this.dataSource.paginator = this.paginator
          this.dataSource.sorter = this.sorter
          console.log('1 '+ this.dataSource)
          this.dataOutput.emit(res)
          this.recordOutput.emit(res)
          this.fetching = false
         this._apiService.isCompareLoader$.next(false)
        }, (err: any) => {
          this.dataOutput.emit(err);
          this._apiService.isCompareLoader$.next(false)
        })
    } else if (this.apiRequestType == 'post' && this.apiRequestData) {
        if (this.dataSourceForTable !== undefined && this.dataSourceForTable?.currentStatus && this.dataSourceForTable?.currentStatus?.length > 0) {
          this.recordOutput.emit(this.dataSourceForTable.currentStatus)
          this.completeRecord = this.dataSourceForTable.currentStatus;
          this.dataSource = new MatTableDataSource<any>(this.dataSourceForTable.currentStatus);
          console.log('2 '+ this.dataSource)
          this.cdr.detectChanges();
          this.dataSource.paginator = this.paginator
          this.dataSource.sorter = this.sorter
          
          this.fetching = false
          //////////////////this._apiService.isCompareLoader$.next(false) //this was commented for some bug issue
        } else {
          if(this.url == ""){
            return
          }
          this.http
            .post(this.url, this.apiRequestData)
            .pipe(
              map((res: any) => {

                if (this.rowModifier) {
                  return this.rowModifier(res.data);
                }
                if (res.data === null || res.data === undefined) return res;


             
             return res.data
              })
            )
            .subscribe({
              next: (data: any) => {
                if (data.length < 1) return

                if (forExport) {
                  // this.exportData(data);
                } else {

                  if (data && data.length > 0) {
                    
                    
                    this.recordOutput.emit(data)
                    this.completeRecord = data;
                    //  let paginatedData:paginationModel =  this._paginationService.getPaginatedData(data,params)
                    //   this.totalRecords = paginatedData.totalRecord;
                    this.dataSource = new MatTableDataSource<any>(data);
                    this.dataSource.paginator = this.paginator
                    this.dataSource.sort = this.sorter;
                    console.log('3 '+ this.dataSource)
                    this.cdr.detectChanges();
                    //////////////////this._apiService.isCompareLoader$.next(false)
                  }

                }
                this.fetching = false;
                this.searching = false;
              }
              ,
              error: (err) => {
                //////////////////this._apiService.isCompareLoader$.next(false)
                this.fetching = false;
                this.searching = false;
              },
            });
            
        }




      }
      else if (this.apiRequestType == 'get') {
        // if (this.dataSourceForTable && !this.dataSourceForTable.hasOwnProperty("currentStatus")) {
        //   if (this.dataSourceForTable.length < 1) return
        //   this.completeRecord = this.dataSourceForTable
        //   this.recordOutput.emit(this.dataSourceForTable)
        //   this.dataSource = new MatTableDataSource<any>(this.dataSourceForTable);
        //   this.cdr.detectChanges()
        //   this.dataSource.paginator = this.paginator
        //   this.dataSource.sorter = this.sorter
        //   console.log('4 '+ this.completeRecord)
        //   this.fetching = false
        //   //////////////////this._apiService.isCompareLoader$.next(false)
        // } 
       // Function to reverse the data


// Your existing code where you want to reverse the data
if (this.dataSourceForTable && !this.dataSourceForTable.hasOwnProperty("currentStatus")) {
  if (this.dataSourceForTable.length < 1) {
    console.log('No data available in dataSourceForTable');
    return;
  }

  // console.log('Data source for table:', this.dataSourceForTable);  // Log the incoming data source

  this.completeRecord = this.dataSourceForTable;

  // Emit the record
  this.recordOutput.emit(this.dataSourceForTable);

  // Update the data source for the table
  this.dataSource = new MatTableDataSource<any>(this.dataSourceForTable);
  // console.log('Updated dataSource:', this.dataSource);  // Log the updated data source

  // Trigger change detection
  this.cdr.detectChanges();

  // Set paginator and sorter
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sorter;

  // console.log('Paginator and sorter applied to dataSource:', this.dataSource);  // Log after paginator and sorter are set

  // Indicate fetching has finished
  this.fetching = false;

  // Uncomment the next line if you're using a service to manage a loading state
  // this._apiService.isCompareLoader$.next(false);
}


        else {
          if (!this.url)
            return

          this.http
            .get(this.url, {
              // headers: {
              //   Role: this.role,
              // },
              params,
            })
            .pipe(
              map((res: any) => {


                if (this.rowModifier) {
                  return this.rowModifier(res.data);
                }

                if (res.data === null || res.data === undefined) return res;

                return res.data;
              })
            )
            .subscribe({
              next: (data: any) => {
                if (data.length < 1)
                  return

                if (forExport) {
                  // this.exportData(data);
                } else {

                  // let paginatedData:paginationModel =  this._paginationService.getPaginatedData(data,params)
                  // this.totalRecords = paginatedData.totalRecord;
                  // this.pageSize = paginatedData.pageSize
                  if (data && data.length > 0) {
                    this.completeRecord = data;
                    this.recordOutput.emit(data)
                    this.dataSource = new MatTableDataSource<any>(data);
                    this.dataSource.paginator = this.paginator
                    this.dataSource.sorter = this.sorter
                    console.log('5 '+ this.dataSource)
                    this.cdr.detectChanges();

                  }
                  //////////////////this._apiService.isCompareLoader$.next(false)
                }
                //////////////////this._apiService.isCompareLoader$.next(false)
                this.fetching = false;
                this.searching = false;
              }
              ,
              error: (err) => {
                //////////////////this._apiService.isCompareLoader$.next(false)
                this.fetching = false;
                this.searching = false;
              },
            });

        }

      }

  }
  reverseData(data: any[]): any[] {
    if (data && Array.isArray(data)) {
      return [...data].reverse();  // Reverse the data without modifying the original array
    }else{
      return data;  // Return an empty array if the data is not valid

    }
  }
  
  onHeadingClick(data: any, event: any) {
    this._apiService.isCompareLoader$.next(true);
    
    // Find index of the clicked column
    const index = this.allColumns.findIndex((i: any) => i.def === data.def);
  
    if (index !== -1) {
        // Toggle order (ASC to DESC or DESC to ASC)
        const currentOrder = this.allColumns[index].orderBy;
        const newOrder = currentOrder === "ASC" ? "DESC" : "ASC";
        
        // Update the column's order
        this.allColumns[index].orderBy = newOrder;
        
        // Set global ORDER BY clause for the query
        this.orderBy = `ORDER BY ${data.def} ${newOrder}`;
        
        // Call getData to refresh the table data based on the new order
        this.getData();
    
 
    }

    setTimeout(() => {
      this._apiService.isCompareLoader$.next(false);
    }, 2000);
    
    // if (this.dataSourceForTable && !this.dataSourceForTable.hasOwnProperty("currentStatus")) {
    //   if (this.dataSourceForTable.length < 1) {
    //     return;
    //   }
     
   
    
    //   // Call the reverseData function to reverse the data
    //   const reversedData = this.reverseData(this.dataSourceForTable);
    
      
    
    //   this.completeRecord = reversedData;
    
    //   // Emit the record
    //   this.recordOutput.emit(reversedData);
    
    //   // Update the data source for the table with reversed data
    //   this.dataSource = new MatTableDataSource<any>(reversedData);



    // }

    
    this.getData();
    
}

   onClick(data:any,event : any){
   

  }

  columnValue(el: any, column: any) {
    if (typeof column.key == 'function') return column.key(el);
    return el[column.key] || "0";
  }

  processExport() {
    //   this.getData(this.totalRecords, true);
  }


  onHeaderCheckBoxTick(data: any) {
    this.dataOutput.emit(data.checked);
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
