import type { ReactNode, CSSProperties } from 'react'
import styles from './CardShell.module.css'

interface CardShellProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function CardShell({ children, className, style }: CardShellProps) {
  const cls = [styles.cardShell, className].filter(Boolean).join(' ')
  return (
    <div className={cls} style={style}>
      {children}
    </div>
  )
}
