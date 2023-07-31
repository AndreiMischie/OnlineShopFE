import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './components/containers/product-details/product-details.component';
import { ProductDetailsViewComponent } from './components/presentational/product-details-view/product-details-view.component';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductsListViewComponent } from './components/presentational/products-list-view/products-list-view.component';
import { ShoppingCartComponent } from './modules/shopping-cart/components/container/shopping-cart/shopping-cart.component';
import { ShoppingCartViewComponent } from './modules/shopping-cart/components/presentational/shopping-cart-view/shopping-cart-view.component';
import { IconButtonComponent } from './modules/shared/components/presentational/icon-button/icon-button.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductDetailsViewComponent,
    ProductsListComponent,
    ProductsListViewComponent,
    ShoppingCartComponent,
    ShoppingCartViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconButtonComponent,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
