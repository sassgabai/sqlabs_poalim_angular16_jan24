import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentChildComponent } from './learning/parent-child/parent-child.component';
import { Child1Component } from './learning/parent-child/child1/child1.component';
import { Child2Component } from './learning/parent-child/child2/child2.component';
import { Child3Component } from './learning/parent-child/child3/child3.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductNewComponent } from './products/product-new/product-new.component';
import { PlusMinusComponent } from './learning/plus-minus/plus-minus.component';
import { PlusComponent } from './learning/plus-minus/plus/plus.component';
import { MinusComponent } from './learning/plus-minus/minus/minus.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentChildComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    ProductListComponent,
    ProductDetailsComponent,
    ProductNewComponent,
    PlusMinusComponent,
    PlusComponent,
    MinusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
