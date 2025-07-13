/**
 * Performance monitoring utilities for tracking Core Web Vitals
 * and other performance metrics in production
 */

// Performance observer for navigation timing
export function measureNavigationTiming() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (perfData) {
      const metrics = {
        dns: perfData.domainLookupEnd - perfData.domainLookupStart,
        tcp: perfData.connectEnd - perfData.connectStart,
        ttfb: perfData.responseStart - perfData.fetchStart,
        download: perfData.responseEnd - perfData.responseStart,
        domReady: perfData.domContentLoadedEventEnd - perfData.fetchStart,
        loadComplete: perfData.loadEventEnd - perfData.fetchStart,
      };
      
      return metrics;
    }
  }
  return null;
}

// Resource timing analysis
export function analyzeResourceTiming() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    const analysis = {
      totalResources: resources.length,
      imageResources: resources.filter(r => r.initiatorType === 'img').length,
      scriptResources: resources.filter(r => r.initiatorType === 'script').length,
      stylesheetResources: resources.filter(r => r.initiatorType === 'link').length,
      slowResources: resources.filter(r => r.duration > 1000).length,
    };
    
    return analysis;
  }
  return null;
}

// Memory usage monitoring
export function getMemoryUsage() {
  if (typeof window !== 'undefined' && 'performance' in window && 'memory' in performance) {
    const memory = (performance as any).memory;
    return {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit,
    };
  }
  return null;
}

// Performance metrics reporter
export function reportPerformanceMetrics() {
  if (typeof window === 'undefined') return;

  // Report navigation timing
  setTimeout(() => {
    const navTiming = measureNavigationTiming();
    if (navTiming && process.env.NODE_ENV === 'development') {
      console.log('Navigation Timing:', navTiming);
    }

    const resourceAnalysis = analyzeResourceTiming();
    if (resourceAnalysis && process.env.NODE_ENV === 'development') {
      console.log('Resource Analysis:', resourceAnalysis);
    }

    const memoryUsage = getMemoryUsage();
    if (memoryUsage && process.env.NODE_ENV === 'development') {
      console.log('Memory Usage:', memoryUsage);
    }
  }, 1000);
}
