import { useEffect, useRef } from 'react'
import { drawSprite } from '../../lib/drawSprite'
import { SPRITE_PALETTE } from '../../data/sprites'
import styles from './PixelSprite.module.css'

interface PixelSpriteProps {
  sprite: string[]
  blinkSprite?: string[]
  scale: number
  bobAnimation?: 'nora-bob' | 'cat-bob'
  blinkDelay?: number
  blinkMin?: number
  blinkRange?: number
  blinkDuration?: number
}

export function PixelSprite({
  sprite,
  blinkSprite,
  scale,
  bobAnimation,
  blinkDelay = 1800,
  blinkMin = 2600,
  blinkRange = 2400,
  blinkDuration = 140,
}: PixelSpriteProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    drawSprite(canvas, sprite, SPRITE_PALETTE, scale)

    if (!blinkSprite) return

    const timers: ReturnType<typeof setTimeout>[] = []
    let cancelled = false

    function tick() {
      if (cancelled || !canvas) return
      drawSprite(canvas, blinkSprite!, SPRITE_PALETTE, scale)
      timers.push(setTimeout(() => {
        if (!cancelled) drawSprite(canvas!, sprite, SPRITE_PALETTE, scale)
      }, blinkDuration))
      timers.push(setTimeout(tick, blinkMin + Math.random() * blinkRange))
    }

    timers.push(setTimeout(tick, blinkDelay))

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [sprite, blinkSprite, scale, blinkDelay, blinkMin, blinkRange, blinkDuration])

  const animStyle = bobAnimation
    ? { animation: `${bobAnimation} ${bobAnimation === 'nora-bob' ? '2.2s' : '3s'} ease-in-out infinite` }
    : undefined

  return (
    <div style={{ display: 'inline-block', ...animStyle }}>
      <canvas ref={canvasRef} className={styles.px} />
    </div>
  )
}
