import { useRef } from "react";
import {
  categoryBrands,
  customerReviews,
  promoCards,
  reviewOverview,
  serviceCategories,
  trustMetrics,
  trustPromises,
} from "../data/siteData";
import { Icon } from "../components/SiteNavigation";

export default function Services({
  activeCategory,
  cartCount,
  formatCurrency,
  getProductQuantity,
  onOpenBookingModal,
  onOpenCart,
  onSelectCategory,
}) {
  const catalogRef = useRef(null);
  const activeCategoryData = serviceCategories.find((category) => category.slug === activeCategory) || serviceCategories[0];
  const activeBrands = categoryBrands[activeCategoryData.slug] || [];
  const featuredService = activeCategoryData.products[0];

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCategorySelect = (slug) => {
    onSelectCategory(slug);
    window.setTimeout(() => {
      catalogRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <section className="services-page" id="services-page">
      <section className="services-hero">
        <div className="services-hero-copy">
          <p className="services-eyebrow">Repair Service Zone</p>
          <h1>Doorstep appliance repair with faster category browsing and cleaner service booking.</h1>
          <p className="services-hero-text">
            The services page now opens as its own destination. Customers can scan categories, compare repair types, and jump into the exact service flow without getting trapped in a single long landing page.
          </p>
          <div className="services-hero-actions">
            <button type="button" className="services-primary-action" onClick={scrollToCatalog}>Explore Services</button>
            <button type="button" className="services-secondary-action" onClick={() => onOpenBookingModal(featuredService)}>Book A Visit</button>
          </div>
          <div className="services-hero-notes" aria-label="Service highlights">
            <span><Icon name="services" />{serviceCategories.length} repair categories</span>
            <span><Icon name="support" />Same-page booking flow</span>
            <span><Icon name="camera" />Issue photos supported</span>
          </div>
        </div>

        <div className="services-hero-stage">
          <article className="services-stage-feature">
            <div className="services-stage-image">
              <img src={activeCategoryData.image} alt={activeCategoryData.label} />
            </div>
            <div className="services-stage-copy">
              <p className="services-stage-label">Active preview</p>
              <h2>{activeCategoryData.label}</h2>
              <p>{activeCategoryData.intro}</p>
              <button type="button" className="services-stage-link" onClick={scrollToCatalog}>
                Open {activeCategoryData.label} catalog
                <Icon name="arrow-up-right" />
              </button>
            </div>
          </article>

          <div className="services-stage-stack">
            {promoCards.slice(0, 2).map((card) => (
              <article key={card.title} className="services-stage-mini">
                <div>
                  <p className="services-stage-mini-label">{card.eyebrow}</p>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <button type="button" className="services-mini-action" onClick={() => handleCategorySelect(card.targetCategory)}>{card.action}</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-strip" aria-label="Trust summary">
        {trustMetrics.map((metric) => (
          <article key={metric.label} className="services-strip-item">
            <span className="services-strip-icon"><Icon name={metric.icon} /></span>
            <strong>{metric.value}</strong>
            <p>{metric.label}</p>
          </article>
        ))}
      </section>

      <section className="services-category-section">
        <div className="services-section-head">
          <div>
            <p className="services-eyebrow">Top Categories</p>
            <h2>Pick the service type first, then move into the exact repair request.</h2>
          </div>
          <button type="button" className="services-inline-link" onClick={scrollToCatalog}>See all services</button>
        </div>

        <div className="services-category-grid">
          {serviceCategories.map((category) => {
            const isActive = category.slug === activeCategoryData.slug;

            return (
              <button
                key={category.slug}
                type="button"
                className={isActive ? "services-category-card services-category-card-active" : "services-category-card"}
                onClick={() => handleCategorySelect(category.slug)}
              >
                <span className="services-category-media"><img src={category.image} alt={category.label} /></span>
                <span className="services-category-copy">
                  <span className="services-category-title">{category.label}</span>
                  <span className="services-category-text">{category.intro}</span>
                  <span className="services-category-meta">{category.products.length} services ready</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="services-catalog-section" ref={catalogRef}>
        <div className="services-section-head services-section-head-tight">
          <div>
            <p className="services-eyebrow">Service Catalog</p>
            <h2>{activeCategoryData.label} repair services</h2>
            <p className="services-section-copy">{activeCategoryData.intro}</p>
          </div>
          <div className="services-catalog-meta">
            <span>{activeCategoryData.products.length} listed services</span>
            <span>{activeBrands.length} supported brands</span>
            <button type="button" className="services-cart-pill" onClick={onOpenCart}><Icon name="cart" />Cart {cartCount}</button>
          </div>
        </div>

        <div className="services-catalog-grid">
          {activeCategoryData.products.map((product) => {
            const quantity = getProductQuantity(product.id);

            return (
              <article key={product.id} className="services-product-card">
                <div className="services-product-media">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="services-product-copy">
                  <p className="services-product-tag">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="services-product-price">Contact for price</p>
                  <p className="services-product-note">
                    {quantity > 0 ? `${quantity} request${quantity === 1 ? "" : "s"} added in cart` : "Describe the issue and attach photos before booking."}
                  </p>
                </div>
                <div className="services-product-actions">
                  <button type="button" className="services-card-primary" onClick={() => onOpenBookingModal(product)}>Book Service</button>
                  <button type="button" className="services-card-secondary" onClick={onOpenCart}>Open Cart</button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="services-proof-grid">
        <article className="services-proof-panel">
          <p className="services-eyebrow">Why RSZ</p>
          <h2>Built to feel more trustworthy before the technician arrives.</h2>
          <div className="services-proof-list">
            {trustPromises.map((item) => (
              <div key={item} className="services-proof-item">
                <span className="services-proof-dot" aria-hidden="true"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="services-proof-panel services-proof-panel-contrast">
          <p className="services-eyebrow services-eyebrow-light">Brand Coverage</p>
          <h2>Popular {activeCategoryData.label} brands customers expect to see.</h2>
          <div className="services-brand-grid">
            {activeBrands.map((brand) => (
              <div key={`${activeCategoryData.slug}-${brand.name}`} className={`brand-card brand-tone-${brand.tone}`}>
                <div className="brand-card-mark">{brand.mark}</div>
                <div className="brand-card-copy">
                  <h3>{brand.name}</h3>
                  <p>{brand.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="services-reviews-section" id="service-guides">
        <div className="services-section-head services-section-head-tight">
          <div>
            <p className="services-eyebrow">From The Blog</p>
            <h2>Helpful customer guides before booking.</h2>
            <p className="services-section-copy">{reviewOverview.copy}</p>
          </div>
          <div className="services-review-badge">
            <strong>{reviewOverview.rating}</strong>
            <span>{reviewOverview.location}</span>
          </div>
        </div>

        <div className="services-review-grid">
          {customerReviews.map((review) => (
            <article key={`${review.name}-${review.date}`} className="services-review-card">
              <p className="services-review-topic">{review.service}</p>
              <h3>{review.name}</h3>
              <p className="services-review-text">{review.summary}</p>
              <div className="services-review-meta">
                <span>{review.date}</span>
                <span>{review.source}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
