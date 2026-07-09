# SRS — Software Requirements Specification
## Dự án: Văn Khấn Việt

**Version**: 1.0
**Ngày**: 01/07/2026
**Liên quan**: [BRD.md](./BRD.md), [ERD.md](./ERD.md)

---

## 1. Giới thiệu

### 1.1 Mục đích
Tài liệu này mô tả yêu cầu chức năng, phi chức năng, và kiến trúc hệ thống của **Văn Khấn Việt** — nền tảng web số hoá văn khấn và phong tục Việt Nam.

### 1.2 Scope
Tài liệu bao phủ Phase 1 (MVP) + kế hoạch Phase 2-3. Chi tiết business trong [BRD.md](./BRD.md).

### 1.3 Định nghĩa & Từ viết tắt

| Từ | Nghĩa |
|---|---|
| **Văn khấn** | Bài đọc trong nghi lễ cúng bái, có cấu trúc cố định |
| **Mâm cúng** | Bố cục lễ vật đặt trên bàn thờ theo dịp |
| **Nhập trạch** | Nghi lễ cúng khi chuyển vào nhà mới |
| **Vu Lan** | Rằm tháng 7 Âm lịch, lễ báo hiếu cha mẹ |
| **CSR** | Client-side rendering |
| **SSG** | Static site generation |
| **ISR** | Incremental static regeneration |
| **MDX** | Markdown + JSX component |

---

## 2. Mô tả tổng thể

### 2.1 Product perspective

Sản phẩm là **web app tĩnh** (phase 1) → dần chuyển sang **hybrid static + dynamic** (phase 2-3). Không có mobile native app phase 1.

### 2.2 User classes

| Class | Frequency | Đặc điểm | Ưu tiên |
|---|---|---|---|
| **Anonymous visitor** | Rất cao | Tìm 1 văn khấn khi cần, không login | 🔴 Cao |
| **Returning free user** | Trung | Quay lại theo mùa, quan tâm nhắc lịch | 🟡 Trung |
| **Premium subscriber** | Thấp | Trả 39k/tháng, dùng thường xuyên | 🟡 Trung (phase 2+) |
| **Content admin** | 1 người (founder) | Thêm/sửa văn khấn qua Git commit | 🔴 Cao |

### 2.3 Operating environment

- **Browser**: Chrome 90+, Safari 14+, Firefox 90+, Coc Coc (VN), UC Browser (VN)
- **Device**: 80% mobile, 20% desktop
- **Network**: 3G/4G VN, đôi khi chậm — cần tối ưu weight
- **Locale**: chỉ tiếng Việt

### 2.4 Constraints

- Phase 1 không có backend, không DB, không auth
- Content bằng MDX file trong Git repo — deploy = merge
- Tối đa 5tr VNĐ ngân sách/tháng cho tools + hosting
- 15h/tháng nhân lực

---

## 3. Yêu cầu chức năng (Functional Requirements)

### 3.1 FR-01: Duyệt văn khấn theo dịp

**Priority**: 🔴 P0 (must-have)
**Phase**: 1

**Description**: User có thể tìm và xem 1 văn khấn cụ thể theo dịp/tình huống.

**Acceptance criteria**:
- Trang chủ hiển thị 4 nhóm chính: Hàng tháng / Lễ Tết / Gia đình / Kinh doanh
- Click vào nhóm → hiển thị list văn khấn thuộc nhóm
- Click vào 1 văn khấn → mở page chi tiết
- URL structure: `/van-khan/{slug}` (ví dụ: `/van-khan/mung-1-hang-thang`)
- Mỗi văn khấn có breadcrumb: Trang chủ > Nhóm > Tên văn khấn

### 3.2 FR-02: Xem chi tiết văn khấn

**Priority**: 🔴 P0
**Phase**: 1

**Description**: Trang chi tiết văn khấn chứa toàn bộ thông tin cần thiết để user tự thực hiện nghi lễ.

**Acceptance criteria**:
- Hiển thị **văn khấn full text** với font đọc được (min 18px trên mobile)
- Chú thích Hán-Việt cho từ khó (tooltip hover hoặc footnote)
- **Ảnh mâm cúng chuẩn** cho dịp (min 1 ảnh, lý tưởng 2-3 góc)
- **Checklist chuẩn bị**: mua gì, sắp thế nào (bullet list)
- **Kiêng kỵ + lưu ý** (highlight box)
- Phần "Câu hỏi thường gặp" (FAQ) — 3-5 câu
- Chọn **vùng miền** (Bắc / Trung / Nam) → hiển thị phiên bản phù hợp
- Nút **"In / Lưu PDF"** để user có thể in đọc offline
- Nút **"Chia sẻ qua Zalo"** với deep link
- **Related** văn khấn khác liên quan (max 3)

### 3.3 FR-03: Chọn vùng miền

**Priority**: 🟡 P1
**Phase**: 1

**Description**: Phong tục Bắc/Trung/Nam khác nhau — user cần chọn để hiển thị đúng.

**Acceptance criteria**:
- Toggle 3 tab: Bắc / Trung / Nam (mặc định: Bắc)
- Lưu preference trong localStorage
- Không phải văn khấn nào cũng có 3 phiên bản — chỉ hiển thị "Chưa có phiên bản này" nếu thiếu

### 3.4 FR-04: Lịch âm dương

**Priority**: 🟡 P1
**Phase**: 1

**Description**: Widget lịch âm-dương, đánh dấu ngày cần cúng trong tháng.

**Acceptance criteria**:
- URL: `/lich-am`
- Hiển thị lịch tháng hiện tại (âm + dương song song)
- Đánh dấu ngày mùng 1, ngày rằm (15 âm)
- Đánh dấu ngày lễ lớn: Vu Lan, ông Táo, giao thừa, khai xuân...
- Click 1 ngày → hiển thị "Ngày này cần cúng gì?" → link đến văn khấn tương ứng
- Chuyển tháng tới/lùi

### 3.5 FR-05: Blog nội dung phong tục

**Priority**: 🟡 P1
**Phase**: 1

**Description**: Bài blog dài về phong tục, ý nghĩa, câu chuyện → phục vụ SEO long-tail.

**Acceptance criteria**:
- URL: `/goc-phong-tuc/{slug}`
- Category: Ý nghĩa, Chuẩn bị, Hỏi đáp, Câu chuyện
- Mỗi bài min 800 từ, có ảnh, có internal link đến văn khấn liên quan
- Schema markup Article

### 3.6 FR-06: Search

**Priority**: 🟢 P2
**Phase**: 1

**Description**: User có thể tìm nhanh văn khấn theo từ khoá.

**Acceptance criteria**:
- Search bar trên header
- Search client-side (Fuse.js hoặc Lyra) — không cần backend
- Kết quả gợi ý dropdown as-you-type
- Kết quả full trang `/tim-kiem?q=`

### 3.7 FR-07: Audio đọc mẫu

**Priority**: 🟡 P1
**Phase**: 2

**Description**: Nghe văn khấn được đọc bởi giọng thầy — user có thể nghe theo.

**Acceptance criteria**:
- Player âm thanh gọn (play/pause/seek/speed)
- Free: bản đọc cơ bản (1 giọng miền Bắc)
- Premium: chọn giọng theo miền (Bắc/Trung/Nam), tốc độ đọc, tải offline
- File: MP3, tối đa 3MB/bài
- Storage: Vercel Blob hoặc CloudFlare R2

### 3.8 FR-08: Nhắc lịch

**Priority**: 🟡 P1
**Phase**: 2

**Description**: User nhận nhắc trước 1 ngày các dịp cúng lễ.

**Acceptance criteria**:
- User nhập email hoặc số Zalo (không cần đăng ký account)
- Chọn dịp muốn nhắc: mùng 1, rằm hàng tháng, ông Táo, Vu Lan, Tết, Cô hồn...
- Chọn kênh: email (miễn phí) / Zalo (premium)
- Nhắc trước 24h + trước 2h
- Nội dung nhắc: link văn khấn tương ứng + checklist chuẩn bị

### 3.9 FR-09: Premium subscription

**Priority**: 🟡 P1
**Phase**: 2

**Description**: User trả 39k/tháng hoặc 299k/năm để unlock premium.

**Acceptance criteria**:
- Trang `/premium` giới thiệu benefit
- Thanh toán: VNPay / Momo / chuyển khoản ngân hàng
- Không cần login user account — chỉ cần email/SĐT + mã kích hoạt gửi qua email
- Subscription state lưu backend đơn giản (Supabase hoặc PocketBase)
- User có thể huỷ bất kỳ lúc nào, không tự động renew phase 2 (manual)

### 3.10 FR-10: Community Q&A

**Priority**: 🟢 P2
**Phase**: 3

**Description**: User đặt câu hỏi, cộng đồng + admin trả lời.

**Acceptance criteria**:
- Cần login (OTP qua Zalo/email)
- Post câu hỏi có kèm ảnh
- Moderator (founder) duyệt trước khi public
- Vote up/down câu trả lời

### 3.11 FR-11: Marketplace thầy cúng

**Priority**: 🟢 P3
**Phase**: 3

**Description**: Kết nối user cần thầy cúng với thầy có uy tín.

**Acceptance criteria**:
- Profile thầy: ảnh, giới thiệu, dịp chuyên môn, khu vực phục vụ, giá
- User booking, thanh toán qua nền tảng (giữ 10% commission)
- Review sau khi hoàn thành

---

## 4. Yêu cầu phi chức năng (Non-Functional Requirements)

### 4.1 Performance

- **LCP** (Largest Contentful Paint): < 2.5s trên 4G VN
- **CLS** (Cumulative Layout Shift): < 0.1
- **Page weight**: < 200KB (không tính ảnh)
- **Ảnh**: WebP/AVIF, lazy load, có `sizes` responsive
- **Font**: subset chỉ tiếng Việt, preload font chính

### 4.2 SEO

- **URL**: sạch, có dấu tiếng Việt bỏ dấu (`mung-1-hang-thang`)
- **Meta**: unique title + description mỗi trang
- **Schema markup**:
  - `Article` cho blog
  - `HowTo` cho hướng dẫn cúng lễ
  - `FAQPage` cho phần FAQ
  - `BreadcrumbList` cho navigation
  - `WebSite` với `SearchAction`
- **Sitemap.xml** tự động sinh từ MDX files
- **Robots.txt** cho phép all
- **Open Graph + Twitter Card** cho social share
- **hreflang**: `vi-VN`

### 4.3 Mobile

- Mobile-first design
- Chạm target > 44px
- Không horizontal scroll
- Font size min 16px (tránh iOS auto-zoom)
- Test trên iPhone SE (nhỏ nhất) → iPhone 15 Pro Max

### 4.4 Accessibility

- WCAG 2.1 Level AA
- Semantic HTML (h1-h6 đúng cấp)
- Alt text cho mọi ảnh
- Contrast ratio > 4.5:1
- Keyboard navigation cho search
- Font phải đọc được cho người 50+ (mặc định 18px, có option "Chữ to")

### 4.5 Security

- HTTPS enforced (Vercel default)
- No third-party script trừ analytics + payment
- Không lưu payment info trên server (chỉ orchestrate qua VNPay/Momo)
- Email/SĐT lưu hashed nếu có DB (phase 2+)
- Rate limit search/submit form

### 4.6 Privacy

- Không tracking cross-site
- Analytics: Plausible (privacy-first) hoặc GA4 (cần cookie consent VN theo Luật An ninh mạng)
- Không bán data
- Trang `/chinh-sach-quyen-rieng-tu` rõ ràng

### 4.7 Availability

- Uptime > 99.5% (Vercel SLA)
- Không SLA cho phase 1 (best effort)

### 4.8 Content quality

- Mỗi văn khấn phải có **ít nhất 2 nguồn tham khảo** (ghi trong footer bài)
- **Không được tạo/sửa văn khấn bằng AI**
- Có disclaimer cuối trang: "Nội dung tham khảo, người dùng cân nhắc theo tín ngưỡng cá nhân"
- Feedback report từ user → founder review trong 48h

---

## 5. Kiến trúc hệ thống (System Architecture)

### 5.1 Phase 1 (MVP — chỉ static)

```
┌─────────────────────────┐
│    User (mobile/web)    │
└────────────┬────────────┘
             │ HTTPS
             ▼
┌─────────────────────────┐
│      Vercel CDN         │
│  (Global edge network)  │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   Next.js Static Site   │
│  - SSG cho page văn khấn│
│  - ISR cho blog         │
│  - Client-side search   │
└─────────────────────────┘
             ▲
             │ git push
             │
┌─────────────────────────┐
│   Github Repo           │
│  - MDX content files    │
│  - Ảnh trong /public    │
└─────────────────────────┘
```

### 5.2 Phase 2 (thêm audio, subscription, nhắc lịch)

```
┌─────────────────────────┐
│      Next.js Site       │
└────┬──────┬────────┬────┘
     │      │        │
     ▼      ▼        ▼
┌─────┐ ┌──────┐ ┌─────────┐
│CDN  │ │Supa- │ │VNPay/   │
│Audio│ │base  │ │Momo     │
│(R2) │ │(DB + │ │Payment  │
└─────┘ │Auth) │ └─────────┘
        └───┬──┘
            │
            ▼
     ┌──────────────┐
     │ Cron job     │
     │ (nhắc lịch)  │
     │ Vercel Cron  │
     └──────────────┘
```

### 5.3 Tech stack

| Component | Choice | Lý do |
|---|---|---|
| **Framework** | Next.js 14 App Router | SSG + ISR + edge, tối ưu SEO |
| **Styling** | Tailwind CSS | Nhanh, mobile-first |
| **Content** | MDX + Contentlayer | Type-safe content, git-based |
| **Icons** | Lucide React | Nhẹ, đầy đủ |
| **Font** | Be Vietnam Pro | Free, đọc tốt tiếng Việt |
| **Hosting** | Vercel | Free tier đủ, CDN global |
| **DB (phase 2)** | Supabase | Postgres + Auth + Realtime, free tier |
| **Storage (phase 2)** | Cloudflare R2 | Rẻ hơn S3, không egress fee |
| **Payment (phase 2)** | VNPay + Momo | Phổ biến VN, phí hợp lý |
| **Email (phase 2)** | Resend | Simple API, free tier 3k/tháng |
| **Analytics** | Plausible | Privacy-first, không cookie consent |
| **Cron** | Vercel Cron | Free tier đủ cho nhắc lịch |

---

## 6. User Journey chính

### 6.1 Journey 1: Anh Minh cần cúng nhà mới (Anonymous → Success)

1. Anh Minh Google "văn khấn nhập trạch"
2. Click vào kết quả từ site
3. Landing trực tiếp page `/van-khan/nhap-trach-nha-moi`
4. Đọc văn khấn, xem checklist chuẩn bị
5. Click "Chia sẻ Zalo" → gửi cho vợ
6. Click "In/Lưu PDF" → in ra giấy để đọc lúc cúng
7. Sau khi cúng thành công → có thể quay lại (tuần sau đó) để tìm văn khấn khác

**Success metric**: Anh Minh không cần rời trang, không cần đăng ký, tìm được đúng nội dung trong < 30s.

### 6.2 Journey 2: Chị Hà đăng ký nhắc rằm

1. Chị Hà vào `/lich-am`
2. Thấy ngày rằm gần nhất
3. Click "Nhắc tôi trước 1 ngày"
4. Modal hiện: nhập email hoặc SĐT (không login)
5. Chọn dịp muốn nhắc (checkbox nhiều)
6. Confirm → hiện thông báo "Đã đăng ký"
7. Đúng ngày, nhận email với link văn khấn + checklist

### 6.3 Journey 3: Upgrade Premium

1. User free vào page văn khấn
2. Thấy audio player, click play
3. Modal hiện: "Nghe 15s đầu miễn phí. Nâng cấp Premium để nghe đầy đủ + chọn giọng miền + không quảng cáo — 39k/tháng"
4. Click "Nâng cấp"
5. Chọn gói tháng/năm
6. Nhập email + thanh toán VNPay
7. Nhận mã kích hoạt qua email
8. Nhập mã vào site → trạng thái premium active

---

## 7. Cấu trúc thư mục dự án (đề xuất)

```
vibe/
├── docs/
│   ├── BRD.md
│   ├── SRS.md
│   └── ERD.md
├── content/
│   ├── van-khan/
│   │   ├── mung-1-hang-thang.mdx
│   │   ├── ram-hang-thang.mdx
│   │   ├── nhap-trach-nha-moi.mdx
│   │   └── ...
│   ├── blog/
│   │   ├── y-nghia-le-vu-lan.mdx
│   │   └── ...
│   └── categories.json
├── public/
│   ├── images/mam-cung/
│   ├── audio/ (phase 2)
│   └── icons/
├── src/
│   ├── app/
│   │   ├── page.tsx (trang chủ)
│   │   ├── van-khan/[slug]/page.tsx
│   │   ├── goc-phong-tuc/[slug]/page.tsx
│   │   ├── lich-am/page.tsx
│   │   └── tim-kiem/page.tsx
│   ├── components/
│   │   ├── VanKhanCard.tsx
│   │   ├── ChecklistBox.tsx
│   │   ├── RegionSwitcher.tsx
│   │   └── ...
│   └── lib/
│       ├── content.ts
│       ├── lunar-calendar.ts
│       └── seo.ts
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 8. Content template — MDX schema

Mỗi văn khấn là 1 file `.mdx` với frontmatter:

```yaml
---
slug: mung-1-hang-thang
title: "Văn khấn mùng 1 hàng tháng — Thần linh & Gia tiên"
category: hang-thang
region:
  bac: true
  trung: true
  nam: true
occasion:
  lunarDay: 1
  recurring: monthly
priority: 1
keywords:
  - văn khấn mùng 1
  - cúng thần linh mùng 1
  - cúng gia tiên mùng 1
image: /images/mam-cung/mung-1.jpg
audio:
  bac: /audio/mung-1-bac.mp3
  trung: /audio/mung-1-trung.mp3
  nam: /audio/mung-1-nam.mp3
sources:
  - "Văn khấn cổ truyền Việt Nam — NXB Văn hoá Thông tin (2018)"
  - "Sách Phong tục thờ cúng — NXB Tôn Giáo (2020)"
lastReviewed: 2026-07-01
reviewer: "Founder + verified with Thầy X"
---

## Ý nghĩa

...

## Chuẩn bị mâm cúng

- Hoa quả tươi (5 loại)
- Nhang, đèn
- Nước sạch
- Trầu cau
- Rượu / trà
...

## Văn khấn thần linh

<VanKhanText region="bac">
Nam mô A Di Đà Phật (3 lần)
Kính lạy:
- Hoàng thiên Hậu thổ chư vị Tôn thần
...
</VanKhanText>

## Kiêng kỵ

...

## FAQ

...
```

---

## 9. Analytics & Monitoring

### 9.1 Metric to track

- Pageview per văn khấn
- Time on page
- Scroll depth
- CTR sang related văn khấn
- Search query (tìm gì mà không có?)
- Conversion đăng ký nhắc lịch
- Conversion Premium

### 9.2 Tool

- Plausible (event tracking custom)
- Google Search Console (organic traffic)
- Vercel Analytics (page performance)

---

## 10. Milestone & Definition of Done

### 10.1 MVP DoD (cuối tháng 1)

- [ ] 15 văn khấn Nhóm A + B live
- [ ] Trang chủ, category, chi tiết functional
- [ ] Lighthouse score > 90 (Perf, SEO, A11y)
- [ ] Submit Google Search Console
- [ ] Mobile responsive test 5 device
- [ ] 20 người thật review, feedback tích cực

### 10.2 Vu Lan DoD (cuối tháng 2)

- [ ] Content Vu Lan đầy đủ (3 bài văn khấn + 2 blog)
- [ ] Traffic > 500/ngày trong tuần Vu Lan
- [ ] TikTok/FB page có > 100 follow
- [ ] 100 email list

### 10.3 Premium launch DoD (cuối tháng 3)

- [ ] Audio 15 văn khấn Nhóm A
- [ ] Nhắc lịch qua email hoạt động
- [ ] Landing page premium
- [ ] Payment VNPay integration test pass
- [ ] Terms of service + Privacy policy live

---

**Next document**: [ERD.md](./ERD.md) — data model chi tiết

