import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token/token.service';

export const isUserAuthenticatedGuard: CanActivateFn = (route, state) => {
  
  const isAuthenticated = inject(TokenService).isAuthenticated();

  return isAuthenticated ? true : inject(Router).createUrlTree(['/login']);
};

export const isGuestGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = inject(TokenService).isAuthenticated();

  return !isAuthenticated ? true : inject(Router).createUrlTree(['/my-perfil']);
};
