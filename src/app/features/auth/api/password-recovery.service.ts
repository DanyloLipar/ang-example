import { Injectable } from '@angular/core';
import { ApiService } from "../../../core/services/api.service";
import { Observable } from "rxjs";
import { PasswordRecoveryCheckCode } from "../interfaces/password-recovery-check-code.interface";
import { PasswordRecoverySendCode } from "../interfaces/password-recovert-send-code.interface";

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryService {
  private baseUrl = 'auth/password-recovery'
  constructor(
      private readonly apiService: ApiService
  ) { }

  public checkCode(data: PasswordRecoveryCheckCode): Observable<any> {
    return this.apiService.post<PasswordRecoveryCheckCode>(this.baseUrl, data);
  }

  public sendCode(data: PasswordRecoverySendCode): Observable<any> {
    return this.apiService.post<PasswordRecoverySendCode>(this.baseUrl, data);
  }
}
