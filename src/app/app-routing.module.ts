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
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
},
{
    path: 'product',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
