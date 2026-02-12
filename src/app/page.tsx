export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-accent px-4 py-3 text-sm font-bold uppercase tracking-widest text-black-primary focus-visible:translate-x-0"
      >
        Skip to Content
      </a>

      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Sidebar — Phase 2 */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Chaeho Yoon
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-text-primary sm:text-xl">
              Full-Stack Software Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-text-secondary">
              I build scalable platforms and ship products used by millions.
            </p>
          </div>
        </header>

        {/* Main content — Phases 3+ */}
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          <section className="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
            <p className="text-text-secondary">
              Portfolio coming together — Phase 1 complete. ✓
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
