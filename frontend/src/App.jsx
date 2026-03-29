import { useEffect, useState } from "react";

const mainNav = ["Home", "Services", "About", "Contact", "Blog"];

const promoCards = [
  {
    eyebrow: "Trusted Home Care",
    title: "Washing Machine Repair",
    description: "Quick drum, motor, spin and drainage support for everyday laundry breakdowns.",
    action: "Book Now",
    image: "https://png.pngtree.com/png-clipart/20240523/original/pngtree-washing-machine-isolated-on-transparent-background-png-image_15158211.png",
  },
  {
    eyebrow: "New Arrivals",
    title: "AC Repair Service",
    description: "Fast cooling checks, gas refill support and seasonal servicing visits.",
    action: "Shop Now",
    image: "https://urbanserviceplaza.co.in/wp-content/uploads/2022/06/ac-png-25246-min.png",
  },
  {
    eyebrow: "New Arrivals",
    title: "Air Cooler Repair",
    description: "Summer-ready maintenance for motors, pumps, airflow and cooling pads.",
    action: "Shop Now",
    image: "https://www.revampservice.com/web-assets/assets/img/whyus-cooler.png",
  },
];

const bottomMenu = [
  { label: "Home", href: "#top", icon: "home", tone: "rose" },
  { label: "Call", href: "tel:+84943446000", icon: "phone", tone: "amber" },
  { label: "Whatsapp", href: "https://wa.me/84943446000", icon: "whatsapp", tone: "green", featured: true },
  { label: "Services", href: "#services", icon: "services", tone: "blue" },
  { label: "Cart", href: "#cart", icon: "cart", tone: "violet" },
];

function Icon({ name }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    search: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <circle cx="11" cy="11" r="6.5" {...common} />
        <path d="M16 16l4.5 4.5" {...common} />
      </svg>
    ),
    support: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M4 12a8 8 0 1116 0" {...common} />
        <rect x="3" y="11" width="4" height="7" rx="2" {...common} />
        <rect x="17" y="11" width="4" height="7" rx="2" {...common} />
        <path d="M8 20h5a3 3 0 003-3" {...common} />
      </svg>
    ),
    user: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <circle cx="12" cy="8" r="3.5" {...common} />
        <path d="M5.5 19a6.5 6.5 0 0113 0" {...common} />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M12 20s-7-4.6-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.4-7 10-7 10z" {...common} />
      </svg>
    ),
    cart: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <circle cx="9" cy="20" r="1.5" {...common} />
        <circle cx="18" cy="20" r="1.5" {...common} />
        <path d="M3 4h2l2.1 10.2a1 1 0 001 .8h9.9a1 1 0 001-.8L21 8H7" {...common} />
      </svg>
    ),
    menu: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M4 7h16M4 12h16M4 17h16" {...common} />
      </svg>
    ),
    grid: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <rect x="4" y="4" width="6" height="6" rx="1.2" {...common} />
        <rect x="14" y="4" width="6" height="6" rx="1.2" {...common} />
        <rect x="4" y="14" width="6" height="6" rx="1.2" {...common} />
        <rect x="14" y="14" width="6" height="6" rx="1.2" {...common} />
      </svg>
    ),
    chevron: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg icon-chevron">
        <path d="M7 10l5 5 5-5" {...common} />
      </svg>
    ),
    spark: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z" {...common} />
      </svg>
    ),
    home: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M4 11.5L12 5l8 6.5" {...common} />
        <path d="M6.5 10.5V19h11v-8.5" {...common} />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M6.8 4.5h2.6l1.2 3.4-1.5 1.6a15.4 15.4 0 005.4 5.4l1.6-1.5 3.4 1.2v2.6a1.7 1.7 0 01-1.9 1.7A16.8 16.8 0 015.1 6.4 1.7 1.7 0 016.8 4.5z" {...common} />
      </svg>
    ),
    whatsapp: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M12 20a8 8 0 01-4.1-1.1L4 20l1.2-3.7A8 8 0 1112 20z" {...common} />
        <path d="M9.3 9.2c.3-.7.6-.7.9-.7h.6c.2 0 .5 0 .7.5l.7 1.7c.1.2.1.5-.1.7l-.5.6c-.1.1-.2.3-.1.5.4.8 1.1 1.5 1.9 1.9.2.1.4 0 .5-.1l.6-.5c.2-.2.5-.2.7-.1l1.7.7c.5.2.5.5.5.7v.6c0 .3 0 .6-.7.9-.6.3-1.9.2-3.6-.7a9 9 0 01-3.7-3.7c-.9-1.7-1-3-.7-3.6z" {...common} />
      </svg>
    ),
    services: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M7 7h10M7 12h10M7 17h6" {...common} />
        <circle cx="5" cy="7" r="1" fill="currentColor" stroke="none" />
        <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="5" cy="17" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  };

  return icons[name] || null;
}

function IconButton({ label, icon, badge }) {
  return (
    <button type="button" className="icon-button" aria-label={label}>
      <span className="icon-symbol" aria-hidden="true">
        <Icon name={icon} />
      </span>
      {badge ? <span className="icon-badge">{badge}</span> : null}
    </button>
  );
}

function BrandLogo({ mobile = false }) {
  return (
    <a
      href="#top"
      className={mobile ? "brand-logo brand-logo-mobile" : "brand-logo"}
      aria-label="Repair Service Zone home"
    >
      <span className="brand-badge">RSZ</span>
      <span className="brand-copy">
        <span className="brand-copy-top">Repair Service</span>
        <strong className="brand-copy-bottom">Zone</strong>
      </span>
    </a>
  );
}

function Loader() {
  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label="Loading page">
      <div className="loader-mark">RSZ</div>
      <p className="loader-title">Repair Service Zone</p>
      <div className="loader-bars" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="header-demo-shell" id="top">
      {loading ? <Loader /> : null}

      <header className="site-header">
        <div className="container-xl">
          <div className="top-header row align-items-center g-3 d-none d-lg-flex">
            <div className="col-lg-2">
              <BrandLogo />
            </div>

            <div className="col-lg-5">
              <form className="header-search" role="search">
                <select aria-label="Select category" defaultValue="All Category">
                  <option>All Category</option>
                  <option>AC Services</option>
                  <option>Cooling</option>
                  <option>Appliances</option>
                </select>
                <input type="search" placeholder="Search" aria-label="Search" />
                <button type="submit" className="search-trigger" aria-label="Submit search">
                  <Icon name="search" />
                </button>
              </form>
            </div>

            <div className="col-lg-5">
              <div className="header-utilities">
                <div className="support-block">
                  <div className="support-icon" aria-hidden="true">
                    <Icon name="support" />
                  </div>
                  <div>
                    <p className="support-email">support@repairservicezone.com</p>
                    <p className="support-phone">(84) 943 446 000</p>
                  </div>
                </div>

                <div className="utility-icons">
                  <IconButton label="Login or signup" icon="user" />
                  <IconButton label="Wishlist" icon="heart" />
                  <IconButton label="Cart" icon="cart" badge="0" />
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-header d-lg-none">
            <div className="mobile-top-row">
              <button
                type="button"
                className="mobile-menu-button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileMenu"
                aria-controls="mobileMenu"
                aria-label="Open menu"
              >
                <Icon name="menu" />
              </button>
              <BrandLogo mobile />
              <div className="mobile-actions">
                <IconButton label="Wishlist" icon="heart" />
                <IconButton label="Cart" icon="cart" badge="0" />
              </div>
            </div>
          </div>
        </div>

        <div className="nav-bar d-none d-lg-block">
          <div className="container-xl">
            <div className="nav-row">
              <div className="shop-category-link">
                <span className="category-grid-icon" aria-hidden="true">
                  <Icon name="grid" />
                </span>
                <span>Shop By Categories</span>
                <span className="caret" aria-hidden="true">
                  <Icon name="chevron" />
                </span>
              </div>

              <nav className="primary-nav" aria-label="Primary">
                {mainNav.map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className={index === 0 ? "nav-link-item nav-link-active" : "nav-link-item"}
                  >
                    {item}
                    {(item === "Home" || item === "Blog") && (
                      <span className="caret" aria-hidden="true">
                        <Icon name="chevron" />
                      </span>
                    )}
                  </a>
                ))}
                <a href="#" className="nav-link-item">
                  Login / Signup
                </a>
                <a href="#cart" className="nav-link-item">
                  Cart
                </a>
              </nav>

              <div className="header-meta">
                <div className="offer-link">
                  <span className="offer-icon" aria-hidden="true">
                    <Icon name="spark" />
                  </span>
                  <span>Special Offers</span>
                </div>
                <div className="meta-selectors">
                  <button type="button" className="meta-button">
                    English <span className="caret"><Icon name="chevron" /></span>
                  </button>
                  <button type="button" className="meta-button">
                    $ USD <span className="caret"><Icon name="chevron" /></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="offcanvas offcanvas-start mobile-offcanvas" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="mobileMenuLabel">
            Repair Service Zone
          </h2>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="offcanvas-section">
            <p className="offcanvas-label">Navigation</p>
            <nav className="offcanvas-nav" aria-label="Mobile navigation">
              {mainNav.map((item) => (
                <a key={item} href="#" data-bs-dismiss="offcanvas">
                  {item}
                </a>
              ))}
              <a href="#" data-bs-dismiss="offcanvas">Login / Signup</a>
              <a href="#cart" data-bs-dismiss="offcanvas">Cart</a>
            </nav>
          </div>

          <div className="offcanvas-section">
            <p className="offcanvas-label">Quick Access</p>
            <div className="offcanvas-actions">
              <button type="button" className="offcanvas-action-button">Special Offers</button>
              <button type="button" className="offcanvas-action-button">English</button>
              <button type="button" className="offcanvas-action-button">$ USD</button>
            </div>
          </div>

          <div className="offcanvas-contact">
            <p className="support-email">support@repairservicezone.com</p>
            <p className="support-phone">(84) 943 446 000</p>
          </div>
        </div>
      </div>

      <main className="container-xl pb-5 main-shell">
        <section className="promo-section" id="services">
          <div className="row g-3 align-items-stretch">
            <div className="col-xl-8">
              <article className="promo-card promo-card-feature h-100">
                <div className="promo-copy">
                  <p className="promo-eyebrow">{promoCards[0].eyebrow}</p>
                  <h1>{promoCards[0].title}</h1>
                  <p>{promoCards[0].description}</p>
                  <button type="button" className="promo-button">
                    {promoCards[0].action}
                  </button>
                </div>
                <div className="promo-media promo-media-feature">
                  <img src={promoCards[0].image} alt={promoCards[0].title} />
                </div>
              </article>
            </div>

            <div className="col-xl-4">
              <div className="promo-stack">
                {promoCards.slice(1).map((card) => (
                  <article key={card.title} className="promo-card promo-card-side">
                    <div className="promo-copy promo-copy-side">
                      <p className="promo-eyebrow">{card.eyebrow}</p>
                      <h2>{card.title}</h2>
                      <p>{card.description}</p>
                      <button type="button" className="promo-button promo-button-light">
                        {card.action}
                      </button>
                    </div>
                    <div className="promo-media promo-media-side">
                      <img src={card.image} alt={card.title} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cart-anchor" id="cart" aria-hidden="true"></section>
      </main>

      <div className="bottom-app-shell d-lg-none">
        <nav className="bottom-app-nav" aria-label="Quick actions">
          {bottomMenu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={item.featured ? `bottom-nav-item bottom-nav-feature tone-${item.tone}` : `bottom-nav-item tone-${item.tone}`}
              target={item.label === "Whatsapp" ? "_blank" : undefined}
              rel={item.label === "Whatsapp" ? "noreferrer" : undefined}
            >
              <span className="bottom-nav-icon" aria-hidden="true">
                <Icon name={item.icon} />
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default App;