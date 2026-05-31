import Link from "next/link";
import { site } from "@/lib/site";

export default function PortalCard({ role, title, description, internal = false }) {
  return (
    <main className="login-page">
      <section className="login-card">
        <p className="eyebrow">{role}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {internal ? (
          <a className="btn primary full" href={site.studioPortal}>Open Studio Portal</a>
        ) : (
          <Link className="btn primary full" href="/contact">Contact B Socio</Link>
        )}
        <Link className="btn muted full" href="/">Back to Website</Link>
      </section>
    </main>
  );
}
