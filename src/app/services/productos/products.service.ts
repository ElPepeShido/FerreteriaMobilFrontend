import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product, ProductResponse} from 'src/app/interfaces/product'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  protected readonly url ="http://127.0.0.1:8000/api/product";

  getProducts():Observable<any>{
    return this.http.get(this.url);
  }

  getProductById(id: string): Observable<Product> {
  
    return this.http.get<Product>(`${this.url}/${id}`);
  }
}
