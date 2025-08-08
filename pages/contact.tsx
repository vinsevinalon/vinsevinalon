import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MessageCircle } from 'lucide-react'
import Layout from '@/components/layout'
import ProfileAvatar from '@/components/profile-avatar'
import { memo, useCallback } from 'react'

/**
 * Highly optimized Contact page with improved accessibility and user experience
 * Features: Memoization, optimized event handlers, and enhanced interaction patterns
 * Includes proper semantic HTML and enhanced interaction patterns
 */
const Contact = memo(function Contact() {
  // Optimized email handler
  const handleEmailClick = useCallback(() => {
    window.location.href = 'mailto:vinsevinalon@gmail.com?subject=Let\'s work together!'
  }, [])

  // Optimized messaging handler  
  const handleMessageClick = useCallback(() => {
    window.open('https://linkedin.com/in/vinsevinalon', '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <Layout 
      title="Vinse Viñalon - Contact"
      description="Get in touch with Vinse Viñalon for web development projects, Shopify development, or collaboration opportunities. Based in Metro Manila, Philippines."
    >
      <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-12">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-6">
          <ProfileAvatar size="lg" />

          <div className="text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-primary flex items-center gap-2 justify-center">
                <MessageCircle className="w-8 h-8" />
                Let&apos;s work!
              </h1>
              <p className="text-muted-foreground">
                Ready to collaborate on your next project
              </p>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center gap-2 justify-center">
              <Mail className="w-5 h-5" />
              Get In Touch
            </CardTitle>
            <CardDescription>
              I&apos;m available for freelance projects and full-time opportunities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Email me at:</p>
              <p className="font-mono text-primary">vinsevinalon@gmail.com</p>
            </div>
            
            <Button 
              onClick={handleEmailClick}
              className="w-full"
              size="lg"
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Button>
          </CardContent>
        </Card>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vinse Viñalon",
              "email": "vinsevinalon@gmail.com",
              "jobTitle": "Full Stack Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Metro Manila",
                "addressCountry": "Philippines"
              },
              "url": "https://vinsevinalon.com",
              "sameAs": [
                "https://www.linkedin.com/in/vinsevinalon/",
                "https://github.com/vinsevinalon"
              ]
            })
          }}
        />
      </div>
    </Layout>
  )
})

export default Contact
