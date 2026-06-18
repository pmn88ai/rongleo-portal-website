# RongLeo Portal

Trang thương hiệu cá nhân của **Phạm Minh Nhật / RongLeo** — giới thiệu hành trình nghề nghiệp, năng lực, hệ sinh thái sản phẩm số và bài viết.

**Live:** https://rongleo.com

---

## Công nghệ

| Thành phần | Công nghệ |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | shadcn/ui v4 (Base UI) |
| CSS | Tailwind CSS v4 |
| Animation | Framer Motion |
| Database | Supabase (PostgreSQL) — sản phẩm |
| Auth | httpOnly cookie (admin only) |
| Font | Be Vietnam Pro + Inter |
| Icons | Lucide React |

---

## Tính năng

### Public
- **4 tầng homepage** — Hero (Tôi là ai) → Capability Map (Tôi làm được gì) → Sản phẩm số (Tôi đã xây gì) → Bài viết & Hành trình
- **3 Theme** — Light (xanh lá), Dark (xanh neon), Luxury (vàng đồng). Default: luxury. Lưu bằng `localStorage`.
- **Navigation anchor** — Tôi là ai / Năng lực / Sản phẩm / Bài viết / Liên hệ → scroll mượt đến từng section.
- **Tải CV** — `/files/Pham-Minh-Nhat-CV.pdf`
- **Sản phẩm** — `/products` grid đầy đủ + lọc danh mục. Homepage hiện 6 sản phẩm nổi bật.
- **Bài viết** — `/thinking` danh sách + `/thinking/[slug]` chi tiết. Static data, không cần DB.

### Admin
- Đăng nhập username/password → dashboard `/admin/items`
- CRUD sản phẩm, inline toggle featured/public, xoá có xác nhận
- Form auto-slug tiếng Việt, stats dashboard

---

## Bắt đầu

```bash
npm install
cp .env.example .env.local
# Điền biến môi trường vào .env.local

npm run seed      # Seed 13 sản phẩm vào Supabase
npm run dev       # Mở http://localhost:3000
```

---

## Môi trường

| Biến | Mô tả | Bắt buộc |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | ✅ |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key (public reads) | ✅ |
| `SUPABASE_SERVICE_KEY` | Service key (admin CRUD + seed) | ✅ |
| `ADMIN_USERNAME` | Tên đăng nhập admin | ✅ |
| `ADMIN_PASSWORD` | Mật khẩu admin | ✅ |
| `NEXT_PUBLIC_SITE_URL` | URL deployment | ✅ |

---

## Database

Migration tại `supabase/migrations/001_create_portal_items.sql`. Bảng `portal_items`:

| Cột | Mô tả |
|---|---|
| `id` | UUID (PK) |
| `title`, `slug` | Tiêu đề và đường dẫn (slug unique) |
| `url`, `summary`, `description` | Nội dung |
| `category` | AI / GIS & Đất đai / Dashboard / CRM / Quản lý nội bộ / Dữ liệu gia đình / Bất động sản / Tự động hóa / Khác |
| `status` | Ý tưởng / Đang phát triển / Demo / Beta / Hoàn thiện / Tạm ẩn |
| `thumbnail_url`, `tags` | Hình ảnh & thẻ |
| `featured`, `public` | Cờ hiển thị |
| `sort_order` | Thứ tự sắp xếp |

Admin CRUD dùng `SUPABASE_SERVICE_KEY` để bypass RLS. Homepage và `/products` dùng anon key — cần policy SELECT cho role anon:

```sql
CREATE POLICY "Public can read public items"
ON portal_items FOR SELECT
USING (public = true);
```

---

## Sản phẩm (13 items)

| # | Tên | Slug | Featured |
|---|-----|------|----------|
| 1 | RongLeo Land | `rongleo-land` | ✅ |
| 2 | RongLeo Spatial | `rongleo-spatial` | ✅ |
| 3 | RongLeo Sale Assets | `rongleo-sale-assets` | ✅ |
| 4 | RongLeo Accountant | `rongleo-accountant` | — |
| 5 | RongLeo Language Companion | `rongleo-language-companion` | ✅ |
| 6 | RongLeo MindScope | `rongleo-mindscope` | — |
| 7 | RongLeo FinTrack | `rongleo-fintrack` | — |
| 8 | RongLeo Land Mapper | `rongleo-land-mapper` | — |
| 9 | RongLeo FamilyTree | `rongleo-familytree` | — |
| 10 | TimeLapse Builder | `timelapse-builder` | — |
| 11 | PhuongLong Flower | `phuonglong-flower` | — |
| 12 | RongLeo Kids | `rongleo-kids` | — |
| 13 | RongLeo Company OS | `rongleo-company-os` | ✅ |

---

## Bài viết (static — `src/data/articles.ts`)

| Slug | Tiêu đề | Featured |
|------|---------|----------|
| `vi-sao-xay-rongleo` | Vì sao tôi xây RongLeo | ✅ |
| `hanh-trinh-ky-su-den-code` | Hành trình từ kỹ sư đến người code | ✅ |
| `vi-sao-hoc-luat` | Vì sao tôi học luật giữa lúc đang làm kỹ thuật | ✅ |
| `gis-va-bds` | GIS quan trọng với BĐS như thế nào | — |
| `ai-phap-ly-du-an` | AI giúp gì cho pháp lý dự án | — |
| `du-lieu-den-cong-cu` | Từ dữ liệu đến công cụ hành động | — |

Thêm bài mới: thêm object vào array `ARTICLES` trong `src/data/articles.ts`. Không cần DB, không cần deploy lại Supabase.

---

## CV

Đặt file tại: `public/files/Pham-Minh-Nhat-CV.pdf`

URL public: `https://rongleo.com/files/Pham-Minh-Nhat-CV.pdf`

Nút "Tải CV" có ở: Hero Section + Contact Section.

---

## Cấu trúc thư mục

Xem [MAP.md](./MAP.md) để biết sơ đồ chi tiết.

---

## Admin

Vào `/admin` → đăng nhập → dashboard `/admin/items`:
- Xem thống kê (tổng, public, draft, nổi bật)
- Lọc & chỉnh sửa inline (toggle featured/public)
- Thêm / Sửa item với form auto-slug tiếng Việt
- Xoá item (confirm dialog, optimistic UI)

---

## Deploy

```bash
npm run build
# Push env vars lên Vercel dashboard
# git push → Vercel auto-deploy
```

Sau khi deploy, chạy seed từ local (dùng env vars của production):
```bash
NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_KEY=... npm run seed
```

---

## Lưu ý kỹ thuật

- **Button + render prop**: Dùng `nativeButton={false}` khi `Button` render thành `<a>` hoặc `<Link>` (Base UI requirement).
- **Supabase paused**: Free tier tự pause sau ~7 ngày không dùng. Resume tại app.supabase.com.
- **Articles**: Static, không cần DB. Thêm bài = thêm object vào `ARTICLES` array.
- **Smooth scroll**: `scroll-behavior: smooth` trong `globals.css` — anchor links tự scroll mượt.

---

*Phạm Minh Nhật / RongLeo — Built with AI, GIS, Data & Real Estate experience.*
