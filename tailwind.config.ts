import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#EEF7F7',
          100: '#D4EBEC',
          200: '#A3CACC',
          300: '#67A3A6',
          400: '#4A8589',
          500: '#2E6A6E',
          600: '#245B5F',
          700: '#1C4B4E',
          800: '#123E42',
          900: '#0B2F32',
          950: '#061F22',
        },
        vermilion: {
          100: '#F9DAD3',
          300: '#E29585',
          400: '#CC6D5B',
          500: '#B84A38',
          600: '#A03A28',
          700: '#8B2E1F',
        },
        ochre: {
          100: '#F0E4C5',
          300: '#D9BB78',
          400: '#C4A557',
          500: '#B08D3D',
          600: '#997A32',
          700: '#8B6D28',
        },
        stone: {
          50: '#FAF6EE',
          100: '#EFEAE2',
          200: '#DDD8D0',
          300: '#C4BFB7',
          400: '#9B948A',
          500: '#78716A',
          600: '#5C574F',
          700: '#45403A',
          800: '#2F2A22',
          900: '#1F1B15',
          950: '#0E0B08',
        },
        cream: '#FAF6EE',
      },
      fontFamily: {
        sans: ['var(--font-be-vietnam-pro)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      fontSize: {
        'van-khan': ['20px', { lineHeight: '1.9', letterSpacing: '0.01em' }],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(31,27,21,.04)',
        md: '0 2px 8px rgba(31,27,21,.06)',
        lg: '0 8px 24px rgba(31,27,21,.08)',
        xl: '0 16px 48px rgba(31,27,21,.10)',
      },
      maxWidth: {
        'prose-vn': '42ch',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
