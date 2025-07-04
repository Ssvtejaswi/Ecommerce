import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notfound',
  imports: [
    MatIcon,
    MatButton,
    RouterLink
  ],
  templateUrl: './notfound.html',
  styleUrl: './notfound.scss'
})
export class Notfound {

}
