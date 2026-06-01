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

## TASK-045C3 — Trang /products/[slug]: Chi tiết Sản phẩm
Status: ✅ COMPLETED

## TASK-045D1 — Admin Login + Middleware Auth
Status: ✅ COMPLETED

## TASK-045D2 — Admin Dashboard: Danh sách Items + Stats
Status: ✅ COMPLETED

## TASK-045D3 — Admin Form: Thêm / Sửa Item
Status: ✅ COMPLETED

### Da thuc hien
- Added POST method to /api/admin/items/route.ts: inserts new item, returns 201
- Created /api/admin/items/[id]/route.ts: PATCH handler updates item by UUID
- Rewrote admin/items/new/page.tsx: SSR with cookie auth check + ItemForm(mode="create")
- Rewrote admin/items/[id]/edit/page.tsx: SSR with cookie auth + Supabase fetch by id + ItemForm(mode="edit", item=data), notFound() if missing
- Created ItemForm shared component: all fields (title auto-slug, slug, URL, category Select, status Select, summary/description textareas, thumbnail URL, comma-separated tags, sort_order number, public/featured Switches), auto-generates slug from Vietnamese title (NFD normalize, đ→d), saves via fetch to API, redirects to /admin/items on success

### Buoc tiep theo
- TASK-045D4: Admin delete functionality
