import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section className="projects-section" id="projets">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Projets"
          title="Des idées en construction."
          description="Technologies, visuels et liens seront complétés au fur et à mesure de la vérification de chaque projet."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
