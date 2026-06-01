# RongLeo Portal

Cổng thông tin sản phẩm cá nhân — nơi RongLeo trưng bày các dự án, sản phẩm và ý tưởng dưới dạng một bộ sưu tập sống động, hỗ trợ 3 giao diện (Light / Dark / Luxury).

## Công nghệ

| Thành phần | Công nghệ |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | shadcn/ui v4 (Base UI) |
| CSS | Tailwind CSS v4 |
| Animation | Framer Motion |
| Database | Supabase (PostgreSQL) |
| Auth | httpOnly cookie (admin) |
| Font | Be Vietnam Pro + Inter |
| Icons | Lucide React |

## Tính năng

- **3 Theme** — Light (xanh lá), Dark (xanh neon), Luxury (vàng đồng). Lưu bằng `localStorage`.
- **Trang chủ** — Hero với headline động, 4 khối năng lực (animation stagger), Contact CTA.
- **Products** — Grid lọc theo danh mục, SSR, badge trạng thái, thẻ nổi bật, trang chi tiết với slug + 404 tuỳ chỉnh.
- **Admin** — Đăng nhập username/password, CRUD sản phẩm, inline toggle featured/public, xoá có xác nhận, stats dashboard.
- **API** — RESTful endpoints cho admin CRUD, service key bypass RLS.
- **Middleware** — Edge Runtime bảo vệ toàn bộ `/admin/*` ngoại trừ trang login.

## Cấu trúc thư mục

Xem [MAP.md](./MAP.md) để biết sơ đồ chi tiết.

## Bắt đầu

```bash
# Clone & cài dependencies
npm install

# Tạo file .env.local (xem .env.example)
# Thiết lập Supabase URL + keys + admin credentials

# Seed dữ liệu mẫu
npm run seed

# Chạy dev server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Môi trường

| Biến | Mô tả |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key (public) |
| `SUPABASE_SERVICE_KEY` | Service key (server-only) |
| `ADMIN_USERNAME` | Tên đăng nhập admin |
| `ADMIN_PASSWORD` | Mật khẩu admin |
| `NEXT_PUBLIC_SITE_URL` | URL deployment |

## Database

Migration tại `supabase/migrations/001_create_portal_items.sql`. Bảng `portal_items` có các cột:

- `id` — UUID (PK)
- `title`, `slug` — Tiêu đề và đường dẫn
- `url`, `summary`, `description` — Nội dung
- `category` — Enum: AI, GIS & Đất đai, Dashboard, CRM, …
- `status` — Enum: Ý tưởng → Hoàn thiện
- `thumbnail_url`, `tags` — Hình ảnh & thẻ
- `featured`, `public` — Cờ hiển thị
- `sort_order` — Thứ tự sắp xếp

Admin CRUD dùng `SUPABASE_SERVICE_KEY` để bypass RLS.

## Admin

Vào `/admin` → đăng nhập → dashboard `/admin/items`:

- Xem thống kê (tổng, public, draft, nổi bật)
- Lọc & chỉnh sửa inline (toggle featured/public)
- Thêm / Sửa item với form auto-slug tiếng Việt
- Xoá item (confirm dialog, optimistic UI)

## Deploy

```bash
npm run build
npm start
```

Biến môi trường phải được cấu hình trên nền tảng deploy (Vercel, Docker, …).
