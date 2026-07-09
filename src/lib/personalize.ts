export interface PersonalizeValues {
  ten: string
  diaChi: string
  thangAm: string
  namAm: string
}

const LABEL_TO_FIELD: Record<string, keyof PersonalizeValues> = {
  'Họ và tên': 'ten',
  'Địa chỉ': 'diaChi',
  'tháng âm': 'thangAm',
  'năm âm': 'namAm',
}

export const PLACEHOLDER_RE = /\[([^\]]+)\]/g

export function resolvePlaceholder(
  label: string,
  values: PersonalizeValues
): string | null {
  const field = LABEL_TO_FIELD[label.trim()]
  if (!field) return null
  const v = values[field]?.trim()
  return v ? v : null
}

export function personalizePlainText(
  text: string,
  values: PersonalizeValues
): string {
  return text.replace(PLACEHOLDER_RE, (full, label) => {
    const resolved = resolvePlaceholder(label, values)
    return resolved ?? full
  })
}
