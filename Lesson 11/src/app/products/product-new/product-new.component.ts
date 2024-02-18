import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent {
  @Output() newProductEmitter = new EventEmitter();

  newProductForm = new FormGroup({
    name: new FormControl('', Product.standardValidators),
    price: new FormControl(null, [Validators.required, Validators.min(0.01), ProductNewComponent.productPriceValidator]),
  })

  onSubmit() {
    if (this.newProductForm.valid) {
      const product = new Product(
        -1,
        this.newProductForm.value.name!,
        parseFloat(this.newProductForm.value.price!)
      )

      this.productService.addProduct(product).subscribe(p => {
        product.id = p.id;
        this.newProductEmitter.emit(product);
      });
    };
  }

  constructor(private productService: ProductService) {
  }

  static productPriceValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value < 1000) {
      return { 'productId': true };
    }
    return null;
  }
}

