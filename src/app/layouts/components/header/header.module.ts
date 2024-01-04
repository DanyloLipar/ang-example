import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header.component";

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    RouterModule,
  ],
})
export class HeaderModule {}
