// Purpose: Root document shell with analytics, Clerk, and SEO verification hooks.
// Owner: template-platform
// Last updated: 2026-04-29

import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { ClerkProviderWrapper } from '@/components/providers/clerk-provider-wrapper'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { getBaseUrl, siteConfig } from '@/lib/site'

const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION || process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    url: getBaseUrl(),
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ClerkProviderWrapper>{children}</ClerkProviderWrapper>
        </ThemeProvider>
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
