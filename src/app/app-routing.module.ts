import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';


const routes: Routes = [
  {
  path: 'product/create',
  component: ProductAddComponent
  },
  {
  path: 'edit/:id',
  component: ProductEditComponent
  },
  {
  path: 'products',
  component: ProductGetComponent
  },
  {
    path: 'shopping-cart',
    component: CartComponent
}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
