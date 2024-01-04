import {
  Component,
  EventEmitter,
  inject,
  Injector,
  Output,
} from "@angular/core";
import { Registration } from "../../interfaces/registration.interface";
import { SignUpFormClass } from "./sign-up.form.class";
import { AuthService } from "src/app/smart-features/smart-auth/modals/auth-modal/auth.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent {
  @Output() changeForm: EventEmitter<string> = new EventEmitter<string>();

  constructor(private authService: AuthService) {}
  initialData: Registration = {
    email: "",
    phone: "",
  };

  signUpForm = new SignUpFormClass(this.initialData, inject(Injector));

  openLogInForm(): void {
    this.changeForm.emit("login");
  }

  onSubmit() {
    const formData: any = this.signUpForm.value;
    this.authService.signUp(formData).subscribe(
      (response) => {
        console.log("Register successful", response);
      },
      (error) => {
        console.error("Register failed", error);
      }
    );
  }
}
