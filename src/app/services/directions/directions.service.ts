import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from 'src/app/interfaces/product';
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

  setDirections(){
    // TODO:Implementar codigo para guardar las direcciones en el storage
  }
}
