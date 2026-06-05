import { Link, NavLink } from 'react-router-dom';
import type { ThemeMode } from '../../store/uiStore';

interface NavBarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

const routes = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Xe', path: '/cars' },
  { label: 'So sánh', path: '/compare' },
  { label: 'Yêu thích', path: '/favorites' },
  { label: 'Liên hệ', path: '/contact' },
];

function NavBar({ theme, onToggleTheme }: NavBarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-400 text-white shadow-glow">
            TA
          </span>
          TA Car
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-violet-600 dark:text-cream' : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'}`
              }
            >
              {route.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="rounded-full border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-3 py-2 text-sm text-slate-700 dark:text-slate-100 transition hover:border-slate-400 dark:hover:border-white/20 hover:bg-slate-200 dark:hover:bg-white/10"
          >
            {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
          <Link
            to="/login"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
