import { useMemo } from 'react';
import { useCarStore } from '../store/carStore';
import { cars as mockCars } from '../api/mock';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import SafeImage from '../components/ui/SafeImage';
import { formatPrice } from '../utils/format';

const specs = [
  { label: 'Brand', key: 'brand' },
  { label: 'Category', key: 'category' },
  { label: 'Fuel', key: 'fuel' },
  { label: 'Seats', key: 'seats' },
  { label: 'Transmission', key: 'transmission' },
  { label: 'Horsepower', key: 'horsepower' },
  { label: 'Price', key: 'price' },
  { label: 'Mileage', key: 'mileage' },
  { label: 'Rating', key: 'rating' },
];

function ComparePage() {
  const { compare } = useCarStore();
  const comparedCars = useMemo(() => mockCars.filter((car) => compare.includes(car.id)), [compare]);

  if (comparedCars.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <Card className="text-center">
          <h1 className="text-3xl font-semibold text-slate-950 dark:text-white">No cars selected for comparison</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Choose vehicles from the listings to compare specs side-by-side.</p>
        </Card>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-8 lg:px-10">
      <SectionHeading title="Compare cars" subtitle="Side-by-side performance" />
      <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_2fr]">
        <Card className="space-y-6 p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Quick compare</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">Select key specs</h2>
          </div>
          <div className="space-y-3">
            {specs.map((spec) => (
              <div key={spec.key} className="rounded-3xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-surface2/90 p-4 text-sm text-slate-700 dark:text-slate-300">
                {spec.label}
              </div>
            ))}
          </div>
        </Card>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {comparedCars.map((car) => (
            <Card key={car.id} className="space-y-5 p-6">
              <div className="overflow-hidden rounded-3xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-slate-950/80">
                <SafeImage src={car.image} alt={car.name} className="h-44 w-full object-cover" />
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{car.brand}</p>
                <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{car.name}</h3>
                <p className="text-slate-600 dark:text-slate-300">{car.description}</p>
              </div>
              <div className="grid gap-3 text-sm text-slate-700 dark:text-slate-200">
                {specs.map((spec) => (
                  <div key={`${car.id}-${spec.key}`} className="grid grid-cols-[1fr_auto] gap-3 rounded-3xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-surface/80 p-4">
                    <span className="text-slate-600 dark:text-slate-400">{spec.label}</span>
                    <span className="font-semibold text-slate-950 dark:text-white">
                      {spec.key === 'price'
                        ? formatPrice(car.price)
                        : spec.key === 'horsepower'
                        ? `${car.horsepower} HP`
                        : spec.key === 'rating'
                        ? `${car.rating} ★`
                        : spec.key === 'mileage'
                        ? `${car.mileage.toLocaleString()} km`
                        : (car as any)[spec.key]}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComparePage;
