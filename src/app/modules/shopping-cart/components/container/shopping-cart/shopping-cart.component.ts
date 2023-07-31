import { Component } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  providers: [ShoppingCartService],
})
export class ShoppingCartComponent {
  constructor(private service: ShoppingCartService) {}
  products = this.service.getProductsFromCart();
  handleDelete(id: string): void {
    this.service.deleteProductFromCart(id);
    this.products = this.service.getProductsFromCart();
  }
  ngOnInit() {
    return (this.products = this.service.getProductsFromCart());
  }
}
