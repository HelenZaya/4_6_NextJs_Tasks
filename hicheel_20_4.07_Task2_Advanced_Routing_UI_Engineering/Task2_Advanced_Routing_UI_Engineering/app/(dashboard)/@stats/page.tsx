import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { statsData } from '@/lib/data';

export default function StatsSlotPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {statsData.map((item) => (
        <Card key={item.title} title={item.title} description={item.description} className="bg-gradient-to-br from-[#180826] to-[#12061f]">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-white">{item.value}</span>
            <Badge variant={item.badge}>{item.badge}</Badge>
          </div>
        </Card>
      ))}
    </div>
  );
}
