import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';
import { FormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular'; // Importación corregida

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    email: '',
    password: ''
  };
  errors: any;
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private toastController: ToastController
  ) {}

  async showErrorToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color: 'danger'
    });
    await toast.present();
  }

  login(): void {
    this.cleanErrors();
    this.authService.login(this.user).subscribe(
      response => {
        this.tokenService.setToken(response.token, response.User.id);
        this.router.navigateByUrl('/my-perfil');
      },
      (error) => {
        console.error('Error en login', error);
        this.errorMessage = error.error?.message || 'Credenciales no válidas';
        this.showErrorToast(this.errorMessage ?? 'Error desconocido');
      }
    );
  }

  private cleanErrors(): void {
    this.errorMessage = null;
  }

  ngOnInit() {}
}
