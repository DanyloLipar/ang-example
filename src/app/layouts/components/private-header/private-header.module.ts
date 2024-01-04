import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { PrivateHeaderComponent } from "./private-header.component";

@NgModule({
  declarations: [PrivateHeaderComponent],
  exports: [PrivateHeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    RouterModule,
  ],
})
export class PrivateHeaderModule {}
