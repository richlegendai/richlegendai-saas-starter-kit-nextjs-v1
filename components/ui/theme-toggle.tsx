// Purpose: Header control for switching between light and dark color modes.
// Owner: template-design
// Last updated: 2026-04-29

'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'

function subscribe() {
  return () => {}
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)

  const isDark = mounted && resolvedTheme === 'dark'
  const nextTheme = isDark ? 'light' : 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? '라이트모드로 전환' : '다크모드로 전환'}
      title={isDark ? '라이트모드' : '다크모드'}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border bg-background text-foreground transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60"
      disabled={!mounted}
      onClick={() => setTheme(nextTheme)}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
