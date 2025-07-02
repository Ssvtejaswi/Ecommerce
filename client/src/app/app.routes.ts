import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProductDetails } from './features/shop/product-details/product-details';
import { ShopC } from './features/shop/shopC';

export const routes: Routes = [
    {path: '', component:Home},
    {path: 'shop', component: ShopC},
    {path: 'shop/:id',component:ProductDetails},
    {path:'**', redirectTo: '', pathMatch: 'full'}

];
