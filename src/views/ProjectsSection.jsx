import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme.context";
import { useTranslation } from "react-i18next";
import ProjectsCollapsibles from "../components/ProjectsSection/ProjectsCollapsibles";


function ProjectsSection () {
    const {theme} = useContext(ThemeContext);
    const {t} = useTranslation("global");

    return (
        <div className="body-section" id="projects_section">
        <div className="section" data-aos="zoom-in-left" data-aos-duration="750"
          data-aos-anchor-placement="top-center">
          <div className="container">
            <div className="columns section-div">
              <div className="column is-one-quarter is-4">
                <h2 className={"tittle-section text-color-"+theme}>{t("projectsTitle")}</h2>
              </div>
              <div className="column auto">
                <hr className={"section-line-"+theme}/>
              </div>
            </div>
            <div className="section-content">
              <div className="columns is-centered">
                <div className="column is-fullwidth">
                  <ProjectsCollapsibles projects={t("projectsSection",{returnObjects: true})}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default ProjectsSection;