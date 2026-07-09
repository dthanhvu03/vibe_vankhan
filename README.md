# Văn Khấn Việt

Thư viện văn khấn Việt Nam chuẩn theo sách cổ. Miễn phí, không quảng cáo.

## Bắt đầu

```bash
npm install
npm run dev
```

Mở http://localhost:3000

## Cấu trúc thư mục

```
vibe/
├── docs/                        # Tài liệu design
│   ├── BRD.md                   # Business requirements
│   ├── SRS.md                   # Software requirements
│   ├── ERD.md                   # Data model
│   ├── DESIGN_SYSTEM.md         # Palette, typography, components
│   ├── CONTENT_STYLE.md         # Tone, format văn khấn, citation
│   └── SEO_PLAN.md              # Keyword strategy, content calendar
├── content/
│   └── van-khan/                # Văn khấn MDX files
│       ├── mung-1-than-linh-gia-tien.mdx
│       └── ram-hang-thang.mdx
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout với fonts
│   │   ├── page.tsx             # Trang chủ
│   │   ├── globals.css          # Tailwind + custom components
│   │   ├── not-found.tsx        # 404 page
│   │   ├── sitemap.ts           # Auto sitemap
│   │   ├── robots.ts            # robots.txt
│   │   ├── [category]/page.tsx  # Category listing
│   │   └── van-khan/[slug]/page.tsx  # Detail page
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── icons.tsx            # SVG icon components (không dùng emoji)
│   └── lib/
│       └── content.ts           # MDX loader utilities
├── package.json
├── tsconfig.json
├── tailwind.config.ts           # Áp dụng DESIGN_SYSTEM.md tokens
├── next.config.mjs
└── postcss.config.mjs
```

## Thêm văn khấn mới

1. Copy `content/van-khan/mung-1-than-linh-gia-tien.mdx` làm mẫu
2. Đổi tên file thành `{slug}.mdx` (slug không dấu, có dấu gạch nối)
3. Sửa frontmatter (title, description, category, keywords, sources, ...)
4. Viết nội dung theo template:
   - `## Ý nghĩa` — bối cảnh nghi lễ
   - `<Checklist>` — mâm cúng chuẩn bị
   - `<KiengKy>` — lưu ý kiêng kỵ
   - `<VanKhanText>` — text văn khấn (dùng template string với dấu backtick)
   - `## Câu hỏi thường gặp` — FAQ

**Quan trọng**:
- Không dùng AI viết văn khấn — chỉ chép từ nguồn verified (sách NXB Tôn Giáo, NXB Văn hoá Thông tin)
- Ghi ít nhất 2 nguồn trong frontmatter `sources`
- Kiểm chéo 2-3 nguồn trước khi publish

Xem chi tiết trong [docs/CONTENT_STYLE.md](docs/CONTENT_STYLE.md).

## Component MDX có sẵn

Dùng trong file `.mdx`:

- `<VanKhanText>` — box hiển thị văn khấn (serif, border ochre)
- `<KiengKy>` — cảnh báo kiêng kỵ (border đỏ)
- `<Checklist>` — box chuẩn bị (border ink)

## Design tokens

Palette đầy đủ trong `tailwind.config.ts`:

- `ink-*` (xanh teal cổ) — brand primary
- `vermilion-*` (son đỏ trầm) — CTA
- `ochre-*` (đồng vàng cổ) — decorative
- `stone-*` (warm neutral) — text & background
- `cream` (#FAF6EE) — background default

Xem [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) chi tiết.

## Deploy

Push lên Github rồi connect với Vercel — free tier đủ dùng.

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo>
git push -u origin main
```

Sau đó vào https://vercel.com/new để import repo.

## Roadmap tuần này

- [x] Setup Next.js + Tailwind + MDX
- [x] Design system tokens
- [x] Homepage + Category page + Detail page
- [x] 2 văn khấn mẫu (mùng 1, rằm)
- [ ] Thêm 3 văn khấn nhóm A còn lại (thổ công, nhập trạch, đầy tháng)
- [ ] Chọn domain, deploy Vercel
- [ ] Gửi link 20 người bạn 25-40t để feedback

## Tài liệu tham khảo

- [BRD.md](docs/BRD.md) — Vì sao làm dự án này
- [SRS.md](docs/SRS.md) — Tính năng và kiến trúc
- [ERD.md](docs/ERD.md) — Cấu trúc dữ liệu
- [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) — Bộ gam màu, typography
- [CONTENT_STYLE.md](docs/CONTENT_STYLE.md) — Cách viết nội dung
- [SEO_PLAN.md](docs/SEO_PLAN.md) — Kế hoạch SEO 3 tháng
