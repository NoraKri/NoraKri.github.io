const S = 28

export function SvgIcon({ kind }: { kind: string }) {
  if (kind === 'GitHub') return (
    <svg width={S} height={S} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="GitHub">
      <path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-7a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.7s-1.2-.3-3.7 1.4a13 13 0 0 0-6.6 0C5.9 1.4 4.7 1.7 4.7 1.7a5 5 0 0 0-.1 3.7A5.4 5.4 0 0 0 3 9c0 5.4 3.2 6.7 6.2 7A3 3 0 0 0 8.3 18v3" />
    </svg>
  )

  if (kind === 'LinkedIn') return (
    <svg width={S} height={S} viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn">
      <rect x="3" y="9" width="4" height="12" rx="0.5" />
      <circle cx="5" cy="5" r="2" />
      <path d="M10 9h3.8v1.8h.05a4.2 4.2 0 0 1 3.75-2C21 8.8 22 11.3 22 14.5V21h-4v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H10z" />
    </svg>
  )

  if (kind === 'Email') return (
    <svg width={S} height={S} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Email">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )

  if (kind === 'Threadloop') return (
    <svg width={S} height={S} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Threadloop">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
    </svg>
  )

  return null
}
