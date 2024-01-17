import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent {
  @Output() newProductEmitter = new EventEmitter();
  newProduct: Product;

  constructor() {
    this.newProduct = new Product();
  }

  saveNewProduct() {
    this.newProductEmitter.emit(this.newProduct);
  }
}
