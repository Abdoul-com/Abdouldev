import { sectionLinks } from '../data/portfolio.js';
import Brand from './Brand.jsx';

export default function Header({ menuOpen, setMenuOpen }) {
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
              <a href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
