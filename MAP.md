# Sơ đồ dự án — RongLeo Portal

```
rongleo-portal/
│
├── .env.example              # Mẫu biến môi trường
├── .env.local                # Biến môi trường thật (gitignore)
│
├── package.json              # Dependencies & scripts
├── next.config.ts            # Next.js config
├── tsconfig.json             # TypeScript config
├── postcss.config.mjs        # PostCSS + Tailwind v4
├── eslint.config.mjs         # ESLint flat config
├── components.json           # shadcn/ui config
│
├── supabase/
│   └── migrations/
│       └── 001_create_portal_items.sql   # Schema: bảng portal_items
│
├── scripts/
│   └── seed.ts               # Seed 13 sản phẩm thật (chạy: npm run seed)
│
├── public/
│   └── files/
│       └── Pham-Minh-Nhat-CV.pdf         # CV — operator đặt thủ công
│
└── src/
    │
    ├── middleware.ts          # Edge Runtime — bảo vệ /admin/* (trừ /admin)
    │
    ├── app/                  # App Router (Next.js 16)
    │   ├── globals.css       # 3 theme (light/dark/luxury) + scroll-behavior: smooth
    │   ├── layout.tsx        # Root layout: fonts, ThemeProvider, Header, Footer
    │   ├── page.tsx          # Trang chủ: 4 tầng (Hero → Capabilities → Products → Thinking → Contact)
    │   │
    │   ├── products/
    │   │   ├── page.tsx      # /products — Grid sản phẩm + lọc danh mục (SSR)
    │   │   └── [slug]/
    │   │       └── page.tsx  # /products/:slug — Chi tiết sản phẩm (SSR)
    │   │
    │   ├── thinking/
    │   │   ├── page.tsx      # /thinking — Danh sách bài viết (static data)
    │   │   └── [slug]/
    │   │       └── page.tsx  # /thinking/:slug — Chi tiết bài viết (generateStaticParams)
    │   │
    │   ├── admin/
    │   │   ├── page.tsx      # /admin — Form đăng nhập
    │   │   ├── layout.tsx    # Admin layout: AdminHeader (breadcrumb + logout)
    │   │   └── items/
    │   │       ├── page.tsx            # /admin/items — Dashboard (stats + table)
    │   │       ├── new/
    │   │       │   └── page.tsx        # /admin/items/new — Form tạo item
    │   │       └── [id]/
    │   │           └── edit/
    │   │               └── page.tsx    # /admin/items/:id/edit — Form sửa item
    │   │
    │   └── api/
    │       └── admin/
    │           ├── login/route.ts      # POST — xác thực, set cookie
    │           ├── logout/route.ts     # POST — clear cookie
    │           └── items/
    │               ├── route.ts        # GET (list) + POST (create)
    │               └── [id]/route.ts   # PATCH (update) + DELETE
    │
    ├── components/
    │   ├── ui/               # shadcn/ui components (Button, Badge, Select, …)
    │   │
    │   ├── layout/           # Layout chung
    │   │   ├── Header.tsx           # Sticky header: logo, nav anchors, ThemeToggle, CTA
    │   │   ├── MobileMenu.tsx       # Drawer menu mobile (slide từ trên)
    │   │   ├── Footer.tsx           # Footer 3 cột: brand / điều hướng / lĩnh vực
    │   │   └── ThemeToggle.tsx      # Nút chuyển theme (light/dark/luxury)
    │   │
    │   ├── providers/
    │   │   └── ThemeProvider.tsx     # next-themes: defaultTheme="luxury", data-theme attribute
    │   │
    │   ├── portal/           # UI trang public
    │   │   ├── HeroSection.tsx            # TẦNG 1 — PMN hero: tên, tag, lead text, 3 CTA
    │   │   ├── CapabilitiesSection.tsx    # TẦNG 2 — Capability Map 6 nhóm năng lực
    │   │   ├── HomepageProductsSection.tsx # TẦNG 3 — 6 sản phẩm featured từ Supabase
    │   │   ├── HomepageThinkingSection.tsx # TẦNG 4 — 3 bài viết nổi bật từ articles.ts
    │   │   ├── ContactSection.tsx         # TẦNG 5 — CTA liên hệ + email + Tải CV
    │   │   ├── CategoryFilter.tsx         # Lọc danh mục (client component)
    │   │   ├── ProductCard.tsx            # Card sản phẩm (status, thumbnail, tags)
    │   │   ├── ProductsClient.tsx         # Client wrapper cho /products
    │   │   └── ProductDetail.tsx          # Chi tiết sản phẩm
    │   │
    │   └── admin/            # UI trang admin
    │       ├── AdminHeader.tsx       # Thanh header admin (breadcrumb + actions)
    │       ├── AdminLoginForm.tsx    # Form đăng nhập (error/loading)
    │       ├── AdminItemsClient.tsx  # Dashboard: stats + table + inline toggles
    │       ├── ItemForm.tsx          # Form thêm/sửa (auto-slug, Switches)
    │       └── LogoutButton.tsx      # Nút đăng xuất
    │
    ├── data/
    │   ├── seed.json         # 13 sản phẩm thật của RongLeo
    │   └── articles.ts       # 6 bài viết tĩnh (Article type + helpers)
    │
    ├── lib/
    │   ├── supabase/
    │   │   ├── client.ts    # Supabase browser client (anon key)
    │   │   └── server.ts    # Supabase server client (anon key + cookies)
    │   └── utils.ts         # cn() helper (tailwind-merge + clsx)
    │
    └── types/
        └── portal.ts        # PortalItem, ItemStatus, ItemCategory, PortalItemInsert
```

## Ghi chú kiến trúc

- **4 tầng homepage**: `id="toi-la-ai"` → `id="nang-luc"` → `id="san-pham"` → `id="bai-viet"` → `id="lien-he"`. Nav dùng anchor links.
- **3 Theme**: CSS variables trong `globals.css`, mỗi theme định nghĩa bảng màu HSL riêng. `next-themes` quản lý class `data-theme` trên `<html>`. Default: `luxury`.
- **Middleware**: Chạy trên Edge Runtime, không import Node.js modules. Chỉ kiểm tra cookie `admin_session`.
- **Admin API**: Dùng `SUPABASE_SERVICE_KEY` để bypass RLS. Xác thực bằng `checkAuth()` đọc cookie từ header.
- **Auto-slug**: Chuẩn hoá tiếng Việt (NFD + `đ→d` + loại ký tự đặc biệt) trong ItemForm.
- **Optimistic UI**: AdminItemsClient cập nhật state ngay lập tức, rollback nếu API fail.
- **Articles**: Static data trong `src/data/articles.ts` — không cần DB, không cần admin. Thêm bài = thêm object vào array.
- **Button render prop**: Tất cả `<Button render={<a>}>` phải có `nativeButton={false}` (Base UI requirement).
- **CV**: Đặt file tại `public/files/Pham-Minh-Nhat-CV.pdf` — link trỏ `/files/Pham-Minh-Nhat-CV.pdf`.
- **Supabase products**: Homepage query `featured=true AND public=true LIMIT 6`. Trang `/products` query `public=true` toàn bộ.
