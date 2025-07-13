/**
 * Pure JavaScript stagewise toolbar initialization
 * This approach completely avoids React Fiber conflicts by using vanilla JS
 */

let stagewiseLoaded = false

export function initStagewiseToolbar() {
  // Only load in development mode
  const isDevelopment = process.env.NODE_ENV === 'development' || 
    (typeof window !== 'undefined' && (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname.includes('dev')
    ))

  if (!isDevelopment || stagewiseLoaded || typeof window === 'undefined') {
    return
  }

  // Mark as loading to prevent duplicates
  stagewiseLoaded = true

  // Use a timeout to ensure DOM is fully loaded
  setTimeout(async () => {
    try {
      console.log('🚀 Initializing Stagewise toolbar...')
      
      // Import and initialize the toolbar
      const { initToolbar } = await import('@stagewise/toolbar')
      
      await initToolbar({
        plugins: []
      })
      
      console.log('✅ Stagewise toolbar initialized successfully!')
      
    } catch (error) {
      console.warn('⚠️ Failed to initialize Stagewise toolbar:', error)
      stagewiseLoaded = false // Reset flag for retry
      
      // Provide fallback instructions
      console.log('💡 Manual loading option available in console:')
      console.log('import("@stagewise/toolbar").then(({initToolbar}) => initToolbar({plugins:[]}))')
    }
  }, 1500)
}

// Auto-initialize on script load if in browser
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStagewiseToolbar)
  } else {
    initStagewiseToolbar()
  }
}
