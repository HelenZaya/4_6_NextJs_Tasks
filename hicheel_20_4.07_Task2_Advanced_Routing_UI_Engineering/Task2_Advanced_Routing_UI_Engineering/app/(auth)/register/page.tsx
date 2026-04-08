'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

export default function RegisterPage() {
  return (
    <Card title="Бүртгүүлэх" description="Auth group доторх register page">
      <form className="space-y-4">
        <Input label="Нэр" placeholder="Helen" />
        <Input label="И-мэйл" placeholder="helen@example.com" />
        <Input label="Нууц үг" type="password" placeholder="••••••••" />
        <Button className="w-full" variant="secondary">Бүртгэл үүсгэх</Button>
        <div className="text-sm text-slate-300">
          Аль хэдийн бүртгэлтэй юу? <Link href="/login" className="text-violet-300 underline">Login</Link>
        </div>
      </form>
    </Card>
  );
}
