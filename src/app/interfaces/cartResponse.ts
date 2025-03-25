export interface Product {
      name: string;
      retail_price: string;
      buy_price: string;
      bar_code: string;
      stock: number;
      description: string;
      state: string;
      sku: string;
      wholesale_price: string;
      updated_at: string;
      created_at: string;
      image: string[];
      id: string;
  }
  
  export interface ProductCart {
      cart_id: string;
      product_id: string;
      quantity: number;
      subtotal: number;
      state: string;
      updated_at: string;
      created_at: string;
      unit_price?: string;
      id: string;
      producto?: Product | null;
  }
  
  export interface Client {
      name: string;
      lastName: string;
      email: string;
      password: string;
      socialMedia: string;
      phone: string;
      updated_at: string;
      created_at: string;
      token: string;
      id: string;
  }
  
  export interface Cart {
      client_id: string;
      total: number;
      status: string;
      updated_at: string;
      created_at: string;
      id: string;
      client: Client;
      producto_cart: ProductCart[];
  }
  
  export interface CartResponse {
      status: string;
      data: Cart[];
      "number of products:": number;
  }
  