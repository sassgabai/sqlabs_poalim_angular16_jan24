import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiProduct, Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  protected products: Product[];
  protected shoppingCartProducts?: Product[];

  private productSubscription?: Subscription;
  private shoppingCartSubscription?: Subscription;

  hoveredProduct?: Product;
  selectedProduct?: Product | null;
  isCreateProduct: boolean = false;
  isEditProduct: boolean = false;

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService) {
    this.products = [];
  }

  ngOnInit() {
    this.productSubscription = this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products.sort((a, b) => a.name!.localeCompare(b.name!));
      });

    this.shoppingCartSubscription = this.shoppingCartService.getProductsInCart().subscribe(
      (products: Product[]) => this.shoppingCartProducts = products
    );
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
    this.shoppingCartSubscription?.unsubscribe()
  }

  onSelect(product: Product) {
    this.isCreateProduct = this.isEditProduct = false;
    this.selectedProduct = product;
  }

  onCreateNewProduct() {
    this.isEditProduct = !(this.isCreateProduct = true);
    this.selectedProduct = null;
  }

  onSaveNewProduct(product: Product) {
    alert(`New product created: ID - ${product.id}, Name = ${product.name}`);
    this.isCreateProduct = false;
  }

  onUpdateProduct(product: Product) {
    alert(`Product (${product.id}) updated successfully!`);
    this.isEditProduct = false;
    this.selectedProduct = null;
  }

  editProduct(product: Product) {
    this.selectedProduct = product;
    this.isEditProduct = true;
  }

  deleteProductById(productId: number) {
    this.productService.deleteProductById(productId).subscribe();
  }

  isProductInCart(product: Product): boolean {
    return !!this.shoppingCartProducts?.find(p => p.id === product.id);
  }
}


