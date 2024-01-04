import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from "../../../core/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class VerifyPhoneService {
  private baseUrl = 'auth/verify-email'
  constructor(
      private readonly apiService: ApiService
  ) { }

  public verify(): Observable<any> {
    return this.apiService.get<any>(this.baseUrl);
  }

  public verification(userId: string, code: string): Observable<any> {
    return this.apiService.get<any>(`${this.baseUrl}/${userId}/${code}`);
  }

  public resend(): Observable<any> {
    return this.apiService.get<any>(  `${this.baseUrl}/resend`);
  }
}
