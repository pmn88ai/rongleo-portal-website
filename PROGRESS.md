# Progress — RongLeo Portal

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

## TASK-045D4 — Admin Delete + Inline Toggles
Status: ✅ COMPLETED

---

## TASK-045E — Personal Brand Hub (2026-06-18) 🔄 IN PROGRESS

Mục tiêu: Biến rongleo.com từ product portal thành personal brand hub 4 tầng.
Định vị: Phạm Minh Nhật / RongLeo — Senior Land Development & Legal Manager.
Thông điệp lõi: "Dữ liệu, bản đồ, quy trình và kinh nghiệm thực địa → công cụ hành động."

### Sub-tasks

| Task | Mô tả | Status |
|------|-------|--------|
| TASK-045E1 | Header nav anchors (#toi-la-ai → #lien-he) + default theme luxury | ⏳ PENDING |
| TASK-045E2 | Seed 11 sản phẩm thật vào Supabase (xóa data mẫu cũ) | ⏳ PENDING |
| TASK-045F1 | TẦNG 1: HeroSection → Personal About (PMN, 15+ năm, 3 CTAs, tải CV) | ⏳ PENDING |
| TASK-045F2 | TẦNG 2: CapabilitiesSection → Capability Map 6 nhóm | ⏳ PENDING |
| TASK-045G1 | TẦNG 3: HomepageProductsSection (6 featured từ Supabase) | ⏳ PENDING |
| TASK-045G2 | Articles static data (articles.ts) + /thinking + /thinking/[slug] | ⏳ PENDING |
| TASK-045G3 | TẦNG 4: HomepageThinkingSection (3 bài nổi bật) | ⏳ PENDING |
| TASK-045H1 | Footer + ContactSection update (email thật, CTA rõ) | ⏳ PENDING |
| TASK-045H2 | Wire page.tsx + smooth scroll (task cuối, phụ thuộc tất cả trên) | ⏳ PENDING |

### Thứ tự chạy đề xuất
```
E1 → E2 → F1 → F2 → G1 (sau E2) → G2 → G3 (sau G2) → H1 → H2 (cuối cùng)
```

### Constraints
- Không phá admin/products
- Không đổi DB schema
- Không làm contact form
- Không làm blog CMS
- CV: `public/files/Pham-Minh-Nhat-CV.pdf` (operator đặt file thủ công)

### Files mới cần tạo
- `src/data/articles.ts`
- `src/components/portal/HomepageProductsSection.tsx`
- `src/components/portal/HomepageThinkingSection.tsx`
- `src/app/thinking/page.tsx`
- `src/app/thinking/[slug]/page.tsx`
- `public/files/` (folder, CV do operator đặt vào)

### Files cần sửa
- `src/components/layout/Header.tsx`
- `src/components/providers/ThemeProvider.tsx`
- `src/components/portal/HeroSection.tsx`
- `src/components/portal/CapabilitiesSection.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/portal/ContactSection.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/data/seed.json`
- `scripts/seed.ts`
