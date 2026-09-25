import { useTranslation } from "react-i18next";
import ProjectsCollapsibles from "../components/ProjectsSection/ProjectsCollapsibles";


function ProjectsSection () {
    const {t} = useTranslation("global");

    return (
        <div className="body-section" id="projects_section">
        <div className="section section-container" data-aos="zoom-in-left" data-aos-duration="750"
          data-aos-anchor-placement="top-center">
          <div className="container">
            <header className="projects-section-header">
              <p className="projects-eyebrow">{t("projectsSectionHeader.eyebrow")}</p>
              <h2 className="projects-heading">{t("projectsSectionHeader.title")}</h2>
              <p className="projects-supporting-text">{t("projectsSectionHeader.supportingText")}</p>
            </header>
            <ProjectsCollapsibles projects={t("projectsSection",{returnObjects: true})}/>
          </div>
        </div>
      </div>
        
    )
}

export default ProjectsSection;
