// Purpose: Return current user and subscription setup status without exposing secrets.
// Owner: template-auth
// Last updated: 2026-04-29

import { NextResponse } from 'next/server'
import { getIntegrationStatus } from '@/lib/env'

export async function GET() {
  if (!process.env.CLERK_SECRET_KEY) {
    return NextResponse.json(
      {
        authenticated: false,
        configured: false,
        message: 'CLERK_SECRET_KEY is not configured. Add Clerk environment variables to enable auth status.',
        integrations: getIntegrationStatus(),
      },
      { status: 200 },
    )
  }

  const { auth } = await import('@clerk/nextjs/server')
  const session = await auth()

  return NextResponse.json({
    authenticated: Boolean(session.userId),
    userId: session.userId,
    configured: true,
    integrations: getIntegrationStatus(),
  })
}
