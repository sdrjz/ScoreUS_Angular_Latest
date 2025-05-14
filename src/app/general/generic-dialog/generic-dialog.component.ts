import { Component, OnInit, Input } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.css']
})


export class GenericDialogComponent implements OnInit {

  @Input()
  title: string = 'Your Title Here';
  message: string = 'Your Message Here';
  redirectURL:string;

  constructor() { }

  ngOnInit(): void {
  }

}
