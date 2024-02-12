import { Injectable, OnInit } from '@angular/core';
import { ApiProduct, Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private static apiProductsURL: string = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ApiProduct[]> {
    // return this.productSubject.asObservable();
    return this.http.get<ApiProduct[]>(ProductService.apiProductsURL).pipe(
      map(apiProducts => apiProducts.map(apiProduct => new Product(apiProduct.id, apiProduct.title, apiProduct.price))));
  }

  getProductById(productId: number): Observable<Product> {
    // return this.productSubject.asObservable();
    return this.http.get<ApiProduct>(`${ProductService.apiProductsURL}/${productId}`).pipe(
      map(apiProduct => new Product(apiProduct.id, apiProduct.title, apiProduct.price, apiProduct.image, 10)),
      catchError(this.handleError)
    );
  }

  addProduct(product: Product) {
    delete product.id;

    // this.productSubject.next([...this.productSubject.value, product]);
    return this.http.post<ApiProduct>(ProductService.apiProductsURL, product).pipe(
      map(data => new Product(data.id, data.title, data.price, data.image, 10)));
  }

  updateProduct(product: Product) {
    // const newProdList: Product[] = this.productSubject.value.map(p => {
    //   if (p.id === product.id) {
    //     p.id = product.id;
    //     p.name = product.name;
    //     p.price = product.price;
    //   }

    //   return p;
    // });

    // this.productSubject.next([...newProdList]);
  }

  private handleError(error: any) {
    // You can customize this method to parse the error as you need
    let errorMessage = 'An unknown error occurred!';

    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    // Return an observable with a user-facing error message
    return throwError(() => new Error(errorMessage));
  }
}

