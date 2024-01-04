import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCardComponent } from './components/auto-card/auto-card.component';
import { MatCardModule } from "@angular/material/card";
import { AutoFilterComponent } from './components/auto-filter/auto-filter.component';
import { SharedModule} from "../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { AutoTeaserComponent } from './components/auto-teaser/auto-teaser.component';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDividerModule } from "@angular/material/divider";
import { MatSliderModule } from "@angular/material/slider";
import { MatSelectModule } from "@angular/material/select";
import { AutoRentCalculatorComponent } from './components/auto-rent-calculator/auto-rent-calculator.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AutoOwnerComponent } from './components/auto-owner/auto-owner.component';
import { AutoFilterChipsComponent } from './components/auto-filter-chips/auto-filter-chips.component';
import { AutoSortComponent } from './components/auto-sort/auto-sort.component';
import { RouterLink } from "@angular/router";

@NgModule({
  declarations: [
    AutoCardComponent,
    AutoFilterComponent,
    AutoTeaserComponent,
    AutoRentCalculatorComponent,
    AutoOwnerComponent,
    AutoFilterChipsComponent,
    AutoSortComponent
  ],
    exports: [
        AutoCardComponent,
        AutoFilterComponent,
        AutoTeaserComponent,
        AutoRentCalculatorComponent,
        AutoOwnerComponent,
        AutoFilterChipsComponent,
        AutoSortComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatExpansionModule,
    MatDividerModule,
    MatSliderModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    RouterLink,
  ]
})
export class AutoModule { }
