export interface Category {
  name: string;
  id: string;
}

export interface Brand {
  name: string;
  id: string;
}

export interface Product {
  name: string;
  retail_price: string;
  buy_price: string;
  bar_code: string;
  stock: number | string;
  description: string;
  state: string;
  sku: string;
  wholesale_price: string;
  updated_at: string;
  created_at: string;
  image: string[];
  id: string;
  category: Category;
  brand: Brand;
}

export interface ProductResponse {
  message: string;
  data: Product[];
}
