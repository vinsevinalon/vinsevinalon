import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Vinse Viñalon - Full Stack Web / Shopify Engineer',
  description: 'Full Stack Web / Shopify Engineer based in Metro Manila, Philippines. Specializing in modern web development, e-commerce solutions, and digital experiences.',
  keywords: 'Full Stack Developer, Shopify Engineer, Web Developer, Philippines, React, Next.js, TypeScript, E-commerce',
  authors: [{ name: 'Vinse Viñalon' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Vinse Viñalon Portfolio',
    images: [
      {
        url: '/earth.png',
        width: 1200,
        height: 630,
        alt: 'Vinse Viñalon Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/earth.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://vinsevinalon.com'),
}

export const dynamic = 'force-dynamic'

const isComingSoonActive = process.env.COMING_SOON === 'true'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {isComingSoonActive ? <ComingSoon /> : children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
