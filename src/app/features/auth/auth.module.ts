import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogInComponent } from "./components/log-in/log-in.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxMaskDirective } from "ngx-mask";
import { MatButtonModule } from "@angular/material/button";
import { SocialNetworkAuthComponent } from "./components/social-network-auth/social-network-auth.component";

@NgModule({
  declarations: [
    LogInComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    SocialNetworkAuthComponent,
  ],
  exports: [
    SignUpComponent,
    ForgotPasswordComponent,
    LogInComponent,
    SocialNetworkAuthComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    MatButtonModule,
  ],
})
export class AuthModule {}
