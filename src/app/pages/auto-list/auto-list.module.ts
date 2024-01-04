import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoListComponent } from './auto-list.component';
import { AutoModule } from "../../features/auto/auto.module";
import { AutoListRoutingModule } from "./auto-list-routing.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RegisterOfferComponent } from './components/register-offer/register-offer.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MobileTabletFilterComponent } from "./modals/mobile-tablet-filter/mobile-tablet-filter.component";

@NgModule({
  declarations: [
      AutoListComponent,
      RegisterOfferComponent,
      MobileTabletFilterComponent
  ],
    imports: [
        CommonModule,
        AutoListRoutingModule,
        AutoModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule
    ]
})
export class AutoListModule { }
