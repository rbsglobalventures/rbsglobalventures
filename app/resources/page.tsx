import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Resources } from "../components/Resources";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description:
    "Steel and scrap industry insights, guides, and resources from RBS Global Ventures — covering steel markets, recycling trends, and industry news in Tamil Nadu.",
  alternates: { canonical: "https://rbsglobalventures.com/resources" },
  openGraph: {
    title: "Resources & Insights | RBS Global Ventures",
    description:
      "Industry insights and resources on steel trading, scrap management, and recycling.",
    url: "https://rbsglobalventures.com/resources",
  },
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <Resources />
      </div>
      <Footer />
    </div>
  );
}
