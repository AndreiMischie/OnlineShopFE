import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './modules/shopping-cart/components/container/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './components/containers/product-details/product-details.component';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';

export enum Paths {
  SHOPPING_CART = 'shopping-cart',
  PRODUCT_LIST = 'product-list',
  PRODUCT_DETAILS = 'product-details',
}

const routes: Routes = [
  { path: '', redirectTo: Paths.PRODUCT_LIST, pathMatch: 'full' },
  { path: Paths.PRODUCT_LIST, component: ProductsListComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: Paths.SHOPPING_CART, component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
