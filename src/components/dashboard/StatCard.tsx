import type { ReactNode } from 'react';

interface StatCardProps {
  label: string;
  value: string;
  icon: ReactNode;
}

export default function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <div className="glass-panel card-glow rounded-3xl border border-slate-200 dark:border-white/10 p-6">
      <div className="flex items-center gap-4">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300">{icon}</div>
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-600 dark:text-slate-400">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}
