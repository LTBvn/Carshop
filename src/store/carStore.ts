import { create } from 'zustand';
import type { Car, FuelType } from '../types';
import { cars as mockCars } from '../api/mock';

interface CarState {
  cars: Car[];
  search: string;
  brandFilter: string;
  categoryFilter: string;
  priceRange: [number, number];
  fuelFilter: FuelType | 'All';
  sortKey: 'newest' | 'price' | 'popularity';
  compare: string[];
  favorites: string[];
  setSearch: (value: string) => void;
  setBrandFilter: (value: string) => void;
  setCategoryFilter: (value: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setFuelFilter: (fuel: FuelType | 'All') => void;
  setSortKey: (key: 'newest' | 'price' | 'popularity') => void;
  toggleCompare: (id: string) => void;
  toggleFavorite: (id: string) => void;
  loadCars: () => void;
}

export const useCarStore = create<CarState>((set) => ({
  cars: mockCars,
  search: '',
  brandFilter: 'All',
  categoryFilter: 'All',
  priceRange: [0, 1200000000],
  fuelFilter: 'All',
  sortKey: 'newest',
  compare: [],
  favorites: [],
  setSearch: (value) => set({ search: value }),
  setBrandFilter: (value) => set({ brandFilter: value }),
  setCategoryFilter: (value) => set({ categoryFilter: value }),
  setPriceRange: (range) => set({ priceRange: range }),
  setFuelFilter: (fuel) => set({ fuelFilter: fuel }),
  setSortKey: (key) => set({ sortKey: key }),
  toggleCompare: (id) =>
    set((state) => ({
      compare: state.compare.includes(id)
        ? state.compare.filter((item) => item !== id)
        : [...state.compare, id],
    })),
  toggleFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((item) => item !== id)
        : [...state.favorites, id],
    })),
  loadCars: () => set({ cars: mockCars }),
}));
