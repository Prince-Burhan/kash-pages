'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>Page Not Found - KashPages</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <meta name="robots" content="noindex, follow" />
      </head>
      <body className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The landing page you're looking for doesn't exist or is no longer published.
          </p>
          <div className="space-y-3">
            <p className="text-sm text-gray-500">
              If you believe this is a mistake, please contact the business owner.
            </p>
            <div>
              <Link
                href="/"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
