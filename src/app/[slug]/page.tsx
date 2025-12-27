'use client';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLandingPageBySlug, getPublishedLandingPages } from '@/lib/firestore';
import type { LandingPage } from '@/lib/firestore';

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate metadata for landing page
 * Used by Next.js to set <head> tags
 */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;
  const page = await getLandingPageBySlug(slug);

  // Page not found or not published
  if (!page || page.status !== 'published') {
    return {
      title: 'Page Not Found',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kashpages.in';
  const pageUrl = `${baseUrl}/${page.slug}`;

  return {
    // Primary SEO
    title: page.metaTitle || page.title,
    description: page.metaDescription,
    canonical: pageUrl,

    // Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
      type: 'website',
      url: pageUrl,
      title: page.ogTitle,
      description: page.ogDescription,
      images: [
        {
          url: page.ogImage,
          width: 1200,
          height: 630,
          alt: page.ogTitle,
          type: 'image/jpeg',
        },
      ],
      siteName: 'KashPages',
      locale: 'en_IN',
    },

    // Twitter Card
    twitter: {
      card: page.twitterCard || 'summary_large_image',
      title: page.ogTitle,
      description: page.ogDescription,
      images: [page.ogImage],
    },

    // Additional metadata
    keywords: [page.businessName, page.businessCategory, page.businessLocation],
    authors: [{ name: page.businessName }],
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },

    // Verification tags (optional)
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    },

    // Alternate hreflang (if supporting multiple languages in future)
    alternates: {
      canonical: pageUrl,
    },
  };
}

/**
 * Generate static parameters for all published pages
 * Called at build time to pre-render all pages
 */
export async function generateStaticParams() {
  try {
    const pages = await getPublishedLandingPages();
    return pages.map((page) => ({
      slug: page.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return empty array on error - pages will be generated on-demand
    return [];
  }
}

/**
 * Landing Page Component
 * Renders published landing page with full HTML content
 */
export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;

  // Fetch page data
  let page: LandingPage | null = null;
  try {
    page = await getLandingPageBySlug(slug);
  } catch (error) {
    console.error('Error fetching landing page:', error);
    notFound();
  }

  // Page not found
  if (!page) {
    notFound();
  }

  // Page is not published
  if (page.status !== 'published') {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kashpages.in';
  const pageUrl = `${baseUrl}/${page.slug}`;

  // Structured data (JSON-LD) for rich snippets
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: page.businessName,
    url: pageUrl,
    description: page.description,
    image: page.ogImage,
    ...(page.businessPhone && { telephone: page.businessPhone }),
    ...(page.businessEmail && { email: page.businessEmail }),
    ...(page.businessLocation && {
      address: {
        '@type': 'PostalAddress',
        addressLocality: page.businessLocation,
        addressCountry: 'IN',
      },
    }),
  };

  return (
    <>
      {/* Metadata in head */}
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Additional SEO */}
        <meta name="author" content={page.businessName} />
        <meta name="publisher" content="KashPages" />
        <meta name="robots" content="index, follow" />

        {/* Mobile optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      {/* Landing Page Content - Rendered as-is */}
      <div className="landing-page-container">
        <div
          dangerouslySetInnerHTML={{
            __html: page.htmlContent,
          }}
        />
      </div>
    </>
  );
}
