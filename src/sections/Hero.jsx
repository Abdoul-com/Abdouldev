import { profile } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section className="hero section-wrap" id="accueil" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="availability">
          <span className="availability-dot" aria-hidden="true" />
          Basé à {profile.location}
        </p>
        <p className="hero-overline">{profile.title}</p>
        <h1 id="hero-title">
          Bonjour, je suis
          <span>{profile.name}</span>
        </h1>
        <p className="hero-description">
          En formation en développement web, je m’intéresse à la création de solutions
          numériques utiles, à la croisée de la programmation et de l’informatique de gestion.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projets">
            Découvrir mes projets <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-secondary" href="#contact">
            Me contacter
          </a>
        </div>
        <p className="hero-location">
          <span aria-hidden="true">⌖</span> {profile.location}
        </p>
      </div>
      <div className="hero-portrait">
        <div className="portrait-glow" aria-hidden="true" />
        <img
          src={profile.photo}
          alt={`Portrait d’${profile.name}`}
          fetchPriority="high"
          width="1024"
          height="1280"
        />
        <div className="portrait-caption">
          <span className="caption-mark" aria-hidden="true">
            ✳
          </span>
          <p>
            {profile.education}
            <span>{profile.institution}</span>
          </p>
        </div>
      </div>
      <a className="scroll-cue" href="#a-propos">
        <span aria-hidden="true">↓</span> Faire défiler
      </a>
    </section>
  );
}
