import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  standalone: false,
  selector: 'app-my-perfil',
  templateUrl: './my-perfil.page.html',
  styleUrls: ['./my-perfil.page.scss'],
})
export class MyPerfilPage implements OnInit {
  private crud:UserService;
  protected User: User = {} as User;
  protected userId:string = localStorage.getItem('user_id') || "";
  constructor(crud:UserService) { 
    this.crud = crud;
    
  }
  
  ngOnInit() {
    this.getUser();
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
}
