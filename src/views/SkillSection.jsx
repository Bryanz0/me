import { useTranslation } from "react-i18next";
import skills from "../components/SkillSection/skills.json";

function SkillSection() {
  const { t } = useTranslation("global");

  return (
    <div className="body-section" id="skills_section">
      <div className="section section-container" data-aos="zoom-in-right" data-aos-duration="750" data-aos-anchor-placement="top-center">
        <div className="container">
          <header className="skills-section-header">
            <p className="skills-eyebrow">{t("skillsSection.eyebrow")}</p>
            <h2 className="skills-heading">{t("skillsSection.title")}</h2>
            <p className="skills-supporting-text">{t("skillsSection.supportingText")}</p>
          </header>

          <div className="skills-card-grid">
            {skills.map((category) => (
              <article className="skills-category-card" key={category.id}>
                <div className="skills-category-heading">
                  <span className="skills-category-icon" aria-hidden="true"><i className={category.icon}></i></span>
                  <div>
                    <h3>{category.title}</h3>
                  </div>
                </div>
                <div className="skills-chip-list" aria-label={category.title}>
                  {category.technologies.map((technology) => <span className="skills-chip" key={technology}>{technology}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
