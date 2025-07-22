import { Component, inject, Input } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { ConfirmationToken } from '@stripe/stripe-js';
import { AddressPipe } from '../../../shared/Pipes/address-pipe';
import { PaymentCardPipe } from '../../../shared/Pipes/payment-card-pipe';

@Component({
  selector: 'app-checkout-review',
  imports: [
    CurrencyPipe,
    AddressPipe, // Make sure AddressPipe is exported as 'standalone: true'
    PaymentCardPipe // Make sure PaymentCardPipe is exported as 'standalone: true'
  ],
  templateUrl: './checkout-review.html',
  styleUrl: './checkout-review.scss'
})
export class CheckoutReview {
   cartService = inject(CartService);
  @Input() confirmationToken?: ConfirmationToken;
}
