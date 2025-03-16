import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://127.0.0.1:8000/api/login";

  constructor(private http: HttpClient) { }

  login(user: User){
    console.log("Servicio corriendo para consumir la API");
    console.log("Información mandada a la Api", user);
    // this.http.post(this.url, {email: user.email, password: user.password}).subscribe((res:any)=> {{
    //   localStorage.setItem("token",res.data.token);
    // }
    return this.http.post(this.url, {email: user.email, password: user.password})
  }
}