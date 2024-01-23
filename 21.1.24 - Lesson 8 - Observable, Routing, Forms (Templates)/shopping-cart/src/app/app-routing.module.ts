import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ParentChildComponent } from './learning/parent-child/parent-child.component';
import { PlusMinusComponent } from './learning/plus-minus/plus-minus.component';
import { ObservableComponent } from './learning/observable/observable.component';
import { FormComponent } from './learning/form/form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MainComponent } from './learning/main/main.component';
import { FormClassComponent } from './learning/form-class/form-class.component';

export const routes: Routes = [
  {path: '', redirectTo: 'product-list', pathMatch: 'full'},
  {path: 'product-list', component: ProductListComponent},
  {path: 'learning', component: MainComponent,
    children: [
      {path: 'parent-child', component: ParentChildComponent},
      {path: 'plus-minus', component: PlusMinusComponent},
      {path: 'observable', component: ObservableComponent},
      {path: 'form', component: FormComponent},
      {path: 'form-class', component: FormClassComponent}
    ]},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
