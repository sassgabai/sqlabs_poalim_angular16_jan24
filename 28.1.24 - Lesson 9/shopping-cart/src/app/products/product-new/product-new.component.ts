import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent {
  @Output() newProductEmitter = new EventEmitter();
  newProduct?: Product;
  newProductForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    price: new FormControl(null, [Validators.required, Validators.min(0.01)])
  })

  constructor() {}

  onSubmit() {
    if (this.newProductForm.valid) {
      this.newProduct = new Product(
        this.newProductForm.value.id!,
        this.newProductForm.value.name!,
        this.newProductForm.value.price!,
      );

      this.newProductEmitter.emit(this.newProduct);
    }
  }
}
