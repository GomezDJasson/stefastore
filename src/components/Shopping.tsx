import { ArrowUpRight, ShoppingBag } from 'lucide-react'
import { profile } from '../data/profile'

export function Shopping() {
  return (
    <section
      className="shopping-section"
      aria-labelledby="shopping-title"
    >
      <div className="shopping-heading">
        <span className="section-line" />

        <h2 id="shopping-title">
          <ShoppingBag className="shopping-heading-icon" />
          {profile.shopping.label}
        </h2>

        <span className="section-line" />
      </div>

      <a
        className="shop-card"
        href={profile.shopping.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={profile.shopping.title}
      >
        <span className="shop-art" aria-hidden="true">
          <ShoppingBag />
        </span>

        <span className="shop-content">
          <strong>{profile.shopping.title}</strong>
          <span>{profile.shopping.description}</span>
        </span>

        <ArrowUpRight className="shop-arrow" />
      </a>
    </section>
  )
}