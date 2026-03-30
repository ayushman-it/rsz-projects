import { useEffect, useState } from "react";

const PHONE_NUMBER_DISPLAY = "+91 9522675728";
const PHONE_NUMBER_TEL = "+919522675728";
const WHATSAPP_URL = "https://wa.me/919522675728";

const mainNav = ["Home", "Services", "About", "Contact", "Blog"];

const promoCards = [
  {
    eyebrow: "Trusted Home Care",
    title: "Washing Machine Repair",
    description: "Quick drum, motor, spin and drainage support for everyday laundry breakdowns.",
    action: "Book Now",
    targetCategory: "wash-area-electronics-item-repairs",
    image: "https://img.pikbest.com/png-images/20241020/washing-machine-with-colorful-laundry-isolated_10980362.png!sw800",
  },
  {
    eyebrow: "New Arrivals",
    title: "AC Repair Service",
    description: "Fast cooling checks, gas refill support and seasonal servicing visits.",
    action: "Shop Now",
    targetCategory: "ac-repair",
    image: "https://urbanserviceplaza.co.in/wp-content/uploads/2022/06/ac-png-25246-min.png",
  },
  {
    eyebrow: "New Arrivals",
    title: "Air Cooler Repair",
    description: "Summer-ready maintenance for motors, pumps, airflow and cooling pads.",
    action: "Shop Now",
    targetCategory: "cooler-repair",
    image: "https://www.revampservice.com/web-assets/assets/img/whyus-cooler.png",
  },
];

const categoryImages = {
  kitchen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpyDenaDupRazJuactoTLyaGX35o4JCGvRpw&s",
  living: "https://cdn.shopify.com/s/files/1/0441/7349/2379/files/2_360x_0dd8a06a-ca87-42df-87eb-4b7bb568649d.webp?v=1737009251",
  ac: "https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-air-conditioner-png-png-image_10198901.png",
  cooler: "https://www.pngarts.com/files/8/Cooler-Transparent-Images.png",
  electronics: "https://5.imimg.com/data5/IP/IW/HP/SELLER-57975347/electronics-repair-and-maintanence-500x500.png",
  wash: "https://powerguardonline.com/cdn/shop/files/ABS_3x_551a4225-79e0-41e5-8b69-a8620e2a6719.png?v=1732364318",
};

const categoryBrands = {
  "kitchen-equipment-repair": [
    { name: "LG", mark: "LG", tone: "crimson", focus: "Refrigerators" },
    { name: "Samsung", mark: "SAMSUNG", tone: "blue", focus: "Kitchen Cooling" },
    { name: "Whirlpool", mark: "Whirlpool", tone: "indigo", focus: "Fridges" },
    { name: "Kent", mark: "KENT", tone: "navy", focus: "RO Systems" },
    { name: "Aquaguard", mark: "Aquaguard", tone: "teal", focus: "Purifiers" },
    { name: "Panasonic", mark: "Panasonic", tone: "slate", focus: "Microwave" },
  ],
  "living-room": [
    { name: "Sony", mark: "SONY", tone: "midnight", focus: "TV & Audio" },
    { name: "Samsung", mark: "SAMSUNG", tone: "blue", focus: "Smart TVs" },
    { name: "LG", mark: "LG", tone: "crimson", focus: "Displays" },
    { name: "Philips", mark: "PHILIPS", tone: "navy", focus: "Home Audio" },
    { name: "Panasonic", mark: "Panasonic", tone: "slate", focus: "Entertainment" },
    { name: "Croma", mark: "Croma", tone: "charcoal", focus: "Accessories" },
  ],
  "ac-repair": [
    { name: "Voltas", mark: "Voltas", tone: "blue", focus: "Split AC" },
    { name: "Daikin", mark: "Daikin", tone: "teal", focus: "Inverter AC" },
    { name: "LG", mark: "LG", tone: "crimson", focus: "Cooling Systems" },
    { name: "Lloyd", mark: "LLOYD", tone: "red", focus: "Window AC" },
    { name: "Carrier", mark: "Carrier", tone: "navy", focus: "Residential AC" },
    { name: "Samsung", mark: "SAMSUNG", tone: "indigo", focus: "WindFree AC" },
  ],
  "cooler-repair": [
    { name: "Symphony", mark: "SYMPHONY", tone: "red", focus: "Desert Cooler" },
    { name: "Havells", mark: "Havells", tone: "blue", focus: "Air Cooler" },
    { name: "Crompton", mark: "Crompton", tone: "teal", focus: "Cooling Fans" },
    { name: "Bajaj", mark: "BAJAJ", tone: "navy", focus: "Room Cooler" },
    { name: "Livpure", mark: "Livpure", tone: "green", focus: "Desert Cooling" },
    { name: "Orient", mark: "ORIENT", tone: "charcoal", focus: "Coolers" },
  ],
  "electronics-item-repair": [
    { name: "Philips", mark: "PHILIPS", tone: "navy", focus: "Mixer Grinder" },
    { name: "Croma", mark: "Croma", tone: "charcoal", focus: "Home Appliances" },
    { name: "Morphy Richards", mark: "Morphy", tone: "crimson", focus: "Steam Iron" },
    { name: "Crompton", mark: "Crompton", tone: "teal", focus: "Small Appliances" },
    { name: "Havells", mark: "Havells", tone: "blue", focus: "Electronics" },
    { name: "Panasonic", mark: "Panasonic", tone: "slate", focus: "Home Utility" },
  ],
  "wash-area-electronics-item-repairs": [
    { name: "LG", mark: "LG", tone: "crimson", focus: "Front Load WM" },
    { name: "IFB", mark: "IFB", tone: "red", focus: "Washer Dryer" },
    { name: "Samsung", mark: "SAMSUNG", tone: "blue", focus: "Washing Machine" },
    { name: "Whirlpool", mark: "Whirlpool", tone: "indigo", focus: "Laundry Care" },
    { name: "Bosch", mark: "BOSCH", tone: "charcoal", focus: "Wash Systems" },
    { name: "Croma", mark: "Croma", tone: "slate", focus: "Geysers" },
  ],
};

const footerGroups = [
  {
    title: "Information",
    links: ["Specials", "SiteMap", "Delivery Return", "Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "Customer Services",
    links: ["Brands", "Affiliates", "Returns", "Service Cart", "Gift Certificates"],
  },
  {
    title: "Contact Us",
    links: ["About Us", "Contact Us", "FAQs", "Wishlist", "Service Cart"],
  },
];

const footerSocials = [
  { label: "Facebook", icon: "facebook" },
  { label: "Instagram", icon: "instagram" },
  { label: "X", icon: "xsocial" },
  { label: "TikTok", icon: "tiktok" },
  { label: "YouTube", icon: "youtube" },
];

const footerPayments = [
  { label: "Visa", type: "visa", mark: "V" },
  { label: "PayPal", type: "paypal", mark: "P" },
  { label: "Mastercard", type: "mastercard", mark: "MC" },
  { label: "RuPay", type: "rupay", mark: "R" },
  { label: "UPI", type: "upi", mark: "U" },
];
const createProduct = (id, category, name, price, compareAt, image) => ({
  id,
  category,
  name,
  price,
  compareAt,
  badge: "Demo",
  image,
});

const serviceCategories = [
  {
    slug: "kitchen-equipment-repair",
    label: "Kitchen",
    image: categoryImages.kitchen,
    intro: "Repair-ready kitchen appliances and water systems often found in everyday Indian homes.",
    products: [
      createProduct("kitchen-kent-induction", "Kitchen Appliance", "Kent Blaze 2000W Induction Cooktop", 3264, 4950, categoryImages.kitchen),
      createProduct("kitchen-kutchina-microwave", "Kitchen Appliance", "Kutchina Blaze 70L Built-in Microwave", 54299, 83990, categoryImages.kitchen),
      createProduct("kitchen-aquaguard-purifier", "Water Purifier", "Aquaguard Aspire Blaze RO + UV Purifier", 25999, 39000, categoryImages.kitchen),
      createProduct("kitchen-samsung-fridge", "Cooling Appliance", "Samsung 236L Frost Free Refrigerator", 27990, 35990, categoryImages.kitchen),
    ],
  },
  {
    slug: "living-room",
    label: "Living Room",
    image: categoryImages.living,
    intro: "Display, audio and smart-control electronics that are commonly repaired in the living room.",
    products: [
      createProduct("living-sony-tv", "Smart TV", "Sony BRAVIA 32 inch Smart LED TV", 25641, 34900, categoryImages.living),
      createProduct("living-samsung-tv", "Smart TV", "Samsung 43 inch Crystal 4K Smart TV", 39540, 51990, categoryImages.living),
      createProduct("living-croma-theatre", "Home Theatre", "Croma 300W Bluetooth Home Theatre", 8499, 13000, categoryImages.living),
      createProduct("living-oakter-remote", "Smart Control", "Oakter Oakremote Universal IR Blaster", 2290, 2999, categoryImages.living),
    ],
  },
  {
    slug: "ac-repair",
    label: "AC Repair",
    image: categoryImages.ac,
    intro: "Popular AC models and cooling systems that match the repair category you want to surface on the frontend.",
    products: [
      createProduct("ac-croma-3star", "Split AC", "Croma 1.5 Ton 3 Star Inverter Split AC", 32590, 45000, categoryImages.ac),
      createProduct("ac-croma-5star", "Split AC", "Croma 1.5 Ton 5 Star Inverter Split AC", 39990, 55000, categoryImages.ac),
      createProduct("ac-voltas-split", "Split AC", "Voltas 1.5 Ton Inverter Split AC", 36990, 48990, categoryImages.ac),
      createProduct("ac-lg-window", "Window AC", "LG 1 Ton Window AC", 29990, 40990, categoryImages.ac),
    ],
  },
  {
    slug: "cooler-repair",
    label: "Cooler Repair",
    image: categoryImages.cooler,
    intro: "Desert and room coolers that fit the seasonal repair category and give us solid dummy inventory to design with.",
    products: [
      createProduct("cooler-symphony-air-force", "Desert Cooler", "Symphony Air Force 90L Desert Air Cooler", 9191, 12999, categoryImages.cooler),
      createProduct("cooler-havells-koolgrande", "Desert Cooler", "Havells KoolGrande-i 70L Air Cooler", 11490, 26390, categoryImages.cooler),
      createProduct("cooler-crompton-supremus", "Desert Cooler", "Crompton Supremus 100L Desert Air Cooler", 9999, 19000, categoryImages.cooler),
      createProduct("cooler-livpure-iceblast", "Desert Cooler", "Livpure Ice Blast 115L Desert Air Cooler", 12790, 20500, categoryImages.cooler),
    ],
  },
  {
    slug: "electronics-item-repair",
    label: "Electronics",
    image: categoryImages.electronics,
    intro: "Small electronics and counter-top machines that can live inside a general repair and add-to-cart frontend flow.",
    products: [
      createProduct("electronics-croma-mixer", "Mixer Grinder", "Croma 750W 3 Jars Mixer Grinder", 2299, 4500, categoryImages.electronics),
      createProduct("electronics-philips-mixer", "Mixer Grinder", "Philips 750W 3 Jars Mixer Grinder", 3699, 4895, categoryImages.electronics),
      createProduct("electronics-crompton-iron", "Steam Iron", "Crompton Fabrismart 1600W Steam Iron", 1899, 2599, categoryImages.electronics),
      createProduct("electronics-morphy-iron", "Steam Iron", "Morphy Richards Super Glide Steam Iron", 2449, 4910, categoryImages.electronics),
    ],
  },
  {
    slug: "wash-area-electronics-item-repairs",
    label: "Wash Area",
    image: categoryImages.wash,
    intro: "Laundry and hot-water appliances that make sense for the wash-area repair category on the frontend.",
    products: [
      createProduct("wash-croma-frontload-7kg", "Washing Machine", "Croma 7 kg Front Load Washing Machine", 22990, 40000, categoryImages.wash),
      createProduct("wash-lg-frontload-8kg", "Washing Machine", "LG 8 kg Front Load Washing Machine", 38990, 52990, categoryImages.wash),
      createProduct("wash-ifb-washer-dryer", "Washer Dryer", "IFB 9/6/3 kg Washer Dryer Refresher", 53990, 68490, categoryImages.wash),
      createProduct("wash-croma-geyser-15l", "Water Geyser", "Croma 15L Storage Water Geyser", 6499, 10000, categoryImages.wash),
    ],
  },
];

const defaultCategorySlug = serviceCategories[0].slug;

function getRouteFromHash(hash) {
  const normalizedHash = hash.replace(/^#\/?/, "");

  if (!normalizedHash || normalizedHash === "top" || normalizedHash === "services") {
    return { page: "services", category: defaultCategorySlug };
  }

  if (normalizedHash === "cart") {
    return { page: "cart", category: null };
  }

  if (normalizedHash.startsWith("services/")) {
    const slug = normalizedHash.slice("services/".length);
    const matchedCategory = serviceCategories.find((category) => category.slug === slug);

    return {
      page: "services",
      category: matchedCategory ? matchedCategory.slug : defaultCategorySlug,
    };
  }

  return { page: "services", category: defaultCategorySlug };
}

function formatCurrency(value) {
  return `Rs. ${new Intl.NumberFormat("en-IN").format(value)}`;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

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

function IconButton({ label, icon, badge, href }) {
  const content = (
    <>
      <span className="icon-symbol" aria-hidden="true"><Icon name={icon} /></span>
      {badge !== undefined && badge !== null ? <span className="icon-badge">{badge}</span> : null}
    </>
  );

  if (href) {
    return <a href={href} className="icon-button" aria-label={label}>{content}</a>;
  }

  return <button type="button" className="icon-button" aria-label={label}>{content}</button>;
}

function BrandLogo({ mobile = false }) {
  return (
    <a href="#top" className={mobile ? "brand-logo brand-logo-mobile" : "brand-logo"} aria-label="Repair Service Zone home">
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
      <div className="loader-bars" aria-hidden="true"><span></span><span></span><span></span></div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState("services");
  const [activeCategory, setActiveCategory] = useState(defaultCategorySlug);
  const [cartItems, setCartItems] = useState([]);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [problemText, setProblemText] = useState("");
  const [problemImages, setProblemImages] = useState([]);
  const [submittedDetails, setSubmittedDetails] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const syncRouteFromHash = () => {
      const nextRoute = getRouteFromHash(window.location.hash);

      setActivePage(nextRoute.page);

      if (nextRoute.category) {
        setActiveCategory(nextRoute.category);
      }
    };

    syncRouteFromHash();
    window.addEventListener("hashchange", syncRouteFromHash);
    return () => window.removeEventListener("hashchange", syncRouteFromHash);
  }, []);

  const activeCategoryData = serviceCategories.find((category) => category.slug === activeCategory) || serviceCategories[0];
  const activeBrands = categoryBrands[activeCategory] || [];
  const cartCount = cartItems.length;
  const attachedImageCount = cartItems.reduce((total, item) => total + item.images.length, 0);

  const bottomMenu = [
    { label: "Home", href: "#top", icon: "home", tone: "rose" },
    { label: "Call", href: `tel:${PHONE_NUMBER_TEL}`, icon: "phone", tone: "amber" },
    { label: "Whatsapp", href: WHATSAPP_URL, icon: "whatsapp", tone: "green", featured: true },
    { label: "Services", href: `#services/${activeCategory}`, icon: "services", tone: "blue" },
    { label: "Cart", href: "#cart", icon: "cart", tone: "violet" },
  ];

  const updateHashRoute = (hashValue, { replace = false } = {}) => {
    const nextUrl = `${window.location.pathname}${window.location.search}#${hashValue}`;
    const method = replace ? "replaceState" : "pushState";
    window.history[method](null, "", nextUrl);
  };

  const handleCategoryChange = (slug) => {
    setActivePage("services");
    setActiveCategory(slug);
    updateHashRoute(`services/${slug}`, { replace: true });
  };

  const handleOpenCart = () => {
    setActivePage("cart");
    updateHashRoute("cart");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenServices = (slug = activeCategory) => {
    setActivePage("services");
    setActiveCategory(slug);
    updateHashRoute(`services/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePromoCategoryOpen = (slug) => {
    setActivePage("services");
    setActiveCategory(slug);
    updateHashRoute(`services/${slug}`);

    window.setTimeout(() => {
      document.getElementById("services-catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const handleOpenBookingModal = (product) => {
    setSelectedService({ ...product, categoryLabel: activeCategoryData.label });
    setProblemText("");
    setProblemImages([]);
    setBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setBookingModalOpen(false);
    setSelectedService(null);
    setProblemText("");
    setProblemImages([]);
  };

  const handleProblemImagesChange = async (event) => {
    const files = Array.from(event.target.files || []).slice(0, 4);
    const nextImages = await Promise.all(
      files.map(async (file) => ({
        name: file.name,
        url: await readFileAsDataUrl(file),
      })),
    );

    setProblemImages(nextImages);
  };

  const handleAddToCart = () => {
    if (!selectedService || !problemText.trim()) {
      return;
    }

    const nextRequest = {
      ...selectedService,
      requestId: `${selectedService.id}-${Date.now()}`,
      issue: problemText.trim(),
      images: problemImages,
      createdAt: new Date().toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setCartItems((currentItems) => [...currentItems, nextRequest]);
    setSubmittedDetails(false);
    handleCloseBookingModal();
  };

  const handleRemoveItem = (requestId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.requestId !== requestId));
    setSubmittedDetails(false);
  };

  const handleSubmitDetails = () => {
    setSubmittedDetails(true);
  };

  const getProductQuantity = (productId) => cartItems.filter((item) => item.id === productId).length;

  return (
    <div className="header-demo-shell" id="top">
      {loading ? <Loader /> : null}
      <header className="site-header">
        <div className="container-xl">
          <div className="top-header row align-items-center g-3 d-none d-lg-flex">
            <div className="col-lg-2"><BrandLogo /></div>
            <div className="col-lg-5">
              <form className="header-search" role="search">
                <select aria-label="Select category" defaultValue="All Category">
                  <option>All Category</option><option>AC Services</option><option>Cooling</option><option>Appliances</option>
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
                  <IconButton label="Cart" icon="cart" badge={cartCount} href="#cart" />
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-header d-lg-none">
            <div className="mobile-top-row">
              <button type="button" className="mobile-menu-button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu" aria-label="Open menu"><Icon name="menu" /></button>
              <BrandLogo mobile />
              <div className="mobile-actions">
                <IconButton label="Wishlist" icon="heart" />
                <IconButton label="Cart" icon="cart" badge={cartCount} href="#cart" />
              </div>
            </div>
          </div>
        </div>

        <div className="nav-bar d-none d-lg-block">
          <div className="container-xl">
            <div className="nav-row">
              <nav className="primary-nav" aria-label="Primary">
                {mainNav.map((item, index) => (
                  <a key={item} href="#" className={index === 0 ? "nav-link-item nav-link-active" : "nav-link-item"}>
                    {item}
                    {(item === "Home" || item === "Blog") && <span className="caret" aria-hidden="true"><Icon name="chevron" /></span>}
                  </a>
                ))}
                <a href="#" className="nav-link-item">Login / Signup</a>
                <a href="#cart" className="nav-link-item">Cart</a>
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

      <div className="offcanvas offcanvas-start mobile-offcanvas" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="mobileMenuLabel">Repair Service Zone</h2>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="offcanvas-section">
            <p className="offcanvas-label">Navigation</p>
            <nav className="offcanvas-nav" aria-label="Mobile navigation">
              {mainNav.map((item) => <a key={item} href="#" data-bs-dismiss="offcanvas">{item}</a>)}
              <a href="#" data-bs-dismiss="offcanvas">Login / Signup</a>
              <a href="#cart" data-bs-dismiss="offcanvas">Cart</a>
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
          </div>
        </div>
      </div>

      <main className="container-xl pb-5 main-shell">
        {activePage === "services" ? (
          <section className="promo-section" id="services-page">
            <div className="row g-3 align-items-stretch">
              <div className="col-xl-8">
                <article className="promo-card promo-card-feature h-100">
                  <div className="promo-copy">
                    <p className="promo-eyebrow">{promoCards[0].eyebrow}</p>
                    <h1>{promoCards[0].title}</h1>
                    <p>{promoCards[0].description}</p>
                    <button type="button" className="promo-button" onClick={() => handlePromoCategoryOpen(promoCards[0].targetCategory)}>{promoCards[0].action}</button>
                  </div>
                  <div className="promo-media promo-media-feature"><img src={promoCards[0].image} alt={promoCards[0].title} /></div>
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
                        <button type="button" className="promo-button promo-button-light" onClick={() => handlePromoCategoryOpen(card.targetCategory)}>{card.action}</button>
                      </div>
                      <div className="promo-media promo-media-side"><img src={card.image} alt={card.title} /></div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="service-tab-block" id="services-catalog">
              <div className="service-tab-header">
                <div className="service-tab-copy">
                  <p className="service-tab-kicker">Browse Categories</p>
                  <h2>Choose a repair category and explore a cleaner service-ready catalog.</h2>
                  <p className="service-tab-description">This is a frontend-only catalog for now. We can replace the images you send later and connect real backend inventory after the UI is finalized.</p>
                  <div className="service-tab-highlights" aria-label="Catalog highlights">
                    <span className="service-tab-highlight"><span className="service-tab-highlight-icon"><Icon name="services" /></span>{serviceCategories.length} categories</span>
                    <span className="service-tab-highlight"><span className="service-tab-highlight-icon"><Icon name="support" /></span>Doorstep support flow</span>
                    <span className="service-tab-highlight"><span className="service-tab-highlight-icon"><Icon name="camera" /></span>Image upload ready</span>
                  </div>
                </div>
                <div className="service-tab-panel">
                  <p className="service-tab-panel-label">Active category</p>
                  <h3>{activeCategoryData.label}</h3>
                  <p className="service-tab-panel-copy">Structured frontend demo section for repair booking requests before backend integration.</p>
                  <div className="service-tab-panel-stats">
                    <div className="service-tab-stat">
                      <span>Services</span>
                      <strong>{activeCategoryData.products.length}</strong>
                    </div>
                    <div className="service-tab-stat">
                      <span>Brands</span>
                      <strong>{activeBrands.length}</strong>
                    </div>
                    <div className="service-tab-stat">
                      <span>Cart</span>
                      <strong>{cartCount}</strong>
                    </div>
                  </div>
                  <button type="button" className="catalog-open-cart" onClick={handleOpenCart}>
                    <span className="catalog-open-cart-icon"><Icon name="cart" /></span>
                    <span>Open Cart</span>
                    <span className="catalog-open-cart-count">{cartCount}</span>
                  </button>
                </div>
              </div>

              <div className="service-tab-scroll" role="tablist" aria-label="Service categories">
                {serviceCategories.map((category) => {
                  const isActive = category.slug === activeCategory;
                  return (
                    <button key={category.slug} type="button" role="tab" aria-selected={isActive} className={isActive ? "service-tab-trigger service-tab-trigger-active" : "service-tab-trigger"} onClick={() => handleCategoryChange(category.slug)}>
                      <span className="service-tab-thumb" aria-hidden="true"><img src={category.image} alt="" /></span>
                      <span className="service-tab-copy-stack">
                        <span className="service-tab-title">{category.label}</span>
                        <span className="service-tab-meta">{category.products.length} services</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="catalog-shell">
                <div className="catalog-toolbar">
                  <div className="catalog-toolbar-copy">
                    <p className="catalog-category-label">{activeCategoryData.label}</p>
                    <h3>{activeCategoryData.label} service catalog</h3>
                    <p className="catalog-copy">{activeCategoryData.intro}</p>
                    <div className="catalog-toolbar-meta">
                      <span className="catalog-meta-pill"><span className="catalog-meta-icon"><Icon name="support" /></span>Doorstep service</span>
                      <span className="catalog-meta-pill"><span className="catalog-meta-icon"><Icon name="camera" /></span>Issue images supported</span>
                      <span className="catalog-meta-pill"><span className="catalog-meta-icon"><Icon name="services" /></span>Dummy frontend data</span>
                    </div>
                  </div>
                  <div className="catalog-toolbar-actions">
                    <div className="catalog-summary-card">
                      <span>Ready services</span>
                      <strong>{activeCategoryData.products.length}</strong>
                    </div>
                    <button type="button" className="catalog-route-pill" onClick={() => handleOpenServices(activeCategoryData.slug)}>
                      <span className="catalog-route-pill-icon"><Icon name="services" /></span>
                      /services/{activeCategoryData.slug}
                    </button>
                  </div>
                </div>

                <div className="catalog-grid">
                  {activeCategoryData.products.map((product) => {
                    const quantity = getProductQuantity(product.id);

                    return (
                      <article key={product.id} className="product-card">
                        <div className="product-card-topline">
                          <span className="product-card-service-tag"><span className="product-chip-icon"><Icon name="services" /></span>Repair Service</span>
                          <span className="product-card-savings"><span className="product-chip-icon"><Icon name="support" /></span>Home Visit</span>
                        </div>
                        <div className="product-card-media">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-card-copy">
                          <p className="product-card-category">{product.category}</p>
                          <h4>{product.name}</h4>
                          <div className="product-card-pricing">
                            <span className="product-price-current">Starts {formatCurrency(product.price)}</span>
                            <span className="product-price-old">up to {formatCurrency(product.compareAt)}</span>
                          </div>
                          <p className="product-card-note">{quantity > 0 ? `${quantity} request${quantity === 1 ? "" : "s"} added` : "Add your issue details in the modal"}</p>
                          <div className="product-card-actions">
                            <button type="button" className="product-add-button" onClick={() => handleOpenBookingModal(product)}>Book Service</button>
                            <button type="button" className="product-cart-link" onClick={handleOpenCart}>Cart</button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="brand-showcase-block">
              <div className="brand-showcase-header">
                <div>
                  <p className="service-tab-kicker">Shop By Brands</p>
                  <h2>Popular {activeCategoryData.label} repair brands we handle.</h2>
                </div>
                <button type="button" className="brand-showcase-link" onClick={() => handleOpenServices(activeCategoryData.slug)}>See All Brands</button>
              </div>

              <div className="brand-showcase-grid" aria-label={`${activeCategoryData.label} brands`}>
                {activeBrands.map((brand) => (
                  <article key={`${activeCategoryData.slug}-${brand.name}`} className={`brand-card brand-tone-${brand.tone}`}>
                    <div className="brand-card-mark">{brand.mark}</div>
                    <div className="brand-card-copy">
                      <h3>{brand.name}</h3>
                      <p>{brand.focus}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="cart-page-shell" id="cart-page">
            <div className="cart-page-hero">
              <p className="service-tab-kicker">Cart Page</p>
              <h1>Review your dummy cart before we wire the real backend.</h1>
              <p className="cart-page-copy">This separate cart page is still frontend-only, but the layout is now ready for API data, checkout steps, and booking logic.</p>
              <div className="cart-page-actions">
                <button type="button" className="cart-page-back" onClick={() => handleOpenServices(activeCategory)}>Continue Shopping</button>
                <div className="cart-page-pill">{cartCount} item{cartCount === 1 ? "" : "s"} selected</div>
              </div>
            </div>

            {cartItems.length === 0 ? (
              <div className="cart-empty-state cart-empty-state-page">
                <h3>No service requests added yet</h3>
                <p>Pick a category, click Book Service, write the issue, attach photos, and then submit everything from this cart page.</p>
                <button type="button" className="cart-page-back" onClick={() => handleOpenServices(activeCategory)}>Go To Categories</button>
              </div>
            ) : (
              <div className="cart-layout cart-layout-page">
                <div className="cart-list">
                  {cartItems.map((item) => (
                    <article key={item.requestId} className="cart-item-card cart-request-card">
                      <div className="cart-item-media">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="cart-item-copy">
                        <p className="cart-item-category">{item.categoryLabel} / {item.category}</p>
                        <h3>{item.name}</h3>
                        <p className="cart-item-price">Service starts from {formatCurrency(item.price)}</p>
                        <div className="cart-request-meta">
                          <span>Requested: {item.createdAt}</span>
                          <span>{item.images.length} image{item.images.length === 1 ? "" : "s"}</span>
                        </div>
                        <div className="cart-request-issue">
                          <p className="cart-request-label">Problem</p>
                          <p>{item.issue}</p>
                        </div>
                        {item.images.length > 0 ? (
                          <div className="cart-request-gallery">
                            {item.images.map((image) => (
                              <div key={image.url} className="cart-request-thumb">
                                <img src={image.url} alt={image.name} />
                              </div>
                            ))}
                          </div>
                        ) : null}
                        <div className="cart-item-controls">
                          <button type="button" className="cart-remove-button" onClick={() => handleRemoveItem(item.requestId)}>Remove</button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <aside className="cart-summary-card">
                  <p className="cart-summary-kicker">Request Summary</p>
                  <div className="cart-summary-row">
                    <span>Services</span>
                    <span>{cartCount}</span>
                  </div>
                  <div className="cart-summary-row">
                    <span>Attached Images</span>
                    <span>{attachedImageCount}</span>
                  </div>
                  <div className="cart-summary-row cart-summary-total">
                    <span>Status</span>
                    <span>{submittedDetails ? "Submitted" : "Pending"}</span>
                  </div>
                  <button type="button" className="cart-summary-primary" onClick={handleSubmitDetails}>Submit Details</button>
                  <a href={`tel:${PHONE_NUMBER_TEL}`} className="cart-summary-secondary">Call {PHONE_NUMBER_DISPLAY}</a>
                  <a href={WHATSAPP_URL} className="cart-summary-secondary" target="_blank" rel="noreferrer">WhatsApp For Booking</a>
                  <p className="cart-summary-note">This is frontend-only for now. Once backend is ready, these problem details and images can be stored directly in the database.</p>
                  {submittedDetails ? <p className="cart-submit-success">Service request details submitted in frontend preview.</p> : null}
                </aside>
              </div>
            )}
          </section>
        )}
      </main>

      <footer className="site-footer">
        <div className="container-xl">
          <div className="footer-grid">
            <div className="footer-brand-column">
              <div className="footer-wordmark">
                <span className="footer-wordmark-main">REPAIR</span>
                <span className="footer-wordmark-accent">ZONE</span>
              </div>
              <p className="footer-address">Shop number 225 MP Nagar zone 1 Near Vishal Mega Mart, Zone 8 Bhopal, Madhya Pradesh</p>
              <p className="footer-hours">Working hours: Monday-Sunday: Open 24 hours</p>
              <a href={`tel:${PHONE_NUMBER_TEL}`} className="footer-phone">{PHONE_NUMBER_DISPLAY}</a>
            </div>
            {footerGroups.map((group) => (
              <div key={group.title} className="footer-link-column">
                <h3>{group.title}</h3>
                <div className="footer-link-list">
                  {group.links.map((link) => (
                    <a key={link} href="#">{link}</a>
                  ))}
                </div>
              </div>
            ))}

            <div className="footer-newsletter-column">
              <h3>Join Our Newsletter And Get 50% Discount For Your First Service Request</h3>
              <form className="footer-newsletter-form" onSubmit={(event) => event.preventDefault()}>
                <input type="email" placeholder="Your email address..." aria-label="Your email address" />
                <button type="submit" aria-label="Join newsletter"><Icon name="arrow-up-right" /></button>
              </form>
              <div className="footer-socials" aria-label="Social media links">
                {footerSocials.map((social) => (
                  <a key={social.label} href="#" className="footer-social-link" aria-label={social.label}>
                    <Icon name={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p>Repair Service Zone © 2026. All Rights Reserved.</p>
            <div className="footer-payment-row" aria-label="Payment methods">
              {footerPayments.map((payment) => (
                <span key={payment.type} className={`footer-payment-badge footer-payment-badge-${payment.type}`}>
                  {payment.type === "mastercard" ? (
                    <span className="footer-payment-icon footer-payment-icon-mastercard" aria-hidden="true">
                      <span className="footer-payment-circle footer-payment-circle-left"></span>
                      <span className="footer-payment-circle footer-payment-circle-right"></span>
                    </span>
                  ) : (
                    <span className={`footer-payment-icon footer-payment-icon-${payment.type}`} aria-hidden="true">
                      {payment.mark}
                    </span>
                  )}
                  <span>{payment.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {bookingModalOpen && selectedService ? (
        <div className="service-modal-backdrop" role="presentation" onClick={handleCloseBookingModal}>
          <div className="service-modal-card" role="dialog" aria-modal="true" aria-labelledby="serviceModalTitle" onClick={(event) => event.stopPropagation()}>
            <div className="service-modal-header">
              <div>
                <p className="service-tab-kicker">Book Service</p>
                <h2 id="serviceModalTitle">{selectedService.name}</h2>
              </div>
              <button type="button" className="service-modal-close" aria-label="Close service modal" onClick={handleCloseBookingModal}><Icon name="close" /></button>
            </div>

            <div className="service-modal-body">
              <div className="service-modal-appliance">
                <div className="service-modal-media">
                  <img src={selectedService.image} alt={selectedService.name} />
                </div>
                <div>
                  <p className="product-card-category">{selectedService.categoryLabel} / {selectedService.category}</p>
                  <p className="service-modal-price">Starts {formatCurrency(selectedService.price)}</p>
                </div>
              </div>

              <label className="service-modal-field">
                <span className="service-modal-label"><Icon name="edit" />Describe the problem</span>
                <textarea value={problemText} onChange={(event) => setProblemText(event.target.value)} placeholder="Example: cooling issue, not starting, unusual noise, leakage..." rows="5" />
              </label>

              <label className="service-modal-field">
                <span className="service-modal-label"><Icon name="camera" />Attach pictures</span>
                <input type="file" accept="image/*" multiple onChange={handleProblemImagesChange} />
                <small>You can add up to 4 images for this service request.</small>
              </label>

              {problemImages.length > 0 ? (
                <div className="service-modal-gallery">
                  {problemImages.map((image) => (
                    <div key={image.url} className="service-modal-thumb">
                      <img src={image.url} alt={image.name} />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="service-modal-actions">
              <button type="button" className="service-modal-secondary" onClick={handleCloseBookingModal}>Cancel</button>
              <button type="button" className="service-modal-primary" onClick={handleAddToCart} disabled={!problemText.trim()}>Add To Cart</button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="bottom-app-shell d-lg-none">
        <nav className="bottom-app-nav" aria-label="Bottom navigation">
          {bottomMenu.map((item) => (
            <a key={item.label} href={item.href} className={item.featured ? `bottom-nav-item tone-${item.tone} bottom-nav-feature` : `bottom-nav-item tone-${item.tone}`}>
              <span className="bottom-nav-icon"><Icon name={item.icon} /></span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default App;


































