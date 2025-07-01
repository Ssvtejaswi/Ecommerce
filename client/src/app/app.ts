import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { HttpClient } from '@angular/common/http';
import { Product } from './shared/modules/product';
import { Pagination } from './shared/modules/pagination';
// Correct the path if necessary
import { Shop } from './core/services/shop';


// Import NgFor directive
// import { NgForOf } from '@angular/common';
import { ShopC } from "./features/shop/shopC";

@Component({
  selector: 'app-root',
  imports: [Header, ShopC],  // <-- Add NgFor here
  templateUrl: './app.html',
  styleUrls: ['./app.scss']  // <-- fix typo: styleUrls (plural)
})
export class App {
 title = 'Ecommerce';
}