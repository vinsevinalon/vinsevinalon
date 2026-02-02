import PageLayout from '@/components/page-layout'
import ProfileAvatar from '@/components/profile-avatar'

export default function Home() {
  return (
    <PageLayout fixedHeight={true}>
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        
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
      </div>
    </PageLayout>
  )
}
