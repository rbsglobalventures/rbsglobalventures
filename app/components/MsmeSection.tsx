import { BadgeCheck, FileText, Building2, TrendingUp } from 'lucide-react';

export function MsmeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
            <BadgeCheck className="w-8 h-8 text-purple-600" />
          </div>
          <div className="text-purple-600 text-sm font-medium mb-2">Government Recognised</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            MSME Registered Enterprise
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            RBS Global Ventures is a proud registered MSME (Micro, Small and Medium Enterprises)
            company under the Government of India&apos;s Udyam Registration scheme.
          </p>
        </div>

        {/* Certificate card */}
        <div className="bg-purple-50 border border-purple-200 rounded-3xl p-8 md:p-12 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Udyam Registration Certificate</h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
                We are officially registered under the Udyam scheme, which recognises our contribution
                to India&apos;s industrial and economic growth. This certification reflects our commitment
                to operating with transparency, accountability, and regulatory compliance.
              </p>
              <a
                href="/documents/Udyam Registration Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
              >
                <FileText className="w-4 h-4" />
                View Certificate
              </a>
            </div>
            <div className="flex-shrink-0 w-24 h-24 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <BadgeCheck className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Government Recognised</h3>
            <p className="text-gray-600 text-sm">
              Registered under Ministry of Micro, Small &amp; Medium Enterprises, Government of India.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Supporting India&apos;s Growth</h3>
            <p className="text-gray-600 text-sm">
              Contributing to India&apos;s economic development through the steel and scrap recycling sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
