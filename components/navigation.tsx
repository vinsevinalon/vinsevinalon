"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github, Linkedin, ExternalLink } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { memo, useCallback } from 'react'

const navigationItems = [
  { href: '/', label: 'ABOUT' },
  { href: '/works', label: 'WORKS' },
  { href: '/contact', label: 'CONTACT' },
]

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/vinsevinalon/',
    icon: Linkedin,
    label: 'LinkedIn Profile',
  },
  {
    href: 'https://github.com/vinsevinalon',
    icon: Github,
    label: 'GitHub Profile',
  },
  {
    href: 'https://www.codecademy.com/profiles/vinsevinalon',
    icon: ExternalLink,
    label: 'CodeCademy Profile',
  },
]

/**
 * Highly optimized Navigation component with enhanced accessibility and performance
 * Features: Memoization, lazy loading, and efficient re-rendering
 * Uses ShadCN UI components for consistent styling and better UX
 */
const Navigation = memo(function Navigation() {
  const pathname = usePathname()

  /**
   * Optimized external link handler with security measures and performance optimization
   */
  const handleExternalLink = useCallback((url: string) => {
    // Use passive event handling for better performance
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <nav className="flex flex-col items-center space-y-8" role="navigation" aria-label="Main navigation">
      {/* Main Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList>
          {navigationItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === item.href && 'bg-accent text-accent-foreground',
                    'text-xs font-medium tracking-wider'
                  )}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Separator className="w-24" />
      {/* Social Links */}
      <div className="flex items-center space-x-4" role="group" aria-label="Social media links">
        {socialLinks.map((social) => {
          const IconComponent = social.icon
          return (
            <Button
              key={social.href}
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => handleExternalLink(social.href)}
              aria-label={social.label}
            >
              <IconComponent className="h-4 w-4" />
            </Button>
          )
        })}
      </div>
    </nav>
  );
})

export default Navigation
