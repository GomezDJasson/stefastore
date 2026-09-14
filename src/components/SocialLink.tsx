import type { IconType } from 'react-icons'

interface SocialLinkProps {
  label: string
  href: string
  icon: IconType
}

export function SocialLink({
  label,
  href,
  icon: Icon,
}: SocialLinkProps) {
  const variant = `social-${label.toLowerCase()}`

  return (
    <a
      className={`social-tile ${variant}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <span className="social-icon">
        <Icon />
      </span>

      <span className="social-link-label">{label}</span>
    </a>
  )
}
