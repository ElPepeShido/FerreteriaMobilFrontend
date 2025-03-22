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

