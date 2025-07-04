import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProductDetails } from './features/shop/product-details/product-details';
import { ShopC } from './features/shop/shopC';
import { TestError } from './features/test-error/test-error';
import { Notfound } from './shared/components/notfound/notfound';
import { Servererror } from './shared/components/servererror/servererror';



export const routes: Routes = [
    {path: '', component:Home},
    {path: 'shop', component: ShopC},
    {path: 'shop/:id',component:ProductDetails},
    { path: 'test-error',component:TestError},
    {path: 'test-error', component: TestError},
    {path: 'not-found', component: Notfound},
    {path: 'server-error', component: Servererror},
    {path:'**', redirectTo: 'not-found', pathMatch: 'full'}

];
