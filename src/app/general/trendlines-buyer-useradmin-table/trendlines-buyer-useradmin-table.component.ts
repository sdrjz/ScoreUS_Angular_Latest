import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VendortotalCoregraphDialogComponent } from '../vendortotal-coregraph-dialog/vendortotal-coregraph-dialog.component';

@Component({
  selector: 'app-trendlines-buyer-useradmin-table',
  templateUrl: './trendlines-buyer-useradmin-table.component.html',
  styleUrls: ['./trendlines-buyer-useradmin-table.component.css']
})
export class TrendlinesBuyerUseradminTableComponent implements OnInit {

  public show:boolean = false;
  public show2:boolean = false;
  public show3:boolean = false;
  public show4:boolean = false;
  public show5:boolean = false;
  public show6:boolean = false;
  public show7:boolean = false;
  public show8:boolean = false;
  public buttonName:any = 'View Data';
  public buttonName2:any = 'View Data';
  public buttonName3:any = 'View Data';
  public buttonName4:any = 'View Data';
  public buttonName5:any = 'View Data';
  public buttonName6:any = 'View Data';
  public buttonName7:any = 'View Data';
  public buttonName8:any = 'View Data';

  @Input () openpotreuser:string;
  @Input () analysissubtitle:string; 


  constructor(public dialog:MatDialog) { 
    
}

openDialog(){
  this.dialog.open(VendortotalCoregraphDialogComponent);
}


  ngOnInit(): void {

  }

  //View Chart Button
  
  toggle() {
    this.show = !this.show;
    //CHANGE THE NAME OF THE BUTTON.
    if(this.show)
      this.buttonName = "View Graph";
     else
      this.buttonName = "View Data"; 
  }
  toggle2() {
    this.show2 = !this.show2;
    //CHANGE THE NAME OF THE BUTTON.
    if(this.show2)
      this.buttonName2 = "View Graph";
     else
      this.buttonName2 = "View Data";   
  }
  toggle3() {
    this.show3 = !this.show3;
    //CHANGE THE NAME OF THE BUTTON.
    if(this.show3)
      this.buttonName3 = "View Graph";
     else
      this.buttonName3 = "View Data";   
  }  
  toggle4() {
    this.show4 = !this.show4;
    //CHANGE THE NAME OF THE BUTTON.
    if(this.show4)
      this.buttonName4 = "View Graph";
     else
      this.buttonName4 = "View Data";   
  }
  toggle5() {
    this.show5 = !this.show5;
    //CHANGE THE NAME OF THE BUTTON.
    if(this.show5)
      this.buttonName5 = "View Graph";
     else
      this.buttonName5 = "View Data";   
  }
  toggle6() {
    this.show6 = !this.show6;
    //CHANGE THE NAME OF THE BUTTON.
    if(this.show6)
      this.buttonName6 = "View Graph";
     else
      this.buttonName6 = "View Data";   
  }
  toggle7() {
    this.show7 = !this.show7;
    //CHANGE THE NAME OF THE BUTTON.
    if(this.show7)
      this.buttonName7 = "View Graph";
     else
      this.buttonName7 = "View Data";   
  }
  toggle8() {
    this.show8 = !this.show8;
    //CHANGE THE NAME OF THE BUTTON.
    if(this.show8)
      this.buttonName8 = "View Graph";
     else
      this.buttonName8 = "View Data";   
  }
}
