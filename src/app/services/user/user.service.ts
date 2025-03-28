import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, userResponse } from 'src/app/interfaces/user';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly  url = environment.apiUrl;
  private readonly  UserID = localStorage.getItem('user_id');

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
    console.log('id guardado en storge: '+ this.UserID);
    return this.http.get<userResponse>(`${this.url}/user/${this.UserID}`); 
  }
  updateUser(user: User, formData:FormData ): Observable<any>{
    formData.forEach((value, key) => {
      console.log('data enviada: ');
      console.log(key, value);
    });
    return this.http.put<any>(`${this.url}/user/${this.UserID}`, formData);
  }
}