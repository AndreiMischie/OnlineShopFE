import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Products } from 'src/app/modules/shared/types/product.types';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  productsList: Observable<Products[]> | undefined;
  constructor(private http: HttpClient) {}
  getProducts(): void {
    this.productsList = this.http.get<Products[]>(
      environment.apiUrl + '/products'
    );
  }
  ngOnInit() {
    return this.getProducts();
  }
}
