# kazi-value-rw

Temporary **Coming Soon** page for KAZI (https://kazi.value.rw).
The page shows only the supplied artwork (`public/kazi-coming-soon.webp`).
Standalone Next.js 14 project - no Tailwind, no extra dependencies.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Replace the artwork
Overwrite `public/kazi-coming-soon.webp` (source: 1672x941). If the new
artwork has different proportions, re-tune the crop values in
`app/globals.css` (section "Portrait screens").

## Deploy
Import this repo in Vercel (Framework: Next.js, all defaults).
Do NOT attach `kazi.value.rw` until the preview has been approved.

## DNS rollback record (old hosting, recorded 2026-09-20)
| Host | Type | Value |
|------|------|-------|
| kazi | A    | 66.235.200.147 (host77.ipowerweb.com) |

If the new site has a problem after cutover, restore this A record for
`kazi` (and remove the Vercel CNAME) to bring the old site back.
Only the `kazi` record is ever touched - never the root, www, logistics,
training, MX, SPF, DKIM, DMARC or verification TXT records.
