import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AuthModalComponent } from "src/app/smart-features/smart-auth/modals/auth-modal/auth-modal.component";
import { AuthService } from "src/app/smart-features/smart-auth/modals/auth-modal/auth.service";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import { LogOutModalComponent } from "src/app/smart-features/smart-auth/modals/log-out-modal/log-out-modal.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [
    trigger("fadeInOutAnimation", [
      state("void", style({ opacity: 0 })),
      state("*", style({ opacity: 1 })),
      transition(":enter, :leave", animate("0.5s ease-in-out")),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  isHovered = false;
  isOpen = false;
  currentUrl = "";

  constructor(private authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  logIn(): void {
    this.dialog.open(AuthModalComponent, {
      width: "80vw",
      maxWidth: "1200px",
      height: "677px",
      autoFocus: false,
    });
  }

  logOut() {
    this.dialog.open(LogOutModalComponent, {
      width: "30vw",
      maxWidth: "500px",
      height: "150px",
      autoFocus: false,
    });
  }

  showPopup() {
    this.isHovered = true;
  }

  hidePopup() {
    this.isHovered = false;
  }
}
