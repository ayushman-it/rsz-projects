const root = document.getElementById("admin-root");

const dummyCredentials = {
  username: "admin@repairservicezone.com",
  password: "admin123",
};

const queryTabs = [
  { id: "new", label: "New" },
  { id: "yesterday", label: "Yesterday" },
  { id: "last-week", label: "Last Week" },
];

const statusOptions = [
  { value: "pending", label: "Pending", tone: "amber" },
  { value: "ongoing", label: "Ongoing", tone: "blue" },
  { value: "resolved", label: "Resolved", tone: "green" },
];

const serviceCategories = [
  "AC Services",
  "Cooling",
  "Appliances",
  "Laundry",
  "Electronics",
  "Kitchen",
  "Water Purifier",
];

const serviceThumb = (label, c1, c2) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs><rect width="200" height="200" rx="42" fill="url(#g)"/><circle cx="100" cy="84" r="42" fill="rgba(255,255,255,.18)"/><text x="100" y="116" fill="white" text-anchor="middle" font-size="58" font-family="Arial" font-weight="700">${label}</text></svg>`,
  )}`;

const state = {
  authMode: "password",
  loggedIn: false,
  loginMessage: "",
  activeSection: "dashboard",
  sidebarOpen: false,
  queryTab: "new",
  search: "",
  openStatusMenu: null,
  logoPreview: null,
  settingsMessage: "",
  serviceMessage: "",
  showServiceForm: false,
  tickets: [
    { id: "RSZ-4012", customer: "Ananya Sharma", service: "AC Services", title: "Split AC not cooling", issue: "Cooling drops after 15 minutes and water leakage starts.", status: "pending", priority: "High", bucket: "new", source: "Website", revenue: 1800, location: "MP Nagar, Bhopal", updatedAt: "8 mins ago" },
    { id: "RSZ-4011", customer: "Vivek Soni", service: "Washing Machine", title: "Spin cycle vibration", issue: "Machine shakes heavily during final spin.", status: "ongoing", priority: "Medium", bucket: "new", source: "WhatsApp", revenue: 2200, location: "Arera Colony, Bhopal", updatedAt: "22 mins ago" },
    { id: "RSZ-4008", customer: "Neha Khan", service: "RO Purifier", title: "Filter warning after service", issue: "Water flow is slow and warning light is red.", status: "resolved", priority: "Low", bucket: "yesterday", source: "Phone", revenue: 1400, location: "Kolar Road, Bhopal", updatedAt: "Yesterday" },
    { id: "RSZ-4004", customer: "Rohit Jain", service: "LED TV", title: "Display flickering issue", issue: "Screen flickers after startup and shows lines.", status: "ongoing", priority: "High", bucket: "yesterday", source: "Website", revenue: 3600, location: "Lalghati, Bhopal", updatedAt: "Yesterday" },
    { id: "RSZ-3998", customer: "Pooja Verma", service: "Refrigerator", title: "Compressor overheating", issue: "Fridge is not freezing and body gets too hot.", status: "pending", priority: "High", bucket: "last-week", source: "Instagram", revenue: 4100, location: "Bairagarh, Bhopal", updatedAt: "3 days ago" },
    { id: "RSZ-3994", customer: "Karan Patel", service: "Air Cooler", title: "Cooler pump stopped", issue: "Fan works but the pump is not pushing water.", status: "resolved", priority: "Medium", bucket: "last-week", source: "Referral", revenue: 1200, location: "Govindpura, Bhopal", updatedAt: "5 days ago" },
  ],
  services: [
    { id: "SRV-01", name: "AC Repair", category: "AC Services", image: serviceThumb("AC", "#2563eb", "#1d4ed8"), activeTickets: 14, status: "Live" },
    { id: "SRV-02", name: "Air Cooler Repair", category: "Cooling", image: serviceThumb("CL", "#0891b2", "#0f766e"), activeTickets: 8, status: "Live" },
    { id: "SRV-03", name: "Geyser Repair", category: "Appliances", image: serviceThumb("GY", "#f97316", "#ea580c"), activeTickets: 5, status: "Seasonal" },
    { id: "SRV-04", name: "LED TV Repair", category: "Electronics", image: serviceThumb("TV", "#7c3aed", "#4f46e5"), activeTickets: 7, status: "Live" },
    { id: "SRV-05", name: "Microwave Repair", category: "Kitchen", image: serviceThumb("MW", "#ef4444", "#be123c"), activeTickets: 4, status: "Live" },
    { id: "SRV-06", name: "Refrigerator Repair", category: "Appliances", image: serviceThumb("RF", "#0ea5e9", "#0369a1"), activeTickets: 11, status: "Live" },
    { id: "SRV-07", name: "RO Purifier Service", category: "Water Purifier", image: serviceThumb("RO", "#22c55e", "#15803d"), activeTickets: 6, status: "Live" },
    { id: "SRV-08", name: "Washing Machine Repair", category: "Laundry", image: serviceThumb("WM", "#f59e0b", "#d97706"), activeTickets: 9, status: "Live" },
  ],
  settings: {
    businessName: "Repair Service Zone",
    phoneNumber: "+91 9522675728",
    whatsappNumber: "+91 9522675728",
    location: "Shop no. 225, MP Nagar Zone 1, Bhopal, Madhya Pradesh",
    facebook: "https://facebook.com/repairservicezone",
    instagram: "https://instagram.com/repairservicezone",
    socialMedia: "YouTube, X, LinkedIn",
    password: "",
    confirmPassword: "",
  },
  serviceDraft: {
    name: "",
    category: serviceCategories[0],
    image: serviceThumb("AC", "#2563eb", "#1d4ed8"),
  },
};

function getStatusMeta(value) {
  return statusOptions.find((option) => option.value === value) || statusOptions[0];
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

function filteredTickets() {
  const query = state.search.trim().toLowerCase();
  return state.tickets.filter((ticket) => !query || `${ticket.id} ${ticket.customer} ${ticket.service} ${ticket.title} ${ticket.issue} ${ticket.location} ${ticket.source}`.toLowerCase().includes(query));
}

function queryCounts() {
  return {
    new: state.tickets.filter((ticket) => ticket.bucket === "new").length,
    yesterday: state.tickets.filter((ticket) => ticket.bucket === "yesterday").length,
    "last-week": state.tickets.filter((ticket) => ticket.bucket === "last-week").length,
  };
}

function statusCounts() {
  return {
    pending: state.tickets.filter((ticket) => ticket.status === "pending").length,
    ongoing: state.tickets.filter((ticket) => ticket.status === "ongoing").length,
    resolved: state.tickets.filter((ticket) => ticket.status === "resolved").length,
  };
}

function topbarMeta() {
  return {
    dashboard: ["Control Center", "Admin dashboard for live repair operations", "Track raised tickets, move issues between Pending, Ongoing, and Resolved, and keep the whole team aligned."],
    queries: ["Ticket Inbox", "All customer queries by day range", "Review the latest service complaints and update status from a custom dropdown menu."],
    sales: ["Sales View", "Sales health across service categories", "Monitor conversion-ready jobs, repeat customers, and strongest-performing repair categories."],
    revenue: ["Revenue Desk", "Revenue tracking for the admin team", "Follow monthly revenue movement, stream contribution, and higher-value ticket segments."],
    settings: ["Workspace Settings", "Business identity and contact settings", "Update logo, password, phone, WhatsApp, location, and social handles from one responsive panel."],
    services: ["Service Catalog", "Manage services, categories, and imagery", "Keep the service list updated with names, images, and categories for frontend and admin records."],
  }[state.activeSection];
}

function renderLogin() {
  return `
    <div class="auth-shell">
      <div class="auth-card">
        <div class="auth-brand">
          <div class="brand-mark">RSZ</div>
          <div>
            <p class="eyebrow">Repair Service Zone</p>
            <h1>Admin Login</h1>
            <p class="subtle">Dummy auth only for now. OTP login jumps directly to dashboard because backend auth is not connected yet.</p>
          </div>
        </div>
        <div class="auth-mode-row">
          <button class="auth-mode ${state.authMode === "password" ? "auth-mode-active" : ""}" data-auth-mode="password">Username / Password</button>
          <button class="auth-mode ${state.authMode === "otp" ? "auth-mode-active" : ""}" data-auth-mode="otp">OTP Login</button>
        </div>
        ${
          state.authMode === "password"
            ? `<form id="password-login-form" class="auth-form">
                <label><span>Username</span><input name="username" placeholder="admin@repairservicezone.com" /></label>
                <label><span>Password</span><input type="password" name="password" placeholder="admin123" /></label>
                <div class="demo-box"><strong>Dummy credentials</strong><span>${dummyCredentials.username}</span><span>${dummyCredentials.password}</span></div>
                <button class="primary-button" type="submit">Login to Dashboard</button>
              </form>`
            : `<form id="otp-login-form" class="auth-form">
                <label><span>Mobile Number</span><input name="mobile" placeholder="+91 95XXXXXXXX" /></label>
                <label><span>OTP</span><input name="otp" placeholder="0000" /></label>
                <div class="demo-box"><strong>OTP login behavior</strong><span>No auth check right now.</span><span>Clicking continue opens dashboard directly.</span></div>
                <button class="primary-button" type="submit">Continue with OTP</button>
              </form>`
        }
        ${state.loginMessage ? `<p class="notice">${escapeHtml(state.loginMessage)}</p>` : ""}
      </div>
    </div>
  `;
}

function renderSidebar() {
  const items = [
    ["dashboard", "Dashboard"],
    ["queries", "All Queries"],
    ["sales", "Sales"],
    ["revenue", "Revenue"],
    ["settings", "Settings"],
    ["services", "Add Services"],
  ];

  return `
    <div class="sidebar-backdrop ${state.sidebarOpen ? "sidebar-backdrop-visible" : ""}" data-close-sidebar></div>
    <aside class="sidebar ${state.sidebarOpen ? "sidebar-open" : ""}">
      <div class="sidebar-brand">
        <div class="brand-mark">RSZ</div>
        <div><p class="eyebrow light">Repair Service Zone</p><h2>Admin Workspace</h2></div>
      </div>
      <nav class="sidebar-nav">
        ${items.map(([id, label]) => `<button class="sidebar-link ${state.activeSection === id ? "sidebar-link-active" : ""}" data-nav="${id}">${label}</button>`).join("")}
      </nav>
      <div class="sidebar-note"><p>Operations snapshot</p><strong>12 technicians active</strong><span>3 urgent tickets still need assignment tonight.</span></div>
    </aside>
  `;
}

function renderStatusDropdown(ticket) {
  const current = getStatusMeta(ticket.status);
  const open = state.openStatusMenu === ticket.id;
  return `
    <div class="status-menu">
      <button class="status-chip tone-${current.tone}" data-status-toggle="${ticket.id}"><span>${current.label}</span><span class="caret">▾</span></button>
      ${
        open
          ? `<div class="status-popover">
              ${statusOptions.map((option) => `<button class="status-option ${option.value === ticket.status ? "status-option-active" : ""}" data-status-option="${ticket.id}" data-next-status="${option.value}"><span class="status-dot tone-${option.tone}"></span><span>${option.label}</span></button>`).join("")}
            </div>`
          : ""
      }
    </div>
  `;
}

function renderTicketTable(tickets) {
  return `
    <div class="table-shell">
      <table class="data-table">
        <thead><tr><th>Ticket</th><th>Customer</th><th>Issue</th><th>Status</th><th>Revenue</th></tr></thead>
        <tbody>
          ${tickets.map((ticket) => `<tr><td data-label="Ticket"><strong>${ticket.id}</strong><span>${escapeHtml(ticket.service)}</span></td><td data-label="Customer"><strong>${escapeHtml(ticket.customer)}</strong><span>${escapeHtml(ticket.location)}</span></td><td data-label="Issue"><strong>${escapeHtml(ticket.title)}</strong><span>${escapeHtml(ticket.issue)}</span></td><td data-label="Status">${renderStatusDropdown(ticket)}</td><td data-label="Revenue"><strong>${formatCurrency(ticket.revenue)}</strong><span>${escapeHtml(ticket.updatedAt)}</span></td></tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderDashboard() {
  const counts = statusCounts();
  const totalRevenue = state.tickets.reduce((sum, ticket) => sum + ticket.revenue, 0);
  const resolvedRate = `${Math.round((counts.resolved / state.tickets.length) * 100)}%`;
  const countMap = queryCounts();

  return `
    <section class="hero-panel">
      <div>
        <p class="eyebrow accent">Live Operations</p>
        <h3>Track every service issue from first complaint to resolution.</h3>
        <p class="subtle">The admin team can scan ticket pressure, move jobs between stages, and keep queries, sales, revenue, and service updates inside one clean workspace.</p>
        <div class="pill-row"><span class="pill">Ticket updates in real time</span><span class="pill">Responsive admin layout</span><span class="pill">Custom status dropdown</span></div>
      </div>
      <div class="hero-stack">
        <div class="metric-box"><span>Open queries</span><strong>${counts.pending + counts.ongoing}</strong><p>Tickets still being processed by the support desk.</p></div>
        <div class="metric-box dark"><span>Resolved rate</span><strong>${resolvedRate}</strong><p>Share of issues already completed and closed.</p></div>
      </div>
    </section>
    <section class="stats-grid">
      <article class="panel stat-panel"><p>Pending Issues</p><strong>${counts.pending}</strong><span>Requires technician assignment</span></article>
      <article class="panel stat-panel"><p>Ongoing Jobs</p><strong>${counts.ongoing}</strong><span>Currently in progress</span></article>
      <article class="panel stat-panel"><p>Resolved</p><strong>${counts.resolved}</strong><span>Completed and handed back</span></article>
      <article class="panel stat-panel"><p>Revenue Captured</p><strong>${formatCurrency(totalRevenue)}</strong><span>From tracked tickets</span></article>
    </section>
    <section class="content-grid">
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow accent">Status Board</p><h3>Issue flow</h3></div><span class="pill">Custom status movement</span></div>
        <div class="board-grid board-grid-status">
          ${statusOptions.map((status) => `<div class="board-column"><div class="board-head"><span class="status-dot tone-${status.tone}"></span><strong>${status.label}</strong><span>${state.tickets.filter((ticket) => ticket.status === status.value).length}</span></div><div class="board-list">${state.tickets.filter((ticket) => ticket.status === status.value).map((ticket) => `<article class="ticket-card"><div class="ticket-top"><span>${ticket.id}</span><span>${ticket.priority}</span></div><h4>${escapeHtml(ticket.title)}</h4><p>${escapeHtml(ticket.customer)}</p><div class="ticket-meta"><span>${escapeHtml(ticket.service)}</span><span>${escapeHtml(ticket.updatedAt)}</span></div></article>`).join("")}</div></div>`).join("")}
        </div>
      </div>
      <div class="stack">
        <div class="panel"><div class="panel-head"><div><p class="eyebrow accent">Query Pulse</p><h3>Incoming by time range</h3></div></div><div class="simple-list">${queryTabs.map((tab) => `<div class="simple-row"><span>${tab.label}</span><strong>${countMap[tab.id]}</strong></div>`).join("")}</div></div>
        <div class="panel"><div class="panel-head"><div><p class="eyebrow accent">Revenue Snapshot</p><h3>Average ticket value</h3></div></div><div class="spotlight"><strong>${formatCurrency(Math.round(totalRevenue / state.tickets.length))}</strong><p>Average recovery per tracked ticket in this admin preview.</p><div class="progress"><span style="width:72%"></span></div><small>72% of target hit for the current cycle</small></div></div>
      </div>
    </section>
    <section class="panel"><div class="panel-head"><div><p class="eyebrow accent">Recent Tickets</p><h3>Support desk table</h3></div></div>${renderTicketTable(state.tickets.slice(0, 5))}</section>
  `;
}

function renderQueries() {
  const tickets = filteredTickets().filter((ticket) => ticket.bucket === state.queryTab);
  return `
    <section class="panel">
      <div class="panel-head wrap">
        <div><p class="eyebrow accent">Query Filters</p><h3>Customer query tabs</h3></div>
        <div class="pill-row">${queryTabs.map((tab) => `<button class="tab-chip ${state.queryTab === tab.id ? "tab-chip-active" : ""}" data-query-tab="${tab.id}"><span>${tab.label}</span><strong>${queryCounts()[tab.id]}</strong></button>`).join("")}</div>
      </div>
    </section>
    <section class="panel">
      ${renderTicketTable(tickets)}
      ${tickets.length === 0 ? `<div class="empty-state"><h4>No queries matched this filter.</h4><p>Try another tab or clear the top search to see more tickets.</p></div>` : ""}
    </section>
  `;
}

function renderSales() {
  const rows = [
    { label: "AC Services", value: "38 closed sales", progress: 92 },
    { label: "Refrigerator Repair", value: "24 closed sales", progress: 76 },
    { label: "Washing Machine", value: "21 closed sales", progress: 63 },
    { label: "RO Purifier", value: "18 closed sales", progress: 54 },
  ];

  return `
    <section class="stats-grid compact">
      <article class="panel stat-panel"><p>Completed jobs</p><strong>128</strong><span>+14.8% vs last period</span></article>
      <article class="panel stat-panel"><p>Avg. order value</p><strong>Rs. 2,860</strong><span>+6.3% vs last period</span></article>
      <article class="panel stat-panel"><p>New customers</p><strong>47</strong><span>+11.2% vs last period</span></article>
    </section>
    <section class="content-grid">
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow accent">Top Selling Categories</p><h3>Sales by service type</h3></div></div>
        <div class="metric-list">${rows.map((item) => `<div class="metric-row"><div><strong>${item.label}</strong><span>${item.value}</span></div><div class="metric-progress"><div class="progress"><span style="width:${item.progress}%"></span></div><small>${item.progress}%</small></div></div>`).join("")}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow accent">Daily Notes</p><h3>Sales actions</h3></div></div>
        <div class="notes-list"><article><strong>Follow up on 7 estimates</strong><p>Customers have asked for pricing approval but have not confirmed service yet.</p></article><article><strong>Promote AMC renewals</strong><p>Recurring revenue is lower than target and can be improved with maintenance plan calls.</p></article><article><strong>Upsell spare parts on ongoing jobs</strong><p>Technician updates show 4 ongoing jobs where parts replacement can increase order value.</p></article></div>
      </div>
    </section>
  `;
}

function renderRevenue() {
  const months = [
    { label: "Jan", amount: 78000 },
    { label: "Feb", amount: 91000 },
    { label: "Mar", amount: 106000 },
    { label: "Apr", amount: 118000 },
    { label: "May", amount: 126000 },
    { label: "Jun", amount: 139000 },
  ];
  const streams = [
    { label: "Repair service", amount: 156000, progress: 82 },
    { label: "Inspection visit", amount: 46000, progress: 51 },
    { label: "Parts replacement", amount: 92000, progress: 67 },
    { label: "AMC renewals", amount: 38000, progress: 36 },
  ];

  return `
    <section class="stats-grid compact">
      <article class="panel stat-panel"><p>Total Revenue</p><strong>${formatCurrency(332000)}</strong><span>Across tracked service streams</span></article>
      <article class="panel stat-panel"><p>Recurring Revenue</p><strong>${formatCurrency(38000)}</strong><span>AMC and maintenance plans</span></article>
      <article class="panel stat-panel"><p>Monthly Growth</p><strong>+12.6%</strong><span>Compared with previous month</span></article>
    </section>
    <section class="content-grid">
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow accent">Monthly Revenue</p><h3>Last 6 months</h3></div></div>
        <div class="bar-chart">${months.map((month) => `<div class="bar-item"><div class="bar-track"><span style="height:${Math.round(month.amount / 1500)}px"></span></div><strong>${month.label}</strong><small>${formatCurrency(month.amount)}</small></div>`).join("")}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><p class="eyebrow accent">Revenue Streams</p><h3>Where money is coming from</h3></div></div>
        <div class="metric-list">${streams.map((item) => `<div class="metric-row"><div><strong>${item.label}</strong><span>${formatCurrency(item.amount)}</span></div><div class="metric-progress"><div class="progress"><span style="width:${item.progress}%"></span></div><small>${item.progress}%</small></div></div>`).join("")}</div>
      </div>
    </section>
  `;
}

function renderSettings() {
  return `
    <section class="panel">
      <form id="settings-form" class="settings-grid">
        <div class="settings-section">
          <div class="panel-head"><div><p class="eyebrow accent">Brand Settings</p><h3>Logo and identity</h3></div></div>
          <div class="logo-row"><div class="logo-preview big">${state.logoPreview ? `<img src="${state.logoPreview}" alt="Logo preview" />` : "<span>RSZ</span>"}</div><label class="upload-button"><span>Change logo</span><input id="logo-input" type="file" accept="image/*" /></label></div>
          <label><span>Business name</span><input data-settings="businessName" value="${escapeHtml(state.settings.businessName)}" /></label>
          <label><span>Location</span><textarea data-settings="location" rows="4">${escapeHtml(state.settings.location)}</textarea></label>
        </div>
        <div class="settings-section">
          <div class="panel-head"><div><p class="eyebrow accent">Contact Settings</p><h3>Phone and social media</h3></div></div>
          <label><span>Phone number</span><input data-settings="phoneNumber" value="${escapeHtml(state.settings.phoneNumber)}" /></label>
          <label><span>WhatsApp number</span><input data-settings="whatsappNumber" value="${escapeHtml(state.settings.whatsappNumber)}" /></label>
          <label><span>Facebook</span><input data-settings="facebook" value="${escapeHtml(state.settings.facebook)}" /></label>
          <label><span>Instagram</span><input data-settings="instagram" value="${escapeHtml(state.settings.instagram)}" /></label>
          <label><span>Other social media</span><input data-settings="socialMedia" value="${escapeHtml(state.settings.socialMedia)}" /></label>
        </div>
        <div class="settings-section full">
          <div class="panel-head"><div><p class="eyebrow accent">Security</p><h3>Password reset</h3></div></div>
          <div class="two-grid"><label><span>New password</span><input type="password" data-settings="password" value="${escapeHtml(state.settings.password)}" /></label><label><span>Confirm password</span><input type="password" data-settings="confirmPassword" value="${escapeHtml(state.settings.confirmPassword)}" /></label></div>
          <div class="actions"><button class="primary-button" type="submit">Save Settings</button>${state.settingsMessage ? `<p class="notice">${escapeHtml(state.settingsMessage)}</p>` : ""}</div>
        </div>
      </form>
    </section>
  `;
}

function renderServices() {
  const visible = state.services.filter((service) => !state.search.trim() || `${service.name} ${service.category}`.toLowerCase().includes(state.search.toLowerCase()));
  return `
    <section class="panel">
      <div class="panel-head wrap">
        <div><p class="eyebrow accent">Service Catalog</p><h3>Add and manage services</h3></div>
        <button class="primary-button" data-toggle-service-form>${state.showServiceForm ? "Close form" : "Add Service"}</button>
      </div>
      ${
        state.showServiceForm
          ? `<form id="service-form" class="service-form">
              <label><span>Service name</span><input data-service="name" value="${escapeHtml(state.serviceDraft.name)}" placeholder="Enter service name" /></label>
              <label><span>Category</span><select data-service="category">${serviceCategories.map((item) => `<option value="${item}" ${state.serviceDraft.category === item ? "selected" : ""}>${item}</option>`).join("")}</select></label>
              <label class="upload-tile"><div class="service-thumb"><img src="${state.serviceDraft.image}" alt="Service preview" /></div><div><strong>Upload service image</strong><p>PNG, JPG, or SVG for the service table and cards.</p></div><input id="service-image-input" type="file" accept="image/*" /></label>
              <div class="actions"><button class="primary-button" type="submit">Save Service</button>${state.serviceMessage ? `<p class="notice">${escapeHtml(state.serviceMessage)}</p>` : ""}</div>
            </form>`
          : ""
      }
    </section>
    <section class="panel">
      <div class="table-shell">
        <table class="data-table">
          <thead><tr><th>Preview</th><th>Service Name</th><th>Category</th><th>Active Tickets</th><th>Status</th></tr></thead>
          <tbody>${visible.map((service) => `<tr><td data-label="Preview"><div class="service-thumb"><img src="${service.image}" alt="${escapeHtml(service.name)}" /></div></td><td data-label="Service Name"><strong>${escapeHtml(service.name)}</strong><span>${service.id}</span></td><td data-label="Category"><strong>${escapeHtml(service.category)}</strong><span>Responsive UI ready</span></td><td data-label="Active Tickets"><strong>${service.activeTickets}</strong><span>Queries linked</span></td><td data-label="Status"><span class="status-chip ${service.status === "Seasonal" ? "tone-amber" : "tone-green"}">${service.status}</span></td></tr>`).join("")}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderMain() {
  const [eyebrow, title, subtitle] = topbarMeta();
  const content =
    state.activeSection === "dashboard"
      ? renderDashboard()
      : state.activeSection === "queries"
        ? renderQueries()
        : state.activeSection === "sales"
          ? renderSales()
          : state.activeSection === "revenue"
            ? renderRevenue()
            : state.activeSection === "settings"
              ? renderSettings()
              : renderServices();

  return `
    <div class="admin-shell">
      ${renderSidebar()}
      <div class="main-area">
        <header class="topbar">
          <div class="topbar-copy">
            <button class="menu-button" data-open-sidebar>☰</button>
            <div><p class="eyebrow accent">${eyebrow}</p><h1>${title}</h1><p class="subtle">${subtitle}</p></div>
          </div>
          <div class="topbar-tools"><input class="search-input" data-search-input placeholder="Search tickets, services, customer..." value="${escapeHtml(state.search)}" /><button class="ghost-button" data-logout>Logout</button></div>
        </header>
        <main class="page-content">${content}</main>
      </div>
    </div>
  `;
}

function render() {
  root.innerHTML = state.loggedIn ? renderMain() : renderLogin();
  bindEvents();
}

function bindEvents() {
  const passwordForm = document.getElementById("password-login-form");
  const otpForm = document.getElementById("otp-login-form");
  const settingsForm = document.getElementById("settings-form");
  const serviceForm = document.getElementById("service-form");
  const logoInput = document.getElementById("logo-input");
  const serviceImageInput = document.getElementById("service-image-input");
  const searchInput = document.querySelector("[data-search-input]");

  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.onclick = () => {
      state.authMode = button.dataset.authMode;
      state.loginMessage = "";
      render();
    };
  });

  if (passwordForm) {
    passwordForm.onsubmit = (event) => {
      event.preventDefault();
      const form = new FormData(passwordForm);
      const username = String(form.get("username") || "").trim();
      const password = String(form.get("password") || "").trim();
      if (username === dummyCredentials.username && password === dummyCredentials.password) {
        state.loggedIn = true;
        state.loginMessage = "";
      } else {
        state.loginMessage = "Use the dummy username and password shown below the form.";
      }
      render();
    };
  }

  if (otpForm) {
    otpForm.onsubmit = (event) => {
      event.preventDefault();
      state.loggedIn = true;
      state.loginMessage = "";
      render();
    };
  }

  document.querySelectorAll("[data-nav]").forEach((button) => {
    button.onclick = () => {
      state.activeSection = button.dataset.nav;
      state.sidebarOpen = false;
      state.openStatusMenu = null;
      render();
    };
  });

  document.querySelectorAll("[data-query-tab]").forEach((button) => {
    button.onclick = () => {
      state.queryTab = button.dataset.queryTab;
      render();
    };
  });

  document.querySelectorAll("[data-status-toggle]").forEach((button) => {
    button.onclick = () => {
      const id = button.dataset.statusToggle;
      state.openStatusMenu = state.openStatusMenu === id ? null : id;
      render();
    };
  });

  document.querySelectorAll("[data-status-option]").forEach((button) => {
    button.onclick = () => {
      const id = button.dataset.statusOption;
      const next = button.dataset.nextStatus;
      state.tickets = state.tickets.map((ticket) => (ticket.id === id ? { ...ticket, status: next, updatedAt: "Just now" } : ticket));
      state.openStatusMenu = null;
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

  document.querySelector("[data-toggle-service-form]")?.addEventListener("click", () => {
    state.showServiceForm = !state.showServiceForm;
    state.serviceMessage = "";
    render();
  });

  document.querySelector("[data-logout]")?.addEventListener("click", () => {
    state.loggedIn = false;
    state.authMode = "password";
    state.sidebarOpen = false;
    state.openStatusMenu = null;
    render();
  });

  if (searchInput) {
    searchInput.oninput = (event) => {
      state.search = event.target.value;
    };
    searchInput.onchange = (event) => {
      state.search = event.target.value;
      render();
    };
  }

  document.querySelectorAll("[data-settings]").forEach((input) => {
    input.oninput = (event) => {
      state.settings[event.target.dataset.settings] = event.target.value;
    };
  });

  if (settingsForm) {
    settingsForm.onsubmit = (event) => {
      event.preventDefault();
      if (state.settings.password || state.settings.confirmPassword) {
        if (state.settings.password !== state.settings.confirmPassword) {
          state.settingsMessage = "Password and confirm password do not match.";
          render();
          return;
        }
      }
      state.settingsMessage = "Settings saved for the admin preview.";
      state.settings.password = "";
      state.settings.confirmPassword = "";
      render();
    };
  }

  document.querySelectorAll("[data-service]").forEach((input) => {
    input.oninput = (event) => {
      state.serviceDraft[event.target.dataset.service] = event.target.value;
    };
    input.onchange = (event) => {
      state.serviceDraft[event.target.dataset.service] = event.target.value;
    };
  });

  if (serviceForm) {
    serviceForm.onsubmit = (event) => {
      event.preventDefault();
      if (!state.serviceDraft.name.trim()) {
        state.serviceMessage = "Please enter a service name before adding.";
        render();
        return;
      }
      state.services.unshift({
        id: `SRV-${String(state.services.length + 1).padStart(2, "0")}`,
        name: state.serviceDraft.name.trim(),
        category: state.serviceDraft.category,
        image: state.serviceDraft.image,
        activeTickets: Math.floor(Math.random() * 9) + 1,
        status: "Live",
      });
      state.serviceDraft = { name: "", category: serviceCategories[0], image: serviceThumb("AD", "#2563eb", "#1d4ed8") };
      state.serviceMessage = "New service added to the catalog preview.";
      state.showServiceForm = false;
      render();
    };
  }

  if (logoInput) {
    logoInput.onchange = async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      state.logoPreview = await fileToDataUrl(file);
      state.settingsMessage = "Logo updated in the admin preview.";
      render();
    };
  }

  if (serviceImageInput) {
    serviceImageInput.onchange = async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      state.serviceDraft.image = await fileToDataUrl(file);
      render();
    };
  }

  document.addEventListener("click", closeStatusMenuOnce, { once: true });
}

function closeStatusMenuOnce(event) {
  if (!event.target.closest(".status-menu") && state.openStatusMenu !== null) {
    state.openStatusMenu = null;
    render();
  }
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
