import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import Formation from './sections/Formation.jsx';
import Hero from './sections/Hero.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="contenu">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Formation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
