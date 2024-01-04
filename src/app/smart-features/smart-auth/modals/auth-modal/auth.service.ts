import { Injectable } from "@angular/core";
import { AuthBaseService } from "src/app/features/auth/api/auth-base.service";
import { Registration } from "src/app/features/auth/interfaces/registration.interface";
import { BehaviorSubject, catchError, tap, throwError, switchMap } from "rxjs";
import { Login } from "src/app/features/auth/interfaces/login.interface";
import { environment } from "src/environments/environment";
import { User } from "src/app/features/auth/interfaces/user.interface";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { UserBaseService } from "src/app/features/profile/api/user.api.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly tokenKey = environment.tokenKey;

  constructor(
    public dialog: MatDialog,
    private authBaseService: AuthBaseService,
    private router: Router,
    private userBaseService: UserBaseService
  ) {
    const userJson: any = localStorage.getItem("user");
    this.user.next(JSON.parse(userJson) || null);
  }

  public user = new BehaviorSubject<User | null>(null);

  signUp(data: Registration) {
    return this.authBaseService.register(data).pipe(
      catchError((error) => {
        console.log("Error during registration:", error);

        return throwError(error);
      }),
      switchMap((resData) => {
        localStorage.setItem(this.tokenKey, resData.payload.token);
        return this.userBaseService.getUser();
      }),
      tap((user) => {
        this.updateUserInfo(user);
        this.dialog.closeAll();
      })
    );
  }

  signIn(data: Login) {
    return this.authBaseService.login(data).pipe(
      catchError((error) => {
        console.log("Error during login:", error);

        return throwError(error);
      }),
      switchMap((resData) => {
        localStorage.setItem(this.tokenKey, resData.payload.token);
        return this.userBaseService.getUser();
      }),
      tap((user) => {
        this.updateUserInfo(user);
        this.dialog.closeAll();
      })
    );
  }

  public updateUserInfo(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
    this.user.next(user);
  }

  logOut() {
    this.user.next(null);
    localStorage.removeItem("user");
    localStorage.removeItem(this.tokenKey);
    this.authBaseService.logout();
    this.router.navigate(["/"]);
  }

  getUser(): any {
    const userJson: any = localStorage.getItem("user");
    this.user.next(JSON.parse(userJson) || null);
  }
}
