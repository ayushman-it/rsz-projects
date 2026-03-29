const services = [
  {
    name: "AC Repair",
    type: "Cooling Systems",
    desc: "Split AC, window AC, low cooling, gas refill, water leakage, and annual service support.",
  },
  {
    name: "Air Cooler Service",
    type: "Summer Care",
    desc: "Motor issues, pump replacement, low airflow, noise problems, and seasonal maintenance.",
  },
  {
    name: "Refrigerator Repair",
    type: "Kitchen Appliances",
    desc: "Cooling faults, freezer problems, compressor checks, and temperature instability diagnosis.",
  },
  {
    name: "Washing Machine",
    type: "Laundry Systems",
    desc: "Drainage, spinning, inlet, vibration, and fully automatic or semi-automatic machine repair.",
  },
  {
    name: "Microwave Repair",
    type: "Cooking Range",
    desc: "Heating issues, keypad faults, door switch problems, and routine inspection support.",
  },
  {
    name: "LED TV Service",
    type: "Entertainment",
    desc: "Display, sound, motherboard, and installation support for LED and smart televisions.",
  },
  {
    name: "RO Purifier",
    type: "Water Systems",
    desc: "Filter replacement, water flow issues, leakage checks, and purifier servicing.",
  },
  {
    name: "Geyser Repair",
    type: "Heating Units",
    desc: "Heating element, thermostat, switch, and safety valve checks for water heaters.",
  },
  {
    name: "Chimney Service",
    type: "Kitchen Exhaust",
    desc: "Deep cleaning, suction failure, filter care, and installation assistance.",
  },
  {
    name: "Deep Freezer",
    type: "Commercial Cooling",
    desc: "Heavy-duty freezer repair for stores, kitchens, cafes, and business spaces.",
  },
  {
    name: "Dishwasher",
    type: "Modern Appliances",
    desc: "Water inlet, drainage, wash cycle, and dishwasher error troubleshooting.",
  },
  {
    name: "Small Appliances",
    type: "Daily Use",
    desc: "Iron, kettle, induction, mixer, toaster, and compact appliance support.",
  },
];

const trustPoints = [
  "Multi-appliance doorstep support",
  "Residential and commercial coverage",
  "Category-led service discovery",
  "Ready for future online booking",
];

const steps = [
  "Select appliance category and issue type.",
  "Choose slot, address, and contact details.",
  "Confirm service request and assign technician.",
];

const sectors = [
  "Homes",
  "Apartments",
  "Retail Shops",
  "Offices",
  "Showrooms",
  "Rental Properties",
];

const stats = [
  { value: "12+", label: "Service Categories" },
  { value: "24/7", label: "Request Collection" },
  { value: "01", label: "Single Service Platform" },
];

function App() {
  return (
    <div className="min-h-screen bg-[#f3efe7] text-brand-ink">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <div className="border border-black bg-[#111111] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white sm:px-6">
          Repair Service Zone | Appliance Repair Interface | Client Demo Build
        </div>

        <header className="border-x border-b border-black bg-[#fffdf8]">
          <div className="flex flex-col gap-5 px-4 py-5 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-6">
            <div>
              <p className="font-display text-3xl font-bold uppercase tracking-[0.08em] text-black sm:text-4xl">
                Repair Service Zone
              </p>
              <p className="mt-2 max-w-2xl text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                Repair booking platform for AC, cooler, fridge, TV, washing machine, RO, geyser, chimney, and electronics
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-700">
              {[
                ["Services", "#services"],
                ["Process", "#process"],
                ["Coverage", "#coverage"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="transition hover:text-brand-ember">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main>
          <section className="grid border-x border-b border-black bg-[#f7f2e8] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="border-b border-black px-4 py-8 sm:px-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-12">
              <div className="inline-block border border-black bg-brand-ember px-3 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-black">
                Doorstep Appliance Services
              </div>

              <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-[0.03em] text-black sm:text-6xl xl:text-[5.4rem]">
                Sharp service design for fast repair booking.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                A tougher, cleaner homepage direction for your client. This layout removes the soft rounded look and replaces it with straight geometry, stronger contrast, and clearer service hierarchy.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="border border-black bg-black px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-brand-ember hover:text-black"
                >
                  View Services
                </a>
                <a
                  href="#process"
                  className="border border-black bg-transparent px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-white"
                >
                  Booking Process
                </a>
              </div>

              <div className="mt-10 grid gap-3 md:grid-cols-2">
                {trustPoints.map((point) => (
                  <div key={point} className="border border-black bg-white px-4 py-4">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid bg-[#111111] text-white">
              <div className="border-b border-white/15 px-4 py-6 sm:px-6 lg:px-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-mint">
                  Service Command Panel
                </p>
                <p className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                  Built to show the full repair stack on one screen.
                </p>
              </div>

              <div className="grid gap-px bg-white/10 p-px sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="bg-[#111111] px-4 py-5">
                    <p className="font-display text-4xl font-bold uppercase text-white">{item.value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-px bg-white/10 p-px">
                {services.slice(0, 5).map((service) => (
                  <div
                    key={service.name}
                    className="grid gap-3 bg-[#111111] px-4 py-4 sm:grid-cols-[140px_1fr] sm:px-6 lg:px-8"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-mint">
                      {service.type}
                    </p>
                    <p className="font-display text-xl font-bold uppercase text-white">
                      {service.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid border-x border-b border-black bg-[#fffdf8] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-black px-4 py-8 sm:px-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-ember">
                Why This Direction
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-black">
                Less soft startup. More solid service business.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-700">
                The new system strips out the heavy rounded corners and uses straighter composition, stronger type, and boxed content blocks. It feels more like a real operational repair company.
              </p>
            </div>

            <div className="grid gap-px bg-black/10 p-px sm:grid-cols-2">
              {[
                "Hard borders instead of pill UI",
                "More commercial and practical visual tone",
                "Clearer reading order for service categories",
                "Better fit for a repair-services brand",
              ].map((item) => (
                <div key={item} className="bg-[#f3efe7] px-5 py-6">
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="services" className="border-x border-b border-black bg-[#111111] text-white">
            <div className="border-b border-white/15 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-mint">
                Service Catalogue
              </p>
              <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-end">
                <h2 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
                  Full appliance categories your client can show right now.
                </h2>
                <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  These are the main service lanes already placed into a sharper homepage structure ready for future category pages and lead capture.
                </p>
              </div>
            </div>

            <div className="grid gap-px bg-white/10 p-px md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <article key={service.name} className="bg-[#111111] px-5 py-6 transition hover:bg-[#1a1a1a] lg:px-6">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-mint">
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
          </section>

          <section id="process" className="grid border-x border-b border-black bg-[#fffdf8] lg:grid-cols-[1fr_1fr]">
            <div className="border-b border-black px-4 py-8 sm:px-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-ember">
                Booking Flow
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
                Simple path from issue to technician assignment.
              </h2>
              <div className="mt-8 space-y-px bg-black/10 p-px">
                {steps.map((step, index) => (
                  <div key={step} className="grid bg-[#f3efe7] sm:grid-cols-[88px_1fr]">
                    <div className="border-b border-black px-5 py-4 text-center font-display text-3xl font-bold uppercase text-black sm:border-b-0 sm:border-r">
                      {index + 1}
                    </div>
                    <div className="px-5 py-5">
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-700">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="coverage" className="bg-[#e7ecf2] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-sky">
                Coverage Focus
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-black sm:text-5xl">
                Designed for homes, retail spaces, and office support.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
                The page is structured so future sprint work can plug in locations, pricing slabs, technician data, service area mapping, and booking forms without redesigning everything again.
              </p>

              <div className="mt-8 grid gap-px bg-black/10 p-px sm:grid-cols-2 lg:grid-cols-3">
                {sectors.map((sector) => (
                  <div key={sector} className="bg-[#fffdf8] px-4 py-5">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-black">{sector}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="grid border-x border-b border-black bg-brand-ember text-black lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-black/70">
                Client Share Version
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
                Cleaner, sharper, and easier to position as a real repair business.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-black/80">
                This version moves away from the rounded soft-template look and gives you a straighter, stronger landing page to show in agile reviews.
              </p>
            </div>

            <div className="border-t border-black px-4 py-8 sm:px-6 lg:border-l lg:border-t-0 lg:px-8">
              <a
                href="#services"
                className="inline-flex border border-black bg-black px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
              >
                Review Service Grid
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
