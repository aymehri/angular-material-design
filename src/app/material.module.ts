import { NgModule } from '@angular/core';
import {
  // Forms Controls
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  // Navigation
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  // Layout
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatTabsModule,
  // Buttons & indicators
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  // Popups & Modals
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  // Data Table
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material';

const MATERIALMODULE = [
  // Forms Controls
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  // Navigation
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  // Layout
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatTabsModule,
  // Buttons & indicators
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  // Popups & Modals
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  // Data Table
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
];

@NgModule({
  imports: [...MATERIALMODULE],
  exports: [...MATERIALMODULE],
})
export class MyOwnCustomMaterialModule { }
