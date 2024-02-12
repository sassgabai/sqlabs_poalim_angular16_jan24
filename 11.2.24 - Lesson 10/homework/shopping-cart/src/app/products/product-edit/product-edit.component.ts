import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnDestroy {
  
  @Input() editProduct?: Product | null;
  @Output() updateProductEmitter = new EventEmitter();
  protected editProductForm: FormGroup = this.formBuilder.group({
    id: [, [Validators.required]],
    name: ['', [Product.standardValidators, Product.customNameValidator]],
    price: [, [Validators.required]]
  });
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editProduct'] && this.editProduct) {
      this.editProductForm?.setValue({
        id: this.editProduct?.id,
        name: this.editProduct?.name,
        price: this.editProduct?.price
      })
    }
  }

  onSubmit() {
    if (this.editProductForm?.valid) {
      this.editProduct!.id = parseInt(this.editProductForm.value.id!);
      this.editProduct!.name = this.editProductForm?.value.name!;
      this.editProduct!.price = parseFloat(this.editProductForm?.value.price!);
      
      this.updateProductEmitter.emit(this.editProduct);
    };
  }

  ngOnDestroy(): void {
      this.editProductForm?.reset();
  }

}
