import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { User } from './interfaces/user';
import { UserService } from './services/user/user.service';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {

  user: User = {} as User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getAuthenticatedUser().subscribe(
      (response: any) => {
        console.log('Usuario obtenido en app.component:', response);
        if (response && response.data) {
          this.user = response.data;
        } else {
          this.user = {} as User;
          console.warn('No se encontraron datos del usuario en app.component');
        }
      },
      (error) => {
        console.error('Error al obtener usuario en app.component:', error);
        this.user = {} as User;
      }
    );
  }

}
