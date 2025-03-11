import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  standalone: false,
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  slideOpts = {
    initialSlide: 0, // Empieza en la primera imagen
    speed: 400, // Velocidad de transición en ms
    loop: true, // Hacer que el carrusel sea infinito
    autoplay: {
      delay: 3000, // Cambia cada 3 segundos
    },
  };

  constructor() {}
  ngOnInit() {
  }
}
