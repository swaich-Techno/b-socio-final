import Link from "next/link";
import CTA from "@/components/CTA";
import { industries, process, results, services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">{site.tagline}</p>
            <h1>Grow Your Business with Smart Digital Marketing</h1>
            <p>
              B Socio helps businesses get seen, get social, and get more customers through social media marketing,
              content creation, paid ads, branding, and QR/AR digital experiences.
            </p>
            <div className="actions">
              <Link className="btn primary" href="/contact">Get Started</Link>
              <Link className="btn light" href="/services">Explore Services</Link>
              <a className="btn ghost" href={site.arStudio}>Visit AR Studio</a>
            </div>
          </div>
          <div className="growth-board" aria-label="B Socio growth dashboard visual">
            <div className="visual-card">
              <p className="eyebrow">Growth Studio</p>
              <h2>Reels, ads, QR codes, AR previews, branding, and local reach in one clear plan.</h2>
              <div className="visual-grid">
                <span>Reels</span>
                <span>Paid Ads</span>
                <span>QR Codes</span>
                <span>AR Preview</span>
              </div>
            </div>
            <div className="metric-card">
              <b>Local-first</b>
              <span>Marketing for shops, restaurants, salons, boutiques, coaching centers, services, and startups.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we do</p>
            <h2>How B Socio Helps Your Business</h2>
            <p>Simple, practical digital marketing services made for real business growth.</p>
          </div>
          <div className="card-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span className="icon-badge">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container two-col">
          <div className="feature-copy">
            <p className="eyebrow">Why it matters</p>
            <h2>Customers search online before they visit</h2>
            <p>
              Today, customers search online before visiting a shop or buying a service. If your business is not
              visible on Instagram, Facebook, Google, and WhatsApp, you are losing customers. B Socio helps you build
              trust, attract local customers, and convert views into real sales.
            </p>
          </div>
          <div className="mock-screen" aria-hidden="true">
            <p className="eyebrow">Campaign Snapshot</p>
            <h3>Social growth, creative approvals, and WhatsApp leads</h3>
            <div className="mock-bars">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Process</p>
            <h2>Our Simple Growth Process</h2>
          </div>
          <div className="card-grid steps">
            {process.map((step) => (
              <article className="service-card step-card" key={step}>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ar-section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">QR/AR Digital Studio</p>
            <h2>QR/AR Digital Studio by B Socio</h2>
            <p>
              Our QR/AR Studio helps businesses create interactive digital experiences for products, menus, offers,
              catalogs, real estate, furniture, packaging, events, and brand promotions.
            </p>
            <div className="actions">
              <a className="btn primary" href={site.arStudio}>Visit AR Studio</a>
              <Link className="btn ghost" href="/qr-ar-studio">Learn More</Link>
            </div>
          </div>
          <div className="ar-list">
            <span>Scan QR to open product preview</span>
            <span>Show AR product experience</span>
            <span>Digital menus and catalogs</span>
            <span>QR business cards and posters</span>
            <span>Interactive shop promotions</span>
            <span>Smart campaigns for local brands</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Who we help</p>
            <h2>Built for Local and Growing Businesses</h2>
          </div>
          <div className="chip-grid">
            {industries.map((industry) => (
              <span className="industry-chip" key={industry}>{industry}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Results</p>
            <h2>We Focus on Real Business Growth</h2>
          </div>
          <div className="result-grid">
            {results.map((result) => (
              <span className="result-chip" key={result}>{result}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container portal-grid">
          <article className="portal-card">
            <p className="eyebrow">Client Portal</p>
            <h2>Client Portal</h2>
            <p>Clients can use the portal structure to track updates, approvals, files, messages, and campaign work.</p>
            <Link className="btn primary" href="/client-login">Client Login</Link>
          </article>
          <article className="portal-card dark">
            <p className="eyebrow">Internal only</p>
            <h2>B Socio Studio</h2>
            <p>The studio portal is for team members and super admin only. It is not promoted as a public service.</p>
            <a className="btn primary" href={site.studioPortal}>Studio Login</a>
          </article>
        </div>
      </section>

      <CTA />
    </main>
  );
}
