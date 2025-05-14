import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ContentChild, Input, EventEmitter, Output , OnInit, SimpleChange, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, map } from 'rxjs/operators';
import { PaginationController } from 'src/app/controller/paginator.controller';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';



@Component({
  selector: 'app-datatablewithpagination',
  templateUrl: './datatablewithpagination.component.html',
  styleUrls: ['./datatablewithpagination.component.css']
})
export class DatatablewithpaginationComponent extends PaginationController implements OnInit {
  isSortedAsc: boolean = false;
  currentSortColumn: string = '';  
  completeRecord: any[]
  @Input() isUpdated : boolean =false
  loggedInUser:any
  // numbers = new RegExp(/^[0-9]+$/);
  numbers = new RegExp(/^-?\d*\.?\d*$/);
  example: any;
  @Input() typeId!:any
  allRecord :any[] =[]
  public pageSizeOption: any[] = [5, 10, 20]
  @Input() dataSourceFromParent!: any;
  @Input() dataSourceForTable: any;
  @Input() columns: any[] = [];
  @Input() url: string = '';
  @Input() defaultPageSize: number = 0;
  @Input() defaultSortBy: string = 'id';
  @Input() rowModifier!: any;
  @Input() dataClass: string = '';
  @Input() dataSaveClass: string = '';
  @Input() tableData: any;
  @Input() isDeleted:any;
  @Output() recordOutput = new EventEmitter();
  
  
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
    private http: HttpClient,
    private generalApi: GeneralApiService,
    private cdr : ChangeDetectorRef,
    private _apiService:GeneralApiService,
    private translateService:TranslateService
  ) {
    super();
    // this.generalapiservice.collegedata$.subscribe(res=>{
    //     let index = this.collectionData.findIndex((row)=>row.id==res)
    //     this.collectionData.splice(index,1)
    //     this.dataSource = this.collectionData
    // })
    this.searchText$.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (res: any) => {
        this.searchText = res;
        this.searching = true;
        this.getData();
      },
    });
  }
  ngOnInit(): void {
    this._apiService.isLanguageSelector$.subscribe((res:any)=>{
      this.translateService.use(res)
      this.cdr.detectChanges()
    })
    var user = localStorage.getItem('userData')
    if(user)
    this.loggedInUser = JSON.parse(user)

    // this.loggedInUser.tenantID = 1;

    this.setDataInTable();
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sorter;
    this.dataSource.paginator = this.paginator;
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
    if(changes['isDeleted'])
    this.getData();

    if(changes['isUpdated'])
    this.getData()
  }

  paginatorUpdated(event: any) {
    this.updatePaginator(event);
    this.getData();
  }

  get filteredColumns() {
    return this.allColumns.filter((c) => c.show);
  }

  get displayedColumns() {
    return this.filteredColumns.map((c) => c.def);
  }

  getData(pageSize?: number, forExport: boolean = false) {
    this._apiService.isCompareLoader$.next(true)
    this.fetching = true;
    let params = this.params(this.url);
    
    if(this.defaultPageSize > 0){
      params.pageSize = this.defaultPageSize;
      params.pageNumber = 1;
      
    }

    if(!(this.typeId === null || this.typeId === undefined))
        params.typeId = this.typeId
    
    if (pageSize) {
        params.pageSize = pageSize;
    }
    if(params.searchText === null) params.searchText = ''
    this.role = localStorage.getItem('selectedView');
    this.http
      .get(this.url, {
      
        params,
      })
      .pipe(
        map((res: any) => {
          if(res.hasOwnProperty("message") && res.message == "No Data found")
          return res.message
          
          if(res.data[0] && res?.data[0].hasOwnProperty('totalRecords'))
          {
            this.totalRecords = res?.data[0].totalRecords
          }else if(res.data.hasOwnProperty('item2')){
            this.totalRecords = res.data.item2
          }else{
            this.totalRecords = res?.records;
          }
          if (this.rowModifier) {
            return this.rowModifier(res.data);
          }
          
          if (res.data === null || res.data === undefined) return res;
          
          if(res.data.hasOwnProperty('item1'))
          return res.data.item1;

          return res.data;
        })
      )
      .subscribe({
        next: (data: any) => {
          this._apiService.isCompareLoader$.next(false)
          this.orderBy = null
          if(data == "No Data found")
         {
          this.allRecord = [];
              this.dataSource = [];
              this.collectionData = [];
         }else  if (forExport) {
            // this.exportData(data);
          } else {
              if(data && data.length>0)
              {
                this.allRecord = data;
                this.dataSource = data;
                this.collectionData = data;
              }else{
                this.allRecord = [];
              this.dataSource = [];
              this.collectionData = [];
              }
              
          }
          this.fetching = true;
          this.searching = true;
        },
        error: (err) => {
          this._apiService.isCompareLoader$.next(false)
          this.fetching = false;
          this.searching = false;
        },
      });
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




// // Function to sort the data based on a specific column and order (ASC/DESC)
// sortData(data: any[], column: string, isAsc: boolean): any[] {
//   console.log('Sorting data for column:', column, 'Is ascending:', isAsc);

//   // Check if data is defined and is an array
//   if (!Array.isArray(data)) {
//     console.error('Provided data is not an array or is undefined:', data);
//     return [];  // Return an empty array if data is invalid
//   }

//   return data.sort((a, b) => {
//     const valueA = a[column];
//     const valueB = b[column];

//     // Handle undefined, null, or non-comparable values gracefully
//     if (valueA == null) return isAsc ? -1 : 1;
//     if (valueB == null) return isAsc ? 1 : -1;

//     // If values are strings, use localeCompare
//     if (typeof valueA === 'string' && typeof valueB === 'string') {
//       return isAsc ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
//     }

//     // If values are numbers, compare directly
//     if (typeof valueA === 'number' && typeof valueB === 'number') {
//       return isAsc ? valueA - valueB : valueB - valueA;
//     }

//     // If values are not comparable, return 0 (no change in order)
//     return 0;
//   });
// }

// // Method to be called when the user clicks on a column header for sorting
// onHeadingClick(column: string, event: any) {
//   this._apiService.isCompareLoader$.next(true);
//   setTimeout(() => this._apiService.isCompareLoader$.next(false), 1000);

//   // Check if the same column is clicked again
//   if (this.currentSortColumn === column) {
//     // If the same column is clicked again, toggle the sorting direction (ASC/DESC)
//     this.isSortedAsc = !this.isSortedAsc;
//   } else {
//     // If a different column is clicked, default to ascending order
//     this.isSortedAsc = true;
//   }

//   // Store the current sort column to apply sorting to the correct column
//   this.currentSortColumn = column;


//     // Sort the data based on the column and order (ASC or DESC) using the correct direction
//     const sortedData = this.sortData(this.dataSourceForTable, this.currentSortColumn, this.isSortedAsc);

//     // Store the sorted data and update the table
//     this.completeRecord = sortedData;
//     this.recordOutput.emit(sortedData);

//     // Update the data source for MatTableDataSource
//     this.dataSource = new MatTableDataSource<any>(sortedData);
//     this.dataSource.paginator = this.paginator;

//     // Optional: Reload the data after sorting (if needed, remove if unnecessary)
//     this.getData(); 
  
// }




  onClick(data:any,event : any){
   

  }
  

 
  columnValue(el: any, column: any) {
    if (typeof column.key == 'function') return column.key(el);
    if(el[column] == '0') return  '0'
    return el[column.key] || '0';
  }

  // processExport() {
  //   this.getData(this.totalRecords, true);
  // }

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

  exportRow(row: any) {
    let newRow: any = {};

    this.filteredColumns.forEach((col) => {
      if (col.cannotExport) return;
      newRow[col.name.toString()] = this.columnValue(row, col);
    });

    return newRow;
  }

  // setDataInTable() {
  //   // this.sortBy = this.defaultSortBy;
  //   this.getData();
  //   this.dataSource.paginator = this.paginator;
  //   this.allColumns = this.columns.map((column) => {
  //     return { 
          
  //       ...column, show: true,orderBy : 'ASC' 
      
  //     };
  //   });
  // }

  setDataInTable() {
    // this.sortBy = this.defaultSortBy;
    this.getData();
    this.dataSource.paginator = this.paginator;


    const removeActionColumn = [9, 10, 11].includes(this.loggedInUser.roleID);

    this.allColumns = this.columns
      .filter((column) => {

        return !removeActionColumn || column.name !== 'Action';
      })
      .map((column) => {
        return {
          ...column,
          show: true,
          orderBy: 'ASC',
        };
      });
}



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    // let data= this.allRecord.filter((i:any)=>)


    if(filterValue != ''){
    let output = false; 
           
    let data = this.allRecord.filter((i: any) => {
        for (var k in i) {
            output = false; 
            let objectData: string = i[k]

            if (objectData && (objectData !== null || objectData !== undefined)) {
                if (this.numbers.test(objectData)) {
                    if (objectData?.toString().match(`/${filterValue}/`)) {
                        output = true;
                        return true;
                    }

                } else {
                    if (objectData?.toLowerCase().includes(filterValue.toLowerCase())) {
                        output = true;
                        return true;
                    }

                }
            }

        }
        return output;
    })

    this.totalRecords = data.length
    this.dataSource = new MatTableDataSource(data)
    this.cdr.detectChanges();
  }else{
    this.dataSource = new MatTableDataSource(this.allRecord)
    this.totalRecords = this.allRecord.length
    this.cdr.detectChanges();
  }
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // onFilterClick() {
  //   let dialogRef = this.dialog.open(FilterQuestionComponent, {
  //     width: '70%',
  //     data: this.filters
  //   });
  //   dialogRef.afterClosed().subscribe((res: any) => {
  //     if(res?.data){
  //       this.filters = res.data;
  //       this.getFilteredData(this.pageSize, res.data);
  //     }
  //   });
  // }
}
