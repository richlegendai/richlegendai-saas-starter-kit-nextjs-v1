// Purpose: Runtime subscription helpers with idempotent user bootstrap behavior.
// Owner: template-database
// Last updated: 2026-04-29

import { appSubscriptions, appUsers } from './schema'
import { getDb } from './client'
import type { NormalizedClerkUser } from '@/lib/auth/clerk-webhook'

export async function ensureUserAndFreeSubscription(user: NormalizedClerkUser) {
  const db = getDb()

  const [userResult, subscriptionResult] = await Promise.all([
    db.insert(appUsers)
      .values({ clerkUserId: user.clerkUserId, email: user.email, name: user.name })
      .onConflictDoNothing({ target: appUsers.clerkUserId })
      .returning({ id: appUsers.idx }),
    db.insert(appSubscriptions)
      .values({ clerkUserId: user.clerkUserId, email: user.email, planType: 'free', status: 'active' })
      .onConflictDoNothing({ target: appSubscriptions.clerkUserId })
      .returning({ id: appSubscriptions.idx }),
  ])

  return {
    userCreated: userResult.length > 0,
    subscriptionCreated: subscriptionResult.length > 0,
  }
}
