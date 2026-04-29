// Purpose: Polar webhook endpoint scaffold with explicit signature guard.
// Owner: template-billing
// Last updated: 2026-04-29

import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { verifyPolarWebhookSignature } from '@/lib/billing/polar'

export async function POST(request: Request) {
  if (!process.env.POLAR_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'POLAR_WEBHOOK_SECRET is not configured' }, { status: 503 })
  }

  const payload = await request.text()
  const headerStore = await headers()
  const signature = headerStore.get('webhook-signature') || headerStore.get('polar-signature')

  if (!verifyPolarWebhookSignature(payload, signature, process.env.POLAR_WEBHOOK_SECRET)) {
    return NextResponse.json({ error: 'Invalid Polar webhook signature' }, { status: 401 })
  }

  const event = JSON.parse(payload) as { type?: string }

  return NextResponse.json({
    received: true,
    type: event.type ?? 'unknown',
    note: 'Persist subscription and payment changes for this event type in lib/db.',
  })
}
