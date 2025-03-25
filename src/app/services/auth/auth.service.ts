import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegister } from 'src/app/interfaces/user-register';
import { AuthCredentials } from 'src/app/interfaces/auth-credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url = "https://emixtrex.com/api";

  constructor(private http: HttpClient) { }

  login(credentials: AuthCredentials): Observable<any> {
    return this.http.post(`${this.url}/login`, credentials);
  }

  register(user: UserRegister): Observable<any> {
    return this.http.post(`${this.url}/register`, user)
  }

  logout(): Observable<any> {
    return this.http.post(`${this.url}/logout`, {});
  }
}