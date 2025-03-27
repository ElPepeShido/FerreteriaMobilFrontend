import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoogleCallbackPageRoutingModule } from './google-callback-routing.module';

import { GoogleCallbackPage } from './google-callback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleCallbackPageRoutingModule
  ],
  declarations: [GoogleCallbackPage]
})
export class GoogleCallbackPageModule {}
