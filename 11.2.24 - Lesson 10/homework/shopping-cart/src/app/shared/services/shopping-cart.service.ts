import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private productsInCart: BehaviorSubject<number[]> = new BehaviorSubject(<number[]>[]);

  constructor() { }

  getProductsInCart(): Observable<number[]> {
    return this.productsInCart.asObservable();
  }

  addProductToCart(productId: number) {
    this.productsInCart.next([...this.productsInCart.value, productId]);
  }

  removeFromCart(productId: number) {
    this.productsInCart.next([...this.productsInCart.value.filter(p => p !== productId)]);
  }
}
