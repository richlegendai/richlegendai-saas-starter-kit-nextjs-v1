// Purpose: Runtime subscription helpers with idempotent user bootstrap behavior.
// Owner: template-database
// Last updated: 2026-04-29

import { eq } from 'drizzle-orm'
import { appSubscriptions, appUsers } from './schema'
import { getDb } from './client'
import type { NormalizedClerkUser } from '@/lib/auth/clerk-webhook'

export async function ensureUserAndFreeSubscription(user: NormalizedClerkUser) {
  const db = getDb()
  const existingUser = await db.query.appUsers.findFirst({
    where: eq(appUsers.clerkUserId, user.clerkUserId),
  })

  if (!existingUser) {
    await db.insert(appUsers).values({
      clerkUserId: user.clerkUserId,
      email: user.email,
      name: user.name,
    })
  }

  const existingSubscription = await db.query.appSubscriptions.findFirst({
    where: eq(appSubscriptions.clerkUserId, user.clerkUserId),
  })

  if (!existingSubscription) {
    await db.insert(appSubscriptions).values({
      clerkUserId: user.clerkUserId,
      email: user.email,
      planType: 'free',
      status: 'active',
    })
  }

  return {
    userCreated: !existingUser,
    subscriptionCreated: !existingSubscription,
  }
}
