import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/productos/products.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  standalone: false,
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {
  private crudUser:UserService;
  protected user: User[] = {} as User[];

  protected productsList: any[]= [];

  constructor(private api:ProductsService, private router: Router,crudUser:UserService) { 
    this.crudUser = crudUser;
  }

  ngOnInit() {
   this.getProducts();
   this.getCurrentUser();
  }

  getProducts(){
    this.api.getProducts().subscribe(response => {
      console.log(response);
      this.productsList = response.PaginationData.data;

    }, err => {
      console.error(err);
    });
  }

  getCurrentUser(){
    this.crudUser.getAuthenticatedUser().subscribe(response =>{
      console.log(response);
      this.user = [response];
      console.log(this.user);
    },error=>{
      console.error(error);
    })
  }

  goToProductDetail(productId: string) {
    this.router.navigate(['/product-detail', productId]);
  }
}
