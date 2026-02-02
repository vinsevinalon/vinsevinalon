# Latest Project Changes

## Overview
This update migrates the app from the legacy Next.js Pages Router to the App Router and restructures layout concerns. It introduces App Router pages, a new root layout, a shared page layout component, image optimization via `next/image`, and updated navigation hooks for the App Router. Legacy `pages/` routes and older layout/performance utilities were removed.

## Added
- `app/layout.tsx`: New App Router root layout using the Metadata API and Vercel Analytics/SpeedInsights.
- `app/page.tsx`: New home page under the App Router.
- `app/works/page.tsx`: New Works page with memoized project rendering and load animation.
- `app/contact/page.tsx`: New Contact page with memoized handlers and embedded JSON-LD.
- `app/sitemap.ts`: Dynamic sitemap export for core routes.
- `components/page-layout.tsx`: Shared structural layout (navigation + main container) with optional fixed-height behavior.
- `MIGRATION_REPORT.md`: Human-readable migration report and checklist.

## Modified
- `components/navigation.tsx`
  - Switched from `useRouter` to `usePathname` for App Router compatibility.
  - Added `"use client"` directive and memoization utilities.
  - Removed `legacyBehavior` usage in `next/link`.
- `components/profile-avatar.tsx`
  - Replaced `AvatarImage` with `next/image` for optimized loading.
  - Added responsive `sizes` and `priority` loading.
- `tsconfig.json`
  - Fixed `@/*` path mapping to point at the project root instead of a non-existent `src/`.

## Removed
- Legacy Pages Router files:
  - `pages/_app.tsx`, `pages/index.tsx`, `pages/works.tsx`, `pages/contact.tsx`
- Obsolete layout and performance utilities:
  - `components/layout.tsx`, `lib/performance.ts`

## Notes
- Several new components/pages include `"use client"` to ensure hook usage is valid under React Server Components.
- The new structure favors App Router conventions and centralizes layout concerns in `app/layout.tsx` and `components/page-layout.tsx`.

## Verification
- No automated tests or type checks were run for this change set in this workspace.
