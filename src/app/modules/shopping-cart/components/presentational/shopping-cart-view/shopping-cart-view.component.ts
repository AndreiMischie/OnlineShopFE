import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from 'src/app/modules/shared/types/product.types';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-view',
  templateUrl: './shopping-cart-view.component.html',
  styleUrls: ['./shopping-cart-view.component.scss'],
  providers: [ShoppingCartService],
})
export class ShoppingCartViewComponent {
  @Input() products: Products[] | undefined;
  @Output() itemDeleteEvent = new EventEmitter<string>();
  constructor() {}
  handleDelete(id: string) {
    this.itemDeleteEvent.emit(id);
  }
}
