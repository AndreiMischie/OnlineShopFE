import { Component } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/types';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  productDetails?: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  getProduct(id: string | null): void {
    this.productDetails = this.productService.getProduct(id);
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.getProduct(id);
  }
}
