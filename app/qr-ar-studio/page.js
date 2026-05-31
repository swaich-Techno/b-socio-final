import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export const metadata = {
  title: "QR/AR Studio",
  description: "QR and AR digital experiences by B Socio."
};

export default function QrArStudioPage() {
  const examples = [
    "Scan QR code to open product preview",
    "Show AR product experience",
    "Digital menu or product catalog",
    "Interactive business promotion",
    "Smart marketing for shops, restaurants, real estate, furniture, events, and brands",
    "Product preview using QR",
    "AR-based marketing campaigns",
    "QR-based business cards and posters"
  ];

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">QR/AR Digital Studio</p>
          <h1>QR/AR Digital Studio by B Socio</h1>
          <p>
            Create interactive digital experiences for products, menus, offers, catalogs, real estate, furniture,
            packaging, events, and brand promotions.
          </p>
          <div className="actions">
            <a className="btn primary" href={site.arStudio}>Visit AR Studio</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {examples.map((item) => (
              <article className="service-card" key={item}>
                <span className="icon-badge">AR</span>
                <h2>{item}</h2>
                <p>Use QR and AR to make normal marketing material more engaging and easier to share.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
