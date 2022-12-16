import { AuthGuard } from './modules/security/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
    path: 'home',
    loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
},
{
    path: 'menu',
    loadChildren: () => import("./modules/menu/menu.module").then(m => m.MenuModule)
},
{
    path: 'contact',
    canActivate : [AuthGuard],
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
},
{
    path: 'product',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
},
{
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
},
{ path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) },
{ path: 'profil', loadChildren: () => import('./modules/profil/profil.module').then(m => m.ProfilModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
