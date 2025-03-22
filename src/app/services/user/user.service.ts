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

  protected readonly url= environment.apiUrl;

  // guardar(user: User, archivo: File | null): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('id', user.id);
  //   formData.append('nombre', user.name);
  //   formData.append('email', user.email);
  //   formData.append('password', user.password);

  //   if (archivo) {
  //     formData.append('image', archivo);
  //   }
  //   console.log('FormData a enviar:', formData);


  //   return this.http.post(this.url, formData);
  // }
  
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
