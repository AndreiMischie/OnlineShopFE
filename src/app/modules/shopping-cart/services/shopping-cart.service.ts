import { Products } from '../../shared/types/product.types';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor() {}
  addProductToCart(id: string, product: Products): void {
    localStorage.setItem(id, JSON.stringify(product));
  }
  getProductFromCart(id: string): Products | null {
    let product = localStorage.getItem(id);
    if (product == null) return null;
    return JSON.parse(product);
  }
  deleteProductFromCart(id: string): void {
    localStorage.removeItem(id);
  }
  getProductsFromCart(): Products[] {
    let products: Products[] = [];
    Object.keys(localStorage).forEach((data) => {
      let product = localStorage.getItem(data);
      if (product != null) products.push(JSON.parse(product));
    });
    return products;
  }
}
