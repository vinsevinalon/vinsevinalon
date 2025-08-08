import Head from 'next/head'
import { ReactNode } from 'react'
import Navigation from '@/components/navigation'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
}

/**
 * Optimized main layout component that provides consistent structure across all pages
 * Features: Enhanced SEO, performance optimizations, and accessibility
 * @param children - Page content to render
 * @param title - Page title for SEO
 * @param description - Page description for SEO
 * @param keywords - Meta keywords for SEO
 * @param canonical - Canonical URL for SEO
 * @param ogImage - Open Graph image URL
 */
export default function Layout({ 
  children, 
  title = 'Vinse Viñalon - Full Stack Web / Shopify Engineer', 
  description = 'Full Stack Web / Shopify Engineer based in Metro Manila, Philippines. Specializing in modern web development, e-commerce solutions, and digital experiences.',
  keywords = 'Full Stack Developer, Shopify Engineer, Web Developer, Philippines, React, Next.js, TypeScript, E-commerce',
  canonical,
  ogImage = '/earth.png'
}: LayoutProps) {
  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="author" content="Vinse Viñalon" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Vinse Viñalon Portfolio" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://vercel.live" />
        
        {/* DNS Prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/earth.png" as="image" type="image/png" />
        <link rel="preload" href="/assets/highminds.png" as="image" type="image/png" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="application-name" content="Vinse Viñalon Portfolio" />
        
        {/* Performance and Security */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation at the top */}
        <header className="container mx-auto px-4 pt-8">
          <Navigation />
        </header>
        
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </>
  )
}
