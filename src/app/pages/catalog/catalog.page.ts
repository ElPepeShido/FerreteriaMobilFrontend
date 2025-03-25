import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/productos/products.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user';
import { Product } from 'src/app/interfaces/product';
import { LoadingController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {

  protected user: User = {} as User;
  private loading: HTMLIonLoadingElement | null = null;
  protected productsList: Product[] = [];

  constructor(
    private api: ProductsService,
    private router: Router,
    private crudUser: UserService,
    private loadingCtrl: LoadingController) {
    this.crudUser = crudUser;
  }

  async ngOnInit() {
    await this.presentLoading();
    this.getProducts();
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando productos...',
      spinner: 'circular',
      translucent: true,
      keyboardClose: true,
      cssClass: 'custom-loading'
    });
    await this.loading.present();
  }
  async getProducts() {
    this.api.getProducts().subscribe({
      next: async (response) => {
        this.productsList = response.data;
      },
      error: async (error) => {
        console.error('Error al obtener los productos:', error);
      },
      complete: () => {
        this.dismissLoading();
      }
    })
  }

  private async dismissLoading() {
    if (this.loading) {
      await this.loading.dismiss(); // Asegurarse de llamar dismiss() correctamente
      this.loading = null; // Resetear la variable
    }
  }

  // async getCurrentUser() {
  //   this.crudUser.getAuthenticatedUser().subscribe({
  //     next: async (response) => {
  //       this.user = response;
  //     },
  //     error: async (error) => {
  //       console.error('Error al obtener el usuario:', error);
  //     },
  //     complete: () => {
  //       console.log('La acción se completó correctamente');
  //     }
  //   });
  // }

  goToProductDetail(productId: string) {
    localStorage.setItem('product_id', productId);
    this.router.navigate(['/product-detail', productId]);
  }

  async handleRefresh(event: CustomEvent) {
    try {
      await this.getProducts(); // Espera a que la función termine
    } catch (error) {
      console.error('Error al obtener productos', error);
    } finally {
      (event.target as HTMLIonRefresherElement).complete(); // Finaliza el refresher
    }
  }

}
