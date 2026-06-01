# Progress

## TASK-045A1 — Init Project + Supabase Client + .env
Status: ✅ COMPLETED

## TASK-045A2 — Supabase Schema + TypeScript Types + Seed Data
Status: ✅ COMPLETED

### Da thuc hien
- Created SQL migration for `portal_items` table (supabase/migrations/001_create_portal_items.sql)
- Updated `src/types/portal.ts` with PortalItem, ItemStatus, ItemCategory types and constants
- Replaced `src/data/seed.json` with 9 portal items matching new schema
- Created `scripts/seed.ts` using tsx runner and Supabase admin client
- Installed `tsx` devDependency and added `seed` script to package.json
- Build verified successful

### Buoc tiep theo
- TASK-045A3: Setup UI layout shell (Header, Footer, responsive shell)
