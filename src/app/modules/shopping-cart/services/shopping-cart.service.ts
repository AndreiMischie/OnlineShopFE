import { OrderData } from '../../shared/types/types';
import { ShoppingCartProduct } from '../../shared/types/types';
import { Injectable } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { ShoppingCartProductFull } from '../../shared/types/types';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { LOCAL_STORAGE_SHOPPING_CART } from 'src/app/util/constants';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(
    private productService: ProductService,
    private http: HttpClient
  ) {}

  products: ShoppingCartProduct[] = [];

  getProductDetails(): Observable<ShoppingCartProductFull[] | undefined> {
    this.products = this.getProducts();

    return this.productService.getProducts().pipe(
      map((productsDetails) => {
        let productsFull = this.products?.map((product) => {
          let x = productsDetails.find((p) => p.id == product.productId);
          return {
            product: x,
            quantity: product.quantity,
          };
        });

        return productsFull;
      })
    );
  }

  getProducts(): ShoppingCartProduct[] {
    let cart = localStorage.getItem(LOCAL_STORAGE_SHOPPING_CART);

    if (cart) {
      let products = JSON.parse(cart);
      this.products = products;
      return products;
    }

    return [];
  }

  addProduct(id: string): void {
    this.products = this.getProducts();

    let oldProduct = this.products?.find((product) => product.productId == id);

    let newProduct;

    if (oldProduct) {
      oldProduct.quantity = oldProduct.quantity + 1;
    } else {
      newProduct = { productId: id, quantity: 1 };
      this.products?.push(newProduct);
    }

    localStorage.setItem(
      LOCAL_STORAGE_SHOPPING_CART,
      JSON.stringify(this.products)
    );
  }

  deleteProduct(id: string): void {
    let index = this.products?.findIndex((product) => product.productId == id);

    if (index !== undefined) this.products?.splice(index, 1);

    localStorage.setItem(
      LOCAL_STORAGE_SHOPPING_CART,
      JSON.stringify(this.products)
    );
  }

  deleteProducts(): void {
    localStorage.removeItem(LOCAL_STORAGE_SHOPPING_CART);
  }

  placeOrder(
    customerId: string = 'e74ebe28-24e9-44b8-8fad-54afa6e1fa3d',
    country: string = 'Romania',
    city: string = 'Timisoara',
    county: string = 'Timis',
    streetAddress: string = 'Aleea Studentilor'
  ) {
    const date = new Date().toISOString().split('T')[0];

    let orderData: OrderData = {
      customerId: customerId,
      createdAt: '2023-07-24 09:23:08',
      address: {
        country: country,
        city: city,
        county: county,
        streetAddress: streetAddress,
      },
      products: this.getProducts(),
    };

    this.http
      .post<OrderData>(environment.apiUrl + '/orders', orderData)
      .subscribe((rez) => console.log(rez));
  }
}
