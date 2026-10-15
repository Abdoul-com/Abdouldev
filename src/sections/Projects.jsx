import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section className="projects-section" id="projets">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Projets"
          title="Des projets, avec leur contexte."
          description="Voici les projets que je présente. Je précise leur état, leur périmètre et leurs technologies sans ajouter de résultats ou de visuels non vérifiés."
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
