// Purpose: Clerk webhook parsing and idempotency helpers.
// Owner: template-auth
// Last updated: 2026-04-29

import { Webhook } from 'svix'

export type ClerkWebhookHeaders = {
  'svix-id': string | null
  'svix-timestamp': string | null
  'svix-signature': string | null
}

export type NormalizedClerkUser = {
  clerkUserId: string
  email: string
  name: string | null
}

type ClerkUserCreatedPayload = {
  type: 'user.created'
  data: {
    id: string
    email_addresses?: Array<{ email_address?: string }>
    first_name?: string | null
    last_name?: string | null
    username?: string | null
  }
}

export function verifyClerkWebhookPayload(payload: string, headers: ClerkWebhookHeaders, secret: string) {
  const missingHeaders = Object.entries(headers)
    .filter(([, value]) => !value)
    .map(([name]) => name)

  if (missingHeaders.length > 0) {
    throw new Error(`Missing Clerk webhook headers: ${missingHeaders.join(', ')}`)
  }

  const webhook = new Webhook(secret)
  return webhook.verify(payload, {
    'svix-id': headers['svix-id']!,
    'svix-timestamp': headers['svix-timestamp']!,
    'svix-signature': headers['svix-signature']!,
  }) as ClerkUserCreatedPayload | { type: string; data: unknown }
}

export function normalizeClerkUser(payload: ClerkUserCreatedPayload): NormalizedClerkUser {
  const email = payload.data.email_addresses?.[0]?.email_address

  if (!payload.data.id || !email) {
    throw new Error('Clerk user.created payload is missing id or primary email')
  }

  const name = [payload.data.first_name, payload.data.last_name].filter(Boolean).join(' ').trim()

  return {
    clerkUserId: payload.data.id,
    email,
    name: name || payload.data.username || null,
  }
}

export function isClerkUserCreatedPayload(
  payload: ClerkUserCreatedPayload | { type: string; data: unknown },
): payload is ClerkUserCreatedPayload {
  return payload.type === 'user.created'
}
