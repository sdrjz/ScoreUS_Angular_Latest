import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
  export class poEmailService {
    message:string = `
     <p>Hi [BUYER/VENDOR CONTACT NAME],</p>
    
    <p>I hope this email finds you well.</p>

    <p>Attached is the [Report Type] Report for [MATERIAL NUMBER-DESCRIPTION/BY BUYER/BY VENDOR] as of [TODAY’S DATE].</p>

    <p>Maintaining accurate and up-to-date information in our MRP system is crucial for enhancing timely deliveries to our customers. Your assistance is needed to review the attached document and take the necessary actions based on the report type:</p>

    <ul style="padding-left: 20px!important;">
        <li style="list-style: disc;"><strong>Past Due Report:</strong> Please review any orders that have exceeded the delivery dates you promised. Coordinate with our buyer to provide us with your revised manufacturing lead times for the materials concerned.</li>
        <li style="list-style: disc;"><strong>Acknowledgement Needed PO Report:</strong> Kindly review the document and update the status, then return the updated document to us.</li>
        <li style="list-style: disc;"><strong>Future Due Report:</strong> Review the attached document and confirm if each order is on track for delivery, then promptly return the updated document to us.</li>
        <li style="list-style: disc;"><strong>Lead Time Check Report:</strong> Examine the report and review any orders that have exceeded the delivery dates you promised. Subsequently, coordinate with our buyer to provide us with your revised manufacturing lead times for the materials concerned.</li>
        <li style="list-style: disc;"><strong>All Open Order Report:</strong> Review the attached document and confirm the current status regarding the delivery schedules. Specifically, please verify if each order is on track for delivery by the 'Requirement Date.'</li>
    </ul>

    <br/>
    <p>Your prompt attention and cooperation in this matter are greatly appreciated. Should you have any questions or need further clarification, please do not hesitate to reach out to me or your manager for more details.</p>
    <br/>
    <p>Thank you for your attention to this important task.</p>

    <p>Best regards,</p>

    <p>[SENDER’S NAME]<br/>
    [SUBSCRIBER’S COMPANY NAME]</p>`
    //  <p>[user phone number]</p> 

    poSubject : string = "[Report Type] Report for [MATERIAL NUMBER-DESCRIPTION/BY BUYER/BY VENDOR] - [TODAY’S DATE]"; 
    // buyerSubject : string =  "Buyer ScoreCard for [Buyer Name] Between [Start date] to [End date]"; 
    // plantSubject : string =  "Plant ScoreCard for [Plant Name] Between [Start date] to [End date]"; 
    // commoditySubject : string = "Commodity ScoreCard for [Commodity Name] Between [Start date] to [End date]"; 
    // materialSubject : string = "Material ScoreCard for [Material Number] Between [Start date] to [End date]" ;
     

    constructor() {}
  

}  