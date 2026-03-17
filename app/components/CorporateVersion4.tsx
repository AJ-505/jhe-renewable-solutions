import Image from "next/image";

const whatsappLink =
  "https://api.whatsapp.com/send?phone=2348076927465&text=Hello%2C%20Good%20day.%20I%20am%20interested%20in%20your%20solar%20solutions.%20Kindly%20give%20me%20more%20information.%20";

const problems = [
  {
    icon: "⚡",
    title: "Battery Failure",
    desc: "Batteries that fail too quickly",
  },
  {
    icon: "🔌",
    title: "Inverter Issues",
    desc: "Inverters that can't handle real load",
  },
  {
    icon: "🌙",
    title: "Night Coverage",
    desc: "Systems that don't last through the night",
  },
  {
    icon: "💰",
    title: "Capital Waste",
    desc: "Oversized systems that waste capital",
  },
];

const process = [
  {
    icon: "📊",
    title: "Load Analysis",
    desc: "Detailed consumption assessment",
  },
  { icon: "📈", title: "Pattern Study", desc: "Understanding usage patterns" },
  {
    icon: "🔋",
    title: "Battery Autonomy",
    desc: "Real calculations for reliability",
  },
  {
    icon: "⚙️",
    title: "Inverter Sizing",
    desc: "Properly matched to your needs",
  },
  { icon: "💵", title: "ROI Analysis", desc: "Transparent payback modeling" },
  { icon: "✨", title: "Optimization", desc: "Balanced cost vs performance" },
];

const clients = [
  {
    icon: "🏠",
    title: "Residential",
    desc: "Homes seeking reliable backup power",
  },
  {
    icon: "🏢",
    title: "Commercial",
    desc: "Businesses reducing diesel dependence",
  },
  {
    icon: "🏫",
    title: "Educational",
    desc: "Schools & institutions improving stability",
  },
  {
    icon: "🏛️",
    title: "Corporate",
    desc: "Offices tired of grid inconsistency",
  },
  {
    icon: "🏭",
    title: "Industrial",
    desc: "Facilities planning long-term cost reduction",
  },
];

export default function CorporateVersion4() {
  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      style={{ fontFamily: "var(--font-manrope)" }}
    >
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-blue-200 bg-white">
              <Image
                src="/logo.webp"
                alt="JHE Renewable Solutions logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg leading-tight font-bold text-slate-900">
                JHE
              </span>
              <span className="text-xs font-medium tracking-wide text-blue-600">
                Renewable Solutions
              </span>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-linear-to-b from-blue-50 to-white pt-32 pb-20">
        <div className="absolute top-0 right-0 h-full w-1/2 bg-linear-to-l from-blue-100/50 to-transparent" />
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-reveal-up mb-8 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              Engineered Solar Solutions
            </div>

            <h1
              className="animate-reveal-up mb-6 text-4xl leading-[1.1] font-bold md:text-5xl lg:text-6xl"
              style={{
                animationDelay: "100ms",
                animationFillMode: "backwards",
              }}
            >
              Stop Losing Money to Fuel.{" "}
              <span className="text-blue-600">Switch to Engineered Solar.</span>
            </h1>

            <p
              className="animate-reveal-up mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-slate-600"
              style={{
                animationDelay: "200ms",
                animationFillMode: "backwards",
              }}
            >
              We design, size, and install optimized solar systems using proper
              load analysis, ROI modeling, and real engineering principles — so
              you never overspend or undersize.
            </p>

            <div
              className="animate-reveal-up flex flex-wrap justify-center gap-4"
              style={{
                animationDelay: "300ms",
                animationFillMode: "backwards",
              }}
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40"
              >
                Contact Us
              </a>
            </div>

            <div
              className="animate-reveal-up mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-slate-200 pt-8"
              style={{
                animationDelay: "400ms",
                animationFillMode: "backwards",
              }}
            >
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-slate-500">Installations</div>
              </div>
              <div className="h-12 w-px bg-slate-200" />
              <div>
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-slate-500">Satisfaction</div>
              </div>
              <div className="h-12 w-px bg-slate-200" />
              <div>
                <div className="text-3xl font-bold text-blue-600">15yr</div>
                <div className="text-sm text-slate-500">Avg. System Life</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wide uppercase text-blue-600">
              The Problem
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold md:text-4xl">
              Energy Costs Are Rising. Most Solar Systems Are Poorly Designed.
            </h2>
            <p className="text-slate-600">
              Many businesses and homeowners invest in solar expecting savings
              but end up with:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {problems.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-red-100 hover:shadow-md"
              >
                <div className="mb-4 text-3xl">{p.icon}</div>
                <h3 className="mb-2 font-semibold text-slate-900 transition-colors group-hover:text-red-600">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold tracking-wide uppercase text-blue-600">
                Our Approach
              </span>
              <h2 className="mt-3 mb-6 text-3xl font-bold md:text-4xl">
                We Don&apos;t Guess.{" "}
                <span className="text-blue-600">We Engineer.</span>
              </h2>
              <p className="mb-8 leading-relaxed text-slate-600">
                Before installation, we conduct comprehensive analysis to ensure
                your system is perfectly sized for your needs. No overbuilding.
                No underperformance.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {process.map((p) => (
                  <div
                    key={p.title}
                    className="group flex items-start gap-3 rounded-xl bg-slate-50 p-4 transition-colors hover:bg-blue-50"
                  >
                    <span className="text-xl">{p.icon}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
                        {p.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-500">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <p className="text-center font-medium text-blue-900">
                  So you invest once — and invest{" "}
                  <span className="font-bold text-blue-600">correctly</span>.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-linear-to-br from-blue-100 to-blue-50">
                <div className="absolute inset-8 flex items-center justify-center rounded-2xl bg-white shadow-xl">
                  <div className="p-8 text-center">
                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-12 w-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">
                      Engineered Excellence
                    </h3>
                    <p className="text-sm text-slate-500">
                      Every system designed with precision
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wide uppercase text-blue-600">
              Who We Serve
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Solutions for Every Sector
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clients.map((c) => (
              <div
                key={c.title}
                className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-blue-100 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{c.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  {c.title}
                </h3>
                <p className="text-slate-500">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 to-blue-700 py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            If your energy expenses are significant, optimization matters.
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Get a free consultation and see how much you could save.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-white px-10 py-5 text-lg font-bold text-blue-600 shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
          >
            Contact Us Now
          </a>
        </div>
      </section>

      <footer className="bg-slate-900 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-blue-400/40 bg-white/10">
              <Image
                src="/logo.webp"
                alt="JHE Renewable Solutions logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <span className="font-semibold text-white">
              JHE Renewable Solutions
            </span>
          </div>
          <p className="text-sm text-slate-400">
            © 2026 JHE Renewable Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
