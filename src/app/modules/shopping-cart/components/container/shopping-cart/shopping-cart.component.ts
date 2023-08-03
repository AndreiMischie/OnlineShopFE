import { Component } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { ShoppingCartProductFull } from 'src/app/modules/shared/types/types';
import { ProductService } from 'src/app/services/product/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  providers: [ShoppingCartService],
})
export class ShoppingCartComponent {
  constructor(
    private shoppingCartService: ShoppingCartService,
    private productService: ProductService
  ) {}

  products!: Observable<ShoppingCartProductFull[] | undefined>;

  handleDelete(id: string): void {
    this.shoppingCartService.deleteProduct(id);

    this.products = this.shoppingCartService.getProductDetails();
  }

  ngOnInit() {
    return (this.products = this.shoppingCartService.getProductDetails());
  }
}
