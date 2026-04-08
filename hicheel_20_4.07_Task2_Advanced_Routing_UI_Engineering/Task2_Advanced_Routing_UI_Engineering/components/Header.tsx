export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/20 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-fuchsia-300">
            Task2 · Advanced Routing + UI Engineering
          </p>
          <h1 className="text-lg font-semibold text-white">Dashboard System</h1>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
          Hello, Helen
        </div>
      </div>
    </header>
  );
}
