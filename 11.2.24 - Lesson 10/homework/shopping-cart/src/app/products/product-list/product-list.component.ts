import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent 
    implements OnInit, OnDestroy {
  protected products?: Product[];
  protected shoppingCartProducts?: number[];

  private productSubscription?: Subscription;
  private shoppingCartSubscription?: Subscription;

  hoveredProduct?: Product;
  selectedProduct?: Product | false;
  isListView: boolean = true;

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.productSubscription = this.productService.getProducts().subscribe(
      (products: Product[]) => this.products = products
    );

    this.shoppingCartSubscription = this.shoppingCartService.getProductsInCart().subscribe(
      (products: number[]) => this.shoppingCartProducts = products
    );
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  addToCart(productId: number) {
    this.shoppingCartService.addProductToCart(productId);
  }

  removeFromCart(productId: number) {
    this.shoppingCartService.removeFromCart(productId);
  }

  isProductInCart(productId?: number): boolean {
    return !!this.shoppingCartProducts?.find(p => p === productId);
  }

  toggleView() {
    this.isListView = !this.isListView;
  }
}
