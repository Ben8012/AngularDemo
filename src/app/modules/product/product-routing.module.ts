import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
    {
        path: '', component: ProductComponent, children: [
            { path: 'create', component: ProductCreateComponent },
            { path: '**', redirectTo: 'list', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
