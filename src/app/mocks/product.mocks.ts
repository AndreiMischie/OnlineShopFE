import { Product } from '../modules/shared/types/product.types';

export function getProductDetailsMock(name: string = 'product1'): Product {
  return {
    id: name + '123123213',
    name: name,
    category: 'string',
    price: 10,
    description: 'string',
    quantity: 2,
  };
}

export function getProductsDetailsMock(howMany: number): Product[] {
  const products = [];
  for (let i = 0; i < howMany; i++) {
    products.push(getProductDetailsMock(`product${i}`));
  }
  return products;
}
