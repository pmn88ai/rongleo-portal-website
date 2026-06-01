---HERMES-REPORT-START---
RUN_ID: run-20260601-2138-TASK-045C3
TASK_ID: TASK-045C3
STATUS: completed
COMMIT: 23976d0

## Da thuc hien
- Rewrote src/app/products/[slug]/page.tsx: generateMetadata fetches title+summary for SEO, page fetches full item by slug + public=true, calls notFound() on error/missing
- Created src/components/portal/ProductDetail.tsx: client component with Framer Motion fade-in, back button (Link to /products), thumbnail Image with placeholder, category + status badge (color-coded), title, summary, tag list with Tag icon, description in card, conditional CTA (url → external link button, no url → mailto button), secondary "Xem thêm sản phẩm" link
- Created src/app/products/[slug]/not-found.tsx: custom 404 for invalid slugs with "Không tìm thấy sản phẩm" message and back-to-list button
- All Button usages adapted to Base UI `render` prop
- Build verified: npm run build passes

## Files thay doi
- src/app/products/[slug]/page.tsx - rewritten with SSR, generateMetadata, Supabase fetch
- src/components/portal/ProductDetail.tsx - new
- src/app/products/[slug]/not-found.tsx - new
- PROGRESS.md - updated

## Van de phat sinh
- None

## Technical debt
- `STATUS_COLORS` is duplicated between ProductCard and ProductDetail. Should be extracted to a shared constants file in future.

## Lesson de xuat cho Hermes Memory
- `generateMetadata` in Next.js App Router can use async Supabase queries per-page — each page generates its own metadata without layout conflicts
- Custom `not-found.tsx` in a route group `[slug]/` only applies to that dynamic segment, not the parent /products route

## Buoc tiep theo cho operator
- Verify `/products/gia-pha` and `/products/non-existent-slug` (should show 404)
- Proceed to TASK-045D1: Admin layout and login page
---HERMES-REPORT-END---
