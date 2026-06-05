import { useMemo } from 'react';
import { useCarStore } from '../store/carStore';
import { cars as mockCars } from '../api/mock';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import CarCard from '../components/car/CarCard';

function FavoritesPage() {
  const { favorites, toggleCompare, toggleFavorite, compare } = useCarStore();
  const favoriteCars = useMemo(
    () => mockCars.filter((car) => favorites.includes(car.id)),
    [favorites]
  );

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-8 lg:px-10">
      <SectionHeading title="Saved vehicles" subtitle="Your wishlist" />
      {favoriteCars.length === 0 ? (
        <Card className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">No saved vehicles yet</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Mark your favorite models in inventory to keep them here.</p>
        </Card>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {favoriteCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onCompare={toggleCompare}
              onFavorite={toggleFavorite}
              isCompared={compare.includes(car.id)}
              isFavorite={favorites.includes(car.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default FavoritesPage;
