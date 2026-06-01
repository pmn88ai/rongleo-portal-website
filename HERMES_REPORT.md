---HERMES-REPORT-START---
RUN_ID: run-20260601-2141-TASK-045D2
TASK_ID: TASK-045D2
STATUS: completed
COMMIT: a8eadd2

## Da thuc hien
- Updated admin/layout.tsx: added AdminHeader with nav breadcrumb + Thêm item button + LogoutButton, wrapped children in container mx-auto py-8
- Created src/components/admin/AdminHeader.tsx: breadcrumb (RongLeo / Admin), "Thêm item" button (Link to /admin/items/new), LogoutButton
- Created src/app/api/admin/items/route.ts: GET handler with cookie auth check, Supabase admin client (SUPABASE_SERVICE_KEY) fetching all portal_items ordered by sort_order (no RLS, includes private items)
- Rewrote src/app/admin/items/page.tsx: SSR with double auth (cookie check + redirect if not authenticated), fetches via service key, passes to AdminItemsClient
- Created src/components/admin/AdminItemsClient.tsx: 4 stat cards (Tổng/Public/Draft/Nổi bật), items table with sort_order, title+category, status badge, featured star (fill-primary), public/draft eye icons (emerald/muted), edit button per row, empty state
- All Button usages adapted to Base UI `render` prop
- Build verified: npm run build passes, /admin/items is dynamic (ƒ SSR)

## Files thay doi
- src/app/admin/layout.tsx - updated with AdminHeader
- src/components/admin/AdminHeader.tsx - new
- src/app/api/admin/items/route.ts - new
- src/app/admin/items/page.tsx - rewritten with SSR auth + Supabase
- src/components/admin/AdminItemsClient.tsx - new
- PROGRESS.md - updated

## Van de phat sinh
- None

## Technical debt
- /admin/items/page.tsx duplicates auth logic (cookie check + redirect) even though middleware already protects it. This is intentional as defense-in-depth for the SSR page.
- AdminItemsClient uses useState but never modifies items — could be a plain prop. Kept as useState for future client-side mutation support.

## Lesson de xuat cho Hermes Memory
- SSR pages that check cookies directly with `cookies()` from `next/headers` are automatically dynamic (ƒ) — no additional configuration needed
- For admin pages, using SUPABASE_SERVICE_KEY with `createClient` bypasses RLS, which is needed to see private items

## Buoc tiep theo cho operator
- Verify /admin/items shows all items after login
- Proceed to TASK-045D3: Admin create/edit item form
---HERMES-REPORT-END---
