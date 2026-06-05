import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const login = useUserStore((state) => state.login);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Vui lòng nhập email và mật khẩu.');
      return;
    }
    login({ id: 'user-01', name: 'Khách hàng TA Car', email, role: 'customer' }, 'token-01');
    navigate('/dashboard');
  };

  return (
    <section className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-white">
      <nav className="border-b border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950/90 py-4">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between sm:px-8 lg:px-10">
          <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-400 text-white shadow-glow">
              TA
            </span>
            <span>TA Car</span>
          </Link>
          <Link to="/" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white">
            Quay về trang chủ
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6 py-12 sm:px-8 lg:px-10">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Đăng nhập tài khoản
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Quản lý danh sách xe yêu thích và đặt lái thử tại TA Car
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 backdrop-blur-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Mật khẩu
                </label>
                <Input
                  type="password"
                  placeholder="Mật khẩu của bạn"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="mt-2"
                />
              </div>

              {error && (
                <div className="rounded-3xl border border-rose-200 dark:border-rose-500/20 bg-rose-50 dark:bg-rose-500/10 px-4 py-3 text-sm text-rose-700 dark:text-rose-400">
                  {error}
                </div>
              )}

              <Button type="submit" className="w-full">
                Đăng nhập
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200 dark:bg-white/10" />
              <span className="relative flex justify-center bg-white dark:bg-slate-900/50 px-3 text-sm text-slate-500 dark:text-slate-400">
                hoặc
              </span>
            </div>

            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                className="w-full dark:border-white/20 dark:hover:bg-white/5"
              >
                Đăng nhập với Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full dark:border-white/20 dark:hover:bg-white/5"
              >
                Đăng nhập với Facebook
              </Button>
            </div>
          </div>

          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            Khách hàng mới?{' '}
            <Link to="/register" className="font-semibold text-slate-950 dark:text-white hover:text-violet-600 dark:hover:text-violet-400">
              Tạo tài khoản ngay
            </Link>
          </p>

          <div className="grid gap-4 sm:grid-cols-2 text-center">
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/30 p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                Hỗ trợ
              </p>
              <p className="mt-2 font-semibold">Liên hệ 1900-xxxx</p>
            </div>
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/30 p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                Email
              </p>
              <p className="mt-2 font-semibold text-sm">info@tacar.vn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
