import { useRef, useState, type ReactNode } from 'react'
import { CardShell } from '../../components/CardShell/CardShell'
import { Section } from '../../components/Section/Section'
import { PixelSprite } from '../../components/PixelSprite/PixelSprite'
import styles from './HobbyCard.module.css'

interface HobbyCardProps {
  title: string
  subtitle: string
  sprite: string[]
  tiles: ReactNode[]
}

export function HobbyCard({ title, subtitle, sprite, tiles }: HobbyCardProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [atEnd, setAtEnd]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const el = scrollerRef.current
    if (!el) return
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
    setScrolled(el.scrollLeft > 4)
  }

  const wrapCls = [
    styles.scrollerWrap,
    atEnd   ? styles.atEnd   : '',
    scrolled ? styles.scrolled : '',
  ].filter(Boolean).join(' ')

  return (
    <Section>
      <CardShell>
        <div className={styles.header}>
          <div>
            <h2 className={`coiny ${styles.title}`}>{title}</h2>
            <div className={`mono ${styles.subtitle}`}>{subtitle}</div>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.badge}>
              <PixelSprite sprite={sprite} scale={3} />
            </div>
          </div>
        </div>

        <div className={wrapCls}>
          <div ref={scrollerRef} className={styles.scroller} onScroll={handleScroll}>
            {tiles.map((tile, i) => (
              <div key={i} className={styles.cell}>
                {tile}
              </div>
            ))}
          </div>
        </div>
      </CardShell>
    </Section>
  )
}
