import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/interfaces/user';
import { Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showToast = false;
  errorMessage = "";
  user:User = {
    id: "",
    name: "",
    last_name: "",
    image: "",
    email: "",
    password: "",
    phone: "",
    rfc: "",
    role: "",
    google_id: "",
  };
  constructor(private loginService: LoginService,) { }  // TODO agregar router 
  ngOnInit() {
  }
  login() {
    this.loginService.login(this.user).subscribe(
      (response) => {
        console.log("User logged in:", response);
      },
      (error) => {
        this.errorMessage = "Correo o contraseña incorrectos";
        this.showToast = true;
      }
    );
  }
    // TODO: redireccionar al dashboard o al home según el role del usuario logueado.
}
