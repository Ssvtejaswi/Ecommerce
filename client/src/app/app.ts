import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { HttpClient } from '@angular/common/http';
import { Product } from './shared/modules/product';
import { Pagination } from './shared/modules/pagination';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{

  baseUrl = 'https://localhost:5001/api';
  private http=inject(HttpClient);
  protected title = 'Ecommerce';
  products : Product[]=[];
  ngOnInit(): void {
      this.http.get<Pagination<Product>>(this.baseUrl + '/products').subscribe({
        next:response => this.products = response.data,
        error:error => console.log(error),
        complete: () => console.log('Complete')
      })
  }
}
