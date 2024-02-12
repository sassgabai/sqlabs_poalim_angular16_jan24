import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent {
  @Output() newProductEmitter = new EventEmitter();

  newProduct: Product;
  newProductForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    name: new FormControl('', Product.standardValidators),
    price: new FormControl(null, [Validators.required, Validators.min(0.01), ProductNewComponent.productPriceValidator]),
  })

  onSubmit() {
    if (this.newProductForm.valid) {
      this.newProduct = new Product(
        parseInt(this.newProductForm.value.id!),
        this.newProductForm.value.name!,
        parseFloat(this.newProductForm.value.price!)
      )
    };
  }

  constructor() {
    this.newProduct = new Product();
  }

  saveNewProduct() {
    this.newProductEmitter.emit(this.newProduct);
  }

  static productPriceValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value < 1000) {
      return { 'productId': true };
    }
    return null;
  }
}

