import { profile } from './data/profile'
import { ProfileHeader } from './components/ProfileHeader'
import { SocialLinks } from './components/SocialLinks'
import { Shopping } from './components/Shopping'
import { Footer } from './components/Footer'
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
        </section>

        <Footer />
      </div>
    </main>
  )
}

export default App