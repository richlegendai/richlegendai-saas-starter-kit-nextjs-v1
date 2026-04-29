// Purpose: Shared link styled as a command button.
// Owner: template-design
// Last updated: 2026-04-29

import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

type ButtonLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
}

export function ButtonLink({ href, children, className, variant = 'primary' }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        'inline-flex h-10 items-center gap-2 rounded-md px-4 text-sm font-medium transition',
        variant === 'primary'
          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
          : 'border bg-background text-foreground hover:bg-muted',
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
