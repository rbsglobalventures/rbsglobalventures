import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden">
              <div className="rounded-xl overflow-hidden aspect-square">
                <Image
                  src="/products/TMT steel.jpeg"
                  alt="TMT Steel Rods"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square">
                <Image
                  src="/products/Structural steel-1.jpeg"
                  alt="Structural Steel"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square">
                <Image
                  src="/products/Structural steel-2.jpeg"
                  alt="Structural Steel"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-square">
                <Image
                  src="/products/Scrap.jpg"
                  alt="Scrap"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white p-5 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">4+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-purple-600 mb-2">🧠 About Us</div>
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-6">
              Your Trusted Steel & Scrap Trading Partner in Tamil Nadu
            </h2>
            <p className="text-gray-600 mb-6">
              At RBS Global Ventures, we focus on two core strengths: steel distribution and scrap management. 
              We support construction companies, manufacturing industries, and individual home builders with 
              premium materials and reliable services across Tamil Nadu.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is simple: Provide quality materials, ensure transparent trading, and promote 
              sustainable recycling. With over 4 years of experience, we&apos;ve built a reputation for reliability, 
              transparency, and excellence, serving 20+ cities with dependable supply chains and fair pricing.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-900 mb-1">Quality Steel Products</h4>
                  <p className="text-gray-600 text-sm">Premium grade steel materials from trusted manufacturers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-900 mb-1">Transparent Scrap Trading</h4>
                  <p className="text-gray-600 text-sm">Fair pricing and honest dealings for all scrap materials</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-900 mb-1">Tamil Nadu Wide Network</h4>
                  <p className="text-gray-600 text-sm">Serving 20+ cities across Tamil Nadu with reliable logistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}