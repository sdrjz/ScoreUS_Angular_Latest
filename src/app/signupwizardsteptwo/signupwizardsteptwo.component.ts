import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, MaxLengthValidator, NgControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignupwizardsteptwoDialogComponent } from '../general/signupwizardsteptwo-dialog/signupwizardsteptwo-dialog.component';
import { SignupService } from '../services/signup/signup.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ConfirmPasswordValidator } from '../Helpers/ConfirmPasswordValidator';
import { GeneralApiService } from '../services/appService/generalApiService';
import { HighlightSpanKind } from 'typescript';
import { api } from '../api.endpoints';
import { NotificationService } from '../notification.service';
import { TranslateService } from '@ngx-translate/core';

interface plan {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signupwizardsteptwo',
  templateUrl: './signupwizardsteptwo.component.html',
  styleUrls: ['./signupwizardsteptwo.component.css']
})



export class SignupwizardsteptwoComponent implements OnInit {
  listReferralCode: any[] = []
  listTenant:any[]=[];
  signupForm: FormGroup;
  loading = false;
  verifyLink: string;
  errors: any = [];
  userEmail:any=''
  public showPassword: boolean;
  public showconfirmPassword: boolean;
  public selectedState: any

  constructor(
    public dialog: MatDialog,
    public signup_service: SignupService,
    private spinner: NgxSpinnerService,
   
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _apiService: GeneralApiService,
    private notificationService: NotificationService,
    private route:Router,
    private translateService:TranslateService,
    private cdr: ChangeDetectorRef
    
    ) {
    const maskConfig: Partial<IConfig> = {
      validation: false,
    };
  }

  openDialog() {
    let ref = this.dialog.open(SignupwizardsteptwoDialogComponent, { 
      data: {
        heading: "Subscription Agreement",
        body: `<p><strong>PLEASE READ THESE TERMS OF SERVICE CAREFULLY. 
        BY CLICKING “ACCEPTED AND AGREED TO”, CUSTOMER AGREE TO THESE TERMS AND CONDITIONS.  
        IF CUSTOMER DO NOT AGREE TO THESE TERMS AND CONDITIONS, THEN CUSTOMER MUST NOT USE THE SCORES PRODUCT AND SERVICE OR ACCESS ANY CONTENT.</strong></p>
        <p>This App License and System Subscription Agreement (this “Agreement”) is a legally binding contract between Scoreus LLC (“Provider”) and an individual end user of Provider’s System, as defined below (“Customer,” “Customer’s”). 
        Provider provides Scoreus Procurement Software as a Service (the “System”). Customer agree that when Customer access or use the System, Customer will do so subject to this Agreement.
        <strong>DO NOT ACCESS OR USE THE SYSTEM IF CUSTOMER ARE UNWILLING OR UNABLE TO BE BOUND BY THIS AGREEMENT.</strong></p>
        <p><strong>EACH PARTY ACKNOWLEDGES THAT IT HAS READ THIS AGREEMENT, UNDERSTANDS IT, AND AGREES TO BE BOUND BY ITS TERMS, AND THAT THE PERSON SIGNING ON ITS BEHALF HAS BEEN AUTHORIZED TO DO SO. THE PERSON EXECUTING THIS AGREEMENT ON CUSTOMER’S BEHALF REPRESENTS THAT HE OR SHE HAS THE AUTHORITY TO BIND CUSTOMER TO THESE TERMS AND CONDITIONS.</strong></p>
        <p>This Agreement is effective as of the date Customer click “Accepted and Agreed To” (the “Effective Date”).</p>
        <p><strong><u>1. USE OF THE SYSTEM IN GENERAL.</u></strong></p>
        <ul>
          <li><u>Eligibility.</u> Customer represent and warrant that Customer are 18 years old or older, and Customer recognize and agree that Customer must be 18 years old or older to use the System.</li>
          <li><u>System Subscription.</u> During the Term (as defined in Section 1 below), Customer may access and use the System. Customer may reproduce and use Provider’s standard manual as well as instruction, supporting reference or records related to use of the System (the “Manual”) solely as necessary to support use of the System.</li>
          <li><u>System Revisions.</u> Provider may revise the features and functions of the System at any time.</li>
          <li><u>Subscription Fees.</u> Customer agree to pay Provider the fee set forth in Customer’s order on the dates required therein. Provider may refund fees under Refund Policy, section 3.6 in Terms of Service.</li>
        </ul>
        <p><strong><u>2 THE APP.</u></strong></p>
        <ul>
          <li><u>License.</u> Provider hereby grants Customer a nonexclusive license to reproduce and use one copy of the App (as defined below) on Customer’s mobile device, solely as a component of the System, provided Customer comply with the restrictions set forth below in Section 2 (Restrictions on Software Rights). The license in the preceding sentence does not include use by any third party, and Customer shall not permit any such use. Provider grants the license in this Section 2.1 under copyright and, solely to the extent necessary to exercise such rights, under any other applicable intellectual property rights. (The “App” means Provider’s downloadable Scoreus Application. The App is a component of the System and is included in references thereto, except in provisions that separately address the App.)</li>
          <li><u>Restrictions on Software Rights.</u> Copies of the App created or transferred pursuant to this Agreement are licensed, not sold, and Customer receive no title to or ownership of any copy or of the App itself. Furthermore, Customer receive no rights to the App other than those specifically granted in Section 1 above. Without limiting the generality of the foregoing, Customer shall not: (a) modify, create derivative works from, distribute, publicly display, publicly perform, or sublicense the App; (b) use the App in any way forbidden by Section 5.1 below; or (c) reverse engineer, decompile, disassemble, or otherwise attempt to derive any of the App’s source code.</li>
        </ul>
        <p><strong><u>3 CUSTOMER’S CONTENT.</u></strong></p>
        <ul>
          <li><u>Permission from Customer.</u> Customer grant Provider permission to access, process, and otherwise use Customer’s Content (as defined below) in order to provide Provider’s products and/or services to Customer, to track and analyze Customer’s use of the System, and make Customer’s Content available to other users of the System and other third parties. To the extent that Customer have intellectual property rights in Customer’s Content, Customer grant Provider a world-wide, perpetual, non-exclusive, royalty-free, sublicensable, transferable license to use and prepare derivative works from Customer’s Content for the purposes outlined in this Agreement. Customer agree that Customer’s Content is not any person’s or entity’s confidential information, including Customer’ss. As between the parties, Customer retain ownership of Customer’s Content. (“Customer’s Content” means any Content transmitted by Customer or on Customer’s behalf to Provider or its agents. “Content” means text, images, photos, audio or video files, and other forms of data or communication.)</li>
          <li><u>Rights in Customer’s Content.</u> Customer represent and warrant that Customer own Customer’s Content or have received a valid license to Customer’s Content and that submitting or transmitting Customer’s Content to or through the System will not violate the rights of any third party, including without limitation intellectual property, privacy, or publicity rights. Provider is under no obligation to review or screen Customer’s Content or other System users’ Content.</li>
          <li><u>Accuracy.</u> Provider has no responsibility or liability for the accuracy of any Content submitted to or transmitted through the System by Customer or another user, including without limitation Customer’s Content.</li>
          <li><u>Right to Retain, Delete or Suspend Access.</u> Customer must not rely on the System for backup or storage of Customer’s Content. Provider may retain Customer’s Content even if Customer are no longer using the System, but Provider is not required to give Customer copies of Customer’s Content. Provider may permanently delete or erase Customer’s Content or suspend Customer’s access to Customer’s Content through the System at any time and for any reason.</li>
        </ul>
        <p><strong><u>4 PRIVACY.</u></strong></p>
        <ul>
          <li><u>Privacy Policy & Compliance.</u> Customer acknowledge Provider’s privacy policy and Customer recognize If and agree that nothing in this Agreement restricts Provider’s right to alter such privacy policy. If Provider receives a “right to know,” deletion, “right to be forgotten,” or similar request related to Customer’s Content, Provider may respond in accordance with applicable law. Nothing in this Agreement precludes Provider from asserting rights or defenses it may have under applicable law related to such requests.</li>
          <li><u>De-Identified Data.</u> Provider may use, reproduce, sell, publicize, or otherwise exploit De-Identified Data (as defined below) in any way, in its sole discretion, including without limitation aggregated with data from other customers. (“De-Identified Data” refers to Customer’s Content with the following removed: information that identifies or could reasonably be used to identify Customer, an individual person, or a household.)</li>
          <li><u>Risk of Exposure.</u> <strong>CUSTOMER UNDERSTAND AND AGREE THAT SHARING CONTENT ONLINE INVOLVES RISKS OF UNAUTHORIZED DISCLOSURE OR EXPOSURE AND THAT, IN SUBMITTING CUSTOMER’S CONTENT TO OR TRANSMITTING IT THROUGH THE SYSTEM, CUSTOMER ASSUME THOSE RISKS.</strong> Provider offers no representation, warranty, or guarantee that Customer’s Content will not be exposed or disclosed through the System or through errors or the actions of third parties.</li>
        </ul>
        <p><strong><u>5 CUSTOMER’S RESPONSIBILITIES & RESTRICTIONS.</u></strong></p>
        <ul>
          <li><u>Acceptable Use.</u> Customer shall not: (a) provide System passwords or other log-in information to any third party; (b) share non-public System features or Content with any third party; (c) access the System in order to build a competitive product or service, to build a product using similar ideas, features, functions or graphics of the System, or to copy any ideas, features, functions or graphics of the System; or (d) engage in web scraping or data scraping on or related to the System, including without limitation collection of information through any software that simulates human activity or any bot or web crawler. If Provider suspects that Customer have violated the requirements of this Subsection 1, Provider may suspend Customer’s access to the System without advanced notice, in addition to such other remedies as Provider may have. Provider is not obligated to take any action against Customer or any other System user or other third party for violating this Agreement, but Provider is free to take any such action it sees fit.</li>
          <li><u>Unauthorized Access.</u> Customer agree to take reasonable steps to prevent unauthorized access to the System, including by protecting Customer’s passwords and other log-in information. Customer shall notify Provider immediately if Customer know of or suspect unauthorized use of the System or breach of its security.</li>
          <li><u>Compliance with Laws.</u> In using the System, Customer shall comply with all applicable laws.</li>
          <li><u>System Access.</u> Customer are responsible and liable for: (a) Customer’s use of the System, including unauthorized conduct through Customer’s account and conduct that would violate the Acceptable Use on Section 5.1 or the requirements of this Agreement; and (b) any use of the System through Customer’s account or passwords, whether authorized or not.</li>
          <li><u>Communications from Provider.</u> Customer consent to receive email and/or text messages from Provider in connection with Customer’s use of the System. Standard text messaging charges required by Customer’s mobile carrier will apply to text messages Provider send Customer.</li>
        </ul>
        <p><strong><u>6 IP & FEEDBACK.</u></strong></p>
        <ul>
          <li><u>IP Rights in the System.</u> Provider retains all right, title, and interest in and to the System, including without limitation the App and all other all software used to provide the System and all graphics, user interfaces, logos, and trademarks reproduced through the System, as well as all Content other than Customer’s Content. This Agreement does not grant Customer any intellectual property license or rights in or to the System or any of its components, except to the limited extent that this Agreement specifically sets forth Customer’s license rights to the App or the Manual. Customer recognize that the System and its components are protected by trademark, copyright and other laws.</li>
          <li><u>Feedback.</u> Provider has not agreed to and does not agree to treat as confidential any Feedback (as defined below) that Customer provide to Provider, and nothing in this Agreement or in the parties’ dealings arising out of or related to this Agreement will restrict Provider’s right to use, profit from, disclose, publish, keep secret, or otherwise exploit Feedback, without compensating or crediting Customer. Customer hereby grant Provider a perpetual, irrevocable right and license to exploit Feedback in any and every way. (“Feedback” refers to any suggestion or idea for improving or otherwise modifying any of Provider’s products or services.)</li>
          <li>ScoreUs, its logo, and other trademarks are trademarks of Scoreus and may not be used without permission</li>
        </ul>
        <p><strong><u>7 DISCLAIMERS.</u></strong></p>
        <ul>
          <li><u>Warranty Disclaimers.</u> CUSTOMER AGREE THAT CUSTOMER ACCEPT THE SYSTEM “AS IS” AND AS AVAILABLE, WITH NO REPRESENTATION OR WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NONINFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS, OR ANY IMPLIED WARRANTY ARISING FROM STATUTE, COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING: (a) PROVIDER HAS NO OBLIGATION TO INDEMNIFY OR DEFEND CUSTOMER AGAINST CLAIMS RELATED TO INFRINGEMENT OF INTELLECTUAL PROPERTY; (b) PROVIDER DOES NOT REPRESENT OR WARRANT THAT THE SYSTEM WILL PERFORM WITHOUT INTERRUPTION OR ERROR; (c) PROVIDER DOES NOT REPRESENT OR WARRANT THAT THE SYSTEM IS SECURE FROM HACKING OR OTHER UNAUTHORIZED INTRUSION OR THAT CUSTOMER’S CONTENT WILL REMAIN PRIVATE OR SECURE; AND (d) PROVIDER DISCLAIMS ANY REPRESENTATION OR WARRANTY CONCERNING PRODUCTS OR SERVICES PROVIDED BY OTHER USERS OF THE SYSTEM OR OTHER THIRD PARTIES.</li>
          <li><u>Interactions with Other Users.</u> Customer agree that Customer are solely responsible for Customer’s transactions or other interactions, either through the System or through other means of communication, with other users of the System. Customer acknowledge that Provider has no liability for any such interactions. Provider may monitor or become involved in disputes between Customer and other users of the System but has no obligation to do so.</li>
          <li><u>Third Party Sites and Content.</u> Customer understand that the System may contain or send Customer links to third party websites, applications or features not owned or controlled by Provider (“Third Party Sites”), and that links to Third Party Sites may also appear in Content available to Customer through the System. The System may also enable interaction between the System and a Third Party Site through applications that connect the System, or Customer’s profile on the System, with a Third Party Site. Through Third Party Sites Customer may be able to access Content from third parties that Provider does not control and/or share Customer’s Content with others. CUSTOMER ACCESS THIRD PARTY SITES ENTIRELY AT CUSTOMER’S OWN RISK, AND PROVIDER WILL HAVE NO LIABILITY FOR CUSTOMER’S USE OF OR ACCESS TO THIRD PARTY SITES AND/OR THIRD PARTY CONTENT.)</li>
        </ul>
        <p><strong><u>8 INDEMNIFICATION.</u></strong>Customer agree to defend, indemnify, and hold harmless Provider and the Provider Associates (as defined below) against any “Indemnified Claim,” meaning any third party claim, suit, or proceeding arising out of, related to, or alleging: (a) infringement or violation of third party intellectual property, privacy or publicity rights by Content submitted to or transmitted through the System from Customer’s account, including without limitation by Customer’s Content; and (b) claims that use of the System through Customer’s account harasses, defames, or defrauds a third party, infringes or misappropriates copyright, trade secret, or other intellectual property rights, or violates the CAN-Spam Act of 2003 or any other law or restriction on electronic advertising. Customer’s obligations set forth in this Article 8 include retention and payment of attorneys and payment of court costs, as well as settlement at Customer’s expense and payment of judgments. Provider will have the right, not to be exercised unreasonably, to reject any settlement or compromise that requires that it admit wrongdoing or liability or subjects it to any ongoing affirmative obligations. (The “Provider Associates” are Provider’s officers, directors, shareholders, parents, subsidiaries, agents, successors, and assigns.)</p>
        <p><strong><u>9 LIMITATION OF LIABILITY.</u></strong></p>
        <ul>
          <li><u>Dollar Cap.</u> PROVIDER’S CUMULATIVE LIABILTY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THIS AGREEMENT WILL NOT EXCEED OF THE FEES PARTICIPANT HAS PAID IN THE YEAR IMMEDIATELY PRECEDING THE FIRST EVENT GIVING RISE TO ANY CLAIM FOR DAMAGES;</li>
          <li><u>Excluded Damages.</u> IN NO EVENT WILL PROVIDER BE LIABLE FOR LOST PROFITS OR LOSS OF BUSINESS OR FOR ANY CONSEQUENTIAL, INDIRECT, SPECIAL, INCIDENTAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO THIS AGREEMENT.</li>
          <li><u>Clarifications & Disclaimers.</u> THE LIABILITIES LIMITED BY THIS ARTICLE 9 APPLY TO THE BENEFIT OF PROVIDER’S OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND THIRD PARTY CONTRACTORS, AS WELL AS: (a) TO LIABILITY FOR NEGLIGENCE; (b) REGARDLESS OF THE FORM OF ACTION, WHETHER IN CONTRACT, TORT, STRICT PRODUCT LIABILITY, OR OTHERWISE; (c) EVEN IF PROVIDER IS ADVISED IN ADVANCE OF THE POSSIBILITY OF THE DAMAGES IN QUESTION AND EVEN IF SUCH DAMAGES WERE FORESEEABLE; AND (d) EVEN IF CUSTOMER’S REMEDIES FAIL OF THEIR ESSENTIAL PURPOSE. Customer acknowledge and agree that Provider has based its pricing on and entered into this Agreement in reliance upon the limitations of liability and disclaimers of warranties and damages in this Article 9 and elsewhere in this Agreement and that such terms form an essential basis of the bargain between the parties. If applicable law limits the application of the provisions of this Article 9, Provider’s liability will be limited to the maximum extent permissible.</li>
        </ul>
        <p><strong><u>10 TERM & TERMINATION.</u></strong></p>
        <ul>
          <li><u>Term.</u> The term of this Agreement (the “Term”) will commence on the Effective Date and continue until terminated by either Customer or Provider.</li>
          <li><u>Termination.</u> Either party may terminate this Agreement for any reason at any time. Customer may terminate this Agreement by closing Customer’s account. Provider may terminate this Agreement by notifying Customer in writing, including without limitation via text to Customer’s mobile device.</li>
          <li><u>Effects of Termination..</u> Upon termination of this Agreement, Customer shall cease all use of the System. The following provisions will survive termination of this Agreement: Articles 6 (IP & Feedback), 7 (Disclaimers), 8 (Indemnification), 9 (Limitation of Liability), and 11 (Miscellaneous); and any other provision of this Agreement that must survive to fulfill its essential purpose.</li>
        </ul>
         <p><strong><u>11 MISCELLANEOUS.</u></strong></p>
         <ul>
          <li><u>Independent Contractors.</u> The parties are independent contractors. Neither party is the agent of the other, and neither may make commitments on the other’s behalf.</li>
          <li><u>Notices.</u> Provider may send notices to Customer by email or by text to Customer’s mobile device at the email address or mobile number Customer provided, and such notices will be deemed received 24 hours after they are sent. Customer may send notices pursuant to this Agreement to Provider by email to notice@scoreus.com, and such notices will be deemed received 72 hours after they are sent.</li>
          <li><u>Assignment & Successors.</u> Customer may not assign this Agreement or any of Customer’s rights or obligations under this Agreement without Provider’s express written consent. Except to the extent forbidden in this Section 3, this Agreement will be binding upon and inure to the benefit of the parties’ respective successors and assigns.</li>
          <li><u>Severability.</u> To the extent permitted by applicable law, the parties hereby waive any provision of law that would render any clause of this Agreement invalid or otherwise unenforceable in any respect. In the event that a provision of this Agreement is held to be invalid or otherwise unenforceable, such provision will be interpreted to fulfill its intended purpose to the maximum extent permitted by applicable law, and the remaining provisions of this Agreement will continue in full force and effect.</li>
          <li><u>No Waiver.</u> Neither party will be deemed to have waived any of its rights under this Agreement by lapse of time or by any statement or representation other than by an authorized representative in an explicit written waiver. No waiver of a breach of this Agreement will constitute a waiver of any other breach of this Agreement.</li>
          <li><u>Choice of Law & Jurisdiction:</u> This Agreement will be governed solely by the internal laws of the State of Texas, including without limitation applicable federal law, without reference to: (a) any conflicts of law principle that would apply the substantive laws of another jurisdiction to the parties’ rights or duties; (b) the 1980 United Nations Convention on Contracts for the International Sale of Goods; or (c) other international laws. The parties consent to the personal and exclusive jurisdiction of the federal and state courts of Sugar Land, Texas. This Subsection 6 and Subsection 11.10 below (Dispute Resolution) govern all claims arising out of or related to this Agreement, including without limitation tort claims.</li>
          <li><u>Force Majeure.</u> No delay, failure, or default, other than a failure to pay fees when due, will constitute a breach of this Agreement to the extent caused by epidemics, acts of war, terrorism, hurricanes, earthquakes, other acts of God or of nature, strikes or other labor disputes, riots or other acts of civil disorder, embargoes, government orders responding to any of the foregoing, or other causes beyond the performing party’s reasonable control.</li>
          <li><u>Entire Agreement.</u> This Agreement sets forth the entire agreement of the parties and supersedes all prior or contemporaneous writings, negotiations, and discussions with respect to its subject matter. Neither party has relied upon any such prior or contemporaneous communications.</li>
          <li><u>Amendment.</u> Provider may amend this Agreement from time to time by posting an amended version at its website and sending Customer written notice thereof. Such amendment will be deemed accepted and become effective 30 days after such notice (the “Proposed Amendment Date”) unless Customer first give Provider written notice of rejection of the amendment. In the event of such rejection, this Agreement will continue under its original provisions for 30 days following the Proposed Amendment Date (unless either Customer or Provider first terminates this Agreement pursuant to Article 10, Term & Termination). Customer’s continued use of the System following the effective date of an amendment will confirm Customer’s consent to the Amendment. This Agreement may not be amended in any other way except through a written agreement by authorized representatives of each party. Notwithstanding the foregoing provisions of this Section 9, Provider may revise the AUP at any time by posting a new version at Provider’s website, and such new version will become effective on the date it is posted; provided if such amendment materially reduces Customer’s rights or protections, notice and consent will be subject to the requirements above in this Section 11.9.</li>
        </ul>
        <p><u>Dispute Resolution.</u>Any legal disputes or claims arising out of or related to this Agreement (including without limitation claims related to the use of the System, the interpretation, enforceability, revocability, or validity of the Agreement, or the arbitrability of any dispute), that cannot be resolved informally shall be submitted to binding arbitration in Sugar Land, Texas. The arbitration will be conducted by the the American Arbitration Association under its rules, or as otherwise mutually agreed by Customer and Provider. Any judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction thereof. Claims must be brought within the statute of limitations or other time required by applicable law. Customer agree that Customer shall bring any claim, action or proceeding arising out of or related to the Agreement in Customer’s individual capacity, and not as a plaintiff or class member in any purported class, collective, or representative proceeding. The arbitrator may not consolidate the claims of more than one person and may not otherwise preside over any form of a representative, collective, or class proceeding. CUSTOMER ACKNOWLEDGE AND AGREE THAT CUSTOMER AND PROVIDER ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS ACTION OR REPRESENTATIVE PROCEEDING IN ANY FORUM, INCLUDING WITHOUT LIMITATION CLASS-WIDE ARBITRATION AND PRIVATE ATTORNEY-GENERAL ACTIONS.</p>
        `
      },
      disableClose: true 
    });
    
    ref.afterClosed().subscribe((res:any)=>{
      //Privacy policy modal
      let ref1 = this.dialog.open(SignupwizardsteptwoDialogComponent, { 
        data: {
          heading: "Privacy Policy",
          body: `<p>Protecting your private information is our priority. This Statement of Privacy applies to all Scoreus’ Customers and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Scoreus. The Scoreus System is an online Software as a Service site. By using the Scoreus System, you consent to the data practices described in this statement.</p>
                <p><strong>Collection of your Personal Information</strong></p>
                <p>In order to better provide you with products and services offered, Scoreus may collect personally identifiable information, such as your:</p>
                <ul>
                  <li>First and Last Name</li>
                  <li>Mailing Address</li>
                  <li>E-mail Address</li>
                  <li>Phone Number</li>
                  <li>Job Title</li>
                  <li>Company Name</li>
                </ul>
                <p>If you purchase Scoreus’ products and services, we collect billing and credit card information. This information is used to complete the purchase transaction.</p>
                <p>We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.</p>
                <p><strong>Use of your Personal Information</strong></p>
                <p>Scoreus collects and uses your personal information to operate and deliver the products and services you have requested.</p>
                <p>Scoreus may also use your  personally identifiable information to inform you of other products or services available from Scoreus and its affiliates.</p>
                <p><strong>Sharing Information with Third Parties</strong></p>
                <p>Scoreus does not sell, rent or lease its customer lists to third parties.</p>
                <p>Scoreus may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Scoreus or the site; (b) protect and defend the rights or property of Scoreus; and/or (c) act under exigent circumstances to protect the personal safety of users of Scoreus, or the public.</p>
                <p><strong>Tracking User Behavior</strong></p>
                <p>Scoreus may keep track of the websites and pages our users visit within Scoreus, in order to determine what Scoreus products and services are the most popular. This data is used to deliver customized content and advertising within Scoreus to customers whose behavior indicates that they are interested in a particular subject area.</p>
                <p><strong>Automatically Collected Information</strong></p>
                <p>Information about your computer hardware and software may be automatically collected by Scoreus. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Scoreus website.</p>
                <p><strong>Right to Deletion</strong></p>
                <p>Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:</p>
                <ul>
                  <li>Delete your personal information from our records; and</li>
                  <li>Direct any service providers to delete your personal information from their records.</li>
                  <li>Delete your personal information from our records; and</li>
                </ul>
                <p>Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:</p>
                <ul>
                  <li>Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;</li>
                  <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;</li>
                  <li>Debug to identify and repair errors that impair existing intended functionality;</li>
                  <li>Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;</li>
                  <li>Comply with the Electronic Communications Privacy Act;</li>
                  <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;</li>
                  <li>Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;</li>
                  <li>Comply with an existing legal obligation; or</li>
                  <li>Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information.</li>
                </ul>
                  <br>
                <p style="margin-bottom: 0px;padding-bottom: 5px;"><strong>Children Under Thirteen</strong></p>
                <p>Scoreus does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.</p>
                
                <p style="margin-bottom: 0px;padding-bottom: 5px;"><strong>E-mail Communications</strong></p>
                <p>From time to time, Scoreus may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from Scoreus or click on a link therein.</p>
                <p>If you would like to stop receiving marketing or promotional communications via email from Scoreus, you may opt out of such communications by replying STOP.</p>
                
                <p style="margin-bottom: 0px;padding-bottom: 5px;"><strong>External Data Storage Sites</strong></p>
                <p>We may store your data on servers provided by third party hosting vendors with whom we have contracted.</p>

                <p style="margin-bottom: 0px;padding-bottom: 5px;"><strong>Changes to this Statement</strong></p>
                <p>Scoreus reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address set up in your account, by placing a prominent notice on our website, and/or by updating any privacy information. Your continued use of the website and/or Services available after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.</p>

                <p style="margin-bottom: 0px;padding-bottom: 5px;"><strong>Contact Information</strong></p>
                <p>Scoreus welcomes your questions or comments regarding this Statement of Privacy. If you believe that Scoreus has not adhered to this Statement, please contact Scoreus at:</p>

                <p style="margin-bottom: 0px;padding-bottom: 5px;"><strong>Scoreus LLC.</strong></p>
                <p>PO box Houston, Texas 77479</p>

                <p><strong>Email Address:</strong></p>
                <p>contact@scoreus.com</p>
                <p>Effective as of August 12, 2022</p>
                `
        },
        disableClose: true 
      });
      
      ref1.afterClosed().subscribe((res:any)=>{

        let ref2 = this.dialog.open(SignupwizardsteptwoDialogComponent, { 
          data: {
            heading: "Terms of Service",
            body: `<p><strong>PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY CLICKING “ACCEPTED AND AGREED TO”, CUSTOMER AGREE TO THESE TERMS AND CONDITIONS. IF YOU DO NOT AGREE TO THESE TERMS AND CONDITIONS, THEN YOU MUST NOT USE THE SCORES PRODUCT AND SERVICE OR ACCESS ANY CONTENT.</strong></p>
              <p>These Terms of Service constitute an agreement (this “Agreement”) by and between Scoreus LLC (“Provider”) and an individual end user of Provider’s System executing this Agreement (“Customer”). This Agreement is effective as of the date Customer clicks “Accepted and Agreed To” (the “Effective Date”). Customer’s use of and Provider’s provision of System are governed by this Agreement, as are Customer’s authorizations to grant its own customer’s use of the System. <strong>DO NOT ACCESS OR USE THE SYSTEM IF CUSTOMER ARE UNWILLING OR UNABLE TO BE BOUND BY THIS AGREEMENT. </strong></p>
              <p><strong>EACH PARTY ACKNOWLEDGES THAT IT HAS READ THIS AGREEMENT, UNDERSTANDS IT, AND AGREES TO BE BOUND BY ITS TERMS, AND THAT THE PERSON SIGNING ON ITS BEHALF HAS BEEN AUTHORIZED TO DO SO. THE PERSON EXECUTING THIS AGREEMENT ON CUSTOMER’S BEHALF REPRESENTS THAT HE OR SHE HAS THE AUTHORITY TO BIND CUSTOMER TO THESE TERMS AND CONDITIONS.</strong></p>
              <p><strong>1. <ul>DEFINITIONS.</ul></strong> The following capitalized terms will have the following meanings whenever used in this</p>
              <ul>
                <li><u>"System"</u> means Provider’s Scoreus Procurement Software as a Service products.</li>
                <li><u>"AUP"</u> means Provider’s acceptable Terms and Conditions under this TERMS OF SERVICE Agreement.</li>
                <li><u>"Client ToS"</u> means such terms of service as Provider may require for users of the System who are not Provider’s customers or their employees.</li>
                <li><u>"Customer’s Clients"</u> means any of Customer’s clients or vendors or other third parties Customer gives access to the System, including without limitation such companies’ agents and employees.</li>
                <li><u>"Customer Data"</u> means all information processed or stored through the System by Customer or on Customer’s behalf. Customer data does not include payment records, credit cards or other information Customer uses to pay Provider, or other information and records related to Customer’s account, including without limitation identifying information related to Customer staff involved in payment or other management of such account.</li>
                <li><u>"Documentation"</u> means Provider’s standard manual related to use of the System, as well as instruction, supporting reference or records.</li>
                <li><u>"Order"</u> means an order signed by Customer for access to the System which sets forth the System purchased by Customer, the related fees, and other terms and conditions applicable to Customer’s use of the System.</li>
                <li><u>"Privacy/Security Law"</u> means privacy and security laws governing Provider’s handling of Customer Data (if any).</li>
                <li><u>"SLA"</u> means Provider’s standard service level agreement. During the term of this Agreement, Provider shall maintain the System uptime guarantee of 99.9% of each calendar month.</li>
                <li><u>"Term"</u> is defined in Section 1 below.</li>
                <li><u>"User"</u> means any company or individual who uses the System on Customer’s behalf or through Customer’s account or passwords, whether authorized or not, including without limitation Customer’s Clients.</li>
              </ul>
              <p><strong><u>THE SYSTEM.</u></strong></p>
              <ul>
                <li><u>Use of the System.</u> During the Term, Customer may access and use the System pursuant to the terms of any outstanding Order, including such features and functions as the Order requires.</li>
                <li><u>Service Levels.</u> Subject to the terms and conditions of this Agreement and our other policies and procedures, we shall use commercially reasonable efforts to attempt to provide the SLA of this Site and the Services on a twenty-four (24) hours a day, seven (7) days a week basis. You acknowledge and agree that from time to time this Site may be inaccessible or inoperable for any reason including, but not limited to, equipment malfunctions; periodic maintenance, repairs or replacements that we undertake from time to time; or causes beyond our reasonable control or that are not reasonably foreseeable including, but not limited to, interruption or failure of telecommunication or digital transmission links, hostile network attacks, network congestion or other failures. You acknowledge and agree that we have no control over the availability of this Site or the Service on a continuous or uninterrupted basis, and that we assume no liability to you or any other party with regard thereto.</li>
                <li><u>System Revisions.</u> Provider may revise the SLA or the features and functions of the System at any time, provided no such revision materially reduces features or functionality provided pursuant to an outstanding Order.</li>
                <li><u>Customer’s Clients.</u> Subject to the provisions below of this Section 4, Customer may authorize Customer’s Clients to access and use the System in such numbers and according to such restrictions as are set forth in the applicable Order, Customer shall: (a) provide complete name and contact information for each proposed Customer’s Client upon or before providing such access, and update such information as soon as it become aware of a change; and (b) require that each Customer’s Client execute the then-standard Client ToS. Customer shall make no representations or warranties regarding the System or any other matter, to Customer’s Clients or Users or any other third party, from or on behalf of Provider, and Customer shall not create or purport to create any obligations or liabilities for Provider. Provider may reject any proposed Customer’s Client for any reason that does not violate applicable law, in its sole discretion. Customer shall be jointly and severally liable to Provider for Customer’s Client’s compliance with the Client ToS. Provider shall have no obligation to provide support or other services, SLA remedies, or other remedies to Customer’s Clients.</li>
              </ul>
              <p><strong><u>SYSTEM FEES.</u></strong></p>
              <ul>
                <li><u>Fees.</u> Customer shall pay Provider the fee set forth in each Order, as set forth in https://www.scoreus.com/pricing.html, for each Term. All billing cycles will start on the day of Customer’s Order and Customer will continue to be billed on this same day each month or year on an ongoing basis.</li>
                <li><u>Automatic Renewal Terms.</u> You are subscribed to our automatically renewing subscription when you purchase the System from our Scoreus website. Which can be cancelled at any time via the System renewal page in your account. Automatic renewals are billed to the payment method selected for this order when you subscribe to the System, until cancelled. Your payment details will be saved as your default method of payment for future purchases and renewals.   Automatic Renewal Terms will automatically renew at the end of initial Order term or each such Automatic Renewal Term (as applicable) unless the Agreement is terminated as described in this Section 3.4.  Your payment is being processed in: United States.</li>
                <li><u>Order Modification.</u> (i)Customer can manage Customer’s existing subscriptions in Customer’s account. Once Customer have modified Customer’s subscriptions, (i)If Customer choose to upgrade Customer’s services, such as switching from a Monthly license to a Yearly license or a ScoreCard product License to a Complete product license, Customer’s modified services will take effect immediately and the Provider will automatically update Customer’s billing and email Customer the confirmation of the changes (the email will go to Customer’s primary email address set up in Customer’s account). Fees for additional services, such as additional user subscriptions, will be billed at the time of the order. Customer will initially be charged a prorated amount for the additional services based on the number of days left until Customer’s regular billing date. Subsequently, Customer will be billed for all new subscription charges on the normal billing date for Customer’s account. (ii)If Customer choose to downgrade Customer’s services, such as switching from a Yearly license to a Monthly license or a ScoreCard product License to a PO Manager product license, Customer’s modified services will take effect immediately and then email Customer the confirmation of the changes BUT Provider will not refund fees for the different services.  Subsequently, Customer will be billed for new subscription fees on the normal billing date for Customer’s account. (iii) Please refer to section 3.4 if Customer choose to cancel Customer’s subscriptions.</li>
                <li><u>Order resumption.</u>  Customer can choose to resume Customer’s canceled subscription after the end of the billing cycle in which Customer canceled Customer’s service. Customer’s new billing cycle will start on the day of Customer’s order, and Customer will continue to be billed on this same day each month or year on an ongoing basis</li>
                <li><u>Price Changes.</u>  Provider reserves the right to change its prices and fees at any time, and such changes shall be posted online at www.scoreus.com and effective immediately without need for further notice to Customer. If Customer have purchased or obtained Services for a period of months or years, changes in prices and fees shall be effective when the Services in question come up for renewal.</li>
                <li><u>Refund Policy.</u>  Products purchased from Provider may be refunded only if cancelled within the refund period specified below in this policy. Please see below for refund terms applicable to such products.</li>
              </ul>
              <p><strong>"Transaction Date",</strong> for the purpose of this Refund Policy, means the date of purchase of any product or service, which includes the date any renewal is processed by Provider in accordance with the terms and conditions of the applicable product or service agreement</p>
              <p><strong>"Refund Terms",</strong> you may cancel a product at any time, but a refund will only be issued if you request a refund with Provider’s customer service within the refund time frame specified below for the applicable product, if available at all.</p>
              <p><strong><u>Standard Refund Terms</u></strong></p>
              <p>Yearly Plans – Within 14 calendar days of the Transaction Date.</p>
              <p>Monthly Plans – Within 48 hours of the Transaction Date.</p>
              <ul>
                <li><u>No Refund After Account Closure.</u> If eligible for a refund, it is necessary for Customer to request a refund prior to account closure. Customer may elect to close Customer’s account with us at any time, but upon account closure Customer will no longer be eligible for a refund as otherwise permitted under this Refund Policy</li>
              </ul>
              <p><strong><u>4 CUSTOMER DATA & PRIVACY.</u></strong></p>
              <ul>
                <li><u>Data Ownership and License.</u> Provider recognizes and agrees that Customer possesses and retains all right, title, and interest in and to Customer Data, and Provider’s use and possession thereof is solely on Customer’s behalf. Provider further recognizes and agrees that: (1) Customer Data is valuable property of Customer; (2) Customer Data includes Customer’s trade secrets; (3) Customer Data is an original compilation pursuant to the copyright law of the United States and other jurisdictions; and (4) Customer has dedicated substantial resources to collecting, managing, and compiling Customer Data. Customer hereby grants Provider a limited license to reproduce and otherwise manage Customer Data during the Term solely as specifically authorized in Agreement.</li>
                <li><u>Use and Disclosure.</u> Provider may access and use Customer Data solely as necessary to provide the System to Customer, and unless it receives Customer’s prior written consent, Provider shall not: (a) access, process, or otherwise use Customer Data other than as necessary to facilitate the System; or (b) give Customer Data access to any third party, except Provider’s subcontractors that have a need for such access to facilitate the System and are subject to a reasonable written agreement governing the use and security of Customer Data. Further, Provider: (c) shall exercise reasonable efforts to prevent unauthorized disclosure or exposure of Customer Data; and (d) shall comply with all Privacy/Security Laws that are applicable both specifically to Provider and generally to data processors in the jurisdictions in which Provider does business and operates physical facilities.</li>
                <li><u>Additional Fees.</u> Customer recognizes and agrees that Provider may charge additional fees (without limitation) (a) for activities (if any) required by Privacy/Security Laws and (b) for activities Customer requests to help it comply with Privacy/Security Laws..</li>
                <li><u>Privacy Policy.</u> Customer acknowledges Provider’s privacy policy and Customer recognizes and agrees that nothing in this Agreement restricts Provider’s right to alter such privacy policy.</li>
                <li><u>De-Identified Data.</u> Notwithstanding the provisions above of this Article 4, Provider may use, reproduce, sell, publicize, or otherwise exploit De-Identified Data (as defined below) in any way, in its sole discretion, including without limitation aggregated with data from other customers. (“De-Identified Data” refers to Customer Data with the following removed: information that identifies or could reasonably be used to identify an individual person, a household, a Customer’s Client, or Customer.)</li>
                <li><u>Erasure.</u> Provider may permanently erase Customer Data if Customer’s account is delinquent, suspended, or terminated for 30 days or more, without limiting Provider’s other rights or remedies. Required Disclosure. Notwithstanding the provisions above of this Article 4, Provider may disclose Customer Data as required by applicable law or by proper legal or governmental authority. Provider shall give Customer prompt notice of any such legal or governmental demand and reasonably cooperate with Customer in any effort to seek a protective order or otherwise to contest such required disclosure, at Customer’s expense.</li>
                <li><u>Risk of Exposure.</u> Customer recognizes and agrees that hosting data online involves risks of unauthorized disclosure or exposure and that, in accessing and using the System, Customer assumes such risks. Provider offers no representation, warranty, or guarantee that Customer Data will not be exposed or disclosed through errors or the actions of third parties.</li>
                <li><u>Data Accuracy.</u> Provider shall have no responsibility or liability for the accuracy of data uploaded to the System by Customer, including without limitation Customer Data and any other data uploaded by Users or Customer’s Clients.</li>
                <li><u>General Security.</u> Without limiting the generality of its obligations elsewhere in this Agreement, Provider shall exercise commercially reasonably efforts to prevent unauthorized exposure or disclosure of Customer Data.</li>
              </ul>
              <p><strong><u>5 CUSTOMER’S RESPONSIBILITIES & RESTRICTIONS.</u></strong></p>
              <ul>
                <li><u>Acceptable Use.</u> Customer shall comply with the AUP. Customer shall not: (a) use the System for service bureau or time-sharing purposes or in any other way allow third parties to exploit the System, except Customer’s Clients as specifically authorized by this Agreement; (b) provide System passwords or other log-in information to any third party, except Customer’s Clients as specifically authorized by this Agreement; (c) share non-public System features or content with any third party, except Customer’s Clients as specifically authorized by this Agreement; (d) access the System in order to build a competitive product or service, to build a product using similar ideas, features, functions or graphics, or to copy any ideas, features, functions or graphics of the System; or (e) engage in web scraping or data scraping on or related to the System, including without limitation collection of information through any software that simulates human activity or any bot or web crawler. In the event that it suspects any breach of the requirements of this Section 1, including without limitation by Users, Provider may suspend Customer’s access to the System without advanced notice, in addition to such other remedies as Provider may have. Neither this Agreement nor the AUP requires that Provider take any action against Customer or any User or other third party for violating the AUP, this Section 5.1, or this Agreement, but Provider is free to take any such action it sees fit.</li>
                <li><u>Unauthorized Access.</u> Customer shall take reasonable steps to prevent unauthorized access to the System, including without limitation by protecting its passwords and other log-in information. Customer shall notify Provider immediately of any known or suspected unauthorized use of the System or breach of its security and shall use best efforts to stop said breach.</li>
                <li><u>Compliance with Laws.</u> In its use of the System, Customer shall comply with all applicable laws, including without limitation Privacy/Security Laws.</li>
                <li><u>Customer’s Clients & Other Users; System Access.</u> Customer is responsible and liable for: (a) Customer’s Clients’ and other Users’ use of the System, including without limitation unauthorized User conduct and any User conduct that would violate the AUP or the requirements of this Agreement applicable to Customer; and (b) any use of the System through Customer’s account, whether authorized or unauthorized..</li>
              </ul>
              <p><strong><u>6 IP & FEEDBACK.</u></strong></p>
              <ul>
                <li><u>IP Rights to the System.</u> Provider retains all right, title, and interest in and to the System, including without limitation all software used to provide the System and all graphics, user interfaces, logos, and trademarks reproduced through the System. This Agreement does not grant Customer any intellectual property license or rights in or to the System or any of its components. Customer recognizes that the System and its components are protected by trademark, copyright and other laws.</li>
                <li><u>Feedback.</u> Provider has not agreed to and does not agree to treat as confidential any Feedback (as defined below) that Customer, Customer’s Clients, or other Users give Provider, and nothing in this Agreement or in the parties’ dealings arising out of or related to this Agreement will restrict Provider’s right to use, profit from, disclose, publish, keep secret, or otherwise exploit Feedback, without compensating or crediting Customer. Feedback will not be considered Customer’s trade secret. (“Feedback” refers to any suggestion or idea for improving or otherwise modifying any of Provider’s products or services.)</li>
              </ul>
              <p><strong><u>7 CONFIDENTIAL INFORMATION.</u></strong> <u>"Confidential Information"</u> refers to the following items Provider discloses to Customer: (a) any document Provider marks “Confidential”; (b) any information Provider orally designates as “Confidential” at the time of disclosure, provided Provider confirms such designation in writing within 10 business days; (c) the Documentation, whether or not marked or designated confidential; and (d) any other nonpublic, sensitive information Customer should reasonably consider a trade secret or otherwise confidential. Notwithstanding the foregoing, Confidential Information does not include information that: (i) is in Customer’s possession at the time of disclosure; (ii) is independently developed by Customer without use of or reference to Confidential Information; (iii) becomes known publicly, before or after disclosure, other than as a result of Customer’s improper action or inaction; or (iv) is approved for release in writing by Provider.</p>
              <ul>
                <li><u>Nondisclosure.</u> Customer shall not use Confidential Information for any purpose other than for the purpose of complying with the Subscription Agreement (the “Purpose”). Customer: (a) shall not disclose Confidential Information to any employee or contractor of Customer unless such person needs access in order to facilitate the Purpose and executes a nondisclosure agreement with Customer with terms no less restrictive than those of this Article 2; and (b) shall not disclose Confidential Information to any other third party without Provider’s prior written consent. Without limiting the generality of the foregoing, Customer shall protect Confidential Information with the same degree of care it uses to protect its own confidential information of similar nature and importance, but with no less than reasonable care. Customer shall promptly notify Provider of any misuse or misappropriation of Confidential Information that comes to Customer’s attention. Notwithstanding the foregoing, Customer may disclose Confidential Information as required by applicable law or by proper legal or governmental authority. Customer shall give Provider prompt notice of any such legal or governmental demand and reasonably cooperate with Provider in any effort to seek a protective order or otherwise to contest such required disclosure, at Provider’s expense.</li>
                <li><u>Termination & Return.</u> With respect to each item of Confidential Information, the obligations of Section 1 above (Nondisclosure) will terminate 5 years after the date of disclosure; provided that such obligations related to Confidential Information constituting Provider’s trade secrets shall continue so long as such information remains subject to trade secret protection pursuant to applicable law. Upon termination of this Agreement, Customer shall return all copies of Confidential Information to Provider or certify, in writing, the destruction thereof.</li>
                <li><u>Injunction.</u> Customer agrees that: (a) no adequate remedy exists at law if it breaches any of its obligations in this Article 7; (b) it would be difficult to determine the damages resulting from its breach of this Article 7, and such breach would cause irreparable harm to Provider; and (iii) a grant of injunctive relief provides the best remedy for any such breach, without any requirement that Provider prove actual damage or post a bond or other security. Customer waives any opposition to such injunctive relief or any right to such proof, bond, or other security. (This Section 3 does not limit either party’s right to injunctive relief for breaches not listed.)</li>
                <li><u>Retention of Rights.</u> This Agreement does not transfer ownership of Confidential Information or grant a license thereto. Provider will retain all right, title, and interest in and to all Confidential Information.</li>
                <li><u>Exception & Immunity.</u> Pursuant to the Defend Trade Secrets Act of 2016, 18 USC Section 1833(b), Customer is on notice and acknowledges that, notwithstanding the foregoing or any other provision of this Agreement:
                  <ul>
                    <li>IMMUNITY. An individual shall not be held criminally or civilly liable under any Federal or State trade secret law for the disclosure of a trade secret that- (A) is made- (i) in confidence to a Federal, State, or local government official, either directly or indirectly, or to an attorney; and (ii) solely for the purpose of reporting or investigating a suspected violation of law; or (B) is made in a complaint or other document filed in a lawsuit or other proceeding, if such filing is made under seal.</li>
                    <li>USE OF TRADE SECRET INFORMATION IN ANTI-RETALIATION LAWSUIT. An individual who files a lawsuit for retaliation by an employer for reporting a suspected violation of law may disclose the trade secret to the attorney of the individual and use the trade secret information in the court proceeding, if the individual- (A) files any document containing the trade secret under seal; and (B) does not disclose the trade secret, except pursuant to court order.</li>
                  </ul>
                </li>
              </ul>
              <p><strong><u>8 REPRESENTATIONS & WARRANTIES.</u></strong></p>
              <ul>
                <li><u>From Provider.</u> Provider represents and warrants that it is the owner of the System and of each and every component thereof, or the recipient of a valid license thereto, and that it has and will maintain the full power and authority to grant the rights to use the System set forth in this Agreement without the further consent of any third party. Provider’s representations and warranties in the preceding sentence do not apply to use of the System in combination with hardware or software not provided by Provider. In case of breach of the warranty above in this Section 1, Provider, at its own expense, shall promptly: (a) secure for Customer the right to continue using the System; (b) replace or modify the System to make it noninfringing; or if such remedies are not commercially practical in Provider’s reasonable opinion, (c) refund the fees paid for the System for every month remaining in the then-current Term following the date after which Customer access to the System ceases as a result of such breach of warranty. If Provider exercises its rights pursuant to Subsection 8.1(c) above, Customer shall promptly cease all use of the System and all reproduction and use of the Documentation and erase all copies in its possession or control. This Section 8.1, in conjunction with Customer’s right to terminate this Agreement where applicable, states Customer’s sole remedy and Provider’s entire liability for breach of the warranty above in this Section 8.1.</li>
                <li><u>From Customer.</u> 
                  <ul>
                    <li>Re Customer Itself. Customer represents and warrants that: (i) it has the full right and authority to enter into, execute, and perform its obligations under this Agreement and that no pending or threatened claim or litigation known to it would have a material adverse impact on its ability to perform as required by this Agreement; (ii) it has accurately identified itself and it has not provided any inaccurate information about itself to or through the System; and (iii) it is a corporation, the sole proprietorship of an individual 18 years or older, or another entity authorized to do business pursuant to applicable</li>
                    <li>Re Customer’s Clients. Customer represents and warrants that, to the best of its knowledge: (i) each Customer’s Client will have the full right and authority to enter into, execute, and perform its obligations as required under this Agreement and the Client ToS, with no pending or threatened claim or litigation that would have a material adverse impact on its ability so to perform; (ii) Customer will accurately identify each Customer’s Client and will not provide any inaccurate information about a Customer’s Client or other User to or through the System; and (iii) each Customer’s Client will be a corporation, the sole proprietorship of an individual 18 years or older, or another entity authorized to do business pursuant to applicable</li>
                  </ul>
                </li>
                <li><u>Warranty Disclaimers.</u> Except to the extent set forth in the SLA and in Section 1 above, CUSTOMER ACCEPTS THE SYSTEM “AS IS,” WITH NO REPRESENTATION OR WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NONINFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS OR ANY IMPLIED WARRANTY ARISING FROM STATUTE, COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING: (a) PROVIDER HAS NO OBLIGATION TO INDEMNIFY OR DEFEND CUSTOMER OR USERS AGAINST CLAIMS RELATED TO INFRINGEMENT OF INTELLECTUAL PROPERTY; (b) PROVIDER DOES NOT REPRESENT OR WARRANT THAT THE SYSTEM WILL PERFORM WITHOUT INTERRUPTION OR ERROR; AND (c) PROVIDER DOES NOT REPRESENT OR WARRANT THAT THE SYSTEM IS SECURE FROM HACKING OR OTHER UNAUTHORIZED INTRUSION OR THAT CUSTOMER DATA WILL REMAIN PRIVATE OR SECURE.</li>
              </ul>
              <p><strong><u>9 INDEMNIFICATION.</u></strong> Customer shall defend, indemnify, and hold harmless Provider and the Provider Associates (as defined below) against any “Indemnified Claim,” meaning any third party claim, suit, or proceeding arising out of or related to Customer’s alleged or actual use of, misuse of, or failure to use the System, including without limitation: (a) claims by Customer’s Clients or other Users or by Customer’s or Customer’s Clients’ employees; (b) claims related Data Incidents (as defined below); (c) claims related to infringement or violation of a copyright, trademark, trade secret, or privacy or confidentiality right by written material, images, logos or other content uploaded to the System through Customer’s account, including without limitation by Customer Data; and (d) claims that use of the System through Customer’s account, including by Customer’s Clients or other Users, harasses, defames, or defrauds a third party or violates the CAN-Spam Act of 2003 or any other law or restriction on electronic advertising. INDEMNIFIED CLAIMS INCLUDE, WITHOUT LIMITATION, CLAIMS ARISING OUT OF OR RELATED TO PROVIDER’S NEGLIGENCE. Customer’s obligations set forth in this Article 9 include, without limitation: (i) settlement at Customer’s expense and payment of judgments finally awarded by a court of competent jurisdiction, as well as payment of court costs and other reasonable expenses; and (ii) reimbursement of reasonable attorneys’ fees incurred before Customers’ assumption of the defense (but not attorneys’ fees incurred thereafter). If Customer fails to assume the defense on time to avoid prejudicing the defense, Provider may defend the Indemnified Claim, without loss of rights pursuant to this Article 9. Provider will have the right, not to be exercised unreasonably, to reject any settlement or compromise that requires that it or a Provider Associate admit wrongdoing or liability or subjects either of them to any ongoing affirmative obligation. (“Provider Associates” are Provider’s officers, directors, shareholders, parents, subsidiaries, agents, successors, and assigns. A “Data Incident” is any (1) unauthorized disclosure of, access to, or use of Customer Data, including without limitation Excluded Data, or (2) violation of Privacy/Security Law through Customer’s account. Data Incidents include, without limitation, such events caused by Customer, by Provider, by Customer’s customers or other users, by hackers, and by any other third party.)</p>
              <p><strong><u>10 LIMITATION OF LIABILITY.</u></strong></p>
              <ul>
                <li><u>Dollar Cap.</u> PROVIDER’S CUMULATIVE LIABILTY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THIS AGREEMENT WILL NOT EXCEED OF THE FEES CUSTOMER HAS PAID IN THE YEAR IMMEDIATELY PRECEDING THE FIRST EVENT GIVING RISE TO ANY CLAIM FOR DAMAGES;</li>
                <li><u>Excluded Damages.</u> IN NO EVENT WILL PROVIDER BE LIABLE FOR LOST PROFITS OR LOSS OF BUSINESS OR FOR ANY CONSEQUENTIAL, INDIRECT, SPECIAL, INCIDENTAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO THIS AGREEMENT.</li>
                <li><u>Clarifications & Disclaimers.</u> THE LIABILITIES LIMITED BY THIS ARTICLE 10 APPLY TO THE BENEFIT OF PROVIDER’S OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND THIRD PARTY CONTRACTORS, AS WELL AS: (a) TO LIABILITY FOR NEGLIGENCE; (b) REGARDLESS OF THE FORM OF ACTION, WHETHER IN CONTRACT, TORT, STRICT PRODUCT LIABILITY, OR OTHERWISE; (c) EVEN IF PROVIDER IS ADVISED IN ADVANCE OF THE POSSIBILITY OF THE DAMAGES IN QUESTION AND EVEN IF SUCH DAMAGES WERE FORESEEABLE; AND (d) EVEN IF CUSTOMER’S REMEDIES FAIL OF THEIR ESSENTIAL PURPOSE. Customer acknowledges and agrees that Provider has based its pricing on and entered into this Agreement in reliance upon the limitations of liability and disclaimers of warranties and damages in this Article 10 and that such terms form an essential basis of the bargain between the parties. If applicable law limits the application of the provisions of this Article 10, Provider’s liability will be limited to the maximum extent permissible. For the avoidance of doubt, Provider’s liability limits and other rights set forth in this Article 10 apply likewise to Provider’s affiliates, licensors, suppliers, advertisers, agents, sponsors, directors, officers, employees, consultants, and other repr</li>
              </ul>
              <p><strong><u>11 TERM & TERMINATION.</u></strong></p>
              <ul>
                <li><u>Term.</u> The term of this Agreement (the “Term”) shall commence on the Effective Date and continue for the period set forth in the Order or, if none, until terminated by either Provider or Customer.</li>
                <li><u>Termination for Cause.</u>Either party may terminate this Agreement for any reason at any time. Customer may terminate this agreement by cancelling Customer’s account.  Provider may terminate this agreement by notifying Customer in writing to primary email address set up in Customer’s account and closing Customer’s account.  Provider may suspend or terminate a Customer’s Client’s or other User’s access to the System at any time, without advanced notice, if Provider reasonably concludes such Customer’s Client or other User has conducted itself in a way that is not consistent with the requirements of the AUP or the other requirements of this Agreement or in a way that subjects Provider to potential liability.</li>
                <li><u>Effects of Termination.</u>Upon termination of this Agreement, Customer shall cease all use of the System and delete, destroy, or return all copies of the Documentation in its possession or control. The following provisions will survive termination or expiration of this Agreement: (a) any obligation of Customer to pay fees incurred before termination; (b) Articles and Sections 6 (IP & Feedback), 7 (Confidential Information), 2 (Warranty Disclaimers), 9 (Indemnification), and 10 (Limitation of Liability); and (c) any other provision of this Agreement that must survive to fulfill its essential purpose.</li>
              </ul>
              <p><strong><u>12 MISCELLANEOUS.</u></strong></p>
              <ul>
                <li><u>Independent Contractors.</u> The parties are independent contractors and will so represent themselves in all regards. Neither party is the agent of the other, and neither may make commitments on the other’s behalf. The parties agree that no Provider employee or contractor will be an employee of Customer.</li>
                <li><u>Notices.</u> Provider may send notices pursuant to this Agreement to Customer’s email contact points provided by Customer, and such notices will be deemed received 24 hours after they are sent. Customer may send notices pursuant to this Agreement to contact@scoreus.com, and such notices will be deemed received 72 hours after they are sent. . In addition, Customer is on notice and agrees that Provider will terminate the accounts of subscribers who are repeat copyright infringers.</li>
                <li><u>Force Majeure.</u> No delay, failure, or default, other than a failure to pay fees when due, will constitute a breach of this Agreement to the extent caused by epidemics, acts of war, terrorism, hurricanes, earthquakes, other acts of God or of nature, strikes or other labor disputes, riots or other acts of civil disorder, embargoes, government orders responding to any of the foregoing, or other causes beyond the performing party’s reasonable control.</li>
                <li><u>Assignment & Successors.</u> Customer may not assign this Agreement or any of its rights or obligations hereunder without Provider’s express written consent. Except to the extent forbidden in this Section 4, this Agreement will be binding upon and inure to the benefit of the parties’ respective successors and assigns.</li>
                <li><u>Severability.</u> To the extent permitted by applicable law, the parties hereby waive any provision of law that would render any clause of this Agreement invalid or otherwise unenforceable in any respect. In the event that a provision of this Agreement is held to be invalid or otherwise unenforceable, such provision will be interpreted to fulfill its intended purpose to the maximum extent permitted by applicable law, and the remaining provisions of this Agreement will continue in full force and effect.</li>
                <li><u>No Waiver.</u> Neither party will be deemed to have waived any of its rights under this Agreement by lapse of time or by any statement or representation other than by an authorized representative in an explicit written waiver. No waiver of a breach of this Agreement will constitute a waiver of any other breach of this Agreement.</li>
                <li><u>Choice of Law & Jurisdiction.</u> This Agreement will be governed solely by the internal laws of the State of Texas, including applicable U.S. federal law, without reference to: (a) any conflicts of law principle that would apply the substantive laws of another jurisdiction to the parties’ rights or duties; (b) the 1980 United Nations Convention on Contracts for the International Sale of Goods; or (c) other international laws. The parties consent to the personal and exclusive jurisdiction of the federal and state courts of Sugar Land, Texas. This Section 7 governs all claims arising out of or related to this Agreement, including without limitation tort claims.</li>
                <li><u>Conflicts.</u> In the event of any conflict between this Agreement and any Provider policy posted online, including without limitation the AUP, the terms of this Agreement will govern.</li>
                <li><u>Technology Export.</u> Customer shall not: (a) permit any third party to access or use the System in violation of any U.S. law or regulation; or (b) export any software provided by Provider or otherwise remove it from the United States except in compliance with all applicable U.S. laws and regulations. Without limiting the generality of the foregoing, Customer shall not permit any third party to access or use the System in, or export such software to, a country subject to a United States embargo (as of the Effective Date, Cuba, Iran, North Korea, Sudan, and Syria).</li>
                <li><u>Entire Agreement.</u> This Agreement sets forth the entire agreement of the parties and supersedes all prior or contemporaneous writings, negotiations, and discussions with respect to its subject matter. Neither party has relied upon any such prior or contemporaneous communications.</li>
                <li><u>Amendment.</u> Provider may amend this Agreement from time to time by posting an amended version at its Website and sending Customer written notice thereof. Such amendment will be deemed accepted and become effective 30 days after such notice (the “Proposed Amendment Date”) unless Customer first gives Provider written notice of rejection of the amendment. In the event of such rejection, this Agreement will continue under its original provisions, and the amendment will become effective at the start of Customer’s next Term following the Proposed Amendment Date (unless Customer first terminates this Agreement pursuant to Article 11, Term & Termination). Customer’s continued use of the System following the effective date of an amendment will confirm Customer’s consent thereto. This Agreement may not be amended in any other way except through a written agreement by authorized representatives of each party. Notwithstanding the foregoing provisions of this Section 12, Provider may revise the AUP at any time by posting a new version of either at the Website, and such new version will become effective on the date it is posted; provided if such amendment materially reduces Customer’s rights or protections, notice and consent will be subject to the requirements above in this Section 12.12.</li>
              </ul>
              `
          },
          disableClose: true 
        });
        
        ref2.afterClosed().subscribe((res:any)=>{
          this.route.navigate(['/signupwizardstepthree'])
        });

      });

    });
  
  }

  initSignupForm() {
    this.signupForm = new FormGroup({
      refCode: new FormControl(),
      firstName:new FormControl('',[Validators.compose([Validators.required,])]),
      lastName: new FormControl('', [Validators.compose([Validators.required,])]),
      password:new FormControl('',[ Validators.compose([Validators.required,])]),
      confirmpassword:new FormControl('', [Validators.compose([Validators.required,])]),
      companyName:new FormControl('',[ Validators.compose([Validators.required,])]),
      phone:new FormControl('', Validators.required),
        // Validators.pattern("^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$")
      address: new FormControl('',[ Validators.compose([Validators.required,])]),
      email:new FormControl(this.userEmail,[ Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$")
      ])
      ]),
      countryId:new FormControl('',[Validators.compose([Validators.required,])]),
      stateId:new FormControl('',[Validators.compose([Validators.required,])]),
      // cityId:new FormControl('',[ Validators.compose([Validators.required,])]),
      cityId:new FormControl(''),
      zipCode: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      linkID: new FormControl(),
    });
   
   
    // this.signupForm = this.fb.group({
    //   'refCode': new FormControl(),
    //   'firstName': ['', Validators.compose([Validators.required,])],
    //   'lastName': ['', Validators.compose([Validators.required,])],
    //   'password': ['', Validators.compose([Validators.required,])],
    //   'confirmpassword': ['', Validators.compose([Validators.required,])],
    //   'companyName': ['', Validators.compose([Validators.required,])],
    //   'phone': ['', Validators.compose([Validators.required,
    //     // Validators.pattern("^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$")
    //   ])
    //   ],
    //   'address': ['', Validators.compose([Validators.required,])],
    //   'email': [this.userEmail, Validators.compose([
    //     Validators.required,
    //     Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$")
    //   ])
    //   ],
    //   'countryId': ['', Validators.compose([Validators.required,])],
    //   'stateId': ['', Validators.compose([Validators.required,])],
    //   'cityId': ['', Validators.compose([Validators.required,])],
    //   'zipCode': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
    //   'linkID': new FormControl(),
    // });
  }

  ngOnInit(): void {
    
    this.signup_service.getSignupData();
    this.activatedRoute.params.subscribe(x => {
      this.verifyLink = x.linkID;
      this.userEmail = x.email
      this.initSignupForm();
          this.signupForm.controls["email"].disable();
    });

    this._apiService.get(api.tenant).subscribe((res:any)=>{
      this.listTenant = res.data
    })

    // this._apiService.get(api.referral)
    //   .subscribe((res: any) => {
    //     this.listReferralCode = res.data
    //   })



      this._apiService.isLanguageSelector$.subscribe((res:any)=>{
        this.translateService.use(res)
        this.cdr.detectChanges()
      })


  }

  onNext() {
    const controls = this.signupForm.controls;

    if (this.signupForm.invalid) {
      this.notificationService.push("Form data is invalid", 2)
      return
    }
    
    if(this.signupForm.controls['companyName'].value && this.listTenant.some((i:any)=> i.companyName ==(this.signupForm.controls['companyName'].value)))
    {
      this.notificationService.push('Company name is already registered',2)
      return
    }

    if(this.signupForm.controls['email'].value && this.listTenant.some((i:any)=> i.email ==(this.signupForm.controls['email'].value)))
    {
      this.notificationService.push('email is already registered',2)
      return
    }
     
    let isExist = this.listTenant.filter((i:any)=>i.refCode == this.signupForm.controls['refCode'].value)[0]
    if (this.signupForm.controls['refCode'].value && isExist?.length<1) {
        this.notificationService.push('Referral code not existed', 2)
        return
      }
    if (this.signupForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }


    this.signupForm.controls["zipCode"].setValue(this.signupForm.controls["zipCode"].value.toString())
    
    // if(this.signupForm.controls["zipCode"].value.length!=4)
    // {
    //   this.notificationService.push("zipcode must be of 4 character",2);
    //   this.signupForm.controls["zipCode"].setValue(+this.signupForm.controls["zipCode"].value.toString())
    //   return
      
    // }
    this.signup_service.mapped_Data(this.signupForm.value,this.userEmail);
    this.signup_service.SignupDTO.linkID = this.verifyLink;
    this.openDialog();
  }



  onZipCode(data:any){
    const zipCodeControl = this.signupForm.controls['zipCode'];

    if (zipCodeControl) {
      const sanitizedValue = zipCodeControl.value ? zipCodeControl.value.replace(/[^0-9]/g, '') : '';
      zipCodeControl.setValue(sanitizedValue);
    }
    }
  //   onStateChange(stateName: string, countryName: string) {
  //     // Reset the city dropdown or handle the city list update logic
  //     this.signup_service.getCities(stateName, countryName);
  //     // If no cities are available, set a flag to show or hide city dropdown accordingly
  //     this.selectedState = stateName;
  // }
  /**
   * Checking control validation
   *
   * @param controlName: string => Equals to formControlName
   * @param validationType: string => Equals to valitors name
   */
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.signupForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) &&
      (control.dirty || control.touched);
    return result;
  }

}