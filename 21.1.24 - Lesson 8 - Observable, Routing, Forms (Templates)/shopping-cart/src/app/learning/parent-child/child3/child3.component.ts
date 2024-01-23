import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {
  @Input() name: string | undefined;
  @Output() myEmitter = new EventEmitter();

  addNewProduct(productName: string) {
    this.myEmitter.emit(productName);
  }
}
