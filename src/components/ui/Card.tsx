import { classNames } from '../../lib/classNames';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={classNames('glass-panel card-glow rounded-3xl border border-slate-200 dark:border-white/10 p-6', className)}>
      {children}
    </div>
  );
}
