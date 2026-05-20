import { CONTENT } from '../../data/content'
import { SPR_CAT, SPR_CAT_BLINK } from '../../data/sprites'
import { PixelSprite } from '../../components/PixelSprite/PixelSprite'
import { CardShell } from '../../components/CardShell/CardShell'
import { Section } from '../../components/Section/Section'
import { SocialTile } from '../../components/SocialTile/SocialTile'
import { PinIcon } from '../../components/icons/PinIcon'
import styles from './AboutCard.module.css'

export function AboutCard() {
  return (
    <Section>
      <CardShell>
        <div className={styles.grid}>
          <div className={styles.catCol}>
            <PixelSprite
              sprite={SPR_CAT}
              blinkSprite={SPR_CAT_BLINK}
              scale={4}
              bobAnimation="cat-bob"
              blinkDelay={900}
              blinkMin={3200}
              blinkRange={2600}
              blinkDuration={180}
            />
            <div className={`mono ${styles.catLabel}`}>dette er Sesam</div>
          </div>

          <div>
            <div className={styles.headingRow}>
              <h2 className={`coiny ${styles.h2}`}>Hvem er jeg?</h2>
              <div className={`mono ${styles.location}`}>
                <PinIcon />
                {CONTENT.location}
              </div>
            </div>
            <p className={styles.blurb}>{CONTENT.blurb}</p>
            <div className={styles.divider}>
              <div className={`mono ${styles.siHei}`}>si hei</div>
              <div className={styles.socialRow}>
                {CONTENT.contacts.map(c => <SocialTile key={c.kind} contact={c} />)}
              </div>
            </div>
          </div>
        </div>
      </CardShell>
    </Section>
  )
}
