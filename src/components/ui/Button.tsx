import { classNames } from '../../lib/classNames';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

interface ButtonProps<T extends ElementType = 'button'> {
  as?: T;
  variant?: 'primary' | 'ghost' | 'outline';
  children: ReactNode;
  className?: string;
}

export default function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, 'className' | 'children'>) {
  const Element = as || 'button';

  return (
    <Element
      {...props}
      className={classNames(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-violet-400/40',
        variant === 'primary' && 'bg-gradient-to-r from-violet-500 to-sky-400 text-white shadow-glow hover:brightness-105',
        variant === 'ghost' && 'border border-slate-300/70 bg-white/90 text-slate-950 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10',
        variant === 'outline' && 'border border-slate-600 text-slate-950 hover:border-slate-400 hover:text-slate-950 dark:border-slate-600 dark:text-slate-100 dark:hover:border-slate-400 dark:hover:text-white',
        className
      )}
    >
      {children}
    </Element>
  );
}
