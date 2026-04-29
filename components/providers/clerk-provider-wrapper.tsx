// Purpose: Render ClerkProvider only when public Clerk configuration is present.
// Owner: template-auth
// Last updated: 2026-04-29

'use client'

import { ClerkProvider } from '@clerk/nextjs'

export function ClerkProviderWrapper({ children }: { children: React.ReactNode }) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  if (!publishableKey) {
    return <>{children}</>
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      {children}
    </ClerkProvider>
  )
}
