import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { VendortotalCoregraphDialogComponent } from '../general/vendortotal-coregraph-dialog/vendortotal-coregraph-dialog.component';

@Component({
  selector: 'app-openpotrendlines',
  templateUrl: './openpotrendlines.component.html',
  styleUrls: ['./openpotrendlines.component.css']
})
export class OpenpotrendlinesComponent implements OnInit {

  constructor(public dialog:MatDialog) {
    // const sliderValue = document.querySelector("span");
    //     const inputSlider = document.querySelector("input");
    //     inputSlider.oninput = (() =>{
    //         let value = inputSlider.value;
    //         sliderValue.textContent = value;
    //         sliderValue.style.left = (4) + "%";
    //         sliderValue.classList.add("show"); 
    //     });
    //     inputSlider.onblur = (() =>{
    //         sliderValue.classList.remove("show"); 
    //     });
  }

  openDialog(){
    this.dialog.open(VendortotalCoregraphDialogComponent);
  }

  ngOnInit(): void {
  }

  page = 2;

  getPageSymbol(current: number) {
    return ['1', '2', '3', '4', '5', '6'][current - 1];
  }

}
