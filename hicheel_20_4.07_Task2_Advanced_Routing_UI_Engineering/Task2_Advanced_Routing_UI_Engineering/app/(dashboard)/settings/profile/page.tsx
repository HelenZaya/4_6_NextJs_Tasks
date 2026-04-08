import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function SettingsProfilePage() {
  return (
    <Card title="Профайл" description="/settings/profile nested page">
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Нэр" defaultValue="Helen" />
        <Input label="И-мэйл" defaultValue="helen@example.com" />
        <Input label="Албан тушаал" defaultValue="Frontend Engineer" />
        <Input label="Утас" defaultValue="+976 99112233" />
      </div>
      <div className="mt-6 flex gap-3">
        <Button>Хадгалах</Button>
        <Button variant="ghost">Цуцлах</Button>
      </div>
    </Card>
  );
}
