import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegister } from 'src/app/interfaces/user-register';
import { AuthCredentials } from 'src/app/interfaces/auth-credentials';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private readonly url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(credentials: AuthCredentials): Observable<any> {
    return this.http.post(`${this.url}/login`, credentials);
  }

  register(user: UserRegister): Observable<any> {
    return this.http.post(`${this.url}/register`, user)
  }

  logout(): Observable<any> {
    localStorage.removeItem('user_id');
    return this.http.post(`${this.url}/logout`, {});
  }
}