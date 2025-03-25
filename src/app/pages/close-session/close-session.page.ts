import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  standalone: false,
  selector: 'app-close-session',
  templateUrl: './close-session.page.html',
  styleUrls: ['./close-session.page.scss'],
})
export class CloseSessionPage implements OnInit {

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.tokenService.removeToken();
    this.tokenService.removeId();
    this.router.navigate(['/login']);
    console.log('id recuperado de el cierre de session' + `${this.tokenService.getId()}`);
    console.log('Sesión cerrada');
  }

  goBack(){
    this.router.navigate(['/catalog']);
  }
}
