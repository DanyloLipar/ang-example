import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AutoAddComponent } from "./auto-add.component";
import { AutoAddRoutingModule } from "./auto-add-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [AutoAddComponent],
  imports: [
    CommonModule,
    AutoAddRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
})
export class AutoAddModule {}
