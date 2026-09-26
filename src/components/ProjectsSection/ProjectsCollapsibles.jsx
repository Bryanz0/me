import { useState } from "react";

function renderProjectImage(project, expanded = false) {
  const imageClass = expanded ? "project-expanded-media" : "project-thumbnail";

  return (
    <div className={imageClass}>
      {project.image ? <img src={project.image} alt={project.projectName} /> : <i className="fa-regular fa-image" aria-hidden="true"></i>}
    </div>
  );
}

function ProjectsCollapsibles({ projects }) {
  const sortedProjects = projects.slice().sort((a, b) => b.id - a.id);
  const [expandedId, setExpandedId] = useState(sortedProjects[0]?.id);

  return (
    <div className="projects-accordion">
      {sortedProjects.map((project) => {
        const isExpanded = expandedId === project.id;
        const panelId = `project-panel-${project.id}`;

        return (
          <article className={isExpanded ? "project-accordion-item is-expanded" : "project-accordion-item"} key={project.id}>
            <button
              type="button"
              className="project-accordion-trigger"
              onClick={() => setExpandedId(project.id)}
              aria-expanded={isExpanded}
              aria-controls={panelId}
            >
              {renderProjectImage(project)}
              <span className="project-trigger-copy">
                <span className="project-trigger-title">{project.projectName}</span>
                <span className="project-trigger-type">{project.projectType}</span>
              </span>
              <i className={isExpanded ? "fa-solid fa-chevron-up project-trigger-chevron" : "fa-solid fa-chevron-down project-trigger-chevron"} aria-hidden="true"></i>
            </button>

            <div className="project-expanded-content" id={panelId} aria-hidden={!isExpanded}>
              <div className="project-expanded-inner">
                {renderProjectImage(project, true)}
                <div className="project-main-info">
                  <p className="project-type-eyebrow">{project.projectType}</p>
                  <h3>{project.projectName}</h3>
                  <p className="project-description">{project.projectDesc}</p>
                </div>
                {project.highlights?.length > 0 && (
                  <div className="project-highlights">
                    {project.highlights.map((highlight) => (
                      <div className="project-highlight" key={highlight.text}>
                        <span className="project-highlight-icon" aria-hidden="true"><i className={highlight.icon}></i></span>
                        <p>{highlight.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProjectsCollapsibles;
