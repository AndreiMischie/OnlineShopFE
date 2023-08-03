import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './modules/shopping-cart/components/container/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './components/containers/product-details/product-details.component';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { PageNotFoundComponent } from './components/containers/page-not-found/page-not-found.component';
import { AddNewProductComponent } from './components/containers/add-new-product/add-new-product.component';
import { EditProductComponent } from './components/containers/edit-product/edit-product.component';
import { LoginComponent } from './components/containers/login/login.component';
import { ProfileDetailsComponent } from './components/containers/profile-details/profile-details.component';
import { isAuthenticatedGuard } from './guards/auth/is-authenticated.guard';
import { isCustomerGuard } from './guards/customer/is-customer.guard';
import { isAdminGuard } from './guards/admin/is-admin.guard';

export const Paths = {
  LOGIN: 'login',
  SHOPPING_CART: 'shopping-cart',
  PRODUCT_LIST: 'product-list',
  PRODUCT_DETAILS: 'product-details/:id',
  ADD_PRODUCT_FORM: 'product-list/add',
  EDIT_PRODUCT_FORM: 'product-details/edit/:id',
  PROFILE: 'profile',
  HOMEPAGE: '',
  NOTFOUND: '**',
};

const routes: Routes = [
  {
    path: Paths.LOGIN,
    component: LoginComponent,
  },
  { path: Paths.HOMEPAGE, redirectTo: Paths.LOGIN, pathMatch: 'full' },
  {
    path: Paths.PRODUCT_LIST,
    component: ProductsListComponent,
    canActivate: [isAuthenticatedGuard],
  },
  {
    path: Paths.PRODUCT_DETAILS,
    component: ProductDetailsComponent,
    canActivate: [isAuthenticatedGuard],
  },
  {
    path: Paths.ADD_PRODUCT_FORM,
    component: AddNewProductComponent,
    canActivate: [isAdminGuard],
  },
  {
    path: Paths.EDIT_PRODUCT_FORM,
    component: EditProductComponent,
    canActivate: [isAdminGuard],
  },
  {
    path: Paths.PROFILE,
    component: ProfileDetailsComponent,
    canActivate: [isAuthenticatedGuard],
  },
  {
    path: Paths.SHOPPING_CART,
    component: ShoppingCartComponent,
    canActivate: [isCustomerGuard],
  },
  { path: Paths.NOTFOUND, pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
