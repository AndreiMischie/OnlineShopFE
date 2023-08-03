import { Component, Input } from '@angular/core';
import { Product, ProfileData } from 'src/app/modules/shared/types/types';
import { Paths } from 'src/app/app-routing.module';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss'],
})
export class ProductsListViewComponent {
  @Input() productsList?: Observable<Product[]>;

  constructor(private authService: AuthService) {}

  profileData!: Observable<ProfileData>;

  paths = Paths;
}
