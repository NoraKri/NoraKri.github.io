import { useMemo } from 'react'
import styles from './Sparkles.module.css'

interface SparkleConfig {
  x: number
  y: number
  size: number
  dur: string
  del: string
  rot: number
}

function generate(count: number): SparkleConfig[] {
  return Array.from({ length: count }, () => ({
    x:    1 + Math.random() * 98,
    y:    1 + Math.random() * 98,
    size: 10 + Math.floor(Math.random() * 10),
    dur:  (2.0 + Math.random() * 2.4).toFixed(2),
    del:  (-Math.random() * 4).toFixed(2),
    rot:  Math.floor(Math.random() * 4) * 22.5,
  }))
}

export function Sparkles({ count }: { count: number }) {
  const sparkles = useMemo(() => generate(count), [count])

  return (
    <div className={styles.wrap} aria-hidden="true">
      {sparkles.map((s, i) => (
        <div
          key={i}
          className={styles.star}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            transform: `translate(-50%,-50%) rotate(${s.rot}deg)`,
            color: 'var(--paper)',
          }}
        >
          <div
            className={styles.shape}
            style={{ animation: `twinkle ${s.dur}s ease-in-out ${s.del}s infinite` }}
          />
        </div>
      ))}
    </div>
  )
}
