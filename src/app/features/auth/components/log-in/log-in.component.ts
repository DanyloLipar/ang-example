import {
  Component,
  EventEmitter,
  inject,
  Injector,
  Output,
} from "@angular/core";
import { Login } from "../../interfaces/login.interface";
import { LogInFormClass } from "./log-in.form.class";
import { AuthService } from "src/app/smart-features/smart-auth/modals/auth-modal/auth.service";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.scss"],
})
export class LogInComponent {
  @Output() changeForm: EventEmitter<string> = new EventEmitter<string>();

  initialData: Login = {
    email_phone: "",
    password: "",
  };

  logInForm = new LogInFormClass(this.initialData, inject(Injector));

  constructor(private authService: AuthService) {}

  openForgotPasswordForm(): void {
    this.changeForm.emit("forgotPassword");
  }

  onSubmit() {
    const formData: any = this.logInForm.value;
    this.authService.signIn(formData).subscribe(
      (response) => {
        console.log("Login successful", response);
      },
      (error) => {
        console.error("Login failed", error);
      }
    );
  }
}
