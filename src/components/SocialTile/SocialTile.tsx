import type { Contact } from '../../data/content'
import { SvgIcon } from '../icons/SvgIcon'
import styles from './SocialTile.module.css'

export function SocialTile({ contact }: { contact: Contact }) {
  const isExternal = !contact.href.startsWith('mailto:') && contact.href !== '#'
  return (
    <a
      className={styles.tile}
      href={contact.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <div className={styles.iconBox}>
        <SvgIcon kind={contact.kind} />
      </div>
      <div className={`mono ${styles.handle}`}>{contact.handle}</div>
    </a>
  )
}
