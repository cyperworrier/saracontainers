import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router";
import {
  Phone, Mail, MapPin, Menu, X, ChevronRight, CheckCircle2,
  Award, Factory, Globe, Users, Package, Star, ArrowRight,
  MessageCircle, Download, Shield, Leaf, Clock, TrendingUp,
  Wrench, BarChart2, Building2, Zap, RefreshCw,
} from "lucide-react";

// ─── Theme: light, warm-white ground, #E84210 orange, #1e2d3d navy ──────────
const C = {
  orange: "#E84210",
  navy: "#1e2d3d",
  white: "#ffffff",
  cream: "#f7f6f2",
  muted: "#6b6b5e",
  border: "rgba(0,0,0,0.1)",
  lightBorder: "rgba(0,0,0,0.06)",
  text: "#1a1a18",
  textLight: "#5a5a50",
};

// ─── Shared logo ─────────────────────────────────────────────────────────────
function SaraLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 no-underline">
      <img src="/logo.png" alt="Sara Containers Logo" />
      {/* <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill={C.orange} />
        <path d="M20 8C20 8 13 15 13 21.5C13 25.6 16.1 29 20 29C23.9 29 27 25.6 27 21.5C27 15 20 8 20 8Z" fill="white" />
        <path d="M20 14C20 14 16 18 16 21.5C16 23.4 17.8 25 20 25C22.2 25 24 23.4 24 21.5C24 18 20 14 20 14Z" fill={C.orange} />
        <circle cx="20" cy="21.5" r="2.5" fill="white" />
      </svg> */}
      <div className="flex flex-col leading-none">
        {/* <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.05rem", fontWeight: 800, color: inverted ? "#fff" : C.navy, letterSpacing: "0.04em" }}>
          SARA CONTAINERS
        </span>
        <span style={{ fontFamily: "'Barlow',sans-serif", fontSize: "0.62rem", fontWeight: 600, color: C.orange, letterSpacing: "0.15em" }}>
          PVT LTD
        </span> */}
      </div>
    </Link>
  );
}

// ─── Label / section eyebrow ─────────────────────────────────────────────────
function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3 ${center ? "justify-center" : ""}`}
      style={{ fontFamily: "'Barlow',sans-serif", color: C.orange }}>
      <span className="w-5 h-px" style={{ background: C.orange }} />
      {children}
      {center && <span className="w-5 h-px" style={{ background: C.orange }} />}
    </p>
  );
}

// ─── Section heading ─────────────────────────────────────────────────────────
function SectionTitle({ children, center = false, light = false }: { children: React.ReactNode; center?: boolean; light?: boolean }) {
  return (
    <h2 className={`font-black leading-none mb-0 ${center ? "text-center" : ""}`}
      style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "clamp(1.9rem,3.5vw,2.7rem)", color: light ? "#fff" : C.text }}>
      {children}
    </h2>
  );
}

// ─── Button ──────────────────────────────────────────────────────────────────
function Btn({ children, variant = "primary", onClick, to, small = false }: {
  children: React.ReactNode; variant?: "primary" | "outline" | "navy"; onClick?: () => void; to?: string; small?: boolean;
}) {
  const cls = `inline-flex items-center gap-2 font-semibold rounded-sm transition-all duration-300 cursor-pointer border ${small ? "px-4 py-2 text-xs" : "px-6 py-3 text-sm"}`;
  const style: React.CSSProperties = variant === "primary"
    ? { background: C.orange, color: "#fff", borderColor: C.orange, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.08em" }
    : variant === "navy"
    ? { background: C.navy, color: "#fff", borderColor: C.navy, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.08em" }
    : { background: "transparent", color: C.navy, borderColor: C.navy, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.08em" };
  if (to) return <Link to={to} className={`${cls} hover:scale-105 hover:shadow-md`} style={style}>{children}</Link>;
  return <button className={`${cls} hover:scale-105 hover:shadow-md`} style={style} onClick={onClick}>{children}</button>;
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
const NAV = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 text-xs border-b" style={{ background: C.cream, color: C.text, borderColor: C.lightBorder }}>
        <div className="flex items-center gap-6">
          <a href="tel:+919944549102" className="flex items-center gap-1.5 hover:text-slate-800 transition-colors" style={{ color: C.text }}>
            <Phone size={10} /> +91 99445 49102
          </a>
          <a href="mailto:saracontainers@gmail.com" className="flex items-center gap-1.5 hover:text-slate-800 transition-colors" style={{ color: C.text }}>
            <Mail size={10} /> saracontainers@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-1.5" style={{ color: C.text }}>
          <MapPin size={10} /> Survey No 50/1A2, Thirumangalam, Madurai – 625704, Tamil Nadu
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-white transition-shadow duration-200"
        style={{ boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.1)" : "0 1px 0 rgba(0,0,0,0.08)" }}>
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <SaraLogo />
          <ul className="hidden lg:flex items-center">
            {NAV.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === "/"}
                  className="px-5 py-6 text-lg font-semibold relative block transition-all duration-300 hover:scale-105"
                  style={({ isActive }) => ({
                    fontFamily: "'Barlow',sans-serif",
                    color: isActive ? C.orange : C.text,
                  })}>
                  {({ isActive }) => (
                    <>
                      {label}
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                        style={{ background: C.orange, transform: isActive ? "scaleX(1)" : "scaleX(0)" }} />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-3">
            <Btn to="/contact" small>REQUEST QUOTE</Btn>
          </div>
          <button className="lg:hidden p-1" onClick={() => setOpen(!open)} style={{ color: C.text }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {open && (
          <div className="lg:hidden bg-white border-t border-border px-6 py-3 flex flex-col">
            {NAV.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === "/"}
                className="py-3 text-sm border-b last:border-0"
                style={({ isActive }) => ({ color: isActive ? C.orange : C.text, fontFamily: "'Barlow',sans-serif", borderColor: C.border })}>
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </header>
    </>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: C.cream }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <SaraLogo />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
              India's premier tin container manufacturer since 1985. ISO 9001:2015, HACCP & BRC certified. Serving 2,000+ companies across 25+ countries.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>Products</h4>
            <ul className="space-y-2">
              {["Round Tin Containers", "Rectangular & Square Tins", "Custom Printed Tins", "Ghee Containers", "Tea & Spice Tins", "Paint & Industrial Cans"].map(p => (
                <li key={p}><Link to="/products" className="text-sm hover:text-slate-900 hover:scale-105 transition-all duration-200 inline-block" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{p}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>Company</h4>
            <ul className="space-y-2">
              {[["About Us", "/about"], ["Why Choose Us", "/why-choose-us"], ["Contact Us", "/contact"]].map(([l, h]) => (
                <li key={l}><Link to={h} className="text-sm hover:text-slate-900 hover:scale-105 transition-all duration-200 inline-block" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>Contact</h4>
            <div className="space-y-2.5">
              {[
                { icon: <Phone size={12} />, text: "+91 99445 49102", href: "tel:+919944549102" },
                { icon: <Phone size={12} />, text: "+91 99445 42221 (Sales)", href: "tel:+919944542221" },
                { icon: <Mail size={12} />, text: "saracontainers@gmail.com", href: "mailto:saracontainers@gmail.com" },
              ].map(({ icon, text, href }) => (
                <a key={text} href={href} className="flex items-start gap-2 text-sm hover:text-slate-900 hover:translate-x-1 transition-all duration-200" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                  <span className="mt-0.5 flex-shrink-0">{icon}</span>{text}
                </a>
              ))}
              <div className="flex items-start gap-2 text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                Madurai, Tamil Nadu 625704
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: C.lightBorder }}>
          <p className="text-xs" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
            © {new Date().getFullYear()} Sara Containers Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
            ISO 9001:2015 · HACCP · BRC · FDA · FSSAI
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page wrapper ─────────────────────────────────────────────────────────────
function PageHero({ title, sub, breadcrumb }: { title: React.ReactNode; sub?: string; breadcrumb: string }) {
  return (
    <section className="py-16 border-b" style={{ background: C.cream, borderColor: C.lightBorder }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs mb-4 flex items-center gap-2" style={{ color: C.textLight, fontFamily: "'Barlow',sans-serif" }}>
          <Link to="/" className="hover:text-slate-900 hover:scale-105 transition-all duration-200 inline-block" style={{ color: C.text }}>Home</Link>
          <ChevronRight size={12} /> <span style={{ color: C.orange }}>{breadcrumb}</span>
        </p>
        <h1 className="font-black text-slate-900 leading-none mb-3" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "clamp(2.2rem,5vw,3.5rem)" }}>
          {title}
        </h1>
        {sub && <p className="text-base max-w-2xl" style={{ color: C.text, fontFamily: "'Inter',sans-serif" }}>{sub}</p>}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAGE 1 — HOME
// ═══════════════════════════════════════════════════════════════
const FEATURED_PRODUCTS = [
  { id: 1, name: "Round Tin Containers", perfect: "Cookies, candies, spices, dry fruits, tea, coffee", range: "50g–5kg", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=420&h=300&fit=crop&auto=format", features: ["Multiple size options", "Airtight secure closure", "Food-grade tin plate", "Custom CMYK printing", "Matte/Gloss finish", "Stackable design"] },
  { id: 2, name: "Rectangular & Square Tins", perfect: "Baked goods, biscuits, tea packaging, gift packs", range: "100g–5kg", img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=420&h=300&fit=crop&auto=format", features: ["Space-efficient design", "Secure locking closure", "Premium embossed finish", "High-resolution graphics", "Reinforced edges", "Retail & wholesale ready"] },
  { id: 3, name: "Custom Printed Tins", perfect: "Brand enhancement, corporate gifts, promotions", range: "Custom sizes", img: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=420&h=300&fit=crop&auto=format", features: ["Full-color CMYK process", "Up to 2400 dpi resolution", "Matte/Gloss/Embossed finish", "Variable data printing", "Eco-friendly soy inks", "3D mockup before production"] },
  { id: 4, name: "Ghee Containers", perfect: "Traditional ghee, religious offerings, festivals", range: "200ml–5L", img: "https://images.unsplash.com/photo-1631116201895-3cb1c2c8527f?w=420&h=300&fit=crop&auto=format", features: ["Leakage-proof double-seal", "Traditional Indian aesthetics", "18-month shelf life", "Heat-resistant (up to 80°C)", "Easy-open mechanism", "Vapor-proof storage"] },
  { id: 5, name: "Tea & Spice Tins", perfect: "Premium tea leaves, ground spices, herbal products", range: "50g–2kg", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=420&h=300&fit=crop&auto=format", features: ["Aroma-lock sealing", "Flavor preservation coating", "UV-resistant exterior", "Multiple compartments", "Humidity-controlled interior", "Traditional & modern designs"] },
  { id: 6, name: "Cookie & Biscuit Cans", perfect: "Gourmet cookies, biscuits, confectionery", range: "100g–3kg", img: "./public/cookies.png", features: ["Moisture-proof sealing", "Crispness preservation", "Decorative exterior", "Re-closable design", "Transparent window option", "Gift pack suitable"] },
];

const TRUSTED_PARTNERS = [
  { name: "sks", logo: "/partners/sks.png" },
  // { name: "ganesh", logo: "/partners/ganesh.png" },
  { name: "freshnut", logo: "/partners/freshnut.png" },
  { name: "grb", logo: "/partners/grb.png" },
  { name: "nippon", logo: "/partners/nippon.png" },
  { name: "rvc", logo: "/partners/rvc.png" },
  { name: "rkg", logo: "/partners/rkg.png" },
  // { name: "Sara Containers", logo: "/logo.png" },
  { name: "rabbanna", logo: "/partners/rabbanna.png" },
  {name : "gajjalle", logo: "/partners/gajjalle.png"},
];

const partnerLogoFallback = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=ffffff&color=1e2d3d&bold=true&format=svg&size=192`;

const NEWS = [
  { date: "June 2025", title: "Export Network Expands to 10 New Countries", body: "Successfully launched packaging solutions in Middle East, Southeast Asia, and European markets with ISO-certified products." },
  { date: "March 2025", title: "New Automated Printing Facility Opens", body: "Invested ₹50 crores in automated printing equipment, increasing capacity by 40% and improving resolution to 2400 dpi." },
  { date: "December 2024", title: "ISO 9001:2015 & HACCP Certification Renewed", body: "Renewed certification reinforcing our commitment to food safety and quality management at international standards." },
  { date: "September 2024", title: "50 Million Units Annual Production Milestone", body: "Celebrated producing 50 million tin containers annually, marking 35 years of consistent growth and market leadership." },
  { date: "June 2024", title: "Canvironment Week Participation", body: "Joined global Can makers initiative creating the United Global Metal Can Sustainability Movement, promoting tin recycling." },
];

const HERO_MEDIA = [
  { title: "Custom Printed Tins", label: "Premium gift & retail packaging", img: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=900&h=600&fit=crop&auto=format" },
  { title: "Round Food Tins", label: "Freshness-preserving everyday packs", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=600&fit=crop&auto=format" },
  { title: "Ghee & Specialty Tins", label: "Leak-proof premium containers", img: "https://images.unsplash.com/photo-1631116201895-3cb1c2c8527f?w=900&h=600&fit=crop&auto=format" },
  { title: "Industrial & Paint Cans", label: "Robust, export-ready metal cans", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&h=600&fit=crop&auto=format" },
];

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "88vh", background: C.cream }}>
        <div
          className="hero-bg-move absolute inset-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1565793979392-34b5ae16f3e8?w=1600&h=900&fit=crop&auto=format)`,
            backgroundSize: "170%",
            backgroundPosition: "center center",
            opacity: 0.18,
            filter: "grayscale(20%) brightness(1.05)",
          }}
        />
        <div className="absolute inset-0 bg-white/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,520px)]">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6 border border-slate-300 px-3 py-1.5 rounded-full" style={{ color: C.navy, fontFamily: "'Barlow',sans-serif" }}>
                <span className="w-4 h-px" style={{ background: C.orange }} /> 35+ Years · ISO 9001:2015 · HACCP
              </div>
              <h1 className="font-black text-slate-900 leading-none mb-5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "clamp(3rem,7vw,5.5rem)" }}>
                PACKAGING THAT PROTECTS<br />AND ELEVATES YOUR<br /><span style={{ color: C.orange }}>BRAND EXPERIENCE</span>
              </h1>
              <p className="text-lg mb-4 font-medium" style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>
                Premium tin packaging built for freshness, design impact, and export-ready quality.
              </p>
              <p className="mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif", fontSize: "1rem" }}>
                Sara Containers transforms tin packaging into a powerful brand touchpoint for food, beverage, industrial, and gift products. Durable metal, custom print, and intelligent sealing keep your products safe and memorable.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                <button onClick={() => navigate("/products")} className="flex items-center gap-2 px-7 py-3.5 font-bold text-white rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer" style={{ background: C.orange, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.1em" }}>
                  EXPLORE PRODUCTS <ArrowRight size={16} />
                </button>
                <button onClick={() => navigate("/contact")} className="flex items-center gap-2 px-7 py-3.5 font-bold rounded-full hover:scale-105 transition-all duration-300 cursor-pointer border" style={{ background: "transparent", color: C.navy, borderColor: C.lightBorder, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.1em" }}>
                  REQUEST QUOTE
                </button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {["Airtight sealing", "Custom CMYK print", "25+ countries export", "100% recyclable metal"].map(text => (
                  <div key={text} className="rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
                    <p className="text-sm font-semibold text-slate-900" style={{ fontFamily: "'Barlow Condensed',sans-serif" }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[520px] hero-media-group">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-orange-200/75 via-white/40 to-slate-100 blur-3xl" />
              <div className="hero-floating-shape hero-floating-shape--circle" />
              <div className="hero-floating-shape hero-floating-shape--diamond" />
              <div className="relative grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(15,23,42,0.16)] hero-image-card" style={{ minHeight: 220 }}>
                    <img src={HERO_MEDIA[0].img} alt={HERO_MEDIA[0].title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="relative overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(15,23,42,0.16)] hero-image-card" style={{ minHeight: 220 }}>
                    <img src={HERO_MEDIA[1].img} alt={HERO_MEDIA[1].title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(15,23,42,0.16)] hero-image-card" style={{ minHeight: 220 }}>
                    <img src={HERO_MEDIA[2].img} alt={HERO_MEDIA[2].title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="relative overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(15,23,42,0.16)] hero-image-card" style={{ minHeight: 220 }}>
                    <img src={HERO_MEDIA[3].img} alt={HERO_MEDIA[3].title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-14 bg-white overflow-hidden" aria-label="Our partners">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <Eyebrow center>Trusted by leading companies worldwide</Eyebrow>
          <SectionTitle center>OUR <span style={{ color: C.orange }}>PARTNERS</span></SectionTitle>
        </div>
        <div className="partners-carousel">
          <div className="partner-logo-track">
            {[0, 1].map((group) => (
              <div className="partner-logo-group" key={group} aria-hidden={group === 1}>
                {TRUSTED_PARTNERS.map((partner) => (
                  <div className="partner-logo-slide" key={`${partner.name}-${group}`}>
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="partner-logo-image"
                      loading="lazy"
                      onError={(event) => {
                        if (event.currentTarget.dataset.fallbackApplied === "true") return;
                        event.currentTarget.dataset.fallbackApplied = "true";
                        event.currentTarget.src = partnerLogoFallback(partner.name);
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20" style={{ background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <Eyebrow>Featured Product Categories</Eyebrow>
              <SectionTitle>PREMIUM TIN CONTAINER<br /><span style={{ color: C.orange }}>SOLUTIONS</span></SectionTitle>
            </div>
            <Btn to="/products" variant="outline">VIEW ALL PRODUCTS <ChevronRight size={14} /></Btn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PRODUCTS.map(p => (
              <div key={p.id} className="border rounded-sm overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col" style={{ borderColor: C.lightBorder, boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                <div className="h-44 overflow-hidden" style={{ background: C.cream }}>
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-xs font-semibold mb-1" style={{ color: C.orange, fontFamily: "'Barlow',sans-serif" }}>Range: {p.range}</div>
                  <h3 className="font-bold mb-1.5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.1rem", color: C.text }}>{p.name}</h3>
                  <p className="text-xs mb-3" style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>Perfect for: {p.perfect}</p>
                  <ul className="text-xs space-y-1 mb-4 flex-1">
                    {p.features.map(f => (
                      <li key={f} className="flex items-start gap-1.5" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                        <CheckCircle2 size={11} className="mt-0.5 flex-shrink-0" style={{ color: C.orange }} />{f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/products" className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 hover:gap-3 hover:text-orange-600" style={{ color: C.orange, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.05em" }}>
                    EXPLORE RANGE <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm" style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>
            Also available: Specialty Food Tins, Paint & Industrial Cans, Decorative & Gift Tins, Food Products (General Line)
          </p>
        </div>
      </section>

      {/* Why Choose Us strip */}
      <section className="py-20" style={{ background: C.cream, boxShadow: "inset 0 2px 8px rgba(0,0,0,0.02), 0 2px 12px rgba(0,0,0,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Eyebrow center>Why Choose Sara Containers</Eyebrow>
            <SectionTitle center>COMPLETE ADVANTAGE</SectionTitle>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Shield size={22} />, title: "Quality & Safety", points: ["Food-safe ISO 9001:2015 tin plates", "HACCP & FSSAI certified production", "Multi-stage quality testing", "99.8% defect-free rate"] },
              { icon: <Package size={22} />, title: "Product Performance", points: ["Airtight triple-seal technology", "100% leak-proof guarantee", "Durability for transport & storage", "Re-closable consumer-friendly closure"] },
              { icon: <Star size={22} />, title: "Brand Enhancement", points: ["Full-color CMYK 2400 dpi printing", "Variable data & Pantone matching", "Matte, Gloss, Embossed finishes", "Custom die-cut shapes available"] },
              { icon: <Leaf size={22} />, title: "Sustainability", points: ["100% recyclable tin material", "Eco-friendly soy-based inks", "<2% manufacturing waste", "500 kW solar power facility"] },
              { icon: <Clock size={22} />, title: "Customer Service", points: ["24-hour response guarantee", "Dedicated project managers", "Free design consultation", "After-sales quality guarantee"] },
              { icon: <Factory size={22} />, title: "Manufacturing Capacity", points: ["50 million units annual capacity", "25,000 sq.mt. facility", "450+ skilled employees", "MOQ from just 5,000 units"] },
            ].map(({ icon, title, points }) => (
              <div key={title} className="bg-white border rounded-sm p-6 hover:shadow-xl hover:scale-102 hover:-translate-y-1 transition-all duration-300" style={{ borderColor: C.lightBorder, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span style={{ color: C.orange }}>{icon}</span>
                  <h3 className="font-bold" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.05rem", color: C.text }}>{title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {points.map(pt => (
                    <li key={pt} className="flex items-start gap-1.5 text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                      <CheckCircle2 size={12} className="mt-0.5 flex-shrink-0" style={{ color: C.orange }} />{pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Btn to="/why-choose-us">SEE FULL COMPARISON <ArrowRight size={14} /></Btn>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20" style={{ background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <Eyebrow>Industry Applications</Eyebrow>
              <SectionTitle>SECTORS <span style={{ color: C.orange }}>WE SERVE</span></SectionTitle>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead>
                <tr style={{ background: C.cream }}>
                  <th className="text-left px-5 py-3 font-semibold text-slate-900" style={{ fontFamily: "'Barlow',sans-serif" }}>Industry</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-900" style={{ fontFamily: "'Barlow',sans-serif" }}>Product Types</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-900" style={{ fontFamily: "'Barlow',sans-serif" }}>Packaging Benefits</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Food & Beverage", "Cookies, biscuits, tea, spices, ghee, pickles, cereals", "Freshness preservation, aroma retention, moisture protection"],
                  ["Commercial Bakeries", "Baked goods, cakes, pastries, desserts", "Crispness maintenance, extended shelf life, premium presentation"],
                  ["Spice Manufacturers", "Ground spices, spice powders, herbal blends", "Aroma-lock technology, flavor preservation, contamination prevention"],
                  ["Tea Companies", "Premium tea leaves, herbal tea, tea powders", "Moisture-proof sealing, aroma retention, gift packaging"],
                  ["Ghee Producers", "Traditional ghee, clarified butter", "Leakage-proof design, long shelf life, cultural packaging"],
                  ["Export Businesses", "Export-quality food products, gourmet items", "International standards compliance, transport durability"],
                  ["Industrial Products", "Paints, solvents, adhesives, lubricants", "Chemical resistance, safety compliance, VOC adherence"],
                  ["Corporate Gifts", "Luxury packaging, promotional items", "Brand enhancement, aesthetic appeal, memorability"],
                  ["Festival & Religious", "Festival gifts, religious offerings, wedding presents", "Traditional design, cultural significance, gift suitability"],
                ].map(([ind, pt, pb], i) => (
                  <tr key={ind} className="border-b" style={{ background: i % 2 === 0 ? "#fff" : C.cream, borderColor: C.lightBorder }}>
                    <td className="px-5 py-3.5 font-semibold" style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>{ind}</td>
                    <td className="px-5 py-3.5" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{pt}</td>
                    <td className="px-5 py-3.5" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{pb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: C.cream, boxShadow: "inset 0 2px 8px rgba(0,0,0,0.02), 0 2px 12px rgba(0,0,0,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Eyebrow center>Customer Success Stories</Eyebrow>
            <SectionTitle center>WHAT OUR CLIENTS <span style={{ color: C.orange }}>SAY</span></SectionTitle>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Thompson", role: "Packaging Manager", company: "SweetDelights Bakery", quote: "The quality is top-notch, and the airtight seals ensure our baked goods stay fresh for weeks. Custom printing helped us create a premium brand image.", result: "40% increase in customer retention, 25% premium pricing capability" },
              { name: "Rajesh Patel", role: "Founder", company: "PureLeaf Teas", quote: "Custom-printed containers elevated our product from standard to premium. Shelf life increased from 6 months to 18 months. Remarkable quality.", result: "60% sales growth in premium segment" },
              { name: "Linda Gonzalez", role: "Operations Head", company: "Global Food Exports Ltd.", quote: "Containers met all international safety standards and survived long-distance shipping. We now export to 15 countries confidently.", result: "Zero damage claims in 2 years" },
              { name: "Amit Sharma", role: "Quality Director", company: "Spice Company", quote: "Sara Containers' aroma-lock technology preserved freshness for over 12 months. Customer complaints reduced by 50% immediately.", result: "50% reduction in product complaints" },
            ].map(({ name, role, company, quote, result }) => (
              <div key={name} className="bg-white border rounded-sm p-5 flex flex-col hover:shadow-lg hover:scale-101 hover:-translate-y-0.5 transition-all duration-300" style={{ borderColor: C.lightBorder, boxShadow: "0 3px 12px rgba(0,0,0,0.05)" }}>
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} size={12} fill={C.orange} style={{ color: C.orange }} />)}</div>
                <p className="text-sm leading-relaxed mb-4 flex-1 italic" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>"{quote}"</p>
                <div className="border-t pt-3" style={{ borderColor: C.lightBorder }}>
                  <div className="font-semibold text-sm" style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>{name}</div>
                  <div className="text-xs mb-2" style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>{role}, {company}</div>
                  <div className="text-xs font-semibold flex items-center gap-1" style={{ color: C.orange, fontFamily: "'Barlow',sans-serif" }}>
                    <CheckCircle2 size={10} /> {result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20" style={{ background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <Eyebrow>Latest Updates</Eyebrow>
              <SectionTitle>COMPANY <span style={{ color: C.orange }}>NEWS</span></SectionTitle>
            </div>
          </div>
          <div className="space-y-0 border rounded-sm overflow-hidden" style={{ borderColor: C.lightBorder }}>
            {NEWS.map((n, i) => (
              <div key={n.title} className="flex flex-col sm:flex-row gap-4 px-6 py-5 border-b last:border-0" style={{ background: i % 2 === 0 ? "#fff" : C.cream, borderColor: C.lightBorder }}>
                <div className="flex-shrink-0 text-xs font-bold w-28" style={{ color: C.orange, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.04em" }}>{n.date}</div>
                <div>
                  <div className="font-semibold mb-1" style={{ color: C.text, fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1rem" }}>{n.title}</div>
                  <div className="text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{n.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: C.cream, boxShadow: "inset 0 2px 8px rgba(0,0,0,0.02), 0 2px 12px rgba(0,0,0,0.04)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-[2rem] bg-white p-12 shadow-[0_28px_120px_rgba(30,41,59,0.08)] border border-slate-200 text-center">
            <Eyebrow center>Ready to Get Started?</Eyebrow>
            <SectionTitle center>LET'S DISCUSS YOUR NEXT<br /><span style={{ color: C.orange }}>PACKAGING PROJECT</span></SectionTitle>
            <p className="mt-5 mb-8 leading-relaxed" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
              Explore our catalogue and share your packaging requirements. Our team will help you choose the right container, finalize printing, confirm quantities, and deliver on time.
            </p>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-3 text-sm mb-10" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
              {["Select the perfect container size and shape", "Design custom printing that enhances your brand", "Calculate optimal quantities for your needs", "Provide competitive pricing quotes", "Ensure timely delivery for your schedule"].map(pt => (
                <li key={pt} className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                  <CheckCircle2 size={12} style={{ color: C.orange }} />{pt}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap justify-center gap-4">
              <Btn to="/contact">REQUEST FREE QUOTE</Btn>
              <Btn to="/products" variant="outline"><span style={{ color: C.navy, borderColor: C.navy }}>DOWNLOAD CATALOGUE</span></Btn>
              <a href="tel:+919944549102" className="flex items-center gap-2 px-6 py-3 text-sm font-semibold border rounded-sm transition-colors" style={{ color: C.navy, borderColor: C.border, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.08em" }}>
                <Phone size={14} /> CALL: +91 99445 49102
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAGE 2 — PRODUCTS
// ═══════════════════════════════════════════════════════════════
const ALL_PRODUCTS = [
  {
    id: "round", name: "Round Tin Containers", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=340&fit=crop&auto=format",
    overview: "Round tin containers are the most versatile and widely used packaging solution in the food industry. Their universal shape makes them suitable for diverse products from cookies to spices, candies to powdered foods.",
    specs: [["Material", "Food-grade tin plate (0.20mm–0.35mm)"], ["Size Range", "Dia: 50mm–300mm, H: 30mm–150mm"], ["Capacity", "50g, 100g, 250g, 500g, 1kg, 2kg, 5kg"], ["Closure", "Airtight snap-lock, screw-top, friction-fit"], ["Print Method", "Offset CMYK, up to 2400 dpi"], ["Finish", "Matte, Gloss, Semi-Gloss, Embossed"], ["Coating", "Food-safe epoxy or polyester"], ["Shelf Life", "Up to 2 years (dry foods)"], ["Temperature", "−20°C to +60°C"]],
    sizes: [["R-50", "50mm", "30mm", "50g", "Sample packs, candies"], ["R-100", "70mm", "40mm", "100g", "Cookies, spices"], ["R-250", "90mm", "55mm", "250g", "Tea, biscuits"], ["R-500", "110mm", "70mm", "500g", "Powdered foods, coffee"], ["R-1000", "140mm", "90mm", "1kg", "Bulk spices, cereals"], ["R-2000", "170mm", "110mm", "2kg", "Large quantities"], ["R-5000", "220mm", "150mm", "5kg", "Industrial bulk"]],
    sizeHeaders: ["Code", "Diameter", "Height", "Capacity", "Best For"],
    apps: ["Cookies and biscuits", "Candies and confectionery", "Ground spices and powders", "Dry fruits and nuts", "Tea and coffee", "Powdered milk and protein supplements", "Breakfast cereals", "Baking ingredients"],
    custom: ["Custom diameter and height", "Full-color logo printing", "Variable data printing", "Transparent window inserts", "Divider trays inside", "Ribbon and handle attachments"],
  },
  {
    id: "rect", name: "Rectangular & Square Tins", img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=500&h=340&fit=crop&auto=format",
    overview: "Rectangular and square tin containers offer space-efficient packaging with premium presentation. Ideal for retail packaging where shelf space optimization and visual appeal are critical.",
    specs: [["Material", "Food-grade tin plate (0.22mm–0.40mm)"], ["Size Range", "60×60mm to 250×200mm"], ["Capacity", "100g, 250g, 500g, 1kg, 2kg, 5kg"], ["Closure", "Hinged lid, snap-lock, friction-fit"], ["Corners", "Reinforced rounded corners"], ["Print Method", "Offset, high-resolution"], ["Finish", "Matte, Gloss, Embossed, Debossed"], ["Edges", "Double-rolled for durability"]],
    sizes: [["RS-100", "60mm", "60mm", "35mm", "100g", "Premium biscuits"], ["RS-250", "80mm", "70mm", "50mm", "250g", "Tea packaging"], ["RS-500", "110mm", "85mm", "65mm", "500g", "Baked goods"], ["RS-1000", "140mm", "110mm", "85mm", "1kg", "Cereals, cookies"], ["RS-2000", "180mm", "140mm", "105mm", "2kg", "Bulk packaging"], ["RS-5000", "250mm", "200mm", "140mm", "5kg", "Industrial use"]],
    sizeHeaders: ["Code", "Length", "Width", "Height", "Capacity", "Best For"],
    apps: ["Biscuits and baked goods", "Premium tea packaging", "Gift packs and corporate gifts", "Specialty food items", "Cake and dessert mixes", "Luxury confectionery"],
    custom: ["Custom length, width, height", "Hinged or removable lid", "Premium embossed brand name", "High-gloss exterior", "Full CMYK print", "Interior foam tray inserts"],
  },
  {
    id: "custom", name: "Custom Printed Tin Containers", img: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=500&h=340&fit=crop&auto=format",
    overview: "Our custom printing service transforms plain tin containers into powerful brand marketing tools. Using advanced offset printing, we deliver vibrant high-resolution graphics consistent across all production runs.",
    specs: [["Process", "CMYK 4-color offset printing"], ["Resolution", "Up to 2400 dpi"], ["Ink Type", "Soy-based eco-friendly"], ["Color Matching", "Pantone certified system"], ["Finishing", "Matte, Gloss, UV coating"], ["Min. Order (1c)", "5,000 units / 15 days"], ["Min. Order (CMYK)", "10,000 units / 20 days"], ["Custom Shape", "25,000 units / 30 days"], ["Variable Data", "10,000 units / 25 days"]],
    sizes: [["1-color", "5,000", "15 days", "Spot print"], ["4-color CMYK", "10,000", "20 days", "Full color"], ["Full custom shape", "25,000", "30 days", "Die-cut"], ["Variable data", "10,000", "25 days", "QR / serial"]],
    sizeHeaders: ["Print Type", "MOQ", "Lead Time", "Notes"],
    apps: ["Brand packaging", "Corporate gifts", "Promotional products", "Limited-edition releases", "Luxury product packaging", "Export branding"],
    custom: ["Free design consultation + 3D mockup", "Brand color matching (Pantone)", "Logo & typography optimization", "QR code integration", "Holographic effects", "Embossing and debossing", "Metallic ink effects"],
  },
  {
    id: "specialty", name: "Specialty Food Tins", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=340&fit=crop&auto=format",
    overview: "Specialty food tins are engineered for products with unique preservation requirements. Advanced sealing and specialized coatings protect against moisture, oxygen, and contamination.",
    specs: [["Closure", "Triple-seal airtight"], ["Oxygen Barrier", "<0.1 cc/m²/day OTR"], ["Moisture Barrier", "0.01 g/m²/day MVTR"], ["UV Protection", "99.9% UV blocking"], ["Coating Options", "Epoxy phenolic, polyester, vinyl"], ["Shelf Life", "Up to 2 years"], ["Tamper-Proof", "Available on request"], ["BRC Certified", "Grade A international"]],
    sizes: [["Moisture-sensitive", "Moisture barrier", "Double-seal + coating"], ["Aromatic products", "Aroma-lock", "Triple-seal"], ["Acidic foods", "Acid resistance", "Epoxy phenolic"], ["Oily products", "Oil resistance", "Polyester interior"], ["Perishable", "Extended shelf life", "Vacuum-seal"], ["Export", "Int'l standards", "BRC certified"]],
    sizeHeaders: ["Product Type", "Required Feature", "Specification"],
    apps: ["Perishable goods", "Moisture-sensitive products", "Aromatic foods and spices", "Export-quality packaging", "Acidic food products", "Long shelf-life requirements"],
    custom: ["Vacuum-seal option", "Oxygen barrier gasket", "Tamper-indicating features", "Custom internal coatings", "Extended shelf-life design", "BRC-certified packaging"],
  },
  {
    id: "ghee", name: "Ghee Containers", img: "https://images.unsplash.com/photo-1631116201895-3cb1c2c8527f?w=500&h=340&fit=crop&auto=format",
    overview: "Traditional ghee packaging requires specialized containers preventing leakage while maintaining cultural appeal. Our ghee containers combine traditional Indian aesthetics with modern leakage-proof technology.",
    specs: [["Material", "Food-grade tin plate (0.30mm)"], ["Capacity Range", "200ml, 500ml, 1L, 2L, 5L"], ["Closure", "Double-seal screw-top with gasket"], ["Leak Protection", "100% (tested 2m drop)"], ["Heat Resistance", "Up to 80°C (hot ghee filling)"], ["Shelf Life", "18 months"], ["Design", "Traditional Indian motifs available"]],
    sizes: [["G-200", "200ml", "180g", "Sample packs, gifts"], ["G-500", "500ml", "450g", "Household use"], ["G-1000", "1L", "900g", "Family size"], ["G-2000", "2L", "1.8kg", "Bulk household"], ["G-5000", "5L", "4.5kg", "Commercial use"]],
    sizeHeaders: ["Code", "Capacity", "Weight (Ghee)", "Use Case"],
    apps: ["Traditional ghee packaging", "Religious offerings", "Festival gifts", "Household storage", "Commercial distribution", "Export ghee products"],
    custom: ["Traditional motifs (lotus, peacock, temple)", "Religious symbols", "Festival designs (Diwali, Eid, Christmas)", "Corporate branding", "Custom text and logo", "Vapor-proof design"],
  },
  {
    id: "tea", name: "Tea & Spice Tins", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=340&fit=crop&auto=format",
    overview: "Preserve the aroma and freshness of tea and spice products with our specially designed tins. Airtight sealing prevents aroma loss and maintains flavor integrity throughout product shelf life.",
    specs: [["Closure", "Aroma-lock triple-seal"], ["Coating", "Flavor preservation interior"], ["UV Resistance", "External UV-resistant finish"], ["Compartments", "Single or multiple"], ["Humidity Control", "Controlled interior barrier"], ["Design Options", "Traditional and modern"], ["Shelf Life", "Up to 18 months (tea/spices)"]],
    sizes: [["T-50", "50g", "Tea samples, premium gifting"], ["T-100", "100g", "Ground spices, small teas"], ["T-250", "250g", "Standard tea, spice blends"], ["T-500", "500g", "Family tea packs"], ["T-1000", "1kg", "Bulk spices"], ["T-2000", "2kg", "Commercial quantities"]],
    sizeHeaders: ["Code", "Capacity", "Best For"],
    apps: ["Premium loose leaf tea", "Ground spices", "Spice blends and masalas", "Herbal and wellness teas", "Aromatic powders", "Export tea packaging"],
    custom: ["Aroma-lock technology", "Flavor preservation coating", "Multi-compartment interior", "Premium gift lid design", "Traditional brass-look finish", "Humidity-sealed interior"],
  },
  {
    id: "cookie", name: "Cookie & Biscuit Cans", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=340&fit=crop&auto=format",
    overview: "India is the largest producer of quality baked goods and demands premium packaging that maintains freshness. Our cookie cans prevent moisture absorption and keep baked goods crisp for extended periods.",
    specs: [["Sealing", "Moisture-proof system"], ["Interior", "Crispness preservation coating"], ["Exterior", "Decorative full-color printing"], ["Closure", "Re-closable mechanism"], ["Window Option", "Transparent window inserts"], ["Gift Pack", "Premium design available"], ["Size Range", "100g to 3kg"]],
    sizes: [["C-100", "100g", "Mini cookie tins, gift samples"], ["C-250", "250g", "Premium biscuits"], ["C-500", "500g", "Standard retail size"], ["C-1000", "1kg", "Family cookie tins"], ["C-2000", "2kg", "Gifting, festive"], ["C-3000", "3kg", "Bulk / wholesale"]],
    sizeHeaders: ["Code", "Capacity", "Best For"],
    apps: ["Gourmet cookies", "Premium biscuits", "Confectionery assortments", "Dessert mixes", "Baking ingredients", "Festival gift packs"],
    custom: ["Moisture-proof double-seal", "Decorative festive designs", "Transparent window option", "Ribbon and bow accessories", "Custom shape (oval, heart)", "Re-closable lid mechanism"],
  },
  {
    id: "food", name: "Food Products Tin (General Line)", img: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=500&h=340&fit=crop&auto=format",
    overview: "When it comes to food packaging, the idea is to design a packaging medium that keeps the product fresh and safe for long duration while being convenient for consumers. Versatile tins for diverse food categories.",
    specs: [["Material", "Universal food-grade tin"], ["Capacity Range", "100g to 10kg"], ["Closure", "Universal closure system"], ["Construction", "Durable for transport"], ["Coating", "Chemical-resistant interior"], ["Suitability", "Dry and semi-solid foods"], ["Standards", "Export-quality, FSSAI"]],
    sizes: [["F-100", "100g", "Namkeen, small snacks"], ["F-500", "500g", "Pickles, spreads"], ["F-1000", "1kg", "Cereals, papads"], ["F-2000", "2kg", "Protein supplements"], ["F-5000", "5kg", "Bulk cereals, industrial"], ["F-10000", "10kg", "Commercial wholesale"]],
    sizeHeaders: ["Code", "Capacity", "Best For"],
    apps: ["Namkeen and snacks", "Pickles and condiments", "Papads", "Breakfast cereals", "Powdered milk", "Protein supplements", "Dry fruits bulk"],
    custom: ["Universal size range", "Chemical-resistant coating", "Export-quality standards", "Custom print and branding", "Durable transport design", "FSSAI certified materials"],
  },
  {
    id: "paint", name: "Paint & Industrial Cans", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=340&fit=crop&auto=format",
    overview: "Industrial product packaging requires containers meeting stringent safety standards with chemical resistance and leak prevention. Our paint cans are engineered for hazardous material storage and transport.",
    specs: [["Chemical Resistance", "pH 2–12 compatible (ISO 1517)"], ["VOC Compliance", "<50 g/L (EPA Certified)"], ["Flame Resistance", "Class A fire rating (UL)"], ["Leak Test", "100% at 2m drop (ASTM D4995)"], ["Corrosion", "500 hours salt spray (ASTM B117)"], ["Capacity", "250ml to 5L"], ["Closure", "Leak-proof security closure"]],
    sizes: [["P-250", "250ml", "Small paints, samples"], ["P-500", "500ml", "Household paints"], ["P-1000", "1L", "Professional use"], ["P-2500", "2.5L", "Commercial projects"], ["P-5000", "5L", "Industrial bulk"]],
    sizeHeaders: ["Code", "Capacity", "Use Case"],
    apps: ["Paints and lacquers", "Solvents", "Shoe polish", "Adhesives", "Lubricants", "Industrial chemicals"],
    custom: ["Chemical-resistant coating", "VOC-compliant design", "Safety warning labels", "Corrosion-resistant exterior", "Flam-resistant construction", "Regulatory compliance"],
  },
  {
    id: "gift", name: "Decorative & Gift Tins", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&h=340&fit=crop&auto=format",
    overview: "We provide a wide range of beautifully made decorative multipurpose cans. Our decorative tins combine aesthetic appeal with practical functionality, perfect for premium gift packaging across festivals and corporate events.",
    specs: [["Print Quality", "Premium CMYK, up to 2400 dpi"], ["Finishes", "Gloss, Matte, Embossed, Foil"], ["Shapes", "Round, rect, heart, custom die-cut"], ["Extras", "Ribbon, handle, bow attachments"], ["Design", "Seasonal and festival themes"], ["Branding", "Full corporate customization"], ["Occasion", "Diwali, Eid, Christmas, weddings"]],
    sizes: [["Gift-S", "150g", "Premium sample, festive"], ["Gift-M", "350g", "Corporate gift box"], ["Gift-L", "700g", "Festival gift set"], ["Gift-XL", "1.5kg", "Luxury hamper tin"], ["Custom", "Any size", "Bespoke corporate orders"]],
    sizeHeaders: ["Code", "Capacity", "Occasion"],
    apps: ["Corporate gifting", "Festival packaging", "Wedding gifts", "Promotional items", "Luxury brand packaging", "Seasonal gift boxes"],
    custom: ["Custom die-cut shapes", "Luxury foil embossing", "Seasonal design artwork", "Ribbon and handle fittings", "Compartmented interiors", "Corporate logo engraving"],
  },
  {
    id: "innovation", name: "Innovation", img: "https://www.silgancontainers.com/wp-content/uploads/2021/12/newproduct-image.png",
    overview: "Structured packaging innovation for food brands, from product positioning and concept development through testing and implementation.",
    specs: [["Step", "Focus"], ["1", "Define Product Positioning"], ["2", "Identify Role of Packaging"], ["3", "Develop Packaging Concepts"], ["4", "Evaluate Concepts"], ["5", "Test Concepts"], ["6", "Initiate Implementation"]],
    sizes: [["1", "Define Product Positioning"], ["2", "Identify Role of Packaging"], ["3", "Develop Packaging Concepts"], ["4", "Evaluate Concepts"], ["5", "Test Concepts"], ["6", "Initiate Implementation"]],
    sizeHeaders: ["Step", "Focus"],
    apps: ["New product development", "Packaging concept innovation", "Brand differentiation", "Market-ready launch support"],
    custom: ["Packaging process consulting", "Concept evaluation", "Prototype testing", "Implementation planning"],
  },
];

function ProductsPage() {
  const [active, setActive] = useState("round");
  const product = ALL_PRODUCTS.find(p => p.id === active)!;

  return (
    <div style={{ background: "#fff" }}>
      <PageHero title={<>COMPLETE PRODUCT CATALOGUE<br /><span style={{ color: C.orange }}>PREMIUM TIN CONTAINER SOLUTIONS</span></>} sub="11 product categories with full technical specifications, size charts, and customization options." breadcrumb="Products" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 mb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: C.orange, fontFamily: "'Barlow',sans-serif" }}>Browse by Category</p>
              <h2 className="font-black text-2xl" style={{ fontFamily: "'Barlow Condensed',sans-serif", color: C.text }}>Product categories for tin packaging</h2>
            </div>
            <div className="w-full max-w-sm">
              <label className="text-xs uppercase tracking-widest mb-2 block" style={{ color: C.textLight, fontFamily: "'Barlow',sans-serif" }}>Select category</label>
              <select value={active} onChange={(e) => setActive(e.target.value)} className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: C.border, fontFamily: "'Inter',sans-serif", color: C.text }}>
                {ALL_PRODUCTS.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {ALL_PRODUCTS.map(p => (
              <button key={p.id} onClick={() => setActive(p.id)} className="rounded-2xl border p-4 text-left transition-all duration-200"
                style={{
                  background: active === p.id ? C.orange : "#fff",
                  color: active === p.id ? "#fff" : C.text,
                  borderColor: active === p.id ? C.orange : C.lightBorder,
                  fontFamily: "'Barlow',sans-serif",
                }}>
                <span className="text-sm font-semibold" style={{ letterSpacing: "0.06em" }}>{p.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product detail */}
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="rounded-sm overflow-hidden border mb-5" style={{ borderColor: C.lightBorder }}>
              <img src={product.img} alt={product.name} className="w-full h-72 object-cover" />
            </div>
            <div className="border rounded-sm p-5" style={{ background: C.cream, borderColor: C.lightBorder }}>
              <h4 className="font-bold mb-3 text-sm" style={{ color: C.text, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.04em" }}>CUSTOMIZATION OPTIONS</h4>
              <ul className="space-y-1.5">
                {product.custom.map(c => (
                  <li key={c} className="flex items-start gap-1.5 text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                    <CheckCircle2 size={12} className="mt-0.5 flex-shrink-0" style={{ color: C.orange }} />{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3">
            <h2 className="font-black mb-3" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.9rem", color: C.text }}>{product.name}</h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{product.overview}</p>

            {product.id === "innovation" ? (
              <>
                <div className="grid gap-4 mb-8 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="font-bold mb-4 text-sm uppercase tracking-widest" style={{ color: C.text, fontFamily: "'Barlow Condensed',sans-serif" }}>Determine Your Goals</h3>
                    <ol className="list-decimal list-inside space-y-3 text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                      <li><strong>Define Product Positioning</strong></li>
                      <li><strong>Identify Role of Packaging</strong></li>
                    </ol>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="font-bold mb-4 text-sm uppercase tracking-widest" style={{ color: C.text, fontFamily: "'Barlow Condensed',sans-serif" }}>Silgan Develops Your Solution</h3>
                    <ol className="list-decimal list-inside space-y-3 text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                      <li><strong>Develop Packaging Concepts</strong></li>
                      <li><strong>Evaluate Concepts</strong></li>
                      <li><strong>Test Concepts</strong></li>
                      <li><strong>Initiate Implementation</strong></li>
                    </ol>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mb-8">
                  {[
                    { step: 1, title: "Define Product Positioning" },
                    { step: 2, title: "Identify Role of Packaging" },
                    { step: 3, title: "Develop Packaging Concepts" },
                    { step: 4, title: "Evaluate Concepts" },
                    { step: 5, title: "Test Concepts" },
                    { step: 6, title: "Initiate Implementation" },
                  ].map(item => (
                    <div key={item.step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-700 font-black" style={{ fontFamily: "'Barlow Condensed',sans-serif" }}>{item.step}</div>
                        <h4 className="text-sm font-semibold" style={{ fontFamily: "'Barlow Condensed',sans-serif", color: C.text }}>{item.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h4 className="font-bold mb-3 text-sm uppercase tracking-wide" style={{ color: C.text, fontFamily: "'Barlow Condensed',sans-serif" }}>Technical Specifications</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse">
                    <tbody>
                      {product.specs.map(([param, spec], i) => (
                        <tr key={param} className="border-b" style={{ background: i % 2 === 0 ? "#fff" : C.cream, borderColor: C.lightBorder }}>
                          <td className="px-4 py-2.5 font-semibold w-44" style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>{param}</td>
                          <td className="px-4 py-2.5" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{spec}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h4 className="font-bold mb-3 text-sm uppercase tracking-wide" style={{ color: C.text, fontFamily: "'Barlow Condensed',sans-serif" }}>Size Chart / Options</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr style={{ background: C.cream }}>
                        {product.sizeHeaders.map(h => (
                          <th key={h} className="px-3 py-2.5 text-left font-semibold text-slate-900 text-xs" style={{ fontFamily: "'Barlow',sans-serif" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {product.sizes.map((row, i) => (
                        <tr key={i} className="border-b" style={{ background: i % 2 === 0 ? "#fff" : C.cream, borderColor: C.lightBorder }}>
                          {row.map((cell, j) => (
                            <td key={j} className="px-3 py-2.5 text-xs" style={{ color: j === 0 ? C.orange : C.textLight, fontFamily: j === 0 ? "'Barlow Condensed',sans-serif" : "'Inter',sans-serif", fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h4 className="font-bold mb-2 text-sm uppercase tracking-wide" style={{ color: C.text, fontFamily: "'Barlow Condensed',sans-serif" }}>Applications</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.apps.map(a => (
                    <span key={a} className="text-xs px-2.5 py-1 border rounded-sm" style={{ color: C.textLight, borderColor: C.lightBorder, background: C.cream, fontFamily: "'Barlow',sans-serif" }}>{a}</span>
                  ))}
                </div>
              </>
            )}

            <Btn to="/contact">REQUEST QUOTE FOR {product.name.toUpperCase()} <ArrowRight size={14} /></Btn>
          </div>
        </div>
      </div>

      {/* MOQ / CTA strip */}
      <div className="py-12 border-t" style={{ background: C.cream, borderColor: C.lightBorder }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-black text-lg mb-1" style={{ fontFamily: "'Barlow Condensed',sans-serif", color: C.text }}>BUSINESS ENQUIRY NOTICE</p>
            <p className="text-sm" style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>Request you to kindly go through the product catalogue and send us the filled format along with your requirement SKU / Design wise for our further action.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Btn to="/contact">REQUEST QUOTE</Btn>
            <Btn to="/contact" variant="navy"><Download size={14} /> DOWNLOAD CATALOGUE</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAGE 3 — ABOUT US
// ═══════════════════════════════════════════════════════════════
const VALUES = [
  { icon: <Shield size={20} />, title: "Quality First", desc: "Every container meets stringent standards. Multi-stage QC processes ensure 99.8% defect-free production." },
  { icon: <Users size={20} />, title: "Customer Focus", desc: "Dedicated support team responds within 24 hours. We deliver tailored solutions for unique requirements." },
  { icon: <Leaf size={20} />, title: "Sustainability", desc: "100% recyclable tin containers and eco-friendly soy-based inks support our environmental commitment." },
  { icon: <Zap size={20} />, title: "Innovation", desc: "Continuous improvement in design, manufacturing processes, and technology keeps us at the forefront." },
  { icon: <CheckCircle2 size={20} />, title: "Integrity", desc: "Transparent practices, honest communication, and fair pricing build long-term relationships." },
  { icon: <Star size={20} />, title: "Excellence", desc: "We strive for excellence in product quality, customer service, and employee development." },
];

function AboutPage() {
  const [activeTab, setActiveTab] = useState("story");
  const tabs = [
    { id: "story", label: "Company Story" },
    { id: "facility", label: "Facility" },
    { id: "team", label: "Leadership" },
    { id: "sustainability", label: "Sustainability" },
    { id: "awards", label: "Awards" },
  ];

  return (
    <div style={{ background: "#fff" }}>
      <PageHero title={<>ABOUT SARA CONTAINERS<br /><span style={{ color: C.orange }}>YOUR TRUSTED PARTNER SINCE 1985</span></>} sub="35+ years of excellence in metal packaging. ISO 9001:2015, HACCP & BRC certified manufacturer based in Madurai, Tamil Nadu." breadcrumb="About Us" />

      {/* Tab nav */}
      <div className="border-b sticky top-16 z-30 bg-white" style={{ borderColor: C.lightBorder }}>
        <div className="max-w-7xl mx-auto px-6 flex gap-0 overflow-x-auto">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              className="px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors"
              style={{ fontFamily: "'Barlow',sans-serif", color: activeTab === t.id ? C.orange : C.muted, borderColor: activeTab === t.id ? C.orange : "transparent" }}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">

        {activeTab === "story" && (
          <div>
            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              <div>
                <Eyebrow>Our Company Story</Eyebrow>
                <SectionTitle>THE YEAR 1985<br /><span style={{ color: C.orange }}>WITNESSED OUR FOUNDING</span></SectionTitle>
                <p className="mt-5 mb-4 leading-relaxed" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                  Sara Containers Pvt Ltd, now one of the leading tin container manufacturing companies in South India, was established in Madurai, Tamil Nadu. With over 35 years of existence, Sara Containers has grown to become an industry leader, providing a wide range of metal packaging solutions to businesses across India and 25+ international markets.
                </p>
                <p className="mb-6 leading-relaxed" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                  Banking on the rich experience of a highly qualified and dedicated team of 450+ employees, Sara Containers is a truly global firm that follows international quality standards. Our Core Promise: Delivering packaging solutions that preserve product quality, enhance brand value, and support sustainability through 100% recyclable tin containers.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <TrendingUp size={18} />, title: "Mission", desc: "Preserve quality, enhance brand value, support sustainability." },
                    { icon: <Globe size={18} />, title: "Vision", desc: "India's most trusted packaging company globally by 2030." },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="border rounded-sm p-4" style={{ borderColor: C.lightBorder, background: C.cream }}>
                      <div className="flex items-center gap-2 mb-2">
                        <span style={{ color: C.orange }}>{icon}</span>
                        <span className="font-bold text-sm" style={{ fontFamily: "'Barlow Condensed',sans-serif", color: C.text }}>{title}</span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Timeline */}
              <div>
                <h3 className="font-bold mb-6 text-sm uppercase tracking-wide" style={{ color: C.muted, fontFamily: "'Barlow',sans-serif" }}>Our Journey</h3>
                <div className="relative">
                  <div className="absolute left-16 top-0 bottom-0 w-px" style={{ background: C.lightBorder }} />
                  {[
                    { year: "1985", title: "Foundation", desc: "Established in Madurai, Tamil Nadu with a 2,000 sq.mt. facility focusing on round tin containers." },
                    { year: "1995", title: "Expansion", desc: "Grew to 10,000 sq.mt., added rectangular tin production, expanded across Tamil Nadu." },
                    { year: "2005", title: "Technology Upgrade", desc: "Invested in automated printing machinery, achieved ISO 9001 certification, began Southeast Asia exports." },
                    { year: "2015", title: "National Reach", desc: "20,000 sq.mt. facility, 300+ staff, distribution network across all Indian states established." },
                    { year: "2020", title: "International Growth", desc: "Achieved HACCP and BRC certifications, expanded export to Middle East and Europe, reached 400+ employees." },
                    { year: "2025", title: "Market Leadership", desc: "25,000 sq.mt. facility, 50M units/year capacity, 25+ countries, 450+ team members." },
                  ].map((t, i, arr) => (
                    <div key={t.year} className="flex gap-6 items-start pb-7 last:pb-0">
                      <div className="flex-shrink-0 w-14 text-right font-black" style={{ color: C.orange, fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.05rem" }}>{t.year}</div>
                      <div className="w-2.5 h-2.5 rounded-full border-2 mt-1.5 flex-shrink-0 relative z-10" style={{ borderColor: C.orange, background: i === arr.length - 1 ? C.orange : "#fff" }} />
                      <div>
                        <div className="font-bold mb-0.5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1rem", color: C.text }}>{t.title}</div>
                        <div className="text-sm leading-relaxed" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{t.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core values */}
            <div>
              <Eyebrow>Core Values</Eyebrow>
              <SectionTitle>WHAT DRIVES <span style={{ color: C.orange }}>US EVERY DAY</span></SectionTitle>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {VALUES.map(({ icon, title, desc }) => (
                  <div key={title} className="border rounded-sm p-5 hover:border-orange-200 transition-colors" style={{ borderColor: C.lightBorder }}>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span style={{ color: C.orange }}>{icon}</span>
                      <h4 className="font-bold" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1rem", color: C.text }}>{title}</h4>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission breakdown */}
            <div className="mt-14 border rounded-sm p-8" style={{ background: C.cream, borderColor: C.lightBorder }}>
              <Eyebrow>Our Mission</Eyebrow>
              <p className="text-sm mb-4" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>To provide premium tin container packaging solutions that:</p>
              <ul className="space-y-2">
                {[
                  ["Preserve Product Quality", "Extend shelf life and maintain freshness through advanced sealing technology"],
                  ["Enhance Brand Value", "Deliver custom printing and design that elevates brand perception"],
                  ["Support Sustainability", "Provide 100% recyclable packaging that supports environmental goals"],
                  ["Ensure Safety", "Meet international food safety and quality standards consistently"],
                  ["Drive Innovation", "Continuously improve manufacturing processes and product designs"],
                ].map(([bold, rest]) => (
                  <li key={bold} className="flex items-start gap-2 text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                    <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: C.orange }} />
                    <span><strong style={{ color: C.text }}>{bold}</strong> – {rest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "facility" && (
          <div>
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <Eyebrow>Manufacturing Facility</Eyebrow>
                <SectionTitle>STATE-OF-THE-ART<br /><span style={{ color: C.orange }}>INFRASTRUCTURE</span></SectionTitle>
                <p className="mt-4 mb-6 text-sm leading-relaxed" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                  Our 25,000 square meter manufacturing facility in Madurai, Tamil Nadu is equipped with the latest automated machinery, IoT-enabled production monitoring, and AI-powered quality inspection systems.
                </p>
                <div className="space-y-3">
                  {[
                    ["Facility Size", "25,000 Square Meters"],
                    ["Location", "Madurai, Tamil Nadu (South India)"],
                    ["Power", "2 MW captive plant + government supply"],
                    ["Water", "500 m³/day treated water facility"],
                    ["Storage", "5,000 m² warehousing capacity"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between items-center py-2.5 border-b" style={{ borderColor: C.lightBorder }}>
                      <span className="font-semibold text-sm" style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>{k}</span>
                      <span className="text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-sm overflow-hidden border" style={{ borderColor: C.lightBorder }}>
                <img src="https://images.unsplash.com/photo-1565793979392-34b5ae16f3e8?w=700&h=480&fit=crop&auto=format" alt="Manufacturing facility" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Equipment table */}
            <h3 className="font-bold mb-4" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.3rem", color: C.text }}>PRODUCTION EQUIPMENT</h3>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: C.navy }}>
                    {["Equipment", "Quantity", "Daily Capacity"].map(h => <th key={h} className="px-5 py-3 text-left text-white/70 font-semibold text-xs" style={{ fontFamily: "'Barlow',sans-serif" }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Automatic Forming Machines", "12 units", "20,000 units/day"],
                    ["Offset Printing Machines", "6 units", "15,000 units/day"],
                    ["Sealing Machines", "15 units", "25,000 units/day"],
                    ["Quality Testing Equipment", "20 units", "Real-time testing"],
                    ["Material Handling Systems", "8 units", "Automated logistics"],
                  ].map(([eq, qty, cap], i) => (
                    <tr key={eq} className="border-b" style={{ background: i % 2 === 0 ? "#fff" : C.cream, borderColor: C.lightBorder }}>
                      <td className="px-5 py-3 font-medium" style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>{eq}</td>
                      <td className="px-5 py-3" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{qty}</td>
                      <td className="px-5 py-3" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{cap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-bold mb-4" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.3rem", color: C.text }}>TECHNOLOGY INVESTMENT</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "₹50 Crores", sub: "Automated printing equipment (2025)", icon: <BarChart2 size={18} /> },
                { label: "IoT-Enabled", sub: "Production monitoring systems", icon: <Zap size={18} /> },
                { label: "AI-Powered", sub: "Quality inspection cameras", icon: <Shield size={18} /> },
                { label: "Robotics", sub: "Material handling automation (2024)", icon: <RefreshCw size={18} /> },
                { label: "500 kW Solar", sub: "Renewable energy capacity (2023)", icon: <Leaf size={18} /> },
                { label: "Zero Liquid", sub: "Discharge policy achieved", icon: <Globe size={18} /> },
              ].map(({ label, sub, icon }) => (
                <div key={label} className="border rounded-sm p-5 flex items-start gap-3" style={{ borderColor: C.lightBorder, background: C.cream }}>
                  <span style={{ color: C.orange }}>{icon}</span>
                  <div>
                    <div className="font-black" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.1rem", color: C.text }}>{label}</div>
                    <div className="text-xs" style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h3 className="font-bold mb-6" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.3rem", color: C.text }}>QUALITY CERTIFICATIONS</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { cert: "ISO 9001:2015", body: "Certified by BSI Group", desc: "International Quality Management Standard – validates consistent quality processes" },
                  { cert: "HACCP Certified", body: "Certified by TCL", desc: "Food Safety Management System – ensures food safety throughout production" },
                  { cert: "ISO 14001:2015", body: "Certified by BSI", desc: "Environmental Management System – demonstrates environmental responsibility" },
                  { cert: "BRC Global Standards", body: "Grade A", desc: "British Retail Consortium Certification – meets UK and EU retail requirements" },
                  { cert: "FDA Approved", body: "Registered Facility", desc: "US Food and Drug Administration Compliance – qualifies for US exports" },
                  { cert: "FSSAI Compliant", body: "License Certified", desc: "Indian Food Safety Standards – meets all Indian regulatory requirements" },
                ].map(({ cert, body, desc }) => (
                  <div key={cert} className="border rounded-sm p-4" style={{ borderColor: C.lightBorder }}>
                    <div className="flex items-start gap-2 mb-1.5">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: C.orange }} />
                      <div>
                        <div className="font-bold text-sm" style={{ fontFamily: "'Barlow Condensed',sans-serif", color: C.text }}>{cert}</div>
                        <div className="text-xs font-semibold" style={{ color: C.orange, fontFamily: "'Barlow',sans-serif" }}>{body}</div>
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed pl-6" style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality testing */}
            <div className="mt-12 border rounded-sm p-8" style={{ background: C.cream, borderColor: C.lightBorder }}>
              <h3 className="font-bold mb-6" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.3rem", color: C.text }}>QUALITY TESTING PROCESSES</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-sm" style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>Multi-Stage Testing:</h4>
                  <ol className="space-y-2">
                    {["Raw Material Inspection – Tin plate thickness, coating quality verification", "In-Process Testing – Dimensional accuracy, sealing integrity checks", "Final Product Testing – Leak tests, drop tests, visual inspection", "Packaging Inspection – Label accuracy, box integrity verification"].map((s, i) => (
                      <li key={i} className="flex gap-2 text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                        <span className="font-bold flex-shrink-0" style={{ color: C.orange, fontFamily: "'Barlow Condensed',sans-serif" }}>{i + 1}.</span>{s}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-sm" style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>Quality Metrics:</h4>
                  <div className="space-y-2">
                    {[["99.8%", "Defect-free production rate (BSI audited 2025)"], ["100%", "Leak-proof guarantee (ASTM D4995)"], ["<0.2%", "Customer complaint rate (2020–2025)"], ["Zero", "Safety incidents in 5 years"]].map(([v, l]) => (
                      <div key={v} className="flex items-center gap-3">
                        <span className="font-black w-16 text-right" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.1rem", color: C.orange }}>{v}</span>
                        <span className="text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "team" && (
          <div>
            <Eyebrow>Our Leadership</Eyebrow>
            <SectionTitle>THE TEAM BEHIND <span style={{ color: C.orange }}>OUR SUCCESS</span></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 mt-8 mb-14">
              {[
                { role: "Managing Director", exp: "40+ years in metal packaging", pts: ["Former executive at major international packaging company", "Expert in quality management and international standards", "Visionary driving company growth and innovation"], img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&auto=format" },
                { role: "Technical Director", exp: "Packaging engineer, 35+ years", pts: ["PhD in Materials Science from IIT", "Specialist in sealing technology and coating systems", "Developed 15+ patented container designs"], img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format" },
                { role: "Operations Director", exp: "Manufacturing expert, 30+ years", pts: ["MBA in Operations Management", "Implemented lean manufacturing reducing costs by 25%", "Expanded production capacity 5× in 10 years"], img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&auto=format" },
                { role: "Sales & Marketing Director", exp: "Business development, 28+ years", pts: ["Built export network across 25+ countries", "Expert in brand positioning and custom printing", "Generated ₹500 crores+ cumulative sales"], img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&auto=format" },
              ].map(({ role, exp, pts, img }) => (
                <div key={role} className="border rounded-sm overflow-hidden flex flex-col sm:flex-row" style={{ borderColor: C.lightBorder }}>
                  <div className="w-full sm:w-32 h-44 sm:h-auto flex-shrink-0 overflow-hidden" style={{ background: C.cream }}>
                    <img src={img} alt={role} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="font-black mb-0.5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.1rem", color: C.text }}>{role}</div>
                    <div className="text-xs font-semibold mb-3" style={{ color: C.orange, fontFamily: "'Barlow',sans-serif" }}>{exp}</div>
                    <ul className="space-y-1.5">
                      {pts.map(pt => <li key={pt} className="flex items-start gap-1.5 text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}><span style={{ color: C.orange }}>–</span>{pt}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="border rounded-sm p-8" style={{ background: C.cream, borderColor: C.lightBorder }}>
              <h3 className="font-bold mb-6" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.3rem", color: C.text }}>WORKFORCE: 450+ EMPLOYEES</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                {[["45", "Management"], ["85", "Engineering & Technical"], ["280", "Production Staff"], ["35", "Quality Team"], ["35", "Sales & Support"]].map(([n, l]) => (
                  <div key={l} className="text-center py-4 border rounded-sm bg-white" style={{ borderColor: C.lightBorder }}>
                    <div className="font-black" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.8rem", color: C.orange }}>{n}</div>
                    <div className="text-xs" style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>{l}</div>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-sm" style={{ fontFamily: "'Barlow',sans-serif", color: C.text }}>Employee Development:</h4>
                  <ul className="space-y-1.5 text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                    {["Annual training programs (50 hours/employee)", "Skill development certifications", "Leadership development programs", "Safety training (mandatory for all)"].map(pt => <li key={pt} className="flex gap-1.5"><CheckCircle2 size={12} className="mt-0.5 flex-shrink-0" style={{ color: C.orange }} />{pt}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm" style={{ fontFamily: "'Barlow',sans-serif", color: C.text }}>Work Culture:</h4>
                  <ul className="space-y-1.5 text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                    {["Safe working environment (zero accidents 5 years)", "Competitive compensation and benefits", "Career growth opportunities", "Employee wellness programs"].map(pt => <li key={pt} className="flex gap-1.5"><CheckCircle2 size={12} className="mt-0.5 flex-shrink-0" style={{ color: C.orange }} />{pt}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "sustainability" && (
          <div>
            <Eyebrow>Our Sustainability Initiatives</Eyebrow>
            <SectionTitle>ENVIRONMENTAL <span style={{ color: C.orange }}>COMMITMENT</span></SectionTitle>
            <p className="mt-4 mb-10 max-w-2xl text-sm leading-relaxed" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
              Sara Containers is committed to environmental responsibility. Our operations integrate sustainable practices across manufacturing, packaging, energy, and water management.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {[
                { icon: <RefreshCw size={22} />, title: "100% Recyclable Products", body: "All tin containers made from recyclable tin plate. Tin recycling exceeds 90% globally, supporting circular economy principles." },
                { icon: <Leaf size={22} />, title: "Eco-Friendly Printing", body: "Soy-based and water-based inks reduce VOC emissions by 85% vs. traditional solvents. Non-toxic and biodegradable." },
                { icon: <Package size={22} />, title: "Waste Reduction", body: "Lean manufacturing processes minimize material waste to <2%. Scrap tin is 100% recycled and reused in production." },
                { icon: <Zap size={22} />, title: "Energy Efficiency", body: "500 kW solar power installation reduces carbon footprint by 800 tons/year. Energy-efficient motors cut power use by 20%." },
                { icon: <Globe size={22} />, title: "Water Conservation", body: "60% water reuse through treated recycling system. Rainwater harvesting (200,000 liters). Zero liquid discharge policy." },
                { icon: <Award size={22} />, title: "Canvironment Week", body: "Active participant in the global United Metal Can Sustainability Movement, promoting tin recycling and environmental awareness." },
              ].map(({ icon, title, body }) => (
                <div key={title} className="border rounded-sm p-6" style={{ borderColor: C.lightBorder }}>
                  <span className="block mb-3" style={{ color: C.orange }}>{icon}</span>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.05rem", color: C.text }}>{title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{body}</p>
                </div>
              ))}
            </div>
            <div className="border-l-4 pl-6 py-2" style={{ borderColor: C.orange }}>
              <p className="text-sm leading-relaxed" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                <strong style={{ color: C.text }}>Canvironment Week</strong> is a unique worldwide initiative that aims not just at educating but taking action as well. For the first time ever, Can makers and Brand owners across the world are coming together to Create a United Global Metal Can Sustainability Movement. Sara Containers actively participates, promoting tin recycling and environmental awareness among our customers and communities.
              </p>
            </div>
          </div>
        )}

        {activeTab === "awards" && (
          <div>
            <Eyebrow>Recognition</Eyebrow>
            <SectionTitle>AWARDS & <span style={{ color: C.orange }}>ACHIEVEMENTS</span></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5 mt-8 mb-12">
              {[
                { year: "2025", award: "Best Packaging Manufacturer – South India", by: "Tamil Nadu Packaging Association", desc: "Recognized for outstanding quality, innovation, and customer service across South India." },
                { year: "2024", award: "Excellence in Export Achievement", by: "Ministry of Commerce, Government of India", desc: "Recognized for export growth and expansion to 25+ countries." },
                { year: "2023", award: "Quality Innovation Award", by: "Indian Packaging Industry Council", desc: "Recognized for sealing technology innovations and product design advancements." },
                { year: "2022", award: "Sustainability Leader Award", by: "Green Business Certification", desc: "Recognized for environmental initiatives including solar power and zero liquid discharge." },
                { year: "2021", award: "Customer Service Excellence", by: "National Quality Board", desc: "Recognized for 96% customer satisfaction and 24-hour response guarantee." },
              ].map(({ year, award, by, desc }) => (
                <div key={year + award} className="border rounded-sm p-5 flex gap-4" style={{ borderColor: C.lightBorder }}>
                  <div className="flex-shrink-0 w-14 h-14 rounded-sm flex items-center justify-center" style={{ background: C.cream }}>
                    <Award size={22} style={{ color: C.orange }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold mb-0.5" style={{ color: C.orange, fontFamily: "'Barlow',sans-serif" }}>{year}</div>
                    <div className="font-bold mb-0.5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1rem", color: C.text }}>{award}</div>
                    <div className="text-xs font-semibold mb-1.5" style={{ color: C.muted, fontFamily: "'Barlow',sans-serif" }}>By: {by}</div>
                    <p className="text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Market coverage */}
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-bold mb-4" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.3rem", color: C.text }}>DOMESTIC MARKET COVERAGE</h3>
                <p className="text-sm mb-4" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>All 28 Indian states • 150+ distribution partners</p>
                <div className="space-y-2">
                  {[["Tamil Nadu", "25 partners"], ["Maharashtra", "18 partners"], ["Karnataka", "15 partners"], ["Gujarat", "12 partners"], ["Delhi NCR", "10 partners"], ["Other States", "80 partners"]].map(([s, n]) => (
                    <div key={s} className="flex justify-between py-2 border-b text-sm" style={{ borderColor: C.lightBorder }}>
                      <span style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>{s}</span>
                      <span style={{ color: C.orange, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700 }}>{n}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.3rem", color: C.text }}>INTERNATIONAL MARKETS</h3>
                <p className="text-sm mb-4" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>25+ countries across 6 continents</p>
                <div className="space-y-2">
                  {[["Middle East", "UAE, Saudi Arabia, Qatar"], ["Southeast Asia", "Singapore, Malaysia, Thailand"], ["Europe", "UK, Germany, Netherlands"], ["Africa", "Kenya, Nigeria, South Africa"], ["North America", "USA, Canada"]].map(([region, countries]) => (
                    <div key={region} className="flex justify-between py-2 border-b text-sm" style={{ borderColor: C.lightBorder }}>
                      <span style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>{region}</span>
                      <span style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>{countries}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAGE 4 — WHY CHOOSE US
// ═══════════════════════════════════════════════════════════════
function WhyChooseUsPage() {
  return (
    <div style={{ background: "#fff" }}>
      <PageHero title={<>THE SARA CONTAINERS ADVANTAGE<br /><span style={{ color: C.orange }}>WHY 2,000+ COMPANIES TRUST US</span></>} sub="Comprehensive comparison, detailed advantage breakdown, and proven performance metrics." breadcrumb="Why Choose Us" />

      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Comparison table */}
        <section className="mb-16">
          <Eyebrow>Competitive Comparison</Eyebrow>
          <SectionTitle>SARA CONTAINERS VS <span style={{ color: C.orange }}>INDUSTRY AVERAGE</span></SectionTitle>
          <div className="overflow-x-auto mt-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] rounded-3xl">
            <table className="w-full text-sm border-collapse min-w-[700px] bg-white">
              <thead>
                <tr style={{ background: C.cream }}>
                  <th className="px-5 py-3.5 text-left font-semibold text-slate-900" style={{ fontFamily: "'Barlow',sans-serif" }}>Benefit Category</th>
                  <th className="px-5 py-3.5 text-center font-bold" style={{ color: C.orange, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.05em" }}>SARA CONTAINERS</th>
                  <th className="px-5 py-3.5 text-center font-semibold text-slate-500" style={{ fontFamily: "'Barlow',sans-serif" }}>Typical Competitor</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-slate-500" style={{ fontFamily: "'Barlow',sans-serif" }}>Customer Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Quality Certification", "ISO 9001, HACCP, BRC, FDA", "Usually 1–2 certifications", "International market access"],
                  ["Defect Rate", "0.2% (99.8% defect-free)", "2–5%", "Reduced waste, better ROI"],
                  ["Leak Proof", "100% guaranteed (2m drop tested)", "90–95%", "Zero product loss"],
                  ["Shelf Life", "Up to 2 years", "6–12 months", "Extended product viability"],
                  ["Printing Quality", "2400 dpi, CMYK full-color", "1200 dpi, limited colors", "Premium brand appearance"],
                  ["MOQ", "5,000 units (flexible)", "25,000+ units", "Suitable for small businesses"],
                  ["Lead Time", "15–20 days standard", "30–45 days", "Faster market entry"],
                  ["Custom Design", "Free consultation + 3D mockup", "Additional charges", "Cost savings"],
                  ["Export Experience", "25+ countries, 10+ years", "Limited or none", "Global market access"],
                  ["Customer Support", "24-hour response, dedicated team", "3–5 day response", "Quick resolution"],
                  ["After-Sales", "Quality guarantee + replacement", "Limited support", "Risk protection"],
                  ["Price", "15–20% below premium brands", "Variable", "Better value"],
                ].map(([cat, sara, comp, impact], i) => (
                  <tr key={cat} className="border-b" style={{ background: i % 2 === 0 ? "#fff" : C.cream, borderColor: C.lightBorder }}>
                    <td className="px-5 py-3.5 font-semibold" style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>{cat}</td>
                    <td className="px-5 py-3.5 text-center font-semibold" style={{ color: C.orange, fontFamily: "'Barlow Condensed',sans-serif" }}>{sara}</td>
                    <td className="px-5 py-3.5 text-center" style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>{comp}</td>
                    <td className="px-5 py-3.5" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 7 advantage categories */}
        <section className="mb-16">
          <Eyebrow>Detailed Breakdown</Eyebrow>
          <SectionTitle>7 CATEGORIES OF <span style={{ color: C.orange }}>ADVANTAGE</span></SectionTitle>
          <div className="mt-8 space-y-6">
            {[
              { icon: <Shield size={20} />, title: "1. Quality & Safety Advantages", items: [["ISO 9001:2015 Certified", "International QMS standard by BSI Group. Consistent processes and outcomes."], ["HACCP Food Safety Certified", "Hazard Analysis Critical Control Points by TCL. Food safety throughout production."], ["99.8% Defect-Free Production", "Multi-stage QC achieves industry-leading rates vs. typical 2–5%."], ["100% Food-Grade Materials", "All tin plates meet FSSAI and FDA standards. Internal coatings non-toxic."], ["Third-Party Quality Audits", "Regular audits by BRC, ISO, and customer quality teams."]] },
              { icon: <Package size={20} />, title: "2. Product Performance Advantages", items: [["Airtight Sealing Technology", "Triple-seal closure prevents moisture and oxygen ingress. Shelf life up to 2 years."], ["100% Leak-Proof Guarantee", "Double-seal with gasket. Drop-tested to 2m height with zero leakage."], ["Moisture Protection", "MVTR: 0.01 g/m²/day (industry best: <0.05 g/m²/day)."], ["Oxygen Barrier", "OTR: <0.1 cc/m²/day prevents oxidation and spoilage."], ["UV & Temperature Resistance", "99.9% UV blocking. Range −20°C to +60°C."]] },
              { icon: <Star size={20} />, title: "3. Brand Enhancement Advantages", items: [["2400 dpi High-Resolution", "Industry-leading print vs. typical 1200 dpi. Photorealistic graphics."], ["Full CMYK Color Process", "4-color enables unlimited combinations."], ["Pantone Color Matching", "Certified accuracy. No batch variation."], ["Custom Shape Manufacturing", "Over 50 custom die-cut designs developed."], ["Variable Data Printing", "Serial numbers, QR codes for traceability."]] },
              { icon: <Leaf size={20} />, title: "4. Sustainability Advantages", items: [["100% Recyclable Material", "Tin recycling >90% globally. Supports circular economy and ESG."], ["Eco-Friendly Inks", "Soy-based inks reduce VOC by 85%. Non-toxic and biodegradable."], ["Waste Reduction Program", "<2% material waste. Scrap tin 100% recycled."], ["Carbon Footprint", "500 kW solar reduces emissions by 800 tons/year."], ["Zero Liquid Discharge", "Water recycling and rainwater harvesting."]] },
              { icon: <Clock size={20} />, title: "5. Customer Service Advantages", items: [["24-Hour Response Time", "Dedicated support responds within 24 hours vs. industry 3–5 days."], ["Dedicated Project Managers", "Each client assigned a personal project manager."], ["Free Design Consultation", "No-cost consultation with 3D mockup before production."], ["Technical Support Team", "Engineering team for custom design and problem-solving."], ["After-Sales Guarantee", "Quality guarantee with replacement policy for defective products."]] },
              { icon: <Factory size={20} />, title: "6. Manufacturing Capacity Advantages", items: [["50 Million Units / Year", "Large-scale production without quality compromise."], ["25,000 Sq.mt. Infrastructure", "State-of-the-art IoT-enabled facility."], ["450+ Skilled Employees", "Average 8 years experience in metal packaging."], ["15–20 Day Lead Time", "Standard production vs. industry 30–45 days."], ["Scalable Operations", "Orders from 5,000 to 5 million units."]] },
              { icon: <TrendingUp size={20} />, title: "7. Cost Advantages", items: [["15–20% Below Premium Brands", "Competitive pricing without quality compromise."], ["No Hidden Charges", "Transparent pricing. No surprise fees."], ["Bulk Order Discounts", "Volume pricing for orders above 50,000 units."], ["Payment Flexibility", "Export financing and credit terms for qualified clients."], ["Lower Total Cost", "Reduced defect rates and zero leakage lower actual cost of ownership."]] },
            ].map(({ icon, title, items }) => (
              <div key={title} className="border rounded-sm overflow-hidden" style={{ borderColor: C.lightBorder }}>
                <div className="flex items-center gap-3 px-6 py-4 border-b" style={{ background: C.cream, borderColor: C.lightBorder }}>
                  <span style={{ color: C.orange }}>{icon}</span>
                  <h3 className="font-bold" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.1rem", color: C.text }}>{title}</h3>
                </div>
                <div className="divide-y divide-black/5">
                  {items.map(([bold, rest]) => (
                    <div key={bold} className="px-6 py-3.5 flex items-start gap-3">
                      <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: C.orange }} />
                      <p className="text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                        <strong style={{ color: C.text }}>{bold}</strong> – {rest}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Satisfaction metrics */}
        <section className="mb-16">
          <Eyebrow>Metrics</Eyebrow>
          <SectionTitle>CUSTOMER SATISFACTION <span style={{ color: C.orange }}>SCORECARD</span></SectionTitle>
          <div className="overflow-x-auto mt-8">
            <table className="w-full text-sm border-collapse min-w-[500px]">
              <thead>
                <tr style={{ background: C.cream }}>
                  <th className="px-5 py-3.5 text-left font-semibold text-slate-900" style={{ fontFamily: "'Barlow',sans-serif" }}>Metric</th>
                  <th className="px-5 py-3.5 text-center font-bold" style={{ color: C.orange, fontFamily: "'Barlow Condensed',sans-serif" }}>Sara Containers</th>
                  <th className="px-5 py-3.5 text-center font-semibold text-slate-500" style={{ fontFamily: "'Barlow',sans-serif" }}>Industry Average</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Customer Satisfaction Score", "96%", "78%"],
                  ["On-Time Delivery Rate", "98%", "85%"],
                  ["First-Time Quality Rate", "99.8%", "95%"],
                  ["Customer Retention Rate", "94%", "72%"],
                  ["Response Time", "<24 hours", "3–5 days"],
                  ["Complaint Resolution", "<48 hours", "5–7 days"],
                  ["Net Promoter Score", "72", "45"],
                ].map(([metric, sara, avg], i) => (
                  <tr key={metric} className="border-b" style={{ background: i % 2 === 0 ? "#fff" : C.cream, borderColor: C.lightBorder }}>
                    <td className="px-5 py-3.5 font-medium" style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>{metric}</td>
                    <td className="px-5 py-3.5 text-center font-bold" style={{ color: C.orange, fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1rem" }}>{sara}</td>
                    <td className="px-5 py-3.5 text-center" style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>{avg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Client stats + risk-free */}
        <section className="mb-14 grid md:grid-cols-2 gap-8">
          <div className="border rounded-sm p-6" style={{ background: C.cream, borderColor: C.lightBorder }}>
            <h3 className="font-bold mb-4" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.2rem", color: C.text }}>CLIENT PORTFOLIO</h3>
            <div className="space-y-3">
              {[["Food Industry", "1,200+ companies"], ["Industrial Sector", "500+ companies"], ["Export Businesses", "180+ companies"], ["Corporate Clients", "120+ companies"]].map(([s, n]) => (
                <div key={s} className="flex justify-between py-2.5 border-b text-sm" style={{ borderColor: C.lightBorder }}>
                  <span style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>{s}</span>
                  <span className="font-bold" style={{ color: C.orange, fontFamily: "'Barlow Condensed',sans-serif" }}>{n}</span>
                </div>
              ))}
              <div className="pt-2 grid grid-cols-3 gap-3 text-center">
                {[["6.5 yrs", "Avg. Relationship"], ["94%", "Retention Rate"], ["89%", "Repeat Orders"]].map(([v, l]) => (
                  <div key={l}>
                    <div className="font-black" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.3rem", color: C.orange }}>{v}</div>
                    <div className="text-xs" style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border rounded-sm p-6" style={{ borderColor: C.lightBorder }}>
            <h3 className="font-bold mb-4" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.2rem", color: C.text }}>RISK-FREE PARTNERSHIP</h3>
            <p className="text-sm mb-4" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>Our Commitment to You:</p>
            <ul className="space-y-2.5">
              {[
                ["Quality Guarantee", "100% satisfaction or full replacement"],
                ["On-Time Delivery", "Penalty for delayed deliveries"],
                ["Price Protection", "No hidden charges, transparent pricing"],
                ["Technical Support", "Free consultation and design assistance"],
                ["After-Sales Service", "Dedicated support team available"],
                ["Confidentiality", "Your designs and branding protected"],
              ].map(([bold, rest]) => (
                <li key={bold} className="flex items-start gap-2 text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                  <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: C.orange }} />
                  <span><strong style={{ color: C.text }}>{bold}</strong> – {rest}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="text-center py-10 border rounded-sm shadow-[0_18px_80px_rgba(30,41,59,0.06)]" style={{ background: C.cream, borderColor: C.lightBorder }}>
          <p className="text-slate-900 font-black text-2xl mb-3" style={{ fontFamily: "'Barlow Condensed',sans-serif" }}>START YOUR PROJECT TODAY</p>
          <p className="text-slate-700 text-sm mb-6" style={{ fontFamily: "'Inter',sans-serif" }}>Join 2,000+ companies that trust Sara Containers for premium tin packaging solutions.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Btn to="/contact">REQUEST QUOTE <ArrowRight size={14} /></Btn>
            <a href="tel:+919944549102" className="flex items-center gap-2 px-6 py-3 text-sm font-semibold border rounded-sm" style={{ color: C.text, borderColor: C.border, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.08em" }}>
              <Phone size={14} /> +91 99445 49102
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAGE 5 — CONTACT
// ═══════════════════════════════════════════════════════════════
function ContactPage() {
  const [form, setForm] = useState({ company: "", type: "", gst: "", industry: "", name: "", designation: "", phone: "", email: "", address: "", product: "", size: "", qty: "", sku: "", design: "", printing: "", colors: "", logo: "", special: "", timeline: "", destination: "", current: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);
  const u = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });

  return (
    <div style={{ background: "#fff" }}>
      <PageHero title={<>GET IN TOUCH<br /><span style={{ color: C.orange }}>LET'S START YOUR PACKAGING PROJECT</span></>} sub="Our team responds within 24 hours. Fill out the RFQ form or reach us directly." breadcrumb="Contact" />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {/* Info panel */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="font-black mb-5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.2rem", color: C.text }}>SARA CONTAINERS PVT LTD</h3>
              <p className="text-sm mb-5" style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>Premium Tin Container Manufacturer & Supplier</p>
            </div>
            {[
              { icon: <MapPin size={18} />, title: "Factory Address", lines: ["Survey No 50/1A2, Rajapalayam Road,", "T.Pudupatti, Thirumangalam (Taluk),", "Madurai – 625704, Tamil Nadu, India", "Landmark: Near Thirumangalam Bus Stand"] },
              { icon: <Phone size={18} />, title: "Phone Numbers", lines: ["+91 99445 49102 (Main Office)", "+91 99445 42221 (Sales Dept.)", "+91 99442 20251 (Customer Support)", "+91 95433 35261 (Export Division)"] },
              { icon: <Mail size={18} />, title: "Email Addresses", lines: ["saracontainers@gmail.com (General)", "sales@saracontainers.com (Sales)", "export@saracontainers.com (Export)", "support@saracontainers.com (Support)"] },
              { icon: <Clock size={18} />, title: "Office Hours", lines: ["Monday – Saturday: 9:00 AM – 6:00 PM IST", "Sunday: Closed", "WhatsApp: Response within 2 hours"] },
            ].map(({ icon, title, lines }) => (
              <div key={title} className="flex gap-3 border-b pb-5" style={{ borderColor: C.lightBorder }}>
                <div className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${C.orange}15`, color: C.orange }}>{icon}</div>
                <div>
                  <div className="font-bold mb-1.5 text-sm" style={{ fontFamily: "'Barlow Condensed',sans-serif", color: C.text }}>{title}</div>
                  {lines.map(l => <div key={l} className="text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>{l}</div>)}
                </div>
              </div>
            ))}

            {/* Quick action buttons */}
            <div className="space-y-3">
              <a href="https://wa.me/919944549102" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 w-full justify-center font-semibold rounded-sm text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ background: "#25D366", fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.08em" }}>
                <MessageCircle size={16} /> CHAT ON WHATSAPP
              </a>
              <a href="tel:+919944542221" className="flex items-center gap-2 px-5 py-3 w-full justify-center font-semibold rounded-sm text-sm border transition-all duration-300 hover:scale-105 hover:shadow-md" style={{ color: C.text, borderColor: C.border, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.08em" }}>
                <Phone size={14} /> CALL SALES: +91 99445 42221
              </a>
            </div>
          </div>

          {/* RFQ Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 border rounded-sm" style={{ borderColor: C.lightBorder, background: C.cream }}>
                <CheckCircle2 size={52} className="mb-4" style={{ color: C.orange }} />
                <h3 className="font-black text-2xl mb-2" style={{ fontFamily: "'Barlow Condensed',sans-serif", color: C.text }}>Enquiry Received!</h3>
                <p className="text-sm max-w-sm" style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>Our team will review your requirement and respond within 24 hours with a competitive quotation.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="border rounded-sm p-8" style={{ borderColor: C.lightBorder }}>
                <h3 className="font-black mb-1" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.4rem", color: C.text }}>REQUEST FOR QUOTATION</h3>
                <p className="text-xs mb-6" style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>Request you to kindly go through the product catalogue and let us have the filled format along with your requirement SKU / Design wise for our further action.</p>

                {/* Company info */}
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.orange, fontFamily: "'Barlow',sans-serif" }}>Company Information</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  {[["company", "Company Name", "text", true], ["type", "Company Type", "select", false, ["Proprietorship", "Partnership", "Pvt Ltd", "Public Ltd", "Other"]], ["gst", "GST Number", "text", false], ["industry", "Industry", "select", false, ["Food", "Industrial", "Consumer Goods", "Export", "Other"]]].map(([k, label, type, req, opts]) => (
                    <div key={k as string}>
                      <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: C.muted, fontFamily: "'Barlow',sans-serif" }}>{label as string}{req ? " *" : ""}</label>
                      {type === "select" ? (
                        <select required={!!req} value={form[k as keyof typeof form]} onChange={u(k as string)} className="w-full border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,66,16,0.1)] transition-all duration-300" style={{ borderColor: C.border, color: C.text, fontFamily: "'Inter',sans-serif" }}>
                          <option value="">Select...</option>
                          {(opts as string[]).map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      ) : (
                        <input type={type as string} required={!!req} value={form[k as keyof typeof form]} onChange={u(k as string)} className="w-full border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,66,16,0.1)] transition-all duration-300" style={{ borderColor: C.border, color: C.text, fontFamily: "'Inter',sans-serif" }} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Contact */}
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.orange, fontFamily: "'Barlow',sans-serif" }}>Contact Details</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  {[["name", "Contact Person Name", "text", true], ["designation", "Designation", "text", false], ["phone", "Phone Number", "tel", true], ["email", "Email Address", "email", true]].map(([k, label, type, req]) => (
                    <div key={k as string}>
                      <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: C.muted, fontFamily: "'Barlow',sans-serif" }}>{label as string}{req ? " *" : ""}</label>
                      <input type={type as string} required={!!req} value={form[k as keyof typeof form]} onChange={u(k as string)} className="w-full border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-orange-400 transition-colors" style={{ borderColor: C.border, color: C.text, fontFamily: "'Inter',sans-serif" }} />
                    </div>
                  ))}
                </div>

                {/* Product requirements */}
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.orange, fontFamily: "'Barlow',sans-serif" }}>Product Requirements</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: C.muted, fontFamily: "'Barlow',sans-serif" }}>Product Type *</label>
                    <select required value={form.product} onChange={u("product")} className="w-full border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,66,16,0.1)] transition-all duration-300" style={{ borderColor: C.border, color: C.text, fontFamily: "'Inter',sans-serif" }}>
                      <option value="">Select type...</option>
                      {["Round Tin Containers", "Rectangular / Square", "Custom Printed", "Specialty Food Tins", "Ghee Containers", "Tea & Spice Tins", "Cookie & Biscuit Cans", "Food Products (General)", "Paint & Industrial", "Decorative & Gift"].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: C.muted, fontFamily: "'Barlow',sans-serif" }}>Size / Capacity</label>
                    <input type="text" placeholder="e.g. 500g round" value={form.size} onChange={u("size")} className="w-full border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,66,16,0.1)] transition-all duration-300" style={{ borderColor: C.border, color: C.text, fontFamily: "'Inter',sans-serif" }} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: C.muted, fontFamily: "'Barlow',sans-serif" }}>Quantity Required *</label>
                    <input type="text" required placeholder="e.g. 10,000 units" value={form.qty} onChange={u("qty")} className="w-full border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,66,16,0.1)] transition-all duration-300" style={{ borderColor: C.border, color: C.text, fontFamily: "'Inter',sans-serif" }} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: C.muted, fontFamily: "'Barlow',sans-serif" }}>SKU Reference</label>
                    <input type="text" value={form.sku} onChange={u("sku")} className="w-full border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,66,16,0.1)] transition-all duration-300" style={{ borderColor: C.border, color: C.text, fontFamily: "'Inter',sans-serif" }} />
                  </div>
                </div>

                {/* Custom requirements */}
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.orange, fontFamily: "'Barlow',sans-serif" }}>Custom Requirements</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: C.muted, fontFamily: "'Barlow',sans-serif" }}>Printing Required</label>
                    <select value={form.printing} onChange={u("printing")} className="w-full border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,66,16,0.1)] transition-all duration-300" style={{ borderColor: C.border, color: C.text, fontFamily: "'Inter',sans-serif" }}>
                      <option value="">Select...</option>
                      <option>Yes</option><option>No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: C.muted, fontFamily: "'Barlow',sans-serif" }}>Market Destination</label>
                    <select value={form.destination} onChange={u("destination")} className="w-full border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,66,16,0.1)] transition-all duration-300" style={{ borderColor: C.border, color: C.text, fontFamily: "'Inter',sans-serif" }}>
                      <option value="">Select...</option>
                      <option>Domestic</option><option>Export – Middle East</option><option>Export – Europe</option><option>Export – Southeast Asia</option><option>Export – North America</option><option>Export – Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: C.muted, fontFamily: "'Barlow',sans-serif" }}>Delivery Timeline</label>
                    <input type="text" placeholder="e.g. 30 days" value={form.timeline} onChange={u("timeline")} className="w-full border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,66,16,0.1)] transition-all duration-300" style={{ borderColor: C.border, color: C.text, fontFamily: "'Inter',sans-serif" }} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: C.muted, fontFamily: "'Barlow',sans-serif" }}>Budget Range</label>
                    <input type="text" placeholder="e.g. ₹2–5 lakhs" value={form.budget} onChange={u("budget")} className="w-full border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,66,16,0.1)] transition-all duration-300" style={{ borderColor: C.border, color: C.text, fontFamily: "'Inter',sans-serif" }} />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: C.muted, fontFamily: "'Barlow',sans-serif" }}>Design Specification / Additional Requirements</label>
                  <textarea rows={3} value={form.message} onChange={u("message")} placeholder="Describe your design, special features, logo details, or any additional requirements..." className="w-full border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-orange-400 focus:shadow-[0_0_0_3px_rgba(232,66,16,0.1)] transition-all duration-300 resize-none" style={{ borderColor: C.border, color: C.text, fontFamily: "'Inter',sans-serif" }} />
                </div>

                <button type="submit" className="w-full py-3.5 font-bold text-white rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ background: C.orange, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.12em", fontSize: "0.95rem" }}>
                  SUBMIT ENQUIRY
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Location + Distribution */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border rounded-sm p-6" style={{ borderColor: C.lightBorder, background: C.cream }}>
            <h3 className="font-bold mb-4" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.2rem", color: C.text }}>FACTORY LOCATION</h3>
            <div className="space-y-2 mb-5">
              {[["Madurai City", "15 km"], ["Nearest Airport", "Madurai Airport (15 km)"], ["Nearest Railway", "Thirumangalam Station (2 km)"], ["Highway Access", "NH 38 (5 km)"], ["Tuticorin Port", "180 km"], ["Chennai Port", "460 km"]].map(([l, v]) => (
                <div key={l} className="flex justify-between py-2 border-b text-sm" style={{ borderColor: C.lightBorder }}>
                  <span style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>{l}</span>
                  <span style={{ color: C.orange, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700 }}>{v}</span>
                </div>
              ))}
            </div>
            <div className="h-36 rounded-sm overflow-hidden border" style={{ borderColor: C.lightBorder }}>
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=200&fit=crop&auto=format" alt="Madurai, Tamil Nadu map region" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>

          <div className="border rounded-sm p-6" style={{ borderColor: C.lightBorder }}>
            <h3 className="font-bold mb-4" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.2rem", color: C.text }}>DISTRIBUTION NETWORK</h3>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <p className="text-xs font-semibold mb-2" style={{ color: C.orange, fontFamily: "'Barlow',sans-serif" }}>Domestic Hubs</p>
                {[["Tamil Nadu", "25"], ["Maharashtra", "18"], ["Karnataka", "15"], ["Gujarat", "12"], ["Delhi NCR", "10"], ["Other States", "80"]].map(([s, n]) => (
                  <div key={s} className="flex justify-between py-1.5 border-b text-xs" style={{ borderColor: C.lightBorder }}>
                    <span style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>{s}</span>
                    <span style={{ color: C.orange, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700 }}>{n}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold mb-2" style={{ color: C.orange, fontFamily: "'Barlow',sans-serif" }}>International</p>
                {[["UAE", "5"], ["USA", "6"], ["UK", "4"], ["Singapore", "3"], ["Other", "12"]].map(([s, n]) => (
                  <div key={s} className="flex justify-between py-1.5 border-b text-xs" style={{ borderColor: C.lightBorder }}>
                    <span style={{ color: C.text, fontFamily: "'Barlow',sans-serif" }}>{s}</span>
                    <span style={{ color: C.orange, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700 }}>{n}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Btn to="/contact" small>FIND DISTRIBUTOR</Btn>
              <Btn to="/contact" variant="outline" small>BECOME DISTRIBUTOR</Btn>
            </div>
          </div>
        </div>

        {/* Factory visit + Catalogue */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-sm p-6" style={{ background: C.cream, borderColor: C.lightBorder }}>
            <Building2 size={22} className="mb-3" style={{ color: C.orange }} />
            <h3 className="font-bold mb-2" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.2rem", color: C.text }}>FACTORY VISIT PROGRAM</h3>
            <p className="text-sm mb-4" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>We welcome potential clients to visit our 25,000 sq.mt. manufacturing facility to witness our production processes, quality control systems, and infrastructure firsthand.</p>
            <ul className="space-y-1.5 mb-4">
              {["Witness manufacturing capabilities", "Meet our technical team", "Inspect quality control processes", "Discuss custom requirements in detail", "See finished product samples"].map(pt => (
                <li key={pt} className="flex gap-1.5 text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                  <CheckCircle2 size={12} className="mt-0.5 flex-shrink-0" style={{ color: C.orange }} />{pt}
                </li>
              ))}
            </ul>
            <p className="text-xs mb-4" style={{ color: C.muted, fontFamily: "'Inter',sans-serif" }}>Mon–Fri · 10:00 AM – 4:00 PM IST · 2–3 hours</p>
            <Btn to="/contact" small>BOOK FACTORY VISIT</Btn>
          </div>

          <div className="border rounded-sm p-6" style={{ borderColor: C.lightBorder }}>
            <Download size={22} className="mb-3" style={{ color: C.orange }} />
            <h3 className="font-bold mb-2" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.2rem", color: C.text }}>DOWNLOAD CATALOGUE</h3>
            <p className="text-sm mb-4" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>Get detailed information about all tin container products, size charts, customization options, and pricing guidelines.</p>
            <ul className="space-y-1.5 mb-5">
              {["Complete product range with specifications", "Size charts and capacity guides", "Custom printing guidelines", "Material and coating details", "Quality certification information", "Pricing guidelines and MOQ information"].map(pt => (
                <li key={pt} className="flex gap-1.5 text-sm" style={{ color: C.textLight, fontFamily: "'Inter',sans-serif" }}>
                  <CheckCircle2 size={12} className="mt-0.5 flex-shrink-0" style={{ color: C.orange }} />{pt}
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <Btn to="/contact" small>DOWNLOAD (PDF)</Btn>
              <Btn to="/contact" variant="outline" small>REQUEST PHYSICAL</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// APP ROOT
// ═══════════════════════════════════════════════════════════════
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col" style={{ background: "#fff", fontFamily: "'Inter',sans-serif" }}>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
