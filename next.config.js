/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Netlify-friendly output
  output: 'standalone',

  // Image optimization handled by Netlify/CDN
  images: {
    unoptimized: true,
  },

  // Clean URLs without trailing slash issues
  trailingSlash: false,

  // SEO + performance
  poweredByHeader: false,

  // Experimental features (safe)
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
