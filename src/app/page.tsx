import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'KashPages - Professional Landing Pages for Kashmir Businesses',
  description:
    'Create professional landing pages for your Kashmir business. Get indexed on Google, Facebook, LinkedIn, and WhatsApp. Simple, affordable, SEO-optimized.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">KashPages</div>
          <div className="space-x-6">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/plans" className="text-gray-600 hover:text-gray-900">
              Plans
            </Link>
            <Link href="/admin/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Admin
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Professional Landing Pages for Kashmir Businesses
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get your business online with a professional landing page. Fully indexed by
            Google, Facebook, LinkedIn, and WhatsApp. Simple, affordable, and
            SEO-optimized.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/admin/login"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose KashPages?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Google Indexed
              </h3>
              <p className="text-gray-600">
                Your landing page is automatically indexed by Google and appears in
                search results for your business.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Social Media Ready
              </h3>
              <p className="text-gray-600">
                Share on WhatsApp, Facebook, or LinkedIn. Rich previews automatically
                appear when shared.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fast & Reliable
              </h3>
              <p className="text-gray-600">
                Hosted on Netlify with automatic CDN caching. Your landing page loads
                instantly worldwide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">✏️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Easy to Update
              </h3>
              <p className="text-gray-600">
                Update your landing page anytime. Changes are published instantly without
                any technical knowledge.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure</h3>
              <p className="text-gray-600">
                Your data is protected with enterprise-grade security. All pages are
                served over HTTPS.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Affordable</h3>
              <p className="text-gray-600">
                Simple, transparent pricing. No hidden fees. Get started for as low as
                ₹2,999 per year.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to get your business online?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Create your professional landing page in minutes.
        </p>
        <Link
          href="/admin/login"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Get Started Free
        </Link>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/plans" className="hover:text-gray-900">
                    Plans
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-900">
                    Features
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/about" className="hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <a href="mailto:hello@kashpages.in" className="hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/privacy" className="hover:text-gray-900">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-gray-900">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Admin</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/admin/login" className="hover:text-gray-900">
                    Admin Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>&copy; 2025 KashPages. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
