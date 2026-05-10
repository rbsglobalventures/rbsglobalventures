import type { Metadata } from "next";
import { Header } from "../components/Header";
import { MsmeSection } from "../components/MsmeSection";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "MSME Registration",
  description:
    "RBS Global Ventures is a registered MSME under India's Udyam Registration scheme. View our Udyam Registration Certificate and learn about our government-recognised status.",
  alternates: { canonical: "https://rbsglobalventures.com/msme" },
  openGraph: {
    title: "MSME Registration | RBS Global Ventures",
    description:
      "Government-recognised MSME enterprise in steel supply and scrap trading, Tamil Nadu.",
    url: "https://rbsglobalventures.com/msme",
  },
};

export default function MsmePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <MsmeSection />
      </div>
      <Footer />
    </div>
  );
}
