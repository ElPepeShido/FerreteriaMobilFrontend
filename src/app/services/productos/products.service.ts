import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from 'src/app/interfaces/product';
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  protected readonly url = environment.apiUrl;

  getProducts():Observable<any>{
    return this.http.get(`${this.url}/product`);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }
}
