import Link from "next/link";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark">BS</span>
        <span>
          <strong>{site.name}</strong>
          <small>{site.tagline}</small>
        </span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/qr-ar-studio">QR/AR Studio</Link>
        <Link href="/client-login">Client Login</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
      <a className="studio-link" href={site.studioPortal}>Studio Login</a>
    </header>
  );
}
