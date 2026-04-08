import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function DashboardHomePage() {
  return (
    <div className="space-y-6">
      <Card title="Dashboard Home" description="Route group + parallel slot-уудын доорх үндсэн page">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="default">Nested Layout</Badge>
          <Badge variant="success">Parallel Routes</Badge>
          <Badge variant="warning">Route Group</Badge>
          <Badge variant="danger">UI Engineering</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button>Хадгалах</Button>
          <Button variant="secondary">Шинэчлэх</Button>
          <Button variant="ghost">Цуцлах</Button>
          <Button variant="danger" isLoading>Устгах</Button>
        </div>
      </Card>
    </div>
  );
}
