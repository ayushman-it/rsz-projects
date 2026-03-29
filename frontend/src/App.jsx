const services = [
  {
    name: "AC Repair Service",
    type: "Cooling",
    desc: "Cooling issues, gas refill support, leakage checks, and complete AC servicing.",
  },
  {
    name: "Air Cooler Repair",
    type: "Seasonal",
    desc: "Motor faults, airflow problems, water pump issues, and summer maintenance.",
  },
  {
    name: "Refrigerator Repair",
    type: "Kitchen",
    desc: "Compressor checks, freezer faults, temperature problems, and leakage diagnosis.",
  },
  {
    name: "Washing Machine",
    type: "Laundry",
    desc: "Drainage, spin, vibration, inlet, and complete washing machine inspection.",
  },
  {
    name: "Microwave Repair",
    type: "Cooking",
    desc: "Heating failure, keypad issues, door sensor faults, and internal diagnostics.",
  },
  {
    name: "LED TV Service",
    type: "Entertainment",
    desc: "Display, sound, panel, motherboard, and smart TV troubleshooting support.",
  },
  {
    name: "RO Water Purifier",
    type: "Water",
    desc: "Filter replacement, low pressure, leakage, and purifier servicing support.",
  },
  {
    name: "Geyser Repair",
    type: "Heating",
    desc: "Thermostat, heating element, switch, and safety inspection for water heaters.",
  },
];

const highlights = [
  "Trusted doorstep appliance support",
  "Fast booking-focused customer journey",
  "Residential and commercial coverage",
  "Scalable structure for future APIs",
];

const process = [
  "Choose appliance category and issue type.",
  "Pick your location and preferred time slot.",
  "Confirm request and assign the right technician.",
];

const facts = [
  { value: "12+", label: "Repair categories" },
  { value: "24/7", label: "Lead collection flow" },
  { value: "01", label: "Unified service platform" },
];

function App() {
  return (
    <div className="min-h-screen bg-[#f4f1eb] text-brand-ink">
      <div className="bg-[#0f0f10] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Repair Service Zone | Appliance Repair Solutions</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-white/70">
            <span>AC | Cooler | Fridge | TV | RO | Geyser</span>
            <span>Doorstep Service Support</span>
          </div>
        </div>
      </div>

      <header className="border-b border-black bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-display text-3xl font-extrabold uppercase tracking-[0.08em] text-black sm:text-4xl">
              Repair Service Zone
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
              Professional appliance repair booking interface
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-800">
            {[
              ["Home", "#top"],
              ["Services", "#services"],
              ["About", "#about"],
              ["Process", "#process"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="border-b-2 border-transparent pb-1 transition hover:border-brand-ember hover:text-brand-ember">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-black bg-[linear-gradient(90deg,#f4f1eb_0%,#f4f1eb_63%,#161616_63%,#161616_100%)]">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.05fr_0.95fr]">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
              <span className="inline-block bg-brand-ember px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-black">
                Home Appliance Repair Experts
              </span>

              <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-[0.02em] text-black sm:text-6xl xl:text-[5.2rem]">
                Fast repair service for every major appliance category.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                A stronger client-facing homepage for appliance repair bookings, built to show all major service categories with a cleaner commercial layout and sharper navigation style.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="border border-black bg-black px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-brand-ember hover:text-black"
                >
                  Explore Services
                </a>
                <a
                  href="#contact"
                  className="border border-black bg-transparent px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white"
                >
                  Request Callback
                </a>
              </div>

              <div className="mt-10 grid gap-px bg-black/10 sm:grid-cols-2 lg:max-w-3xl">
                {highlights.map((item) => (
                  <div key={item} className="bg-white px-4 py-5">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#161616] px-4 py-10 text-white sm:px-6 lg:px-8 lg:py-16">
              <div className="border border-white/15 bg-[#0f0f10]">
                <div className="border-b border-white/10 px-5 py-5 lg:px-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-mint">
                    Quick Service Request
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight">
                    Straightforward booking panel with repair-first hierarchy.
                  </h2>
                </div>

                <div className="grid gap-px bg-white/10 p-px sm:grid-cols-3">
                  {facts.map((fact) => (
                    <div key={fact.label} className="bg-[#0f0f10] px-4 py-5">
                      <p className="font-display text-4xl font-bold uppercase text-white">{fact.value}</p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {fact.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-5 lg:p-6">
                  <div className="grid gap-4">
                    {[
                      "Select Appliance Type",
                      "Enter Service Location",
                      "Choose Preferred Time",
                    ].map((field) => (
                      <div key={field}>
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                          {field}
                        </p>
                        <div className="border border-white/15 bg-[#171717] px-4 py-4 text-sm font-medium uppercase tracking-[0.1em] text-slate-300">
                          Placeholder for future booking input
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#services"
                    className="mt-5 inline-flex border border-brand-ember bg-brand-ember px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white"
                  >
                    Check Available Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-black bg-white">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-black bg-[#ece6db] px-4 py-10 sm:px-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-14">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-ember">
                About The Interface
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight text-black sm:text-5xl">
                Built like a practical repair business homepage, not a soft generic landing page.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-700">
                This version is closer to the commercial service-template direction you shared: sharper header treatment, stronger section separation, appliance-heavy service blocks, and clearer customer action zones.
              </p>
            </div>

            <div className="grid gap-px bg-black/10 p-px sm:grid-cols-2">
              {[
                "Straight navigation links",
                "Rectangular CTA buttons",
                "Service-business visual rhythm",
                "Better category density",
              ].map((item) => (
                <div key={item} className="bg-[#f7f3ec] px-5 py-6">
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-black bg-[#141414] text-white">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-mint">
                  Repair Categories
                </p>
                <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
                  Popular home and electronics services in one service grid.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Service tiles are arranged in a denser, more business-like structure so the client immediately sees the actual repair scope of the platform.
              </p>
            </div>

            <div className="mt-8 grid gap-px bg-white/10 p-px md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <article key={service.name} className="bg-[#141414] px-5 py-6 transition hover:bg-[#1d1d1d]">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-mint">
                      {service.type}
                    </p>
                    <span className="font-display text-3xl font-bold uppercase text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold uppercase leading-tight text-white">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="border-b border-black bg-[#f7f3ec]">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_1fr]">
            <div className="border-b border-black px-4 py-10 sm:px-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-14">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-ember">
                Work Process
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight text-black sm:text-5xl">
                Clean booking path from issue selection to service dispatch.
              </h2>

              <div className="mt-8 grid gap-px bg-black/10 p-px">
                {process.map((step, index) => (
                  <div key={step} className="grid bg-white sm:grid-cols-[88px_1fr]">
                    <div className="border-b border-black px-5 py-4 text-center font-display text-3xl font-bold uppercase text-black sm:border-b-0 sm:border-r">
                      {index + 1}
                    </div>
                    <div className="px-5 py-5">
                      <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-700">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#ece6db] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-sky">
                Service Coverage
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight text-black sm:text-5xl">
                Ready for homes, offices, shops, and local service operations.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
                The layout is prepared for future city targeting, pricing, technician assignment, testimonials, and booking form integration without changing the visual foundation again.
              </p>

              <div className="mt-8 grid gap-px bg-black/10 p-px sm:grid-cols-2">
                {[
                  "Homes & Apartments",
                  "Retail & Showrooms",
                  "Small Offices",
                  "Commercial Kitchen Support",
                ].map((item) => (
                  <div key={item} className="bg-white px-5 py-5">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-brand-ember">
          <div className="mx-auto grid max-w-7xl border-x border-black lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="border-b border-black px-4 py-10 sm:px-6 lg:border-b-0 lg:px-8 lg:py-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-black/70">
                Client Review Version
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight text-black sm:text-5xl">
                Sharper navigation, straighter layout, and a more template-aligned service feel.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-black/80">
                This version removes the rounded navigation style and shifts the homepage closer to the repair-services reference direction you shared.
              </p>
            </div>

            <div className="px-4 py-10 sm:px-6 lg:border-l lg:border-black lg:px-8 lg:py-12">
              <a
                href="#services"
                className="inline-flex border border-black bg-black px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black"
              >
                Review Live Services
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
