import axios from 'axios';
import type { Car } from '../types';
import { cars } from './mock';

const api = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

export async function fetchCars(): Promise<Car[]> {
  try {
    const response = await api.get<Car[]>('/cars');
    return response.data;
  } catch {
    return new Promise((resolve) => setTimeout(() => resolve(cars), 150));
  }
}

export async function fetchCarById(id: string): Promise<Car | undefined> {
  try {
    const response = await api.get<Car>(`/cars/${id}`);
    return response.data;
  } catch {
    return cars.find((car) => car.id === id);
  }
}
