export default function LoadingStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-36 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
      ))}
    </div>
  );
}
