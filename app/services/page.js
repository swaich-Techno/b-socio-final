import CTA from "@/components/CTA";
import { services } from "@/lib/site";

export const metadata = {
  title: "Services",
  description: "Digital marketing services by B Socio."
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Digital marketing services for local business growth</h1>
          <p>From social media and reels to ads, branding, WhatsApp marketing, websites, and QR/AR campaigns.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span className="icon-badge">{String(index + 1).padStart(2, "0")}</span>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
