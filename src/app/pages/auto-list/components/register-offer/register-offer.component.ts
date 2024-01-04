import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { AuthModalComponent } from "../../../../smart-features/smart-auth/modals/auth-modal/auth-modal.component";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "src/app/smart-features/smart-auth/modals/auth-modal/auth.service";

@Component({
  selector: "app-register-offer",
  templateUrl: "./register-offer.component.html",
  styleUrls: ["./register-offer.component.scss"],
})
export class RegisterOfferComponent implements OnInit {
  isAuthenticated = false;

  @Output() changeRegistrationOffer: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  constructor(private authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  signUp(): void {
    this.dialog.open(AuthModalComponent, {
      width: "80vw",
      maxWidth: "1200px",
      height: "677px",
      autoFocus: false,
    });
  }

  removeRegistrationOffer(): void {
    this.changeRegistrationOffer.emit(false);
    localStorage.setItem("showRegistrationOffer", "false");
  }
}
