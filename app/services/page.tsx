import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Services } from "../components/Services";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "RBS Global Ventures offers steel supply, scrap trading, scrap processing, bulk supply, and logistics across Tamil Nadu. Premium TMT bars, structural steel, ferrous & non-ferrous scrap.",
  alternates: { canonical: "https://rbsglobalventures.com/services" },
  openGraph: {
    title: "Our Services | RBS Global Ventures",
    description:
      "Steel supply, scrap trading, bulk supply and logistics across Tamil Nadu.",
    url: "https://rbsglobalventures.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <Services />
        <WhyChooseUs />
      </div>
      <Footer />
    </div>
  );
}
