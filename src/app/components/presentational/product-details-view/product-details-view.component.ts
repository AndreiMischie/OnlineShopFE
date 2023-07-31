import { Component, Input } from '@angular/core';
import { Products } from 'src/app/modules/shared/types/product.types';
import { ShoppingCartService } from 'src/app/modules/shopping-cart/services/shopping-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.scss'],
  providers: [ShoppingCartService],
})
export class ProductDetailsViewComponent {
  @Input() productDetails: Observable<Products> | undefined;
  constructor(private service: ShoppingCartService) {}
  addToCart(product: Products) {
    this.service.addProductToCart(product.id, product);
  }
}
