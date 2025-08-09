import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item";
import { OrderSummaryComponent } from "../../shared/components/order-summary/order-summary";
import { EmptyState } from "../../shared/components/empty-state/empty-state";
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent, EmptyState],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  private router = inject(Router);
  cartService = inject(CartService);
  onAction() {
    this.router.navigateByUrl('/shop');
  }
  
}