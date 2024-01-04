import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AutoItemRoutingModule } from "./auto-item-routing.module";
import { AutoItemComponent } from "./auto-item.component";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { AutoModule } from "../../features/auto/auto.module";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [AutoItemComponent],
  imports: [
    CommonModule,
    AutoItemRoutingModule,
    MatListModule,
    MatButtonModule,
    AutoModule,
    SharedModule,
  ],
})
export class AutoItemModule {}
