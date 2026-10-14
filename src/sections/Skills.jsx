import SectionHeading from '../components/SectionHeading.jsx';
import { skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section className="section-wrap skills-section" id="competences">
      <SectionHeading
        eyebrow="Compétences"
        title="Des bases à approfondir."
        description="Mes domaines d’apprentissage et d’intérêt. Les niveaux de maîtrise restent à préciser."
      />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.title}>
            <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul className="skill-tags">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
