import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CloseSessionPageRoutingModule } from './close-session-routing.module';

import { CloseSessionPage } from './close-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CloseSessionPageRoutingModule
  ],
  declarations: [CloseSessionPage]
})
export class CloseSessionPageModule {}
