import { Injectable } from '@angular/core';
import { ApiService } from "../../../core/services/api.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VerifyEmailService {

  private baseUrl = 'auth/verify-email'
  constructor(
      private readonly apiService: ApiService
  ) { }

  public verify(): Observable<any> {
    return this.apiService.get<any>(this.baseUrl);
  }

  public verification(userId: string, token: string): Observable<any> {
    return this.apiService.get<any>(`${this.baseUrl}/${userId}/${token}`);
  }

  public resend(): Observable<any> {
    return this.apiService.get<any>(  `${this.baseUrl}/resend`);
  }
}
