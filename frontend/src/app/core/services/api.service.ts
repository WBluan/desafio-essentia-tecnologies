import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  private getHeaders() {
    const token = localStorage.getItem('token') || '';
    return { headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }) };
  }
  get<T>(url: string) {
    return this.http.get<T>(url, this.getHeaders()).pipe(catchError(this.handleError));
  }

  post<T>(url: string, body: any) {
    return this.http.post<T>(url, body, this.getHeaders()).pipe(catchError(this.handleError));
  }

  put<T>(url: string, body: any) {
    return this.http.put<T>(url, body, this.getHeaders()).pipe(catchError(this.handleError));
  }

  delete<T>(url: string) {
    return this.http.delete<T>(url, this.getHeaders()).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError(() => new Error(error.message || 'Erro desconhecido'));
  }
}
