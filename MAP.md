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
│   └── seed.ts               # Seed sản phẩm vào Supabase (chạy: npm run seed)
│
├── public/
│   ├── files/
│   │   ├── avatar.jpg                 # Ảnh chân dung — operator đặt thủ công
│   │   ├── hero-bg.jpg                # Ảnh nền Hero section — operator đặt thủ công
│   │   ├── CV_PhamMinhNhat.html       # CV dạng HTML — operator đặt thủ công
│   │   └── Pham-Minh-Nhat-CV.pdf     # CV dạng PDF — operator đặt thủ công (optional)
│   └── screenshots/
│       ├── rongleo-company-os.jpg
│       ├── rongleo-spatial.jpg
│       ├── rongleo-language-companion.jpg
│       ├── rongleo-sale-assets.jpg
│       ├── rongleo-media-research-hub.jpg
│       ├── rongleo-weather-economy.jpg
│       ├── rongleo-accountant.jpg
│       ├── rongleo-mindscope.jpg
│       ├── rongleo-radar-datalake.jpg
│       ├── rongleo-kids.jpg
│       ├── phuonglong-flower.jpg
│       └── rongleo-land.jpg
│
└── src/
    │
    ├── middleware.ts          # Edge Runtime — bảo vệ /admin/* (trừ /admin)
    │
    ├── app/                  # App Router (Next.js 16)
    │   ├── globals.css       # 3 theme (light/dark/luxury) + scroll-behavior: smooth
    │   ├── layout.tsx        # Root layout: fonts, ThemeProvider, Header, Footer
    │   ├── page.tsx          # Trang chủ: 5 tầng (Hero → Capabilities → Products → Thinking → Contact)
    │   │
    │   ├── products/
    │   │   ├── page.tsx      # /products — Grid sản phẩm + lọc danh mục (SSR + static fallback)
    │   │   └── [slug]/
    │   │       ├── page.tsx      # /products/:slug — Chi tiết sản phẩm (SSR)
    │   │       └── not-found.tsx # 404 khi slug không tồn tại
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
    │   │   └── ThemeToggle.tsx      # Nút chuyển theme — dùng mounted state tránh hydration mismatch
    │   │
    │   ├── providers/
    │   │   └── ThemeProvider.tsx     # next-themes: defaultTheme="luxury", data-theme attribute
    │   │
    │   ├── portal/           # UI trang public
    │   │   ├── HeroSection.tsx            # TẦNG 1 — hero-bg.jpg nền + avatar.jpg cột phải + 3 CTA
    │   │   ├── CapabilitiesSection.tsx    # TẦNG 2 — Capability Map 6 nhóm năng lực
    │   │   ├── HomepageProductsSection.tsx # TẦNG 3 — 6 featured từ Supabase, fallback FEATURED_PRODUCTS
    │   │   ├── HomepageThinkingSection.tsx # TẦNG 4 — 3 bài viết nổi bật từ articles.ts
    │   │   ├── ContactSection.tsx         # TẦNG 5 — CTA liên hệ + email + Xem CV (HTML)
    │   │   ├── CategoryFilter.tsx         # Lọc danh mục (client component)
    │   │   ├── ProductCard.tsx            # Card sản phẩm (thumbnail, tags — không hiện status badge)
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
    │   ├── staticProducts.ts  # 12 sản phẩm tĩnh — fallback khi Supabase unavailable
    │   ├── seed.json          # Data gốc cho npm run seed
    │   └── articles.ts        # 6 bài viết tĩnh (Article type + helpers)
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

- **5 tầng homepage**: `id="toi-la-ai"` → `id="nang-luc"` → `id="san-pham"` → `id="bai-viet"` → `id="lien-he"`. Nav dùng anchor links.
- **3 Theme**: CSS variables trong `globals.css`, mỗi theme định nghĩa bảng màu HSL riêng. `next-themes` quản lý class `data-theme` trên `<html>`. Default: `luxury`.
- **Middleware**: Chạy trên Edge Runtime, không import Node.js modules. Chỉ kiểm tra cookie `admin_session`.
- **Admin API**: Dùng `SUPABASE_SERVICE_KEY` để bypass RLS. Xác thực bằng `checkAuth()` đọc cookie từ header.
- **Auto-slug**: Chuẩn hoá tiếng Việt (NFD + `đ→d` + loại ký tự đặc biệt) trong ItemForm.
- **Optimistic UI**: AdminItemsClient cập nhật state ngay lập tức, rollback nếu API fail.
- **Articles**: Static data trong `src/data/articles.ts` — không cần DB, không cần admin. Thêm bài = thêm object vào array.
- **Button render prop**: Tất cả `<Button render={<a>}>` phải có `nativeButton={false}` (Base UI requirement).
- **Static fallback**: `src/data/staticProducts.ts` — 12 sản phẩm hardcode. Cả homepage lẫn `/products` dùng khi Supabase trả về rỗng hoặc lỗi.
- **CV**: Nút "Xem CV" trỏ đến `/files/CV_PhamMinhNhat.html` (mở trong tab mới). PDF vẫn có ở `/files/Pham-Minh-Nhat-CV.pdf`.
- **Hero images**: `avatar.jpg` — cột phải Hero section. `hero-bg.jpg` — ảnh nền mờ 20% opacity. Cả 2 đặt trong `public/files/`.
- **Screenshots**: Ảnh chụp màn hình app đặt trong `public/screenshots/[slug].jpg`. Tên slug khớp với field `slug` trong staticProducts.ts.
- **ThemeToggle hydration**: Dùng `mounted` state để tránh SSR/client mismatch với icon theme.
- **Supabase products**: Homepage query `featured=true AND public=true LIMIT 6`. Trang `/products` query `public=true` toàn bộ. Cả 2 fallback về static data nếu Supabase unavailable.
