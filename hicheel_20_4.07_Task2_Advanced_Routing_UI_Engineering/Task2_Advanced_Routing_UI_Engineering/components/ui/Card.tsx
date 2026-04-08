import * as React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export function Card({ title, description, children, className, ...props }: CardProps) {
  return (
    <div className={cn('rounded-2xl border border-white/10 bg-[#12061f]/80 text-white shadow-xl', className)} {...props}>
      {(title || description) && (
        <div className="p-6 pb-0">
          {title && <h3 className="font-semibold leading-none text-white">{title}</h3>}
          {description && <p className="mt-2 text-sm text-slate-300">{description}</p>}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
