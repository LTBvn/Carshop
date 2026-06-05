import SectionHeading from '../components/ui/SectionHeading';
import StatCard from '../components/dashboard/StatCard';
import Card from '../components/ui/Card';

function DashboardPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-8 lg:px-10">
      <SectionHeading title="User dashboard" subtitle="Manage your ownership" />
      <div className="mt-10 grid gap-6 xl:grid-cols-3">
        <StatCard label="Saved cars" value="7" icon={<span>🚗</span>} />
        <StatCard label="Orders" value="3" icon={<span>🧾</span>} />
        <StatCard label="Support" value="24/7" icon={<span>💬</span>} />
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <Card className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Profile overview</h2>
          <div className="grid gap-3 text-slate-300">
            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-sm text-slate-400">Name</span>
              <span className="font-medium text-white">Aria Sterling</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-sm text-slate-400">Email</span>
              <span className="font-medium text-white">aria@luxauto.io</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-sm text-slate-400">Member since</span>
              <span className="font-medium text-white">2025</span>
            </div>
          </div>
        </Card>
        <Card className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Purchase history</h2>
          <div className="space-y-4 text-sm text-slate-200">
            <div className="rounded-3xl border border-white/10 bg-surface/80 p-4">
              <p className="font-semibold text-white">Aurora S8</p>
              <p className="text-slate-400">Delivered • $148,900</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-surface/80 p-4">
              <p className="font-semibold text-white">Nexus RD</p>
              <p className="text-slate-400">In transit • $125,500</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default DashboardPage;
