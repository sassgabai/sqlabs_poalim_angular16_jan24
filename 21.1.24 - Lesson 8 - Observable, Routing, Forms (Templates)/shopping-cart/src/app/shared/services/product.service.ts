import { Injectable, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productSubject: BehaviorSubject<Product[]>;

  constructor() {
    this.productSubject = new BehaviorSubject([
        new Product(1, "Laptop", 800),
        new Product(2, "Smartphone", 500),
        new Product(3, "Tablet", 300),
        new Product(4, "Headphones", 150),
        new Product(5, "Keyboard", 100),
        new Product(6, "Mouse", 50),
        new Product(7, "Monitor", 200),
        new Product(8, "External Hard Drive", 120),
        new Product(9, "Smartwatch", 250),
        new Product(10, "Bluetooth Speaker", 80)
    ]);
  }

  getProducts(): Observable<Product[]> {
    return this.productSubject.asObservable();
  }

  addProduct(product: Product) {
    this.productSubject.next([...this.productSubject.value, product]);
  }
}

