import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { isGuestGuard, isUserAuthenticatedGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate:[isGuestGuard]},
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-acount',
    loadChildren: () => import('./pages/create-acount/create-acount.module').then( m => m.CreateAcountPageModule)
  },
  {
    path: 'my-perfil',
    loadChildren: () => import('./pages/my-perfil/my-perfil.module').then( m => m.MyPerfilPageModule),
    canActivate: [isUserAuthenticatedGuard]
  },
  {
    path: 'catalog',
    loadChildren: () => import('./pages/catalog/catalog.module').then( m => m.CatalogPageModule)
  },
  {path: 'product-detail/:id',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)},
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule),
    canActivate: [isUserAuthenticatedGuard]
  },
  {
    path: 'close-session',
    loadChildren: () => import('./pages/close-session/close-session.module').then( m => m.CloseSessionPageModule),
    canActivate: [isUserAuthenticatedGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule),
    canActivate: [isUserAuthenticatedGuard]
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule),
    canActivate: [isUserAuthenticatedGuard]
  },
  {
    path: 'buy',
    loadChildren: () => import('./pages/buy/buy.module').then( m => m.BuyPageModule),
    canActivate: [isUserAuthenticatedGuard]
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./pages/order-detail/order-detail.module').then( m => m.OrderDetailPageModule),
    canActivate: [isUserAuthenticatedGuard]
  },
  {
    path: 'google-callback',
    loadChildren: () => import('./pages/google-callback/google-callback.module').then( m => m.GoogleCallbackPageModule)
  },
  {
    path: 'auth/callback',
    loadChildren: () => import('./pages/google-callback/google-callback.module').then(m => m.GoogleCallbackPageModule)
  },  {
    path: 'sensores',
    loadChildren: () => import('./pages/sensores/sensores.module').then( m => m.SensoresPageModule)
  }

  
   //{path:'**', component:NoFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
