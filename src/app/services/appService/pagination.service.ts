import { Injectable } from "@angular/core";
import { data, param } from "jquery";
import { stringify } from "querystring";
import { of } from "rxjs";
import { dataTableparams } from "src/app/modal/dataTableParams";
import { paginationModel } from "src/app/modal/paginationModel";
import { receiveMessageOnPort } from "worker_threads";

@Injectable({
    providedIn: "root",
})
export class paginationService {
    numbers = new RegExp(/^[0-9]+$/);
    public paginatedData: paginationModel={
        totalRecord:0,
        totalPages:0,
        data:[],
        pageNumber:1,
        pageSize:1
    }
    public allRecordReplica: any[]
    public filteredRecord: any[]
    
    
    getPaginatedData(allRecords: any[],params:dataTableparams):paginationModel {
        this.allRecordReplica = allRecords && allRecords.length > 0 ? allRecords : [];
        let filteredRecords = this.getFilteredData(allRecords,params.searchText);
        let totalPages = Math.floor(filteredRecords.length/params.pageSize)
        this.paginatedData.totalPages = totalPages >0? totalPages : 1;
        if(params.pageNumber> this.paginatedData.totalPages)
        {
            params.pageNumber = 1;
            this.paginatedData.pageNumber=1;
        }
        this.paginatedData.pageSize=params.pageSize;
        this.paginatedData.totalRecord = filteredRecords && filteredRecords.length > 0 ? filteredRecords.length : 0;
        this.paginatedData.data = this.getDataPagination(filteredRecords,params);
        return this.paginatedData;
    }

    getFilteredData(allRecord: any[], params: string) {
        
        if (params != '') {
            let output = false; 
           
            this.filteredRecord = this.allRecordReplica.filter((i: any) => {
               
                for (var k in i) {
                    output = false; 
                    let data: string = i[k]

                    if (data) {
                        if (this.numbers.test(data)) {
                            if (data.toString().match(`/${params}/`)) {
                                output = true;
                                return true;
                            }

                        } else {

                            if (data.toLowerCase().includes(params.toLowerCase())) {
                                output = true;
                                return true;
                            }

                        }
                    }

                }
                return output;
            })
        }

        return this.filteredRecord && this.filteredRecord.length>0? this.filteredRecord:this.allRecordReplica;
    }

    getDataPagination(record:any[],params:dataTableparams){
        let count = record && record.length>0 ? record.length:0;
        if(count == 0)
        return record;
        let startIndex=0;
        let endIndex = 0;
        if(params.pageNumber == 0 || params.pageNumber == 1){
            params.pageNumber = 1;
            startIndex = 0;
        }else
        {
            startIndex = ((params.pageNumber - 1) *params.pageSize);
        }
        endIndex = (params.pageNumber * params.pageSize)     
            
        if(endIndex > count)
        endIndex = count-1
        
       
        let splicedRecord =  record.slice(startIndex,endIndex)
        return splicedRecord;
    }
}