import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartViewComponent } from './shopping-cart-view.component';

describe('ShoppingCartViewComponent', () => {
  let component: ShoppingCartViewComponent;
  let fixture: ComponentFixture<ShoppingCartViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartViewComponent]
    });
    fixture = TestBed.createComponent(ShoppingCartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
