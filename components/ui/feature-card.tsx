// Purpose: Reusable feature card for marketing pages.
// Owner: template-design
// Last updated: 2026-04-29

import type { LucideIcon } from 'lucide-react'

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <article className="rounded-lg border bg-background p-5">
      <Icon className="h-5 w-5 text-primary" />
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
    </article>
  )
}
