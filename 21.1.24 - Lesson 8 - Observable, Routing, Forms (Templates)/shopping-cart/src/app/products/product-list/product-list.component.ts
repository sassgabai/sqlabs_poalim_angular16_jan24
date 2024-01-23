import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent 
    implements OnInit, OnDestroy {
  protected products: Product[];
  private productSubscription?: Subscription;
  selectedProduct?: Product | false;
  isCreateProduct: boolean = false;

  constructor(private productService: ProductService) {
    this.products = [];
  }

  ngOnInit() {
    console.log('INIT');
    this.productSubscription = this.productService.getProducts().subscribe(
      (products: Product[]) => this.products = products
    );
  }

  ngOnDestroy(): void {
    console.log('DESTROY');
    this.productSubscription?.unsubscribe();
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
    this.isCreateProduct = false;
  }
}
