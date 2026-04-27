const root = document.getElementById("admin-root");
const STORAGE_KEY = "rsz-ops-suite-v2";

const state = {
  role: getRoleFromPath(),
  authMode: "password",
  loggedIn: false,
  loginMessage: "",
  sidebarOpen: false,
  search: "",
  activeTicketId: null,
  activeSection: getRoleFromPath() === "admin" ? "overview" : "dashboard",
  session: {
    adminEmail: "admin@repairservicezone.com",
    agentId: null,
  },
  uiMessage: "",
  db: loadDatabase(),
};

const ADMIN_ACCOUNTS = [
  { email: "admin@repairservicezone.com", password: "admin123", name: "Admin Desk" },
  { email: "ops@repairservicezone.com", password: "ops123", name: "Ops Manager" },
];

const ADMIN_SECTIONS = [
  ["overview", "Overview"],
  ["dispatch", "Dispatch"],
  ["queries", "Queries"],
  ["gigs", "Gigs"],
  ["agents", "Agents"],
  ["customers", "Customers"],
  ["payouts", "Payouts"],
  ["reports", "Reports"],
  ["settings", "Settings"],
];

const AGENT_SECTIONS = [
  ["dashboard", "Dashboard"],
  ["gigs", "My Gigs"],
  ["visits", "Visits"],
  ["proofs", "Proofs"],
  ["earnings", "Earnings"],
  ["profile", "Profile"],
];

function getRoleFromPath() {
  return window.location.pathname.includes("/agent/") ? "agent" : "admin";
}

function buildPortalLink(targetRole) {
  return targetRole === "admin" ? "../admin/index.html" : "../agent/index.html";
}

function createSvgCard(label, accentA, accentB, badge) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accentA}"/>
          <stop offset="100%" stop-color="${accentB}"/>
        </linearGradient>
      </defs>
      <rect width="320" height="220" rx="28" fill="url(#g)"/>
      <rect x="20" y="20" width="280" height="180" rx="20" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)"/>
      <text x="160" y="92" fill="#fff" text-anchor="middle" font-size="18" font-family="Arial" font-weight="700">${label}</text>
      <text x="160" y="142" fill="#fff" text-anchor="middle" font-size="42" font-family="Arial" font-weight="800">${badge}</text>
    </svg>`,
  )}`;
}

function createAvatar(name, accentA, accentB) {
  const initials = name
    .split(" ")
    .map((part) => part[0] || "")
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
      <defs>
        <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accentA}"/>
          <stop offset="100%" stop-color="${accentB}"/>
        </linearGradient>
      </defs>
      <rect width="160" height="160" rx="44" fill="url(#a)"/>
      <circle cx="80" cy="80" r="48" fill="rgba(255,255,255,0.14)"/>
      <text x="80" y="94" fill="#fff" text-anchor="middle" font-size="42" font-family="Arial" font-weight="800">${initials}</text>
    </svg>`,
  )}`;
}

function seedDatabase() {
  const agents = [
    {
      id: "agent-1",
      username: "ravi.field",
      email: "agent1@repairservicezone.com",
      password: "agent123",
      name: "Ravi Patel",
      phone: "+91 9511111111",
      address: "31, MP Nagar Zone 1",
      city: "Bhopal",
      pincode: "462011",
      skills: ["AC", "Washing Machine", "TV"],
      bio: "Fast field closer for same-day AC and electronics visits.",
      photo: createAvatar("Ravi Patel", "#2563eb", "#1d4ed8"),
      availability: "available",
      gigIds: ["gig-ac", "gig-tv", "gig-wash"],
      gigAvailability: {
        "gig-ac": "available",
        "gig-tv": "available",
        "gig-wash": "not_available",
      },
      rating: "4.9",
      completedJobs: 142,
      earnings: 126800,
    },
    {
      id: "agent-2",
      username: "imran.cooling",
      email: "agent2@repairservicezone.com",
      password: "agent456",
      name: "Imran Khan",
      phone: "+91 9522222222",
      address: "88, Kolar Road",
      city: "Bhopal",
      pincode: "462042",
      skills: ["RO", "Cooler", "AC"],
      bio: "Cooling and purifier specialist covering east-side clusters.",
      photo: createAvatar("Imran Khan", "#0f766e", "#0891b2"),
      availability: "busy",
      gigIds: ["gig-ro", "gig-cooler", "gig-ac"],
      gigAvailability: {
        "gig-ro": "available",
        "gig-cooler": "available",
        "gig-ac": "busy",
      },
      rating: "4.8",
      completedJobs: 117,
      earnings: 104500,
    },
    {
      id: "agent-3",
      username: "aakash.utility",
      email: "agent3@repairservicezone.com",
      password: "agent789",
      name: "Aakash Verma",
      phone: "+91 9533333333",
      address: "54, Arera Colony",
      city: "Bhopal",
      pincode: "462016",
      skills: ["Geyser", "Microwave", "Refrigerator"],
      bio: "Home utility technician with strong kitchen-appliance completion rate.",
      photo: createAvatar("Aakash Verma", "#d97706", "#f59e0b"),
      availability: "not_available",
      gigIds: ["gig-geo", "gig-micro", "gig-fridge"],
      gigAvailability: {
        "gig-geo": "not_available",
        "gig-micro": "available",
        "gig-fridge": "available",
      },
      rating: "4.7",
      completedJobs: 96,
      earnings: 83200,
    },
  ];

  const gigs = [
    {
      id: "gig-ac",
      title: "Split AC Cooling Visit",
      category: "Cooling",
      summary: "Inspection, gas check, leakage and service support for split AC jobs.",
      payout: 650,
      demand: "High",
      coverage: "MP Nagar, Arera Colony, New Market",
      status: "live",
      assignedAgentIds: ["agent-1", "agent-2"],
    },
    {
      id: "gig-ro",
      title: "RO Purifier Repair",
      category: "Water Purifier",
      summary: "Filter block, pump issue, warning light and flow reduction service.",
      payout: 420,
      demand: "Medium",
      coverage: "Kolar Road, Bawadia Kalan",
      status: "live",
      assignedAgentIds: ["agent-2"],
    },
    {
      id: "gig-tv",
      title: "LED TV Display Fix",
      category: "Electronics",
      summary: "Screen flicker, connector fault and display issue service ticket.",
      payout: 520,
      demand: "Medium",
      coverage: "Lalghati, Kohefiza, Shahpura",
      status: "live",
      assignedAgentIds: ["agent-1"],
    },
    {
      id: "gig-wash",
      title: "Washing Machine Spin Repair",
      category: "Laundry",
      summary: "Drain, spin, vibration and motor issue support for laundry jobs.",
      payout: 580,
      demand: "High",
      coverage: "Arera Colony, 10 Number Market",
      status: "live",
      assignedAgentIds: ["agent-1"],
    },
    {
      id: "gig-fridge",
      title: "Refrigerator Cooling Check",
      category: "Kitchen",
      summary: "Compressor, cooling and thermostat related residential visits.",
      payout: 550,
      demand: "Medium",
      coverage: "Govindpura, Ayodhya Bypass",
      status: "paused",
      assignedAgentIds: ["agent-3"],
    },
    {
      id: "gig-geo",
      title: "Geyser Home Service",
      category: "Appliance",
      summary: "Water heater troubleshooting, connection, and thermostat repair.",
      payout: 390,
      demand: "Low",
      coverage: "Kolar Road, Chuna Bhatti",
      status: "live",
      assignedAgentIds: ["agent-3"],
    },
    {
      id: "gig-micro",
      title: "Microwave Utility Repair",
      category: "Kitchen",
      summary: "Heating and control board issues for home microwave units.",
      payout: 430,
      demand: "Medium",
      coverage: "Shahpura, Gulmohar",
      status: "live",
      assignedAgentIds: ["agent-3"],
    },
    {
      id: "gig-cooler",
      title: "Air Cooler Service Call",
      category: "Cooling",
      summary: "Pump, airflow and seasonal pad service visits for coolers.",
      payout: 360,
      demand: "Seasonal",
      coverage: "Kolar Road, Nehru Nagar",
      status: "live",
      assignedAgentIds: ["agent-2"],
    },
  ];

  const tickets = [
    {
      id: "RSZ-6004",
      customerName: "Ananya Sharma",
      customerPhone: "+91 9826111101",
      customerEmail: "ananya.sharma@example.com",
      serviceTitle: "Split AC Cooling Visit",
      gigId: "gig-ac",
      issue: "Cooling stops after 20 minutes and water starts dripping.",
      address: "31, MP Nagar Zone 1, Bhopal",
      paymentMode: "online",
      amount: 1850,
      status: "new",
      priority: "High",
      appointment: "Today, 09:30 PM",
      assignedAgentId: null,
      workSummary: "",
      completionPhotos: [],
      paymentProof: null,
      timeline: [{ label: "Query received", time: "Today, 08:45 PM" }],
    },
    {
      id: "RSZ-6003",
      customerName: "Vivek Soni",
      customerPhone: "+91 9826111102",
      customerEmail: "vivek.soni@example.com",
      serviceTitle: "Washing Machine Spin Repair",
      gigId: "gig-wash",
      issue: "Machine shakes badly in spin cycle and makes loud noise.",
      address: "Arera Colony, Bhopal",
      paymentMode: "cash",
      amount: 2200,
      status: "assigned",
      priority: "Medium",
      appointment: "Tomorrow, 10:15 AM",
      assignedAgentId: "agent-1",
      workSummary: "",
      completionPhotos: [],
      paymentProof: null,
      timeline: [
        { label: "Query received", time: "Today, 08:10 PM" },
        { label: "Assigned to Ravi Patel", time: "Today, 08:31 PM" },
      ],
    },
    {
      id: "RSZ-6002",
      customerName: "Neha Khan",
      customerPhone: "+91 9826111103",
      customerEmail: "neha.khan@example.com",
      serviceTitle: "RO Purifier Repair",
      gigId: "gig-ro",
      issue: "Flow is slow and warning light is still red after previous service.",
      address: "Kolar Road, Bhopal",
      paymentMode: "online",
      amount: 1450,
      status: "in_progress",
      priority: "Medium",
      appointment: "Today, 08:50 PM",
      assignedAgentId: "agent-2",
      workSummary: "Filter assembly opened and blockage inspection started.",
      completionPhotos: [],
      paymentProof: null,
      timeline: [
        { label: "Query received", time: "Today, 07:34 PM" },
        { label: "Assigned to Imran Khan", time: "Today, 07:52 PM" },
        { label: "Agent started work", time: "Today, 08:02 PM" },
      ],
    },
    {
      id: "RSZ-6001",
      customerName: "Rohit Jain",
      customerPhone: "+91 9826111104",
      customerEmail: "rohit.jain@example.com",
      serviceTitle: "LED TV Display Fix",
      gigId: "gig-tv",
      issue: "Screen flickers after startup and horizontal lines appear.",
      address: "Lalghati, Bhopal",
      paymentMode: "online",
      amount: 3600,
      status: "completed",
      priority: "High",
      appointment: "Today, 04:20 PM",
      assignedAgentId: "agent-1",
      workSummary: "Display connector cleaned and panel driver reset completed successfully.",
      completionPhotos: [createSvgCard("Work Proof", "#2563eb", "#1d4ed8", "TV")],
      paymentProof: createSvgCard("Payment Proof", "#16a34a", "#15803d", "UPI"),
      timeline: [
        { label: "Query received", time: "Today, 03:58 PM" },
        { label: "Assigned to Ravi Patel", time: "Today, 04:20 PM" },
        { label: "Agent completed job", time: "Today, 05:40 PM" },
        { label: "Payment screenshot attached", time: "Today, 05:41 PM" },
      ],
    },
  ];

  return {
    settings: {
      businessName: "Repair Service Zone",
      supportEmail: "support@repairservicezone.com",
      supportPhone: "+91 9522675728",
      officeAddress: "Shop 225, MP Nagar Zone 1, Bhopal, Madhya Pradesh",
      whatsapp: "+91 9522675728",
    },
    agents,
    gigs,
    tickets,
  };
}

function loadDatabase() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error(error);
  }

  const seeded = seedDatabase();
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
  } catch (error) {
    console.error(error);
  }
  return seeded;
}

function persistDatabase(nextDb) {
  state.db = nextDb;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextDb));
  } catch (error) {
    console.error(error);
  }
}

function updateDatabase(updater) {
  const nextDb = updater(structuredCloneSafe(state.db));
  persistDatabase(nextDb);
}

function structuredCloneSafe(value) {
  return JSON.parse(JSON.stringify(value));
}

function currentAgent() {
  return state.db.agents.find((agent) => agent.id === state.session.agentId) || null;
}

function currentUserLabel() {
  if (state.role === "admin") {
    const account = ADMIN_ACCOUNTS.find((item) => item.email === state.session.adminEmail);
    return account ? account.name : "Admin Desk";
  }

  const agent = currentAgent();
  return agent ? agent.name : "Field Agent";
}

function formatCurrency(value) {
  return `Rs. ${new Intl.NumberFormat("en-IN").format(value)}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function statusMeta(status) {
  return {
    new: { label: "New", tone: "rose" },
    assigned: { label: "Assigned", tone: "amber" },
    in_progress: { label: "In Progress", tone: "blue" },
    review: { label: "Review", tone: "violet" },
    completed: { label: "Completed", tone: "green" },
  }[status] || { label: "New", tone: "rose" };
}

function availabilityMeta(value) {
  return {
    available: { label: "Available", tone: "green" },
    busy: { label: "Busy", tone: "blue" },
    not_available: { label: "Not Available", tone: "amber" },
  }[value] || { label: "Available", tone: "green" };
}

function gigStatusMeta(value) {
  return {
    live: { label: "Live", tone: "green" },
    paused: { label: "Paused", tone: "amber" },
  }[value] || { label: "Live", tone: "green" };
}

function ticketsForRole() {
  const term = state.search.trim().toLowerCase();
  const base = state.role === "admin"
    ? state.db.tickets
    : state.db.tickets.filter((ticket) => ticket.assignedAgentId === state.session.agentId);

  return base.filter((ticket) => {
    if (!term) return true;
    return `${ticket.id} ${ticket.customerName} ${ticket.serviceTitle} ${ticket.issue} ${ticket.address}`.toLowerCase().includes(term);
  });
}

function gigsForRole() {
  const term = state.search.trim().toLowerCase();
  const agent = currentAgent();
  const base = state.role === "admin"
    ? state.db.gigs
    : state.db.gigs.filter((gig) => agent?.gigIds.includes(gig.id));

  return base.filter((gig) => {
    if (!term) return true;
    return `${gig.title} ${gig.category} ${gig.coverage} ${gig.summary}`.toLowerCase().includes(term);
  });
}

function activeTicket() {
  const tickets = ticketsForRole();
  return tickets.find((ticket) => ticket.id === state.activeTicketId) || tickets[0] || null;
}

function customerRows() {
  const map = new Map();
  state.db.tickets.forEach((ticket) => {
    if (!map.has(ticket.customerPhone)) {
      map.set(ticket.customerPhone, {
        name: ticket.customerName,
        phone: ticket.customerPhone,
        email: ticket.customerEmail,
        address: ticket.address,
        jobs: 0,
        latestTicket: ticket.id,
        latestService: ticket.serviceTitle,
      });
    }

    const entry = map.get(ticket.customerPhone);
    entry.jobs += 1;
    entry.latestTicket = ticket.id;
    entry.latestService = ticket.serviceTitle;
  });
  return Array.from(map.values());
}

function payoutRows() {
  return state.db.agents.map((agent) => {
    const completed = state.db.tickets.filter((ticket) => ticket.assignedAgentId === agent.id && ticket.status === "completed");
    const pending = state.db.tickets.filter((ticket) => ticket.assignedAgentId === agent.id && ticket.status !== "completed");
    return {
      name: agent.name,
      completedJobs: completed.length,
      pendingJobs: pending.length,
      monthlyPayout: Math.round(completed.reduce((sum, ticket) => sum + ticket.amount * 0.25, 0)),
      availability: agent.availability,
    };
  });
}

function renderStatusPill(meta) {
  return `<span class="pill tone-${meta.tone}">${meta.label}</span>`;
}

function renderLogin() {
  const isAdmin = state.role === "admin";
  const credentials = isAdmin
    ? ADMIN_ACCOUNTS.map((item) => `<div class="credential-row"><span>${escapeHtml(item.email)}</span><strong>${escapeHtml(item.password)}</strong></div>`).join("")
    : state.db.agents.slice(0, 3).map((item) => `<div class="credential-row"><span>${escapeHtml(item.email)}</span><strong>${escapeHtml(item.password)}</strong></div>`).join("");

  return `
    <div class="auth-shell">
      <section class="auth-layout">
        <div class="hero-panel">
          <div class="hero-copy">
            <p class="eyebrow">${isAdmin ? "Admin Ops" : "Agent Workspace"}</p>
            <h1>${isAdmin ? "A better control room for dispatch, agents, gigs, and payments." : "Field dashboard for visits, gigs, proofs, earnings, and profile."}</h1>
            <p class="subtle">${isAdmin ? "Clean dense layout, clearer actions, and all important modules in one sidebar." : "See assigned jobs, update availability, manage your gigs, and finish jobs with work photos plus payment screenshots."}</p>
          </div>
          <div class="hero-grid">
            <article class="hero-card">
              <span>Sidebar</span>
              <strong>${isAdmin ? "All main ops sections" : "Visits, gigs, proofs, profile"}</strong>
              <p>Fast scanning on mobile and desktop.</p>
            </article>
            <article class="hero-card">
              <span>Shared data</span>
              <strong>Admin to agent sync</strong>
              <p>Created agents and assigned gigs appear on both sides.</p>
            </article>
            <article class="hero-card">
              <span>Demo ready</span>
              <strong>Dummy credentials included</strong>
              <p>OTP mode also works for quick walkthroughs.</p>
            </article>
          </div>
        </div>
        <div class="login-panel">
          <div class="login-head">
            <div>
              <p class="eyebrow">Login</p>
              <h2>${isAdmin ? "Admin dashboard access" : "Agent dashboard access"}</h2>
            </div>
            <a class="ghost-link" href="${buildPortalLink(isAdmin ? "agent" : "admin")}">${isAdmin ? "Open Agent Side" : "Open Admin Side"}</a>
          </div>
          <div class="switch-row">
            <button class="switch-chip ${state.authMode === "password" ? "switch-chip-active" : ""}" data-auth-mode="password">Password</button>
            <button class="switch-chip ${state.authMode === "otp" ? "switch-chip-active" : ""}" data-auth-mode="otp">OTP</button>
          </div>
          ${
            state.authMode === "password"
              ? `<form id="login-form" class="form-grid">
                  <label><span>Email</span><input name="email" type="email" placeholder="Enter email" /></label>
                  <label><span>Password</span><input name="password" type="password" placeholder="Enter password" /></label>
                  <div class="demo-box">
                    <p class="eyebrow">Dummy credentials</p>
                    ${credentials}
                  </div>
                  <button class="primary-button" type="submit">Open dashboard</button>
                </form>`
              : `<form id="otp-form" class="form-grid">
                  <label><span>Mobile number</span><input name="phone" type="tel" placeholder="+91 95XXXXXXXX" /></label>
                  <label><span>OTP</span><input name="otp" type="text" placeholder="Enter any 4 digits" /></label>
                  <div class="demo-box">
                    <p class="eyebrow">OTP behavior</p>
                    <div class="credential-row"><span>Backend auth not connected</span><strong>Any OTP will continue</strong></div>
                  </div>
                  <button class="primary-button" type="submit">Continue with OTP</button>
                </form>`
          }
          ${state.loginMessage ? `<p class="notice">${escapeHtml(state.loginMessage)}</p>` : ""}
        </div>
      </section>
    </div>
  `;
}

function renderSidebar() {
  const sections = state.role === "admin" ? ADMIN_SECTIONS : AGENT_SECTIONS;
  const agent = currentAgent();
  return `
    <div class="sidebar-backdrop ${state.sidebarOpen ? "sidebar-backdrop-visible" : ""}" data-close-sidebar></div>
    <aside class="sidebar ${state.sidebarOpen ? "sidebar-open" : ""}">
      <div class="sidebar-brand">
        <div class="brand-chip">RSZ</div>
        <div>
          <p class="eyebrow sidebar-eyebrow">${state.role === "admin" ? "Admin Suite" : "Agent Suite"}</p>
          <h2>${currentUserLabel()}</h2>
        </div>
      </div>
      <div class="sidebar-context">
        ${
          state.role === "admin"
            ? `<strong>${state.db.tickets.filter((ticket) => ticket.status !== "completed").length} live tickets</strong><p>Dispatch, gigs, agents, payouts, customers, reports.</p>`
            : `<strong>${agent ? availabilityMeta(agent.availability).label : "Available"}</strong><p>Assigned gigs, proof center, earnings and profile control.</p>`
        }
      </div>
      <nav class="sidebar-nav">
        ${sections.map(([id, label]) => `<button class="sidebar-link ${state.activeSection === id ? "sidebar-link-active" : ""}" data-nav="${id}">${label}</button>`).join("")}
      </nav>
      <div class="sidebar-foot">
        <a class="ghost-link ghost-link-wide" href="../index.html">Open website</a>
        <a class="ghost-link ghost-link-wide" href="${buildPortalLink(state.role === "admin" ? "agent" : "admin")}">Switch portal</a>
      </div>
    </aside>
  `;
}

function renderTopbar() {
  const agent = currentAgent();
  const headerCopy = {
    overview: ["Overview", "Dispatch summary, assignment load, and latest closures"],
    dispatch: ["Dispatch", "Receive new queries and assign them to agents clearly"],
    queries: ["Queries", "Every ticket with priority, payment, and proof status"],
    gigs: ["Gigs", "Manage service gigs, payouts, demand, and agent coverage"],
    agents: ["Agents", "Create agent accounts, add photo, address, and assign gigs"],
    customers: ["Customers", "Quick customer history and latest service relationship"],
    payouts: ["Payouts", "Track agent collections, payouts, and proof completion"],
    reports: ["Reports", "Operational signals for ticket flow and service performance"],
    settings: ["Settings", "Business contact and support configuration"],
    dashboard: ["Agent Dashboard", "Your shift summary, availability, gigs, and next jobs"],
    visits: ["Visits", "Start work, finish jobs, and attach work proof plus payment proof"],
    proofs: ["Proof Center", "Review which jobs already have work photos and payment screenshots"],
    earnings: ["Earnings", "Completed visit count, payouts, and average value"],
    profile: ["Profile", "Username, email, name, photo, address, and service skills"],
  }[state.activeSection];

  return `
    <header class="topbar">
      <div class="topbar-main">
        <button class="menu-button" data-open-sidebar>Menu</button>
        <div>
          <p class="eyebrow">${state.role === "admin" ? "Admin role" : "Agent role"}</p>
          <h1>${headerCopy[0]}</h1>
          <p class="subtle">${headerCopy[1]}</p>
        </div>
      </div>
      <div class="topbar-tools">
        <input class="search-input" data-search-input placeholder="Search tickets, gigs, customers, areas..." value="${escapeHtml(state.search)}" />
        ${
          state.role === "agent" && agent
            ? `<button class="ghost-button" data-toggle-agent-availability="${agent.id}">${availabilityMeta(agent.availability).label}</button>`
            : ""
        }
        <button class="ghost-button" data-logout>Logout</button>
      </div>
    </header>
  `;
}

function renderTicketList() {
  const selectedId = activeTicket()?.id;
  const tickets = ticketsForRole();
  if (!tickets.length) {
    return `<div class="empty-card"><h3>No matching tickets</h3><p>Search clear karke ya new assignment ke baad phir dekho.</p></div>`;
  }

  return tickets.map((ticket) => {
    const agent = state.db.agents.find((item) => item.id === ticket.assignedAgentId);
    return `
      <button class="ticket-card ${selectedId === ticket.id ? "ticket-card-active" : ""}" data-ticket="${ticket.id}">
        <div class="ticket-row">
          <strong>${ticket.id}</strong>
          ${renderStatusPill(statusMeta(ticket.status))}
        </div>
        <h3>${escapeHtml(ticket.serviceTitle)}</h3>
        <p>${escapeHtml(ticket.customerName)} • ${escapeHtml(ticket.address)}</p>
        <div class="ticket-meta">
          <span>${escapeHtml(ticket.appointment)}</span>
          <span>${agent ? escapeHtml(agent.name) : "Unassigned"}</span>
        </div>
      </button>
    `;
  }).join("");
}

function renderTimeline(ticket) {
  return ticket.timeline.map((item) => `
    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <div>
        <strong>${escapeHtml(item.label)}</strong>
        <p>${escapeHtml(item.time)}</p>
      </div>
    </div>
  `).join("");
}

function renderProofGallery(ticket) {
  const cards = [
    ...ticket.completionPhotos.map((photo, index) => `
      <article class="proof-card">
        <img src="${photo}" alt="Work proof ${index + 1}" />
        <span>Work photo ${index + 1}</span>
      </article>
    `),
  ];

  if (ticket.paymentProof) {
    cards.push(`
      <article class="proof-card">
        <img src="${ticket.paymentProof}" alt="Payment proof" />
        <span>Payment screenshot</span>
      </article>
    `);
  }

  return cards.length ? `<div class="proof-grid">${cards.join("")}</div>` : `<p class="subtle">Abhi tak koi proof attach nahi hai.</p>`;
}

function renderOverview() {
  const totalOpen = state.db.tickets.filter((ticket) => ticket.status !== "completed").length;
  const pendingAssign = state.db.tickets.filter((ticket) => ticket.status === "new").length;
  const liveGigs = state.db.gigs.filter((gig) => gig.status === "live").length;
  const availableAgents = state.db.agents.filter((agent) => agent.availability === "available").length;

  return `
    <div class="stats-grid">
      <article class="metric-card"><span>Open tickets</span><strong>${totalOpen}</strong><p>Still active in the operations queue</p></article>
      <article class="metric-card"><span>Pending assign</span><strong>${pendingAssign}</strong><p>Fresh queries waiting for dispatch</p></article>
      <article class="metric-card"><span>Live gigs</span><strong>${liveGigs}</strong><p>Service lines currently open for bookings</p></article>
      <article class="metric-card"><span>Available agents</span><strong>${availableAgents}</strong><p>Ready to take field jobs right now</p></article>
    </div>
    <div class="split-grid">
      <section class="surface-card">
        <div class="surface-head"><div><p class="eyebrow">Dispatch lanes</p><h2>Status flow</h2></div></div>
        <div class="lane-grid">
          ${["new", "assigned", "in_progress", "completed"].map((key) => {
            const list = state.db.tickets.filter((ticket) => ticket.status === key);
            return `
              <div class="lane-card">
                <div class="lane-head">
                  <strong>${statusMeta(key).label}</strong>
                  <span>${list.length}</span>
                </div>
                <div class="lane-list">
                  ${list.slice(0, 3).map((ticket) => `<article class="mini-ticket"><strong>${ticket.id}</strong><p>${escapeHtml(ticket.customerName)} • ${escapeHtml(ticket.serviceTitle)}</p></article>`).join("") || `<p class="subtle">No tickets</p>`}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </section>
      <section class="surface-card">
        <div class="surface-head"><div><p class="eyebrow">Agent load</p><h2>Field team snapshot</h2></div></div>
        <div class="stack-list">
          ${state.db.agents.map((agent) => `
            <article class="stack-row">
              <div class="person-inline">
                <img src="${agent.photo}" alt="${escapeHtml(agent.name)}" />
                <div>
                  <strong>${escapeHtml(agent.name)}</strong>
                  <p>${escapeHtml(agent.city)} • ${escapeHtml(agent.skills.join(", "))}</p>
                </div>
              </div>
              ${renderStatusPill(availabilityMeta(agent.availability))}
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderDispatch() {
  const ticket = activeTicket();
  const assignedAgent = state.db.agents.find((item) => item.id === ticket?.assignedAgentId);
  return `
    <div class="workspace-grid">
      <section class="surface-card ticket-column">
        <div class="surface-head"><div><p class="eyebrow">Ticket queue</p><h2>Latest service queries</h2></div></div>
        <div class="ticket-list">${renderTicketList()}</div>
      </section>
      <section class="surface-card">
        ${
          ticket
            ? `
              <div class="detail-head">
                <div>
                  <p class="eyebrow">Ticket detail</p>
                  <h2>${ticket.id} • ${escapeHtml(ticket.customerName)}</h2>
                </div>
                ${renderStatusPill(statusMeta(ticket.status))}
              </div>
              <div class="detail-grid">
                <article class="info-card"><span>Service</span><strong>${escapeHtml(ticket.serviceTitle)}</strong><p>${escapeHtml(ticket.issue)}</p></article>
                <article class="info-card"><span>Address</span><strong>${escapeHtml(ticket.address)}</strong><p>${escapeHtml(ticket.customerPhone)}</p></article>
                <article class="info-card"><span>Payment</span><strong>${formatCurrency(ticket.amount)}</strong><p>${ticket.paymentMode === "online" ? "Online proof expected" : "Cash collection"}</p></article>
              </div>
              <form class="form-grid form-spacer" data-assign-form="${ticket.id}">
                <div class="field-block full-span">
                  <p class="eyebrow">Assign agent</p>
                  <p class="subtle">${assignedAgent ? `Assigned to ${escapeHtml(assignedAgent.name)}` : "Select field agent and push ticket."}</p>
                </div>
                <label><span>Agent</span><select name="agentId"><option value="">Select agent</option>${state.db.agents.map((agent) => `<option value="${agent.id}" ${ticket.assignedAgentId === agent.id ? "selected" : ""}>${escapeHtml(agent.name)} • ${availabilityMeta(agent.availability).label}</option>`).join("")}</select></label>
                <label><span>Status</span><select name="status"><option value="assigned" ${ticket.status === "assigned" ? "selected" : ""}>Assigned</option><option value="in_progress" ${ticket.status === "in_progress" ? "selected" : ""}>In Progress</option><option value="review" ${ticket.status === "review" ? "selected" : ""}>Review</option></select></label>
                <button class="primary-button full-span" type="submit">${ticket.assignedAgentId ? "Update assignment" : "Assign now"}</button>
              </form>
              <div class="section-block">
                <p class="eyebrow">Timeline</p>
                <div class="timeline-list">${renderTimeline(ticket)}</div>
              </div>
              <div class="section-block">
                <p class="eyebrow">Attached proofs</p>
                ${renderProofGallery(ticket)}
              </div>
              <div class="section-block">
                <p class="eyebrow">Work summary</p>
                <div class="summary-box">${ticket.workSummary ? escapeHtml(ticket.workSummary) : "Agent summary pending."}</div>
              </div>
            `
            : `<div class="empty-card"><h3>No ticket selected</h3><p>Queue se koi service query select karo.</p></div>`
        }
      </section>
    </div>
  `;
}

function renderQueries() {
  return `
    <section class="surface-card">
      <div class="surface-head"><div><p class="eyebrow">All queries</p><h2>Detailed ticket board</h2></div></div>
      <div class="table-list">
        ${state.db.tickets.map((ticket) => {
          const agent = state.db.agents.find((item) => item.id === ticket.assignedAgentId);
          return `
            <article class="table-row">
              <div>
                <strong>${ticket.id} • ${escapeHtml(ticket.customerName)}</strong>
                <p>${escapeHtml(ticket.serviceTitle)} • ${escapeHtml(ticket.address)}</p>
              </div>
              <div class="table-tags">
                ${renderStatusPill(statusMeta(ticket.status))}
                ${renderStatusPill({ label: ticket.paymentMode === "online" ? "Online" : "Cash", tone: ticket.paymentMode === "online" ? "blue" : "amber" })}
                <span class="mini-tag">${agent ? escapeHtml(agent.name) : "Unassigned"}</span>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderGigCards() {
  const gigs = gigsForRole();
  if (!gigs.length) {
    return `<div class="empty-card"><h3>No gigs found</h3><p>Search hatao ya admin se gig assign karvao.</p></div>`;
  }

  const agent = currentAgent();
  return gigs.map((gig) => {
    const assignedNames = gig.assignedAgentIds.map((id) => state.db.agents.find((agentItem) => agentItem.id === id)?.name).filter(Boolean);
    const gigAvailability = state.role === "agent" ? availabilityMeta(agent?.gigAvailability?.[gig.id] || "available") : null;
    return `
      <article class="surface-card gig-card">
        <div class="surface-head">
          <div>
            <p class="eyebrow">${escapeHtml(gig.category)}</p>
            <h2>${escapeHtml(gig.title)}</h2>
          </div>
          ${renderStatusPill(gigStatusMeta(gig.status))}
        </div>
        <p class="subtle">${escapeHtml(gig.summary)}</p>
        <div class="detail-grid detail-grid-gig">
          <article class="info-card"><span>Payout</span><strong>${formatCurrency(gig.payout)}</strong><p>Per successful visit</p></article>
          <article class="info-card"><span>Coverage</span><strong>${escapeHtml(gig.coverage)}</strong><p>${escapeHtml(gig.demand)} demand</p></article>
          <article class="info-card"><span>Assigned</span><strong>${assignedNames.length}</strong><p>${escapeHtml(assignedNames.join(", ") || "No agents")}</p></article>
        </div>
        ${
          state.role === "admin"
            ? `<button class="ghost-button" data-toggle-gig-status="${gig.id}">${gig.status === "live" ? "Pause gig" : "Make live"}</button>`
            : `<div class="gig-footer">${renderStatusPill(gigAvailability)}<button class="ghost-button" data-toggle-agent-gig="${gig.id}">${gigAvailability.label === "Available" ? "Mark not available" : "Mark available"}</button></div>`
        }
      </article>
    `;
  }).join("");
}

function renderGigsSection() {
  return `
    <div class="page-grid">
      <section class="surface-card">
        <div class="surface-head"><div><p class="eyebrow">${state.role === "admin" ? "Service gigs" : "Assigned gigs"}</p><h2>${state.role === "admin" ? "Gig management" : "Gig availability control"}</h2></div></div>
        <div class="card-grid">${renderGigCards()}</div>
      </section>
      ${
        state.role === "admin"
          ? `
            <section class="surface-card">
              <div class="surface-head"><div><p class="eyebrow">Create gig</p><h2>New service line</h2></div></div>
              <form id="gig-form" class="form-grid">
                <label><span>Gig title</span><input name="title" placeholder="e.g. AC deep service visit" /></label>
                <label><span>Category</span><input name="category" placeholder="Cooling / Laundry / Electronics" /></label>
                <label><span>Payout</span><input name="payout" type="number" placeholder="500" /></label>
                <label><span>Coverage</span><input name="coverage" placeholder="Areas covered" /></label>
                <label class="full-span"><span>Summary</span><textarea name="summary" rows="4" placeholder="Short gig summary"></textarea></label>
                <label><span>Demand</span><select name="demand"><option>High</option><option>Medium</option><option>Low</option><option>Seasonal</option></select></label>
                <label><span>Status</span><select name="status"><option value="live">Live</option><option value="paused">Paused</option></select></label>
                <div class="full-span checkbox-group">
                  <span>Assign agents</span>
                  ${state.db.agents.map((agent) => `<label class="check-item"><input type="checkbox" name="agentIds" value="${agent.id}" /><span>${escapeHtml(agent.name)}</span></label>`).join("")}
                </div>
                <button class="primary-button full-span" type="submit">Create gig</button>
              </form>
            </section>
          `
          : ""
      }
    </div>
  `;
}

function renderAgentsSection() {
  return `
    <div class="page-grid">
      <section class="surface-card">
        <div class="surface-head"><div><p class="eyebrow">Agent roster</p><h2>All agent profiles</h2></div></div>
        <div class="agent-grid">
          ${state.db.agents.map((agent) => `
            <article class="agent-card">
              <div class="person-inline person-inline-large">
                <img src="${agent.photo}" alt="${escapeHtml(agent.name)}" />
                <div>
                  <strong>${escapeHtml(agent.name)}</strong>
                  <p>${escapeHtml(agent.username)} • ${escapeHtml(agent.email)}</p>
                </div>
              </div>
              <div class="tag-row">${renderStatusPill(availabilityMeta(agent.availability))}<span class="mini-tag">${agent.rating} rating</span></div>
              <p class="subtle">${escapeHtml(agent.address)}, ${escapeHtml(agent.city)} ${escapeHtml(agent.pincode)}</p>
              <p class="subtle">Skills: ${escapeHtml(agent.skills.join(", "))}</p>
              <div class="agent-meta-grid">
                <div><span>Completed</span><strong>${agent.completedJobs}</strong></div>
                <div><span>Earnings</span><strong>${formatCurrency(agent.earnings)}</strong></div>
              </div>
              <button class="ghost-button" data-toggle-agent-availability="${agent.id}">Toggle availability</button>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="surface-card">
        <div class="surface-head"><div><p class="eyebrow">Create agent</p><h2>New agent account</h2></div></div>
        <form id="agent-form" class="form-grid">
          <label><span>Username</span><input name="username" placeholder="agent.username" /></label>
          <label><span>Email</span><input name="email" type="email" placeholder="agent@example.com" /></label>
          <label><span>Password</span><input name="password" type="text" placeholder="Temp password" /></label>
          <label><span>Full name</span><input name="name" placeholder="Agent full name" /></label>
          <label><span>Phone</span><input name="phone" placeholder="+91 95XXXXXXXX" /></label>
          <label><span>Address</span><input name="address" placeholder="Street address" /></label>
          <label><span>City</span><input name="city" placeholder="City" /></label>
          <label><span>Pincode</span><input name="pincode" placeholder="4620XX" /></label>
          <label class="full-span"><span>Skills</span><input name="skills" placeholder="AC, RO, TV, Microwave" /></label>
          <label class="full-span"><span>Bio</span><textarea name="bio" rows="3" placeholder="Short agent bio"></textarea></label>
          <label><span>Availability</span><select name="availability"><option value="available">Available</option><option value="busy">Busy</option><option value="not_available">Not Available</option></select></label>
          <label><span>Profile photo</span><input name="photo" type="file" accept="image/*" /></label>
          <div class="full-span checkbox-group">
            <span>Assigned gigs</span>
            ${state.db.gigs.map((gig) => `<label class="check-item"><input type="checkbox" name="gigIds" value="${gig.id}" /><span>${escapeHtml(gig.title)}</span></label>`).join("")}
          </div>
          <button class="primary-button full-span" type="submit">Create agent</button>
        </form>
      </section>
    </div>
  `;
}

function renderCustomersSection() {
  return `
    <section class="surface-card">
      <div class="surface-head"><div><p class="eyebrow">Customer book</p><h2>Repeat customer overview</h2></div></div>
      <div class="table-list">
        ${customerRows().map((customer) => `
          <article class="table-row">
            <div>
              <strong>${escapeHtml(customer.name)}</strong>
              <p>${escapeHtml(customer.phone)} • ${escapeHtml(customer.email)}</p>
            </div>
            <div class="table-side">
              <span class="mini-tag">${customer.jobs} jobs</span>
              <span class="mini-tag">${escapeHtml(customer.latestService)}</span>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderPayoutsSection() {
  return `
    <section class="surface-card">
      <div class="surface-head"><div><p class="eyebrow">Agent payouts</p><h2>Earnings and closure view</h2></div></div>
      <div class="table-list">
        ${payoutRows().map((row) => `
          <article class="table-row">
            <div>
              <strong>${escapeHtml(row.name)}</strong>
              <p>${row.completedJobs} completed • ${row.pendingJobs} pending</p>
            </div>
            <div class="table-tags">
              ${renderStatusPill(availabilityMeta(row.availability))}
              <span class="mini-tag">${formatCurrency(row.monthlyPayout)}</span>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderReportsSection() {
  const serviceMap = {};
  state.db.tickets.forEach((ticket) => {
    serviceMap[ticket.serviceTitle] = (serviceMap[ticket.serviceTitle] || 0) + 1;
  });
  const topServices = Object.entries(serviceMap).sort((a, b) => b[1] - a[1]).slice(0, 5);
  return `
    <div class="split-grid">
      <section class="surface-card">
        <div class="surface-head"><div><p class="eyebrow">Service demand</p><h2>Top demand lines</h2></div></div>
        <div class="bar-list">
          ${topServices.map(([label, count]) => `<div class="bar-row"><div><strong>${escapeHtml(label)}</strong><p>${count} tickets</p></div><div class="bar-track"><span style="width:${count * 22}%"></span></div></div>`).join("")}
        </div>
      </section>
      <section class="surface-card">
        <div class="surface-head"><div><p class="eyebrow">Payment health</p><h2>Proof status</h2></div></div>
        <div class="stack-list">
          <article class="stack-row"><strong>Online jobs</strong><span>${state.db.tickets.filter((ticket) => ticket.paymentMode === "online").length}</span></article>
          <article class="stack-row"><strong>Payment screenshots attached</strong><span>${state.db.tickets.filter((ticket) => ticket.paymentProof).length}</span></article>
          <article class="stack-row"><strong>Work proof attached</strong><span>${state.db.tickets.filter((ticket) => ticket.completionPhotos.length).length}</span></article>
        </div>
      </section>
    </div>
  `;
}

function renderSettingsSection() {
  const settings = state.db.settings;
  return `
    <section class="surface-card">
      <div class="surface-head"><div><p class="eyebrow">Business settings</p><h2>Support and contact config</h2></div></div>
      <form id="settings-form" class="form-grid">
        <label><span>Business name</span><input name="businessName" value="${escapeHtml(settings.businessName)}" /></label>
        <label><span>Support email</span><input name="supportEmail" value="${escapeHtml(settings.supportEmail)}" /></label>
        <label><span>Support phone</span><input name="supportPhone" value="${escapeHtml(settings.supportPhone)}" /></label>
        <label><span>WhatsApp</span><input name="whatsapp" value="${escapeHtml(settings.whatsapp)}" /></label>
        <label class="full-span"><span>Office address</span><textarea name="officeAddress" rows="3">${escapeHtml(settings.officeAddress)}</textarea></label>
        <button class="primary-button full-span" type="submit">Save settings</button>
      </form>
    </section>
  `;
}

function renderAgentDashboard() {
  const agent = currentAgent();
  const agentTickets = ticketsForRole();
  const completed = agentTickets.filter((ticket) => ticket.status === "completed").length;
  const active = agentTickets.filter((ticket) => ticket.status === "assigned" || ticket.status === "in_progress").length;
  const availableGigs = gigsForRole().filter((gig) => agent?.gigAvailability?.[gig.id] === "available").length;
  const nextTicket = agentTickets.find((ticket) => ticket.status !== "completed");

  return `
    <div class="stats-grid stats-grid-agent">
      <article class="metric-card"><span>Availability</span><strong>${availabilityMeta(agent.availability).label}</strong><p>Global shift status</p></article>
      <article class="metric-card"><span>Active visits</span><strong>${active}</strong><p>Assigned or currently running jobs</p></article>
      <article class="metric-card"><span>Completed</span><strong>${completed}</strong><p>Jobs already closed with proof</p></article>
      <article class="metric-card"><span>Available gigs</span><strong>${availableGigs}</strong><p>Gig lines currently open from your side</p></article>
    </div>
    <div class="split-grid">
      <section class="surface-card">
        <div class="surface-head"><div><p class="eyebrow">Profile snapshot</p><h2>${escapeHtml(agent.name)}</h2></div>${renderStatusPill(availabilityMeta(agent.availability))}</div>
        <div class="person-inline person-inline-large">
          <img src="${agent.photo}" alt="${escapeHtml(agent.name)}" />
          <div>
            <strong>${escapeHtml(agent.email)}</strong>
            <p>${escapeHtml(agent.address)}, ${escapeHtml(agent.city)} ${escapeHtml(agent.pincode)}</p>
            <p>Skills: ${escapeHtml(agent.skills.join(", "))}</p>
          </div>
        </div>
      </section>
      <section class="surface-card">
        <div class="surface-head"><div><p class="eyebrow">Next visit</p><h2>${nextTicket ? escapeHtml(nextTicket.serviceTitle) : "No active visit"}</h2></div></div>
        ${
          nextTicket
            ? `<div class="summary-box">${escapeHtml(nextTicket.customerName)} • ${escapeHtml(nextTicket.address)} • ${escapeHtml(nextTicket.appointment)}</div>`
            : `<div class="summary-box">Admin assignment ke baad next visit yahan dikhega.</div>`
        }
      </section>
    </div>
  `;
}

function renderAgentVisits() {
  const ticket = activeTicket();
  const agent = currentAgent();
  return `
    <div class="workspace-grid">
      <section class="surface-card ticket-column">
        <div class="surface-head"><div><p class="eyebrow">Assigned visits</p><h2>My jobs</h2></div></div>
        <div class="ticket-list">${renderTicketList()}</div>
      </section>
      <section class="surface-card">
        ${
          ticket
            ? `
              <div class="detail-head">
                <div>
                  <p class="eyebrow">Job detail</p>
                  <h2>${ticket.id} • ${escapeHtml(ticket.customerName)}</h2>
                </div>
                ${renderStatusPill(statusMeta(ticket.status))}
              </div>
              <div class="detail-grid">
                <article class="info-card"><span>Service</span><strong>${escapeHtml(ticket.serviceTitle)}</strong><p>${escapeHtml(ticket.issue)}</p></article>
                <article class="info-card"><span>Contact</span><strong>${escapeHtml(ticket.customerPhone)}</strong><p>${escapeHtml(ticket.customerEmail)}</p></article>
                <article class="info-card"><span>Payment</span><strong>${formatCurrency(ticket.amount)}</strong><p>${ticket.paymentMode === "online" ? "Online screenshot required" : "Cash payment"}</p></article>
              </div>
              <div class="summary-box form-spacer">${escapeHtml(ticket.address)} • ${escapeHtml(ticket.appointment)} • Agent: ${escapeHtml(agent.name)}</div>
              <form class="form-grid form-spacer" data-complete-ticket="${ticket.id}">
                <label class="full-span"><span>Work summary</span><textarea name="workSummary" rows="4" placeholder="Write what was done">${escapeHtml(ticket.workSummary)}</textarea></label>
                <label><span>Completion photos</span><input name="completionPhotos" type="file" accept="image/*" multiple /></label>
                <label><span>Payment screenshot ${ticket.paymentMode === "online" ? "(required)" : "(optional)"}</span><input name="paymentProof" type="file" accept="image/*" /></label>
                <div class="button-row full-span">
                  <button class="ghost-button" type="button" data-start-ticket="${ticket.id}">${ticket.status === "in_progress" ? "Work started" : "Start work"}</button>
                  <button class="primary-button" type="submit">Finish job</button>
                </div>
              </form>
              <div class="section-block">
                <p class="eyebrow">Current proofs</p>
                ${renderProofGallery(ticket)}
              </div>
              <div class="section-block">
                <p class="eyebrow">Timeline</p>
                <div class="timeline-list">${renderTimeline(ticket)}</div>
              </div>
            `
            : `<div class="empty-card"><h3>No assigned jobs</h3><p>Admin se job assign hone ke baad yahan dikh jayega.</p></div>`
        }
      </section>
    </div>
  `;
}

function renderProofsSection() {
  const tickets = ticketsForRole();
  return `
    <section class="surface-card">
      <div class="surface-head"><div><p class="eyebrow">Proof center</p><h2>Job proof status</h2></div></div>
      <div class="table-list">
        ${tickets.map((ticket) => `
          <article class="table-row">
            <div>
              <strong>${ticket.id} • ${escapeHtml(ticket.customerName)}</strong>
              <p>${ticket.completionPhotos.length} work photo(s) • ${ticket.paymentProof ? "payment screenshot attached" : "payment screenshot pending"}</p>
            </div>
            <div class="table-tags">
              ${renderStatusPill(statusMeta(ticket.status))}
              <button class="ghost-button small-button" data-ticket="${ticket.id}">Open</button>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderEarningsSection() {
  const agent = currentAgent();
  const tickets = ticketsForRole().filter((ticket) => ticket.status === "completed");
  const completedAmount = tickets.reduce((sum, ticket) => sum + ticket.amount, 0);
  return `
    <div class="stats-grid stats-grid-agent">
      <article class="metric-card"><span>Total earnings</span><strong>${formatCurrency(agent.earnings)}</strong><p>Stored agent earning summary</p></article>
      <article class="metric-card"><span>Completed jobs</span><strong>${agent.completedJobs}</strong><p>Overall successful visit closures</p></article>
      <article class="metric-card"><span>This visible queue</span><strong>${formatCurrency(completedAmount)}</strong><p>Completed assigned ticket value</p></article>
    </div>
    <section class="surface-card">
      <div class="surface-head"><div><p class="eyebrow">Recent completed jobs</p><h2>Closure value</h2></div></div>
      <div class="table-list">
        ${tickets.map((ticket) => `
          <article class="table-row">
            <div>
              <strong>${ticket.id} • ${escapeHtml(ticket.serviceTitle)}</strong>
              <p>${escapeHtml(ticket.customerName)} • ${escapeHtml(ticket.address)}</p>
            </div>
            <div class="table-tags">
              <span class="mini-tag">${formatCurrency(ticket.amount)}</span>
              ${renderStatusPill(statusMeta(ticket.status))}
            </div>
          </article>
        `).join("") || `<div class="empty-card"><h3>No completed jobs yet</h3><p>Job finish karoge to yahan value dikhegi.</p></div>`}
      </div>
    </section>
  `;
}

function renderProfileSection() {
  const agent = currentAgent();
  return `
    <section class="surface-card">
      <div class="surface-head"><div><p class="eyebrow">Agent profile</p><h2>Edit your account</h2></div></div>
      <form id="profile-form" class="form-grid">
        <div class="profile-photo">
          <img src="${agent.photo}" alt="${escapeHtml(agent.name)}" />
        </div>
        <label><span>Photo</span><input name="photo" type="file" accept="image/*" /></label>
        <label><span>Username</span><input name="username" value="${escapeHtml(agent.username)}" /></label>
        <label><span>Email</span><input name="email" type="email" value="${escapeHtml(agent.email)}" /></label>
        <label><span>Password</span><input name="password" value="${escapeHtml(agent.password)}" /></label>
        <label><span>Full name</span><input name="name" value="${escapeHtml(agent.name)}" /></label>
        <label><span>Phone</span><input name="phone" value="${escapeHtml(agent.phone)}" /></label>
        <label><span>Address</span><input name="address" value="${escapeHtml(agent.address)}" /></label>
        <label><span>City</span><input name="city" value="${escapeHtml(agent.city)}" /></label>
        <label><span>Pincode</span><input name="pincode" value="${escapeHtml(agent.pincode)}" /></label>
        <label class="full-span"><span>Skills</span><input name="skills" value="${escapeHtml(agent.skills.join(", "))}" /></label>
        <label class="full-span"><span>Bio</span><textarea name="bio" rows="4">${escapeHtml(agent.bio)}</textarea></label>
        <label><span>Availability</span><select name="availability">
          <option value="available" ${agent.availability === "available" ? "selected" : ""}>Available</option>
          <option value="busy" ${agent.availability === "busy" ? "selected" : ""}>Busy</option>
          <option value="not_available" ${agent.availability === "not_available" ? "selected" : ""}>Not Available</option>
        </select></label>
        <button class="primary-button full-span" type="submit">Save profile</button>
      </form>
    </section>
  `;
}

function renderAdminBody() {
  return {
    overview: renderOverview(),
    dispatch: renderDispatch(),
    queries: renderQueries(),
    gigs: renderGigsSection(),
    agents: renderAgentsSection(),
    customers: renderCustomersSection(),
    payouts: renderPayoutsSection(),
    reports: renderReportsSection(),
    settings: renderSettingsSection(),
  }[state.activeSection];
}

function renderAgentBody() {
  return {
    dashboard: renderAgentDashboard(),
    gigs: renderGigsSection(),
    visits: renderAgentVisits(),
    proofs: renderProofsSection(),
    earnings: renderEarningsSection(),
    profile: renderProfileSection(),
  }[state.activeSection];
}

function renderMain() {
  return `
    <div class="app-shell">
      ${renderSidebar()}
      <main class="main-shell">
        ${renderTopbar()}
        <section class="page-stack">${state.role === "admin" ? renderAdminBody() : renderAgentBody()}</section>
      </main>
    </div>
  `;
}

function render() {
  document.title = state.role === "admin" ? "Repair Service Zone Admin" : "Repair Service Zone Agent";
  root.innerHTML = state.loggedIn ? renderMain() : renderLogin();
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.onclick = () => {
      state.authMode = button.dataset.authMode;
      state.loginMessage = "";
      render();
    };
  });

  document.getElementById("login-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const password = String(formData.get("password") || "").trim();

    if (state.role === "admin") {
      const account = ADMIN_ACCOUNTS.find((item) => item.email === email && item.password === password);
      if (!account) {
        state.loginMessage = "Admin dummy credentials use karo.";
        render();
        return;
      }
      state.session.adminEmail = account.email;
    } else {
      const agent = state.db.agents.find((item) => item.email.toLowerCase() === email && item.password === password);
      if (!agent) {
        state.loginMessage = "Agent credentials match nahi huye.";
        render();
        return;
      }
      state.session.agentId = agent.id;
    }

    state.loggedIn = true;
    state.loginMessage = "";
    render();
  });

  document.getElementById("otp-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    state.loggedIn = true;
    if (state.role === "agent" && !state.session.agentId) {
      state.session.agentId = state.db.agents[0]?.id || null;
    }
    render();
  });

  document.querySelectorAll("[data-nav]").forEach((button) => {
    button.onclick = () => {
      state.activeSection = button.dataset.nav;
      state.sidebarOpen = false;
      render();
    };
  });

  document.querySelector("[data-open-sidebar]")?.addEventListener("click", () => {
    state.sidebarOpen = true;
    render();
  });

  document.querySelector("[data-close-sidebar]")?.addEventListener("click", () => {
    state.sidebarOpen = false;
    render();
  });

  document.querySelector("[data-logout]")?.addEventListener("click", () => {
    state.loggedIn = false;
    state.search = "";
    state.activeTicketId = null;
    state.sidebarOpen = false;
    state.loginMessage = "";
    state.session.agentId = null;
    render();
  });

  document.querySelector("[data-search-input]")?.addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });

  document.querySelectorAll("[data-ticket]").forEach((button) => {
    button.onclick = () => {
      state.activeTicketId = button.dataset.ticket;
      if (state.role === "admin" && !["dispatch", "queries"].includes(state.activeSection)) {
        state.activeSection = "dispatch";
      }
      if (state.role === "agent" && state.activeSection !== "visits") {
        state.activeSection = "visits";
      }
      render();
    };
  });

  document.querySelectorAll("[data-toggle-agent-availability]").forEach((button) => {
    button.onclick = () => {
      const agentId = button.dataset.toggleAgentAvailability;
      updateDatabase((db) => {
        db.agents = db.agents.map((agent) => {
          if (agent.id !== agentId) return agent;
          const next = agent.availability === "available" ? "busy" : agent.availability === "busy" ? "not_available" : "available";
          return { ...agent, availability: next };
        });
        return db;
      });
      render();
    };
  });

  document.querySelectorAll("[data-toggle-gig-status]").forEach((button) => {
    button.onclick = () => {
      const gigId = button.dataset.toggleGigStatus;
      updateDatabase((db) => {
        db.gigs = db.gigs.map((gig) => (gig.id === gigId ? { ...gig, status: gig.status === "live" ? "paused" : "live" } : gig));
        return db;
      });
      render();
    };
  });

  document.querySelectorAll("[data-toggle-agent-gig]").forEach((button) => {
    button.onclick = () => {
      const gigId = button.dataset.toggleAgentGig;
      const agentId = state.session.agentId;
      updateDatabase((db) => {
        db.agents = db.agents.map((agent) => {
          if (agent.id !== agentId) return agent;
          const current = agent.gigAvailability[gigId] || "available";
          const next = current === "available" ? "not_available" : "available";
          return {
            ...agent,
            gigAvailability: {
              ...agent.gigAvailability,
              [gigId]: next,
            },
          };
        });
        return db;
      });
      render();
    };
  });

  document.querySelector("[data-start-ticket]")?.addEventListener("click", () => {
    const ticketId = document.querySelector("[data-start-ticket]").dataset.startTicket;
    updateDatabase((db) => {
      db.tickets = db.tickets.map((ticket) => {
        if (ticket.id !== ticketId || ticket.status === "completed") return ticket;
        return {
          ...ticket,
          status: "in_progress",
          timeline: [...ticket.timeline, { label: "Agent started work", time: "Just now" }],
        };
      });
      return db;
    });
    render();
  });

  document.querySelector("[data-assign-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const ticketId = event.currentTarget.dataset.assignForm;
    const formData = new FormData(event.currentTarget);
    const agentId = String(formData.get("agentId") || "");
    const nextStatus = String(formData.get("status") || "assigned");
    if (!agentId) return;
    const agent = state.db.agents.find((item) => item.id === agentId);

    updateDatabase((db) => {
      db.tickets = db.tickets.map((ticket) => {
        if (ticket.id !== ticketId) return ticket;
        return {
          ...ticket,
          assignedAgentId: agentId,
          status: nextStatus,
          timeline: [...ticket.timeline, { label: `Assigned to ${agent.name}`, time: "Just now" }],
        };
      });
      return db;
    });
    render();
  });

  document.getElementById("gig-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = String(formData.get("title") || "").trim();
    if (!title) return;
    const id = `gig-${Date.now()}`;
    const assignedAgentIds = formData.getAll("agentIds").map(String);
    updateDatabase((db) => {
      db.gigs.unshift({
        id,
        title,
        category: String(formData.get("category") || "").trim() || "Service",
        summary: String(formData.get("summary") || "").trim(),
        payout: Number(formData.get("payout") || 0),
        demand: String(formData.get("demand") || "Medium"),
        coverage: String(formData.get("coverage") || "").trim(),
        status: String(formData.get("status") || "live"),
        assignedAgentIds,
      });

      db.agents = db.agents.map((agent) => {
        if (!assignedAgentIds.includes(agent.id)) return agent;
        return {
          ...agent,
          gigIds: Array.from(new Set([...agent.gigIds, id])),
          gigAvailability: {
            ...agent.gigAvailability,
            [id]: "available",
          },
        };
      });
      return db;
    });
    render();
  });

  document.getElementById("agent-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const username = String(formData.get("username") || "").trim();
    if (!name || !email || !username) return;
    const id = `agent-${Date.now()}`;
    const photoFile = event.currentTarget.querySelector('[name="photo"]').files?.[0] || null;
    const photo = photoFile ? await fileToDataUrl(photoFile) : createAvatar(name, "#7c3aed", "#4f46e5");
    const gigIds = formData.getAll("gigIds").map(String);
    const skills = String(formData.get("skills") || "").split(",").map((item) => item.trim()).filter(Boolean);
    updateDatabase((db) => {
      db.agents.unshift({
        id,
        username,
        email,
        password: String(formData.get("password") || "").trim() || "agent123",
        name,
        phone: String(formData.get("phone") || "").trim(),
        address: String(formData.get("address") || "").trim(),
        city: String(formData.get("city") || "").trim(),
        pincode: String(formData.get("pincode") || "").trim(),
        skills,
        bio: String(formData.get("bio") || "").trim(),
        photo,
        availability: String(formData.get("availability") || "available"),
        gigIds,
        gigAvailability: Object.fromEntries(gigIds.map((gigId) => [gigId, "available"])),
        rating: "New",
        completedJobs: 0,
        earnings: 0,
      });

      db.gigs = db.gigs.map((gig) => {
        if (!gigIds.includes(gig.id)) return gig;
        return {
          ...gig,
          assignedAgentIds: Array.from(new Set([...gig.assignedAgentIds, id])),
        };
      });
      return db;
    });
    render();
  });

  document.getElementById("settings-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    updateDatabase((db) => {
      db.settings = {
        businessName: String(formData.get("businessName") || "").trim(),
        supportEmail: String(formData.get("supportEmail") || "").trim(),
        supportPhone: String(formData.get("supportPhone") || "").trim(),
        whatsapp: String(formData.get("whatsapp") || "").trim(),
        officeAddress: String(formData.get("officeAddress") || "").trim(),
      };
      return db;
    });
    render();
  });

  document.getElementById("profile-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const agentId = state.session.agentId;
    const formData = new FormData(event.currentTarget);
    const file = event.currentTarget.querySelector('[name="photo"]').files?.[0] || null;
    const nextPhoto = file ? await fileToDataUrl(file) : currentAgent()?.photo;
    updateDatabase((db) => {
      db.agents = db.agents.map((agent) => {
        if (agent.id !== agentId) return agent;
        return {
          ...agent,
          username: String(formData.get("username") || "").trim(),
          email: String(formData.get("email") || "").trim(),
          password: String(formData.get("password") || "").trim(),
          name: String(formData.get("name") || "").trim(),
          phone: String(formData.get("phone") || "").trim(),
          address: String(formData.get("address") || "").trim(),
          city: String(formData.get("city") || "").trim(),
          pincode: String(formData.get("pincode") || "").trim(),
          skills: String(formData.get("skills") || "").split(",").map((item) => item.trim()).filter(Boolean),
          bio: String(formData.get("bio") || "").trim(),
          availability: String(formData.get("availability") || "available"),
          photo: nextPhoto,
        };
      });
      return db;
    });
    render();
  });

  document.querySelector("[data-complete-ticket]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const ticketId = event.currentTarget.dataset.completeTicket;
    const formData = new FormData(event.currentTarget);
    const summary = String(formData.get("workSummary") || "").trim();
    const ticket = state.db.tickets.find((item) => item.id === ticketId);
    const photoInput = event.currentTarget.querySelector('[name="completionPhotos"]');
    const paymentInput = event.currentTarget.querySelector('[name="paymentProof"]');
    const photos = await Promise.all(Array.from(photoInput.files || []).map(fileToDataUrl));
    const paymentProof = paymentInput.files?.[0] ? await fileToDataUrl(paymentInput.files[0]) : ticket.paymentProof;

    if (!summary) {
      alert("Work summary required hai.");
      return;
    }
    if (!photos.length && !ticket.completionPhotos.length) {
      alert("Kam se kam ek work photo chahiye.");
      return;
    }
    if (ticket.paymentMode === "online" && !paymentProof) {
      alert("Online payment screenshot required hai.");
      return;
    }

    updateDatabase((db) => {
      db.tickets = db.tickets.map((item) => {
        if (item.id !== ticketId) return item;
        const timeline = [...item.timeline, { label: "Agent finished work", time: "Just now" }];
        if (paymentProof && !item.paymentProof) {
          timeline.push({ label: "Payment screenshot attached", time: "Just now" });
        }
        return {
          ...item,
          status: "completed",
          workSummary: summary,
          completionPhotos: [...item.completionPhotos, ...photos],
          paymentProof,
          timeline,
        };
      });

      db.agents = db.agents.map((agent) => {
        if (agent.id !== state.session.agentId) return agent;
        return {
          ...agent,
          completedJobs: agent.completedJobs + 1,
          earnings: agent.earnings + Math.round(ticket.amount * 0.25),
        };
      });
      return db;
    });
    render();
  });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

render();
