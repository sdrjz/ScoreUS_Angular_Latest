import { Component, OnInit } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-pomanager-vendor-search',
  templateUrl: './pomanager-vendor-search.component.html',
  styleUrls: ['./pomanager-vendor-search.component.css']
})


export class PomanagerVendorSearchComponent implements OnInit {

  favoriteSeason: string;
  seasons: string[] = ['Buyer', 'Vendor', 'Part Number'];
  
  constructor(
  ) {}
  
 
  
  ngOnInit(): void {
   
  }

}

