import { Injectable } from "@angular/core";
import { ApiService } from "../../../core/services/api.service";
import { Observable, tap } from "rxjs";

interface AuthResponse { 
    token: string;
    user: { id:number; email: string }
}

const loginUrl = '/api/auth/login';
const registerUrl = '/api/auth/register';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private api: ApiService) {}

    login(email: string, password: string): Observable<AuthResponse> {
        return this.api.post<AuthResponse>(loginUrl, {email, password})
        .pipe(
            tap(res => localStorage.setItem('token', res.token))
        );
    }

    register(email: string, password: string): Observable<AuthResponse> {
        return this.api.post<AuthResponse>(registerUrl, { email, password })
        .pipe(
            tap(res => localStorage.setItem('token', res.token))
        );
    }

    logout() {
        localStorage.removeItem('token');
    }

    getToken(): string | null {
        return localStorage.getItem('token')
    }
}