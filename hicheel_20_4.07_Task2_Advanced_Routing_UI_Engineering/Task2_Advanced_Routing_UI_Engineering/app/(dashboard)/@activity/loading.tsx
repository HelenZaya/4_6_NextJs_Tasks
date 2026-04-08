export default function LoadingActivity() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-24 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
      ))}
    </div>
  );
}
