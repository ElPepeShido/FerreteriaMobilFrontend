import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from 'src/app/interfaces/sensor';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http: HttpClient) { }

  protected readonly url = environment.apiUrl;

  getSensors(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(`${this.url}/sensor`);
  }

  // Enviar nuevos datos de sensores
  createSensor(data: Sensor): Observable<Sensor> {
    return this.http.post<Sensor>(`${this.url}/sensor`, data);
  }
}