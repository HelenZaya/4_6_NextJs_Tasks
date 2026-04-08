import * as React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, disabled, ...props }: InputProps) {
  return (
    <label className="block">
      {label && <span className="mb-2 block text-sm font-medium text-slate-200">{label}</span>}
      <input
        disabled={disabled}
        className={cn(
          'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-rose-400 focus:border-rose-400 focus:ring-rose-500/20',
          className
        )}
        {...props}
      />
      {error && <span className="mt-2 block text-sm text-rose-300">{error}</span>}
    </label>
  );
}
