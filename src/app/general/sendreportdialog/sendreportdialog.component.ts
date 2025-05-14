import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from 'src/app/notification.service';
import { GeneralApiService } from 'src/app/services/appService/generalApiService';
import { createImportSpecifier } from 'typescript';

import { NgxMaskModule, IConfig } from 'ngx-mask';

@Component({
	selector: 'app-sendreportdialog',
	templateUrl: './sendreportdialog.component.html',
	styleUrls: ['./sendreportdialog.component.css']
})


export class SendreportdialogComponent implements OnInit {
	isCommodity: boolean | null = null;
	sendFrom:"";
	sendTo: "";
	roleID:"";
	messageString = ""
	form: FormGroup;
	emailControlForFormArray: string;
	public emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

	ressetingData: any = {}


	public responseData: sendReportEmail =
		{
			listReportToSend: [],
			message: "",
			subject: ""
		}

	//  sendmail = [
	// {
	//   email:'',
	//   message:'',
	// }, {
	//   email:'',
	//   message:'',
	// },




	listEmails: string[] = []
	listNumbers: string[] = []
	userNumber: string
	message
	vendorName: any[] = []
	email: string = "";
	constructor(public dialog: MatDialog,
		public dialogRef: MatDialogRef<SendreportdialogComponent>
		, private _notificationService: NotificationService,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private translateService: TranslateService,
		private _apiService: GeneralApiService,
		private cdr: ChangeDetectorRef, private fb: FormBuilder) {
		this.responseData.message = data.message;
		this.responseData.subject = data.subject;
		this.responseData.listReportToSend = data.usersData;
		this.ressetingData = { ...data };
		if (data.hasOwnProperty('isCommodity'))
			this.isCommodity = true
		if (data.hasOwnProperty('sendFrom'))
			this.sendFrom = data.sendFrom;

		if (data.hasOwnProperty('sendTo'))
			this.sendTo = data.sendTo;

		if (data.hasOwnProperty('roleID'))
			this.roleID = data.roleID;
		

	}
	editEmail: string
	editNumber: string

	formatPhoneNumber(index: number): void {
		const control = this.items.at(index).get('contact');
		let input = control.value.replace(/\D/g, '').substring(0, 10); // Remove non-digits and limit to 10 digits
		let areaCode = input.substring(0, 3);
		let middle = input.substring(3, 6);
		let last = input.substring(6, 10);

		if (input.length > 6) {
			control.setValue(`(${areaCode}) ${middle}-${last}`);
		} else if (input.length > 3) {
			control.setValue(`(${areaCode}) ${middle}`);
		} else if (input.length > 0) {
			control.setValue(`(${areaCode})`);
		}
	}

	reset() {
		this.responseData.message = this.ressetingData.message;
		this.responseData.subject = this.ressetingData.subject;
	}

	openDialog(): void {
		// Get the span element by its ID
		var IsValid = true;
		var currentEmailData = this.form.controls["items"].value
		currentEmailData.forEach(item => {
			if (item.email.length == 0) {
				IsValid = false;
				return;
			}
		});
		if (IsValid) {
			this.responseData.listReportToSend = this.form.controls["items"].value;
			// console.log(this.responseData);
			this.dialogRef.close(this.responseData);
		}else{
			this._notificationService.push("Email can not be empty", 2);
		}
		// let spanElement = document.getElementById('add-email');
		// // Check if the span element contains any text
		// if (spanElement == null) {
		//   this._notificationService.push("Email can not be empty", 2);
		//   return;
		// }

		// if (spanElement.textContent?.trim() === '') {
		//   this._notificationService.push("Email can not be empty", 2);
		// } else {
		// If the span contains some text
		// Optionally open a success dialog
		// this.dialog.open(SuccessfullyDialogComponent);
		// }
	}
	// onContentChange(event: any): void {
	//   console.log(event,event.target,event.target.value)
	//   // Update the message value with the edited content
	//   this.responseData.message = event.target.innerHTML;
	// }


	onTyping(event: any): void {
		// Do nothing here, just allow typing without resetting content
	}

	onContentChange(event: any): void {
		// Update the message value with the edited content only when focus is lost
		this.responseData.message = event.target.innerHTML;
	}




	ngOnInit(): void {
		this.form = this.fb.group({
			items: this.fb.array(this.createItems())
		});

		this._apiService.isLanguageSelector$.subscribe((res: any) => {
			this.translateService.use(res)
			this.cdr.detectChanges()
		})


	}


	createItems(): FormGroup[] {
		return this.responseData.listReportToSend.map(item =>
			this.fb.group({
				code: [item.code],
				description: [item.description],
				name: [item.name],
				contact: [item.contact],
				vendorName: [item.vendorName],
				vendorCode: [item.vendorCode],
				email: this.fb.array([...item.email]),
				cc: this.fb.array([])
			})
		);
	}

	get items(): FormArray {
		return this.form.get('items') as FormArray;
	}

	addCC(itemIndex: number): void {
		const ccArray = this.items.at(itemIndex).get('cc') as FormArray;
		let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


		this.emailControlForFormArray = $("#email" + itemIndex).val().toString();
		if (this.emailControlForFormArray == "") {
			this._notificationService.push("Email can not be empty", 2)
			return;
		}

		if (!emailPattern.test(this.emailControlForFormArray)) {
			this._notificationService.push("Invalid email format", 2);
			return;
		}


		const newEmail = this.emailControlForFormArray;

		if (newEmail && !ccArray.controls.some(ctrl => ctrl.value === newEmail)) {
			ccArray.push(this.fb.control(newEmail));
			$("#email" + itemIndex).val("")
			// emailControl.setValue(''); // Clear the email input after adding
			this.emailControlForFormArray = ""
		}
	}

	removeCC(itemIndex: number, ccIndex: number): void {
		const ccArray = this.items.at(itemIndex).get('cc') as FormArray;
		ccArray.removeAt(ccIndex);
	}

	addEmail(itemIndex: number): void {
		const ccArray = this.items.at(itemIndex).get('email') as FormArray;
		let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


		this.emailControlForFormArray = $("#emaili" + itemIndex).val().toString();
		if (this.emailControlForFormArray == "") {
			this._notificationService.push("Email can not be empty", 2)
			return;
		}

		if (!emailPattern.test(this.emailControlForFormArray)) {
			this._notificationService.push("Invalid email format", 2);
			return;
		}


		const newEmail = this.emailControlForFormArray;

		if (newEmail && !ccArray.controls.some(ctrl => ctrl.value === newEmail)) {
			ccArray.push(this.fb.control(newEmail));
			$("#emaili" + itemIndex).val("")
			// emailControl.setValue(''); // Clear the email input after adding
			this.emailControlForFormArray = ""
		}
	}

	removeEmail(itemIndex: number, ccIndex: number): void {
		const ccArray = this.items.at(itemIndex).get('email') as FormArray;
		ccArray.removeAt(ccIndex);
	}



	close() {
		this.dialogRef.close(null)
	}

}


interface sendReportEmail {
	listReportToSend: emailSendInfo[],
	subject: string,
	message: string
}

interface emailSendInfo {
	code: string,
	name: string,
	vendorName: string,
	vendorCode: string,
	description : string,
	contact: string
	email: string,
	cc: string[]
}