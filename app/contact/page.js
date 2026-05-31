import { services, site } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description: "Contact B Socio for digital marketing, branding, paid ads, social media, and QR/AR marketing."
};

const whatsappText = encodeURIComponent(
  "Hi B Socio, I want to discuss digital marketing for my business. Please contact me."
);

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact Us</p>
          <h1>Let us plan your digital growth</h1>
          <p>Tell us about your business and the service you need. The B Socio team will contact you with the next best step.</p>
          <div className="actions">
            <a className="btn primary" href={`${site.whatsappLink}?text=${whatsappText}`}>Chat on WhatsApp</a>
            <a className="btn light" href={`mailto:${site.email}?subject=B Socio inquiry`}>Send Email</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Fast contact</p>
            <h2>Use WhatsApp or email</h2>
            <p>
              The safest live setup is direct contact links. They work immediately on Vercel and do not depend on a
              paid email provider.
            </p>
            <div className="contact-list">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.whatsappLink}>{site.whatsapp}</a>
              <p>{site.address}</p>
            </div>
          </div>

          <div className="contact-panel">
            <p className="eyebrow">Inquiry checklist</p>
            <h2>What to send us</h2>
            <form className="form-grid" action={`mailto:${site.email}`} method="post" encType="text/plain">
              <label>
                Name
                <input name="name" placeholder="Your name" required />
              </label>
              <label>
                Business Name
                <input name="businessName" placeholder="Your business name" />
              </label>
              <label>
                Phone Number
                <input name="phone" placeholder="+91..." required />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="you@example.com" />
              </label>
              <label>
                Service Required
                <select name="serviceRequired" required defaultValue="">
                  <option value="" disabled>Select service</option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="Tell us what you need" />
              </label>
              <button className="btn primary" type="submit">Send by Email</button>
              <a className="btn muted" href={`${site.whatsappLink}?text=${whatsappText}`}>Send on WhatsApp</a>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
