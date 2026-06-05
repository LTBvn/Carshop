import { Link } from 'react-router-dom';
import type { Car } from '../../types';
import Button from '../ui/Button';
import SafeImage from '../ui/SafeImage';
import { formatPrice } from '../../utils/format';

interface CarCardProps {
  car: Car;
  onCompare?: (id: string) => void;
  onFavorite?: (id: string) => void;
  isCompared?: boolean;
  isFavorite?: boolean;
  className?: string;
}

export default function CarCard({ car, onCompare, onFavorite, isCompared = false, isFavorite = false, className }: CarCardProps) {
  const monthlyPayment = Math.round(car.price / 72);

  return (
    <article className={`glass-panel card-glow group overflow-hidden rounded-[32px] border border-slate-200 dark:border-white/10 transition duration-300 hover:-translate-y-1 hover:border-slate-300 dark:hover:border-white/20 ${className ?? ''}`}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-950/90 px-6 py-4 text-xs uppercase tracking-[0.24em] text-slate-700 dark:text-slate-200">
        <span className="rounded-full bg-slate-200 dark:bg-slate-900/90 px-3 py-2 font-semibold text-slate-950 dark:text-white">{car.logo ?? car.brand}</span>
        <div className="flex flex-wrap items-center gap-2">
          {car.discount && <span className="rounded-full bg-rose-100 dark:bg-rose-500/10 px-3 py-2 text-rose-700 dark:text-rose-300">{car.discount}</span>}
          <span className="rounded-full bg-emerald-100 dark:bg-emerald-500/10 px-3 py-2 text-emerald-700 dark:text-emerald-300">Dealer verified</span>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-[32px]">
        <SafeImage src={car.image} alt={car.name} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-gradient-to-t from-slate-950/95 to-transparent px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-200">{car.brand}</span>
            <span className="ml-2 text-xs uppercase tracking-[0.24em] text-slate-300">{car.category}</span>
          </div>
          <span className="text-right text-sm font-semibold text-white">{formatPrice(car.price)}</span>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{car.name}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">{car.description}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-600 dark:text-slate-300">
          <div className="rounded-3xl bg-slate-100 dark:bg-slate-950/80 p-4">
            <p className="text-slate-500 dark:text-slate-400">Trả góp</p>
            <p className="mt-2 text-slate-950 dark:text-white">{formatPrice(monthlyPayment)}/tháng</p>
          </div>
          <div className="rounded-3xl bg-slate-100 dark:bg-slate-950/80 p-4">
            <p className="text-slate-500 dark:text-slate-400">Số km</p>
            <p className="mt-2 text-slate-950 dark:text-white">{car.mileage.toLocaleString()} km</p>
          </div>
          <div className="rounded-3xl bg-slate-100 dark:bg-slate-950/80 p-4">
            <p className="text-slate-500 dark:text-slate-400">Tình trạng</p>
            <p className="mt-2 text-slate-950 dark:text-white">{car.condition ?? 'Xe mới'}</p>
          </div>
          <div className="rounded-3xl bg-slate-100 dark:bg-slate-950/80 p-4">
            <p className="text-slate-500 dark:text-slate-400">Đánh giá</p>
            <p className="mt-2 text-slate-950 dark:text-white">{car.rating} ★</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 text-sm text-slate-600 dark:text-slate-300">
          <span className="rounded-3xl bg-slate-100 dark:bg-surface2/90 p-3 text-center text-slate-950 dark:text-slate-100">{car.year}</span>
          <span className="rounded-3xl bg-slate-100 dark:bg-surface2/90 p-3 text-center text-slate-950 dark:text-slate-100">{car.fuel}</span>
          <span className="rounded-3xl bg-slate-100 dark:bg-surface2/90 p-3 text-center text-slate-950 dark:text-slate-100">{car.horsepower} HP</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link to={`/cars/${car.id}`} className="mr-auto text-sm font-semibold text-slate-950 dark:text-white hover:text-slate-700 dark:hover:text-slate-300">
            Xem chi tiết
          </Link>
          <Button variant="outline" as="a" href={`/cars/${car.id}`}>
            Book Test Drive
          </Button>
          <Button variant="ghost" onClick={() => onCompare?.(car.id)}>
            {isCompared ? 'Bỏ so sánh' : 'So sánh'}
          </Button>
          <Button variant={isFavorite ? 'primary' : 'outline'} onClick={() => onFavorite?.(car.id)}>
            {isFavorite ? 'Đã lưu' : 'Yêu thích'}
          </Button>
        </div>
      </div>
    </article>
  );
}
