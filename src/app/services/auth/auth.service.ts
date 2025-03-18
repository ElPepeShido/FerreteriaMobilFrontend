import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _storage: Storage | null = null;
  private TOKEN_KEY = 'token';
  private USER_KEY = 'user';

  constructor(private router: Router, private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  // Guardar sesión
  async saveSession(token: string, user: any) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  console.log('Sesión guardada:', { token, user });
}

  // Obtener el token
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  

  // Obtener información del usuario
  getUser(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
  // Verificar si el usuario está autenticado
  async isAuthenticated(): Promise<boolean> {
    const token = localStorage.getItem("token");
    console.log("Verificando autenticación. Token encontrado:", token);
    return !!token; // Retorna true si hay token, false si no hay
  }

  // Cerrar sesión
  async logout() { // !! CAMBIARLO A LocalStorage
    await this._storage?.remove(this.TOKEN_KEY);
    await this._storage?.remove(this.USER_KEY);
    this.router.navigate(['/login']);
  }
  
  
}
