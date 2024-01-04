import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthModalComponent } from "./modals/auth-modal/auth-modal.component";
import { AuthModule } from "../../features/auth/auth.module";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { LogOutModalComponent } from "./modals/log-out-modal/log-out-modal.component";

@NgModule({
  declarations: [AuthModalComponent, LogOutModalComponent],
  imports: [CommonModule, AuthModule, MatIconModule, MatButtonModule],
})
export class SmartAuthModule {}
