// Purpose: Admin subscription override API scaffold.
// Owner: template-admin
// Last updated: 2026-04-29

import { NextResponse } from 'next/server'
import { requireEnv } from '@/lib/env'

export async function GET() {
  const env = requireEnv(['ADMIN_SESSION_SECRET', 'DATABASE_URL'])

  if (!env.ok) {
    return NextResponse.json({ error: 'Admin overrides are not configured', missing: env.missing }, { status: 503 })
  }

  return NextResponse.json({
    overrides: [],
    message: 'Connect this route to app_subscription_overrides after admin auth is enabled.',
  })
}
