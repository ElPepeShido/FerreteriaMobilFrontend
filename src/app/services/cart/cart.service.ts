import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http:HttpClient) { }


  addToCart(productId: string,clientID:string): Observable<any> {
    return this.http.post(`${this.baseUrl}/cart/${productId}/more`,clientID);
  }
  
}
