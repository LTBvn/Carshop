import type { ReactNode } from 'react';

interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className = 'h-6 w-full rounded-2xl bg-slate-700/60 animate-pulse' }: SkeletonProps) {
  return <div className={className} />;
}
