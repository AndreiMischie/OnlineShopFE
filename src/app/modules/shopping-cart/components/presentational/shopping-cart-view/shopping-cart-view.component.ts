import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingCartProductFull } from 'src/app/modules/shared/types/types';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart-view',
  templateUrl: './shopping-cart-view.component.html',
  styleUrls: ['./shopping-cart-view.component.scss'],
  providers: [ShoppingCartService],
})
export class ShoppingCartViewComponent {
  @Input() products!: Observable<ShoppingCartProductFull[] | undefined>;

  @Output() itemDeleteEvent = new EventEmitter<string>();

  constructor(private shoppingCartService: ShoppingCartService) {}

  handleDelete(id: string | undefined) {
    this.itemDeleteEvent.emit(id);
  }
  handlePlaceOrder() {
    this.shoppingCartService.placeOrder();
  }
}
