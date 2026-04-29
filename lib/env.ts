// Purpose: Environment validation helpers that never expose secret values.
// Owner: template-platform
// Last updated: 2026-04-29

export type IntegrationStatus = {
  name: string
  configured: boolean
  description: string
}

function hasEnv(name: string) {
  return Boolean(process.env[name]?.trim())
}

export function requireEnv(names: string[]) {
  const missing = names.filter((name) => !hasEnv(name))

  if (missing.length > 0) {
    return {
      ok: false as const,
      missing,
    }
  }

  return {
    ok: true as const,
    missing: [],
  }
}

export function getIntegrationStatus(): IntegrationStatus[] {
  return [
    {
      name: 'Clerk',
      configured: hasEnv('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY') && hasEnv('CLERK_SECRET_KEY'),
      description: 'Required for authenticated dashboard sessions and user webhooks.',
    },
    {
      name: 'Polar',
      configured: hasEnv('POLAR_ACCESS_TOKEN') && hasEnv('POLAR_WEBHOOK_SECRET'),
      description: 'Required for checkout creation and subscription webhook sync.',
    },
    {
      name: 'Supabase Postgres',
      configured: hasEnv('DATABASE_URL'),
      description: 'Required for Drizzle queries, subscription state, and blog content if DB-backed mode is enabled.',
    },
    {
      name: 'GA4',
      configured: hasEnv('NEXT_PUBLIC_GA_ID'),
      description: 'Optional analytics integration loaded through @next/third-parties/google.',
    },
    {
      name: 'Google Search Console',
      configured: hasEnv('GOOGLE_SITE_VERIFICATION') || hasEnv('NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION'),
      description: 'Optional verification meta tag rendered through the root Metadata API.',
    },
  ]
}
