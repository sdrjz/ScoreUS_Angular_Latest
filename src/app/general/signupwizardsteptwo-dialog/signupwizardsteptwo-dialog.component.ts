import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-signupwizardsteptwo-dialog',
  templateUrl: './signupwizardsteptwo-dialog.component.html',
  styleUrls: ['./signupwizardsteptwo-dialog.component.css']
})

export class SignupwizardsteptwoDialogComponent implements OnInit {
  heading: string = ""
  body: string = ""
  isAgreed:boolean = false;
  constructor(public dialogRef: MatDialogRef<SignupwizardsteptwoDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
        public data) 
    { 
      this.heading = data?.heading;
      this.body = data?.body;
    }

  ngOnInit(): void {
    console.log(this.data);
  }

  onClose(data:any){
    if(!this.isAgreed)
    return

    this.dialogRef.close(data)
  }

  onAgree(event:any){
    this.isAgreed = event.checked
  }

}
