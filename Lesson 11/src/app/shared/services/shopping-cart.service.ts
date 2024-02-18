import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private productsInCart: BehaviorSubject<Product[]> = new BehaviorSubject(<Product[]>[]);

  constructor() { }

  getProductsInCart(): Observable<Product[]> {
    return this.productsInCart.asObservable();
  }

  addProductToCart(product: Product) {
    this.productsInCart.next([...this.productsInCart.value, product]);
  }

  removeFromCart(product: Product) {
    this.productsInCart.next([...this.productsInCart.value.filter(p => p.id !== product.id)]);
  }
}
