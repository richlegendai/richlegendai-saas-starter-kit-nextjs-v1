// Purpose: Admin route metadata and shell.
// Owner: template-admin
// Last updated: 2026-04-29

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-muted/30">{children}</div>
}
