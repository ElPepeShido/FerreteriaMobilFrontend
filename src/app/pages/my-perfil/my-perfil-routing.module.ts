import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPerfilPage } from './my-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: MyPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPerfilPageRoutingModule {}
