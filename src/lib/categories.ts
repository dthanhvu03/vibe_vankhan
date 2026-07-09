export type Region = 'bac' | 'trung' | 'nam'
export type Category = 'hang-thang' | 'le-tet' | 'gia-dinh' | 'kinh-doanh'

export const CATEGORY_META: Record<
  Category,
  { name: string; description: string }
> = {
  'hang-thang': {
    name: 'Hàng tháng',
    description:
      'Mùng 1, rằm, thần tài, thổ công — các dịp cúng lễ định kỳ mỗi tháng',
  },
  'le-tet': {
    name: 'Lễ Tết',
    description: 'Giao thừa, ông Táo, Vu Lan, cô hồn — lễ lớn trong năm',
  },
  'gia-dinh': {
    name: 'Gia đình',
    description:
      'Đầy tháng, thôi nôi, giỗ, cưới hỏi — sự kiện quan trọng của gia đình',
  },
  'kinh-doanh': {
    name: 'Kinh doanh',
    description:
      'Khai trương, nhập trạch, cúng đất — cho chủ shop và gia chủ mới',
  },
}
