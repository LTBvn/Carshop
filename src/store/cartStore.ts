import { create } from 'zustand';
import type { OrderItem, Car } from '../types';

interface CartState {
  items: OrderItem[];
  addToCart: (car: Car) => void;
  removeFromCart: (carId: string) => void;
  updateQuantity: (carId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addToCart: (car) =>
    set((state) => {
      const existing = state.items.find((item) => item.car.id === car.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.car.id === car.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { items: [...state.items, { car, quantity: 1 }] };
    }),
  removeFromCart: (carId) =>
    set((state) => ({ items: state.items.filter((item) => item.car.id !== carId) })),
  updateQuantity: (carId, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.car.id === carId ? { ...item, quantity: Math.max(1, quantity) } : item
      ),
    })),
  clearCart: () => set({ items: [] }),
}));
