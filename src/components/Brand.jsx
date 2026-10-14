import { profile } from '../data/portfolio.js';

export default function Brand({ onClick }) {
  return (
    <a
      className="brand"
      href="#accueil"
      aria-label={`${profile.name} — Accueil`}
      onClick={onClick}
    >
      <span className="brand-mark" aria-hidden="true">
        IAW
      </span>
      <span className="brand-copy">
        <span className="brand-name">{profile.name}</span>
        <span className="brand-role">Développeur web · Cotonou, Bénin</span>
      </span>
    </a>
  );
}
