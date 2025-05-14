import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from '../dashboard/routing/routing.module';
import { mainDialogComponent, MainheaderComponent } from '../components/mainheader/mainheader.component';
import { MainnavigationComponent } from '../components/mainnavigation/mainnavigation.component';
import { MainnavheaderComponent } from '../components/mainnavheader/mainnavheader.component';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { DatatableComponent } from '../components/datatable/datatable.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



let component = [
  MainheaderComponent,
  MainnavigationComponent,
  MainnavheaderComponent,
  ConfirmDialogComponent,
  DatatableComponent
]

@NgModule({
  declarations: [
    ...component

  ],
  imports: [
    
   
    
    
    ReactiveFormsModule, 
    RoutingModule,
    MaterialUiModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    
    MaterialUiModule,
    CommonModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule,
    ...component

  ]
})
export class SharedModule { }
