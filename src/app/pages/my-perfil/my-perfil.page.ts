import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client/client.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  standalone: false,
  selector: 'app-my-perfil',
  templateUrl: './my-perfil.page.html',
  styleUrls: ['./my-perfil.page.scss'],
})
export class MyPerfilPage implements OnInit {
  private crud:ClientService;
  protected cliente: Cliente = {} as Cliente;

  constructor(crud:ClientService) { 
    this.crud = crud;
  }

  ngOnInit() {
    this.obtenerCliente();
  }
  obtenerCliente(){
    this.crud.obtenerCliente('67d315ca03861b4b0e0be744').subscribe(

      response => {
        console.log('Cliente obtenido:', response);
        if (Array.isArray(response.data) && response.data.length > 0) {
          this.cliente = response.data[0];
        } else {
          console.warn('No se encontraron datos del cliente');
          this.cliente = {} as Cliente;  
        }
      
      },
      error => {
        console.error('Error al obtener cliente:', error.error);
        this.cliente = {} as Cliente; 
      }
    );
  }
}
