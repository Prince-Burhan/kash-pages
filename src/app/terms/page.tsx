import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - KashPages',
  description: 'Terms of service and usage agreement for KashPages platform',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500 italic">
            Last Updated: December 27, 2025
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            1. Use of Service
          </h2>
          <p>
            KashPages is a platform for creating and publishing professional landing
            pages for businesses in Kashmir. By using KashPages, you agree to comply
            with all applicable laws and regulations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">2. User Accounts</h2>
          <p>
            Admin accounts are managed by KashPages administrators. You are responsible
            for maintaining the confidentiality of your login credentials and for all
            activity under your account.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">3. Content Rights</h2>
          <p>
            You retain all rights to the content you provide. By publishing content on
            KashPages, you grant us the right to display, index, and distribute the
            content as part of the platform.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            4. Prohibited Content
          </h2>
          <p>
            You agree not to publish content that is:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Illegal or violates any laws</li>
            <li>Harmful, abusive, or defamatory</li>
            <li>Contains malware or malicious code</li>
            <li>Violates intellectual property rights</li>
            <li>Spam or unsolicited advertising</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            5. Limitation of Liability
          </h2>
          <p>
            KashPages is provided "as is" without warranties. We are not liable for any
            damages resulting from your use of the platform.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">6. Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of
            KashPages constitutes acceptance of modified terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">7. Contact</h2>
          <p>
            For questions about these terms, please contact us at terms@kashpages.in
          </p>
        </div>
      </div>
    </main>
  );
}
