import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user';
import { Direction } from 'src/app/interfaces/direction';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonModal } from '@ionic/angular';
import { DirectionsService } from 'src/app/services/directions/directions.service';

@Component({
  standalone: false,
  selector: 'app-my-perfil',
  templateUrl: './my-perfil.page.html',
  styleUrls: ['./my-perfil.page.scss'],
})
export class MyPerfilPage implements OnInit {
  private crud:UserService;
  private directions: DirectionsService;
  protected User: User = {} as User;
  protected directionsList: Direction[]= [];
  protected userId:string = localStorage.getItem('user_id') || "";

  constructor(crud:UserService, directions: DirectionsService) { 
    this.crud = crud;
    this.directions = directions;
  }
  
  ngOnInit() {
    this.getUser();
    this.getDirections
  }
  getUser() {
    this.crud.getAuthenticatedUser().subscribe(
      response => {
        console.log('Usuario obtenido:', response);
        
        if (response && typeof response === 'object' && Object.keys(response).length > 0) {
          this.User = response;
        } else {
          console.warn('No se encontraron datos del usuario');
          this.User = {} as User;  
        }
  
      },
      error => {
        console.error('Error al obtener usuario:', error.error);
        this.User = {} as User; 
      }
    );
  }

  getDirections(){
    this.directions.getDirections(this.userId).subscribe(
      response => {
        console.log('Direcciones obtenidas:', response);
        this.directionsList = response;
      },
    )
  }



  // ? SECCION DE EDITAR DIRECCIÓN

  @ViewChild('editarModal') editarModal!: IonModal;
  @ViewChild('crearModal') crearModal!: IonModal;

  message = 'Puedes tener un total de 3 direcciones distintas.';
  name!: string;

  cancel(modal: IonModal) {
    modal.dismiss(null, 'cancel');
  }

  confirm(modal: IonModal) {
    modal.dismiss(this.name, 'confirm');
  }
  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hello, ${event.detail.data}!`;
    }
  }

  // ! FIN DE SECCION DE EDITAR DIRECCIÓN

  // ? SECCION DEL ALERT PARA ELIMINAR LA DIRECCIÓN

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }

  // ! FIN SECCION DEL ALERT PARA ELIMINAR LA DIRECCIÓN
}
