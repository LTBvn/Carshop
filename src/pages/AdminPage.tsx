import SectionHeading from '../components/ui/SectionHeading';
import StatCard from '../components/dashboard/StatCard';
import Card from '../components/ui/Card';

function AdminPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-8 lg:px-10">
      <SectionHeading title="Admin dashboard" subtitle="Manage inventory and users" />
      <div className="mt-10 grid gap-6 xl:grid-cols-3">
        <StatCard label="Vehicles" value="24" icon={<span>🚘</span>} />
        <StatCard label="Orders" value="18" icon={<span>📦</span>} />
        <StatCard label="Users" value="1.2K" icon={<span>👤</span>} />
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <Card className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Manage vehicles</h2>
          <p className="text-slate-600 dark:text-slate-300">Add, edit or archive premium models and curate the showroom collection.</p>
        </Card>
        <Card className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Manage orders</h2>
          <p className="text-slate-600 dark:text-slate-300">Review current reservations, process deliveries, and approve financing.</p>
        </Card>
        <Card className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Manage users</h2>
          <p className="text-slate-600 dark:text-slate-300">Monitor customer accounts and administrative access with a sleek user panel.</p>
        </Card>
      </div>
    </section>
  );
}

export default AdminPage;
