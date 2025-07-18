import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../../../shared/modules/product';
import { inject } from '@angular/core';
import { Shop } from '../../../core/services/shop';
import { ActivatedRoute } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [
    MatButton,
    MatIcon,
    MatFormField,
    CurrencyPipe,
    MatInput,
    MatLabel,
    MatDivider,
    FormsModule
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails implements OnInit {
  ngOnInit(): void {
    this.loadProduct();
  }
 
  private shopService= inject(Shop);
  private activatedRoute= inject(ActivatedRoute);
  private cartService = inject(CartService);
  product?:Product;
  quantityInCart = 0;
  quantity = 1;


  loadProduct() {
   const id=this.activatedRoute.snapshot.paramMap.get('id');
   if(!id) return;
   this.shopService.getProduct(+id).subscribe({
     next: product => {
        this.product = product;
        this.updateQuantityInCart();
      },
     error: error => console.log(error)
   });
  }

  updateCart() {
    if (!this.product) return;
    if (this.quantity > this.quantityInCart) {
      const itemsToAdd = this.quantity - this.quantityInCart;
      this.quantityInCart += itemsToAdd;
      this.cartService.addItemToCart(this.product, itemsToAdd);
    } else {
      const itemsToRemove = this.quantityInCart - this.quantity;
      this.quantityInCart -= itemsToRemove;
      this.cartService.removeItemFromCart(this.product.id, itemsToRemove);
    }
  }

  updateQuantityInCart() {
    this.quantityInCart = this.cartService.cart()?.items
      .find(x => x.productId === this.product?.id)?.quantity || 0;
    this.quantity = this.quantityInCart || 1;
  }

  getButtonText() {
    return this.quantityInCart > 0 ? 'Update cart' : 'Add to cart'
  }

}
