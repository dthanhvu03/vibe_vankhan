import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const baseProps: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

export function IconBook(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

export function IconHome(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

export function IconStore(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 9l1-4h16l1 4" />
      <path d="M4 9v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
      <path d="M8 9v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9" />
    </svg>
  )
}

export function IconIncense(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3c-1 1-1 2 0 3s1 2 0 3" />
      <line x1="12" y1="10" x2="12" y2="20" />
      <path d="M7 20h10" />
      <path d="M6 22h12" />
    </svg>
  )
}

export function IconLotus(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 4v6" />
      <path d="M7 8c0 4 5 6 5 6s5-2 5-6-3-4-5-2c-2-2-5-2-5 2z" />
      <path d="M4 14c2 4 8 5 8 5s6-1 8-5c-3-1-6 1-8 3-2-2-5-4-8-3z" />
    </svg>
  )
}

export function IconWarning(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function IconChevronRight(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export function IconClock(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export function IconPrint(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  )
}

export function IconShare(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  )
}

export function IconCopy(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )
}

export function IconClose(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  )
}

export function IconUser(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export function IconLock(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
