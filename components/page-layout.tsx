"use client"

import { ReactNode, memo, useMemo } from 'react'
import Navigation from '@/components/navigation'

interface PageLayoutProps {
  children: ReactNode
  fixedHeight?: boolean
}

/**
 * Structural layout component
 * Handles the main grid/flex structure and navigation
 */
const PageLayout = memo(function PageLayout({ 
  children, 
  fixedHeight = false
}: PageLayoutProps) {
  
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

  return (
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
  )
})

export default PageLayout
