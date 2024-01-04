import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AuthModalComponent } from "../auth-modal/auth-modal.component";
import { AuthService } from "../auth-modal/auth.service";

@Component({
  selector: "app-log-out-modal",
  templateUrl: "./log-out-modal.component.html",
  styleUrls: ["./log-out-modal.component.scss"],
})
export class LogOutModalComponent {
  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<AuthModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  logOut() {
    this.authService.logOut();
    this.dialogRef.close();
  }
}
