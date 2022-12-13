import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FProductCreate } from '../../forms/product.form';
import { ProductService } from './../../services/product.service';

@Component({
    selector: 'product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent {
    private form: FormGroup = FProductCreate();
    private productId: number | null = null;

    get Form(): FormGroup { return this.form; }

    constructor(
        private $product: ProductService

    ) {
        $product.UpdateEvent.subscribe(product => {
            this.form.patchValue(product)
            this.productId = product.id;
        })
    }

    handleSubmitAction() {
        if (this.form.valid && !this.productId) {
            this.$product.addProduct(this.form.value)
        } else  if (this.form.valid && this.productId) {
            this.$product.updateProduct(this.form.value, this.productId).subscribe()
            this.$product.UpdatedEvent = {id: this.productId, product: this.form.value};
        }
    }

}
