import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { AuthService } from "src/app/smart-features/smart-auth/modals/auth-modal/auth.service";
import { LogOutModalComponent } from "src/app/smart-features/smart-auth/modals/log-out-modal/log-out-modal.component";

@Component({
  selector: "app-private-header",
  templateUrl: "./private-header.component.html",
  styleUrls: ["./private-header.component.scss"],
})
export class PrivateHeaderComponent {
  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  addCar() {
    this.router.navigate(["/auto-add"]);
  }

  logOut() {
    this.dialog.open(LogOutModalComponent, {
      width: "30vw",
      maxWidth: "500px",
      height: "150px",
      autoFocus: false,
    });
  }
}
