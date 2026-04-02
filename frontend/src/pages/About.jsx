import { useEffect } from "react";

const trustStats = [
  { value: "10+", label: "years repairing home appliances across local service requests" },
  { value: "1000+", label: "positive customer interactions and follow-up support moments" },
  { value: "24/7", label: "booking support availability for urgent household breakdowns" },
];

const brandPromises = [
  "Repair Service Zone is designed around doorstep appliance repair, cleaner communication, and a less confusing booking experience.",
  "The brand focuses on ACs, coolers, washing machines, refrigerators, RO systems, microwaves, geysers, televisions, and everyday home electronics.",
  "Customers can explain the issue, add context before the visit, and move toward a technician booking flow with more confidence.",
];

const serviceSignals = [
  "AC repair and servicing",
  "Cooler repair and seasonal maintenance",
  "Washing machine and laundry appliance support",
  "Refrigerator and kitchen appliance repair",
  "RO, geyser, microwave, and utility system checks",
  "Doorstep diagnosis with customer-friendly coordination",
];

const workflowSteps = [
  {
    title: "Report the issue clearly",
    copy: "Customers can reach out with appliance type, problem summary, and preferred timing before the booking moves forward.",
  },
  {
    title: "Get category-wise support",
    copy: "The service flow is organized around actual household categories so users land closer to the repair type they need.",
  },
  {
    title: "Move toward a doorstep visit",
    copy: "Repair Service Zone is positioned to make the first technician interaction feel more trustworthy and better prepared.",
  },
];

const seoPoints = [
  {
    title: "Local relevance",
    copy: "The About page mentions Bhopal, doorstep appliance repair, and household service intent in natural customer language.",
  },
  {
    title: "Business context",
    copy: "Search engines get a clearer picture of what Repair Service Zone does, which services it covers, and who it serves.",
  },
  {
    title: "Conversion clarity",
    copy: "The page supports SEO while also helping users understand why they should trust the brand before they book.",
  },
];

const faqItems = [
  {
    question: "What is Repair Service Zone?",
    answer: "Repair Service Zone is a doorstep home appliance repair brand focused on helping customers in Bhopal discover repair categories, understand service coverage, and move into booking with more confidence.",
  },
  {
    question: "Which services are covered by Repair Service Zone?",
    answer: "The business supports common home appliance categories such as AC repair, cooler repair, washing machine repair, refrigerator repair, RO service, microwave repair, geyser support, and related household electronics repairs.",
  },
  {
    question: "Why does the About page matter for SEO?",
    answer: "A dedicated About page gives search engines stronger business context through local service language, trust signals, service relevance, and structured information about the brand.",
  },
];

export default function AboutPage({ onOpenServices, phoneDisplay, phoneTel }) {
  useEffect(() => {
    const previousSchema = document.getElementById("about-page-schema");
    previousSchema?.remove();

    const script = document.createElement("script");
    script.id = "about-page-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          name: "Repair Service Zone",
          description: "Doorstep home appliance repair service in Bhopal for ACs, coolers, washing machines, refrigerators, RO systems, and other household electronics.",
          telephone: phoneDisplay,
          areaServed: "Bhopal, Madhya Pradesh, India",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop number 225 MP Nagar zone 1 Near Vishal Mega Mart, Zone 8",
            addressLocality: "Bhopal",
            addressRegion: "Madhya Pradesh",
            addressCountry: "IN",
          },
          serviceType: [
            "AC Repair",
            "Cooler Repair",
            "Washing Machine Repair",
            "Refrigerator Repair",
            "Microwave Repair",
            "RO Repair",
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
      ],
    });

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [phoneDisplay]);

  return (
    <section className="about-page" id="about-page">
      <section className="about-hero" aria-labelledby="aboutHeroTitle">
        <div className="about-hero-copy">
          <p className="about-kicker">Repair Service Zone</p>
          <h1 id="aboutHeroTitle">A doorstep appliance repair brand shaped around trust, clarity, and faster local service discovery.</h1>
          <p className="about-hero-text">
            Repair Service Zone exists to make home appliance repair feel easier to understand before a technician even arrives. The brand is presented around real repair intent, better category discovery, and customer-friendly support for households in Bhopal.
          </p>
          <div className="about-hero-actions">
            <button type="button" className="about-primary-action" onClick={onOpenServices}>Explore Services</button>
            <a href={`tel:${phoneTel}`} className="about-secondary-action">Call {phoneDisplay}</a>
          </div>
        </div>

        <aside className="about-hero-panel" aria-label="Repair Service Zone summary">
          <div className="about-brand-card">
            <span className="about-brand-badge">RSZ</span>
            <div>
              <p className="about-panel-label">Brand Focus</p>
              <h2>Repair Service Zone</h2>
            </div>
          </div>
          <p className="about-panel-copy">Built for AC, cooler, laundry, kitchen, and household appliance repair with doorstep-first intent.</p>
          <div className="about-proof-grid">
            {trustStats.map((item) => (
              <article key={item.label} className="about-proof-item">
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="about-manifesto" aria-labelledby="aboutManifestoTitle">
        <div className="about-section-head">
          <div>
            <p className="about-kicker">Why The Brand Exists</p>
            <h2 id="aboutManifestoTitle">Repair Service Zone is positioned to feel more understandable than a generic repair listing.</h2>
          </div>
        </div>

        <div className="about-manifesto-grid">
          <article className="about-story-card about-story-card-accent">
            <p className="about-kicker about-kicker-light">Brand Promise</p>
            <div className="about-list">
              {brandPromises.map((item) => (
                <div key={item} className="about-list-item">
                  <span className="about-list-dot" aria-hidden="true"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="about-story-card">
            <p className="about-kicker">Service Signals</p>
            <div className="about-signal-cloud" aria-label="Repair Service Zone coverage">
              {serviceSignals.map((item) => (
                <span key={item} className="about-signal-pill">{item}</span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="about-workflow" aria-labelledby="aboutWorkflowTitle">
        <div className="about-section-head">
          <div>
            <p className="about-kicker">Customer Journey</p>
            <h2 id="aboutWorkflowTitle">The page structure mirrors how customers actually think about appliance repair.</h2>
          </div>
        </div>

        <div className="about-workflow-grid">
          {workflowSteps.map((item, index) => (
            <article key={item.title} className="about-workflow-card">
              <span className="about-workflow-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-seo-section" aria-labelledby="aboutSeoTitle">
        <div className="about-section-head">
          <div>
            <p className="about-kicker">SEO Value</p>
            <h2 id="aboutSeoTitle">This About page is also written to strengthen search visibility for Repair Service Zone.</h2>
          </div>
        </div>

        <div className="about-seo-grid">
          {seoPoints.map((item) => (
            <article key={item.title} className="about-seo-card">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-faq-section" aria-labelledby="aboutFaqTitle">
        <div className="about-section-head">
          <div>
            <p className="about-kicker">FAQs</p>
            <h2 id="aboutFaqTitle">Important questions customers and search engines usually need answered.</h2>
          </div>
        </div>

        <div className="about-faq-list">
          {faqItems.map((item) => (
            <article key={item.question} className="about-faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
