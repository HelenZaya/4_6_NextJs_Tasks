'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const tabs = [
  { href: '/settings', label: 'Ерөнхий' },
  { href: '/settings/profile', label: 'Профайл' },
];

export default function SettingsTabs() {
  const pathname = usePathname();

  return (
    <nav className="mb-6 flex gap-3 border-b border-white/10 pb-4">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition',
              active
                ? 'bg-violet-600 text-white'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
