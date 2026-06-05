import { classNames } from '../../lib/classNames';
import type { InputHTMLAttributes } from 'react';

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={classNames(
        'w-full rounded-3xl border px-4 py-3 text-sm outline-none transition focus:ring-2',
        'border-slate-300 bg-white text-slate-950 placeholder-slate-400',
        'dark:border-white/10 dark:bg-surface2/90 dark:text-slate-100 dark:placeholder-slate-500',
        'focus:border-violet-400 focus:ring-violet-400/20 dark:focus:border-violet-400 dark:focus:ring-violet-400/20',
        props.className
      )}
    />
  );
}
