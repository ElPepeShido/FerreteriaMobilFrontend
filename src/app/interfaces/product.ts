export interface Link {
      url: string | null;
      label: string;
      active: boolean;
    }
    
    export  interface Category {
      name: string;
      id: string;
    }
    
    export  interface Brand {
      name: string;
      id: string;
    }
    
    export  interface Product {
      name: string;
      retail_price: string | null;
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
      category: Category;
      brand: Brand;
    }
    
    export  interface PaginationData {
      current_page: number;
      data: Product[];
      first_page_url: string;
      from: number;
      last_page: number;
      last_page_url: string;
      links: Link[];
      next_page_url: string | null;
      path: string;
      per_page: number;
      prev_page_url: string | null;
      to: number;
      total: number;
    }
    
    export interface ProductResponse {
      message: string;
      data: PaginationData;
    }
    