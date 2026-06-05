import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-surface/90 px-6 py-10 text-slate-600 dark:text-slate-400 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-lg font-semibold text-slate-950 dark:text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-400 text-white shadow-glow">
              TA
            </span>
            TA Car
          </div>
          <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">
            Showroom TA Car chuyên xe phổ thông, tư vấn trả góp và đặt lịch lái thử nhanh chóng.
          </p>
        </div>
        <div className="grid gap-3 text-sm sm:grid-cols-3">
          <Link to="/cars" className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white">
            Xe
          </Link>
          <Link to="/dashboard" className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white">
            Bảng điều khiển
          </Link>
          <Link to="/admin" className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
