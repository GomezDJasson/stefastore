import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'

export function Shopping() {
  const Icon = profile.shopping.icon

  return (
    <section
      className="shopping-section"
      aria-labelledby="shopping-title"
    >
      <p className="section-label">{profile.shopping.label}</p>

      <a
        className="shop-card"
        href={profile.shopping.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={profile.shopping.title}
      >
        <span className="shop-icon">
          <Icon />
        </span>

        <span className="shop-content">
          <strong id="shopping-title">
            {profile.shopping.title}
          </strong>

          <span>{profile.shopping.description}</span>
        </span>

        <ArrowUpRight className="shop-arrow" />
      </a>
    </section>
  )
}
