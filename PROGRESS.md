# Progress

## TASK-045A1 — Init Project + Supabase Client + .env
Status: ✅ COMPLETED

## TASK-045A2 — Supabase Schema + TypeScript Types + Seed Data
Status: ✅ COMPLETED

## TASK-045B1 — Layout Shell: Header + Footer + Responsive Menu
Status: ✅ COMPLETED

## TASK-045B2 — Theme System: 3 Chế độ + CSS Variables
Status: ✅ COMPLETED

## TASK-045C1 — Trang chủ: Hero + 4 Khối Năng Lực
Status: ✅ COMPLETED

## TASK-045C2 — Trang /products: Grid Sản phẩm + Filter
Status: ✅ COMPLETED

### Da thuc hien
- Rewrote products/page.tsx as SSR server component: fetches from Supabase (public portal_items, ordered by sort_order), passes data to client component, handles error state
- Created ProductsClient: category filter state, separates featured/regular items, responsive grid (1-col mobile / 2-col tablet / 3-col desktop), empty state
- Created ProductCard: thumbnail with Image/placeholder fallback, status badge with color mapping, category label, title, summary, tags (max 3), detail link + external link button
- Created CategoryFilter: horizontal scrollable pill buttons, active highlight
- All Button usages adapted to Base UI `render` prop

### Buoc tiep theo
- TASK-045D1: Admin layout and login page
