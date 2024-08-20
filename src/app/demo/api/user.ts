import { Product } from "./product";


export interface Order {
    id: number;
    name: string;
    oProduct: Product[];
    status: 'accepted'| 'shipped'| 'canceled';
}


export interface Costumer {
    id: number;
    name: string;
    email: string;
}
export interface ApiResponse <T> {
    status: string;
    message?: string;
    data: T;
}


export interface ServiceResponse {
    success: boolean;
    error?: string;
  }



