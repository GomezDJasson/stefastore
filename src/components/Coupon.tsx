import { Check, Copy, Gift } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data/profile'

export function Coupon() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.coupon.code)
      setCopied(true)

      window.setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="coupon-section" aria-label="Cupón de descuento">
      <div className="coupon-heading">
        <span className="section-line" />

        <p className="coupon-label">
          <Gift className="coupon-heading-icon" />
          {profile.coupon.label}
        </p>

        <span className="section-line" />
      </div>

      <div className="coupon-card">
        <div className="coupon-content">
          <strong>{profile.coupon.title}</strong>
          <span>Usa este código al realizar tu compra</span>
        </div>

        <button
          type="button"
          className="coupon-code"
          onClick={handleCopy}
          aria-label={
            copied
              ? 'Cupón copiado'
              : `Copiar cupón ${profile.coupon.code}`
          }
          title={copied ? '¡Copiado!' : 'Copiar cupón'}
        >
          <span>{profile.coupon.code}</span>
          {copied ? <Check /> : <Copy />}
        </button>
      </div>
    </section>
  )
}
