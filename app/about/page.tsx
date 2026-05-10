import type { Metadata } from "next";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { FounderMessage } from "../components/FounderMessage";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RBS Global Ventures — a trusted steel supply and scrap trading company in Tamil Nadu, founded by Bala Subramanian with 4+ years of experience across 20+ cities.",
  alternates: { canonical: "https://rbsglobalventures.com/about" },
  openGraph: {
    title: "About Us | RBS Global Ventures",
    description:
      "Trusted steel & scrap trading partner in Tamil Nadu. 4+ years of experience, 20+ cities served.",
    url: "https://rbsglobalventures.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <About />
        <FounderMessage />
      </div>
      <Footer />
    </div>
  );
}
