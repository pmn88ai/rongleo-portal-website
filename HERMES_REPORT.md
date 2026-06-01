---HERMES-REPORT-START---
RUN_ID: run-20260601-2130-TASK-045A2
TASK_ID: TASK-045A2
STATUS: completed
COMMIT: 83b7dae

## Da thuc hien
- Created SQL migration file `supabase/migrations/001_create_portal_items.sql` with table definition, auto-update trigger, and RLS policies (public read + service_role full access)
- Updated `src/types/portal.ts`: replaced old Product/AdminItem types with PortalItem, ItemStatus, ItemCategory types, insert/update helpers, and const arrays for status/category options
- Replaced `src/data/seed.json`: from old 2-object sample to 9 real portal items (gia-pha, spatial, land viz, radar, ke-toan, land-viz, sale-assets, workflow-ai, dashboard-doanh-nghiep) across categories AI, GIS, BĐS, Dashboard, etc.
- Created `scripts/seed.ts`: uses `@supabase/supabase-js` admin client with `SUPABASE_SERVICE_KEY`, upserts seed.json by slug
- Installed `tsx` devDependency; added `"seed": "tsx scripts/seed.ts"` to package.json scripts
- Build verified: `npm run build` passes, no TypeScript errors

## Files thay doi
- supabase/migrations/001_create_portal_items.sql - new, SQL migration for portal_items table
- src/types/portal.ts - replaced old types with PortalItem schema matching the DB table
- src/data/seed.json - replaced with 9 real portal items
- scripts/seed.ts - new, seed script using tsx + Supabase admin client
- package.json - added "seed" script entry
- package-lock.json - updated (tsx dep)
- PROGRESS.md - updated with A2 status and next step

## Van de phat sinh
- None

## Technical debt
- seed.json is a flat array now (not nested under products/items), matching the upsert payload for portal_items table. The old format was from A1 template scaffolding — no longer needed.

## Lesson de xuat cho Hermes Memory
- seed.json structure must match the upsert payload (flat array of records), not nested by table name
- tsx is needed for running TypeScript scripts outside Next.js build pipeline — remember to add `"seed": "tsx scripts/seed.ts"` as a standard pattern

## Buoc tiep theo cho operator
- Run SQL migration `supabase/migrations/001_create_portal_items.sql` in Supabase SQL Editor
- Run `npm run seed` to populate 9 portal items (requires valid `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_KEY` in .env.local)
- Proceed to TASK-045A3: Setup UI layout shell (Header, Footer, responsive shell)
---HERMES-REPORT-END---
