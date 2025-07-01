import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{

  baseUrl = 'localhost://localhost:5001/api';
  private http=inject(HttpClient);
  protected title = 'Ecommerce';
  products : any[]=[];
  ngOnInit(): void {
      this.http.get<any>(this.baseUrl + '/products').subscribe({
        next:response => this.products = response.data,
        error:error => console.log(error),
        complete: () => console.log('Complete')
      })
  }
}
