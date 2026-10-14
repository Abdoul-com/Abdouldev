import SectionHeading from '../components/SectionHeading.jsx';
import { profile } from '../data/portfolio.js';

export default function Formation() {
  return (
    <section className="section-wrap formation-section" id="formation">
      <SectionHeading
        eyebrow="Formation"
        title="Mon parcours académique."
        description="Les formations complémentaires pourront être ajoutées après vérification."
      />
      <article className="education-card">
        <span className="education-icon" aria-hidden="true">
          ↗
        </span>
        <div>
          <p className="education-label">Parcours académique</p>
          <h3>{profile.education}</h3>
          <p>{profile.institution}</p>
        </div>
        <span className="education-location">{profile.location}</span>
      </article>
    </section>
  );
}
