import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(site.website),
  title: {
    default: "B Socio | Be Seen. Be Social.",
    template: "%s | B Socio"
  },
  description:
    "B Socio helps local businesses grow with social media marketing, content creation, paid ads, branding, lead generation, and QR/AR digital experiences.",
  openGraph: {
    title: "B Socio",
    description: "Be Seen. Be Social.",
    url: site.website,
    siteName: "B Socio",
    type: "website"
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
