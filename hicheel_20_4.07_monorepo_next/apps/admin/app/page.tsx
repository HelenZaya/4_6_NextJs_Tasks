'use client';

import Link from 'next/link';
import { Button } from '@my-org/ui';

export default function HomePage() {
  return (
    <main className="container">
      <div className="card">
        <p style={{ color: '#6ee7b7', fontWeight: 700, letterSpacing: 1.2, fontSize: 12, textTransform: 'uppercase' }}>
          Monorepo Demo · admin
        </p>
        <h1 style={{ fontSize: 42, marginBottom: 12 }}>Admin Panel</h1>
        <p style={{ color: '#cbd5e1', maxWidth: 700, lineHeight: 1.7 }}>
          Энэ бол apps/admin. Monorepo доторх хоёр дахь Next.js app бөгөөд мөн shared UI package ашиглаж байна.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 20, alignItems: 'center' }}>
          <Button onClick={() => alert('Shared UI Button ажиллаж байна!')}>
            Shared Button
          </Button>
          <Link href="http://localhost:3000">Go to Web</Link>
        </div>
      </div>
    </main>
  );
}
