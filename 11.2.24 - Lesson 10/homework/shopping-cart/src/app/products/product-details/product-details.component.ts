import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() productId?: number;
  @Input() isProductInCart?: boolean;
  @Output() addToCartEmitter = new EventEmitter();
  @Output() removeFromCartEmitter = new EventEmitter();

  selectedProduct?: Product;

  constructor(private productService: ProductService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['productId'] && this.productId) {
      this.productService.getProductById(this.productId!).subscribe({
        next: p => this.selectedProduct = p,
        error: err => {
          console.error(err);
          alert(err);
        }
      });
    }
  }

  ngOnInit(): void {
  }

  addToCart(productId: number) {
    this.addToCartEmitter.emit(productId);
  }

  removeFromCart(productId: number) {
    this.removeFromCartEmitter.emit(productId);
  }
}
