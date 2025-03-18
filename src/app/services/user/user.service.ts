import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import {  } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  protected readonly url="http://127.0.0.1:8000/api"

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

  getAuthenticatedUser(): Observable<User> {
    const token = localStorage.getItem('token');
    const UserID = localStorage.getItem('user_id');
    console.log('User ID:', UserID);
    console.log('Token:', token);
    
    return this.http.get<User>(`${this.url}/user/${UserID}`);
  }
 
}
