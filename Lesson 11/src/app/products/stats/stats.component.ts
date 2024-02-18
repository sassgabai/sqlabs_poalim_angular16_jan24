import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent 
    implements OnInit, OnDestroy {
      
  private _productCount: number = 0;

  protected get productCount(): number {
    return this._productCount;
  }
  protected set productCount(value: number) {
    this._productCount = value;
  }
  
  private productSubscription?: Subscription;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productSubscription = this.productService.getProducts().subscribe(
      (products: Product[]) => this.productCount = products.length
    )
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }

}
