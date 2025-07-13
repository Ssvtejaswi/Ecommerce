import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProductDetails } from './features/shop/product-details/product-details';
import { ShopC } from './features/shop/shopC';
import { TestError } from './features/test-error/test-error';
import { Notfound } from './shared/components/notfound/notfound';
import { Servererror } from './shared/components/servererror/servererror';
import { Cart } from './features/cart/cart';
import { Checkout } from './features/checkout/checkout';
import { Login } from './features/account/login/login';
import { Register } from './features/account/register/register';
import { authGuard } from './core/guards/auth-guard';
import { emptyCartGuard } from './core/guards/empty-cart-guard';


export const routes: Routes = [
    {path: '', component:Home},
    {path: 'shop', component: ShopC},
    {path: 'shop/:id',component:ProductDetails},
    {path: 'cart', component: Cart},
    {path: 'checkout', component: Checkout, canActivate: [authGuard, emptyCartGuard]},
    {path: 'account/login', component: Login},
    {path: 'account/register', component: Register},
    {path: 'account/login', component: Login},
    {path: 'account/register', component: Register},
    { path: 'test-error',component:TestError},
    {path: 'test-error', component: TestError},
    {path: 'not-found', component: Notfound},
    {path: 'server-error', component: Servererror},
    {path:'**', redirectTo: 'not-found', pathMatch: 'full'}

];
