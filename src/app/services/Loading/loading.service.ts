import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading: any;

  constructor(private loadingCtrl: LoadingController) { }

  // Mostrar el loading
  async presentLoading(message: string = 'Cargando datos...') {
    this.loading = await this.loadingCtrl.create({
      message: message,
      spinner: "circles",
      translucent: true,
      keyboardClose: true,
      cssClass: 'custom-loading'
    });
    await this.loading.present();
  }

  // Ocultar el loading
  async dismissLoading() {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }
}
