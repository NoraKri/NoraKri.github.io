import type { ReactNode } from 'react'
import styles from './Tile.module.css'

interface TileProps {
  name: string
  note: string
  tag?: string
  imageSlot: ReactNode
  onClick: () => void
}

export function Tile({ name, note, tag, imageSlot, onClick }: TileProps) {
  return (
    <button className={styles.tile} onClick={onClick} aria-label={name}>
      {imageSlot}
      <div className={styles.nameRow}>
        <div className={`coiny ${styles.tileName}`}>{name}</div>
        <div className={`coiny ${styles.tileArrow}`}>→</div>
      </div>
      <div className={styles.tileNote}>{note}</div>
      {tag && <div className={`mono ${styles.tileTag}`}>{tag}</div>}
    </button>
  )
}

export function SwatchImage({ color }: { color: string }) {
  return (
    <div className={styles.tileImg} style={{ background: color }}>
      <div className={styles.tileStripe} />
    </div>
  )
}

export function SpriteImage({ children }: { children: ReactNode }) {
  return (
    <div className={`${styles.tileImg} ${styles.tileImgProject}`}>
      {children}
    </div>
  )
}
