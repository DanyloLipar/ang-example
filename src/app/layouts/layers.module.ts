import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main/main.component";
import { RouterModule, RouterOutlet } from "@angular/router";
import { FooterModule } from "./components/footer/footer.module";
import { MatDividerModule } from "@angular/material/divider";
import { HeaderModule } from "./components/header/header.module";
import { PrivateComponent } from "./private/private.component";
import { PrivateHeaderModule } from "./components/private-header/private-header.module";
import { PrivateModule } from "./private/private.module";

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    FooterModule,
    MatDividerModule,
    HeaderModule,
    PrivateHeaderModule,
    RouterModule,
  ],
})
export class LayoutsModule {}
