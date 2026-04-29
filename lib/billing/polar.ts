// Purpose: Polar checkout and webhook helpers.
// Owner: template-billing
// Last updated: 2026-04-29

import crypto from 'node:crypto'
import { Polar } from '@polar-sh/sdk'

export type PolarServer = 'sandbox' | 'production'

export function resolvePolarServer(value = process.env.POLAR_SERVER): PolarServer {
  return value === 'sandbox' ? 'sandbox' : 'production'
}

export function getPolarClient() {
  if (!process.env.POLAR_ACCESS_TOKEN) {
    throw new Error('POLAR_ACCESS_TOKEN is not configured')
  }

  return new Polar({
    accessToken: process.env.POLAR_ACCESS_TOKEN,
    server: resolvePolarServer(),
  })
}

export function verifyPolarWebhookSignature(payload: string, signature: string | null, secret: string) {
  if (!signature) {
    return false
  }

  const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex')
  const a = Buffer.from(signature)
  const b = Buffer.from(expected)

  return a.length === b.length && crypto.timingSafeEqual(a, b)
}
