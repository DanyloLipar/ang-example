import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { AuthService } from "src/app/smart-features/smart-auth/modals/auth-modal/auth.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  private readonly tokenKey = environment.tokenKey;

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem(this.tokenKey)) {
      return true;
    } else {
      this.router.navigate(["/"]);
      return false;
    }
  }
}
