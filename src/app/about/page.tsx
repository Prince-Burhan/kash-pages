import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About KashPages',
  description:
    'KashPages provides professional landing pages for local Kashmiri businesses, helping them establish an online presence that is fully indexed by Google, Facebook, LinkedIn, and WhatsApp.',
  openGraph: {
    title: 'About KashPages',
    description:
      'Professional landing page platform for Kashmir businesses',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About KashPages</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            KashPages is a platform dedicated to giving local Kashmiri businesses a
            professional online presence. We believe every business, regardless of size,
            deserves to be discoverable online.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Our Mission</h2>
          <p>
            Our mission is to empower local businesses in Kashmir by providing them with
            professional, SEO-optimized landing pages that rank on Google and are
            discoverable across social media platforms including WhatsApp, Facebook, and
            LinkedIn.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Business owners provide their information and custom HTML design
            </li>
            <li>
              We publish their landing page at kashpages.in/[business-slug]
            </li>
            <li>
              Pages are automatically indexed by search engines with proper SEO
              metadata
            </li>
            <li>
              Sharing the link on WhatsApp, Facebook, or LinkedIn shows a rich preview
            </li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">Contact</h2>
          <p>
            For more information or to list your business on KashPages, please reach out
            to us.
          </p>
        </div>
      </div>
    </main>
  );
}
