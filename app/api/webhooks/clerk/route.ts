// Purpose: Clerk webhook endpoint for idempotent user and subscription bootstrap.
// Owner: template-auth
// Last updated: 2026-04-29

import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { isClerkUserCreatedPayload, normalizeClerkUser, verifyClerkWebhookPayload } from '@/lib/auth/clerk-webhook'
import { ensureUserAndFreeSubscription } from '@/lib/db/subscriptions'

export async function POST(request: Request) {
  if (!process.env.CLERK_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'CLERK_WEBHOOK_SECRET is not configured' }, { status: 503 })
  }

  const payload = await request.text()
  const headerStore = await headers()
  const event = verifyClerkWebhookPayload(
    payload,
    {
      'svix-id': headerStore.get('svix-id'),
      'svix-timestamp': headerStore.get('svix-timestamp'),
      'svix-signature': headerStore.get('svix-signature'),
    },
    process.env.CLERK_WEBHOOK_SECRET,
  )

  if (!isClerkUserCreatedPayload(event)) {
    return NextResponse.json({ received: true, ignored: event.type })
  }

  const user = normalizeClerkUser(event)
  const result = await ensureUserAndFreeSubscription(user)

  return NextResponse.json({ received: true, ...result })
}
