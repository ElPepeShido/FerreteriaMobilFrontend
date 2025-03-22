import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartAddResponse, CartProduct } from 'src/app/interfaces/cart';
import { CartResponse } from 'src/app/interfaces/cartResponse';
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }


  public addToCart(cartproduct:CartProduct): Observable<CartAddResponse> {
    return this.http.post<CartAddResponse>(`${this.baseUrl}/cart/add`,cartproduct);
  }

  public getUserCart(userId:string):Observable<CartResponse>{
    return this.http.get<CartResponse>(`${this.baseUrl}/cart/${userId}`);
  }
}
