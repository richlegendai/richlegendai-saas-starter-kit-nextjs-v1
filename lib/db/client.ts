// Purpose: Lazy Drizzle database client for runtime-only database access.
// Owner: template-database
// Last updated: 2026-04-29

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

let cachedDb: ReturnType<typeof drizzle<typeof schema>> | null = null

export function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not configured')
  }

  if (!cachedDb) {
    const client = postgres(process.env.DATABASE_URL, {
      max: 1,
      prepare: false,
    })
    cachedDb = drizzle(client, { schema })
  }

  return cachedDb
}
