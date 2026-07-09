# BRD — Business Requirements Document
## Dự án: Văn Khấn Việt

**Version**: 1.0
**Ngày**: 01/07/2026
**Chủ dự án**: Solo founder / Dev
**Trạng thái**: Draft — chờ MVP validation

---

## 1. Tóm tắt điều hành (Executive Summary)

**Văn Khấn Việt** là nền tảng số hoá thư viện văn khấn và phong tục cúng lễ truyền thống Việt Nam, phục vụ người trẻ 25-40 tuổi đang phải chủ trì nghi lễ gia đình nhưng thiếu kiến thức truyền thống.

Sản phẩm giải quyết pain thật, có nhu cầu tìm kiếm ổn định (đánh giá ~500K-2M search/tháng theo mùa), và thị trường hiện tại **chưa được phục vụ tử tế** — các giải pháp có sẵn (Google, app hiện tại, YouTube) đều có chất lượng thấp, đầy quảng cáo, thiếu tin cậy.

Mục tiêu tài chính: **3-15tr VNĐ/tháng** từ mô hình freemium sau 6 tháng launch.

---

## 2. Bối cảnh & Cơ hội (Business Context)

### 2.1 Vấn đề

- Gen Y/Z (25-40 tuổi) đang phải chủ trì nghi lễ gia đình khi bố mẹ già hoặc khi lập gia đình riêng
- Họ **không biết** các văn khấn cơ bản: mùng 1, rằm, giao thừa, cúng nhà mới, đầy tháng, giỗ…
- Ngại hỏi bố mẹ nhiều lần, sợ sai (đây là chuyện tổ tiên, tâm linh — không được sai)
- Google search: SEO farm, PDF mờ, đầy ads, không rõ đúng sai, không có audio hướng dẫn
- App hiện có trên Play Store: UI xấu, spam ads, chất lượng nội dung thấp (~20 app, đa số < 4 sao)
- Chùa/thầy: phải đi, ngại, không tiện

### 2.2 Cơ hội

- Cầu **evergreen** (năm nào cũng cúng), với 2 spike lớn: Rằm tháng 7 (Vu Lan) và Tết Nguyên Đán
- Cầu **hyper-local Việt Nam** — không có nguy cơ big tech quốc tế tràn vào
- Cầu **cảm xúc + trust-based** — người dùng sẵn trả tiền cho chất lượng, không so sánh giá
- **AI paradox**: khi AI content tràn ngập, người dùng càng cần content **human-verified**, có nguồn rõ ràng
- Ngách quá nhỏ cho startup lớn / VC funding → không có big player cạnh tranh

### 2.3 Contrarian positioning

Đi ngược trend futurism (AI/Web3/global). Dùng công nghệ để **bảo tồn và số hoá văn hoá truyền thống** — mảng bị đám đông bỏ quên.

---

## 3. Mục tiêu kinh doanh (Business Objectives)

| Mục tiêu | KPI | Timeline |
|---|---|---|
| Validate demand | 20 người thật + phản hồi tích cực | Tuần 1-2 |
| Content foundation | 15 văn khấn chất lượng, có nguồn verified | Tháng 1 |
| Traffic đầu tiên | 200-500 visitor/ngày quanh Vu Lan (27/08/2026) | Tháng 2 |
| Retention | 500 email/Zalo subscription list | Tháng 3 |
| Monetize | 80 premium user × 39k = 3tr/tháng | Tháng 4-6 |
| Scale | 200-400 premium user, doanh thu 10-15tr/tháng | Tháng 12 |

---

## 4. Đối tượng người dùng (Target Users)

### 4.1 Primary persona — "Anh Minh, 32 tuổi, TP.HCM"

- Vừa mua nhà mới, chuẩn bị nhập trạch
- Vợ mới có con nhỏ, sắp cúng đầy tháng
- Bố mẹ ở quê Huế, không tiện gọi hỏi mỗi lần
- Thu nhập 20-40tr/tháng, sẵn trả 39k/tháng nếu tiện lợi
- Dùng iPhone, đọc báo trên di động, quen Zalo hơn Facebook
- **Pain lớn nhất**: sợ cúng sai, mất mặt với gia đình 2 bên

### 4.2 Secondary personas

- **Chị Hà, 28 tuổi**: mới cưới, lần đầu tổ chức cúng Tết ở nhà chồng
- **Anh Nam, 38 tuổi**: chủ shop nhỏ, cần văn khấn khai trương, cúng thần tài mùng 10 hàng tháng
- **Chị Linh, 35 tuổi**: mẹ mất, cần chuẩn bị giỗ đầu chuẩn theo miền Bắc

### 4.3 Non-users (out of scope)

- Người trên 60 tuổi (đã biết, không cần app)
- Thầy chùa / người hành nghề tâm linh (họ là nguồn tri thức, không phải khách)
- Người nước ngoài học văn hoá VN (phase sau, nếu có)

---

## 5. Success Metrics

### 5.1 North Star Metric
**Số người dùng hoàn thành 1 nghi lễ nhờ app** (đo qua: xem trang > 3 phút + click "Đánh dấu đã cúng").

### 5.2 Leading indicators
- Organic traffic (Google Search Console)
- Time on page > 3 phút
- Return visitor rate > 40%
- Email/Zalo list growth

### 5.3 Lagging indicators
- Premium conversion rate > 5%
- Monthly recurring revenue (MRR)
- Churn rate < 8%/tháng

---

## 6. Phạm vi (Scope)

### 6.1 IN SCOPE — Phase 1 (Tháng 1-3)

- Web tĩnh, mobile-first, SEO-optimized
- 15 văn khấn ưu tiên cao (danh sách chi tiết trong SRS)
- Ảnh mâm cúng chuẩn cho từng dịp
- Checklist chuẩn bị (mua gì, sắp thế nào)
- Nội dung chú thích Hán-Việt cho từ khó
- Chọn vùng miền (Bắc / Trung / Nam)
- Lịch âm dương cơ bản
- Blog SEO (top 30 keyword mục tiêu)

### 6.2 IN SCOPE — Phase 2 (Tháng 4-6)

- Audio đọc mẫu (giọng thầy, tự record hoặc thuê)
- Nhắc lịch qua email/Zalo (input số ĐT, không login)
- Video ngắn hướng dẫn sắp mâm cúng
- Premium subscription (39k/tháng, 299k/năm)
- Affiliate: mâm cúng đóng gói (partner shop)

### 6.3 IN SCOPE — Phase 3 (Tháng 7-12)

- Community Q&A (mod bởi cụ có chuyên môn)
- Booking thầy cúng qua app (marketplace)
- App mobile (React Native, nếu web đủ traction)
- Personalized reminder (theo tuổi, cung mệnh, lịch riêng)

### 6.4 OUT OF SCOPE

- ❌ Bói toán, tử vi, xem ngày tốt xấu (nhạy cảm, dễ mang tiếng mê tín)
- ❌ Bán vàng mã, đồ mê tín (không phù hợp brand)
- ❌ Content chính trị, tôn giáo tranh cãi
- ❌ Đa ngôn ngữ (chỉ tiếng Việt phase 1-3)
- ❌ Version tôn giáo cụ thể (Công giáo, Tin lành...) — chỉ tập trung tín ngưỡng dân gian + Phật giáo phổ biến

---

## 7. Ràng buộc & Giả định (Constraints & Assumptions)

### 7.1 Constraints
- **Nhân lực**: 1 người (solo founder), 15h/tháng cho project (5h freelance cho dòng tiền song song)
- **Vốn**: < 5tr VNĐ tổng cộng cho phase 1 (domain, sách, subscription tools)
- **Kỹ thuật**: chọn stack đơn giản, không tự host, không DB phase 1
- **Content**: bắt buộc nguồn verified, không được sai (rủi ro pháp lý + văn hoá)

### 7.2 Assumptions
- Search demand ổn định (chưa verify bằng Google Keyword Planner — cần làm tuần 1)
- User sẵn trả 39k/tháng cho content chất lượng (chưa verify — cần soft ask tháng 2-3)
- SEO tăng theo mùa Vu Lan + Tết (dự đoán dựa trên Google Trends)
- Không có big competitor xuất hiện trong 6 tháng (rủi ro thấp do ngách nhỏ)

---

## 8. Mô hình kinh doanh (Business Model)

### 8.1 Freemium

| Tier | Giá | Nội dung |
|---|---|---|
| **Free** | 0đ | Tất cả văn khấn text + ảnh mâm cúng cơ bản + checklist |
| **Premium** | 39k/tháng hoặc 299k/năm | + Audio thầy đọc + Video hướng dẫn + Nhắc lịch âm tự động + Chọn giọng vùng miền + Không quảng cáo |

### 8.2 Nguồn doanh thu bổ sung
- **Affiliate**: mâm cúng đóng gói, nhang đèn chất lượng (partner Shopee/vendor local) — 5-10% commission
- **Ads có kiểm soát**: chỉ hiển thị cho user free, chỉ shop đồ thờ được duyệt
- **Digital product**: eBook "Sách văn khấn toàn tập" (99k), pack PDF theo mùa (49k)
- **B2B (phase 3)**: license API cho các app khác, hoặc dịch vụ tư vấn cho brand ngành lễ nghi

### 8.3 Unit economics dự kiến (Tháng 6)

- ARPU (average revenue per user): ~35k/tháng
- CAC (customer acquisition cost): ~5k/user (organic mostly)
- LTV (lifetime value): ~500k (14 tháng retention trung bình)
- Gross margin: ~85% (chỉ tốn hosting + payment fee)

---

## 9. Roadmap tổng thể

| Tháng | Focus | Key deliverable |
|---|---|---|
| 07/2026 | Foundation | 15 văn khấn live, SEO cơ bản |
| 08/2026 | Vu Lan push | Traffic 500/ngày, TikTok/FB page |
| 09/2026 | Retention | Nhắc lịch, 500 email list, prep monetize |
| 10-11/2026 | Premium launch | 80 user × 39k = 3tr/tháng |
| 12/2026 | Tết prep | Content Tết đầy đủ, mua sắm mùa cao điểm |
| 01-02/2027 | Tết bùng nổ | Doanh thu x3, target 300+ user |
| 03-06/2027 | Scale | Marketplace, app mobile, 500+ user |

---

## 10. Rủi ro & Mitigation

| Rủi ro | Mức độ | Xử lý |
|---|---|---|
| Content sai → xúc phạm | 🔴 Cao | Nguồn verified, chéo kiểm 2-3 nguồn, disclaimer rõ, community feedback |
| SEO không lên top do Google prefer site cũ | 🟡 Trung | Tập trung long-tail keyword ít cạnh tranh, dùng schema markup, backlink từ forum |
| Không ai trả tiền cho premium | 🟡 Trung | Soft ask tháng 2-3 trước khi build premium, pivot sang affiliate/digital product nếu cần |
| Solo founder burn out | 🟡 Trung | Combo 5h freelance + 15h project, ship xấu > polish, tuần đầu tiên phải có win nhỏ |
| Cạnh tranh xuất hiện | 🟢 Thấp | Build moat qua chất lượng content + backlink + community |
| Quy định pháp luật về tâm linh | 🟢 Thấp | Chỉ làm văn khấn dân gian + Phật giáo phổ biến, tránh mê tín dị đoan |

---

## 11. Approval

- [ ] Founder confirm mục tiêu & scope
- [ ] Verify domain search volume tuần 1
- [ ] Verify demand qua 20 người thật tuần 1-2

**Next document**: [SRS.md](./SRS.md) — chi tiết technical requirements

