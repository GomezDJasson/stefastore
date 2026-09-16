import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="footer">
      <p>{profile.footer.copyright}</p>

      <p>
        Diseñado por{' '}
        <a
          href={profile.footer.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Gomez D. Jasson
        </a>
      </p>
    </footer>
  )
}