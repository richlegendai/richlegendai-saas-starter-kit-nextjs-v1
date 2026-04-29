// Purpose: Verify Polar helper behavior.
// Owner: template-billing
// Last updated: 2026-04-29

import crypto from 'node:crypto'
import { describe, expect, it } from 'vitest'
import { resolvePolarServer, verifyPolarWebhookSignature } from './polar'

describe('polar helpers', () => {
  it('defaults to production unless sandbox is explicit', () => {
    expect(resolvePolarServer(undefined)).toBe('production')
    expect(resolvePolarServer('sandbox')).toBe('sandbox')
  })

  it('validates template webhook signatures with timing-safe comparison', () => {
    const payload = JSON.stringify({ type: 'subscription.active' })
    const signature = crypto.createHmac('sha256', 'secret').update(payload).digest('hex')

    expect(verifyPolarWebhookSignature(payload, signature, 'secret')).toBe(true)
    expect(verifyPolarWebhookSignature(payload, signature, 'wrong')).toBe(false)
  })
})
