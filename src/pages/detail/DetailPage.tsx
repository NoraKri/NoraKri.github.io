import { useEffect } from 'react'
import type { Project, SewingItem } from '../../data/content'
import { CONTENT } from '../../data/content'
import { SPRITE_MAP, SPR_MONITOR } from '../../data/sprites'
import { navigate } from '../../lib/navigate'
import { CardShell } from '../../components/CardShell/CardShell'
import { PixelSprite } from '../../components/PixelSprite/PixelSprite'
import styles from './DetailPage.module.css'

type Entry = Project | SewingItem

function isSewing(e: Entry): e is SewingItem { return 'swatch' in e }
function isProject(e: Entry): e is Project   { return 'color'  in e }

function getSubtitle(e: Entry): string {
  return isSewing(e) ? e.note : e.blurb
}

interface DetailPageProps {
  kind: 'project' | 'sewing'
  entry: Entry
}

export function DetailPage({ kind, entry }: DetailPageProps) {
  const list: Entry[] = kind === 'sewing' ? CONTENT.sewing : CONTENT.projects
  const idx  = list.findIndex(e => e.name === entry.name)
  const prev = idx > 0              ? list[idx - 1] : null
  const next = idx < list.length - 1 ? list[idx + 1] : null
  const label = kind === 'sewing' ? 'Syrommet' : 'Verkstedet'

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Backspace') { e.preventDefault(); navigate(null, null) }
      if (e.key === 'ArrowLeft'  && prev) navigate(kind, prev)
      if (e.key === 'ArrowRight' && next) navigate(kind, next)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [kind, prev, next])

  return (
    <div>
      <div className={styles.topbar}>
        <button className={`coiny ${styles.backBtn}`} onClick={() => navigate(null, null)}>
          ← tilbake til forsiden
        </button>
        <div className={`mono ${styles.breadcrumb}`}>
          {label} / {idx + 1} av {list.length}
        </div>
      </div>

      <section style={{ marginBottom: '60px' }}>
        <CardShell>
          <div className={styles.heroGrid}>
            <div
              className={styles.heroImg}
              style={isSewing(entry) ? { background: entry.swatch } : { background: 'var(--bg-2)' }}
            >
              {isSewing(entry) && <div className={styles.heroStripe} />}
              {isProject(entry) && (
                <PixelSprite sprite={SPRITE_MAP[entry.color] ?? SPR_MONITOR} scale={12} />
              )}
            </div>

            <div>
              <div className={`mono ${styles.detailTag}`}>
                {kind === 'sewing' ? 'fra syrommet' : (isProject(entry) ? entry.tag : 'prosjekt')}
              </div>
              <h1 className={`coiny ${styles.detailH1}`}>{entry.name}</h1>
              <div className={styles.detailNote}>{getSubtitle(entry)}</div>
              <p className={styles.detailBody}>{entry.detail ?? 'Mer info kommer snart.'}</p>
            </div>
          </div>
        </CardShell>
      </section>

      <section>
        <div className={styles.prevNextGrid}>
          {prev
            ? <NavCard direction="prev" entry={prev} onNavigate={() => navigate(kind, prev)} />
            : <div />
          }
          {next
            ? <NavCard direction="next" entry={next} onNavigate={() => navigate(kind, next)} />
            : <div />
          }
        </div>
      </section>

      <footer className={`mono ${styles.detailFooter}`}>
        ← tilbake · esc · piltastene bytter prosjekt
      </footer>
    </div>
  )
}

function NavCard({
  direction,
  entry,
  onNavigate,
}: {
  direction: 'prev' | 'next'
  entry: Entry
  onNavigate: () => void
}) {
  const isPrev = direction === 'prev'
  return (
    <button
      className={`coiny ${styles.navCard} ${isPrev ? styles.prev : styles.next}`}
      aria-label={(isPrev ? 'Forrige: ' : 'Neste: ') + entry.name}
      onClick={onNavigate}
    >
      <div className={`mono ${styles.navDir}`}>{isPrev ? '← forrige' : 'neste →'}</div>
      <div className={styles.navName}>{entry.name}</div>
      <div className={styles.navNote}>{getSubtitle(entry)}</div>
    </button>
  )
}
