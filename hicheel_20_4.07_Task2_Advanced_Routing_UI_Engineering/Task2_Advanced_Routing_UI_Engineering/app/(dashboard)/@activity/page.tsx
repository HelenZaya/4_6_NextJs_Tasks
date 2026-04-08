import { Card } from '@/components/ui/Card';
import { activityData } from '@/lib/data';

export default function ActivitySlotPage() {
  return (
    <Card title="Сүүлийн үйлдлүүд" description="Parallel route @activity slot">
      <div className="space-y-4">
        {activityData.map((item) => (
          <div key={item.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="font-medium text-white">{item.title}</p>
            <p className="mt-1 text-sm text-slate-400">{item.time}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
