import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { AppProps } from 'next/app'
import Head from 'next/head'

/**
 * Main App component with performance monitoring and error handling
 * Implements proper analytics integration and PWA support
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      
      <Component {...pageProps} />

      {/* Analytics and Performance Monitoring */}
      {process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== 'false' && <Analytics />}
      {process.env.NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING !== 'false' && <SpeedInsights />}
    </>
  )
}

export default MyApp
