import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, userResponse } from 'src/app/interfaces/user';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  saveUser(user: User, archivo: File | null): Observable<any> {
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email);
    formData.append('phone', user.phone);
    formData.append('password', user.password);
    formData.append('socialMedia', user.socialMedia);

    if (archivo) {
      formData.append('image', archivo);
    }
    return this.http.post(`${this.url}/register`, formData);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/user/${id}`);
  }

  // Método actualizado para responder con userResponse
  getAuthenticatedUser(): Observable<userResponse> {
    const UserID = localStorage.getItem('user_id');
    return this.http.get<userResponse>(`${this.url}/user/${UserID}`); 
  }
}