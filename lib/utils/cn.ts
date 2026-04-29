// Purpose: Tailwind class name merge helper.
// Owner: template-design
// Last updated: 2026-04-29

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
