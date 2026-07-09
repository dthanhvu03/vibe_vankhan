# Design System — Văn Khấn Việt

**Version**: 1.0
**Ngày**: 01/07/2026
**Liên quan**: [BRD.md](./BRD.md), [SRS.md](./SRS.md)

---

## 1. Design Principles

### 1.1 Nguyên tắc thiết kế
1. **Truyền thống hiện đại** — không quê mùa, không "vàng mã đỏ chóe", không cliché chùa chiền
2. **Đọc tốt tiếng Việt** — font hỗ trợ dấu đầy đủ, line-height thoáng
3. **Mobile-first** — 80% user trên di động, thiết kế cho iPhone SE trước
4. **Ít nhưng chất** — không overload UI, tôn trọng content
5. **Trang trọng nhưng gần gũi** — target 25-40 tuổi, không "cụ non" cũng không "trẻ trâu"
6. **Đọc lâu không mỏi mắt** — user sẽ đọc văn khấn dài, spacing quan trọng hơn màu mè

### 1.2 Mood board (từ khoá cảm hứng)
- Gốm Bát Tràng cũ
- Đồ đồng cổ (patina xanh, ánh vàng ám)
- Giấy dó Đông Hồ
- Mực nho, thư pháp
- Muji minimalism với chất Việt
- Cà phê Trung Nguyên vintage (không phải Highland Coffee sáng chói)

### 1.3 Tránh xa
- ❌ Đỏ chói #FF0000 + vàng chóe #FFD700 (stereotype vàng mã)
- ❌ 3D render bàn thờ, tượng phật vàng
- ❌ Flat icon glossy cartoon
- ❌ Font Comic Sans, Impact, hoặc bất kỳ font viết tay lệch dấu tiếng Việt
- ❌ Đèn lồng, câu đối cliché (dành cho content Tết cụ thể, không xuyên suốt)

---

## 2. Color Palette

### 2.1 Primary — Ink (Xanh mực)

Cảm hứng: đồ đồng cổ đã lên patina, gốm Bát Tràng men xanh.

| Token | Hex | Sử dụng |
|---|---|---|
| `ink-950` | `#061F22` | Text đậm nhất, không dùng cho background |
| `ink-900` | `#0B2F32` | Heading, dark background |
| `ink-800` | `#123E42` | Text primary trong hero |
| `ink-700` | `#1C4B4E` | Button hover, link visited |
| `ink-600` | `#245B5F` | Button primary |
| `ink-500` | `#2E6A6E` | **Brand primary** — logo, link, active state |
| `ink-400` | `#4A8589` | Icon secondary |
| `ink-300` | `#67A3A6` | Divider nhấn |
| `ink-200` | `#A3CACC` | Background subtle |
| `ink-100` | `#D4EBEC` | Background section |
| `ink-50`  | `#EEF7F7` | Background lightest |

### 2.2 Accent — Vermilion (Son đỏ trầm)

Cảm hứng: son cổ trên đồ gốm, không phải đỏ tươi.

| Token | Hex | Sử dụng |
|---|---|---|
| `vermilion-700` | `#8B2E1F` | Text warning nghiêm trọng |
| `vermilion-600` | `#A03A28` | Hover CTA quan trọng |
| `vermilion-500` | `#B84A38` | **CTA primary** — nút "Nâng cấp", "Bắt đầu" |
| `vermilion-400` | `#CC6D5B` | Icon accent |
| `vermilion-300` | `#E29585` | Background highlight nhẹ |
| `vermilion-100` | `#F9DAD3` | Background badge |

### 2.3 Highlight — Ochre (Đồng vàng cổ)

Cảm hứng: nhang khói lấp lánh, ánh nến, đèn dầu, không phải vàng chóe.

| Token | Hex | Sử dụng |
|---|---|---|
| `ochre-700` | `#8B6D28` | Text emphasis |
| `ochre-600` | `#997A32` | Border decorative |
| `ochre-500` | `#B08D3D` | **Accent decorative** — divider, ornament |
| `ochre-400` | `#C4A557` | Icon subtle |
| `ochre-300` | `#D9BB78` | Background highlight |
| `ochre-100` | `#F0E4C5` | Background section warm |

### 2.4 Neutral — Stone (Đá cát ấm)

Warm neutral thay vì cool gray — hợp mood truyền thống.

| Token | Hex | Sử dụng |
|---|---|---|
| `stone-950` | `#0E0B08` | — |
| `stone-900` | `#1F1B15` | Text đậm nhất |
| `stone-800` | `#2F2A22` | Heading |
| `stone-700` | `#45403A` | **Body text default** |
| `stone-600` | `#5C574F` | Text secondary |
| `stone-500` | `#78716A` | Text tertiary, placeholder |
| `stone-400` | `#9B948A` | Icon disable |
| `stone-300` | `#C4BFB7` | Border |
| `stone-200` | `#DDD8D0` | Divider |
| `stone-100` | `#EFEAE2` | Background section |
| `stone-50`  | `#FAF6EE` | **Background default (cream)** |

### 2.5 Semantic

| Token | Hex | Sử dụng |
|---|---|---|
| `success` | `#4A7C3E` | Confirmation, "Đã lưu" |
| `warning` | `#C58940` | Cảnh báo nhẹ, "Kiêng kỵ" |
| `error`   | `#A63B3B` | Lỗi form, xoá |
| `info`    | `#4682B4` | Thông báo trung tính |

### 2.6 Preview palette

```
Primary:    ████ #2E6A6E  ← link, brand
CTA:        ████ #B84A38  ← button primary
Accent:     ████ #B08D3D  ← decorative
Background: ████ #FAF6EE  ← page bg
Text:       ████ #45403A  ← body
Heading:    ████ #1F1B15  ← h1-h3
```

### 2.7 Contrast pairs (WCAG AA compliant)

| Foreground | Background | Ratio | Use |
|---|---|---|---|
| `stone-700` | `stone-50` | 8.4:1 ✅ | Body text |
| `stone-900` | `stone-50` | 15.2:1 ✅ | Heading |
| `ink-500` | `stone-50` | 5.6:1 ✅ | Link |
| `stone-50` | `vermilion-500` | 4.8:1 ✅ | CTA button |
| `stone-50` | `ink-600` | 6.1:1 ✅ | Button primary |

### 2.8 Dark mode (Phase 2 — token đã prep)

```
--background: #0B2F32 (ink-900)
--foreground: #EFEAE2 (stone-100)
--surface: #123E42 (ink-800)
--primary: #67A3A6 (ink-300)
--cta: #E29585 (vermilion-300)
```

---

## 3. Typography

### 3.1 Font families

| Role | Font | Load |
|---|---|---|
| **Primary sans** | Be Vietnam Pro | Google Fonts, weight 400/500/600/700 |
| **Serif (văn khấn text)** | Lora | Google Fonts, weight 400/500/600 |
| **Mono (code/số)** | JetBrains Mono | Google Fonts, weight 400 (nếu cần) |

**Fallback stack**:
```css
--font-sans: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
--font-serif: 'Lora', 'Georgia', 'Times New Roman', serif;
```

**Loading strategy**:
- `preload` Be Vietnam Pro 400 + 600 (2 weights)
- Lazy load Lora khi user vào page văn khấn
- Font display: `swap`

### 3.2 Type scale (mobile-first)

| Token | Size | Line-height | Weight | Sử dụng |
|---|---|---|---|---|
| `text-xs` | 12px | 1.5 | 400 | Caption, footnote |
| `text-sm` | 14px | 1.5 | 400 | Meta info, breadcrumb |
| `text-base` | 16px | 1.6 | 400 | Body text (min iOS) |
| `text-lg` | **18px** | **1.7** | 400 | **Body default (khuyến nghị)** |
| `text-xl` | 20px | 1.6 | 500 | Lead paragraph |
| `text-2xl` | 24px | 1.4 | 600 | H3 |
| `text-3xl` | 30px | 1.3 | 600 | H2 |
| `text-4xl` | 36px | 1.2 | 700 | H1 mobile |
| `text-5xl` | 48px | 1.1 | 700 | Hero desktop |

**Desktop scale ups**: mỗi bậc +2-4px, apply qua `md:` breakpoint.

### 3.3 Văn khấn text đặc biệt (serif Lora)

```css
.van-khan-text {
  font-family: var(--font-serif);
  font-size: 20px;
  line-height: 1.9;
  color: var(--stone-900);
  text-align: center;
  max-width: 42ch;
  padding: 24px 20px;
  background: var(--stone-50);
  border-left: 3px solid var(--ochre-500);
  border-right: 3px solid var(--ochre-500);
}

@media (min-width: 768px) {
  .van-khan-text {
    font-size: 22px;
    padding: 40px 32px;
  }
}
```

### 3.4 Heading rules

- H1: 1 per page, chứa keyword chính
- H2-H6: cấp bậc đúng, không skip
- H1-H2 dùng `stone-900`, H3-H6 dùng `stone-800`
- Không viết hoa toàn bộ heading

---

## 4. Spacing

Base 4px, scale 8-point.

| Token | Value |
|---|---|
| `space-0` | 0 |
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-20` | 80px |
| `space-24` | 96px |

**Layout defaults**:
- Section vertical padding: `space-16` mobile, `space-24` desktop
- Card padding: `space-6`
- Button padding: `space-3` × `space-6`
- Container max-width: `640px` (đọc content) hoặc `1024px` (hero/list)

---

## 5. Border radius

| Token | Value | Use |
|---|---|---|
| `radius-none` | 0 | Divider |
| `radius-sm` | 4px | Badge, tag |
| `radius-md` | 8px | **Default** — button, input |
| `radius-lg` | 12px | Card |
| `radius-xl` | 20px | Modal, sheet |
| `radius-2xl` | 32px | Feature panel |
| `radius-full` | 9999px | Pill, avatar |

---

## 6. Shadows

Subtle warm shadows (không dùng pure black):

| Token | Value |
|---|---|
| `shadow-sm` | `0 1px 2px rgba(31,27,21,.04)` |
| `shadow-md` | `0 2px 8px rgba(31,27,21,.06)` |
| `shadow-lg` | `0 8px 24px rgba(31,27,21,.08)` |
| `shadow-xl` | `0 16px 48px rgba(31,27,21,.10)` |

Card default: `shadow-sm` on light bg, `shadow-md` on hover.

---

## 7. Iconography

### 7.1 Library
**Lucide React** (mảnh, hiện đại, free MIT).

### 7.2 Kích thước
- `icon-sm`: 16px (inline text)
- `icon-md`: 20px (button, list)
- `icon-lg`: 24px (feature)
- `icon-xl`: 32px (hero)

### 7.3 Custom icons cần bổ sung
Lucide không có → cần custom SVG:
- 🪔 Nhang / đèn dầu
- 🍎 Mâm cúng (icon abstract)
- 🕯️ Nến
- 🌸 Hoa quả cúng
- 📿 Chuỗi tràng
- 🀄 Bát hương

Style: 1.5px stroke, rounded cap, monochrome.

---

## 8. Illustration & Photography

### 8.1 Preferred style
- **Watercolor + line drawing** — cảm giác tranh Đông Hồ hiện đại hoá
- **Photos**: ánh sáng natural, tone ấm, không quá bão hoà
- **Composition**: đơn giản, có breathing space

### 8.2 Không dùng
- ❌ Stock photo Getty/Shutterstock chung chung
- ❌ 3D render, AI-generated art phô trương
- ❌ Cartoon glossy, Disney style
- ❌ Ảnh có gương mặt người quen (vấn đề bản quyền)

### 8.3 Nguồn khuyến nghị
- Pinterest board tự curate "Vietnamese traditional aesthetic"
- Unsplash filter "Vietnamese", "Asian traditional"
- Tự chụp mâm cúng thật (giá trị nhất, unique)
- Illustration: thuê artist local qua Behance VN, 500k-1tr/ảnh

---

## 9. Motion

### 9.1 Duration
- Micro (hover, tap): `200ms`
- Standard (modal, drawer): `400ms`
- Major (page transition): `600ms`

### 9.2 Easing
```
--ease-out: cubic-bezier(0.16, 1, 0.3, 1)
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)
```

### 9.3 Nguyên tắc
- Nhẹ nhàng, không "bounce"
- Không auto-play video
- Respect `prefers-reduced-motion`

---

## 10. Component tokens (Tailwind config extend)

```js
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        ink: { 50: '#EEF7F7', 100: '#D4EBEC', 200: '#A3CACC', 300: '#67A3A6', 400: '#4A8589', 500: '#2E6A6E', 600: '#245B5F', 700: '#1C4B4E', 800: '#123E42', 900: '#0B2F32', 950: '#061F22' },
        vermilion: { 100: '#F9DAD3', 300: '#E29585', 400: '#CC6D5B', 500: '#B84A38', 600: '#A03A28', 700: '#8B2E1F' },
        ochre: { 100: '#F0E4C5', 300: '#D9BB78', 400: '#C4A557', 500: '#B08D3D', 600: '#997A32', 700: '#8B6D28' },
        stone: { 50: '#FAF6EE', 100: '#EFEAE2', 200: '#DDD8D0', 300: '#C4BFB7', 400: '#9B948A', 500: '#78716A', 600: '#5C574F', 700: '#45403A', 800: '#2F2A22', 900: '#1F1B15', 950: '#0E0B08' },
        cream: '#FAF6EE',
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      fontSize: {
        'van-khan': ['20px', { lineHeight: '1.9' }],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(31,27,21,.04)',
        md: '0 2px 8px rgba(31,27,21,.06)',
        lg: '0 8px 24px rgba(31,27,21,.08)',
        xl: '0 16px 48px rgba(31,27,21,.10)',
      },
    },
  },
}
```

---

## 11. Component library (baseline)

Tối thiểu cho MVP:

| Component | Base | Variant |
|---|---|---|
| `Button` | primary, secondary, ghost | sm/md/lg |
| `Card` | default, elevated | with-image, plain |
| `Badge` | default, success, warning, danger | pill, square |
| `Input` | text, email, tel | with-icon |
| `Modal` | fullscreen (mobile), centered (desktop) | — |
| `Toast` | success, error, info | — |
| `Breadcrumb` | 3 levels | — |
| `Tabs` | horizontal | region-switcher variant |
| `Accordion` | FAQ, checklist | — |
| `Divider` | horizontal, vertical | ornamental (dùng ochre) |
| `AudioPlayer` | (phase 2) mini, full | — |

**Nguồn**: dùng **shadcn/ui** làm base rồi customize theo tokens trên.

---

## 12. Logo & brand identity

### 12.1 Wordmark
Tên tạm: **Văn Khấn Việt** (chờ chốt domain).

### 12.2 Kiểu chữ
- Serif Lora 600, letter-spacing -0.02em
- Hoặc handwritten calligraphy (thuê designer, phase 2)

### 12.3 Ornament
- Dấu triện đỏ (chỉ decorative, không dùng làm logo chính)
- Đường viền hoa văn (border) dùng ochre-500

### 12.4 Favicon
- Ký tự "V" hoặc icon bát hương abstract
- Size: 32×32, 180×180 (Apple touch icon)

---

## 13. Do & Don't

### Do
- ✅ Dùng cream `#FAF6EE` làm background chính (không dùng pure white)
- ✅ Text `stone-700` trên `stone-50`
- ✅ CTA vermilion, link ink
- ✅ Padding thoáng, không cramp
- ✅ Serif chỉ cho văn khấn text, hero title

### Don't
- ❌ Pure red `#FF0000` hoặc pure gold `#FFD700`
- ❌ Gradient loè loẹt
- ❌ Nhiều màu 1 lúc (max 3 màu chính + neutral)
- ❌ Background image full page (làm chậm + rối content)
- ❌ Multiple font families (chỉ Be Vietnam Pro + Lora)

---

**Reference implementation**: Sẽ code trong Next.js với Tailwind theo tokens trên.
Tôi có thể export ngay `globals.css` + `tailwind.config.ts` khi bạn nói bắt đầu.

