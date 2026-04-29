// Purpose: Verify Clerk webhook normalization behavior.
// Owner: template-auth
// Last updated: 2026-04-29

import { describe, expect, it } from 'vitest'
import { normalizeClerkUser } from './clerk-webhook'

describe('normalizeClerkUser', () => {
  it('normalizes Clerk user.created payloads', () => {
    expect(
      normalizeClerkUser({
        type: 'user.created',
        data: {
          id: 'user_123',
          email_addresses: [{ email_address: 'founder@example.com' }],
          first_name: 'Ada',
          last_name: 'Lovelace',
        },
      }),
    ).toEqual({
      clerkUserId: 'user_123',
      email: 'founder@example.com',
      name: 'Ada Lovelace',
    })
  })

  it('rejects incomplete payloads', () => {
    expect(() =>
      normalizeClerkUser({
        type: 'user.created',
        data: {
          id: 'user_123',
          email_addresses: [],
        },
      }),
    ).toThrow('missing id or primary email')
  })
})
