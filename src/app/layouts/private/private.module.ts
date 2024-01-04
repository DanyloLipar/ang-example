import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { PrivateComponent } from "./private.component";
import { PrivateHeaderModule } from "../components/private-header/private-header.module";
import { FooterModule } from "../components/footer/footer.module";

@NgModule({
  declarations: [PrivateComponent],
  exports: [PrivateComponent],
  imports: [CommonModule, RouterModule, PrivateHeaderModule, FooterModule],
})
export class PrivateModule {}
