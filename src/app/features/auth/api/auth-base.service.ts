import { Injectable } from "@angular/core";
import { ApiService } from "../../../core/services/api.service";
import { Google } from "../interfaces/google.interface";
import { Facebook } from "../interfaces/facebook.interface";
import { Observable } from "rxjs";
import { Login } from "../interfaces/login.interface";
import { Registration } from "../interfaces/registration.interface";

@Injectable({
  providedIn: "root",
})
export class AuthBaseService {
  baseUrl = "/auth";
  constructor(public readonly apiService: ApiService) {}

  public googleLogin(data: Google): Observable<any> {
    return this.apiService.post<Google>(`${this.baseUrl}/google`, data);
  }

  public facebookLogin(data: Facebook): Observable<any> {
    return this.apiService.post<Facebook>(`${this.baseUrl}/facebook`, data);
  }

  public register(data: Registration): Observable<any> {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("phone", data.phone);

    return this.apiService.post<Registration>(`${this.baseUrl}/register`, data);
  }

  public login(data: Login): Observable<any> {
    const formData = new FormData();
    formData.append("email_phone", data.email_phone);
    formData.append("password", data.password);

    return this.apiService.post<Login>(`${this.baseUrl}/login`, data);
  }

  public setPassword(): Observable<any> {
    return this.apiService.get<any>(`${this.baseUrl}/set-password/`);
  }
  public logout(): Observable<any> {
    return this.apiService.get<any>(`${this.baseUrl}/logout`);
  }
}
