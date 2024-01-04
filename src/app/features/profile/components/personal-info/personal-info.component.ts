import { Component, OnInit, inject, Injector } from "@angular/core";
import { Subject, catchError, tap, throwError } from "rxjs";
import { UserBaseService } from "../../api/user.api.service";
import { PersonInfo } from "../../interfaces/person.info.interface";
import { UserInfoFormClass } from "./personal-info.form.class";
import { AuthService } from "src/app/smart-features/smart-auth/modals/auth-modal/auth.service";
import { User } from "src/app/features/auth/interfaces/user.interface";

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html",
  styleUrls: ["./personal-info.component.scss"],
})
export class PersonalInfoComponent implements OnInit {
  constructor(
    private userBaseService: UserBaseService,
    private authService: AuthService
  ) {
    console.log(this.personDataForm.value.avatar);
  }
  user: User | null = null;

  initialData: User = {
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
    phone: "",
    avatar: null,
    email: "",
    city_of_residence: "",
  };

  personDataForm = new UserInfoFormClass(this.initialData, inject(Injector));
  imageUrl: string | ArrayBuffer = "";

  handleFileInput(event: Event) {
    const input: any = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.personDataForm.get("avatar")?.setValue(file);

      if (this.personDataForm.value.avatar) {
        this.readFile(this.personDataForm.value.avatar);
      }
    }
  }

  readFile(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      this.imageUrl = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  }

  ngOnInit(): void {
    this.getUser().subscribe();

    this.authService.user.subscribe((user) => {
      this.user = user;
      if (typeof user?.avatar === "string") {
        this.imageUrl = user.avatar;
      }
    });
  }

  getUser() {
    return this.userBaseService.getUser().pipe(
      catchError((error) => {
        console.log("Error during login:", error);

        return throwError(error);
      }),
      tap((user) => {
        this.authService.user.next(user);
        this.setFormValuesFromResponse(user);
      })
    );
  }

  updateUser() {
    const newData: any = this.personDataForm.value;

    return this.userBaseService
      .updateUser(newData)
      .pipe(
        catchError((error) => {
          console.log("Error during update:", error);
          return throwError(error);
        })
      )
      .subscribe((user) => {
        this.authService.updateUserInfo(user);
      });
  }

  setFormValuesFromResponse(response: any): void {
    Object.keys(response).forEach((key) => {
      const control = this.personDataForm.get(key);

      if (control && response[key]) {
        control.setValue(response[key]);
      }
    });
  }

  getMaxDate(): Date {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
  }

  getAvatar() {
    if (this.imageUrl) {
      return this.imageUrl;
    }

    return "../../../assets/icons/avatar.svg";
  }
}
