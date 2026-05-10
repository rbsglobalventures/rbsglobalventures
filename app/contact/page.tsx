import type { Metadata } from "next";
import { Header } from "../components/Header";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with RBS Global Ventures. Call +91-8681971471 or email rbsglobalventures@gmail.com. Located in Arumuganeri, Tuticorin District, Tamil Nadu.",
  alternates: { canonical: "https://rbsglobalventures.com/contact" },
  openGraph: {
    title: "Contact Us | RBS Global Ventures",
    description:
      "Reach out for steel supply, scrap trading enquiries or bulk order requests.",
    url: "https://rbsglobalventures.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
