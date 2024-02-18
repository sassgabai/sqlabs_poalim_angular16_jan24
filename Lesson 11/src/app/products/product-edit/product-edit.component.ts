import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnDestroy {
  
  @Input() productId?: number;
  @Output() updateProductEmitter = new EventEmitter();
  protected editProductForm: FormGroup = this.formBuilder.group({
    id: [, [Validators.required]],
    name: ['', [Product.standardValidators, Product.customNameValidator]],
    price: [, [Validators.required]]
  });
  
  constructor(private formBuilder: FormBuilder, private productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['productId'] && this.productId) {

      // 1. Retrieve product information from the API
      this.productService.getProductById(this.productId).subscribe(p => {

        // 2. Update the EDIT FORM object with the data received  via the API
        this.editProductForm?.setValue({
          id: p.id,
          name: p.name,
          price: p.price
        })
      });
      
    }
  }

  onSubmit() {
    if (this.editProductForm?.valid) {
      const product = new Product(
        parseInt(this.editProductForm.value.id!),
        this.editProductForm?.value.name!,
        parseFloat(this.editProductForm?.value.price!)
      );

      // Call the API
      this.productService.updateProduct(product).subscribe(p => {
        this.updateProductEmitter.emit(product);
      })
    };
  }

  ngOnDestroy(): void {
      this.editProductForm?.reset();
  }

}
