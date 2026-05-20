import { CONTENT } from '../../data/content'
import { SPR_NORA, SPR_NORA_BLINK } from '../../data/sprites'
import { PixelSprite } from '../../components/PixelSprite/PixelSprite'
import styles from './Intro.module.css'

export function Intro() {
  return (
    <div className={styles.introRow}>
      <div>
        <div className={`mono ${styles.introLabel}`}>nora.kristiansen / homepage</div>
        <h1 className={`coiny ${styles.introHeadline}`}>Hei, æ e Nora.</h1>
        <div className={styles.introTagline}>{CONTENT.tagline}</div>
      </div>
      <div className={styles.introSpriteWrap}>
        <PixelSprite
          sprite={SPR_NORA}
          blinkSprite={SPR_NORA_BLINK}
          scale={5}
          bobAnimation="nora-bob"
        />
      </div>
    </div>
  )
}
