export interface CartAddResponse{
      status:string;
      cart: Cart
}

export interface Cart{
      client_id: string;
      total: number;
      updated_at: string;
      created_at: string;
      id: string;
}

export interface CartProduct{
      client_id: string;
      id: string;
}

export interface ProductDeleteResponse{
      status:string;
      message: string;
}

export interface CartResponse {
      status: string;
      data: Cart[] | number;
      number_of_products?: number;
}