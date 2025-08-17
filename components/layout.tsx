import Head from 'next/head'
import { ReactNode, memo, useMemo } from 'react'
import Navigation from '@/components/navigation'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  fixedHeight?: boolean
}

// Constants for better maintainability and performance
const DEFAULT_CONFIG = {
  title: 'Vinse Viñalon - Full Stack Web / Shopify Engineer',
  description: 'Full Stack Web / Shopify Engineer based in Metro Manila, Philippines. Specializing in modern web development, e-commerce solutions, and digital experiences.',
  keywords: 'Full Stack Developer, Shopify Engineer, Web Developer, Philippines, React, Next.js, TypeScript, E-commerce',
  ogImage: '/earth.png',
  siteName: 'Vinse Viñalon Portfolio',
  author: 'Vinse Viñalon',
  themeColor: '#000000'
} as const

/**
 * Highly optimized main layout component with enhanced performance and accessibility
 * Features: Memoization, computed styles, reduced re-renders, and enhanced SEO
 * 
 * @param children - Page content to render
 * @param title - Page title for SEO and social sharing
 * @param description - Page description for SEO and social sharing  
 * @param keywords - Meta keywords for SEO (legacy but still useful)
 * @param canonical - Canonical URL for SEO duplicate content prevention
 * @param ogImage - Open Graph image URL for social sharing
 * @param fixedHeight - Whether to use fixed viewport height (prevents scrolling)
 */
const Layout = memo(function Layout({ 
  children, 
  title = DEFAULT_CONFIG.title, 
  description = DEFAULT_CONFIG.description,
  keywords = DEFAULT_CONFIG.keywords,
  canonical,
  ogImage = DEFAULT_CONFIG.ogImage,
  fixedHeight = false
}: LayoutProps) {
  // Memoize computed class names for better performance
  const containerClasses = useMemo(() => {
    const baseClasses = 'bg-background text-foreground'
    if (fixedHeight) {
      return `${baseClasses} h-screen flex flex-col overflow-hidden`
    }
    return `${baseClasses} min-h-screen`
  }, [fixedHeight])

  const headerClasses = useMemo(() => {
    const baseClasses = 'container mx-auto px-4 pt-8'
    return fixedHeight ? `${baseClasses} flex-shrink-0` : baseClasses
  }, [fixedHeight])

  const mainClasses = useMemo(() => {
    const baseClasses = 'container mx-auto px-4 py-8'
    return fixedHeight ? `${baseClasses} flex-1 overflow-hidden` : baseClasses
  }, [fixedHeight])

  // Memoize SEO meta tags to prevent unnecessary re-renders
  const seoTags = useMemo(() => (
    <Head>
      {/* Essential Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="author" content={DEFAULT_CONFIG.author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonical URL - only render if provided */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={DEFAULT_CONFIG.siteName} />
      
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
      
      {/* Performance Optimizations */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://vercel.live" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Critical Resource Preloading */}
      <link rel="preload" href="/earth.png" as="image" type="image/png" />
      <link rel="preload" href="/assets/highminds.png" as="image" type="image/png" />
      
      {/* PWA Configuration */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content={DEFAULT_CONFIG.themeColor} />
      <meta name="application-name" content={DEFAULT_CONFIG.siteName} />
      
      {/* Legacy Browser Support */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Head>
  ), [title, description, keywords, canonical, ogImage])

  return (
    <>
      {seoTags}
      
      <div className={containerClasses}>
        {/* Navigation Header */}
        <header className={headerClasses}>
          <Navigation />
        </header>
        
        {/* Main Content Area */}
        <main className={mainClasses}>
          {children}
        </main>
      </div>
    </>
  )
})

export default Layout
