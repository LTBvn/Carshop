import type { Car } from '../../types';
import SafeImage from '../ui/SafeImage';

interface CarGalleryProps {
  car: Car;
}

export default function CarGallery({ car }: CarGalleryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <SafeImage src={car.image} alt={car.name} className="h-96 w-full rounded-3xl object-cover" />
      <div className="grid gap-4">
        {car.gallery.map((item) => (
          <SafeImage key={item} src={item} alt={car.name} className="h-44 w-full rounded-3xl object-cover" />
        ))}
      </div>
    </div>
  );
}
