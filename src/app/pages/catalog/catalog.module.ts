import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CatalogPageRoutingModule } from './catalog-routing.module';
import { CatalogPage } from './catalog.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppModule } from 'src/app/app.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogPageRoutingModule
  ],
  declarations: [
    CatalogPage,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CatalogPageModule {}
