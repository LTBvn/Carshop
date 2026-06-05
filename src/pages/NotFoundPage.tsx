import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center px-6 py-20 sm:px-8">
      <Card className="w-full rounded-[36px] border border-white/10 p-12 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Page not found</p>
        <h1 className="mt-6 text-5xl font-semibold text-white">404</h1>
        <p className="mt-4 text-lg text-slate-300">The route you are looking for does not exist or has been moved.</p>
        <Link to="/" className="mt-8 inline-flex">
          <Button>Return home</Button>
        </Link>
      </Card>
    </section>
  );
}

export default NotFoundPage;
