import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss'],
})
export class AddNewProductComponent {
  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  productForm!: FormGroup;

  ngOnInit() {
    this.productForm = this.fb.group({
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(0),
      weight: new FormControl(0),
    });

    this.productForm.valueChanges.subscribe();
  }

  handlePostProduct() {
    this.productService.createProduct(
      this.productForm.value.name,
      this.productForm.value.description,
      this.productForm.value.price,
      this.productForm.value.weight
    );
  }
}
