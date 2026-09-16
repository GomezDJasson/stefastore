import { Check, Copy, Gift } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data/profile'

export function Coupon() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const code = profile.coupon.code

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code)
      } else {
        const textArea = document.createElement('textarea')

        textArea.value = code
        textArea.style.position = 'fixed'
        textArea.style.left = '-9999px'
        textArea.style.top = '0'
        textArea.setAttribute('readonly', '')

        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()

        const copied = document.execCommand('copy')
        document.body.removeChild(textArea)

        if (!copied) {
          throw new Error('No se pudo copiar el cupón')
        }
      }

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
          className={`coupon-code ${copied ? 'coupon-copied' : ''}`}
          onClick={handleCopy}
          aria-label={
            copied
              ? 'Cupón copiado'
              : `Copiar cupón ${profile.coupon.code}`
          }
          title={copied ? '¡Copiado!' : 'Copiar cupón'}
        >
          <span>{copied ? '¡Cupón copiado!' : profile.coupon.code}</span>
          {copied ? <Check /> : <Copy />}
        </button>
      </div>
    </section>
  )
}
