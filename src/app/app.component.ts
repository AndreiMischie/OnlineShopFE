import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: any;
  constructor(private http: HttpClient) {}
  title = 'online-shop';
  getProducts() {
    this.products = this.http.get(environment.apiUrl + '/products');
    console.log(this.products);
  }
}
