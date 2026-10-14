export default function ProjectCard({ project, index }) {
  const hasLinks = project.github || project.demo;

  return (
    <article className="project-card">
      <div className={`project-preview preview-${index + 1}`} aria-hidden="true">
        <span className="preview-mark">{String(index + 1).padStart(2, '0')}</span>
        <span className="preview-label">{project.preview}</span>
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span className="project-category">{project.category}</span>
          <span className="status-badge">{project.status}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-tech" aria-label="Technologies du projet">
          {project.technologies.length > 0 ? (
            project.technologies.map((technology) => (
              <span className="tech-tag" key={technology}>
                {technology}
              </span>
            ))
          ) : (
            <span className="tech-pending">Technologies à préciser</span>
          )}
        </div>
        {hasLinks && (
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                Code source <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                Démonstration <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
