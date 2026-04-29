#!/usr/bin/env node
/*
 * Purpose: Lightweight public-repo secret scanner for obvious leaked credentials.
 * Owner: template-security
 * Last updated: 2026-04-29
 */

import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const ignoredDirs = new Set(['node_modules', '.next', '.git', '.vercel', '.omx', '.omc', 'coverage'])
const ignoredFiles = new Set(['.env.example', '.env.local.example', 'pnpm-lock.yaml'])
const privateKeyPattern = [
  '-----BEGIN ',
  '(RSA |EC |OPENSSH |)?',
  'PRIVATE KEY-----',
].join('')
const patterns = [
  { name: 'private key', regex: new RegExp(privateKeyPattern) },
  { name: 'live secret key', regex: /\b(sk|rk|pk)_live_[A-Za-z0-9_]{16,}\b/ },
  { name: 'Clerk secret', regex: /\bsk_(test|live)_[A-Za-z0-9]{20,}\b/ },
  { name: 'Polar token', regex: /\bpolar_(oat|pat)_[A-Za-z0-9_]{20,}\b/ },
  { name: 'Postgres URL with password', regex: /postgres(ql)?:\/\/[^:\s]+:[^@\s]+@/ },
  { name: 'Slack webhook', regex: /https:\/\/hooks\.slack\.com\/services\/[A-Za-z0-9/]+/ },
]

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    const relative = path.relative(root, fullPath)

    if (entry.isDirectory()) {
      if (ignoredDirs.has(entry.name)) {
        return []
      }
      return walk(fullPath)
    }

    if (ignoredFiles.has(entry.name) || entry.name === '.DS_Store') {
      return []
    }

    if (/\.(png|jpg|jpeg|gif|ico|webp|pdf|woff2?)$/i.test(entry.name)) {
      return []
    }

    return [relative]
  })
}

const findings = []

for (const file of walk(root)) {
  const absolute = path.join(root, file)
  const content = fs.readFileSync(absolute, 'utf8')

  for (const pattern of patterns) {
    if (pattern.regex.test(content)) {
      findings.push(`${file}: possible ${pattern.name}`)
    }
  }
}

if (findings.length > 0) {
  console.error('Secret scan failed:')
  for (const finding of findings) {
    console.error(`- ${finding}`)
  }
  process.exit(1)
}

console.log('Secret scan passed.')
