import { Component, Input } from '@angular/core';
import { Products } from 'src/app/modules/shared/types/product.types';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  productDetails: Observable<Products> | undefined;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  nullToUndefined(text: string | null): string | undefined {
    if (text == null) {
      return undefined;
    }
    return text;
  }

  getProduct(id: string | null): void {
    if (id != null) {
      let params = new HttpParams().set('id', id);
      this.productDetails = this.http.get<Products>(
        environment.apiUrl + '/products',
        { params }
      );
    }
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }
}
