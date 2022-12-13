import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
    private products: Array<any> = []

    get Products(): Array<any> { return this.products }

    constructor(private $product: ProductService)
    {
        $product.AddEvent.subscribe(v => $product.getPage().subscribe(data => this.products = data));

        $product.RemoveEvent.subscribe(data => {
            const index = this.products.findIndex(it => it.id == data.id);
            this.products.splice(index, 1);
        });

        $product.UpdatedEvent.subscribe(item => {

            const index = this.products.findIndex(it => it.id == item.id);
            this.products[index] = item.product
        })
    }

    ngOnInit()
    {
        this.$product.getPage().subscribe(data => this.products = data);
    }

    handelRemoveProduct(id : number)
    {
        this.$product.removeProduct(id);
    }

    handelUpdateProduct(product:any){
        this.$product.updateProduct(product);
    }
}
