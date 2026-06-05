import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { cars as mockCars } from '../api/mock';
import CarGallery from '../components/car/CarGallery';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ChatBot from '../components/ui/ChatBot';
import SectionHeading from '../components/ui/SectionHeading';
import { formatPrice } from '../utils/format';
import type { Car } from '../types';

function DetailPage() {
  const { id } = useParams();

  const car = useMemo(() => mockCars.find((item) => item.id === id) as Car | undefined, [id]);

  if (!car) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="glass-panel card-glow rounded-3xl border border-slate-200 dark:border-white/10 p-10 text-center">
          <h1 className="text-3xl font-semibold text-slate-950 dark:text-white">Vehicle not found</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Please return to the listings and choose another model.</p>
        </div>
      </section>
    );
  }

  const monthlyPayment = Math.round((car.price * 0.18) / 60);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-8 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <SectionHeading title={car.name} subtitle={`${car.brand} • ${car.year}`} />
          <CarGallery car={car} />
          <Card className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Specifications</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Feature label="Fuel" value={car.fuel} />
              <Feature label="Transmission" value={car.transmission} />
              <Feature label="Horsepower" value={`${car.horsepower} HP`} />
              <Feature label="Seats" value={`${car.seats}`} />
              <Feature label="Mileage" value={`${car.mileage.toLocaleString()} km`} />
              <Feature label="Rating" value={`${car.rating} ★`} />
            </div>
          </Card>
          <Card className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Key features</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {car.features.map((feature) => (
                <div key={feature} className="rounded-3xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-surface/80 p-4 text-sm text-slate-700 dark:text-slate-200">
                  {feature}
                </div>
              ))}
            </div>
          </Card>
        </div>
        <aside className="space-y-6">
          <Card className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Giá tham khảo</p>
                <p className="mt-2 text-4xl font-semibold text-slate-950 dark:text-white">{formatPrice(car.price)}</p>
              </div>
              <div className="rounded-3xl bg-slate-200 dark:bg-slate-950/80 px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Xe phổ thông</div>
            </div>
            <Button type="button">Yêu cầu tư vấn showroom</Button>
          </Card>
          <Card className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Liên hệ showroom</h3>
            <div className="space-y-3 text-slate-600 dark:text-slate-300">
              <p>Gửi yêu cầu để nhân viên tư vấn chi tiết, báo giá và đặt lịch lái thử.</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Hotline: <span className="text-slate-950 dark:text-white">0909 123 456</span></p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Email: <span className="text-slate-950 dark:text-white">info@showroom.vn</span></p>
            </div>
            <Button type="button">Gửi yêu cầu ngay</Button>
          </Card>
          <ChatBot />
          <Card className="space-y-5">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Financing calculator</h3>
            <div className="space-y-3 text-slate-600 dark:text-slate-300">
              <p>Ước tính trả góp theo lãi suất 18% hàng năm trong 60 tháng.</p>
              <p className="text-3xl font-semibold text-slate-950 dark:text-white">{formatPrice(monthlyPayment)}</p>
            </div>
          </Card>
          <Card className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Contact dealer</h3>
            <form className="space-y-4">
              <label className="block text-sm text-slate-700 dark:text-slate-300">
                Name
                <input type="text" placeholder="Your name" className="mt-2 w-full rounded-3xl border border-slate-300 dark:border-white/10 bg-white dark:bg-surface2/90 px-4 py-3 text-sm text-slate-950 dark:text-slate-100 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 dark:focus:border-violet-400 dark:focus:ring-violet-400/20" />
              </label>
              <label className="block text-sm text-slate-700 dark:text-slate-300">
                Email
                <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-3xl border border-slate-300 dark:border-white/10 bg-white dark:bg-surface2/90 px-4 py-3 text-sm text-slate-950 dark:text-slate-100 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 dark:focus:border-violet-400 dark:focus:ring-violet-400/20" />
              </label>
              <Button type="submit">Request info</Button>
            </form>
          </Card>
        </aside>
      </div>
    </section>
  );
}

function Feature({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-surface2/90 p-5 text-sm text-slate-700 dark:text-slate-100">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-600 dark:text-slate-500">{label}</p>
      <p className="mt-2 text-base font-semibold text-slate-950 dark:text-white">{value}</p>
    </div>
  );
}

export default DetailPage;
