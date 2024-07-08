import { Routes } from '@angular/router';
import { HomeComponent } from './components/layouts/shared/home/home.component';
import { AboutComponent } from './components/layouts/shared/about/about.component';
import { FaqComponent } from './components/layouts/shared/faq/faq.component';
import { CartComponent } from './components/layouts/shared/cart/cart.component';
import { RegisterComponent } from './components/layouts/shared/register/register.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home', pathMatch:'full'},
    {path: 'home',component:HomeComponent},
    {path: 'about',component:AboutComponent},
    {path: 'faq',component:FaqComponent},
    {path: 'cart',component:CartComponent},
    {path: 'register',component:RegisterComponent}
];
