import Layout from '@/components/layout'
import ProfileAvatar from '@/components/profile-avatar'
import { memo } from 'react'

/**
 * Highly optimized Homepage component with improved performance and accessibility
 * Features: Memoization, optimized images, and efficient re-rendering
 * Uses Next.js Image optimization and ShadCN UI components
 */
const Home = memo(function Home() {
  return (
    <Layout 
      title="Vinse Viñalon - Full Stack Web Developer"
      description="Hi, I'm Vinse Viñalon, a Full Stack Web / Shopify Engineer based in Metro Manila, Philippines. Specializing in modern web development and e-commerce solutions."
    >
      <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-6">
          <ProfileAvatar size="lg" />

          {/* Introduction */}
          <div className="text-center space-y-4 max-w-md">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">Vinse Viñalon</h1>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Hi, My name is Vinse Viñalon.
              </p>
            </div>
            
            <p className="text-sm leading-relaxed text-foreground">
              I&apos;m a <strong className="text-primary font-semibold">
                Full Stack Web / Shopify Engineer
              </strong>{' '}
              based in Metro Manila, Philippines
            </p>
          </div>
        </div>

        {/* Performance optimizations */}
        <div className="sr-only">
          {/* Preload critical images */}
          <link rel="preload" href="/earth.png" as="image" />
        </div>
      </div>
    </Layout>
  )
})

export default Home
