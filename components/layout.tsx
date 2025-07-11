import Head from 'next/head'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

/**
 * Main layout component that provides consistent structure across all pages
 * @param children - Page content to render
 * @param title - Page title for SEO
 * @param description - Page description for SEO
 */
export default function Layout({ 
  children, 
  title = 'Vinse Viñalon', 
  description = 'Full Stack Web / Shopify Engineer based in Metro Manila, Philippines' 
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Vinse Viñalon" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <div className="min-h-screen bg-background text-foreground">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </>
  )
}
