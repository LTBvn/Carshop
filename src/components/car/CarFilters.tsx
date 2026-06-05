import { brands, categories } from '../../api/mock';
import type { FuelType } from '../../types';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface CarFiltersProps {
  search: string;
  brand: string;
  category: string;
  priceRange: [number, number];
  fuel: FuelType | 'All';
  sortKey: 'newest' | 'price' | 'popularity';
  onSearch: (value: string) => void;
  onBrandChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onFuelChange: (value: FuelType | 'All') => void;
  onSortChange: (value: 'newest' | 'price' | 'popularity') => void;
  onReset: () => void;
}

export default function CarFilters({
  search,
  brand,
  category,
  priceRange,
  fuel,
  sortKey,
  onSearch,
  onBrandChange,
  onCategoryChange,
  onPriceChange,
  onFuelChange,
  onSortChange,
  onReset,
}: CarFiltersProps) {
  return (
    <div className="glass-panel card-glow grid gap-6 rounded-3xl border border-slate-200 dark:border-white/10 p-6">
      <div className="grid gap-4 lg:grid-cols-[1.8fr_1fr]">
        <Input
          type="search"
          value={search}
          placeholder="Search model, brand or feature"
          onChange={(event) => onSearch(event.target.value)}
        />
        <div className="grid gap-4 sm:grid-cols-4">
          <select
            value={brand}
            onChange={(event) => onBrandChange(event.target.value)}
            className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white dark:bg-surface2/90 px-4 py-3 text-sm text-slate-950 dark:text-slate-100 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 dark:focus:border-violet-400 dark:focus:ring-violet-400/20"
          >
            <option value="All">All Brands</option>
            {brands.map((brandOption) => (
              <option key={brandOption} value={brandOption}>
                {brandOption}
              </option>
            ))}
          </select>
          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white dark:bg-surface2/90 px-4 py-3 text-sm text-slate-950 dark:text-slate-100 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 dark:focus:border-violet-400 dark:focus:ring-violet-400/20"
          >
            <option value="All">All Categories</option>
            {categories.map((categoryOption) => (
              <option key={categoryOption} value={categoryOption}>
                {categoryOption}
              </option>
            ))}
          </select>
          <select
            value={fuel}
            onChange={(event) => onFuelChange(event.target.value as FuelType | 'All')}
            className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white dark:bg-surface2/90 px-4 py-3 text-sm text-slate-950 dark:text-slate-100 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 dark:focus:border-violet-400 dark:focus:ring-violet-400/20"
          >
            <option value="All">Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          <select
            value={sortKey}
            onChange={(event) => onSortChange(event.target.value as 'newest' | 'price' | 'popularity')}
            className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white dark:bg-surface2/90 px-4 py-3 text-sm text-slate-950 dark:text-slate-100 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 dark:focus:border-violet-400 dark:focus:ring-violet-400/20"
          >
            <option value="newest">Newest</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="grid gap-2">
          <label className="text-sm text-slate-600 dark:text-slate-400">Max price</label>
          <input
            type="range"
            min="0"
            max="1200000000"
            step="10000000"
            value={priceRange[1]}
            onChange={(event) => onPriceChange([0, Number(event.target.value)])}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-300 dark:bg-white/10 accent-violet-400"
          />
          <div className="text-sm text-slate-600 dark:text-slate-300">Up to {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(priceRange[1])}</div>
        </div>
        <Button variant="outline" onClick={onReset}>
          Clear filters
        </Button>
      </div>
    </div>
  );
}
