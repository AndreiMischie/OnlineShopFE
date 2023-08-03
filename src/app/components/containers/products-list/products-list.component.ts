import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/shared/types/types';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  productsList?: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    return (this.productsList = this.productService.getProducts());
  }
}
