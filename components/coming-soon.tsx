import Link from 'next/link'

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto flex min-h-screen items-center justify-center px-4 py-20">
        <div className="max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Coming Soon</p>
          <h1 className="mt-4 text-4xl font-bold text-primary">A new site is on the way.</h1>
          <p className="mt-4 text-base text-muted-foreground">
            I&apos;m working on a refreshed portfolio and project showcase. Check back soon.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="mailto:vinsevinalon@gmail.com"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Contact
            </Link>
            <Link
              href="https://www.linkedin.com/in/vinsevinalon/"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
