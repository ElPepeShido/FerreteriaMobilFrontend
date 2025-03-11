import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPerfilPageRoutingModule } from './my-perfil-routing.module';

import { MyPerfilPage } from './my-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPerfilPageRoutingModule
  ],
  declarations: [MyPerfilPage]
})
export class MyPerfilPageModule {}
