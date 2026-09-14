import { profile } from '../data/profile'
import { SocialLink } from './SocialLink'

export function SocialLinks() {
  return (
    <section className="social-section" aria-label="Redes sociales">
      <div className="social-orbit" />

      <div className="social-links">
        {profile.socialLinks.map((link) => (
          <SocialLink
            key={link.label}
            label={link.label}
            href={link.href}
            icon={link.icon}
          />
        ))}
      </div>
    </section>
  )
}
