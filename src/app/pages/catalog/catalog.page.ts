import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/productos/products.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user';
import { Product } from 'src/app/interfaces/product';

@Component({
  standalone: false,
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {

  protected user: User = {} as User;

  protected productsList: Product[]= [];

  constructor(private api:ProductsService, private router: Router,private crudUser:UserService) { 
    this.crudUser = crudUser;
  }

  ngOnInit() {
    this.getProducts();
    
  }

  getProducts(){
    this.api.getProducts().subscribe({
      next: async (response) => {
        this.productsList = response.data;
      },
      error: async (error) => {
        console.error('Error al obtener los productos:', error);
      },
      complete: () => {
        console.log('La acción se completó correctamente');
      }
    })
  }

  getCurrentUser(){
    this.crudUser.getAuthenticatedUser().subscribe(response =>{
      console.log(response);
      this.user = response;
      console.log(this.user);
    },error=>{
      console.error(error);
    })
  }

  goToProductDetail(productId: string) {
    localStorage.setItem('product_id', productId);
    this.router.navigate(['/product-detail', productId]);
  }  
  
}
