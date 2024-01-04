export interface PasswordRecoveryCheckCode {
    id: string;
    code: string;
    password: string;
    password_confirmation: string;
}
