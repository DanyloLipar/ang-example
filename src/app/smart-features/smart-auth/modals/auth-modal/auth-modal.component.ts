import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { animate, style, transition, trigger } from "@angular/animations";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth-modal",
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("300ms", style({ opacity: 1 })),
      ]),
    ]),
  ],
  templateUrl: "./auth-modal.component.html",
  styleUrls: ["./auth-modal.component.scss"],
})
export class AuthModalComponent {
  currentForm: string;

  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<AuthModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.currentForm = "signup";
  }

  changeForm(form: string): void {
    this.currentForm = form;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
