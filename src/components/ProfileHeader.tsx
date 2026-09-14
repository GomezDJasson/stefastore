import { profile } from '../data/profile'

export function ProfileHeader() {
  return (
    <header className="profile-header">
      <div className="profile-logo">
        <img
          src={profile.logo}
          alt={`Logo de ${profile.name}`}
        />
      </div>

      <h1>{profile.name}</h1>
      <p className="profile-description">{profile.description}</p>
      <p className="profile-tagline">{profile.tagline}</p>
    </header>
  )
}
