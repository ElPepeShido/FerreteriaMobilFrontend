import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private readonly url= environment.apiUrl;

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
  
  getUser(id:string): Observable<User> {
    return this.http.get<User>(`${this.url}/user/${id}`);
  }

  // Método para obtener al usuario autentificado
  getAuthenticatedUser(): Observable<User> {
    // Obtenemos el id del localStorage
    const UserID = localStorage.getItem('user_id');
    // Hacemos la petición a la API para obterner el id del usuario autentificado.
    return this.http.get<User>(`${this.url}/user/${UserID}`); 
  }
}
