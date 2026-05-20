import type { ReactNode, CSSProperties } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function Section({ children, className, style }: SectionProps) {
  const cls = [styles.section, className].filter(Boolean).join(' ')
  return (
    <section className={cls} style={style}>
      {children}
    </section>
  )
}
