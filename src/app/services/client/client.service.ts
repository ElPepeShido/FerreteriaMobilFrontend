import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente, ClienteResponse } from 'src/app/models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly baseUrl = 'http://127.0.0.1:8000/api/clientes';

  constructor(private http: HttpClient) {
    this.http = http;
  }


  guardar(cliente: Cliente, archivo: File | null): Observable<any> {
    const formData = new FormData();
    formData.append('id', cliente.id);
    formData.append('nombre', cliente.nombre);
    formData.append('apellido_paterno', cliente.apellido_paterno);
    formData.append('apellido_materno', cliente.apellido_materno);
    formData.append('email', cliente.email);
    formData.append('password', cliente.password);
    formData.append('estado', cliente.estado);
    formData.append('red_social', cliente.red_social);


    if (archivo) {
      formData.append('imagen1', archivo);
    }
    console.log('FormData a enviar:', formData);


    return this.http.post(this.baseUrl, formData);
  }
  obtenerCliente($id:string): Observable<ClienteResponse> {
    return this.http.get<ClienteResponse>(`${this.baseUrl}/${$id}`);
  }

}
