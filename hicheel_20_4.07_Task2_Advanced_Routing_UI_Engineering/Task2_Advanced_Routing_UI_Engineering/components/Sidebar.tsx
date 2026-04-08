'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Dashboard' },
  { href: '/settings', label: 'Settings' },
  { href: '/settings/profile', label: 'Profile' },
  { href: '/login', label: 'Login' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-r border-white/10 bg-[#12061f]/90 md:w-72">
      <div className="p-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-violet-300">
            Zenith UI
          </p>
          <h2 className="text-2xl font-bold text-white">Control Panel</h2>
          <p className="mt-2 text-sm text-slate-300">
            Nested layouts, parallel routes, design system бүгд орсон.
          </p>
        </div>
      </div>

      <nav className="space-y-2 px-4 pb-6">
        {links.map((link) => {
          const active =
            pathname === link.href ||
            (link.href !== '/' && pathname.startsWith(link.href));

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'block rounded-xl px-4 py-3 text-sm font-medium transition',
                active
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
