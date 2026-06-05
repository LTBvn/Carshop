export type FuelType = 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';

export type CarCategory = 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Van' | 'Roadster' | 'Hatchback' | 'MPV' | 'EV' | 'Pickup';

export interface Car {
  id: string;
  name: string;
  brand: string;
  category: CarCategory;
  price: number;
  year: number;
  mileage: number;
  fuel: FuelType;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  horsepower: number;
  rating: number;
  popularity: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  colors: string[];
  logo?: string;
  discount?: string;
  condition?: string;
  dealerVerified?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'admin';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
}

export interface OrderItem {
  car: Car;
  quantity: number;
}
