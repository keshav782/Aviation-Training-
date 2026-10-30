import { useId } from 'react'

export default function Logo({ className = '' }) {
  const id = useId()
  const gold = `gold-${id}`

  return (
    <span className={`logo ${className}`}>
      <svg viewBox="0 0 64 64" role="img" aria-hidden="true" className="logo-mark">
        <defs>
          <linearGradient id={gold} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f3e2b3" />
            <stop offset="0.5" stopColor="#c9a45c" />
            <stop offset="1" stopColor="#8f6c26" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="30.5" fill="none" stroke={`url(#${gold})`} strokeWidth="1.4" />
        <circle cx="32" cy="32" r="27" fill="none" stroke={`url(#${gold})`} strokeWidth="0.5" />
        {[false, true].map((mirror) => (
          <g
            key={String(mirror)}
            fill={`url(#${gold})`}
            transform={mirror ? 'matrix(-1 0 0 1 64 0)' : undefined}
          >
            <path d="M29.5 29 C22 27.5 14 23.5 7.5 17 C15 19 22.5 21.5 29.5 24.5 Z" />
            <path d="M29.5 32.5 C22.5 32 15.5 30 9.5 26.5 C16 27 23 28.2 29.5 29.8 Z" />
            <path d="M29.5 36 C23.5 36.8 17.5 36.2 12 34 C17.5 33.6 23.5 33.6 29.5 34.6 Z" />
          </g>
        ))}
        <path d="M32 14 L35.2 31 L32 49 L28.8 31 Z" fill={`url(#${gold})`} />
        <path d="M32 21 L32 44" stroke="#0a0e17" strokeWidth="0.7" />
      </svg>
      <span className="logo-text">
        <b>Flywings</b>
        <i>Simulator Training Centre</i>
      </span>
    </span>
  )
}
