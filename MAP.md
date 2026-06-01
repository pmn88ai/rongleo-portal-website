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
│   └── seed.ts               # Seed 9 item mẫu (chạy: npm run seed)
│
├── public/                   # Static assets
│
└── src/
    │
    ├── middleware.ts          # Edge Runtime — bảo vệ /admin/* (trừ /admin)
    │
    ├── app/                  # App Router (Next.js 16)
    │   ├── globals.css       # 3 theme (light/dark/luxury) + @theme inline
    │   ├── layout.tsx        # Root layout: fonts, ThemeProvider, Header, Footer
    │   ├── page.tsx          # Trang chủ: Hero + Capabilities + Contact
    │   │
    │   ├── products/
    │   │   ├── page.tsx      # /products — Grid sản phẩm + lọc danh mục (SSR)
    │   │   └── [slug]/
    │   │       └── page.tsx  # /products/:slug — Chi tiết sản phẩm (SSR)
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
    │           ├── login/
    │           │   └── route.ts        # POST — xác thực, set cookie
    │           ├── logout/
    │           │   └── route.ts        # POST — clear cookie
    │           ├── items/
    │           │   ├── route.ts        # GET (list) + POST (create)
    │           │   └── [id]/
    │           │       └── route.ts    # PATCH (update) + DELETE
    │
    ├── components/
    │   ├── ui/               # shadcn/ui components (Button, Badge, Select, …)
    │   │
    │   ├── layout/           # Layout chung
    │   │   ├── Header.tsx           # Header: logo, nav, theme toggle
    │   │   ├── MobileMenu.tsx       # Drawer menu mobile
    │   │   ├── Footer.tsx           # Footer 3 cột
    │   │   └── ThemeToggle.tsx      # Nút chuyển theme (light/dark/luxury)
    │   │
    │   ├── providers/
    │   │   └── ThemeProvider.tsx     # next-themes: 3 theme, data-theme attribute
    │   │
    │   ├── portal/           # UI trang public
    │   │   ├── HeroSection.tsx       # Hero fade-in + 2 CTA
    │   │   ├── CapabilitiesSection.tsx # 4 card năng lực (stagger animation)
    │   │   ├── ContactSection.tsx    # Contact CTA
    │   │   ├── CategoryFilter.tsx    # Lọc danh mục (client component)
    │   │   ├── ProductCard.tsx       # Card sản phẩm (status, thumbnail, tags)
    │   │   ├── ProductsClient.tsx    # Client wrapper cho /products
    │   │   └── ProductDetail.tsx     # Chi tiết sản phẩm
    │   │
    │   └── admin/            # UI trang admin
    │       ├── AdminHeader.tsx       # Thanh header admin (breadcrumb + actions)
    │       ├── AdminLoginForm.tsx    # Form đăng nhập (error/loading)
    │       ├── AdminItemsClient.tsx  # Dashboard: stats + table + inline toggles
    │       ├── ItemForm.tsx          # Form thêm/sửa (auto-slug, Switches)
    │       └── LogoutButton.tsx      # Nút đăng xuất
    │
    ├── data/
    │   └── seed.json         # Dữ liệu seed (9 items)
    │
    ├── lib/
    │   ├── supabase/
    │   │   ├── client.ts    # Supabase browser client (anon key)
    │   │   └── server.ts    # Supabase server client (service key)
    │   └── utils.ts         # cn() helper (tailwind-merge + clsx)
    │
    └── types/
        └── portal.ts        # PortalItem & types (ItemStatus, ItemCategory)
```

## Ghi chú kiến trúc

- **3 Theme**: CSS variables trong `globals.css`, mỗi theme định nghĩa bảng màu HSL riêng. `next-themes` quản lý class `data-theme` trên `<html>`.
- **Middleware**: Chạy trên Edge Runtime, không import Node.js modules. Chỉ kiểm tra cookie `admin_session`.
- **Admin API**: Dùng `SUPABASE_SERVICE_KEY` để bypass RLS. Xác thực bằng `checkAuth()` đọc cookie từ header.
- **Auto-slug**: Chuẩn hoá tiếng Việt (NFD + `đ→d` + loại ký tự đặc biệt) trong ItemForm.
- **Optimistic UI**: AdminItemsClient cập nhật state ngay lập tức, rollback nếu API fail.
