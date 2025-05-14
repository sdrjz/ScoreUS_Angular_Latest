import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SendreportdialogComponent } from '../sendreportdialog/sendreportdialog.component';

@Component({
  selector: 'app-pomanager-vendor-history',
  templateUrl: './pomanager-vendor-history.component.html',
  styleUrls: ['./pomanager-vendor-history.component.css']
})
export class PomanagerVendorHistoryComponent implements OnInit {

  selected =[''];

  selectreports = [
    {value: 'Vendor ScoreCard', viewValue:'Vendor ScoreCard'},
    {value: 'Buyer ScoreCard', viewValue:'Buyer ScoreCard'},
    {value: 'Commodity ScoreCard', viewValue:'Commodity ScoreCard'},
    {value: 'Plant ScoreCard', viewValue:'Plant ScoreCard'},
    {value: 'Material ScoreCard', viewValue:'Material ScoreCard'},
    {value: 'Mapout ScoreCard', viewValue:'Mapout ScoreCard'},
    {value: 'Total Score Line', viewValue:'Total Score Line'},
    {value: 'OTD Detail Report', viewValue:'OTD Detail Report'},
    {value: 'NCR Detail Report', viewValue:'NCR Detail Report'},
    {value: 'PPV Detail Report', viewValue:'PPV Detail Report'},
    {value: 'LTA Detail Report', viewValue:'LTA Detail Report'},
    {value: 'Summary Report', viewValue:'Summary Report'},
    {value: 'Color Zone Pie', viewValue:'Color Zone Pie'},
    {value: 'OTD% and Score Line', viewValue:'OTD% and Score Line'},
    {value: 'NCR% and Score Line', viewValue:'NCR% and Score Line'},
    {value: 'PPV% and Score Line', viewValue:'PPV% and Score Line'},
    {value: 'LTA% and Score Line', viewValue:'LTA% and Score Line'},
    {value: 'Total Score Data', viewValue:'Total Score Data'},
  ];

  // selectedValue: string;

  // toppings = new FormControl('');
  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  @Input () subtitle:string;

  title = 'Compare';
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

}
