import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  url="http://127.0.0.1:8000/api/productos";
  getProducts():Observable<any>{
    console.log("getProducts function in the service is already starting!");
    return this.http.get(this.url)
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
}
