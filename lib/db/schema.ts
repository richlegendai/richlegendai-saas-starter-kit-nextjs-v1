// Purpose: Brand-neutral Drizzle schema for SaaS users, subscriptions, payments, overrides, and blog content.
// Owner: template-database
// Last updated: 2026-04-29

import { relations } from 'drizzle-orm'
import {
  boolean,
  decimal,
  index,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from 'drizzle-orm/pg-core'

export const appUsers = pgTable(
  'app_users',
  {
    idx: serial('idx').primaryKey(),
    id: uuid('id').defaultRandom().notNull().unique(),
    clerkUserId: text('clerk_user_id').notNull(),
    email: text('email').notNull(),
    name: text('name'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
    deletedAt: timestamp('deleted_at', { withTimezone: true }),
  },
  (table) => [
    uniqueIndex('ux_app_users_clerk_active').on(table.clerkUserId),
    index('idx_app_users_email').on(table.email),
  ],
)

export const appSubscriptions = pgTable(
  'app_subscriptions',
  {
    idx: serial('idx').primaryKey(),
    id: uuid('id').defaultRandom().notNull().unique(),
    clerkUserId: text('clerk_user_id').notNull(),
    email: text('email'),
    planType: text('plan_type').notNull().$type<'free' | 'pro'>().default('free'),
    status: text('status').notNull().$type<'active' | 'canceled' | 'expired'>().default('active'),
    polarSubscriptionId: text('polar_subscription_id'),
    polarProductId: text('polar_product_id'),
    currentPeriodStart: timestamp('current_period_start', { withTimezone: true }),
    currentPeriodEnd: timestamp('current_period_end', { withTimezone: true }),
    cancelAtPeriodEnd: boolean('cancel_at_period_end').default(false).notNull(),
    freeUsageCount: integer('free_usage_count').default(0).notNull(),
    totalUsageCount: integer('total_usage_count').default(0).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
    deletedAt: timestamp('deleted_at', { withTimezone: true }),
  },
  (table) => [
    uniqueIndex('ux_app_subscriptions_clerk_active').on(table.clerkUserId),
    index('idx_app_subscriptions_status').on(table.status),
  ],
)

export const appPayments = pgTable(
  'app_payments',
  {
    idx: serial('idx').primaryKey(),
    id: uuid('id').defaultRandom().notNull().unique(),
    clerkUserId: text('clerk_user_id').notNull(),
    email: text('email'),
    polarOrderId: text('polar_order_id'),
    polarSubscriptionId: text('polar_subscription_id'),
    amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
    currency: text('currency').notNull().default('usd'),
    status: text('status').notNull().$type<'succeeded' | 'failed' | 'pending' | 'refunded'>(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    deletedAt: timestamp('deleted_at', { withTimezone: true }),
  },
  (table) => [
    uniqueIndex('ux_app_payments_order').on(table.polarOrderId),
    index('idx_app_payments_user_created').on(table.clerkUserId, table.createdAt),
  ],
)

export const appSubscriptionOverrides = pgTable(
  'app_subscription_overrides',
  {
    idx: serial('idx').primaryKey(),
    id: uuid('id').defaultRandom().notNull().unique(),
    normalizedEmail: text('normalized_email').notNull(),
    clerkUserId: text('clerk_user_id'),
    startsAt: timestamp('starts_at', { withTimezone: true }).notNull(),
    endsAt: timestamp('ends_at', { withTimezone: true }).notNull(),
    revokedAt: timestamp('revoked_at', { withTimezone: true }),
    adminNote: text('admin_note'),
    createdBy: text('created_by').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index('idx_app_overrides_email').on(table.normalizedEmail),
    index('idx_app_overrides_clerk').on(table.clerkUserId),
  ],
)

export const appBlogPosts = pgTable(
  'app_blog_posts',
  {
    idx: serial('idx').primaryKey(),
    id: uuid('id').defaultRandom().notNull().unique(),
    slug: text('slug').notNull().unique(),
    locale: text('locale').notNull(),
    title: text('title').notNull(),
    description: text('description').notNull(),
    bodyMarkdown: text('body_markdown').notNull(),
    status: text('status').notNull().$type<'draft' | 'published' | 'archived'>().default('draft'),
    metadata: jsonb('metadata').$type<Record<string, unknown>>(),
    publishedAt: timestamp('published_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
    deletedAt: timestamp('deleted_at', { withTimezone: true }),
  },
  (table) => [
    uniqueIndex('ux_app_blog_locale_slug').on(table.locale, table.slug),
    index('idx_app_blog_status_published').on(table.status, table.publishedAt),
  ],
)

export const appUsersRelations = relations(appUsers, ({ many }) => ({
  subscriptions: many(appSubscriptions),
  payments: many(appPayments),
}))
