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

@Component({
  selector: 'app-product-details',
  imports: [
    MatButton,
    MatIcon,
    MatFormField,
    CurrencyPipe,
    MatInput,
    MatLabel,
    MatDivider
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
  product?:Product;



  loadProduct() {
   const id=this.activatedRoute.snapshot.paramMap.get('id');
   if(!id) return;
   this.shopService.getProduct(+id).subscribe({
     next: product => this.product = product,
     error: error => console.log(error)
   });
  }

}
