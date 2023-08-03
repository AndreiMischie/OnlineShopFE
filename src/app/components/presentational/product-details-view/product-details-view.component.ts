import { Component, Input } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/types';
import { ShoppingCartService } from 'src/app/modules/shopping-cart/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';
import { Paths } from 'src/app/app-routing.module';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.scss'],
  providers: [ShoppingCartService],
})
export class ProductDetailsViewComponent {
  @Input() productDetails?: Observable<Product>;

  constructor(
    private service: ShoppingCartService,
    private productService: ProductService,
    private router: Router
  ) {}

  addToCart(id: string) {
    this.service.addProduct(id);
  }
  handleDelete(id: string) {
    this.productService.deleteProduct(id);

    this.router.navigate([Paths.PRODUCT_LIST]);
  }
}
