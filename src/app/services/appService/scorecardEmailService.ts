import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
  export class ScoreCardEmailService {
    message:string = `<p>Hi [Contact Name],</p> 
     <p>Please find below the new Scorecard for the period from [Start Date] to [End Date]:</p> 
     <p>OTD%: [OTD%] (Target: [OTD Target%] with a [Buffer Days] day window)</p> 
     <p>PPV%: [PPV%] (Favorable if below [PPV Target%])</p> 
     <p>NCR%: [NCR%] (Target: [NCR Target%])</p> 
     <p>LTA%: [LTA%] (Favorable if above [LTA Target%])</p> 
     <p>Kindly review the report details and work on improving your score. The detailed Scorecard is attached. For any questions, please contact the originator for further information.</p> 
     <p>Best Regards</p> 
     <p>[user name] </p>
     <p>[user phone number]</p>`
    //  <p>[user phone number]</p> 

    vendorSubject : string = "Vendor ScoreCard for [Vendor Name] Between [Start date] to [End date]"; 
    buyerSubject : string =  "Buyer ScoreCard for [Buyer Name] Between [Start date] to [End date]"; 
    plantSubject : string =  "Plant ScoreCard for [Plant Name] Between [Start date] to [End date]"; 
    commoditySubject : string = "Commodity ScoreCard for [Commodity Name] Between [Start date] to [End date]"; 
    materialSubject : string = "Material ScoreCard for [Material Number] Between [Start date] to [End date]" ;
     

    constructor() {}
  

}  