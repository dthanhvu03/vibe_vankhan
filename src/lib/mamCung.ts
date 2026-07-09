export interface MamCungDetail {
  title: string
  detail: string
}

export const MAM_CUNG_DETAILS: Record<string, MamCungDetail> = {
  'bat-huong': {
    title: 'Bát hương',
    detail:
      'Đặt chính giữa, phía trong cùng — trái tim của bàn thờ, nơi kết nối với thần linh và gia tiên. Không xê dịch tuỳ tiện.',
  },
  den: {
    title: 'Đèn hoặc nến',
    detail:
      'Một cặp đặt hai bên bát hương, tượng trưng cho mặt trời và mặt trăng, soi đường cho hương linh về hưởng lễ.',
  },
  hoa: {
    title: 'Bình hoa',
    detail:
      'Hoa tươi có hương: huệ, cúc, sen. Không dùng hoa giả hay hoa héo. Vị trí đặt tuỳ lệ vùng miền.',
  },
  qua: {
    title: 'Mâm ngũ quả',
    detail:
      'Năm loại quả tươi (số lẻ), thể hiện lòng thành và mong ngũ phúc. Chọn quả lành lặn, không dập.',
  },
  nuoc: {
    title: 'Nước, rượu, trà',
    detail:
      'Thường 3 hoặc 5 chén nhỏ, đặt thành hàng phía trước bát hương. Nước phải sạch.',
  },
  le: {
    title: 'Mâm lễ (mặn hoặc chay)',
    detail:
      'Đặt chính giữa phía trước. Ngày thường có thể lễ chay; giỗ, Tết thường lễ mặn tuỳ gia đình. Trọng ở lòng thành.',
  },
  trau: {
    title: 'Trầu cau',
    detail:
      'Một đĩa trầu cau — "miếng trầu là đầu câu chuyện", nét lễ nghi truyền thống, đặt phía trước.',
  },
  vang: {
    title: 'Tiền vàng, sớ',
    detail:
      'Đặt một bên, hoá (đốt) sau khi hương gần tàn. Không nên đốt quá nhiều vàng mã.',
  },
}

export const MAM_CUNG_REGION_NOTES: Record<string, string> = {
  bac: 'Miền Bắc: theo lệ "Đông bình Tây quả" — bình hoa bên phải, mâm quả bên trái.',
  trung:
    'Miền Trung: cách bày giản dị, chú trọng lễ chay và hương hoa. Có thể khác theo từng vùng.',
  nam: 'Miền Nam: nhiều nơi đặt mâm ngũ quả ở giữa, thêm bình hoa hai bên. Tuỳ nếp mỗi gia đình.',
}

export const MAM_CUNG_STEPS: string[] = [
  'Ăn mặc chỉnh tề, rửa tay sạch, bày lễ vật lên bàn thờ.',
  'Thắp đèn (nến), rót nước, rượu hoặc trà.',
  'Thắp hương (1 hoặc 3 nén), vái 3 vái rồi cắm vào bát hương.',
  'Đọc văn khấn thần linh, sau đó đọc văn khấn gia tiên.',
  'Chờ hương cháy được khoảng 2/3 hoặc gần tàn.',
  'Vái tạ, hạ lễ; hoá vàng mã (nếu có) rồi rắc chút rượu lên tro.',
]
