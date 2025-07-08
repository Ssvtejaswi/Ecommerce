import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatBadge } from '@angular/material/badge';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatProgressBar } from '@angular/material/progress-bar';
import { BusyService } from '../../core/services/busy';
import { CartService } from '../../core/services/cart.service';
import { App } from "../../app";
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { Account } from '../../core/services/account';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatButton,
    MatBadge,
    RouterLink,
    RouterLinkActive,
    MatProgressBar,
    MatMenuTrigger,
    MatMenu,
    MatDivider,
    MatMenuItem
],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
    busyService = inject(BusyService);
    cartService = inject(CartService);
    accountService = inject(Account);
  private router = inject(Router);

  logout() {
    this.accountService.logout().subscribe({
      next: () => {
        this.accountService.currentUser.set(null);
        this.router.navigateByUrl('/');
      }
    })
  }
}
