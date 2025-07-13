# Stagewise Troubleshooting Guide

## Common Issues and Solutions

### TypeError: Failed to resolve module specifier "@stagewise/toolbar"

**Issue**: Dynamic imports are failing due to module resolution issues in the browser environment.

**Root Cause**: ES modules in Next.js sometimes have different resolution paths than expected, especially for packages that use `"type": "module"`.

**Solutions Implemented**:

### 1. **Multiple Loading Strategies** ✅
The implementation now tries multiple approaches:

1. **Next.js Specific Package**: `@stagewise/toolbar-next`
2. **Base Package**: `@stagewise/toolbar` 
3. **Script Injection**: Dynamic script tag creation
4. **CDN Fallback**: External CDN loading

### 2. **Manual Loading Option** 🛠️

If automatic loading fails, you can manually load Stagewise in the browser console:

```javascript
// Option 1: Basic import
import('@stagewise/toolbar').then(({ initToolbar }) => {
  initToolbar({ plugins: [] })
  console.log('✅ Stagewise loaded manually!')
}).catch(console.error)

// Option 2: With error handling
(async () => {
  try {
    const { initToolbar } = await import('@stagewise/toolbar')
    await initToolbar({ plugins: [] })
    console.log('✅ Stagewise initialized successfully!')
  } catch (error) {
    console.error('❌ Manual loading failed:', error)
  }
})()

// Option 3: Try Next.js specific package
import('@stagewise/toolbar-next').then(({ StagewiseToolbar }) => {
  const container = document.createElement('div')
  container.id = 'stagewise-manual'
  container.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:999999;'
  document.body.appendChild(container)
  console.log('✅ Stagewise container created!')
}).catch(console.error)
```

### 3. **Debugging Steps** 🔍

1. **Check Console**: Look for loading attempt messages
2. **Verify Packages**: Ensure stagewise packages are installed
3. **Check Network Tab**: See if module requests are failing
4. **Try Manual Loading**: Use browser console commands above

### 4. **Development Environment Detection** ✅

The toolbar only loads when:
- `window.location.hostname === 'localhost'`
- `window.location.hostname === '127.0.0.1'`
- `window.location.hostname.includes('dev')`

### 5. **Current Implementation Status**

#### Files with Stagewise Integration:
- ✅ `components/stagewise-client.tsx` - React component with multiple loading strategies
- ✅ `public/stagewise-loader.js` - Alternative script-based loading
- ✅ `pages/_app.tsx` - Global error handling and script inclusion
- ✅ `.vscode/extensions.json` - VS Code extension recommendation

#### Loading Strategies:
1. **React Component**: Multiple import attempts with fallbacks
2. **Script Tag**: CDN-based loading with UMD modules
3. **Manual Console**: Copy-paste commands for testing

### 6. **Expected Behavior**

**Success Indicators**:
- ✅ Console message: "Stagewise loaded successfully"
- ✅ Toolbar appears in bottom-right corner
- ✅ No module resolution errors

**If Still Failing**:
- 🔧 Try manual console loading
- 🔧 Check browser compatibility
- 🔧 Verify stagewise packages are up to date
- 🔧 Contact stagewise support

### 7. **Package Information**

Currently installed packages:
```
├── @stagewise-plugins/react@0.5.2
├── @stagewise/toolbar-next@0.5.2  
├── @stagewise/toolbar@0.5.2
```

**Package Types**:
- `@stagewise/toolbar`: Base package with ES modules (`"type": "module"`)
- `@stagewise/toolbar-next`: Next.js specific implementation
- `@stagewise-plugins/react`: React-specific plugins

### 8. **Alternative Solutions**

If all automated loading fails:

1. **Use Browser Extension**: Install Stagewise browser extension directly
2. **Manual Script Tag**: Add `<script>` tag to HTML manually
3. **Webpack Configuration**: Modify Next.js webpack config for better module resolution
4. **Contact Support**: Reach out via Discord: https://discord.gg/gkdGsDYaKA

### 9. **Production Safety** ✅

- ✅ Only loads in development (hostname detection)
- ✅ No impact on production builds
- ✅ Graceful error handling
- ✅ No breaking changes to your app

---

**Note**: Module resolution issues are common with ES modules in browser environments. The multiple loading strategies ensure maximum compatibility while maintaining a fallback to manual loading if needed.
