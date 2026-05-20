import { CONTENT } from '../../data/content'
import { SPRITE_MAP, SPR_MONITOR, SPR_SEWING, SPR_KEYBOARD } from '../../data/sprites'
import { navigate } from '../../lib/navigate'
import { Tile, SwatchImage, SpriteImage } from '../../components/Tile/Tile'
import { PixelSprite } from '../../components/PixelSprite/PixelSprite'
import { Intro } from './Intro'
import { AboutCard } from './AboutCard'
import { HobbyCard } from './HobbyCard'
import styles from './HomePage.module.css'

export function HomePage() {
  const sewingTiles = CONTENT.sewing.map(entry => (
    <Tile
      key={entry.name}
      name={entry.name}
      note={entry.note}
      tag="les mer"
      imageSlot={<SwatchImage color={entry.swatch} />}
      onClick={() => navigate('sewing', entry)}
    />
  ))

  const projectTiles = CONTENT.projects.map(entry => (
    <Tile
      key={entry.name}
      name={entry.name}
      note={entry.blurb}
      tag={`${entry.tag} · les mer`}
      imageSlot={
        <SpriteImage>
          <PixelSprite sprite={SPRITE_MAP[entry.color] ?? SPR_MONITOR} scale={6} />
        </SpriteImage>
      }
      onClick={() => navigate('project', entry)}
    />
  ))

  return (
    <>
      <Intro />
      <AboutCard />
      <HobbyCard
        title="Syrommet"
        subtitle="ting jeg har klippet, nålet og sydd ferdig"
        sprite={SPR_SEWING}
        tiles={sewingTiles}
      />
      <HobbyCard
        title="Verkstedet"
        subtitle="apper og spill jeg diller med"
        sprite={SPR_KEYBOARD}
        tiles={projectTiles}
      />
      <footer className={`mono ${styles.footer}`}>
        lagd med altfor masse kaffe · © {CONTENT.name} · {new Date().getFullYear()}
      </footer>
    </>
  )
}
