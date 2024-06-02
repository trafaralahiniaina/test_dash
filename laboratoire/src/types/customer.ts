// types/customer.ts
export interface Customer {
    full_name: string;
    email: string;
    company_name: string;
    registered: string;
    card_type: string; // Modifier le type de 'card_type' en 'string'
    industry: string;
    currency_code: string;
    purchased_total: string;
    guid: string;
    avatar: string;
    graph_hex: string;
    bar_progress: number;
  }
  
  export type CardType =
    | 'china-unionpay'
    | 'amex'
    | 'diners-club-enroute'
    | 'diners-club-international'
    | 'jcb'
    | 'mastercard'
    | 'visa'
    | 'solo'
    | 'switch';