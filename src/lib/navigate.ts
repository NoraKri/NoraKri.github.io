import { slugify } from './slugify'
import type { Project, SewingItem } from '../data/content'

export function navigate(
  kind: 'project' | 'sewing' | null,
  entry: Project | SewingItem | null,
): void {
  window.scrollTo(0, 0)
  if (!kind || !entry) {
    location.hash = '#'
  } else {
    location.hash = `#${kind}/${slugify(entry.name)}`
  }
}
