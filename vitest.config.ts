// Purpose: Unit test configuration for template helpers.
// Owner: template-quality
// Last updated: 2026-04-29

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['lib/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'json-summary'],
    },
  },
})
