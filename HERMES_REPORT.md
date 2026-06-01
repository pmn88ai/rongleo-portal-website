---HERMES-REPORT-START---
RUN_ID: run-20260601-2142-TASK-045D3
TASK_ID: TASK-045D3
STATUS: completed
COMMIT: 80311b4

## Da thuc hien
- Added POST handler to src/app/api/admin/items/route.ts: auth check, insert body to portal_items, select().single() return, 201 on success, 400 on error
- Created src/app/api/admin/items/[id]/route.ts: PATCH handler with params.id, auth check, update by id, select().single() return
- Rewrote src/app/admin/items/new/page.tsx: SSR with cookie auth check + redirect, renders ItemForm(mode="create")
- Rewrote src/app/admin/items/[id]/edit/page.tsx: SSR with cookie auth + Supabase service-role fetch by id, notFound() if missing, renders ItemForm(mode="edit", item)
- Created src/components/admin/ItemForm.tsx: shared form component with:
  - Title + auto-slug generation (NFD normalize, đ→d, strip non-alphanumeric, replace spaces with hyphens) — only in create mode
  - Slug input (manual override)
  - URL, thumbnail URL inputs
  - Category Select (from ITEM_CATEGORY_OPTIONS)
  - Status Select (from ITEM_STATUS_OPTIONS)
  - Summary + Description textareas
  - Tags comma-separated input → parsed to array on submit
  - Sort order number input
  - Public + Featured Switch toggles
  - Error display, loading state
  - Submit calls POST or PATCH API, redirects to /admin/items
- Build verified: npm run build passes

## Files thay doi
- src/app/api/admin/items/route.ts - added POST method
- src/app/api/admin/items/[id]/route.ts - new PATCH method
- src/app/admin/items/new/page.tsx - rewritten with SSR + ItemForm
- src/app/admin/items/[id]/edit/page.tsx - rewritten with SSR + ItemForm
- src/components/admin/ItemForm.tsx - new
- PROGRESS.md - updated

## Van de phat sinh
- None

## Technical debt
- Auto-slug generation uses simple Unicode normalization — might not handle all Vietnamese edge cases (e.g., "Đà Nẵng" → "da-nang" is correct, but compound characters may need more robust handling)
- No image upload — thumbnail_url is manually entered. Future task could add upload endpoint.

## Lesson de xuat cho Hermes Memory
- Vietnamese slug generation requires `.normalize('NFD')` then `replace(/[\u0300-\u036f]/g, '')` to strip diacritics, plus `đ/Đ → d` replacement
- Shared ItemForm with `mode` prop avoids duplicating form logic across create/edit routes

## Buoc tiep theo cho operator
- Test creating a new item via /admin/items/new
- Test editing an existing item via /admin/items/[id]/edit
- Proceed to TASK-045D4: Admin delete functionality
---HERMES-REPORT-END---
