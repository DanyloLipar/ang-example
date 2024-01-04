import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselWithThumbnailsComponent } from './components/carousel-with-thumbnails/carousel-with-thumbnails.component';
import { DatepickerComponent } from './components/form-inputs/datepicker/datepicker.component';
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { SelectComponent } from './components/form-inputs/select/select.component';
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule } from "@angular/material/expansion";
import { AutocompleteComponent } from './components/form-inputs/autocomplete/autocomplete.component';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ReactiveFormsModule } from "@angular/forms";
import { CheckboxGroupComponent } from './components/form-inputs/checkbox-group/checkbox-group.component';



@NgModule({
  declarations: [
    CarouselWithThumbnailsComponent,
    DatepickerComponent,
    SelectComponent,
    ExpansionPanelComponent,
    AutocompleteComponent,
    CheckboxGroupComponent
  ],
  exports: [
    CarouselWithThumbnailsComponent,
    DatepickerComponent,
    ExpansionPanelComponent,
    ExpansionPanelComponent,
    AutocompleteComponent,
    CheckboxGroupComponent
  ],
    imports: [
      CommonModule,
      MatInputModule,
      MatDatepickerModule,
      MatOptionModule,
      MatSelectModule,
      MatCheckboxModule,
      MatExpansionModule,
      MatAutocompleteModule,
      ReactiveFormsModule
    ]
})
export class SharedModule { }
