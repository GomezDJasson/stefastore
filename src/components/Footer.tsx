import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="footer">
      <a
        href={profile.footer.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {profile.footer.text}
      </a>
    </footer>
  )
}
