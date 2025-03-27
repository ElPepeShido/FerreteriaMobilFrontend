import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegister } from 'src/app/interfaces/user-register';
import { AuthCredentials } from 'src/app/interfaces/auth-credentials';
import { environment } from "src/environments/environment";
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

   private readonly url = environment.apiUrl;

  constructor(private http: HttpClient,private tokenService:TokenService) { }

  login(credentials: AuthCredentials): Observable<any> {
    return this.http.post(`${this.url}/login`, credentials);
  }

  register(user: UserRegister): Observable<any> {
    return this.http.post(`${this.url}/register`, user)
  }

  logout(): Observable<any> {
    return this.http.post(`${this.url}/logout`,{});
  }

  loginWithGoogle(): void {
    window.location.href = `${this.url}/auth/google`;  // 🔹 Esto redirige primero a Google
  }

  handleGoogleResponse(response: any): void {
    const { user, token } = response;
  
    if (user && token) {
      this.tokenService.setToken(token, user.id);
      console.log('Usuario autenticado:', user);
    }
  }
}
