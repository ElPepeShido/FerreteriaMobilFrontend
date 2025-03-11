import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

register();
@Component({
  standalone: false,
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  product: any;

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
    private productService: ProductsService
  ) {
    
  }
  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.loadProduct(productId);
    }
  }

  loadProduct(id: string) {
    this.productService.getProductById(id).subscribe((data) => {
        this.product = data;
      },
      (error) => {
        console.error('Error al obtener el producto:', error);
      }
    );
  }
}
