/**
 * Simplified stagewise toolbar initialization for development
 * Consolidated approach with basic error handling
 */

let stagewiseLoaded = false

export function initStagewiseToolbar() {
  const isDevelopment = process.env.NODE_ENV === 'development' || 
    (typeof window !== 'undefined' && (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'
    ))

  if (!isDevelopment || stagewiseLoaded || typeof window === 'undefined') {
    return
  }

  stagewiseLoaded = true

  setTimeout(async () => {
    try {
      const { initToolbar } = await import('@stagewise/toolbar')
      await initToolbar({ plugins: [] })
      console.log('✅ Stagewise toolbar loaded')
    } catch (error) {
      console.warn('⚠️ Stagewise toolbar failed to load:', error)
      stagewiseLoaded = false
    }
  }, 1500)
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStagewiseToolbar)
  } else {
    initStagewiseToolbar()
  }
}
