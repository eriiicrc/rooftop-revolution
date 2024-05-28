export interface Client {
    full_name: string;
    address: string;
    cups: string;
    role: string;
    building_type: string;
  }
  
export interface SupplyPoint {
    cups: string;
    tariff: string;
    invoiced_amount: number;
    power: {
      p1: number;
      p2: number;
    };
    neighbors: string[];
}

export interface SupplyPointResponse {
  cups: string;
  tariff: string;
  invoiced_amount: string;
  power: {
    p1: string;
    p2: string;
  };
  neighbors: string[];
}

export const DISCOUNT = {
  standard: { type: 'Standard discount', discount: 'No Discount' },
  basic: { type: 'Basic discount', discount: '5% discount' },
  special: { type: 'Special discount', discount: '12% discount' }
}
  
export const BUILDING_TYPES = {
  house: 'house',
  apartment: 'apartment'
}