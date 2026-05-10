import type { Metadata } from "next";
import { Header } from "../components/Header";
import { FounderMessage } from "../components/FounderMessage";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "A Message From Our Founder",
  description:
    "A personal message from Bala Subramanian, Founder of RBS Global Ventures — sharing his vision, background, and commitment to building a trusted steel and scrap trading enterprise in Tamil Nadu.",
  alternates: { canonical: "https://rbsglobalventures.com/founder" },
  openGraph: {
    title: "A Message From Our Founder | RBS Global Ventures",
    description:
      "Read the founder's vision for RBS Global Ventures — long-term value, strong relationships, and disciplined growth.",
    url: "https://rbsglobalventures.com/founder",
  },
};

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <FounderMessage />
      </div>
      <Footer />
    </div>
  );
}
