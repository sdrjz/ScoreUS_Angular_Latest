import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
// import { MatSelectSearchModule } from 'mat-select-search';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatTabsModule } from '@angular/material/tabs';

import {MatTooltipModule} from '@angular/material/tooltip'; 
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTreeModule } from '@angular/material/tree';

const UiComponents = [
  LayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  DragDropModule,
  MatCheckboxModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatTabsModule,
  MatTooltipModule,
  MatListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatToolbarModule,
    MatDividerModule,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTooltipModule,
    MatTreeModule,
  // MatSelectSearchModule
];

@NgModule({
  imports: UiComponents,
  exports: UiComponents,
})
export class MaterialUiModule { }