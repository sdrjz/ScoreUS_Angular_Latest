import { Component, OnInit } from '@angular/core';
import { api } from '../api.endpoints';
import { UserService } from '../services/user/user.service';
import { GeneralApiService } from '../services/appService/generalApiService';

@Component({
  selector: 'app-datalog',
  templateUrl: './datalog.component.html',
  styleUrls: ['./datalog.component.css']
})
export class DatalogComponent implements OnInit {

  constructor(private userService:UserService,
    private _apiService :GeneralApiService
  ) { }

  ngOnInit(): void {
  }

  getProjectsUrl:string = api.excelDataLOg
  poRowcolumns = [
    {
      def: 'createdAt',
      name: 'Created At',
      // key: 'createdAt',
      key: (i:any)=>i.createdAt?.split(" ")[0],
      // projection:true
    },
    // {
    //   def: 'updatedAt',
    //   name: 'Time of update',
    //   // key: 'updatedAt',
    //   key: (i:any)=>i.updatedAt?.split(" ")[1].split(":")[0]+":"+i.updatedAt?.split(" ")[1].split(":")[1]+" "+i.updatedAt?.split(" ")[2],
    //   // key: (i:any)=>i.updatedAt,

    //   // projection:true
    // },
    {
      def: 'fileName',
      name: 'File Name',
      key: (i:any)=>{
        if(i.fileName.split('\\')[3] != ''){
          return i.fileName.split('\\')[3]
        }else if(i.fileName.split('exceldocuments')[1] != '')
      {
        return i.fileName.split('exceldocuments')[1].slice(1);
      }
      },
    },
    {
      def: 'uploadedByName',
      name: 'Uploaded By',
      key: (i:any)=>{
        if(i.uploadedByName){
          return i.uploadedByName;
        } else {
          return "-";
        }
      },
      
    }
  ];


}
