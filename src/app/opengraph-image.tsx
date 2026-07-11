import { ImageResponse } from 'next/og'

export const alt = 'Cội Việt — Văn khấn và phong tục cúng lễ Việt Nam'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadFont(weight: number): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(
      `https://cdn.jsdelivr.net/npm/@fontsource/be-vietnam-pro/files/be-vietnam-pro-vietnamese-${weight}-normal.woff`
    )
    if (!res.ok) return null
    return await res.arrayBuffer()
  } catch {
    return null
  }
}

export default async function Image() {
  const [regular, bold] = await Promise.all([loadFont(400), loadFont(600)])
  const fonts = [
    ...(regular ? [{ name: 'BVP', data: regular, weight: 400 as const }] : []),
    ...(bold ? [{ name: 'BVP', data: bold, weight: 600 as const }] : []),
  ]

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A2623',
          fontFamily: 'BVP',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 24,
            border: '2px solid rgba(176,141,61,0.5)',
            borderRadius: 16,
          }}
        />
        <div style={{ fontSize: 26, letterSpacing: 8, color: '#C4A557', marginBottom: 18 }}>
          GIỮ NẾP NHÀ VIỆT
        </div>
        <div style={{ fontSize: 96, fontWeight: 600, color: '#F3ECDC', lineHeight: 1.1 }}>
          Cội Việt
        </div>
        <div style={{ fontSize: 34, color: '#A9C2BC', marginTop: 18, textAlign: 'center', maxWidth: 820 }}>
          Văn khấn và phong tục cúng lễ Việt Nam — chuẩn theo sách cổ
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 34 }}>
          <div style={{ width: 60, height: 1, backgroundColor: '#3A544E' }} />
          <div style={{ fontSize: 22, color: '#D9BB78' }}>miễn phí · không quảng cáo</div>
          <div style={{ width: 60, height: 1, backgroundColor: '#3A544E' }} />
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  )
}
