import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

export default function SettingsPage() {
  return (
    <Card title="Ерөнхий тохиргоо" description="Settings root page">
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Компаний нэр" defaultValue="Zenith Studio" />
        <Input label="Timezone" defaultValue="Asia/Ulaanbaatar" />
      </div>
      <div className="mt-6 flex gap-3">
        <Badge variant="success">Saved</Badge>
        <Badge variant="default">Design System</Badge>
      </div>
    </Card>
  );
}
