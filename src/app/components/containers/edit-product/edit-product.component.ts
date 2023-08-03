import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/modules/shared/types/types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  product?: Product = this.productService.selectedProduct;

  routeId!: string | null;

  productForm!: FormGroup;

  ngOnInit(): void {
    this.product = this.productService.selectedProduct;

    this.productForm = this.fb.group({
      name: new FormControl(this.product?.name),
      description: new FormControl(this.product?.description),
      price: new FormControl(this.product?.price),
      weight: new FormControl(this.product?.price),
    });

    this.productForm.valueChanges.subscribe();

    this.routeId = this.route.snapshot.paramMap.get('id');
  }

  handleEditProduct() {
    this.productService.editProduct(
      this.productForm.value.name,
      this.productForm.value.description,
      this.productForm.value.price,
      this.productForm.value.weight
    );
  }
}
