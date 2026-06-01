# TASK-045D4 — Admin Delete + Inline Toggles

## Changes

### `src/app/api/admin/items/[id]/route.ts`
- Added `DELETE` handler — checks auth, deletes by UUID, returns `{ ok: true }`

### `src/components/admin/AdminItemsClient.tsx`
- Rewrote from static to interactive:
  - **Inline toggle buttons** for `featured` (Star) and `public` (Eye/EyeOff) — optimistic update via `setItems` first, rollback on failure
  - **Delete button** (Trash2) with native `confirm()` dialog — optimistic removal, stats auto-update
  - Stats cards (`total`, `public`, `draft`, `featured`) computed from live `items` state (reflects deletes immediately)
  - Shows item count in header

## Build
✅ Clean build — all routes compile, 0 errors/warnings (apart from known middleware deprecation notice).

## Next
- TASK-045E1: User-facing features or polish per PROGRESS.md chain.
