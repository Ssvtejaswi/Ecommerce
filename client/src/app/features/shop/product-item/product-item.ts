import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../shared/modules/product';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-item',
  imports: [
    MatCard,
    MatCardContent,
    CurrencyPipe,
    MatCardActions,
    MatIcon,
    RouterLink
    // MatButton

  ],

  templateUrl: './product-item.html',
  styleUrl: './product-item.scss'
})

export class ProductItem {
  @Input() product?: Product;
  cartService = inject(CartService);
}
