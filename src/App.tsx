import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useUIStore } from './store/uiStore';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';
import DetailPage from './pages/DetailPage';
import ComparePage from './pages/ComparePage';
import FavoritesPage from './pages/FavoritesPage';
import CartPage from './pages/CartPage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const { theme, toggleTheme } = useUIStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-[radial-gradient(circle_at_top,_rgba(163,103,255,0.18),transparent_0%),_linear-gradient(180deg,_#071018_0%,_#070b13_65%,_#020407_100%)] dark:text-white">
      <NavBar theme={theme} onToggleTheme={toggleTheme} />
      <main className="relative isolate overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<ListingPage />} />
          <Route path="/cars/:id" element={<DetailPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/contact" element={<CartPage />} />
          <Route path="/cart" element={<Navigate to="/contact" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
