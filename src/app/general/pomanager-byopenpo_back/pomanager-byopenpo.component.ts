import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pomanager-byopenpo',
  templateUrl: './pomanager-byopenpo.component.html',
  styleUrls: ['./pomanager-byopenpo.component.css']
})
export class PomanagerByopenpoComponent implements OnInit {

  @Input () byopenpotitle:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
