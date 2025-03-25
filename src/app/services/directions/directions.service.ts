import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DirectionsService {

  constructor(private http: HttpClient) { }

  protected readonly url = environment.apiUrl;

  getDirections(id: string):Observable<any>{
    return this.http.get(`${this.url}/direction/${id}`);
  }

  setDirections(direction: any): Observable<any> {
    return this.http.post(`${this.url}/direction`, direction);
  }

  updateDirections(id: string, direction: any): Observable<any>{
    return this.http.put(`${this.url}/direction/${id}`, direction);
  }

  deleteDirections(id: string): Observable<any>{
    return this.http.delete(`${this.url}/direction/${id}`);
  }
}