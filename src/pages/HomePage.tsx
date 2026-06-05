import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { cars, reviews, brands, categories } from '../api/mock';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import CarCard from '../components/car/CarCard';
import SafeImage from '../components/ui/SafeImage';
import { formatPrice } from '../utils/format';

const featured = cars.slice(0, 3);

function HomePage() {
  const topBrands = useMemo(() => brands.slice(0, 5), []);
  const popularCategories = useMemo(() => categories.slice(0, 4), []);
  const heroCar = cars[0];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 text-slate-950 dark:text-white">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-700 dark:text-slate-300 shadow-sm">
            Showroom TA Car
          </div>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Mua xe phổ thông Việt Nam dễ dàng, nhận ưu đãi và đặt lái thử ngay.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              Xem ngay Toyota Vios, Honda City, Kia Morning, VinFast và nhiều mẫu xe phù hợp gia đình, đi nội thành và du lịch. Tư vấn chi tiết, giá rõ ràng và đặt lịch lái thử nhanh chóng.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button as="a" href="/cars">Xem tất cả xe</Button>
            <Button variant="outline" as="a" href="/contact">Đặt lái thử</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-5 text-center shadow-sm">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Xe mới chính hãng</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">120+</p>
            </div>
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-5 text-center shadow-sm">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Lái thử trong ngày</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">100%</p>
            </div>
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-5 text-center shadow-sm">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Hỗ trợ trả góp</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Dễ dàng</p>
            </div>
          </div>
          <div className="rounded-[32px] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Bộ lọc nhanh</p>
                <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">Sedan, SUV, Hatchback, EV</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Showroom tin cậy</p>
                <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">Tư vấn 1:1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[36px] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 shadow-xl">
          <div className="relative">
            <SafeImage src={heroCar.image} alt={heroCar.name} className="aspect-[16/10] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-6 py-6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-300">{heroCar.category} • {heroCar.brand}</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">{heroCar.name}</h2>
            </div>
          </div>
          <div className="space-y-4 p-6">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-50 dark:bg-white/5 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Giá từ</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{formatPrice(heroCar.price)}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 dark:bg-white/5 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Đánh giá</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{heroCar.rating} ★</p>
              </div>
              <div className="rounded-3xl bg-slate-50 dark:bg-white/5 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Km</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{heroCar.mileage.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button as="a" href={`/cars/${heroCar.id}`}>Xem chi tiết</Button>
              <Button variant="outline" as="a" href="/contact">Liên hệ ngay</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 space-y-10">
        <SectionHeading title="Xe nổi bật" subtitle="Các mẫu xe bán chạy tại thị trường Việt Nam" action={<Link to="/cars" className="text-sm font-semibold text-slate-950 dark:text-white hover:text-slate-700 dark:hover:text-slate-300">Xem tất cả</Link>} />
        <div className="grid gap-8 lg:grid-cols-3">
          {featured.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-8 shadow-sm">
          <SectionHeading title="Thương hiệu ưa chuộng" subtitle="Những hãng xe phổ biến tại Việt Nam" />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {topBrands.map((brandName) => (
              <div key={brandName} className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/30 p-5 text-center">
                <p className="text-lg font-semibold text-slate-950 dark:text-white">{brandName}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[32px] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-8 shadow-sm">
          <SectionHeading title="Đánh giá khách hàng" subtitle="Ý kiến từ những khách đã mua xe" />
          <div className="mt-6 space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/30 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-950 dark:text-white">{review.author}</p>
                  <span className="rounded-full bg-slate-100 dark:bg-white/10 px-3 py-1 text-sm text-slate-600 dark:text-slate-400">{review.rating} ★</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-6 sm:grid-cols-3">
        {popularCategories.map((categoryName) => (
          <div key={categoryName} className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-8 text-center shadow-sm">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Hạng mục</p>
            <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{categoryName}</p>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">Mẫu xe phù hợp với nhu cầu di chuyển hàng ngày của bạn.</p>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-[32px] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-10 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Sẵn sàng tìm xe?</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Kết nối với TA Car để nhận tư vấn nhanh nhất.</h2>
          </div>
          <Button as="a" href="/contact">Liên hệ showroom</Button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
