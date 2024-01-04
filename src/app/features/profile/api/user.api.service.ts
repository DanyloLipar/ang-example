import { Injectable } from "@angular/core";
import { ApiService } from "../../../core/services/api.service";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../../auth/interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserBaseService {
  private readonly tokenKey = environment.tokenKey;
  baseUrl = "/user";
  token: any = localStorage.getItem(this.tokenKey);

  constructor(public readonly apiService: ApiService) {}

  public getUser(): Observable<User> {
    return this.apiService
      .get<any>(`${this.baseUrl}`)
      .pipe(map((resData) => resData.payload));
  }

  public updateUser(data: User): Observable<User> {
    const formData = new FormData();

    for (const value in data) {
      const key = value as keyof User;

      if (data[key]) {
        formData.append(value, data[key] as string);
      }
    }

    return this.apiService
      .post<any>(`${this.baseUrl}?_method=PUT`, formData)
      .pipe(map((resData) => resData.payload));
  }
  public logout(): Observable<any> {
    return this.apiService.get<any>(`${this.baseUrl}/logout`);
  }
}
