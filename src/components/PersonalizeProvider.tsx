'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { getLunarInfo, type LunarToday } from '@/lib/lunar'

interface PersonalizeState {
  ten: string
  diaChi: string
  lunar: LunarToday | null
  setTen: (v: string) => void
  setDiaChi: (v: string) => void
}

const STORAGE_KEY = 'vankhan:personalize'

const PersonalizeContext = createContext<PersonalizeState | null>(null)

export function PersonalizeProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({ ten: '', diaChi: '' })
  const [lunar, setLunar] = useState<LunarToday | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        setState({
          ten: typeof parsed.ten === 'string' ? parsed.ten : '',
          diaChi: typeof parsed.diaChi === 'string' ? parsed.diaChi : '',
        })
      }
    } catch {
      /* localStorage không khả dụng — bỏ qua, dùng giá trị rỗng */
    }
    try {
      setLunar(getLunarInfo(new Date()))
    } catch {
      /* lỗi tính ngày — để null, bài khấn giữ placeholder */
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* bỏ qua */
    }
  }, [state, loaded])

  const value: PersonalizeState = {
    ten: state.ten,
    diaChi: state.diaChi,
    lunar,
    setTen: (v) => setState((s) => ({ ...s, ten: v })),
    setDiaChi: (v) => setState((s) => ({ ...s, diaChi: v })),
  }

  return (
    <PersonalizeContext.Provider value={value}>
      {children}
    </PersonalizeContext.Provider>
  )
}

export function usePersonalize(): PersonalizeState {
  const ctx = useContext(PersonalizeContext)
  if (!ctx) {
    return {
      ten: '',
      diaChi: '',
      lunar: null,
      setTen: () => {},
      setDiaChi: () => {},
    }
  }
  return ctx
}
