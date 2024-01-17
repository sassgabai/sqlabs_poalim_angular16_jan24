import { Component } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { PRODUCTS } from 'src/app/shared/models/products';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[];
  selectedProduct?: Product | false;
  isCreateProduct: boolean = false;

  constructor(private productService: ProductService) {
    this.products = [];
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onSelect(product: Product) {
    this.isCreateProduct = false;
    this.selectedProduct = product;
  }

  onCreateNewProduct() {
    this.isCreateProduct = true;
    this.selectedProduct = false;
  }

  onSaveNewProduct(product: Product) {
    this.productService.addProduct(product);
  }
}
