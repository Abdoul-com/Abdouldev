import SectionHeading from '../components/SectionHeading.jsx';
import { profile } from '../data/portfolio.js';

export default function About() {
  return (
    <section className="section-wrap about-section" id="a-propos">
      <SectionHeading
        eyebrow="À propos"
        title={
          <>
            Apprendre, créer
            <br />
            et faire évoluer mes idées.
          </>
        }
      />
      <div className="about-grid">
        <div className="about-copy">
          <p>
            Je m’appelle <strong>{profile.name}</strong>. Ma formation en informatique de
            gestion m’a donné envie d’explorer la manière dont la technologie peut répondre
            aux besoins concrets des organisations.
          </p>
          <p>
            Je m’intéresse au développement web, à la programmation et aux solutions
            numériques, avec un parcours en informatique de gestion.
          </p>
          <p>
            Je souhaite continuer à progresser en réalisant des projets utiles, et m’ouvrir à
            des opportunités de stage, de collaboration et de missions freelance.
          </p>
        </div>
        <aside className="about-note">
          <span className="note-index">01 / PROFIL</span>
          <h3>Un parcours entre gestion et numérique.</h3>
          <dl>
            <div>
              <dt>Formation</dt>
              <dd>{profile.education}</dd>
            </div>
            <div>
              <dt>Établissement</dt>
              <dd>{profile.institution}</dd>
            </div>
            <div>
              <dt>Langues</dt>
              <dd>{profile.languages.join(', ')}</dd>
            </div>
            <div>
              <dt>Domaines</dt>
              <dd>{profile.domains.join(' · ')}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
