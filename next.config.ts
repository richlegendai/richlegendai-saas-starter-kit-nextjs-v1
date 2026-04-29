// Purpose: Next.js runtime configuration for the public SaaS starter kit.
// Owner: template-platform
// Last updated: 2026-04-29

import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@base-ui/react'],
  },
}

export default withNextIntl(nextConfig)
