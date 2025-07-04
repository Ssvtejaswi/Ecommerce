import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servererror',
  imports: [
    MatCard
  ],
  templateUrl: './servererror.html',
  styleUrl: './servererror.scss'
})
export class Servererror  {
  error?: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras.state?.['error'];
  }

}
