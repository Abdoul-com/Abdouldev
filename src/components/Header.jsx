import { useEffect, useState } from 'react';
import { sectionLinks, socialLinks } from '../data/portfolio.js';
import Brand from './Brand.jsx';

export default function Header({ menuOpen, setMenuOpen }) {
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    let animationFrame = 0;

    function updateActiveSection() {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const readingLine = window.innerHeight * 0.35;
        let current = 'accueil';

        sectionLinks.forEach(({ href }) => {
          const section = document.querySelector(href);
          if (section && section.getBoundingClientRect().top <= readingLine) {
            current = href.slice(1);
          }
        });

        setActiveSection(current);
      });
    }

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navigation principale">
        <Brand onClick={() => setMenuOpen(false)} />

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="navigation-principale"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          className={`nav-links${menuOpen ? ' is-open' : ''}`}
          id="navigation-principale"
        >
          {sectionLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                aria-current={activeSection === href.slice(1) ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          {socialLinks.whatsapp && (
            <li>
              <a
                className="nav-contact-link"
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
