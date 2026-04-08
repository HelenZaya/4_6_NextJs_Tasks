import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({
  children,
  stats,
  activity,
}: {
  children: React.ReactNode;
  stats: React.ReactNode;
  activity: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="mb-6 grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">{stats}</div>
            <div className="xl:col-span-1">{activity}</div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
