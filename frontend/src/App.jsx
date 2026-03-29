const services = [
  { name: "AC Repair", tag: "Cooling" },
  { name: "Cooler Service", tag: "Seasonal" },
  { name: "Refrigerator Repair", tag: "Kitchen" },
  { name: "Washing Machine", tag: "Laundry" },
  { name: "Microwave Repair", tag: "Home" },
  { name: "TV Installation", tag: "Entertainment" },
  { name: "RO Service", tag: "Water" },
  { name: "Small Appliances", tag: "Everyday" },
];

const highlights = [
  "Verified local technicians",
  "Same-day slot planning",
  "Transparent service pricing",
  "Support for homes and offices",
];

const stats = [
  { value: "50+", label: "Service categories ready" },
  { value: "24/7", label: "Booking-ready experience" },
  { value: "100%", label: "Responsive homepage setup" },
];

function App() {
  return (
    <div className="min-h-screen bg-brand-mesh text-brand-ink">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="rounded-full border border-white/60 bg-white/70 px-5 py-3 shadow-lg shadow-slate-200/60 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-xl font-bold tracking-tight">
                Repair Service Zone
              </p>
              <p className="text-sm text-slate-600">
                Appliance care, installation, and doorstep repair booking
              </p>
            </div>

            <nav className="flex flex-wrap gap-2 text-sm text-slate-700">
              {["Services", "How It Works", "Coverage", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-brand-sky hover:text-brand-sky"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1 py-8 lg:py-12">
          <section className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur">
                Book trusted repair help for AC, cooler, TV, fridge, and more
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl font-display text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                  One home service platform for every appliance emergency.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  A modern repair booking web app where customers can quickly
                  discover appliance services, compare categories, and request a
                  technician for homes, shops, or offices.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  Explore Services
                </a>
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  View Booking Flow
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/80 bg-white/70 px-4 py-4 shadow-sm backdrop-blur"
                  >
                    <p className="font-semibold text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-brand-mint/60 blur-2xl" />
              <div className="absolute -right-2 bottom-12 h-24 w-24 rounded-full bg-brand-ember/40 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-slate-950 p-6 text-white shadow-float">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="font-display text-2xl font-bold">
                      Service Snapshot
                    </p>
                    <p className="text-sm text-slate-300">
                      Homepage card for your web app launch
                    </p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint">
                    Ready UI
                  </span>
                </div>

                <div className="grid gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-3xl border border-white/10 bg-white/5 p-5"
                    >
                      <p className="font-display text-3xl font-bold">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl bg-gradient-to-br from-brand-sky via-cyan-400 to-brand-mint p-5 text-slate-950">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                    Customer Promise
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    Cleaner layout, stronger trust, faster booking intent.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="services"
            className="mt-12 rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-lg shadow-slate-200/60 backdrop-blur lg:p-8"
          >
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky">
                  Popular Repair Categories
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold text-slate-950">
                  Designed to display all major appliance repair services
                </h2>
              </div>
              <p className="max-w-2xl text-slate-600">
                This section is ready for future API data, but currently gives
                the client a strong homepage preview for category-based service
                discovery.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <article
                  key={service.name}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-brand-sky hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {service.tag}
                    </span>
                    <span className="font-display text-3xl font-bold text-slate-200 transition group-hover:text-brand-sky">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold text-slate-900">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Placeholder content for technician listings, pricing bands,
                    coverage areas, and booking actions.
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div
              id="booking"
              className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-float"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-mint">
                Booking Experience
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold">
                A simple flow for urgent repair requests
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  "Choose appliance type and issue",
                  "Select preferred date, time, and address",
                  "Confirm booking and assign technician later",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-950">
                      {index + 1}
                    </span>
                    <p className="pt-2 text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky">
                Why This UI Works
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  "Strong hero section for trust and quick clarity",
                  "Expandable service cards for future API integration",
                  "Modern colors and gradients for a less generic look",
                  "Responsive layout that fits mobile and desktop screens",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white bg-white/80 p-5 shadow-sm"
                  >
                    <p className="font-semibold text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
