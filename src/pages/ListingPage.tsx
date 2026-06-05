import { useMemo, useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import CarCard from '../components/car/CarCard';
import CarFilters from '../components/car/CarFilters';
import { useCarStore } from '../store/carStore';
import { useDebounce } from '../hooks/useDebounce';
import Button from '../components/ui/Button';

function ListingPage() {
  const {
    cars,
    search,
    brandFilter,
    categoryFilter,
    priceRange,
    fuelFilter,
    sortKey,
    compare,
    favorites,
    setSearch,
    setBrandFilter,
    setCategoryFilter,
    setPriceRange,
    setFuelFilter,
    setSortKey,
    toggleCompare,
    toggleFavorite,
  } = useCarStore();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const debouncedSearch = useDebounce(search, 250);

  const filteredCars = useMemo(() => {
    return cars
      .filter((car) =>
        [car.name, car.brand, car.description].some((value) => value.toLowerCase().includes(debouncedSearch.toLowerCase()))
      )
      .filter((car) => (brandFilter === 'All' ? true : car.brand === brandFilter))
      .filter((car) => (categoryFilter === 'All' ? true : car.category === categoryFilter))
      .filter((car) => (fuelFilter === 'All' ? true : car.fuel === fuelFilter))
      .filter((car) => car.price <= priceRange[1])
      .sort((a, b) => {
        if (sortKey === 'price') return a.price - b.price;
        if (sortKey === 'popularity') return b.popularity - a.popularity;
        return b.year - a.year;
      });
  }, [cars, debouncedSearch, brandFilter, categoryFilter, priceRange, fuelFilter, sortKey]);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-8 lg:px-10">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading title="Inventory" subtitle="Refine your search" />
        <div className="flex flex-wrap gap-3">
          <Button variant={viewMode === 'grid' ? 'primary' : 'outline'} onClick={() => setViewMode('grid')}>
            Grid
          </Button>
          <Button variant={viewMode === 'list' ? 'primary' : 'outline'} onClick={() => setViewMode('list')}>
            List
          </Button>
        </div>
      </div>
      <CarFilters
        search={search}
        brand={brandFilter}
        category={categoryFilter}
        priceRange={priceRange}
        fuel={fuelFilter}
        sortKey={sortKey}
        onSearch={setSearch}
        onBrandChange={setBrandFilter}
        onCategoryChange={setCategoryFilter}
        onPriceChange={setPriceRange}
        onFuelChange={setFuelFilter}
        onSortChange={setSortKey}
        onReset={() => {
          setSearch('');
          setBrandFilter('All');
          setCategoryFilter('All');
          setFuelFilter('All');
          setPriceRange([0, 250000]);
          setSortKey('newest');
        }}
      />
      <div className={`mt-10 grid gap-8 ${viewMode === 'grid' ? 'lg:grid-cols-3' : ''}`}>
        {filteredCars.map((car) => (
          <div key={car.id} className={viewMode === 'list' ? 'lg:col-span-3' : ''}>
            <CarCard
              car={car}
              onCompare={toggleCompare}
              onFavorite={toggleFavorite}
              isCompared={compare.includes(car.id)}
              isFavorite={favorites.includes(car.id)}
            />
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-4 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-surface2/80 p-6 text-slate-700 dark:text-slate-300 sm:grid-cols-2">
        <p className="text-sm">{filteredCars.length} vehicles match your search.</p>
        <p className="text-sm">Selected for comparison: {compare.length}. Favorites: {favorites.length}.</p>
      </div>
    </section>
  );
}

export default ListingPage;
