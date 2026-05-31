import Link from "next/link";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-card">
        <div>
          <p className="eyebrow">Ready to grow?</p>
          <h2>Ready to Make Your Business More Visible?</h2>
          <p>Let B Socio handle your digital presence while you focus on running your business.</p>
        </div>
        <div className="cta-actions">
          <Link className="btn primary" href="/contact">Contact Us</Link>
          <a className="btn light" href={site.arStudio}>Visit AR Studio</a>
          <Link className="btn ghost-dark" href="/client-login">Client Login</Link>
        </div>
      </div>
    </section>
  );
}
