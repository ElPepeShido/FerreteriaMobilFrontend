export interface Sell {
    id: string;
    cart_id: string;
    client_id: string;
    direction_id: string;
    total: number;
    iva: number;
    purchase_method: string;
    paypal_order_id: string;
    status: string;
  }
