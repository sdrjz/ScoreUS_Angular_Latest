import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SendreportdialogComponent } from '../sendreportdialog/sendreportdialog.component';

@Component({
  selector: 'app-analysis-buyer-table',
  templateUrl: './analysis-buyer-table.component.html',
  styleUrls: ['./analysis-buyer-table.component.css']
})
export class AnalysisBuyerTableComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'View Chart';

  @Input () analysissubtitle:string;

  title = '';
  masterSelected:boolean;
  checklist:any;
  checkedList:any;


  constructor(public dialog:MatDialog){
    this.masterSelected = false;
    this.checklist = [
      {id:0,value:'',isSelected:false},
      {id:1,value:'',isSelected:true},
      {id:2,value:'',isSelected:false},
      {id:3,value:'',isSelected:false},
      {id:4,value:'',isSelected:false},
      {id:5,value:'',isSelected:false},
      {id:6,value:'',isSelected:false},
      {id:8,value:'',isSelected:false},
      {id:9,value:'',isSelected:false},
      {id:10,value:'',isSelected:false},
      {id:11,value:'',isSelected:false},
      {id:12,value:'',isSelected:false},
      {id:13,value:'',isSelected:false},
      {id:14,value:'',isSelected:false},
      {id:15,value:'',isSelected:false},      
      {id:16,value:'',isSelected:false},
      {id:17,value:'',isSelected:false},
      {id:18,value:'',isSelected:false},
      {id:19,value:'',isSelected:false},
      {id:20,value:'',isSelected:false},
    ];
    // this.getCheckedItemList();
}

openDialog() {
  this.dialog.open(SendreportdialogComponent);
} 



// The master checkbox will check/ uncheck all items
checkUncheckAll() {
  for (var i = 0; i < this.checklist.length; i++) {
    this.checklist[i].isSelected = this.masterSelected;
  }
  this.getCheckedItemList();
}

// Check All Checkbox Checked
isAllSelected() {
  this.masterSelected = this.checklist.every(function(item:any) {
      return item.isSelected == true;
    })
  this.getCheckedItemList();
}

check(id) {
    return this.checklist[id].isSelected =true;
}

// Get List of Checked Items
getCheckedItemList(){
  this.checkedList = [];
  for (var i = 0; i < this.checklist.length; i++) {
    if(this.checklist[i].isSelected)
    this.checkedList.push(this.checklist[i]);
  }
  this.checkedList = JSON.stringify(this.checkedList);
}

  ngOnInit(): void {
  }

  //View Chart Button
  
  toggle() {
    this.show = !this.show;
    //CHANGE THE NAME OF THE BUTTON.
    if(this.show)
      this.buttonName = "Hide Chart";
     else
      this.buttonName = "View Chart";
  }

}
