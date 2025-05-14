export interface dataTableparams{
    pageSize: number,
    pageNumber: number,
    sort: string,
    sortBy: string,
    searchType: string,
    // searchText: encodeURI(this.searchText),
    searchText: string,
}