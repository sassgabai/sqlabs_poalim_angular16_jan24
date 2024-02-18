import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent {
  parentName: string = "Tomer";
  productName: string = "";

  addNewProduct(productName: string) {
    this.productName = productName;
  }
}
