import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiProduct, Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  protected products: Product[];
  private productSubscription?: Subscription;

  hoveredProduct?: Product;
  selectedProduct?: Product | null;
  isCreateProduct: boolean = false;
  isEditProduct: boolean = false;

  constructor(private productService: ProductService) {
    this.products = [];
  }

  ngOnInit() {
    this.productSubscription = this.productService.getProducts().subscribe(products => this.products = products);
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
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
    this.productService.addProduct(product);
    this.isCreateProduct = false;
  }

  onUpdateProduct(product: Product) {
    this.productService.updateProduct(product);
    this.isEditProduct = false;
    this.selectedProduct = null;
  }

  editProduct(product: Product) {
    this.selectedProduct = product;
    this.isEditProduct = true;
  }
}


