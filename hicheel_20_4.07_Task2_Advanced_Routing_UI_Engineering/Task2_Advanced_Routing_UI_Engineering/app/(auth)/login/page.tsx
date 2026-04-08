'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

export default function LoginPage() {
  return (
    <Card title="Нэвтрэх" description="Auth layout доторх login page">
      <form className="space-y-4">
        <Input label="И-мэйл" placeholder="helen@example.com" />
        <Input label="Нууц үг" type="password" placeholder="••••••••" />
        <Button className="w-full">Нэвтрэх</Button>
        <div className="text-sm text-slate-300">
          Бүртгэлгүй юу? <Link href="/register" className="text-violet-300 underline">Register</Link>
        </div>
      </form>
    </Card>
  );
}
