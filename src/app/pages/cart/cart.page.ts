import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart} from 'src/app/interfaces/cartResponse';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  standalone: false,
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

   cart: Cart = {} as Cart;

  constructor(private Router: Router,private apicart:CartService) { }

  ngOnInit() {
    this.getUserCart();
  }

  goToPay(){
    this.Router.navigate(['/buy']); 
  }

  private getUserCart(){
    const userId = `${localStorage.getItem('user_id')}`;
    this.apicart.getUserCart(userId).subscribe({
      next: (response) => {
        console.log('Carrito del usuario:', response);
        this.cart = response.data[0];
      },
      error: (error) => {
        console.error('Error al obtener el carrito:', error);
      },
      complete: () => {
        console.log('La acción se completó correctamente');
      }
    });
  }
  protected incrementOne(id:string){
    const userId = `${localStorage.getItem('user_id')}`;

    const cartproduct = {
      client_id: userId,
      id: id
    };
    this.apicart.incrementOne(cartproduct).subscribe({
      next: (response) => {
        console.log('Producto agregado al carrito:', response);
        this.getUserCart();
      },
      error: (error) => {
        console.error('Error al agregar producto al carrito:', error);
      },
      complete: () => {
        console.log('La acción se completó correctamente');
      }
    });

  }

  protected decrementOne(id:string){
    const userId = `${localStorage.getItem('user_id')}`;
    
    const cartproduct = {
      client_id: userId,
      id: id
    };
    this.apicart.decrementOne(cartproduct).subscribe({
      next: (response) => {
        console.log('Producto agregado al carrito:', response);
        this.getUserCart();
      },
      error: (error) => {
        console.error('Error al agregar producto al carrito:', error);
      },
      complete: () => {
        console.log('La acción se completó correctamente');
      }
    });

  }

  protected deleteProduct(id:string){
    const userId = `${localStorage.getItem('user_id')}`;
    
    const cartproduct = {
      client_id: userId,
      id: id
    };
    this.apicart.deleteProduct(cartproduct).subscribe({
      next: (response) => {
        console.log('Producto eliminado.:', response);
        this.getUserCart();
      },
      error: (error) => {
        console.error('Error al eliminar el  producto del carrito:', error);
      },
      complete: () => {
        console.log('La acción se completó correctamente');
      }
    });

  }
  
  
}
