# Content Style Guide — Văn Khấn Việt

**Version**: 1.0
**Ngày**: 01/07/2026
**Mục đích**: Đảm bảo mọi nội dung nhất quán, chính xác, và tôn trọng văn hoá.

---

## 1. Nguyên tắc gốc

1. **Không được sai** — Content sai về văn khấn = xúc phạm = chết dự án
2. **Verify từ nguồn** — Ít nhất 2 nguồn giấy trắng đen trước khi đăng
3. **Không dùng AI viết văn khấn** — chỉ chép từ nguồn verified, dịch/format lại
4. **Trung lập** — không hù dọa, không mê tín, không phán xét tín ngưỡng khác
5. **Tôn trọng** — nói về tổ tiên/thần linh với ngôn ngữ trang trọng

---

## 2. Tone of voice

### 2.1 Persona người viết
Là **anh/chị 30 tuổi có học, kính trọng truyền thống, đã tự tìm hiểu, giờ chia sẻ lại**. Không phải:
- ❌ "Thầy" phán từ trên xuống
- ❌ "Bạn trẻ" xưng "chúng mình", "các bạn ơi"
- ❌ Học giả cao siêu Hán-Nôm
- ❌ Content creator dùng "OMG", "wow", "ngã ngửa"

### 2.2 Xưng hô

**Với user**:
- ✅ Dùng "bạn" — trung tính, phù hợp 25-40
- ⚠️ Dùng "chúng ta" trong bài giải thích chung
- ❌ "Quý khách", "quý vị" — quá xa cách
- ❌ "Cô/chú/anh/chị" — không biết tuổi user
- ❌ "Mình" — quá thân mật

**Nói về đối tượng cúng**:
- ✅ "Tổ tiên", "gia tiên", "ông bà"
- ✅ "Chư vị thần linh", "các vị"
- ✅ "Đức Phật", "Bồ Tát" (khi context Phật giáo)
- ❌ Không viết tắt tên thánh, tên phật

**Nói về nghi lễ**:
- ✅ "Nghi thức truyền thống là..."
- ✅ "Theo quan niệm dân gian..."
- ✅ "Sách văn khấn cổ ghi..."
- ❌ "Nếu bạn không cúng đúng sẽ..."
- ❌ "Chắc chắn tổ tiên sẽ phù hộ nếu..."

### 2.3 Register

| Situation | Tone |
|---|---|
| Trang chủ, category | Trang trọng vừa, giới thiệu súc tích |
| Ý nghĩa nghi lễ | Kể chuyện, gần gũi |
| Văn khấn (text chính) | Nguyên văn cổ, không sửa |
| Checklist chuẩn bị | Rõ ràng, hướng dẫn cụ thể |
| FAQ | Thân thiện, đáp gọn |
| Kiêng kỵ | Nghiêm túc, giải thích logic |

---

## 3. Định dạng văn khấn (text chính)

### 3.1 Nguyên tắc

- **Không sửa từ ngữ** — chép nguyên văn từ nguồn cổ
- **Được sửa format** — xuống dòng, dấu câu để dễ đọc
- **Được thêm phiên âm/chú thích** — cho từ Hán-Việt khó, dưới dạng tooltip

### 3.2 Cấu trúc chuẩn

```
Nam mô A Di Đà Phật! (3 lần)

Kính lạy:
    - Hoàng thiên Hậu thổ chư vị Tôn thần
    - Ngài Đông trù Tư mệnh Táo phủ Thần quân
    - Các ngài Thần linh cai quản trong khu vực này

Tín chủ con là: [Họ và tên]
Ngụ tại: [Địa chỉ]

Hôm nay là ngày [Ngày] tháng [Tháng] năm [Năm] (Âm lịch).

Nhân dịp [tên dịp], tín chủ chúng con thành tâm sắm lễ,
hương hoa trà quả, thắp nén tâm hương dâng lên trước án.

Kính xin chư vị Tôn thần, gia tiên tiền tổ chứng giám,
phù hộ độ trì cho toàn gia chúng con:
    - [Lời cầu 1]
    - [Lời cầu 2]

Chúng con lễ bạc tâm thành, cúi xin được phù hộ độ trì.

Nam mô A Di Đà Phật! (3 lần, 3 lạy)
```

### 3.3 Chú thích Hán-Việt

Format inline (tooltip khi hover):
```markdown
Kính lạy [Hoàng thiên Hậu thổ](Trời cao và Đất mẹ) chư vị Tôn thần
```

Format sidebar (nếu nhiều):
> **Giải nghĩa từ khó**
> - **Hoàng thiên Hậu thổ**: Trời cao, Đất mẹ — biểu tượng trời đất
> - **Tôn thần**: các vị thần được kính trọng
> - **Táo phủ Thần quân**: Vua bếp, ông Táo

### 3.4 Không được

- ❌ Rút gọn văn khấn cổ ("cho ngắn hơn")
- ❌ Dịch văn khấn ra tiếng Việt hiện đại ("kính lạy" → "chào các vị")
- ❌ Thêm emoji trong văn khấn
- ❌ Đổi thứ tự đoạn
- ❌ Thay từ Hán-Việt bằng thuần Việt trong text gốc

### 3.5 CSS visual

Xem [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) §3.3 — `.van-khan-text` class.

---

## 4. Vùng miền (Bắc / Trung / Nam)

### 4.1 Default
**Miền Bắc** — theo sách "Văn khấn cổ truyền Việt Nam" (NXB VHTT) làm chuẩn.

### 4.2 Ghi chú khác biệt

Khi có phiên bản khác, ghi rõ:

```markdown
### Phiên bản miền Nam

Ở miền Nam, thay vì "Kính lạy Đông trù Tư mệnh Táo phủ Thần quân",
thường khấn "Kính lạy Ông Táo Bà Táo cai quản việc bếp núc..."
```

### 4.3 Không dùng
- ❌ "Người miền X hay làm sai chỗ này" — phán xét
- ❌ Trộn 3 vùng trong 1 văn khấn không ghi rõ
- ❌ Bỏ qua vùng "vì ít user" — mỗi vùng đều phải có

---

## 5. Định dạng khác

### 5.1 Ngày tháng

- **Ngày cụ thể**: `23 tháng Chạp (Âm lịch)` — luôn ghi rõ âm/dương
- **Định kỳ**: `mùng 1 hàng tháng`, `rằm hàng tháng`
- **Năm âm**: viết đầy đủ `năm Bính Thìn` hoặc `năm 2026` cho ngày dương
- **Giờ**: `giờ Ngọ (11h-13h)`

### 5.2 Số

- Số ≤ 10: viết chữ trong văn xuôi (`ba lễ vật`), số Ả Rập trong danh sách (`3 lễ vật`)
- Số > 10: luôn số Ả Rập
- Đơn vị: `39.000đ` (dấu chấm cách 3 số), `1 triệu`, `50k` (informal)

### 5.3 Danh sách

- Ưu tiên bullet ngắn gọn
- Mỗi bullet ≤ 20 từ
- Có thứ tự nếu là quy trình (`1. Trước khi cúng, 2. Trong lúc cúng, 3. Sau khi cúng`)

### 5.4 Emphasis

- **In đậm** cho từ khoá quan trọng, kiêng kỵ
- *In nghiêng* cho từ Hán-Việt, tên sách
- `Code style` cho tên biến kỹ thuật (không dùng trong content chính)

---

## 6. Ghi nguồn (Citation)

Cuối mỗi bài văn khấn:

```markdown
---

## 📖 Nguồn tham khảo

1. *Văn khấn cổ truyền Việt Nam* — NXB Văn hoá Thông tin (2018), tr. 45-47
2. *Sách Phong tục thờ cúng người Việt* — NXB Tôn Giáo (2020), chương 3

**Người review**: [Tên/Vai trò của người verified]
**Ngày review cuối**: 15/07/2026

---

*Nội dung này mang tính tham khảo. Phong tục có thể khác nhau
theo địa phương và gia đình. Người dùng cân nhắc theo tín ngưỡng cá nhân.*
```

**Không được**:
- ❌ Không ghi nguồn (mọi bài phải có ≥ 2 nguồn)
- ❌ Nguồn là "trên mạng", "sưu tầm"
- ❌ Nguồn là ChatGPT, Claude, hoặc bất kỳ AI

---

## 7. Blog content (bài giải thích, kể chuyện)

### 7.1 Cấu trúc chuẩn

```
# Tiêu đề (chứa keyword chính)

**Excerpt 2-3 câu**: giới thiệu vấn đề + hứa hẹn giá trị

## Câu chuyện mở đầu (optional, 100-200 từ)
Kể 1 tình huống thật/tưởng tượng liên quan

## Nội dung chính (chia 3-5 phần)
### Phần 1: ...
### Phần 2: ...

## Tổng kết
Súc tích, gợi ý hành động tiếp

**Bài liên quan**:
- [Link 1](/van-khan/...)
- [Link 2](/goc-phong-tuc/...)
```

### 7.2 Yêu cầu
- Min 800 từ (cho SEO)
- Có ít nhất 1 ảnh (alt text đầy đủ)
- Internal link 3-5 (đến văn khấn liên quan)
- Không quá 2 external link
- Đọc thử trên mobile trước khi publish

---

## 8. Alt text & SEO copy

### 8.1 Alt text ảnh

**Format**: mô tả cụ thể + ngữ cảnh
- ✅ "Mâm cúng mùng 1 hàng tháng gồm hoa quả, nhang, đèn, trầu cau sắp trên bàn thờ"
- ❌ "Bàn thờ" (quá chung)
- ❌ "IMG_1234" (không có nghĩa)

### 8.2 Meta title
- 50-60 ký tự
- Chứa keyword chính đầu câu
- Có brand cuối: `... | Văn Khấn Việt`

**Ví dụ**:
- ✅ "Văn khấn mùng 1 hàng tháng — Thần linh & Gia tiên | Văn Khấn Việt"

### 8.3 Meta description
- 140-160 ký tự
- Có keyword
- Có CTA nhẹ (`Xem chi tiết`, `Đọc hướng dẫn`)

**Ví dụ**:
- ✅ "Văn khấn mùng 1 hàng tháng chuẩn theo sách cổ, có ảnh mâm cúng, checklist chuẩn bị và audio đọc mẫu. Miễn phí, không quảng cáo."

---

## 9. Tabu — Không được viết

### 9.1 Nội dung cấm
- ❌ Bói toán, xem tuổi, xem ngày tốt xấu (nhạy cảm, dễ mang tiếng mê tín)
- ❌ Hù dọa ("Nếu không cúng sẽ bị...")
- ❌ Phán xét tôn giáo khác (Công giáo, Tin lành, Hồi giáo, đạo Cao Đài...)
- ❌ Content chính trị
- ❌ Quảng cáo dịch vụ tâm linh chưa verify (thầy X chữa bệnh, đền Y linh thiêng)
- ❌ Vàng mã, đồ mê tín (dù phổ biến)

### 9.2 Ngôn ngữ cấm
- ❌ "Chắc chắn", "100%", "đảm bảo linh nghiệm"
- ❌ "Trend Vu Lan năm nay", "Tết theo phong cách Gen Z"
- ❌ Slang: "xịn xò", "cà khịa", "flex"
- ❌ Emoji trong văn khấn (được dùng ở tiêu đề section)

---

## 10. Vietnamese linguistic rules

### 10.1 Chính tả

- Kiểm tra qua VietSpell hoặc Google Docs
- Đặc biệt cẩn thận: `l/n`, `s/x`, `ch/tr`, `d/gi/r`, `?/ngã`
- Không dùng teencode, viết tắt (`k`, `dc`, `ntn`)

### 10.2 Dấu câu

- Dấu chấm/phẩy đặt trước dấu ngoặc kép đóng: `"...tổ tiên chứng giám."`
- Dấu ba chấm: `...` (3 chấm), không `…` (unicode)
- Dấu gạch nối: `—` cho ngắt câu dài, `-` cho từ ghép

### 10.3 Từ Hán-Việt vs thuần Việt

| Situation | Ưu tiên |
|---|---|
| Trong văn khấn cổ | Giữ nguyên Hán-Việt |
| Trong bài giải thích | Thuần Việt nếu có |
| Trong UI (nút, label) | Thuần Việt (`Nộp` thay `Đệ trình`) |

**Ví dụ**:
- ✅ "Trong văn khấn, câu 'kính lạy chư vị' có nghĩa là 'kính lạy các vị'"
- ❌ Dịch cả văn khấn ra thuần Việt

---

## 11. Content review checklist

Trước khi publish 1 văn khấn hoặc blog:

- [ ] Đối chiếu ít nhất **2 nguồn giấy** (không chỉ web)
- [ ] Chính tả tiếng Việt kiểm tra qua Google Docs
- [ ] Đọc lại to trên loa — có mượt không, có sai dấu không
- [ ] Test đọc trên mobile — có bị cắt chữ không
- [ ] Hán-Việt annotation đúng nghĩa (double-check từng từ)
- [ ] Alt text đầy đủ cho ảnh
- [ ] Meta title + description
- [ ] Internal link 3-5 văn khấn/blog liên quan
- [ ] Nguồn tham khảo ghi rõ tên sách + trang
- [ ] Ngày review + reviewer name
- [ ] Disclaimer cuối bài
- [ ] Preview URL cuối cùng trước khi merge

---

## 12. Feedback từ user

### 12.1 Kênh nhận
- Google Form link ở footer mọi trang
- Email `bao-loi@vankhanviet.com` (setup phase 1)
- Comment section (phase 3)

### 12.2 Xử lý
- User báo sai → founder review trong 48h
- Nếu đúng → sửa ngay + note "Đã cập nhật ngày X theo phản hồi cộng đồng"
- Nếu sai → phản hồi lịch sự, giải thích nguồn

### 12.3 Không tranh cãi
Với chủ đề tín ngưỡng, cùng 1 vấn đề có thể có nhiều quan điểm đúng. Giữ vị trí:
> *"Xin ghi nhận. Đây là 1 quan điểm hợp lý. Sách/địa phương/gia đình của bạn có thể khác — cả 2 đều tôn trọng."*

---

**Update history**:
- v1.0 (01/07/2026): Bản đầu tiên

