import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {

  productsList: any[]= [];
  constructor(private api:ProductsService, private router: Router) { }

  ngOnInit() {
    this.api.getProducts().subscribe((response)=>{
      console.log(response);
      this.productsList= (response.productos);
    })
  }

  goToProductDetail(productId: string) {
    this.router.navigate(['/product-detail', productId]);
  }
}
