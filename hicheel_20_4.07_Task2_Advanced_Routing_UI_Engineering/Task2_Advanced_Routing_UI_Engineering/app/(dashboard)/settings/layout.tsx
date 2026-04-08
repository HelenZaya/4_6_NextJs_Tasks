import SettingsTabs from '@/components/SettingsTabs';

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#12061f]/80 p-6">
      <h1 className="mb-2 text-2xl font-bold text-white">Тохиргоо</h1>
      <p className="mb-6 text-slate-300">
        Settings nested layout — tab navigation энэ түвшинд хадгалагдана.
      </p>
      <SettingsTabs />
      {children}
    </div>
  );
}
