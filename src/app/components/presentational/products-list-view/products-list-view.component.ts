import { Component, Input } from '@angular/core';
import { Products } from 'src/app/modules/shared/types/product.types';
import { Paths } from 'src/app/app-routing.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss'],
})
export class ProductsListViewComponent {
  @Input() productsList: Observable<Products[]> | undefined;
  handleSeeDetails(product: Products) {
    console.log(product);
  }
  paths = Paths;
}
