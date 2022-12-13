import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ProductComponent,
        ProductListComponent,
        ProductCreateComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        ReactiveFormsModule
    ],
    providers: [ProductService]
})
export class ProductModule { }
