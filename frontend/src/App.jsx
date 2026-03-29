const services = [
  {
    name: "AC Repair & Service",
    tag: "Cooling",
    blurb: "Split AC, window AC, gas refill support, cooling issues, and routine servicing.",
  },
  {
    name: "Air Cooler Repair",
    tag: "Seasonal",
    blurb: "Pump issues, airflow problems, motor replacement, and pre-summer maintenance.",
  },
  {
    name: "Refrigerator Repair",
    tag: "Kitchen",
    blurb: "Compressor checks, cooling faults, leakage diagnosis, and freezer performance fixes.",
  },
  {
    name: "Washing Machine Repair",
    tag: "Laundry",
    blurb: "Semi-automatic and fully automatic repairs for drainage, spin, and vibration issues.",
  },
  {
    name: "Microwave Oven Repair",
    tag: "Cooking",
    blurb: "Heating failures, touch panel issues, door problems, and inspection support.",
  },
  {
    name: "LED & Smart TV Repair",
    tag: "Entertainment",
    blurb: "Display faults, sound issues, wall-mount support, and device diagnostics.",
  },
  {
    name: "RO & Water Purifier",
    tag: "Water",
    blurb: "Filter replacement, low-pressure problems, leakage checks, and purifier servicing.",
  },
  {
    name: "Geyser Repair",
    tag: "Bathroom",
    blurb: "Thermostat issues, heating faults, pressure valve checks, and safety inspection.",
  },
  {
    name: "Chimney & Hob Service",
    tag: "Kitchen",
    blurb: "Deep cleaning, suction issues, ignition fixes, and maintenance for modern kitchens.",
  },
  {
    name: "Dishwasher Service",
    tag: "Appliance",
    blurb: "Water inlet problems, wash cycle faults, drainage errors, and preventive care.",
  },
  {
    name: "Deep Freezer Repair",
    tag: "Commercial",
    blurb: "Heavy-duty cooling diagnosis for homes, cafes, stores, and food businesses.",
  },
  {
    name: "Small Appliance Care",
    tag: "Everyday",
    blurb: "Mixer, iron, induction, kettle, and compact electronics support under one service desk.",
  },
];

const valuePoints = [
  "Doorstep repair scheduling for homes, shops, and offices",
  "Skilled technicians for cooling, kitchen, water, and TV appliances",
  "Clear service categories that are ready for future online booking",
  "Built to scale with pricing, technician assignment, and service areas",
];

const metrics = [
  { value: "12+", label: "Core service categories" },
  { value: "Same Day", label: "Priority visit planning" },
  { value: "7 Days", label: "Customer support window" },
];

const process = [
  "Choose the appliance and describe the problem in a few words.",
  "Pick your preferred date, time slot, and service location.",
  "Receive confirmation and assign the right technician for the job.",
];

const coverage = [
  "Apartments and independent homes",
  "Retail shops and showrooms",
  "Offices and small commercial spaces",
  "Landlords, societies, and rental properties",
];

const promises = [
  "Transparent service workflow",
  "Neat category-first experience",
  "Designed for trust and urgency",
  "Responsive on mobile and desktop",
];

function App() {
  return (
    <div className="min-h-screen bg-[#f7f2ea] text-brand-ink">
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_30%),linear-gradient(135deg,#fff8ef_0%,#fff5e8_48%,#eef4ff_100%)]" />
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-ember/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24">
          <header className="rounded-[1.75rem] border border-slate-200/70 bg-white/85 px-5 py-4 shadow-lg shadow-orange-100/40 backdrop-blur md:px-7">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="font-display text-2xl font-bold tracking-tight text-slate-950">
                  Repair Service Zone
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Multi-appliance repair platform for urgent home and business service requests
                </p>
              </div>

              <nav className="flex flex-wrap gap-2 text-sm font-medium text-slate-700">
                {[
                  ["Services", "#services"],
                  ["Why Us", "#why-us"],
                  ["Process", "#process"],
                  ["Coverage", "#coverage"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-brand-ember hover:text-brand-ember"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </header>

          <main className="pt-8 lg:pt-12">
            <section className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="space-y-8">
                <div className="inline-flex items-center rounded-full border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  AC, cooler, fridge, washing machine, TV, RO, geyser, chimney, and more
                </div>

                <div className="space-y-5">
                  <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl xl:text-[4.35rem]">
                    Fast appliance repair booking with a sharper service-first experience.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-600">
                    Built for customers who need quick access to trusted appliance repair categories,
                    clean service discovery, and a smoother path from issue selection to technician assignment.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 font-semibold text-white transition hover:bg-slate-800"
                  >
                    Explore All Services
                  </a>
                  <a
                    href="#process"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                  >
                    See How Booking Works
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {valuePoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4 shadow-sm"
                    >
                      <p className="font-medium leading-7 text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-10 h-28 w-28 rounded-full bg-brand-sky/20 blur-3xl" />
                <div className="absolute -right-4 bottom-10 h-28 w-28 rounded-full bg-brand-ember/25 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-float">
                  <div className="border-b border-white/10 px-6 py-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-mint">
                      Priority Service Desk
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-bold leading-tight">
                      Structured for appliance repair brands that need trust on first view.
                    </h2>
                  </div>

                  <div className="grid gap-4 p-6">
                    <div className="grid gap-4 sm:grid-cols-3">
                      {metrics.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-3xl border border-white/10 bg-white/5 p-4"
                        >
                          <p className="font-display text-3xl font-bold text-white">
                            {item.value}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.75rem] bg-white p-5 text-slate-900">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-ember">
                            Popular Today
                          </p>
                          <p className="mt-1 font-display text-2xl font-bold text-slate-950">
                            Service categories customers ask for most
                          </p>
                        </div>
                        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-ember">
                          Live-ready layout
                        </span>
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {services.slice(0, 6).map((service) => (
                          <div
                            key={service.name}
                            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                          >
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                              {service.tag}
                            </p>
                            <p className="mt-2 font-display text-xl font-bold text-slate-950">
                              {service.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="why-us" className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] bg-[#fff8ef] p-7 shadow-lg shadow-orange-100/50 ring-1 ring-amber-100 lg:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-ember">
                  Why Repair Service Zone
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold text-slate-950 sm:text-4xl">
                  One clean platform for high-demand appliance categories.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  The layout is intentionally built like a modern repair-services brand site: strong trust cues,
                  dense service visibility, and clear next actions for customers who arrive with urgency.
                </p>

                <div className="mt-7 space-y-4">
                  {promises.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-100"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                        +
                      </span>
                      <p className="font-medium text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/40 lg:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {coverage.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-sky">
                        Zone {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-4 font-display text-2xl font-bold text-slate-950">{item}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        Structured to later support service locations, technician availability, and booking flow by area.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="services" className="mt-12 rounded-[2rem] bg-slate-950 px-6 py-8 text-white shadow-float lg:px-8 lg:py-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-mint">
                    Appliance Service Grid
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                    Service coverage your client can confidently show right now
                  </h2>
                </div>
                <p className="max-w-2xl text-slate-300">
                  These categories give the homepage stronger depth and feel much closer to a real commercial repair-services business.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {services.map((service, index) => (
                  <article
                    key={service.name}
                    className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-brand-ember hover:bg-white hover:text-slate-950"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-mint transition group-hover:bg-amber-50 group-hover:text-brand-ember">
                        {service.tag}
                      </span>
                      <span className="font-display text-4xl font-bold text-white/10 transition group-hover:text-slate-200">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-bold">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300 transition group-hover:text-slate-600">
                      {service.blurb}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section id="process" className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/40 lg:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky">
                  How It Works
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold text-slate-950 sm:text-4xl">
                  Built for an easy booking journey from appliance issue to assigned expert.
                </h2>

                <div className="mt-8 space-y-4">
                  {process.map((step, index) => (
                    <div
                      key={step}
                      className="flex gap-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5"
                    >
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-display text-xl font-bold text-slate-950">
                          Step {index + 1}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="coverage" className="rounded-[2rem] bg-[linear-gradient(150deg,#fff5e6_0%,#ffffff_42%,#eef4ff_100%)] p-7 ring-1 ring-slate-200 lg:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-ember">
                  Designed For Real Use
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold text-slate-950 sm:text-4xl">
                  Ready to evolve from showcase homepage into a complete service platform.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  This structure is prepared for adding dynamic services, technician profiles, service zones, pricing, testimonials, and a booking API later.
                </p>

                <div className="mt-7 grid gap-4">
                  {[
                    "Service cards can connect to future category pages.",
                    "Hero and CTA blocks are tuned for stronger client trust.",
                    "Section hierarchy supports ads, SEO, and landing-page campaigns.",
                    "Root GitHub Pages build is already client-shareable.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white bg-white/80 px-4 py-4 shadow-sm"
                    >
                      <p className="font-medium leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-12 rounded-[2rem] bg-slate-950 px-6 py-8 text-white lg:px-8 lg:py-10">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-mint">
                    Ready To Share
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                    A cleaner, more complete service homepage for client review and agile iteration.
                  </h2>
                  <p className="mt-4 max-w-2xl text-slate-300">
                    The page now feels closer to a real appliance-repair business website, while staying original and flexible for the next sprint.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Expanded service coverage",
                    "Stronger homepage hierarchy",
                    "Commercial appliance brand feel",
                    "GitHub Pages-ready publishing flow",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <p className="font-semibold text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
