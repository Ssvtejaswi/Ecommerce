import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, of } from 'rxjs';
import { DeliveryMethod } from '../../shared/modules/DeliveryMethod';

@Injectable({
  providedIn: 'root'
})
export class Checkout {
   baseUrl = environment.apiUrl;
  private http = inject(HttpClient);
  deliveryMethods: DeliveryMethod[] = [];
  getDeliveryMethods() {
    if (this.deliveryMethods.length > 0) return of(this.deliveryMethods);
    return this.http.get<DeliveryMethod[]>(this.baseUrl + 'payments/delivery-methods').pipe(
      map(methods => {
        this.deliveryMethods = methods.sort((a,b) => b.price - a.price);
        return methods;
      })
    )
  }
}
