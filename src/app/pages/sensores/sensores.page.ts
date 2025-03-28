import { Component, OnInit } from '@angular/core';
import { Sensor } from 'src/app/interfaces/sensor';
import { SensorService } from 'src/app/services/sensor/sensor.service';

@Component({
  standalone: false,
  selector: 'app-sensores',
  templateUrl: './sensores.page.html',
  styleUrls: ['./sensores.page.scss'],
})
export class SensoresPage implements OnInit {

  sensores: Sensor[] = [];

  constructor(private sensorService: SensorService) { }

  ngOnInit() {
    this.obtenerSensores(); // carga inicial
    setInterval(() => {
      this.obtenerSensores(); // se repite cada 10 segundos
    }, 10000);
  }

  obtenerSensores() {
    this.sensorService.getSensors().subscribe({
      next: (response: any) => {
        this.sensores = response.data; // <- aquí la API devuelve en "data"
        console.log('Sensores:', this.sensores);
      },
      error: (error) => {
        console.error('Error al obtener sensores:', error);
      }
    });
  }
}