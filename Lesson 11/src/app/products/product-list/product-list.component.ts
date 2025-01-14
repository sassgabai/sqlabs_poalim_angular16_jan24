import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  protected products?: Product[];
  protected shoppingCartProducts?: Product[];

  private productSubscription?: Subscription;
  private shoppingCartSubscription?: Subscription;

  hoveredProduct?: Product;
  selectedProduct?: Product | false;
  isCreateProduct: boolean = false;
  isListView: boolean = true;

  //MUI
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>();

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {
    this.productSubscription = this.productService
      .getProducts()
      .subscribe((products: Product[]) => {
        this.products = products.sort((a, b) => a.name!.localeCompare(b.name!));
        this.dataSource.data = this.products;
      });

    this.shoppingCartSubscription = this.shoppingCartService
      .getProductsInCart()
      .subscribe(
        (products: Product[]) => (this.shoppingCartProducts = products)
      );
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }

  onSelect(product: Product) {
    this.isCreateProduct = false;
    this.selectedProduct = product;
  }

  addToCart(product: Product) {
    this.shoppingCartService.addProductToCart(product);
  }

  removeFromCart(product: Product) {
    this.shoppingCartService.removeFromCart(product);
  }

  isProductInCart(product: Product): boolean {
    return !!this.shoppingCartProducts?.find((p) => p.id === product.id);
  }

  toggleView() {
    this.isListView = !this.isListView;
  }
}
