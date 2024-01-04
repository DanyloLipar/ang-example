import { Component, OnInit } from "@angular/core";
import { User } from "src/app/features/auth/interfaces/user.interface";
import { AuthService } from "src/app/smart-features/smart-auth/modals/auth-modal/auth.service";

@Component({
  selector: "app-private",
  templateUrl: "./private.component.html",
  styleUrls: ["./private.component.scss"],
})
export class PrivateComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }

  getAvatar() {
    if (this.user?.avatar) {
      return this.user.avatar;
    }

    return "../../../assets/icons/avatar.svg";
  }
}
