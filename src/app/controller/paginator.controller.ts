export class PaginationController {
    pageSize: number = 10;
    pageSizeOptions = [10, 50, 100];
    pageNumber: number = 1;
    sortBy: string = 'id';
    sort: string = 'asc';
    searchType: string = 'general';
    searchText: string = '';
    orderBy : string = ''
    tenantId:any
    loggedInUser:any
    constructor() {
      var user =localStorage.getItem('userData')
      if(user)
      this.loggedInUser = JSON.parse(user)
    }
  
    setPageSize(size: number) {
      this.pageSize = size;
    }
  
    getPageSize() {
      return this.pageSize;
    }
  
    params(url:string): any {
      if(url =='topic'){
        return{
          pageSize: this.pageSize,
          pageNumber: this.pageNumber,
          tenantId :this.loggedInUser.tenantId,
          searchText: this.searchText,
        };
      }else{
        return {
          pageSize: this.pageSize, 
          pageNumber: this.pageNumber,
          tenantId :this.loggedInUser.tenantID,
          searchText: this.searchText === null ? '' : this.searchText,
          orderBy : this.orderBy === null ? '' : this.orderBy
          // sort: this.sort,
          // sortBy: this.sortBy,
          // searchType: this.searchType,
          // searchText: encodeURI(this.searchText),
          // searchText: this.searchText,
        };
      }
    }
  
    updatePaginator(params: any) {
      this.pageSize = params.pageSize;
      let result = ++params.pageIndex;
      this.pageNumber = result;
      return {
        ...this.params(''),
      };
    }
  }