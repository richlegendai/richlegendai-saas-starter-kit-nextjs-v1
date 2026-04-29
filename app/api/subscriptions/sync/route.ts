// Purpose: Subscription sync endpoint scaffold for admin or cron use.
// Owner: template-billing
// Last updated: 2026-04-29

import { NextResponse } from 'next/server'
import { requireEnv } from '@/lib/env'

export async function POST() {
  const env = requireEnv(['POLAR_ACCESS_TOKEN', 'DATABASE_URL'])

  if (!env.ok) {
    return NextResponse.json({ error: 'Subscription sync is not configured', missing: env.missing }, { status: 503 })
  }

  return NextResponse.json({
    ok: true,
    message: 'Add Polar list/sync logic here for your product catalog and subscription model.',
  })
}
