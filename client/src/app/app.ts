import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { HttpClient } from '@angular/common/http';
import { Product } from './shared/modules/product';
import { Pagination } from './shared/modules/pagination';

// Import NgFor directive
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Header, NgForOf],  // <-- Add NgFor here
  templateUrl: './app.html',
  styleUrls: ['./app.scss']  // <-- fix typo: styleUrls (plural)
})
export class App implements OnInit {
  baseUrl = 'http://localhost:5001/api';
  private http = inject(HttpClient);
  protected title = 'Ecommerce';
  products: Product[] = [];

  trackById(index: number, item: Product) {
    return item.id;
  }

  ngOnInit(): void {
    this.http.get<Pagination<Product>>(this.baseUrl + '/products').subscribe({
      next: response => this.products = response.data,
      error: error => console.log(error),
      complete: () => console.log('Complete')
    });
  }
}
