// Purpose: Create Polar checkout sessions when billing configuration is present.
// Owner: template-billing
// Last updated: 2026-04-29

import { NextResponse } from 'next/server'
import { requireEnv } from '@/lib/env'
import { getBaseUrl } from '@/lib/site'
import { getPolarClient } from '@/lib/billing/polar'

export async function GET() {
  const env = requireEnv(['POLAR_ACCESS_TOKEN', 'NEXT_PUBLIC_POLAR_PRODUCT_ID_PRO'])

  if (!env.ok) {
    return NextResponse.json(
      {
        error: 'Polar checkout is not configured',
        missing: env.missing,
      },
      { status: 503 },
    )
  }

  const polar = getPolarClient()
  const checkout = await polar.checkouts.create({
    products: [process.env.NEXT_PUBLIC_POLAR_PRODUCT_ID_PRO!],
    successUrl: `${getBaseUrl()}/en/checkout/success?checkout_id={CHECKOUT_ID}`,
  })

  return NextResponse.redirect(checkout.url)
}
