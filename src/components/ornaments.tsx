import type { SVGProps } from 'react'

type OrnamentProps = SVGProps<SVGSVGElement>

export function OrnamentCorner(props: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M2 14V6a4 4 0 0 1 4-4h8" />
      <path d="M8 8c3 0 5 2 5 5" />
    </svg>
  )
}

export function OrnamentLotus(props: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3c-1.4 1.4-1.4 3 0 4.4s1.4 3 0 4.4" />
      <path d="M12 21c-4-1-8-3.5-8-8 3-.6 5.5 1 8 4 2.5-3 5-4.6 8-4 0 4.5-4 7-8 8z" />
    </svg>
  )
}

export function SealLotus(props: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 5c-1.2 1.2-1.2 2.6 0 3.8s1.2 2.6 0 3.8" />
      <path d="M8 13c0 3 4 4.5 4 4.5s4-1.5 4-4.5-2.6-3-4-1.4C10.6 10 8 10 8 13z" />
    </svg>
  )
}

export function Mandala(props: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.8}
      aria-hidden="true"
      {...props}
    >
      <circle cx="100" cy="100" r="88" />
      <circle cx="100" cy="100" r="70" />
      <circle cx="100" cy="100" r="52" />
      <g strokeWidth={0.7}>
        <path d="M100 30c-8 8-8 16 0 24 8-8 8-16 0-24z" />
        <path d="M100 146c-8 8-8 16 0 24 8-8 8-16 0-24z" />
        <path d="M30 100c8-8 16-8 24 0-8 8-16 8-24 0z" />
        <path d="M146 100c8-8 16-8 24 0-8 8-16 8-24 0z" />
        <path d="M51 51c0 11 5 16 16 16 0-11-5-16-16-16z" />
        <path d="M149 51c0 11-5 16-16 16 0-11 5-16 16-16z" />
        <path d="M51 149c0-11 5-16 16-16 0 11-5 16-16 16z" />
        <path d="M149 149c0-11-5-16-16-16 0 11 5 16 16 16z" />
      </g>
    </svg>
  )
}

export function SealMark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center border-[1.5px] border-vermilion-500 text-vermilion-500 rounded-[5px] ${className}`}
      aria-hidden="true"
    >
      <SealLotus className="w-1/2 h-1/2" />
    </span>
  )
}
