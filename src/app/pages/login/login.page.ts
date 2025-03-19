import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';
import { FormsModule } from '@angular/forms';

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

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  login(): void {
    this.cleanErrors();
    this.authService.login(this.user).subscribe(
      response => {
        this.tokenService.setToken(response.token, response.User.id);
        this.router.navigateByUrl('/my-perfil');
      },
      errors => {
        console.error('Error in login', errors);
      }
    );
  }

  private cleanErrors(): void {
    this.errors = null;
  }

  ngOnInit() {}
}
