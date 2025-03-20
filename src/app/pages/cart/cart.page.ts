import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit() {
  }

  goToPay(){
    this.Router.navigate(['/buy']);  // Navigate to payment page
  }
}
