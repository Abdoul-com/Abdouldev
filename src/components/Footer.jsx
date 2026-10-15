import { profile, sectionLinks, socialLinks } from '../data/portfolio.js';
import Brand from './Brand.jsx';

const socialLabels = {
  github: 'GitHub',
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
  whatsapp: 'WhatsApp',
  email: 'E-mail',
};

export default function Footer() {
  const availableSocialLinks = Object.entries(socialLinks).filter(([, url]) => url);

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Brand />
        <nav aria-label="Navigation de pied de page">
          {sectionLinks.map(({ href, label }) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        {availableSocialLinks.length > 0 && (
          <div className="footer-socials" aria-label="Réseaux sociaux">
            {availableSocialLinks.map(([key, url]) => (
              <a href={url} key={key} target="_blank" rel="noreferrer">
                {socialLabels[key]}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="footer-bottom">
        <p>{profile.name} · Cotonou, Bénin</p>
        <p>© {new Date().getFullYear()} — Tous droits réservés</p>
      </div>
    </footer>
  );
}
