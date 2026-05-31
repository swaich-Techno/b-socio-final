import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">{site.name}</div>
          <p>{site.tagline}</p>
          <p>Digital Marketing | Branding | Ads | QR/AR Studio</p>
        </div>
        <div>
          <h3>Links</h3>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/qr-ar-studio">QR/AR Studio</Link>
          <Link href="/client-login">Client Login</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div>
          <h3>Portals</h3>
          <a href={site.website}>bsocio.in</a>
          <a href={site.arStudio}>ar.bsocio.in</a>
          <a href={site.studioPortal}>studio.bsocio.in</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.whatsappLink}>{site.whatsapp}</a>
          <p>{site.address}</p>
        </div>
      </div>
    </footer>
  );
}
