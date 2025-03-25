import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/productos/products.service';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ToastController } from '@ionic/angular';

register();
@Component({
  standalone: false,
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  protected product: Product = {} as Product;
  protected message: string = '';


  slideOpts = {
    initialSlide: 0, // Empieza en la primera imagen
    speed: 400, // Velocidad de transición en ms
    loop: true, // Hacer que el carrusel sea infinito
    autoplay: {
      delay: 3000, // Cambia cada 3 segundos
    },
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private crudCart: CartService,
    private toastController: ToastController,
  ) {}
  ngOnInit() {
    const productId = localStorage.getItem('product_id');
    if (productId) {
      this.loadProduct(productId);
    }
  }

  protected loadProduct(id: string) {
    this.productService.getProductById(id).subscribe({
      next:async  (response) => {
        if (response) {
          this.product = response;
        } else {
          this.message = 'Producto no encontrado';
        }
      },
      error:async (error) => {
        console.error(error);
        this.message = 'Error al cargar el producto';
      },
      complete:async () => {
        console.log('La acción se completó correctamente');
      }
    });
  }

  protected sendToCart(productId: string) {
    const usrid = `${localStorage.getItem('user_id')}`;
    const cartproduct = {
      client_id: usrid,
      id: productId
    };
    this.crudCart.addToCart(cartproduct).subscribe({
      next: async (response) => {
        if (response) {  
          this.showToast('Producto agregado al carrito con éxito', 'success');
        }
      },
      error: async (error) => {
        console.error(error);
        this.showToast('Error al agregar al carrito', 'danger');
      },
      complete: () => {
        console.log('La acción se completó correctamente');
      }
    });
  }

  private async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,  
      position: 'top',
      color
    });
    await toast.present();
  }


}
