import { useEffect, useState } from "react";
import {
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_TEL,
  WHATSAPP_URL,
  mainNav,
} from "../data/siteData";

export function Icon({ name }) {
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
    star: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M12 4.5l2.3 4.7 5.2.8-3.8 3.7.9 5.3L12 16.6 7.4 19l.9-5.3-3.8-3.7 5.2-.8L12 4.5z" fill="currentColor" stroke="none" />
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
    chevron: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg icon-chevron">
        <path d="M7 10l5 5 5-5" {...common} />
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
    edit: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M4 20h4l10-10-4-4L4 16v4z" {...common} />
        <path d="M13 7l4 4" {...common} />
      </svg>
    ),
    camera: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M4 8h3l1.4-2h7.2L17 8h3v10H4z" {...common} />
        <circle cx="12" cy="13" r="3.2" {...common} />
      </svg>
    ),
    close: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M6 6l12 12M18 6L6 18" {...common} />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M14 8h2V4h-2.3C11.7 4 10 5.7 10 7.7V10H8v3h2v7h3v-7h2.3l.7-3H13V8.1c0-.6.4-1.1 1-1.1z" fill="currentColor" stroke="none" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <rect x="4" y="4" width="16" height="16" rx="4" {...common} />
        <circle cx="12" cy="12" r="3.5" {...common} />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    xsocial: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M6 5l12 14M18 5L6 19" {...common} />
      </svg>
    ),
    tiktok: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M14 5c.7 1.6 1.9 2.8 3.5 3.4V11c-1.2-.1-2.4-.5-3.5-1.2v5.5a4.3 4.3 0 11-4.3-4.3" {...common} />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <rect x="3.5" y="6.5" width="17" height="11" rx="3" {...common} />
        <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" />
      </svg>
    ),
    "arrow-up-right": (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
        <path d="M7 17L17 7M9 7h8v8" {...common} />
      </svg>
    ),
  };

  return icons[name] || null;
}

export function IconButton({ label, icon, badge, href, onClick }) {
  const content = (
    <>
      <span className="icon-symbol" aria-hidden="true"><Icon name={icon} /></span>
      {badge !== undefined && badge !== null ? <span className="icon-badge">{badge}</span> : null}
    </>
  );

  if (href) {
    return <a href={href} className="icon-button" aria-label={label}>{content}</a>;
  }

  return <button type="button" className="icon-button" aria-label={label} onClick={onClick}>{content}</button>;
}

export function BrandLogo({ mobile = false, onClick }) {
  return (
    <button
      type="button"
      className={mobile ? "brand-logo brand-logo-mobile brand-logo-button" : "brand-logo brand-logo-button"}
      aria-label="Repair Service Zone home"
      onClick={onClick}
    >
      <span className="brand-badge">RSZ</span>
      <span className="brand-copy">
        <span className="brand-copy-top">Repair Service</span>
        <strong className="brand-copy-bottom">Zone</strong>
      </span>
    </button>
  );
}

function NavigationLink({ active, children, onClick, href }) {
  const className = active ? "nav-link-item nav-link-active nav-link-button" : "nav-link-item nav-link-button";

  if (href) {
    return <a href={href} className={className}>{children}</a>;
  }

  return <button type="button" className={className} onClick={onClick}>{children}</button>;
}

export default function SiteNavigation({
  activePage,
  activeCategory,
  cartCount,
  onNavigateHome,
  onNavigateServices,
  onNavigateCart,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const bottomMenu = [
    { label: "Home", icon: "home", tone: "rose", onClick: () => onNavigateHome() },
    { label: "Call", icon: "phone", tone: "amber", href: `tel:${PHONE_NUMBER_TEL}` },
    { label: "Whatsapp", icon: "whatsapp", tone: "green", href: WHATSAPP_URL, featured: true },
    { label: "Services", icon: "services", tone: "blue", onClick: () => onNavigateServices() },
    { label: "Cart", icon: "cart", tone: "violet", onClick: onNavigateCart },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  const mobileLinks = mainNav.map((item) => {
    if (item === "Home") {
      return { label: item, onClick: () => { onNavigateHome(); closeMenu(); } };
    }

    if (item === "Services") {
      return { label: item, onClick: () => { onNavigateServices(); closeMenu(); } };
    }

    if (item === "Contact") {
      return { label: item, href: `tel:${PHONE_NUMBER_TEL}` };
    }

    return { label: item, onClick: () => { onNavigateHome(); closeMenu(); } };
  });

  return (
    <>
      <header className="site-header">
        <div className="container-xl">
          <div className="top-header row align-items-center g-3 d-none d-lg-flex">
            <div className="col-lg-2"><BrandLogo onClick={onNavigateHome} /></div>
            <div className="col-lg-5">
              <form className="header-search" role="search">
                <select aria-label="Select category" defaultValue="All Category">
                  <option>All Category</option>
                  <option>AC Services</option>
                  <option>Cooling</option>
                  <option>Appliances</option>
                </select>
                <input type="search" placeholder="Search" aria-label="Search" />
                <button type="submit" className="search-trigger" aria-label="Submit search"><Icon name="search" /></button>
              </form>
            </div>
            <div className="col-lg-5">
              <div className="header-utilities">
                <div className="support-block">
                  <div className="support-icon" aria-hidden="true"><Icon name="support" /></div>
                  <div>
                    <p className="support-email">support@repairservicezone.com</p>
                    <p className="support-phone">{PHONE_NUMBER_DISPLAY}</p>
                  </div>
                </div>
                <div className="utility-icons">
                  <IconButton label="Login or signup" icon="user" />
                  <IconButton label="Wishlist" icon="heart" />
                  <IconButton label="Cart" icon="cart" badge={cartCount} onClick={onNavigateCart} />
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-header d-lg-none">
            <div className="mobile-top-row">
              <button type="button" className="mobile-menu-button" aria-label="Open menu" onClick={() => setMobileMenuOpen(true)}><Icon name="menu" /></button>
              <BrandLogo mobile onClick={onNavigateHome} />
              <div className="mobile-actions">
                <IconButton label="Wishlist" icon="heart" />
                <IconButton label="Cart" icon="cart" badge={cartCount} onClick={onNavigateCart} />
              </div>
            </div>
          </div>
        </div>

        <div className="nav-bar d-none d-lg-block">
          <div className="container-xl">
            <div className="nav-row">
              <nav className="primary-nav" aria-label="Primary">
                <NavigationLink active={activePage === "home"} onClick={onNavigateHome}>Home</NavigationLink>
                <NavigationLink active={activePage === "services"} onClick={() => onNavigateServices()}>Services</NavigationLink>
                <NavigationLink onClick={onNavigateHome}>About</NavigationLink>
                <NavigationLink href={`tel:${PHONE_NUMBER_TEL}`}>Contact</NavigationLink>
                <NavigationLink onClick={onNavigateHome}>Blog</NavigationLink>
                <NavigationLink>Login / Signup</NavigationLink>
                <NavigationLink active={activePage === "cart"} onClick={onNavigateCart}>Cart</NavigationLink>
              </nav>

              <div className="header-meta">
                <div className="meta-selectors">
                  <button type="button" className="meta-button">English <span className="caret"><Icon name="chevron" /></span></button>
                  <button type="button" className="meta-button">Rs. INR <span className="caret"><Icon name="chevron" /></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen ? (
        <div className="mobile-nav-backdrop d-lg-none" role="presentation" onClick={closeMenu}>
          <div className="mobile-nav-panel" role="dialog" aria-modal="true" aria-label="Mobile navigation" onClick={(event) => event.stopPropagation()}>
            <div className="mobile-nav-header">
              <h2 className="offcanvas-title">Repair Service Zone</h2>
              <button type="button" className="mobile-nav-close" aria-label="Close menu" onClick={closeMenu}><Icon name="close" /></button>
            </div>

            <div className="offcanvas-section">
              <p className="offcanvas-label">Navigation</p>
              <nav className="offcanvas-nav" aria-label="Mobile navigation">
                {mobileLinks.map((item) => (
                  item.href ? (
                    <a key={item.label} href={item.href}>{item.label}</a>
                  ) : (
                    <button key={item.label} type="button" className="offcanvas-link-button" onClick={item.onClick}>{item.label}</button>
                  )
                ))}
                <button type="button" className="offcanvas-link-button" onClick={closeMenu}>Login / Signup</button>
                <button type="button" className="offcanvas-link-button" onClick={() => { onNavigateCart(); closeMenu(); }}>Cart</button>
              </nav>
            </div>

            <div className="offcanvas-section">
              <p className="offcanvas-label">Quick Access</p>
              <div className="offcanvas-actions">
                <button type="button" className="offcanvas-action-button">English</button>
                <button type="button" className="offcanvas-action-button">Rs. INR</button>
              </div>
            </div>

            <div className="offcanvas-contact">
              <p className="support-email">support@repairservicezone.com</p>
              <p className="support-phone">{PHONE_NUMBER_DISPLAY}</p>
              <p className="mobile-nav-status">Active category: {activeCategory}</p>
            </div>
          </div>
        </div>
      ) : null}

      <div className="bottom-app-shell d-lg-none">
        <nav className="bottom-app-nav" aria-label="Bottom navigation">
          {bottomMenu.map((item) => {
            const className = item.featured ? `bottom-nav-item tone-${item.tone} bottom-nav-feature` : `bottom-nav-item tone-${item.tone}`;

            if (item.href) {
              return (
                <a key={item.label} href={item.href} className={className}>
                  <span className="bottom-nav-icon"><Icon name={item.icon} /></span>
                  <span>{item.label}</span>
                </a>
              );
            }

            return (
              <button key={item.label} type="button" className={className} onClick={item.onClick}>
                <span className="bottom-nav-icon"><Icon name={item.icon} /></span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
