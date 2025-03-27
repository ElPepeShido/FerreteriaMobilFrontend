import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Sell } from 'src/app/interfaces/sell';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  protected readonly url = environment.apiUrl;

  @Injectable({
    providedIn: 'root',
  })
  
    // Obtener todas las ventas
    getSells(): Observable<Sell[]> {
      return this.http.get<Sell[]>(`${this.url}/sells`);
    }
  
    // Obtener una venta específica
    getSellById(id: string): Observable<Sell> {
      return this.http.get<Sell>(`${this.url}/sells/${id}`);
    }
  
    // Crear una nueva venta
    createSell(clientId: string, data: Partial<Sell>): Observable<Sell> {
      return this.http.post<Sell>(`${this.url}/sells/${clientId}`, data);
    }
  
    // Eliminar una venta
    deleteSell(id: string): Observable<any> {
      return this.http.delete(`${this.url}/sells/${id}`);
    }
  
    // Obtener ganancias mensuales
    getMonthlyEarnings(): Observable<any> {
      return this.http.get(`${this.url}/ganancias`);
    }
}
