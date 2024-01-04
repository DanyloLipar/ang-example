import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PersonalInfoComponent } from "./personal-info.component";
import { PersonalInfoRoutingModule } from "./personal-info-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxMaskDirective } from "ngx-mask";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [PersonalInfoComponent],
  imports: [
    CommonModule,
    PersonalInfoRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    MatButtonModule,
  ],
})
export class PersonalInfoModule {}
