/**
 * Simplified performance monitoring utilities
 * Basic Core Web Vitals tracking without complex monitoring
 */

// Basic performance metrics for development
export function getBasicPerformanceMetrics() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (perfData) {
      return {
        ttfb: Math.round(perfData.responseStart - perfData.fetchStart),
        domReady: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
        loadComplete: Math.round(perfData.loadEventEnd - perfData.fetchStart),
      };
    }
  }
  return null;
}

// Simple performance reporter for development
export function reportBasicMetrics() {
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') return;

  setTimeout(() => {
    const metrics = getBasicPerformanceMetrics();
    if (metrics) {
      console.log('📊 Performance Metrics:', metrics);
    }
  }, 1000);
}
