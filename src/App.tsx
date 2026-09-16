import { profile } from './data/profile'
import { ProfileHeader } from './components/ProfileHeader'
import { SocialLinks } from './components/SocialLinks'
import { Shopping } from './components/Shopping'
import { Footer } from './components/Footer'
import { Mail } from 'lucide-react'
import './App.css'

function App() {
  const whatsappUrl = `https://wa.me/${profile.whatsapp.number}?text=${encodeURIComponent(
    profile.whatsapp.message,
  )}`

  const WhatsAppIcon = profile.contact.icon

  return (
    <main className="page">
      <div className="background-glow background-glow-one" />
      <div className="background-glow background-glow-two" />

      <div className="container">
        <ProfileHeader />

        <SocialLinks />

        <Shopping />

        <section className="contact-section" aria-label="Contacto">
          <div className="contact-heading">
            <span className="section-line" />

            <p className="contact-title">¿Quieres hablar con nosotros?</p>

            <span className="section-line" />
          </div>

          <div className="contact-buttons">
            <a
              className="whatsapp-button"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={profile.contact.label}
            >
              <WhatsAppIcon />
              <span>{profile.contact.label}</span>
            </a>

            <a
              className="email-button"
              href={`mailto:${profile.contact.email}`}
              aria-label={`Contáctanos por correo: ${profile.contact.email}`}
            >
              <Mail />
              <span>Contáctanos</span>
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}

export default App