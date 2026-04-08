export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-[#12061f]/80 shadow-2xl">
        <div className="grid md:grid-cols-2">
          <section className="hidden border-r border-white/10 bg-gradient-to-br from-violet-700/30 to-fuchsia-500/10 p-10 md:block">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-violet-200">
              (auth) route group
            </p>
            <h1 className="mb-4 text-4xl font-bold text-white">Secure Access Portal</h1>
            <p className="max-w-md text-slate-200 leading-7">
              Энэ layout нь зөвхөн /login, /register хуудсуудад хамаарна. URL-д (auth) folder харагдахгүй.
            </p>
          </section>
          <section className="p-8 md:p-10">{children}</section>
        </div>
      </div>
    </main>
  );
}
