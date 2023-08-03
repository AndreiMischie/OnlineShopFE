import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, of, tap } from 'rxjs';
import { Product } from 'src/app/modules/shared/types/types';
import { ProductData } from 'src/app/modules/shared/types/types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  products!: Product[];
  selectedProduct!: Product | undefined;

  getProducts(): Observable<Product[]> {
    if (this.products) {
      return of(this.products);
    }

    let productsList = this.http.get<Product[]>(
      environment.apiUrl + '/products'
    );

    return productsList.pipe(
      tap((products) => {
        this.products = products;
      })
    );
  }

  getProduct(id: string | null): Observable<Product> | undefined {
    let productDetails;

    if (id != null) {
      productDetails = this.http.get<Product>(
        environment.apiUrl + '/products/' + id
      );
    }
    return productDetails?.pipe(tap((p) => (this.selectedProduct = p)));
  }
  createProduct(
    name: string,
    description: string,
    price: number,
    weight: number
  ) {
    let productData: ProductData = {
      id: '',
      productCategoryId: '35d6fcb9-ae62-4f7f-b8e5-d6036ba10106',
      productCategoryName: 'kitchen',
      productCategoryDescription: 'kitchen tools',
      name: name,
      description: description,
      price: price,
      weight: weight,
      imageURL: '',
    };

    let product: Product = {
      name: productData.name,
      productCategoryName: productData.productCategoryName,
      price: productData.price,
      description: productData.description,
      id: '',
    };

    this.http
      .post<ProductData>(environment.apiUrl + '/products', productData)
      .subscribe((res) => {
        product.id = res.id;
        this.products.push(product);
      });
  }
  editProduct(
    name: string,
    description: string,
    price: number,
    weight: number
  ) {
    let productData: ProductData = {
      id: '',
      productCategoryId: '35d6fcb9-ae62-4f7f-b8e5-d6036ba10106',
      productCategoryName: 'kitchen',
      productCategoryDescription: 'kitchen tools',
      name: name,
      description: description,
      price: price,
      weight: weight,
      imageURL: '',
    };

    let product: Product = {
      name: productData.name,
      productCategoryName: productData.productCategoryName,
      price: productData.price,
      description: productData.description,
      id: '',
    };

    this.http
      .put<ProductData>(environment.apiUrl + '/products', productData)
      .subscribe((res) => {
        product.id = res.id;
        this.products.push(product);
      });
  }
  deleteProduct(id: string) {
    this.products.splice(
      this.products.findIndex((product) => product.id == id)
    );

    this.http
      .delete<ProductData>(environment.apiUrl + '/products/' + id)
      .subscribe();
  }
}
