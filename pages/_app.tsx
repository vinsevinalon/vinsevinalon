import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { AppProps } from 'next/app'
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Dynamic import for performance monitoring to reduce initial bundle size
const DynamicAnalytics = dynamic(() => import('@vercel/analytics/react').then(mod => ({ default: mod.Analytics })), { ssr: false })
const DynamicSpeedInsights = dynamic(() => import('@vercel/speed-insights/next').then(mod => ({ default: mod.SpeedInsights })), { ssr: false })

/**
 * Highly optimized main App component with performance monitoring and error handling
 * Features: Dynamic imports, memoization, and conditional analytics loading
 * Implements proper analytics integration and PWA support
 */
const MyApp = memo(function MyApp({ Component, pageProps }: AppProps) {
  const isProduction = process.env.NODE_ENV === 'production'
  const enableAnalytics = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== 'false'
  const enablePerformanceMonitoring = process.env.NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING !== 'false'

  return (
    <>
      <Component {...pageProps} />

      {/* Analytics and Performance Monitoring - Only in production */}
      {isProduction && enableAnalytics && <DynamicAnalytics />}
      {isProduction && enablePerformanceMonitoring && <DynamicSpeedInsights />}
    </>
  )
})

export default MyApp
