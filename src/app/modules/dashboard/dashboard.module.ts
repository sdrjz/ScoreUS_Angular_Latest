import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from 'src/app/elements/header/header.component';
import { ReferralComponent } from './pages/referral/referral.component';
import { SuperadmindashboardComponent } from './pages/superadmindashboard/superadmindashboard.component';


 let component = [
  DashboardComponent,
  ReferralComponent,
  SuperadmindashboardComponent
 ]


@NgModule({
  declarations: [...component],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports : [
    CommonModule,
    SharedModule,
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
