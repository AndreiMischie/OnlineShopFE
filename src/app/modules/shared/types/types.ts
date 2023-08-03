export interface Product {
  name: string;
  productCategoryName: string;
  price: number;
  description: string;
  id: string;
}

export type ShoppingCartProduct = {
  productId: string;
  quantity: number;
};

export type ShoppingCartProductFull = {
  product?: Product;
  quantity?: number;
};

type Address = {
  country: string;
  city: string;
  county: string;
  streetAddress: string;
};

export type OrderData = {
  customerId: string;
  createdAt: string;
  address: Address;
  products: ShoppingCartProduct[];
};

export type ProductData = {
  id: string;
  productCategoryId: string;
  productCategoryName: string;
  productCategoryDescription: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  imageURL: string;
};

export type AuthData = {
  username: string;
  password: string;
};
export type ProfileData = {
  id: string;
  username: string;
  roles: string[];
};
