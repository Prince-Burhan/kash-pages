import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plans & Pricing | KashPages',
  description:
    'Transparent one-time pricing for professional, custom-built business websites. No subscriptions. No lock-in.',
}

export default function PlansPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HEADER */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Plans & Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            One-time pricing. Fully custom-built. No subscriptions. Designed to
            grow with your business.
          </p>
        </div>
      </section>

      {/* PLANS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* STANDARD */}
          <div className="border rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-gray-900">Standard</h2>
            <p className="mt-2 text-gray-600">
              Best for businesses starting their professional digital presence
            </p>

            <div className="mt-6 text-3xl font-bold text-gray-900">
              ₹60,000
              <span className="text-base font-medium text-gray-500 ml-2">
                (One-time)
              </span>
            </div>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• Free subdomain (yourbusiness.kashpages.in)</li>
              <li>• Fully custom-designed website (no premade theme)</li>
              <li>• Desktop-first, mobile & tablet responsive</li>
              <li>• Personal in-store setup & guidance</li>
              <li>• Admin dashboard for leads & reviews</li>
              <li>• Team management (up to 6 members)</li>
              <li>• Social media SEO (WhatsApp, Facebook, Twitter)</li>
              <li>• Secure hosting & deployment</li>
              <li className="font-semibold">• Copyright: Developer</li>
            </ul>

            <a
              href="https://wa.me/XXXXXXXXXX"
              target="_blank"
              className="mt-10 inline-block w-full text-center py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition"
            >
              Enquire on WhatsApp
            </a>
          </div>

          {/* PROFESSIONAL */}
          <div className="border-2 border-gray-900 rounded-2xl p-8 shadow-xl relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </span>

            <h2 className="text-2xl font-bold text-gray-900">Professional</h2>
            <p className="mt-2 text-gray-600">
              Ideal for growing businesses needing insights & branding control
            </p>

            <div className="mt-6 text-3xl font-bold text-gray-900">
              ₹90,000
              <span className="text-base font-medium text-gray-500 ml-2">
                (One-time)
              </span>
            </div>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• Everything in Standard</li>
              <li>• Visitor analytics & performance insights</li>
              <li>• Team management (up to 10 members)</li>
              <li>• Custom domain (1 year included)</li>
              <li>• Business email (1 year included)</li>
              <li>• Branding control (logo, slogan, hours, socials)</li>
              <li>• Maintenance & bug fixes (6 months)</li>
              <li>• Performance-ready architecture</li>
              <li className="font-semibold">• Copyright: Developer</li>
            </ul>

            <a
              href="https://wa.me/XXXXXXXXXX"
              target="_blank"
              className="mt-10 inline-block w-full text-center py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition"
            >
              Enquire on WhatsApp
            </a>
          </div>

          {/* PREMIUM */}
          <div className="border rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-gray-900">Premium</h2>
            <p className="mt-2 text-gray-600">
              For serious businesses that want ownership & long-term stability
            </p>

            <div className="mt-6 text-3xl font-bold text-gray-900">
              ₹1,20,000
              <span className="text-base font-medium text-gray-500 ml-2">
                (One-time)
              </span>
            </div>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• Everything in Standard & Professional</li>
              <li>• Google Search–optimized SEO</li>
              <li>• Custom domain (3 years included)</li>
              <li>• Business email (3 years included)</li>
              <li>• Maintenance & support (1 year)</li>
              <li>• Higher traffic & usage capacity</li>
              <li>• Priority support</li>
              <li className="font-semibold">
                • Copyright: Transferred to Client
              </li>
            </ul>

            <a
              href="https://wa.me/XXXXXXXXXX"
              target="_blank"
              className="mt-10 inline-block w-full text-center py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* USAGE POLICY */}
      <section className="bg-gray-50 border-t">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold text-gray-900">
            Usage & Storage Limits
          </h3>
          <p className="mt-4 text-gray-700">
            To avoid forced subscriptions, the platform runs on an optimized
            setup:
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Reviews: up to 20,000</li>
            <li>• Customer inquiries (leads): up to 50,000</li>
          </ul>

          <p className="mt-4 text-gray-700">
            If usage grows beyond this, optimization or upgrades can be applied
            safely. No forced monthly fees unless growth requires it.
          </p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to move forward?
        </h2>
        <p className="mt-4 text-gray-600">
          Serious inquiries only. Message me directly for demo & confirmation.
        </p>

        <a
          href="https://wa.me/XXXXXXXXXX"
          target="_blank"
          className="mt-8 inline-block px-10 py-4 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition"
        >
          Contact on WhatsApp
        </a>
      </section>
    </main>
  )
}
