import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() selectedProduct?: Product;
  @Input() isProductInCart?: boolean;
  @Output() addToCartEmitter = new EventEmitter();
  @Output() removeFromCartEmitter = new EventEmitter();

  addToCart(product: Product) {
    this.addToCartEmitter.emit(product);
  }

  removeFromCart(product: Product) {
    this.removeFromCartEmitter.emit(product);
  }
}
