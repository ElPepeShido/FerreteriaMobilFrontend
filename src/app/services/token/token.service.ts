import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token:string, id: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user_id', id);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getId(): string | null {
    return localStorage.getItem('user_id');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }
  removeId(): void {
    localStorage.removeItem('user_id');
  }
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

}
