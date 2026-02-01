import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KashPages — Developer Portfolio',
  description:
    'Modern web applications, custom business websites, and scalable systems built professionally.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
