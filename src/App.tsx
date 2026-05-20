import { useEffect, useState } from 'react'
import type { Project, SewingItem } from './data/content'
import { CONTENT } from './data/content'
import { slugify } from './lib/slugify'
import { Sparkles } from './components/Sparkles/Sparkles'
import { HomePage } from './pages/home/HomePage'
import { DetailPage } from './pages/detail/DetailPage'
import styles from './App.module.css'

type Route =
  | { type: 'home' }
  | { type: 'detail'; kind: 'project'; entry: Project }
  | { type: 'detail'; kind: 'sewing';  entry: SewingItem }

function parseHash(): Route {
  const hash = location.hash.replace(/^#\/?/, '')
  if (!hash) return { type: 'home' }
  const [kind, slug] = hash.split('/')
  if (!slug) return { type: 'home' }
  if (kind === 'sewing') {
    const entry = CONTENT.sewing.find(e => slugify(e.name) === slug)
    if (entry) return { type: 'detail', kind: 'sewing', entry }
  }
  if (kind === 'project') {
    const entry = CONTENT.projects.find(e => slugify(e.name) === slug)
    if (entry) return { type: 'detail', kind: 'project', entry }
  }
  return { type: 'home' }
}

export default function App() {
  const [route, setRoute] = useState<Route>(parseHash)

  useEffect(() => {
    const handler = () => setRoute(parseHash())
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  return (
    <div className={styles.shell}>
      <Sparkles count={36} />
      <Sparkles count={16} />
      <div className={styles.content}>
        {route.type === 'detail'
          ? <DetailPage kind={route.kind} entry={route.entry} />
          : <HomePage />
        }
      </div>
    </div>
  )
}
